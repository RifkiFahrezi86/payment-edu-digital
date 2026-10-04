<#
Unggah build statis ke cPanel Rumahweb tanpa downtime:
  npm run build
  python -c "import shutil; shutil.make_archive('saku-sultan-static','zip','out')"
  .\scripts\deploy-cpanel.ps1

Zip diunggah ke /home/<user>, diekstrak ke public_html_new_<stamp>, lalu
public_html lama dipindah ke public_html_prev_<stamp> (cadangan rollback) dan
folder baru dipindah menjadi public_html. kirim-pesan.config.php ada di luar
public_html sehingga tidak tersentuh.

Password dibaca dari $env:CPANEL_PASS atau diminta lewat prompt tersamar;
tidak pernah ditulis ke disk, log, atau argumen proses.
#>
[CmdletBinding()]
param(
  [string]$CpHost = $(if ($env:CPANEL_HOST) { $env:CPANEL_HOST } else { "libra.iixwp.rumahweb.net" }),
  [string]$CpUser = $(if ($env:CPANEL_USER) { $env:CPANEL_USER } else { "saky5277" }),
  [string]$Zip = "saku-sultan-static.zip",
  [string]$SiteUrl = "https://sakusultan.id",
  [string[]]$VerifyPaths = @("/contact-us/", "/kontak/")
)

$ErrorActionPreference = "Stop"
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

$zipPath = (Resolve-Path $Zip).Path
$zipName = Split-Path $zipPath -Leaf
$home_ = "/home/$CpUser"
$base = "https://${CpHost}:2083"
$stamp = Get-Date -Format "yyyyMMdd-HHmmss"
$staging = "public_html_new_$stamp"
$backup = "public_html_prev_$stamp"

function Log([string]$msg) { Write-Host ("[{0}] {1}" -f (Get-Date -Format "HH:mm:ss"), $msg) }

# --- Login -> security token + cookie sesi -----------------------------------
if ($env:CPANEL_PASS) {
  $pass = $env:CPANEL_PASS
} else {
  $secure = Read-Host -Prompt "Password cPanel $CpUser@$CpHost" -AsSecureString
  $bstr = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($secure)
  try { $pass = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($bstr) }
  finally { [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($bstr) }
}

Log "Login ke $base ..."
try {
  $login = Invoke-WebRequest -Uri "$base/login/?login_only=1" -Method Post -Body @{ user = $CpUser; pass = $pass } `
    -SessionVariable sess -UseBasicParsing
} catch {
  throw "Login cPanel gagal (periksa host/user/password): $($_.Exception.Message)"
} finally {
  $pass = $null
}
$loginJson = $login.Content | ConvertFrom-Json
if (-not $loginJson.security_token) { throw "Login cPanel ditolak: $($login.Content)" }
$token = $loginJson.security_token
$cookieHeader = ($sess.Cookies.GetCookies([Uri]$base) | ForEach-Object { "$($_.Name)=$($_.Value)" }) -join "; "
if (-not $cookieHeader) { throw "Cookie sesi cPanel tidak diterima." }

function Invoke-Curl([string[]]$CurlArgs) {
  $raw = & curl.exe -sS --max-time 1800 -b $cookieHeader @CurlArgs
  if ($LASTEXITCODE -ne 0) { throw "curl gagal (exit $LASTEXITCODE)." }
  return ($raw -join "`n")
}

function Invoke-Uapi([string]$Fn, [string[]]$Extra) {
  $json = Invoke-Curl (@("$base$token/execute/$Fn") + $Extra) | ConvertFrom-Json
  if ($json.status -ne 1) { throw "UAPI $Fn gagal: $($json.errors -join '; ')" }
  return $json.data
}

# API2 Fileman::fileop (UAPI belum punya extract/move/unlink).
function Invoke-FileOp([string]$Op, [string]$Source, [string]$Dest) {
  $qs = "op=$Op&sourcefiles=$([Uri]::EscapeDataString($Source))"
  if ($Dest) { $qs += "&destfiles=$([Uri]::EscapeDataString($Dest))" }
  $url = "$base$token/json-api/cpanel?cpanel_jsonapi_user=$CpUser&cpanel_jsonapi_apiversion=2" +
         "&cpanel_jsonapi_module=Fileman&cpanel_jsonapi_func=fileop&$qs"
  $raw = Invoke-Curl @($url)
  $res = ($raw | ConvertFrom-Json).cpanelresult
  $failed = @($res.data | Where-Object { $_.result -ne 1 })
  if ($res.error -or $failed.Count -gt 0 -or -not $res.data) { throw "fileop $Op $Source gagal: $raw" }
}

try {
  # --- Pra-cek isi home ------------------------------------------------------
  $dirs = @(Invoke-Uapi "Fileman/list_files" @("--data-urlencode", "dir=$home_", "--data-urlencode", "types=dir") |
    ForEach-Object { $_.file })
  if ($dirs -notcontains "public_html") { throw "public_html tidak ditemukan di $home_ (isi: $($dirs -join ', '))." }
  $oldBackups = @($dirs | Where-Object { $_ -like "public_html_prev_*" } | Sort-Object)
  if ($oldBackups.Count -gt 0) { Log "Cadangan lama di server: $($oldBackups -join ', ')" }

  # --- Unggah & ekstrak ke folder staging -----------------------------------
  Log ("Mengunggah {0} ({1:N1} MB) ..." -f $zipName, ((Get-Item $zipPath).Length / 1MB))
  $up = Invoke-Uapi "Fileman/upload_files" @("-F", "dir=$home_", "-F", "file-1=@$zipPath")
  if ($up.failed -ne 0) { throw "Unggahan gagal: $($up.uploads | ConvertTo-Json -Compress)" }

  Log "Mengekstrak ke $home_/$staging ..."
  Invoke-FileOp "extract" "$home_/$zipName" "$home_/$staging"

  # Jangan tukar folder bila hasil ekstraksi tidak utuh.
  $extracted = @(Invoke-Uapi "Fileman/list_files" @("--data-urlencode", "dir=$home_/$staging") | ForEach-Object { $_.file })
  foreach ($must in @("index.html", "contact-us", "_next", "kirim-pesan.php")) {
    if ($extracted -notcontains $must) { throw "Hasil ekstraksi tidak lengkap, '$must' tidak ada di $staging (isi: $($extracted -join ', '))." }
  }

  # --- Tukar folder (downtime ~0) -------------------------------------------
  Log "public_html -> $backup"
  Invoke-FileOp "move" "$home_/public_html" "$home_/$backup"
  try {
    Log "$staging -> public_html"
    Invoke-FileOp "move" "$home_/$staging" "$home_/public_html"
  } catch {
    Log "Gagal memasang build baru, mengembalikan $backup -> public_html"
    Invoke-FileOp "move" "$home_/$backup" "$home_/public_html"
    throw
  }

  Log "Menghapus $zipName di server"
  Invoke-FileOp "unlink" "$home_/$zipName"

  # --- Verifikasi -----------------------------------------------------------
  foreach ($p in $VerifyPaths) {
    $status = & curl.exe -sS -o NUL -w "%{http_code} %{redirect_url}" "$SiteUrl$p"
    Log ("{0,-14} -> {1}" -f $p, $status)
  }
  Log "Selesai. Rollback: pindahkan $backup kembali menjadi public_html lewat File Manager."
} finally {
  $ErrorActionPreference = "Continue"
  try { & curl.exe -s -o NUL -b $cookieHeader "$base$token/logout/" } catch {}
}
