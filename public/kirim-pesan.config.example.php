<?php
/**
 * Contoh konfigurasi SMTP untuk kirim-pesan.php.
 * Salin menjadi kirim-pesan.config.php (berkas itu di-ignore Git), lalu isi
 * dengan akun email yang dibuat di cPanel sakusultan.id > Email Accounts.
 * Sesuai panduan Rumahweb: host mail.<domain>, port 465 (SSL), user = alamat email.
 */
return [
    'host' => 'mail.sakusultan.id',
    'port' => 465,
    'user' => 'noreply@sakusultan.id',
    'pass' => 'GANTI_DENGAN_PASSWORD_EMAIL',
];
