import type { ShowcaseTab } from "@/components/saku/ss-showcase-bus";

/**
 * Isi halaman detail produk (/produk/[slug]).
 *
 * Satu sumber untuk enam produk supaya rute, navigasi, dan tautan "Pelajari"
 * pada kartu fitur tidak perlu peta terpisah — slug memakai kunci tab showcase.
 */

export type ProductStep = { title: string; detail: string };
export type ProductFaq = { q: string; a: string };

export type ProductPage = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  lead: string;
  /** Berkas ilustrasi di /images/saku, hasil scripts/build-display-assets.cjs. */
  art: string;
  artAlt: string;
  /** Angka pendukung di bawah hero halaman. */
  stats: { value: string; label: string }[];
  /** Penjelasan utama, dua sampai tiga paragraf. */
  body: string[];
  steps: ProductStep[];
  benefits: { title: string; detail: string }[];
  /** Hal yang perlu diketahui sebelum memakai layanan. */
  notes: string[];
  faq: ProductFaq[];
  cta: { label: string; href: string };
};

export const PRODUCT_PAGES: Record<ShowcaseTab, ProductPage> = {
  qtra: {
    eyebrow: "QTRA — Quick Transfer",
    title: "Transfer Lebih Cepat.",
    titleAccent: "Lebih Sederhana.",
    lead: "QTRA memangkas langkah transfer yang rumit. Pilih tujuan, masukkan nominal, periksa data penerima, lalu konfirmasi — selesai dalam hitungan detik.",
    art: "/images/saku/reference-qtra.webp",
    artAlt: "Alur Quick Transfer: pilih bank, tentukan nominal dan penerima, periksa data, lalu konfirmasi",
    stats: [
      { value: "3", label: "langkah sampai selesai" },
      { value: "24/7", label: "termasuk akhir pekan" },
      { value: "Real-time", label: "lewat jaringan BI-FAST" },
    ],
    body: [
      "QTRA atau Quick Transfer adalah fitur transfer cepat pada aplikasi SAKU SULTAN yang dirancang untuk memudahkan pengguna mengirim dana secara praktis, aman, dan efisien melalui satu aplikasi.",
      "Dengan QTRA, pengguna tidak perlu melalui proses yang panjang. Cukup memilih tujuan transfer, memasukkan nominal, memeriksa kembali data penerima, lalu mengonfirmasi transaksi. Fitur ini membantu menghemat waktu dalam memenuhi kebutuhan sehari-hari.",
      "QTRA menjadi bagian dari komitmen SAKU SULTAN menghadirkan layanan keuangan digital yang mudah dipakai masyarakat — mempercepat perputaran transaksi, mendukung kegiatan usaha mitra, serta memperluas kebiasaan bertransaksi secara digital.",
    ],
    steps: [
      { title: "Pilih Tujuan", detail: "Cari bank atau masukkan nomor rekening. Tujuan yang sering dipakai tersimpan otomatis." },
      { title: "Masukkan Nominal", detail: "Ketik nominal transfer dan tambahkan berita transfer bila diperlukan." },
      { title: "Konfirmasi", detail: "Periksa nama penerima dan nominal pada halaman ringkasan, lalu konfirmasi dengan PIN." },
    ],
    benefits: [
      { title: "Proses transfer lebih cepat dan sederhana", detail: "Tidak ada langkah berbelit; alur dirancang selesai dalam tiga tahap." },
      { title: "Transaksi dapat dilakukan kapan saja", detail: "Cukup lewat ponsel, tanpa terikat jam operasional kantor cabang." },
      { title: "Mengurangi kesalahan kirim", detail: "Halaman konfirmasi menampilkan data penerima sebelum dana dikirim." },
      { title: "Riwayat tersimpan rapi", detail: "Setiap transaksi tercatat sehingga mudah diperiksa kembali." },
      { title: "Mendukung kebutuhan pribadi dan usaha", detail: "Dipakai untuk keperluan harian maupun aktivitas usaha mitra SAKU SULTAN." },
    ],
    notes: [
      "Tujuan transfer, biaya layanan, batas nominal, dan waktu pemrosesan mengikuti ketentuan resmi yang berlaku pada aplikasi SAKU SULTAN.",
      "Pastikan nama penerima pada halaman konfirmasi sudah sesuai sebelum melanjutkan.",
      "PIN dan kode OTP bersifat rahasia dan tidak pernah diminta oleh petugas SAKU SULTAN.",
    ],
    faq: [
      { q: "Apakah QTRA bisa transfer ke semua bank?", a: "QTRA melayani transfer ke bank dan e-wallet yang terdaftar pada aplikasi. Daftar tujuan yang tersedia dapat dilihat langsung saat memilih tujuan transfer." },
      { q: "Berapa lama dana sampai?", a: "Transfer melalui jaringan real-time umumnya sampai dalam hitungan detik. Waktu pemrosesan akhir mengikuti ketentuan bank tujuan." },
      { q: "Bagaimana jika salah memasukkan nomor rekening?", a: "Halaman konfirmasi menampilkan nama penerima sebelum transaksi diteruskan. Bila data tidak sesuai, batalkan dan ulangi dari langkah pertama." },
    ],
    cta: { label: "Coba QTRA", href: "#registrasi" },
  },

  passolo: {
    eyebrow: "PASSOLO — Tanda Kasih",
    title: "Tanda Kasih,",
    titleAccent: "Kini Lebih Praktis.",
    lead: "Passolo mengangkat tradisi masyarakat Sulawesi Selatan dalam memberikan sumbangan pada acara penting ke dalam bentuk digital yang mudah, aman, dan tercatat.",
    art: "/images/saku/reference-passolo.webp",
    artAlt: "Ilustrasi pernikahan dan pengiriman tanda kasih melalui Passolo",
    stats: [
      { value: "100K+", label: "tanda kasih terkirim" },
      { value: "1M+", label: "penerima merasakan manfaat" },
      { value: "4", label: "jenis momen kehidupan" },
    ],
    body: [
      "PASSOLO merupakan fitur yang mengangkat tradisi masyarakat Sulawesi Selatan dalam memberikan sumbangan atau tanda kasih pada acara penting. Kebiasaan ini dihadirkan dalam bentuk digital agar tetap hidup meski jarak memisahkan.",
      "Melalui Passolo, pengguna dapat mengirimkan tanda kasih untuk pernikahan, kegiatan pendidikan, kedukaan, hingga bantuan bencana. Prosesnya sederhana: pilih jenis momen, tentukan nominal, tambahkan pesan singkat, lalu kirim.",
      "Setiap pengiriman tercatat pada riwayat aplikasi sehingga penyelenggara acara maupun pengirim dapat menelusuri kembali aktivitasnya dengan mudah.",
    ],
    steps: [
      { title: "Pilih Momen", detail: "Tentukan jenis acara: pernikahan, pendidikan, kedukaan, atau bantuan bencana." },
      { title: "Tentukan Nominal", detail: "Masukkan jumlah tanda kasih sesuai keinginan, tanpa batas pecahan tertentu." },
      { title: "Tulis Pesan", detail: "Tambahkan ucapan singkat yang akan diteruskan bersama tanda kasih." },
      { title: "Kirim", detail: "Konfirmasi dengan PIN. Bukti pengiriman langsung tersimpan pada riwayat." },
    ],
    benefits: [
      { title: "Kirim tanda kasih untuk berbagai momen", detail: "Satu fitur untuk pernikahan, pendidikan, kedukaan, dan bantuan bencana." },
      { title: "Tetap terhubung meski tidak hadir", detail: "Perhatian tetap tersampaikan walau tidak dapat datang ke lokasi acara." },
      { title: "Riwayat tercatat", detail: "Aktivitas Passolo dapat dilihat kembali kapan saja pada aplikasi." },
      { title: "Menjaga tradisi dalam bentuk digital", detail: "Kebiasaan bergotong royong tetap hidup dengan cara yang sesuai zaman." },
    ],
    notes: [
      "Nominal minimum, biaya layanan, dan ketersediaan jenis momen mengikuti ketentuan resmi pada aplikasi SAKU SULTAN.",
      "Pesan yang ditulis bersifat opsional dan diteruskan apa adanya kepada penerima.",
    ],
    faq: [
      { q: "Apa arti Passolo?", a: "Passolo adalah istilah masyarakat Sulawesi Selatan untuk sumbangan atau tanda kasih yang diberikan pada acara penting seperti pernikahan dan kedukaan." },
      { q: "Apakah penerima harus punya aplikasi SAKU SULTAN?", a: "Ketentuan penerima mengikuti kanal penyaluran yang dipilih penyelenggara acara dan dapat dilihat saat proses pengiriman." },
      { q: "Bisakah mengirim tanpa menulis pesan?", a: "Bisa. Kolom pesan bersifat opsional dan dapat dilewati." },
    ],
    cta: { label: "Kirim Passolo", href: "#registrasi" },
  },

  transfer: {
    eyebrow: "Transfer — Semua Bank",
    title: "Kirim Uang ke Mana Saja,",
    titleAccent: "Tanpa Ribet.",
    lead: "Transfer ke bank dan e-wallet secara real-time langsung dari aplikasi. Beberapa ketukan, dana sampai tujuan.",
    art: "/images/saku/panel-transfer.webp",
    artAlt: "Transfer dari aplikasi Saku Sultan ke rekening bank, e-wallet, dan sesama pengguna",
    stats: [
      { value: "24/7", label: "tanpa jeda akhir pekan" },
      { value: "Real-time", label: "jaringan BI-FAST" },
      { value: "4", label: "jenis tujuan transfer" },
    ],
    body: [
      "Fitur Transfer SAKU SULTAN menyatukan pengiriman dana antar bank, ke e-wallet, ke sesama pengguna, dan melalui QR dalam satu tempat. Pengguna tidak perlu berpindah aplikasi untuk tujuan yang berbeda.",
      "Setiap transaksi melewati verifikasi berlapis dan menampilkan ringkasan penerima sebelum dana diteruskan. Bukti transfer tersimpan otomatis sehingga dapat dipakai sebagai catatan keuangan pribadi maupun usaha.",
      "Transfer dirancang untuk kebutuhan harian: membayar pemasok, mengirim uang ke keluarga, hingga menyelesaikan tagihan rekan usaha.",
    ],
    steps: [
      { title: "Pilih Jenis Tujuan", detail: "Antar bank, e-wallet, sesama pengguna SAKU SULTAN, atau pindai QR." },
      { title: "Masukkan Data Penerima", detail: "Nomor rekening, nomor ponsel, atau pindai kode QR penerima." },
      { title: "Tentukan Nominal", detail: "Isi nominal dan berita transfer bila diperlukan." },
      { title: "Konfirmasi", detail: "Periksa ringkasan, konfirmasi dengan PIN, lalu simpan bukti transfer." },
    ],
    benefits: [
      { title: "Real-time lewat BI-FAST", detail: "Dana diteruskan seketika pada jam operasional jaringan pembayaran nasional." },
      { title: "Verifikasi berlapis", detail: "Setiap transaksi memerlukan PIN dan menampilkan data penerima lebih dulu." },
      { title: "Bukti tersimpan otomatis", detail: "Bukti transfer dapat dibuka kembali tanpa perlu menyimpan tangkapan layar." },
      { title: "Satu aplikasi untuk semua tujuan", detail: "Bank, e-wallet, sesama pengguna, dan QR dalam satu alur yang sama." },
    ],
    notes: [
      "Biaya layanan, batas nominal harian, dan daftar bank tujuan mengikuti ketentuan resmi pada aplikasi SAKU SULTAN.",
      "Transfer ke bank tujuan di luar jam operasional jaringan diproses pada kesempatan berikutnya.",
    ],
    faq: [
      { q: "Apakah ada biaya transfer?", a: "Biaya layanan mengikuti jenis tujuan dan ketentuan yang berlaku. Nominal biaya ditampilkan pada halaman konfirmasi sebelum transaksi diteruskan." },
      { q: "Apa bedanya Transfer dengan QTRA?", a: "QTRA adalah alur cepat tiga langkah untuk tujuan yang sering dipakai. Menu Transfer menyediakan pilihan tujuan yang lebih lengkap termasuk QR dan e-wallet." },
      { q: "Bagaimana melihat bukti transfer lama?", a: "Buka menu riwayat pada aplikasi. Setiap transaksi tersimpan beserta bukti yang dapat dibagikan ulang." },
    ],
    cta: { label: "Mulai Transfer", href: "#registrasi" },
  },

  ppob: {
    eyebrow: "PPOB — Bayar & Beli",
    title: "Semua Tagihan,",
    titleAccent: "Satu Aplikasi.",
    lead: "Listrik, air, BPJS, TV kabel, pulsa, hingga paket data. Kebutuhan rumah tangga selesai dari satu tempat.",
    art: "/images/saku/panel-ppob.webp",
    artAlt: "Pembayaran pulsa, token listrik, BPJS, dan PDAM diproses dari satu aplikasi",
    stats: [
      { value: "Puluhan", label: "jenis tagihan tersedia" },
      { value: "Instan", label: "token dan pulsa langsung masuk" },
      { value: "1", label: "aplikasi untuk semua tagihan" },
    ],
    body: [
      "PPOB (Payment Point Online Bank) pada SAKU SULTAN menyatukan pembayaran tagihan rutin rumah tangga. Pengguna tidak perlu mendatangi gerai berbeda untuk listrik, air, iuran kesehatan, maupun langganan hiburan.",
      "Token listrik dan pulsa diproses seketika: nomor token atau saldo langsung dikirim setelah pembayaran berhasil. Tagihan berkala seperti PDAM dan BPJS menampilkan nominal terutang sebelum pembayaran dikonfirmasi.",
      "Bagi mitra usaha, PPOB juga menjadi sumber penghasilan tambahan — melayani pembayaran tagihan pelanggan sekitar langsung dari ponsel.",
    ],
    steps: [
      { title: "Pilih Jenis Tagihan", detail: "Listrik, air, BPJS, internet, TV kabel, pulsa, atau paket data." },
      { title: "Masukkan Nomor Pelanggan", detail: "Nomor meter, nomor pelanggan, atau nomor ponsel sesuai jenis layanan." },
      { title: "Periksa Nominal", detail: "Aplikasi menampilkan nama pelanggan dan jumlah terutang sebelum dibayar." },
      { title: "Bayar", detail: "Konfirmasi dengan PIN. Token atau bukti pembayaran langsung tersimpan." },
    ],
    benefits: [
      { title: "Pembayaran langsung terproses", detail: "Token listrik dan pulsa masuk seketika setelah transaksi berhasil." },
      { title: "Puluhan jenis tagihan", detail: "Kebutuhan rumah tangga bulanan tercakup dalam satu menu." },
      { title: "Nominal tampil sebelum bayar", detail: "Nama pelanggan dan jumlah terutang diperiksa lebih dulu." },
      { title: "Peluang penghasilan bagi mitra", detail: "Mitra dapat melayani pembayaran tagihan pelanggan di sekitarnya." },
    ],
    notes: [
      "Ketersediaan produk, biaya admin, dan jam layanan tiap penyedia mengikuti ketentuan resmi pada aplikasi SAKU SULTAN.",
      "Simpan nomor token listrik segera setelah transaksi berhasil.",
      "Periksa nomor pelanggan sebelum membayar; pembayaran yang sudah diteruskan mengikuti ketentuan penyedia layanan.",
    ],
    faq: [
      { q: "Apakah token listrik langsung masuk?", a: "Nomor token ditampilkan segera setelah pembayaran berhasil dan tersimpan pada riwayat transaksi." },
      { q: "Bagaimana jika pembayaran berhasil tapi token belum masuk?", a: "Periksa kembali menu riwayat. Bila status transaksi berhasil namun token belum diterima, hubungi layanan pelanggan dengan menyertakan nomor transaksi." },
      { q: "Apakah bisa membayar tagihan orang lain?", a: "Bisa. Cukup masukkan nomor pelanggan yang dituju; nama pelanggan akan tampil untuk diperiksa sebelum pembayaran." },
    ],
    cta: { label: "Bayar Tagihan", href: "#registrasi" },
  },

  merchant: {
    eyebrow: "Merchant — Mitra Usaha",
    title: "Kembangkan Usaha,",
    titleAccent: "Bersama Saku Sultan.",
    lead: "Terima pembayaran QRIS, pantau penjualan harian, dan tarik dana ke rekening. Perangkat yang dibutuhkan hanya ponsel.",
    art: "/images/saku/panel-merchant.webp",
    artAlt: "Konter usaha dengan standee QRIS Saku Sultan dan laporan penjualan mingguan",
    stats: [
      { value: "QRIS", label: "standar pembayaran nasional" },
      { value: "Harian", label: "laporan penjualan" },
      { value: "Fleksibel", label: "jadwal pencairan dana" },
    ],
    body: [
      "Program Merchant SAKU SULTAN membantu pelaku usaha menerima pembayaran digital tanpa perangkat khusus. Satu kode QRIS sudah dapat menerima pembayaran dari berbagai aplikasi e-wallet maupun mobile banking.",
      "Setiap transaksi tercatat pada dasbor penjualan sehingga pemilik usaha mengetahui perkembangan harian dan mingguan tanpa perlu mencatat manual. Data ini berguna saat menilai stok, jam ramai, dan produk terlaris.",
      "Pencairan dana dapat diatur sesuai kebutuhan arus kas usaha. Dengan begitu pemilik usaha tetap memegang kendali atas perputaran uangnya.",
    ],
    steps: [
      { title: "Daftar Merchant", detail: "Lengkapi data usaha dan identitas pemilik melalui aplikasi." },
      { title: "Verifikasi", detail: "Tim SAKU SULTAN memeriksa kelengkapan data sebelum akun diaktifkan." },
      { title: "Terima Pembayaran", detail: "Pasang standee QRIS di konter atau tampilkan QR dinamis per transaksi." },
      { title: "Pantau dan Cairkan", detail: "Lihat laporan penjualan, lalu tarik dana ke rekening sesuai jadwal pilihan." },
    ],
    benefits: [
      { title: "QRIS untuk semua aplikasi pembayaran", detail: "Satu kode menerima pembayaran dari e-wallet maupun mobile banking." },
      { title: "Laporan penjualan harian", detail: "Perkembangan usaha terpantau tanpa pencatatan manual." },
      { title: "Penarikan dana fleksibel", detail: "Jadwal pencairan disesuaikan dengan kebutuhan arus kas usaha." },
      { title: "Tanpa perangkat tambahan", detail: "Cukup ponsel dan standee QRIS; tidak perlu mesin khusus." },
    ],
    notes: [
      "Persyaratan pendaftaran, biaya layanan per transaksi, dan jadwal pencairan mengikuti ketentuan resmi pada aplikasi SAKU SULTAN.",
      "Data usaha yang tidak lengkap dapat memperlambat proses verifikasi.",
      "Simpan bukti setiap transaksi sebagai pembanding saat rekonsiliasi harian.",
    ],
    faq: [
      { q: "Apa saja syarat menjadi merchant?", a: "Data usaha dan identitas pemilik. Rincian persyaratan ditampilkan pada formulir pendaftaran di aplikasi." },
      { q: "Berapa lama dana masuk ke rekening?", a: "Waktu pencairan mengikuti jadwal settlement yang dipilih saat pengaturan akun merchant." },
      { q: "Apakah perlu mesin EDC?", a: "Tidak. Pembayaran diterima melalui kode QRIS yang dipasang di konter atau ditampilkan dari aplikasi." },
    ],
    cta: { label: "Daftar Merchant", href: "#registrasi" },
  },

  edudigi: {
    eyebrow: "EduDigi — Edukasi Digital",
    title: "Belajar Digital,",
    titleAccent: "Bertransaksi Aman.",
    lead: "Lembaga pendidikan dan pelatihan digital nonformal untuk membangun masyarakat yang cakap, aman, produktif, dan adaptif.",
    art: "/images/saku/reference-edudigi-showcase.webp",
    artAlt: "Belajar kapan saja dengan materi digital, rekomendasi kelas, dan sertifikat EduDigi",
    stats: [
      { value: "100K+", label: "peserta terdaftar" },
      { value: "50+", label: "modul pembelajaran" },
      { value: "4", label: "tahap legalitas kelembagaan" },
    ],
    body: [
      "EduDigi merupakan program edukasi pada aplikasi SAKU SULTAN yang dirancang untuk meningkatkan pengetahuan dan keterampilan digital para mitra serta masyarakat. Program ini menyajikan pembelajaran yang praktis dan mudah dipahami, khususnya mengenai penggunaan layanan keuangan digital secara bijak, aman, dan bertanggung jawab.",
      "Melalui EduDigi, pengguna dapat mempelajari cara bertransaksi digital, menjaga kerahasiaan PIN dan kode OTP, melindungi data pribadi, mengenali modus penipuan daring, serta memanfaatkan teknologi untuk mengembangkan usaha.",
      "Kehadiran EduDigi menegaskan bahwa SAKU SULTAN tidak hanya menyediakan layanan transaksi, tetapi juga turut membangun masyarakat yang semakin cakap dan aman di era digital.",
    ],
    steps: [
      { title: "Pahami Dasarnya", detail: "Kenali cara kerja layanan keuangan digital dan potensi pemanfaatannya." },
      { title: "Praktik dengan Pendampingan", detail: "Terapkan materi pada transaksi nyata bersama pendamping kelas." },
      { title: "Manfaatkan Peluang", detail: "Gunakan keterampilan digital untuk aktivitas usaha dan penghasilan tambahan." },
      { title: "Kembangkan Terus", detail: "Ikuti modul lanjutan dan bergabung dengan komunitas peserta." },
    ],
    benefits: [
      { title: "Materi praktis dan relevan", detail: "Disusun dengan bahasa yang mudah dipahami untuk semua kalangan." },
      { title: "Transaksi lebih aman", detail: "Pelajari cara menjaga PIN, OTP, dan data pribadi di dunia digital." },
      { title: "Mendukung produktivitas", detail: "Manfaatkan teknologi untuk aktivitas, usaha, dan masa depan yang lebih baik." },
      { title: "Komunitas aktif", detail: "Terhubung dengan peserta lain di berbagai daerah di Indonesia." },
    ],
    notes: [
      "Biaya kelas, jadwal, dan fasilitas yang disertakan mengikuti ketentuan resmi program EduDigi pada aplikasi SAKU SULTAN.",
      "Sertifikat diterbitkan setelah peserta menyelesaikan rangkaian modul kelas.",
    ],
    faq: [
      { q: "Apakah EduDigi berbayar?", a: "Program kelas EduDigi memiliki biaya pendaftaran beserta fasilitas modul dan sertifikat. Rincian terbaru ditampilkan pada halaman program di aplikasi." },
      { q: "Siapa yang dapat mengikuti?", a: "Terbuka untuk mitra SAKU SULTAN maupun masyarakat umum yang ingin meningkatkan keterampilan digital." },
      { q: "Apakah peserta mendapat sertifikat?", a: "Ya. Sertifikat diberikan setelah peserta menyelesaikan rangkaian modul pembelajaran." },
    ],
    cta: { label: "Daftar EduDigi", href: "#registrasi" },
  },
};

export const PRODUCT_SLUGS = Object.keys(PRODUCT_PAGES) as ShowcaseTab[];

/** Judul ringkas untuk navigasi antar produk di bagian bawah halaman. */
export const PRODUCT_LABELS: Record<ShowcaseTab, string> = {
  edudigi: "EduDigi",
  qtra: "Q-Tra",
  transfer: "Transfer",
  ppob: "PPOB",
  passolo: "Passolo",
  merchant: "Merchant",
};
