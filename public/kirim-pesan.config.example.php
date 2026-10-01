<?php
/**
 * Contoh konfigurasi SMTP untuk kirim-pesan.php.
 * Di hosting, simpan sebagai /home/<user>/kirim-pesan.config.php (satu level di
 * atas public_html) agar tidak hilang saat public_html diganti build baru.
 * Untuk uji lokal boleh disalin ke public/kirim-pesan.config.php (di-ignore Git).
 * Isi dengan akun email yang dibuat di cPanel sakusultan.id > Email Accounts.
 * Sesuai panduan Rumahweb: host mail.<domain>, port 465 (SSL), user = alamat email.
 */
return [
    'host' => 'mail.sakusultan.id',
    'port' => 465,
    'user' => 'noreply@sakusultan.id',
    'pass' => 'GANTI_DENGAN_PASSWORD_EMAIL',
];
