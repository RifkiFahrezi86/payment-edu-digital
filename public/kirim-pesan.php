<?php
/**
 * Penerima formulir /kontak. Dipanggil SsContactForm lewat fetch POST dan
 * meneruskan isian ke kotak masuk admin.
 *
 * Hosting Rumahweb menonaktifkan mail() PHP, jadi email dikirim lewat SMTP
 * ter-autentikasi memakai akun email domain (cPanel > Email Accounts).
 * Kredensialnya dibaca dari kirim-pesan.config.php di folder ini — tidak ikut
 * Git, salin dari kirim-pesan.config.example.php lalu isi.
 * Disalin apa adanya dari public/ ke out/ saat `next build`; tidak berjalan
 * di `next dev` (di sana formulir jatuh ke tautan mailto cadangan).
 */
declare(strict_types=1);

const PENERIMA  = 'admin@sakusultan.com';
// Harus sama dengan daftar KEPERLUAN di SsContactForm.tsx.
const KEPERLUAN = ['Permohonan penghapusan akun', 'Pertanyaan layanan', 'Masukan dan saran', 'Lainnya'];

ini_set('display_errors', '0');
date_default_timezone_set('Asia/Jakarta');
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function jawab(int $kode, array $data): void
{
    http_response_code($kode);
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

function isian(string $nama, int $maks): string
{
    $nilai = $_POST[$nama] ?? '';
    if (!is_string($nilai)) {
        return '';
    }
    $nilai = trim(str_replace(["\r\n", "\r"], "\n", $nilai));
    return mb_substr($nilai, 0, $maks);
}

/** Satu baris tanpa CR/LF dan dikodekan MIME agar aman dipakai di header email. */
function header_mime(string $teks): string
{
    $teks = preg_replace('/[\r\n\t]+/', ' ', $teks);
    return '=?UTF-8?B?' . base64_encode($teks) . '?=';
}

/**
 * Kirim satu email teks lewat SMTP (AUTH LOGIN di atas SSL, port 465 sesuai
 * panduan Rumahweb). Mengembalikan null bila sukses, atau keterangan kegagalan
 * untuk error_log. Pengirim = akun SMTP agar diterima Exim cPanel.
 */
function smtp_kirim(array $smtp, string $ke, string $subjek, string $isi, string $balasKe): ?string
{
    $user   = (string) $smtp['user'];
    $errno  = 0;
    $errstr = '';
    $fp = @stream_socket_client('ssl://' . $smtp['host'] . ':' . $smtp['port'], $errno, $errstr, 15);
    if ($fp === false) {
        return "koneksi ke {$smtp['host']}:{$smtp['port']} gagal: $errstr ($errno)";
    }
    stream_set_timeout($fp, 15);

    // Satu balasan server bisa beberapa baris "250-..." yang ditutup "250 ...".
    $balasan = static function () use ($fp): string {
        $teks = '';
        while (($baris = fgets($fp, 1024)) !== false) {
            $teks .= $baris;
            if (!isset($baris[3]) || $baris[3] !== '-') {
                break;
            }
        }
        return trim($teks) !== '' ? trim($teks) : '(tidak ada balasan)';
    };

    // Isi dikodekan base64 supaya baris pendek dan karakter apa pun aman dikirim.
    $pesan = implode("\r\n", [
        'Date: ' . date('r'),
        'From: Formulir Kontak Saku Sultan <' . $user . '>',
        'To: <' . $ke . '>',
        'Reply-To: ' . $balasKe,
        'Subject: ' . $subjek,
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: base64',
        '',
        rtrim(chunk_split(base64_encode($isi), 76, "\r\n")),
    ]);

    // [label untuk log, perintah (null = hanya tunggu salam), kode balasan yang diharapkan]
    $langkah = [
        ['salam',      null,                                   220],
        ['EHLO',       'EHLO ' . (gethostname() ?: 'localhost'), 250],
        ['AUTH',       'AUTH LOGIN',                           334],
        ['AUTH user',  base64_encode($user),                   334],
        ['AUTH sandi', base64_encode((string) $smtp['pass']),  235],
        ['MAIL FROM',  'MAIL FROM:<' . $user . '>',            250],
        ['RCPT TO',    'RCPT TO:<' . $ke . '>',                250],
        ['DATA',       'DATA',                                 354],
        ['isi pesan',  $pesan . "\r\n.",                      250],
    ];
    foreach ($langkah as [$label, $perintah, $kodeOk]) {
        if ($perintah !== null) {
            fwrite($fp, $perintah . "\r\n");
        }
        $teks = $balasan();
        if ((int) substr($teks, 0, 3) !== $kodeOk) {
            fclose($fp);
            return "SMTP gagal pada langkah $label: $teks";
        }
    }
    fwrite($fp, "QUIT\r\n");
    fclose($fp);
    return null;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    jawab(405, ['ok' => false, 'error' => 'Metode tidak diizinkan.']);
}

// Honeypot: kolom tersembunyi yang hanya diisi bot; dibalas sukses agar bot berhenti.
if (isian('situs', 10) !== '') {
    jawab(200, ['ok' => true]);
}

$nama      = isian('nama', 100);
$email     = isian('email', 254);
$keperluan = isian('keperluan', 60);
$telepon   = isian('telepon', 20);
$pesan     = isian('pesan', 3000);

if (mb_strlen($nama) < 2) {
    jawab(400, ['ok' => false, 'error' => 'Nama wajib diisi (minimal 2 karakter).']);
}
if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
    jawab(400, ['ok' => false, 'error' => 'Alamat email tidak valid.']);
}
if (!in_array($keperluan, KEPERLUAN, true)) {
    jawab(400, ['ok' => false, 'error' => 'Pilih keperluan yang tersedia.']);
}
if ($telepon !== '' && !preg_match('/^[0-9+()\-.\s]{6,20}$/', $telepon)) {
    jawab(400, ['ok' => false, 'error' => 'Nomor ponsel tidak valid.']);
}
if (mb_strlen($pesan) < 10) {
    jawab(400, ['ok' => false, 'error' => 'Pesan wajib diisi (minimal 10 karakter).']);
}

$isi = implode("\n", [
    'Pesan baru dari formulir kontak sakusultan.id',
    '',
    'Nama       : ' . $nama,
    'Email      : ' . $email,
    'Keperluan  : ' . $keperluan,
    'No. ponsel : ' . ($telepon !== '' ? $telepon : '-'),
    '',
    'Pesan:',
    $pesan,
    '',
    '--',
    'Dikirim ' . date('d M Y H:i') . ' WIB dari IP ' . ($_SERVER['REMOTE_ADDR'] ?? '-'),
]);

$smtp = @include __DIR__ . '/kirim-pesan.config.php';
if (!is_array($smtp) || empty($smtp['host']) || empty($smtp['port']) || empty($smtp['user']) || empty($smtp['pass'])) {
    error_log('kirim-pesan: kirim-pesan.config.php belum ada atau belum lengkap');
    jawab(500, ['ok' => false, 'error' => 'Pengiriman pesan belum dikonfigurasi. Silakan kirim lewat email.']);
}

$subjek  = header_mime('[Kontak Web] ' . $keperluan . ' — ' . $nama);
$balasKe = header_mime($nama) . ' <' . $email . '>';

$gagal = smtp_kirim($smtp, PENERIMA, $subjek, $isi, $balasKe);
if ($gagal !== null) {
    error_log('kirim-pesan: ' . $gagal);
    jawab(500, ['ok' => false, 'error' => 'Pesan belum bisa dikirim. Silakan coba lagi atau kirim lewat email.']);
}

jawab(200, ['ok' => true]);
