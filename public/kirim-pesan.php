<?php
/**
 * Penerima formulir /kontak. Dipanggil SsContactForm lewat fetch POST dan
 * meneruskan isian ke kotak masuk admin melalui mail() server cPanel.
 * Disalin apa adanya dari public/ ke out/ saat `next build`; tidak berjalan
 * di `next dev` (di sana formulir jatuh ke tautan mailto cadangan).
 */
declare(strict_types=1);

const PENERIMA  = 'admin@sakusultan.com';
// Alamat domain sendiri agar lolos SPF server; balasan diarahkan ke pengunjung via Reply-To.
const PENGIRIM  = 'noreply@sakusultan.id';
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

$headers = implode("\r\n", [
    'From: Formulir Kontak Saku Sultan <' . PENGIRIM . '>',
    'Reply-To: ' . header_mime($nama) . ' <' . $email . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
]);

$subjek = header_mime('[Kontak Web] ' . $keperluan . ' — ' . $nama);

if (!mail(PENERIMA, $subjek, $isi, $headers, '-f' . PENGIRIM)) {
    jawab(500, ['ok' => false, 'error' => 'Pesan belum bisa dikirim. Silakan coba lagi atau kirim lewat email.']);
}

jawab(200, ['ok' => true]);
