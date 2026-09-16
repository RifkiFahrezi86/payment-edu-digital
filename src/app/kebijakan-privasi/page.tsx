"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@/components/payway/pw-icons";
import { PwHeroNavigation } from "@/components/payway/PwHeroNavigation";
import { PwCtaFooter } from "@/components/payway/PwCtaFooter";
import { PwWhatsappButton } from "@/components/payway/PwWhatsappButton";
import { PwReveal } from "@/components/payway/pw-reveal";
import { PwEyebrow } from "@/components/payway/pw-eyebrow";

interface Entry {
  label?: string;
  text?: ReactNode;
  children?: Entry[];
}

interface PolicySection {
  title: string;
  paragraph?: string;
  entries?: Entry[];
}

const INTRO_PARAGRAPHS = [
  "Kebijakan Privasi ini menjelaskan mengenai Pemrosesan Data Pribadi Anda yang diberlakukan oleh Kami untuk melindungi Data Pribadi Anda yang digunakan dan dikelola oleh Kami. Daftar Isi di bawah ini memuat ketentuan-ketentuan yang diatur dalam Kebijakan Privasi ini.",
  "Kebijakan Privasi ini berlaku bagi Anda yang menggunakan layanan atau fasilitas yang Kami sediakan dalam Aplikasi dan website Kami; bagi Anda yang telah terdaftar sebagai Pengguna; bagi Anda yang sedang melakukan pembuatan akun keanggotaan layanan Kami (registrasi/sign up) untuk menjadi Pengguna.",
  "Mohon baca Kebijakan Privasi ini dengan seksama untuk memastikan bahwa Anda memahami ketentuan seputar Pemrosesan Data Pribadi Anda yang Kami lakukan.",
];

const SECTIONS: PolicySection[] = [
  {
    title: "I. DEFINISI",
    paragraph:
      "Kecuali didefinisikan lain dalam Kebijakan Privasi ini, semua istilah dengan huruf kapital yang digunakan dalam Kebijakan Privasi ini memiliki arti sebagai berikut:",
    entries: [
      { text: "\u201cAnda\u201d dapat merujuk pada anda sebagai Pengguna, Merchant, atau calon Merchant yang sedang dalam proses Pendaftaran." },
      { text: "\u201cAplikasi\u201d adalah SAKU SULTAN App dan Aplikasi Merchant." },
      { text: "\u201cReferal/Afiliasi\u201d adalah ekosistem yang anda rekomendasikan untuk bergabung bersama kami." },
      { text: "\u201cAplikasi SAKU SULTAN\u201d atau \u201cSAKU SULTAN App\u201d adalah mobile application yang disediakan untuk penyediaan layanan-layanan Kami kepada Pengguna." },
      { text: "\u201cData Anonim\u201d adalah data dan informasi, termasuk Data Pribadi Anda, yang tidak lagi mengandung data-data yang dapat diidentifikasikan kepada Anda di dalamnya karena data yang mengandung identifikasi Anda telah dihapus" },
      { text: "\u201cData Pribadi\u201d adalah setiap data yang mengidentifikasikan atau dapat digunakan untuk mengidentifikasi, menghubungi, atau dalam kombinasi dengan informasi lain, secara langsung atau tidak langsung, dalam sistem elektronik dan/atau non-elektronik Kami." },
      { text: "\u201cData Pribadi Spesifik/Sensitif\u201d adalah Data Pribadi yang bersifat sensitif dan membutuhkan tingkat perlindungan yang spesifik dan lebih tinggi dibandingkan perlindungan terhadap Data Pribadi lainnya sesuai dengan hukum dan peraturan yang berlaku, khususnya rincian rekening bank, informasi keuangan pribadi, dan data transaksi Anda yang digabungkan dengan atau berisi Data Pribadi." },
      { text: "\u201cData Pribadi Umum\u201d adalah Data Pribadi yang bersifat umum dan tidak masuk ke dalam kategori Data Pribadi Spesifik/Sensitif, termasuk namun tidak terbatas pada; nama lengkap, nama gadis ibu, jenis kelamin, alamat, tempat dan tanggal lahir, nomor telepon, alamat email, pekerjaan, alamat IP, data geo-lokasi, pengenal perangkat unik, foto, nomor tanda pengenal yang diterbitkan oleh Otoritas Berwenang (seperti, antara lain; Kartu Tanda Penduduk (KTP), Surat Ijin Mengemudi (SIM) atau paspor), kewarganegaraan, tanda tangan, serta profil dan nomor pengenal unik yang Kami keluarkan untuk Anda yang terkait dengan Data Pribadi Anda." },
      { text: "\u201cKami\u201d adalah PT Ide Kreatif Asia yang merupakan penerbit uang elektronik berbasis server yang dikenal dengan nama \u201cSAKU SULTAN\u201d." },
      { text: "\u201cKerja Sama Penerimaan Transaksi\u201d atau disingkat \u201cKerja Sama\u201d adalah kerja sama yang disepakati oleh dan antara Merchant dan Kami untuk tujuan membuat Merchant dapat melakukan penerimaan Transaksi." },
      { text: "\u201cKontak Kami\u201d adalah sarana yang dapat Anda gunakan untuk menghubungi Kami guna keperluan penerapan Kebijakan Privasi ini." },
      { text: "\u201cOtoritas Berwenang\u201d adalah lembaga atau instansi yang memiliki wewenang berdasarkan peraturan perundang-undangan yang berlaku, termasuk namun tidak terbatas pada; kementerian, lembaga non departemen, pengadilan, dan aparat penegak hukum." },
      { text: "\u201cSAKU SULTAN Merchant\u201d atau disingkat \u201cMerchant\u201d adalah pedagang yang memiliki Kerja Sama dengan Kami." },
      { text: "\u201cPemusnahan\u201d adalah kegiatan yang bertujuan untuk menghilangkan Data Pribadi Anda, baik seutuhnya atau sebagian, dalam sistem elektronik dan nonelektronik Kami yang tidak dapat diakses kembali di kemudian hari." },
      { text: "\u201cPengguna\u201d adalah pengguna SAKU SULTAN App atau pengguna atau pemegang instrumen pembayaran yang diterbitkan oleh Kami." },
      { text: "\u201cPenghapusan\u201d adalah kegiatan yang bertujuan untuk membatasi penggunaan Data Pribadi Anda, baik seutuhnya atau sebagian, dalam sistem elektronik dan nonelektronik Kami yang dapat diakses kembali di kemudian hari untuk tujuan-tujuan yang ditetapkan dalam Kebijakan Privasi ini. Pembatasan terhadap penggunaan Data Pribadi Anda dapat terjadi atas dasar permohonan penonaktifan akun (blokir) dan/atau penutupan akun Anda sesuai dengan kesepakatan antara Anda dan Kami." },
      { text: "\u201cPenyelenggara Pembayaran Lain\u201d adalah pihak-pihak yang berwenang dalam pemrosesan transaksi pembayaran atas suatu transaksi yang dilakukan dengan menggunakan instrumen pembayaran yang tidak diterbitkan oleh Kami, seperti antara lain; penerbit instrumen pembayaran lain yang instrumen pembayarannya digunakan dalam transaksi pembayaran, dan penyelenggara jasa sistem pembayaran lainnya yang terlibat dalam pemrosesan transaksi tersebut." },
      { text: "\u201cPihak Ketiga\u201d adalah pihak-pihak, seperti, antara lain; Otoritas Berwenang, mitra-mitra Kami, kontraktor, vendor, agen, perusahaan afiliasi Kami, dan/atau Penyelenggara Pembayaran Lain." },
      { text: "\u201cTransaksi\u201d adalah transaksi pembayaran non-tunai untuk pembayaran dengan menggunakan instrumen pembayaran yang Kami terbitkan ataupun instrumen pembayaran lain yang diterbitkan oleh Penyelenggara Pembayaran Lain." },
    ],
  },
  {
    title: "II. PEROLEHAN DAN PENGUMPULAN DATA PRIBADI",
    entries: [
      {
        text: "Kami memperoleh dan mengumpulkan Data Pribadi Anda, baik Data Pribadi Umum maupun Data Pribadi Spesifik/Sensitif, dengan cara berikut:",
        children: [
          {
            text: "penyerahan secara langsung oleh Anda, seperti, antara lain:",
            children: [
              { text: "pada saat Anda melakukan pembuatan akun keanggotaan layanan Kami (registrasi/sign up);" },
              { text: "pada saat Anda melakukan Pendaftaran, jika Anda merupakan calon Merchant atau Merchant;" },
              { text: "pada saat Anda menghubungi Kontak Kami; dan" },
              { text: "pada saat Anda melakukan pemutakhiran (update) atas Data Pribadi Anda yang sebelumnya telah disimpan oleh Kami;" },
            ],
          },
          {
            text: "perolehan dan pengumpulan secara otomatis dari aktivitas-aktivitas yang Anda lakukan pada SAKU SULTAN App, website Kami atau penggunaan layanan atau fasilitas yang Kami sediakan, khususnya:",
            children: [
              { text: "pada saat Anda menggunakan layanan-layanan Kami yang Kami sediakan pada SAKU SULTAN App, dan" },
              { text: "pada saat Anda menggunakan fasilitas-fasilitas Kami yang Kami sediakan pada aplikasi lainnya yang menyediakan fasilitas-fasilitas yang Kami sediakan;" },
            ],
          },
          { text: "perolehan dan pengumpulan secara otomatis dari pelaksanaan Transaksi yang Anda lakukan, jika Anda merupakan Pengguna;" },
          { text: "perolehan dan pengumpulan dari Pihak Ketiga yang menyimpan Data Pribadi Anda; dan" },
          { text: "perolehan dan pengumpulan dengan cara lainnya dan dari sumber manapun sebagaimana tersedia dan sepanjang tidak dilarang oleh peraturan perundang-undangan yang berlaku." },
        ],
      },
      { text: "Anda dengan ini mengetahui dan setuju untuk menyediakan dan mengizinkan Kami untuk memperoleh dan mengumpulkan Data Pribadi Anda dan/atau data atau informasi terkait lainnya dengan cara yang dimaksud pada ayat (1) di atas untuk tujuan-tujuan yang ditetapkan dalam Kebijakan Privasi ini." },
      { text: "Anda wajib selalu memastikan bahwa Data Pribadi yang Anda serahkan kepada Kami adalah Data Pribadi yang benar, lengkap, akurat, dan tidak menyesatkan. Anda harus memberitahukan Kami apabila terdapat perubahan pada Data Pribadi Anda sebelum perubahan tersebut berlaku efektif, atau sesuai ketentuan yang diatur dalam perjanjian yang Anda sepakati dengan Kami yang mengatur mengenai perubahan Data Pribadi, seperti, antara lain: nomor rekening bank (jika ada). Setiap ketidaklengkapan, ketidakabsahan, ketidakakuratan, dan/atau menyesatkan terhadap Data Pribadi Anda yang dikirimkan kepada Kami dapat merupakan kegagalan untuk mematuhi persyaratan hukum atau kewajiban kontrak, atau ketidakmampuan Kami untuk membuat kontrak dengan Anda, tergantung pada keadaannya. Selanjutnya, Anda dengan ini membebaskan Kami dari seluruh konsekuensi yang timbul dari kelalaian atau kesalahan Anda dalam menjaga kebenaran, kelengkapan, dan akurasi Data Pribadi Anda, dan kegagalan Anda untuk menjaga validitas, kelengkapan, keakuratan Data Pribadi yang dikirimkan kepada Kami." },
      {
        text: "Dalam melakukan penyerahan Data Pribadi, Anda dengan ini menyatakan dan menjamin bahwa Anda adalah pihak yang cakap secara hukum untuk melakukan penyerahan Data Pribadi kepada Kami, dan apabila:",
        children: [
          { text: "Anda merupakan seorang individu yang belum berusia 18 (delapan belas) tahun dan belum pernah menikah, maka Kami menganggap bahwa penyerahan Data Pribadi Anda telah disetujui oleh orang tua, wali, atau pengampu Anda yang sah untuk mewakili Anda;" },
          { text: "Anda merupakan pihak yang berbentuk badan atau entitas, maka Kami menganggap bahwa penyerahan Data Pribadi Anda dilakukan oleh perwakilan yang sah untuk menyerahkan Data Pribadi Anda kepada Kami, seperti, antara lain; penerima kuasa atau direktur; dan" },
          { text: "Anda merupakan seorang individu yang cakap secara hukum namun penyerahan Data Pribadi Anda diwakilkan oleh penerima kuasa, maka Kami menganggap bahwa penyerahan Data Pribadi Anda dilakukan oleh penerima kuasa yang Anda tunjuk secara sah untuk mewakili Anda." },
        ],
      },
    ],
  },
  {
    title: "III. TUJUAN PEMROSESAN DATA PRIBADI",
    paragraph:
      "Kami Memproses Data Pribadi Anda, baik Data Pribadi Umum maupun Data Pribadi Spesifik/Sensitif, untuk tujuan-tujuan berikut ini:",
    entries: [
      { text: "Dokumentasi dan pemeriksaan latar belakang Anda. Sebagai penyelenggara jasa sistem pembayaran, Kami diharuskan untuk melakukan due diligence pemeriksaan latar belakang Anda dan menilai/menganalisa risiko untuk menghindari risiko-risiko yang berkaitan dengan pemrosesan Transaksi, khususnya risiko yang terkait dengan pencucian uang atau pendanaan teroris." },
      { text: "Penyediaan layanan-layanan Kami untuk Anda yang merupakan Pengguna dan fasilitas-fasilitas Kami untuk Anda yang merupakan Merchant, dan/atau layanan Pihak Ketiga yang disepakati melalui Aplikasi yang telah dimulai melalui Aplikasi, dan pengembangan, pembaruan, dan peningkatan layanan atau fasilitas Kami." },
      { text: "Pelaksanaan tindakan hukum yang Kami lakukan atau yang dilakukan terhadap Kami dan/atau Afiliasi Kami, khususnya dalam hal Kami melakukan aksi korporasi atau Kami menjadi objek dari suatu aksi korporasi seperti: peleburan, penggabungan, akuisisi, jual beli aset, restrukturisasi, pemisahan dan/atau pembiayaan." },
      { text: "Pelaksanaan pemrosesan Transaksi dari Transaksi yang Anda lakukan, jika Anda merupakan Pengguna, atau dari Transaksi yang Anda terima, jika Anda merupakan Merchant." },
      { text: "Pengiriman informasi yang Kami anggap berguna untuk Anda, yaitu informasi tentang layanan-layanan Kami atau Pihak Ketiga yang bekerja sama dengan Kami, pembaruan, pengembangan, dan/atau penyempurnaan layanan atau fasilitas Kami." },
      { text: "Personalisasi Aplikasi untuk keuntungan maksimal Anda yang disediakan oleh Kami dan/atau Pihak Ketiga yang telah bekerjasama dengan Kami." },
      { text: "Tujuan administrasi internal, terutama untuk (i) audit, (ii) analisis data untuk pengujian, penelitian, analisis, pengembangan produk, kemitraan komersial, dan tujuan terkait kolaborasi, dan/atau (iii) rekaman-rekaman dalam database." },
      { text: "Penerapan keamanan pemrosesan Transaksi, yang mencakup; tindakan pemantauan, pencegahan, deteksi, penyelidikan, dan/atau penindakan atas terjadinya pelanggaran dalam pelaksanaan Transaksi oleh Pengguna atau penerimaan Transaksi oleh Merchant." },
      { text: "Kepatuhan Kami atas kewajiban yang diberlakukan oleh Otoritas Berwenang atau peraturan perundang-undangan yang berlaku sebagaimana yang disarankan, direkomendasikan, diharapkan atau diminta untuk melakukannya oleh penasihat hukum Kami dan/atau Otoritas Berwenang, yang mencakup pengungkapan yang dilakukan sesuai dengan panggilan, putusan dan/atau perintah pengadilan, perintah dari otoritas penegak hukum dalam rangka penyelidikan atau proses hukum lainnya atau persyaratan yang berlaku untuk Kami atau Afiliasi Kami (khususnya setiap dugaan tindak pidana penggelapan, penipuan atau pencurian data, anti pencucian uang dan persyaratan pelaporan pendanaan kontra terorisme)." },
      { text: "Memproses permohonan Anda seputar akses, koreksi, pemutakhiran, dan/atau Penghapusan/Pemusnahan Data Pribadi Anda dalam sistem Kami, serta untuk menghubungi Anda terkait dengan permohonan Anda ini kepada Kami." },
      { text: "Tujuan lainnya sepanjang tujuan tersebut tidak dilarang oleh peraturan perundang-undangan yang berlaku. Untuk menghindari keraguan, Kami akan memberitahu Anda tentang tujuan lain tersebut ketika meminta persetujuan Anda, kecuali jika ditentukan lain oleh peraturan perundang-undangan yang berlaku." },
    ],
  },
  {
    title: "IV. PENGUNGKAPAN DATA PRIBADI",
    entries: [
      {
        text: "Kami terkadang harus melakukan Pengungkapan Data Pribadi Anda untuk tujuan-tujuan berikut ini dan tujuan-tujuan lainnya yang diperbolehkan oleh peraturan perundang-undangan yang berlaku:",
        children: [
          { text: "Memenuhi kewajiban, tanggung jawab, atau perintah yang timbul dari peraturan perundang-undangan yang berlaku ataupun perintah dari Otoritas Berwenang termasuk namun tidak terbatas pada; kebutuhan penyelidikan atau penyidikan, pemenuhan perintah pengadilan atas suatu proses hukum, atau untuk mematuhi kewajiban pengarsipan atau pelaporan berdasarkan suatu peraturan perundang-undangan, dan untuk tujuan lainnya sebagaimana diwajibkan dalam peraturan perundang-undangan yang berlaku." },
          { text: "Menangani ataupun menyelesaikan suatu keadaan darurat terkait keselamatan Anda, dan/atau kepentingan Kami, khususnya (i) mencegah kerugian atau kerugian finansial, melaporkan dugaan kegiatan ilegal atau untuk menanggapi setiap klaim atau klaim potensial yang diajukan terhadap Kami dan/atau Afiliasi Kami; atau (ii) dalam hal Anda mengalami kehilangan atas Data Pribadi yang Anda simpan sendiri dalam hal Anda meminta bantuan dari penegak hukum dan/atau pihak lainnya untuk mengumpulkan Data Pribadi Anda yang tersimpan pada Kami; Maka, untuk membantu Anda, Kami mungkin menyerahkan Data Pribadi Anda yang Kami simpan kepada penegak hukum atau pihak lain tersebut untuk tujuan membantu Anda mengumpulkan kembali Data Pribadi Anda yang hilang tersebut." },
          { text: "Melaksanakan kepentingan umum. Kami dapat memberikan Data Pribadi milik Anda kepada Otoritas Berwenang dan/atau pihak lainnya yang ditunjuk oleh Otoritas Berwenang, untuk tujuan, termasuk namun tidak terbatas pada; pelacakan kontak, mendukung inisiatif, kebijakan atau program Otoritas Berwenang, dan tujuan lainnya sebagaimana dibutuhkan secara wajar." },
          { text: "Kegiatan peleburan, penggabungan, akuisisi, jual beli aset, restrukturisasi, atau pembiayaan yang mana pelaksanaannya melibatkan Kami sebagai pihak yang melakukan kegiatan tersebut dengan pihak lain atau atas perusahaan lain ataupun Kami sebagai pihak yang dilebur atau digabungkan dengan perusahaan lain atau diakuisisi oleh perusahaan lain atau menerima pembiayaan dari perusahaan lain." },
          { text: "Penggunaan Data Pribadi yang dilakukan oleh Pihak Ketiga dalam rangka penyediaan, pengujian, penelitian, analisis, penjualan, pemasaran, penawaran, ataupun peningkatan kualitas produk atau layanan Pihak Ketiga yang mengadakan kerja sama dengan Kami yang mana dalam kerja sama tersebut Pihak Ketiga tersebut memerlukan pengiriman dan/atau Pengungkapan atas Data Pribadi Anda. Produk atau layanan tersebut mencakup sebagai berikut: Mengenal Pelanggan (Know Your Customer (KYC)), audit, layanan pemasaran atau platform pemasaran, penyediaan layanan yang melakukan penanganan pengaduan, asuransi dan layanan keuangan lainnya." },
          { text: "Pelaksanaan kerja sama dengan Pihak Ketiga dengan maksud agar mereka dapat (i) membantu Kami dalam menyediakan layanan-layanan Kami; (ii) mengoperasikan bisnis Kami; (iii) untuk tujuan Pemrosesan data atas nama Kami; (iv) untuk tujuan audit internal, (v) memungkinkan pembelian dan/atau mengakses barang dan/atau layanan Pihak Ketiga yang ditawarkan dalam Aplikasi Kami; (vi) Memproses semua bentuk aktivitas Anda dalam Aplikasi atau platform yang terhubung dengan aplikasi; maupun (vii) tujuan lainnya sepanjang tidak dilarang oleh peraturan perundang-undangan yang berlaku. Seluruh Pihak Ketiga yang bekerja sama dengan Kami berkomitmen untuk mengolah Data Pribadi yang mereka terima dari Kami sesuai dengan peraturan perundang-undangan yang berlaku." },
        ],
      },
      { text: "Terkait dengan Pihak Ketiga yang merupakan perusahaan afiliasi Kami, termasuk namun tidak terbatas pada; PT Ide Kreatif Asia, untuk atau sehubungan dengan tujuan yang terkait dengan penyediaan Aplikasi, pengelolaan bisnis dan kegiatan lainnya, Anda dengan ini sepakat bahwa Kami dapat Mengungkapkan Data Pribadi Anda kepada Pihak Ketiga tersebut, dan Pihak Ketiga ini akan dan dapat mengirimkan, menyampaikan dan/atau memberikan Data Pribadi Anda kepada pihak lainnya dengan siapa Pihak Ketiga tersebut melakukan kerja sama (sebagaimana relevan), terutama dalam rangka untuk dapat meneruskan permintaan Anda atas layanan dukungan yang Anda inginkan dari pihak lain, sebagai penyedia layanan dukungan." },
      { text: "Sehubungan dengan Pengungkapan Data Pribadi Anda kepada Pihak Ketiga, termasuk dari Pihak Ketiga kepada pihak lainnya, Kami akan mewajibkan Pihak Ketiga dan pihak lain tersebut untuk menjaga keamanan dan kerahasiaan Data Pribadi Anda sesuai dengan ketentuan peraturan perundang-undangan yang berlaku. Jika Pihak Ketiga yang berkepentingan tidak memerlukan Data Pribadi tertentu untuk dikaitkan dengan Anda, Data Pribadi Anda yang relevan akan dihapus secara wajar sehingga Data Pribadi tersebut tidak dapat dikaitkan dengan Anda sebagai individu sebelum diungkapkan atau ditransfer ke Pihak Ketiga tersebut." },
    ],
  },
  {
    title: "V. PENGUMPULAN DATA PRIBADI DARI PIHAK KETIGA",
    entries: [
      { text: "Kami juga dapat mengumpulkan Data Pribadi Anda dari Pihak Ketiga yang memiliki kerja sama dengan Kami. Dalam kasus tersebut, Kami hanya akan mengumpulkan Data Pribadi Anda untuk tujuan yang melibatkan Pihak Ketiga tersebut atau tujuan pelaksanaan kerja sama Kami dengan Pihak Ketiga tersebut." },
      { text: "Dalam hal Kami menerima Data Pribadi Anda dari Pihak Ketiga, maka Kami menganggap bahwa penyerahan Data Pribadi Anda kepada Kami oleh Pihak Ketiga tersebut telah disetujui sebelumnya oleh Anda sehingga Kami tidak dapat dimintakan pertanggungjawaban dalam bentuk apapun apabila Pihak Ketiga tersebut menyerahkan Data Pribadi Anda tanpa persetujuan dari Anda sebelumnya." },
    ],
  },
  {
    title: "VI. PENGUMPULAN INFORMASI PIHAK LAIN",
    entries: [
      { text: "Dalam keadaan tertentu, Kami dapat meminta Anda untuk menyerahkan atau memberikan informasi menyangkut pihak lain dari Anda untuk tujuan-tujuan yang tidak dilarang oleh peraturan perundang-undangan yang berlaku. Informasi pihak lain sebagaimana dimaksud, termasuk Data Pribadi pihak-pihak yang mewakili Anda (jika Anda merupakan pihak berbentuk badan hukum ataupun berbentuk persekutuan perdata lainnya), seperti, antara lain; direktur, komisaris, karyawan, atau Data Pribadi pasangan, anggota keluarga, dan/atau kolega Anda (jika Anda merupakan pihak yang merupakan individu)." },
      { text: "Kami dapat melakukan Pemrosesan atas informasi pihak lain tersebut setelah Kami menerima informasi pihak lain tersebut dari Anda untuk tujuan-tujuan yang tidak dilarang oleh peraturan perundang-undangan yang berlaku." },
      { text: "Pemrosesan atas informasi pihak lain tersebut, sepanjang informasi tersebut dapat dikategorikan sebagai Data Pribadi, akan Kami lakukan sesuai dengan Kebijakan Privasi ini." },
    ],
  },
  {
    title: "VII. KEAMANAN DATA PRIBADI",
    entries: [
      { text: "Kami akan melindungi dan mengamankan Data Pribadi Anda, baik Data Pribadi Umum maupun Data Pribadi Spesifik/Sensitif, yang tersimpan dalam sistem penyimpanan Kami (yang termasuk membatasi akses terhadap Data Pribadi Anda kepada karyawan Kami berdasarkan kebutuhan untuk mengetahui. Pemrosesan Data Pribadi Anda hanya akan dilakukan dengan tata cara yang diizinkan dan diharuskan untuk menjaga Data Pribadi Anda dengan kerahasiaan) dari tindakan Pemrosesan Data Pribadi oleh pihak-pihak yang tidak berwenang dan dari tindakan Pemrosesan Data Pribadi yang bertentangan dengan peraturan perundang-undangan yang berlaku, kehilangan yang tidak disengaja, pemusnahan dan kerusakan atau risiko serupa yang tidak disengaja dengan mengambil dan menerapkan langkah-langkah hukum, organisasi dan teknis yang wajar." },
      {
        label: "Penyimpanan Data Pribadi oleh Kami:",
        text: "Kami akan menyimpan Data Pribadi Anda dalam sistem penyimpanan Kami, selama:",
        children: [
          { text: "penyimpanan Data Pribadi Anda diperlukan untuk memenuhi tujuan-tujuan sebagaimana dimaksud dalam Kebijakan Privasi ini;" },
          { text: "penyimpanan Data Pribadi Anda diperbolehkan atau dipersyaratkan oleh peraturan perundang-undangan yang berlaku;" },
          { text: "Anda tidak meminta Penghapusan/Pemusnahan atas Data Pribadi Anda yang Kami simpan atau Anda tidak mencabut persetujuan Anda untuk Kami menyimpan Data Pribadi Anda; dan/atau" },
          { text: "Permintaan Anda untuk Penghapusan/Pemusnahan atas Data Pribadi Anda yang Kami simpan telah Kami tolak atas dasar pertimbangan yang ditetapkan dalam Kebijakan Privasi ini." },
        ],
      },
      { label: "Penghentian atau Penghapusan Aplikasi:", text: "Jika Anda menghentikan atau menghapus pemasangan (uninstall) Aplikasi dari perangkat Anda atau izin Anda untuk menggunakan Aplikasi dihentikan atau ditarik, Kami dapat terus Memproses Data Pribadi Anda sesuai dengan Kebijakan Privasi ini dan kewajiban Kami berdasarkan hukum dan peraturan perundang-undangan yang berlaku." },
      {
        label: "Data Pribadi Yang Disimpan oleh Otoritas Berwenang:",
        children: [
          { text: "Kami mungkin saja diwajibkan oleh peraturan perundang-undangan yang berlaku dan/atau Otoritas Berwenang untuk mengirimkan atau membagikan Data Pribadi Anda kepada Otoritas Berwenang dan/atau pihak lain yang ditunjuk oleh Otoritas Berwenang." },
          { text: "Sehubungan dengan huruf (a) di atas, Anda dengan ini menyetujui dan mengakui bahwa penyimpanan Data Pribadi Anda oleh Otoritas Berwenang dan/atau pihak lain yang ditunjuk oleh Otoritas Berwenang akan mengikuti kebijakan dan standar penyimpanan data yang diterapkan oleh Otoritas Berwenang dan/atau pihak lain yang ditunjuk oleh Otoritas Berwenang tersebut." },
          { text: "Anda dengan ini mengetahui dan menyetujui bahwa Kami tidak bertanggung jawab atas keamanan dan kerahasiaan Data Pribadi Anda yang disimpan oleh Otoritas Berwenang dan/atau pihak lain yang ditunjuk oleh Otoritas Berwenang tersebut, serta membebaskan Kami dari segala tuntutan sehubungan dengan pelanggaran keamanan dan kerahasiaan atas Data Pribadi Anda yang disimpan Otoritas Berwenang dan/atau pihak lain yang ditunjuk olehnya." },
        ],
      },
      {
        label: "Prinsip Kehati-Hatian:",
        children: [
          {
            text: "Kami sangat menghimbau Anda untuk sangat berhati-hati untuk menjaga keamanan dan kerahasiaan Data Pribadi Anda, dengan cara, antara lain:",
            children: [
              { text: "tidak membiarkan pihak yang tidak berwenang untuk mengakses, menerima, menyimpan, atau mengumpulkan Data Pribadi Anda, dengan cara, seperti; menjaga keamanan dan kerahasiaan PIN, kata sandi, dan/atau akun yang dapat memberikan akses ke Data Pribadi Anda;" },
              { text: "memperhatikan dengan cermat media yang Anda gunakan untuk menyimpan, mengunggah, menyampaikan, mengirimkan, dan/atau membagikan Data Pribadi Anda; dan" },
              { text: "menerapkan prinsip kehati-hatian dengan paling tidak menandatangani perjanjian kerahasiaan dengan pihak yang Anda percayakan untuk menerima dan menyimpan Data Pribadi Anda, atau mensyaratkan pihak tersebut untuk memiliki dan menerapkan suatu kebijakan/Kebijakan privasi yang tidak bertentangan dengan peraturan perundang-undangan yang berlaku, dan hanya mempercayakan penyimpanan Data Pribadi Anda kepada pihak yang memiliki kredibilitas dan integritas dalam melindungi Data Pribadi." },
            ],
          },
          { text: "Penggunaan Jaringan Internet: Perlu Anda ketahui bahwa penggunaan jaringan internet untuk pengiriman, pembagian, pengunggahan, ataupun penyampaian Data Pribadi Anda tidaklah sepenuhnya aman, mengingat jaringan internet dapat diakses oleh pihak manapun dan terdapat risiko-risiko sehubungan dengan penyediaan dan pemanfaatan jaringan internet yang berada di luar kendali dan pengawasan Kami. Penyediaan Data Pribadi oleh Anda akan menjadi risiko Anda sendiri. Mohon untuk selalu berhati-hati dalam memanfaatkan jaringan internet untuk kepentingan Data Pribadi Anda pada setiap saat Anda memanfaatkan jaringan internet." },
        ],
      },
      {
        label: "Pengecualian atas Tanggung Jawab:",
        text: "Kami tidak dapat dimintakan pertanggungjawaban dalam bentuk apapun atas:",
        children: [
          { text: "keamanan dan kerahasiaan Data Pribadi Anda yang Anda simpan sendiri atau yang Anda serahkan kepada Pihak Ketiga atau pihak lain;" },
          { text: "keamanan dan kerahasiaan Data Pribadi yang telah dilakukan Pengungkapan terhadapnya kepada publik atau Pihak Ketiga, baik Pengungkapan yang dilakukan oleh Anda ataupun pihak manapun selain Kami, dan Pengungkapan tersebut terjadi bukan karena kelalaian atau kesalahan Kami dalam melindungi Data Pribadi Anda;" },
          { text: "seluruh konsekuensi yang timbul dari kelalaian yang Anda lakukan dalam menjaga keamanan dan kerahasiaan Data Pribadi Anda; dan" },
          { text: "seluruh konsekuensi yang timbul dari pemanfaatan media apapun yang Anda gunakan untuk menyimpan, mengunggah, menyampaikan, mengirimkan, dan/atau membagikan Data Pribadi Anda, seperti antara lain; jaringan internet dan layanan penyimpanan awan." },
        ],
      },
    ],
  },
  {
    title: "VIII. AKSES, KOREKSI, DAN PEMUTAKHIRAN DATA PRIBADI",
    entries: [
      {
        text: "Anda dapat meminta Kami untuk:",
        children: [
          { text: "menyediakan Data Pribadi Anda dan/atau memberikan akses kepada Anda atas Data Pribadi Anda yang tersimpan dalam sistem penyimpanan Kami;" },
          { text: "mengoreksi Data Pribadi Anda yang tersimpan dalam sistem penyimpanan Kami; dan/atau" },
          { text: "memperbaharui Data Pribadi Anda yang tersimpan dalam sistem penyimpanan Kami." },
        ],
      },
      { text: "Dalam hal Kami menyediakan Data Pribadi Anda kepada Anda, maka penyediaan tersebut akan Kami lakukan secara elektronik dan Data Pribadi Anda akan Kami sediakan dalam bentuk elektronik atau dengan cara penyediaan lain dan bentuk lainnya sebagaimana Kami tentukan dari waktu ke waktu." },
      {
        text: "Kami berhak menolak permintaan Anda sebagaimana dimaksud dalam ayat (1) di atas baik sebagian atau seluruhnya, jika:",
        children: [
          { text: "permintaan Anda tersebut tidak relevan dengan Data Pribadi Anda yang disimpan oleh Kami, seperti antara lain; jika Anda meminta Data Pribadi atas pihak lain yang mana Anda tidak berwenang atas Data Pribadi tersebut; dan/atau" },
          { text: "Kami tidak diperkenankan oleh Otoritas Berwenang dan/atau peraturan perundang-undangan yang berlaku untuk melaksanakan permintaan Anda." },
        ],
      },
      {
        label: "Pemutakhiran Data Pribadi Anda:",
        children: [
          { text: "Anda wajib untuk melakukan pemutakhiran Data Pribadi Anda, apabila Anda melakukan perubahan atas Data Pribadi Anda yang telah Anda serahkan kepada Kami. Kami membutuhkan Anda untuk melakukan pemutakhiran Data Pribadi Anda untuk tujuan keamanan, relevansi Data Pribadi, dan pencegahan tindakan pencucian uang dan pendanaan terorisme." },
          {
            text: "Anda juga wajib dengan segera melakukan pemutakhiran Data Pribadi, apabila Kami meminta Anda untuk melakukan pemutakhiran Data Pribadi berdasarkan salah satu atau lebih hal-hal di bawah ini:",
            children: [
              { text: "temuan Kami atas perubahan atas Data Pribadi Anda yang telah Anda serahkan sebelumnya kepada Kami;" },
              { text: "temuan Kami atas indikasi perubahan pola transaksi (pembayaran atau transfer dana), ketidaksesuaian transaksi dengan profil Anda, atau peningkatan risiko yang signifikan atas hasil customer due diligence (\u201cCDD\u201d) Kami terhadap Anda selaku Pengguna layanan Kami; dan/atau" },
              { text: "temuan Kami atas indikasi tindakan pencucian uang, pendanaan terorisme, dan/atau pelanggaran hukum lainnya." },
            ],
          },
          { text: "Apabila Kami meminta Anda untuk melakukan pemutakhiran Data Pribadi Anda karena alasan-alasan yang dimaksud dalam huruf (b) di atas maka Kami akan menginformasikan dan memberikan batas waktu untuk Anda melakukan pemutakhiran Data Pribadi tersebut." },
          {
            text: "Apabila Anda gagal untuk melaksanakan pengkinian Data Pribadi Anda secara valid, benar, lengkap, dan jelas setelah berakhirnya batas waktu yang dimaksud dalam huruf (c) di atas, maka Kami berhak untuk:",
            children: [
              { text: "melakukan downgrade klasifikasi akun pengguna layanan milik Anda, jika Anda merupakan Pengguna;" },
              { text: "menghentikan pelaksanaan Kerja Sama, jika Anda merupakan Merchant; atau" },
              { text: "menolak atau tidak memproses Pendaftaran Anda, jika Anda merupakan calon Merchant." },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "IX. PERSETUJUAN",
    entries: [
      { text: "Dengan menyetujui Kebijakan Privasi, Anda mengakui dan menyatakan bahwa Anda telah membaca dan memahami ketentuan-ketentuan dalam Kebijakan Privasi ini. Secara khusus, Anda memberikan Kami persetujuan untuk melakukan Pemrosesan atas Data Pribadi Anda sesuai dengan ketentuan-ketentuan dalam Kebijakan Privasi ini." },
      {
        text: "Anda dianggap telah memberikan persetujuan Anda atas keberlakuan Kebijakan Privasi ini pada Anda jika salah satu atau lebih kondisi di bawah ini terjadi:",
        children: [
          { text: "Anda terdaftar sebagai Pengguna atau Merchant;" },
          { text: "Anda menyerahkan Data Pribadi Anda kepada Kami untuk tujuan Pemrosesan Data Pribadi Anda sebagaimana dimaksud dalam Kebijakan Privasi ini;" },
          { text: "Data Pribadi Anda tersimpan dalam sistem penyimpanan Kami;" },
          { text: "Anda memberikan persetujuan Anda atas suatu kesepakatan atau perjanjian antara Anda dan Kami sehubungan dengan penerimaan Transaksi atau Kerja Sama atau sehubungan dengan pemanfaatan layanan-layanan Kami;" },
          { text: "Anda melakukan penerimaan Transaksi atau melaksanakan Transaksi;" },
          { text: "Anda mengunjungi dan/atau menggunakan website dan/atau Aplikasi Kami (SAKU SULTAN App atau Aplikasi Merchant), dan/atau menggunakan fasilitas yang Kami sediakan; dan/atau" },
          { text: "melakukan komunikasi dengan Kami." },
        ],
      },
      { text: "Kebijakan Privasi ini mulai berlaku efektif sejak Anda memberikan persetujuan Anda atas Kebijakan Privasi ini, baik secara tegas atau dengan cara-cara yang disebutkan dalam ayat (2) di atas, dan akan terus berlaku sepanjang salah satu kondisi-kondisi yang disebutkan dalam ayat (2) di atas berlangsung atau sampai dengan Anda mencabut persetujuan Anda." },
      { text: "Jika Anda diberi pilihan untuk membagikan Data Pribadi Anda kepada Kami, Anda selalu dapat memilih untuk tidak melakukannya. Jika Kami telah meminta persetujuan Anda untuk Memproses dan Anda kemudian memilih untuk mencabut persetujuan Anda, Kami akan menghormati pilihan tersebut sesuai dengan kewajiban hukum Kami. Namun, memilih untuk tidak membagikan Data Pribadi Anda kepada Kami, dapat berarti bahwa Kami tidak dapat melakukan tindakan yang diperlukan untuk mencapai tujuan Pemrosesan Data Pribadi sebagaimana diatur dalam Kebijakan Privasi ini atau bahwa Anda tidak dapat menggunakan Aplikasi." },
    ],
  },
  {
    title: "X. PENGHAPUSAN/PEMUSNAHAN DATA PRIBADI DAN PENCABUTAN PERSETUJUAN",
    entries: [
      { text: "Anda berhak untuk mencabut persetujuan Anda untuk Kami menyimpan Data Pribadi Anda, baik Data Pribadi Umum atau Data Pribadi Spesifik/Sensitif, dan dengan pencabutan persetujuan tersebut maka Kami akan menghapus/memusnahkan Data Pribadi Anda dari sistem penyimpanan Kami dan berhenti untuk Memproses Data Pribadi Anda." },
      {
        text: "Selain berdasarkan ketentuan dalam ayat (1) di atas, Data Pribadi Anda juga dapat dihapus/dimusnahkan dari sistem penyimpanan Kami, jika:",
        children: [
          { text: "Data Pribadi Anda tidak lagi dibutuhkan dan Penghapusan/Pemusnahan Data Pribadi tersebut diperbolehkan oleh peraturan perundang-undangan yang berlaku;" },
          { text: "Anda meminta Kami untuk menghapus/memusnahkan Data Pribadi Anda yang tersimpan dalam sistem penyimpanan Kami baik sebagian atau seluruhnya, dengan mengirimkan permintaan secara tertulis ke Kontak Kami; dan/atau" },
          { text: "Kami dilarang untuk menyimpan Data Pribadi Anda berdasarkan peraturan perundang-undangan yang berlaku dan/atau perintah dari Otoritas Berwenang." },
        ],
      },
      {
        text: "Dihapusnya/dimusnahkannya Data Pribadi Anda dalam sistem penyimpanan Kami atau dicabutnya persetujuan Anda untuk Kami menyimpan Data Pribadi Anda akan menyebabkan Kami tidak dapat:",
        children: [
          { text: "Dihapusnya/dimusnahkannya Data Pribadi Anda dalam sistem penyimpanan Kami atau dicabutnya persetujuan Anda untuk Kami menyimpan Data Pribadi Anda akan menyebabkan Kami tidak dapat:" },
          { text: "Memproses Pendaftaran Anda lebih lanjut, jika Anda merupakan calon Merchant yang sedang dalam proses Pendaftaran; dan/atau" },
          { text: "Memproses Transaksi yang Anda lakukan jika Anda merupakan Pengguna atau Memproses Transaksi yang Anda terima jika Anda merupakan Merchant, jika Kami tidak menyimpan Data Pribadi Anda maka Kami tidak akan dapat melakukan aktivitas-aktivitas yang berkaitan dengan pemrosesan Transaksi, seperti, antara lain; mendebet instrumen pembayaran Anda untuk pelaksanaan Transaksi (jika Anda merupakan Pengguna) atau melakukan penyelesaian dana (jika Anda merupakan Merchant)." },
        ],
      },
      { text: "Khusus bagi permintaan Penghapusan/Pemusnahan, dan/atau pencabutan persetujuan terkait dengan Data Pribadi yang diperlukan dalam Kerja Sama atau penerimaan Transaksi, Penghapusan/Pemusnahan, dan/atau pencabutan persetujuan tersebut wajib untuk disepakati bersama oleh Anda selaku Merchant dan Kami. Ketentuan ini dikecualikan apabila Penghapusan/Pemusnahan tersebut diperintahkan oleh peraturan perundang-undangan yang berlaku dan/atau Otoritas Berwenang." },
      {
        text: "Kami berhak menolak permintaan Penghapusan/Pemusnahan Data Pribadi Anda, sebagaimana dimaksud dalam ayat (1) di atas, baik sebagian atau seluruhnya, jika:",
        children: [
          { text: "Data Pribadi Anda telah kami hapus/musnahkan dalam sistem penyimpanan Kami atas dasar permohonan serupa Anda yang terdahulu, dan/atau permohonan Otoritas Berwenang kepada Kami;" },
          { text: "permintaan Anda tersebut tidak relevan dengan Data Pribadi Anda yang disimpan oleh Kami, seperti, antara lain; jika Anda meminta Data Pribadi atas pihak lain yang mana Anda tidak berwenang atas Data Pribadi tersebut; dan/atau" },
          { text: "Kami tidak diperkenankan oleh Otoritas Berwenang dan/atau peraturan perundang-undangan yang berlaku untuk melaksanakan permintaan Anda." },
        ],
      },
      { text: "Sehubungan dengan Penghapusan/Pemusnahan, dan pencabutan persetujuan sebagaimana dimaksud dalam Bagian X ini, Anda dengan ini sepakat bahwa Anda membebaskan Kami dari tanggung jawab dalam bentuk apapun atas seluruh konsekuensi yang timbul dari Penghapusan/Pemusnahan, dan pencabutan persetujuan tersebut." },
    ],
  },
  {
    title: "XI. DATA ANONIM",
    entries: [
      { text: "Anda dengan ini sepakat bahwa Kami berhak menghapus data-data yang mengidentifikasikan Anda dari Data Pribadi Anda atau mengombinasikan Data Pribadi Anda dengan data-data lainnya, sehingga data-data yang mengandung identifikasi Anda atau dapat dikaitkan dengan Anda dalam Data Pribadi Anda terhapus atau tergabung dengan data lain yang menyebabkan data-data tersebut tidak lagi dapat diidentifikasikan terhadap Anda baik sebagai individu atau suatu badan dan menjadi Data Anonim." },
      { text: "Anda dengan ini sepakat bahwa Kami berhak untuk selalu menyimpan, mengirimkan, mengungkapkan, memproses, memanfaatkan, dan menghapus/menghancurkan Data Anonim, mengingat Data Anonim bukan lagi merupakan Data Pribadi Anda dan tidak lagi dapat diidentifikasikan terhadap diri Anda." },
    ],
  },
  {
    title: "XII. DATA PRIBADI SPESIFIK/SENSITIF",
    paragraph:
      "Anda dengan ini sepakat bahwa Kami berhak untuk selalu memperoleh, mengumpulkan, menyimpan, Memproses, Mengungkapkan, memanfaatkan, dan Menghapus/Menghancurkan Data Pribadi Spesifik/Sensitif Anda untuk tujuan-tujuan yang ditetapkan dalam Kebijakan Privasi ini.",
  },
  {
    title: "XIII. PLATFORM PIHAK KETIGA",
    entries: [
      {
        text: "Perlu Anda ketahui dan pahami bahwa:",
        children: [
          { text: "Aplikasi Kami dapat berisi tautan ke website Pihak Ketiga, seperti, antara lain; iklan atau widget yang terdapat pada SAKU SULTAN App atau Merchant yang jika Anda klik dapat mengantarkan Anda ke website Pihak Ketiga; dan" },
          { text: "layanan yang Kami sediakan khusus bagi Pengguna dan fasilitas yang Kami sediakan khusus bagi Merchant dapat saja tersedia pada platform (website/mobile application) Pihak Ketiga yang bekerja sama dengan Kami." },
        ],
      },
      { text: "Anda mengakui dan menyetujui bahwa (i) platform Pihak Ketiga dikelola dan dioperasikan secara independen oleh Pihak Ketiga tersebut, dan (ii) Kami akan dilepaskan dari segala pertanggungjawaban atas Pemrosesan Data Pribadi Anda oleh Pihak Ketiga, sebagaimana dimaksud dalam ayat (1) di atas." },
      { text: "Jika Anda memberikan Data Pribadi Anda kepada Pihak Ketiga melalui platform Pihak Ketiga ini, Anda menyetujui bahwa kebijakan/Kebijakan privasi dan ketentuan layanan di platform tersebut akan berlaku, dan Kami akan dilepaskan dari segala pertanggungjawaban atas kegiatan Pemrosesan Data Pribadi yang dilakukan oleh Pihak Ketiga tersebut atau yang diatur berdasarkan kebijakan/Kebijakan privasi dan ketentuan layanan pada platform tersebut." },
    ],
  },
  {
    title: "XIV. COOKIES, MATERI PEMASARAN DAN PROMOSI",
    entries: [
      { text: "Sehubungan dengan penggunaan Anda terhadap website dan Aplikasi Kami, Anda setuju bahwa Kami dan/atau Pihak Ketiga yang bekerja sama dengan Kami dapat menggunakan cookies dan teknologi pengidentifikasi sejenis lainnya untuk mengumpulkan Data Pribadi Anda atas dasar tujuan-tujuan yang tidak dilarang dalam peraturan perundang-undangan." },
      { text: "Anda setuju bahwa Kami dan/atau Pihak Ketiga yang bekerja sama dengan Kami dapat mengirimkan Anda materi pemasaran dan promosi langsung seperti; iklan dan/atau komunikasi promosi, melalui email atau sarana komunikasi lainnya sebagaimana tersedia." },
      {
        text: "Anda berhak untuk membatasi pengumpulan cookies pada website dan Aplikasi Kami, sebagaimana dimaksud dalam ayat (1) di atas, dengan cara:",
        children: [
          { text: "menyesuaikan pengaturan cookies pada browser internet Anda;" },
          { text: "menghapus riwayat penelusuran Anda; dan/atau" },
          { text: "membersihkan cache dari browser internet Anda." },
        ],
      },
      {
        text: "Anda berhak untuk memilih untuk tidak menerima materi pemasaran dan promosi tersebut ke email atau kontak Anda, sebagaimana dimaksud dalam ayat (2) di atas, dengan cara:",
        children: [
          { text: "menekan tombol berhenti berlangganan (unsubscribe) pada materi pemasaran dan promosi yang Anda terima;" },
          { text: "menonaktifkan layanan notifikasi dan lokasi dari perangkat Anda; dan/atau" },
          { text: "menghubungi Kontak Kami dan menyampaikan keberatan Anda sehubungan dengan pengiriman materi pemasaran dan promosi tersebut ke email atau kontak Anda." },
        ],
      },
    ],
  },
  {
    title: "XV. KETENTUAN LAINNYA",
    entries: [
      {
        label: "Perubahan:",
        children: [
          { text: "Kami dapat meninjau dan mengubah Kebijakan Privasi ini atas kebijakan Kami sendiri untuk memastikan bahwa ketentuan-ketentuan dalam Kebijakan Privasi ini konsisten dengan perkembangan Kami di masa depan, dan/atau jika terdapat perubahan peraturan perundang-undangan dan/atau perintah dari Otoritas Berwenang untuk Kami mengubah ketentuan dalam Kebijakan Privasi ini." },
          { text: "Kami akan memberitahu Anda mengenai perubahan sebagaimana dimaksud dalam huruf (a) di atas melalui Kebijakan publik pada website dan/atau Aplikasi Kami, atau melalui Kebijakan khusus ke alamat email Anda ataupun kontak Anda yang terdaftar pada sistem Kami." },
          { text: "Anda setuju bahwa Anda bertanggung jawab sendiri untuk meninjau Kebijakan Privasi ini secara berkala untuk mengetahui informasi terbaru mengenai Kebijakan Privasi ini melalui website dan/atau Aplikasi Kami dan/atau pada email dan/atau kontak Anda yang terdaftar pada sistem Kami. Mohon untuk secara berkala dan teratur mengunjungi website dan/atau Aplikasi Kami, dan menjaga email dan/atau kontak Anda selalu aktif dan benar dan mengecek email dan/atau kontak Anda secara teratur agar Anda dapat terinformasi mengenai Kebijakan Privasi Kami dari waktu ke waktu." },
          {
            text: "Dengan Anda tetap:",
            children: [
              { text: "terdaftar sebagai Pengguna atau Merchant;" },
              { text: "menyerahkan Data Pribadi Anda kepada Kami atau membiarkan Kami menyimpan dan Memproses Data Pribadi Anda;" },
              { text: "melakukan penerimaan Transaksi atau melakukan Transaksi, dan membiarkan Kami memproses Transaksi Anda;" },
              { text: "memiliki dan/atau melaksanakan kesepakatan atau perjanjian yang Anda sepakati dengan Kami, seperti, antara lain; perjanjian terkait Kerja Sama;" },
              { text: "mengunjungi dan/atau menggunakan website dan/atau Aplikasi Kami dan/atau menggunakan fasilitas yang Kami sediakan; dan/atau" },
              { text: "melakukan komunikasi dengan Kami, berarti Anda setuju atas perubahan-perubahan yang Kami berlakukan tersebut." },
            ],
          },
          { text: "Anda wajib untuk memastikan bahwa kontak Anda yang Anda daftarkan kepada Kami adalah benar dan selalu aktif untuk menghindari kegagalan dalam penyampaian Kebijakan kepada Anda." },
        ],
      },
      { label: "Ketidakberlakuan:", text: "Kebatalan atas suatu ketentuan dalam Kebijakan Privasi ini karena diberlakukannya suatu peraturan perundang-undangan atau alasan lainnya tidak akan secara otomatis membatalkan keberlakuan atas ketentuan-ketentuan lainnya dalam Kebijakan Privasi ini." },
      { label: "Kontak Kami:", text: "Jika Anda memiliki pertanyaan atau keluhan seputar penerapan Kebijakan Privasi ini, Anda dapat menghubungi Kami melalui Kontak Kami yang tertera di bawah ini: Nomor telepon: 082396309889; Email: cs@sakusultan.id; Pusat Bantuan di Aplikasi SAKU SULTAN; Twitter (@sakusultanind); Facebook (@sakusultanind); atau Instagram (@sakusultaind)." },
      { label: "Bahasa:", text: "Kebijakan Privasi dapat dibuat dalam Bahasa Indonesia." },
      { label: "Hukum Yang Berlaku:", text: "Seluruh ketentuan dalam Kebijakan Privasi tunduk pada dan ditafsirkan sesuai hukum yang berlaku di wilayah Republik Indonesia." },
      { label: "Versi:", text: "Ketentuan-ketentuan dalam Kebijakan Privasi ini merupakan versi yang Kami tetapkan dan berlakukan per tanggal 1 Agustus 2022." },
    ],
  },
];

function toAlpha(n: number) {
  let value = n;
  let result = "";
  while (value > 0) {
    const rem = (value - 1) % 26;
    result = String.fromCharCode(97 + rem) + result;
    value = Math.floor((value - 1) / 26);
  }
  return result;
}

function toRoman(n: number) {
  const table: [number, string][] = [
    [10, "x"],
    [9, "ix"],
    [5, "v"],
    [4, "iv"],
    [1, "i"],
  ];
  let value = n;
  let result = "";
  for (const [num, sym] of table) {
    while (value >= num) {
      result += sym;
      value -= num;
    }
  }
  return result;
}

function markerFor(depth: number, index: number) {
  const n = index + 1;
  if (depth === 0) return `${n}.`;
  if (depth === 1) return `${toAlpha(n)}.`;
  if (depth === 2) return `${toRoman(n)}.`;
  return "\u2022";
}

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function EntryList({ entries, depth }: { entries: Entry[]; depth: number }) {
  return (
    <ul
      className={
        depth === 0
          ? "space-y-4"
          : "mt-3 space-y-3 border-l border-[#042718]/10 pl-5"
      }
    >
      {entries.map((entry, index) => (
        <li key={index} className="flex gap-3">
          {depth === 0 ? (
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#198F380F] text-xs font-bold text-[#198F38]">
              {index + 1}
            </span>
          ) : (
            <span className="mt-0.5 shrink-0 text-sm font-semibold text-[#042718]/35">
              {markerFor(depth, index)}
            </span>
          )}
          <div className="min-w-0 flex-1">
            {entry.label && (
              <p className="font-semibold text-[#042718]">{entry.label}</p>
            )}
            {entry.text && (
              <p
                className={`leading-7 text-[#042718]/80 ${entry.label ? "mt-1" : ""}`}
              >
                {entry.text}
              </p>
            )}
            {entry.children && (
              <EntryList entries={entry.children} depth={depth + 1} />
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPage() {
  const [openSlugs, setOpenSlugs] = useState<Record<string, boolean>>({});

  const toggleSection = (slug: string) =>
    setOpenSlugs((prev) => ({ ...prev, [slug]: !prev[slug] }));

  const openSection = (slug: string) =>
    setOpenSlugs((prev) => ({ ...prev, [slug]: true }));

  return (
    <main className="w-full overflow-x-clip bg-[#FBFEFF]">
      <PwHeroNavigation />

      {/* Hero band gelap — selaras dengan nuansa hero halaman utama */}
      <section className="relative w-full overflow-hidden bg-[#042718] pb-16 pt-[132px] sm:pb-20 sm:pt-[156px]">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(100% 100% at 50% 0%, rgba(214,239,255,0.28) 0%, rgba(214,239,255,0) 70%)",
          }}
        />
        <div className="relative mx-auto flex max-w-[1440px] flex-col items-center px-4 text-center sm:px-6 lg:px-8">
          <PwReveal className="mb-6 w-full max-w-[720px] text-left">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-sm transition hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              <ChevronRightIcon className="h-4 w-4 rotate-180" />
              Kembali ke Beranda
            </Link>
          </PwReveal>
          <PwReveal>
            <PwEyebrow tone="media" className="mb-5">
              Legal
            </PwEyebrow>
          </PwReveal>
          <PwReveal delay={100}>
            <h1 className="max-w-[720px] font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Kebijakan Privasi
            </h1>
          </PwReveal>
          <PwReveal delay={200}>
            <p className="mt-4 max-w-[560px] text-base text-white/70 sm:text-lg">
              Aplikasi SAKU SULTAN &middot; berlaku efektif sejak 1 Agustus 2022
            </p>
          </PwReveal>
        </div>
      </section>

      <div className="pw-section-y mx-auto max-w-3xl px-6 text-[#042718]">
        <div className="mb-8 space-y-4 rounded-3xl border border-[#042718]/10 bg-white p-6 sm:p-8">
          {INTRO_PARAGRAPHS.map((paragraph, index) => (
            <p key={index} className="leading-7 text-[#042718]/80">
              {paragraph}
            </p>
          ))}
        </div>

        <nav className="mb-10 rounded-3xl border border-[#042718]/10 bg-[#F6FDFF] p-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#198F38]">
            Daftar Isi
          </p>
          <ol className="grid gap-1.5 sm:grid-cols-2">
            {SECTIONS.map((section, index) => {
              const slug = slugify(section.title);
              return (
                <li key={section.title}>
                  <a
                    href={`#${slug}`}
                    onClick={() => openSection(slug)}
                    className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm text-[#042718]/70 transition hover:bg-white hover:text-[#042718]"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#198F380F] text-xs font-bold text-[#198F38]">
                      {index + 1}
                    </span>
                    <span className="truncate">{section.title}</span>
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="space-y-5">
          {SECTIONS.map((section, index) => {
            const slug = slugify(section.title);
            const isOpen = !!openSlugs[slug];
            return (
              <section
                key={section.title}
                id={slug}
                className="scroll-mt-24 overflow-hidden rounded-3xl border border-[#042718]/10 bg-white shadow-sm shadow-[#04271808]"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleSection(slug)}
                  className="flex w-full items-center gap-3 p-6 text-left sm:p-8"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#198F38] text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <h2 className="flex-1 font-heading text-lg font-semibold tracking-tight text-[#042718] sm:text-xl">
                    {section.title}
                  </h2>
                  <ChevronRightIcon
                    className={`h-5 w-5 shrink-0 text-[#042718]/40 transition-transform duration-300 ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                      {section.paragraph && (
                        <p className="leading-7 text-[#042718]/80">
                          {section.paragraph}
                        </p>
                      )}
                      {section.entries && (
                        <EntryList entries={section.entries} depth={0} />
                      )}
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <PwCtaFooter />
      <PwWhatsappButton />
    </main>
  );
}

