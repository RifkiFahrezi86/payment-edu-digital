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

interface TermsSection {
  title: string;
  paragraph?: string;
  entries?: Entry[];
}

const INTRO_PARAGRAPHS = [
  <>
    <strong>Terima kasih</strong> telah mengunduh Aplikasi SAKU SULTAN.
  </>,
  "Syarat dan ketentuan ini mengatur ketentuan-ketentuan mengenai; pendaftaran untuk menjadi pengguna layanan Kami (PT IDE KREATIF ASIA), penyediaan layanan uang elektronik Kami, dan hal-hal lainnya yang berkaitan dengan Aplikasi SAKU SULTAN. Untuk kejelasan dan kepastian, Syarat dan Ketentuan ini berlaku sebagai perjanjian antara Anda dan Kami (\u201cSyarat dan Ketentuan\u201c).",
];

const SECTIONS: TermsSection[] = [
  {
    title: "PERSETUJUAN",
    paragraph:
      "Dengan mengunduh, mengakses, melakukan pendaftaran untuk menjadi pengguna layanan Kami, menggunakan Aplikasi SAKU SULTAN, atau menggunakan layanan-layanan Kami berarti Anda menyatakan dan mengakui bahwa Anda telah membaca, mempelajari, memahami, dan menyetujui seluruh ketentuan-ketentuan yang diatur dalam Syarat dan Ketentuan ini. Syarat dan Ketentuan ini juga berlaku atas penggunaan layanan-layanan uang elektronik Kami melalui website dan/atau aplikasi pihak ketiga.",
  },
  {
    title: "KETENTUAN PENDAFTARAN",
    entries: [
      {
        label: "Pendaftaran:",
        text: "Untuk dapat mengakses dan menggunakan Layanan SAKU SULTAN, Anda harus terlebih dahulu melakukan pendaftaran untuk menjadi Pengguna SAKU SULTAN. Pendaftaran sebagaimana dimaksud dapat Anda lakukan melalui kanal pendaftaran resmi Kami, yaitu:",
        children: [
          { text: "Aplikasi SAKU SULTAN;" },
          {
            text: "Platform Partner yang kami tentukan untuk dapat bertindak sebagai kanal pendaftaran elektronik resmi Kami; dan",
          },
          {
            text: "kanal pendaftaran resmi Kami lainnya sebagaimana Kami sediakan dan informasikan kepada Anda di kemudian hari.",
          },
        ],
      },
      {
        label: "Klasifikasi Akun:",
        text: "Kami menawarkan 2 (dua) jenis klasifikasi akun keanggotaan Pengguna SAKU SULTAN, sebagai berikut:",
        children: [
          {
            label: "SAKU SULTAN Family (Free User)",
            children: [
              {
                text: "SAKU SULTAN adalah klasifikasi akun Pengguna SAKU SULTAN yang merupakan pengguna uang elektronik unregistered sebagaimana diatur dalam Peraturan Bank Indonesia yang mengatur mengenai penyelenggaraan uang elektronik.",
              },
              {
                text: "Jika Anda berhasil melakukan pendaftaran dengan menggunakan nomor ponsel dan alamat email maka Anda akan langsung menjadi Pengguna SAKU SULTAN dengan klasifikasi akun SAKU SULTAN Family.",
              },
              {
                text: "Pengguna SAKU SULTAN dengan klasifikasi SAKU SULTAN Family dapat menggunakan beberapa layanan uang elektronik secara terbatas, yaitu:",
                children: [
                  {
                    text: "akun Anda dapat menampung Saldo SAKU SULTAN dengan batas maksimum Rp2.000.000,- (dua juta Rupiah), batas maksimum tersebut dapat berubah sewaktu-waktu dan secara otomatis mengikuti perubahan dan/atau pemberlakuan ketentuan Bank Indonesia;",
                  },
                  {
                    text: "akun Anda dapat menerima pengisian Saldo SAKU SULTAN (top up) dengan mengacu pada batasan yang dimaksud dalam poin (a) di atas; dan",
                  },
                  {
                    text: "layanan pemrosesan transaksi pembayaran untuk pembelian barang dan/atau jasa atau untuk pembayaran tagihan.",
                  },
                ],
              },
            ],
          },
          {
            label: "SAKU SULTAN Owners (Registered E-Money)",
            children: [
              {
                text: "SAKU SULTAN Owners adalah klasifikasi akun Pengguna SAKU SULTAN yang merupakan pengguna uang elektronik registered sebagaimana diatur dalam Peraturan Bank Indonesia yang mengatur mengenai penyelenggaraan uang elektronik.",
              },
              {
                text: "Anda dapat melakukan upgrade klasifikasi akun Anda menjadi SAKU SULTAN Owners dengan menyerahkan data dan informasi sebagaimana Kami syaratkan dalam Sub-BAB mengenai Upgrade pada BAB ini.",
              },
              {
                text: "Pengguna SAKU SULTAN dengan klasifikasi SAKU SULTAN Premier dapat menggunakan seluruh layanan uang elektronik, yaitu:",
                children: [
                  {
                    text: "akun Anda dapat menampung Saldo SAKU SULTAN dengan batas maksimum Rp20.000.000,- (dua puluh juta Rupiah), batas maksimum tersebut dapat berubah sewaktu-waktu dan secara otomatis mengikuti perubahan dan/atau pemberlakuan ketentuan Bank Indonesia;",
                  },
                  {
                    text: "akun Anda dapat menerima pengisian Saldo SAKU SULTAN (top up) dengan mengacu pada batasan yang dimaksud dalam poin (a) di atas;",
                  },
                  {
                    text: "layanan pemrosesan transaksi pembayaran untuk pembelian barang dan/atau jasa atau untuk pembayaran tagihan;",
                  },
                  {
                    text: "layanan transfer dana Saldo SAKU SULTAN antar-Pengguna SAKU SULTAN;",
                  },
                  {
                    text: "layanan transfer dana Saldo SAKU SULTAN ke rekening bank;",
                  },
                  {
                    text: "layanan tarik tunai Saldo SAKU SULTAN melalui mitra resmi Kami atau kanal tarik tunai resmi Kami; dan",
                  },
                  {
                    text: "layanan-layanan lainnya sebagaimana Kami kembangkan, sediakan, dan informasikan untuk dan kepada Anda di kemudian hari sesuai dengan ketentuan peraturan perundang-undangan yang berlaku.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        label: "Pendaftaran (SAKU SULTAN Owners):",
        children: [
          {
            text: "Untuk dapat melakukan pendaftaran Anda harus merupakan individu yang secara hukum berdasarkan hukum Republik Indonesia untuk melakukan tindakan-tindakan hukum, yaitu; Anda harus berusia minimal 18 (delapan belas tahun), atau sudah menikah, dan tidak sedang berada di bawah status pengawasan tahanan.",
          },
          {
            text: "Jika Anda melakukan pendaftaran padahal Anda bukan merupakan individu yang secara hukum sebagaimana dimaksud dalam huruf a di atas ini maka Anda menyatakan dan menjamin bahwa pendaftaran Anda telah disetujui oleh orang tua, atau wali Anda yang sah.",
          },
          {
            text: "Pada saat melakukan pendaftaran Anda wajib memasukkan nomor ponsel dan alamat email yang masih aktif, valid, dan akurat serta belum pernah didaftarkan sebelumnya kepada Kami, ke Aplikasi SAKU SULTAN atau Platform Partner yang merupakan kanal pendaftaran elektronik resmi Kami.",
          },
          {
            text: "Anda wajib untuk memasukkan kode one-time password (\u201cOTP\u201d) yang Kami kirimkan kepada Anda melalui layanan pesan singkat (Short Messaging Service / SMS) ke nomor ponsel yang dimaksud dalam huruf c di atas dan Anda wajib untuk membuat security code berupa 4 (empat) digit angka yang tidak boleh dibuat secara berurutan atau berulang (\u201cSecurity Code\u201c).",
          },
          {
            text: "Kode OTP dan Security Code merupakan kode rahasia yang digunakan untuk mengakses akun Anda dan memanfaatkan Layanan SAKU SULTAN. Oleh karena itu, Anda wajib untuk selalu menjaga keamanan dan kerahasiaan kode OTP dan Security Code. Demi keamanan akun Anda, mohon untuk tidak membagikan, menginformasikan, atau mengungkapkan kode OTP ataupun Security Code kepada pihak mana pun termasuk petugas SAKU SULTAN, customer service, dll.",
          },
          {
            text: "Untuk kejelasan terkait pendaftaran (registrasi), 1 (satu) Pengguna hanya dapat melakukan pendaftaran (registrasi) untuk 1 (satu) akun dan 1 (satu) nomor ponsel hanya dapat digunakan untuk pendaftaran (registrasi) satu kali.",
          },
        ],
      },
      {
        label: "Upgrade (SAKU SULTAN Owners):",
        children: [
          {
            text: "Upgrade dilaksanakan untuk meningkatkan klasifikasi akun Anda dari SAKU SULTAN Family menjadi SAKU SULTAN Owners.",
          },
          {
            text: "Anda wajib melakukan upgrade hanya melalui kanal upgrade elektronik resmi Kami, yaitu; Aplikasi SAKU SULTAN, Platform Partner (yang Kami peruntukan sebagai kanal upgrade elektronik Kami), atau kanal upgrade lainnya sebagaimana Kami kembangkan, sediakan, dan informasikan untuk dan kepada Anda di kemudian hari.",
          },
          {
            text: "Anda wajib menyerahkan data dan informasi berupa; foto dokumen identitas; foto KTP bagi Anda yang merupakan WNI atau foto halaman identitas pada Paspor Anda bagi Anda yang merupakan WNA, secara valid, benar, akurat, dan jelas, melalui Aplikasi SAKU SULTAN atau Platform Partner yang Kami peruntukan sebagai kanal upgrade elektronik resmi Kami.",
          },
          {
            text: "Kami berhak menolak permintaan upgrade Anda, jika dokumen identitas, foto, dan/atau rekam verifikasi gerak wajah yang Anda serahkan sudah pernah digunakan sebelum-nya atau tidak valid, benar, akurat, ataupun tidak dapat terlihat dengan jelas.",
          },
          {
            text: "Dengan melakukan upgrade berarti Anda memberikan persetujuan Anda kepada Kami untuk mengumpulkan, menyimpan dan memproses data dan informasi Anda sebagaimana tercantum dalam dokumen identitas yang Anda serahkan kepada Kami untuk; tujuan upgrade dan pengelolaan serta pengawasan akun Pengguna SAKU SULTAN Anda.",
          },
          {
            text: "Kami memiliki wewenang penuh untuk menentukan hasil dari permintaan upgrade Anda berdasarkan hasil penilaian Kami terhadap data, informasi, dokumen, foto, dan/atau rekam verifikasi gerak wajah yang Anda serahkan kepada Kami.",
          },
        ],
      },
      {
        label: "Nomor Ponsel dan Email:",
        children: [
          {
            text: "Perlu diketahui bahwa akun Pengguna SAKU SULTAN Anda didasarkan pada nomor ponsel yang Anda daftarkan kepada Kami pada saat pendaftaran. Nomor ponsel Anda dibutuhkan untuk pengaksesan akun, pengiriman kode OTP, pelaksanaan transaksi pembayaran, pelaksanaan pengisian Saldo SAKU SULTAN (top up), komunikasi, dan pengiriman informasi-informasi penting lainnya.",
          },
          {
            text: "Kami juga meminta Anda untuk mendaftarkan alamat email Anda kepada Kami untuk tujuan penyediaan informasi-informasi penting lainnya terkait Aplikasi SAKU SULTAN.",
          },
          {
            text: "Anda wajib untuk melapor jika anda memperbarui nomor ponsel dan/atau alamat email pada Aplikasi SAKU SULTAN Anda dengan segera, apabila Anda mengganti nomor ponsel dan/atau alamat email Anda agar Kami dapat memperbarui informasi kontak-kontak Anda dalam sistem Kami.",
          },
        ],
      },
    ],
  },
  {
    title: "PERLINDUNGAN DATA",
    entries: [
      {
        text: "Kami akan berupaya sebaik mungkin untuk selalu menjaga keamanan dan kerahasiaan data dan informasi yang Anda serahkan kepada Kami maupun yang Kami kumpulkan dari Anda, terutama yang menyangkut data pribadi Anda dan aktivitas penggunaan Layanan SAKU SULTAN, yang diserahkan kepada Kami atau dikumpulkan oleh Kami untuk tujuan pendaftaran, upgrade, pemutakhiran data, penyampaian informasi, pengurusan klaim, analisa, pengembangan/peningkatan layanan, dan tujuan-tujuan lainnya sepanjang tidak bertentangan dengan peraturan perundang-undangan yang berlaku.",
      },
      {
        text: (
          <>
            Dengan memberikan persetujuan Anda terhadap Syarat dan Ketentuan
            ini berarti Anda juga telah menyetujui Pemberitahuan Privasi yang
            dapat Anda akses, baca, dan pelajari melalui tautan berikut:{" "}
            <Link
              href="/kebijakan-privasi"
              className="font-semibold text-[#198F38] underline underline-offset-2"
            >
              Pemberitahuan Privasi
            </Link>
            . Mohon untuk membaca dan mempelajari dengan seksama seluruh
            ketentuan-ketentuan dalam Pemberitahuan Privasi tersebut agar
            Anda mengerti dan memahami bagaimana Kami melindungi dan
            memproses data dan informasi Anda.
          </>
        ),
      },
      {
        text: "Dalam hal Kami mengubah ketentuan dalam Pemberitahuan Privasi tersebut maka perubahan tersebut akan diberitahukan kepada Anda paling lambat 30 (tiga puluh) hari kerja sebelum perubahan tersebut berlaku efektif, dan perubahan tersebut akan dilaksanakan dengan mengacu pada ketentuan peraturan perundang-undangan yang berlaku.",
      },
    ],
  },
  {
    title: "SALDO SAKU SULTAN",
    entries: [
      {
        text: "Saldo SAKU SULTAN adalah uang elektronik berbasis server yang Kami terbitkan sesuai dengan ketentuan Peraturan Bank Indonesia yang mengatur mengenai penyelenggaraan uang elektronik. Untuk kejelasan, Saldo SAKU SULTAN merupakan uang elektronik sehingga bukan merupakan simpanan sebagaimana dimaksud dalam peraturan perundang-undangan dibidang Perbankan yang dijamin oleh Lembaga Penjamin Simpanan.",
      },
      {
        text: "Saldo SAKU SULTAN dapat digunakan untuk:",
        children: [
          {
            text: "pelaksanaan transaksi pembayaran untuk pembelian dan/atau pembayaran barang dan/atau jasa atau pembayaran tagihan;",
          },
          {
            text: "pelaksanaan transfer dana antar-pengguna SAKU SULTAN (untuk Pengguna SAKU SULTAN dengan klasifikasi akun SAKU SULTAN Owners); dan",
          },
          {
            text: "pelaksanaan transfer dana ke rekening bank (untuk Pengguna SAKU SULTAN dengan klasifikasi akun SAKU SULTAN Owners).",
          },
        ],
      },
      {
        text: "Bagi Pengguna SAKU SULTAN dengan klasifikasi akun SAKU SULTAN Owners, saldo SAKU SULTAN dapat ditarik secara tunai melalui mitra dan kanal tarik tunai resmi Kami.",
      },
      {
        text: "Pengguna SAKU SULTAN dapat melakukan pengisian Saldo SAKU SULTAN (top up) melalui mitra dan kanal top up resmi Kami, atau melalui transfer dana dari rekening Bank, penyetoran langsung melalui Bank, atau melalui kanal top up lainnya sebagaimana tersedia dari waktu ke waktu.",
      },
      {
        text: "Kami menerapkan batas maksimum nilai SAKU SULTAN yang dapat masuk/diisikan/di-top up ke akun Pengguna SAKU SULTAN dalam kurun waktu 1 (satu) bulan, yaitu sebesar Rp40.000.000,- (empat puluh juta rupiah) bagi Pengguna SAKU SULTAN dengan klasifikasi akun SAKU SULTAN Owners atau Rp20.000.000 bagi Pengguna SAKU SULTAN dengan klasifikasi akun SAKU SULTAN Family. Batasan tersebut berlaku bagi transaksi yang bersifat incoming atau transaksi masuk, yaitu:",
        children: [
          { text: "setoran awal SAKU SULTAN ke akun Pengguna SAKU SULTAN;" },
          {
            text: "transfer dana masuk ke akun Pengguna SAKU SULTAN dari akun Pengguna SAKU SULTAN lainnya;",
          },
          {
            text: "transfer dana masuk ke akun Pengguna SAKU SULTAN dari rekening bank; dan",
          },
          {
            text: "pengisian ulang saldo SAKU SULTAN (top up) ke akun Pengguna SAKU SULTAN.",
          },
        ],
      },
      {
        text: "Batasan yang dimaksud dalam ketentuan Angka 5 di atas dapat berubah sewaktu-waktu dan secara otomatis mengikuti perubahan dan/atau pemberlakuan ketentuan Bank Indonesia.",
      },
      {
        text: "Untuk transaksi pembayaran yang difasilitasi dengan kode quick response berstandar Quick Response Code Indonesia Standard (QRIS), Kami menetapkan batas maksimum nominal transaksi pembayaran per transaksi sesuai dengan ketentuan yang diatur dan diberlakukan oleh Bank Indonesia.",
      },
      {
        text: "Pengisian saldo SAKU SULTAN, baik dari setoran awal, pengisian ulang (top-up), atau transfer masuk (transfer-in), bukan merupakan pemberian pinjaman ataupun pendanaan dari Anda kepada Kami. Kami tidak memberikan janji dalam bentuk apapun atas bertambahnya nilai uang yang Anda titipkan kepada Kami dalam rangka pengisian saldo SAKU SULTAN, baik dalam bentuk bunga atau apapun.",
      },
    ],
  },
  {
    title: "KOREKSI",
    entries: [
      {
        text: "Kami berhak untuk melakukan koreksi atas saldo SAKU SULTAN dan SAKU SULTAN Coin pada akun Anda (memotong/mendebet atau mengkredit), dan melakukan koreksi atas informasi-informasi terkait dengan transaksi pembayaran, transfer dana, ataupun penyediaan layanan-layanan Kami lainnya pada Aplikasi SAKU SULTAN.",
      },
      {
        text: "Kami berhak untuk melakukan Koreksi sebagaimana dimaksud dalam Angka 1 di atas, karena salah satu atau lebih kondisi-kondisi berikut ini:",
        children: [
          {
            text: "Terjadi kesalahan atau kekeliruan yang menyebabkan kesalahan pada Saldo SAKU SULTAN dan/atau SAKU SULTAN Coin Anda, atau informasi Anda, atau yang menyebabkan Anda menerima Saldo SAKU SULTAN, SAKU SULTAN Coin, dan/atau layanan yang tidak seharusnya Anda terima.",
          },
          {
            text: "Terdapat permintaan langsung atau persetujuan dari pemilik akun yang akan menerima pelaksanaan koreksi.",
          },
          {
            text: "Terdapat permintaan langsung dari kepolisian, pengadilan, atau otoritas berwenang.",
          },
          {
            text: "Akun Anda terbukti telah digunakan untuk melakukan suatu tindakan yang merupakan pelanggaran atas Syarat dan Ketentuan ini atau Tindakan Penyalahgunaan, ATAU Anda terbukti melakukan pelanggaran atas Syarat dan Ketentuan ini atau melakukan Tindakan Penyalahgunaan. Sehingga Kami berhak untuk melakukan koreksi (memotong atau mendebet) saldo SAKU SULTAN dan/atau SAKU SULTAN Coin Anda untuk ganti rugi atas kerugian material yang timbul dari pelanggaran atau Tindakan Penyalahgunaan tersebut.",
          },
          {
            text: "Terjadi kondisi-kondisi lainnya yang menyebabkan Anda menerima layanan, saldo SAKU SULTAN, SAKU SULTAN Coin, dan/atau informasi yang seharusnya tidak Anda terima.",
          },
        ],
      },
      {
        text: "Terhadap permintaan atas koreksi dari pemilik akun, Kami akan melakukan koreksi berdasarkan pertimbangan dan kebijakan Kami setelah Kami melakukan tinjauan, verifikasi, atau investigasi terhadap validitas permintaan tersebut. Terkait dengan hal ini, Kami hanya akan melaksanakan koreksi, jika permintaan tersebut merupakan permintaan yang valid berdasarkan pertimbangan dan kebijakan Kami serta hasil dari tinjauan, verifikasi, atau investigasi yang Kami lakukan. Kami berhak untuk menentukan pelaksanaan atas koreksi yang berasal dari permintaan pemilik akun berdasarkan pertimbangan dan kebijakan Kami serta hasil dari tinjauan, verifikasi, atau investigasi yang Kami lakukan.",
      },
      {
        text: "Terhadap permintaan atas koreksi dari kepolisian, pengadilan, atau otoritas berwenang, Kami akan melakukan koreksi berdasarkan perintah yang Kami terima secara langsung dari kepolisian, pengadilan, atau otoritas berwenang dimaksud.",
      },
      {
        text: "Kami akan menginformasikan Anda mengenai koreksi yang Kami lakukan melalui Aplikasi SAKU SULTAN, Media Komunikasi, atau Media Publikasi.",
      },
      {
        text: "Sehubungan dengan pelaksanaan koreksi, Anda sepakat untuk memberikan kuasa kepada kami untuk melakukan koreksi atas saldo SAKU SULTAN, SAKU SULTAN Coin, dan informasi relevan lainnya pada akun Anda, dan Anda juga juga sepakat untuk membebaskan Kami dari setiap tuntutan, gugatan, klaim, dan/atau ganti rugi berkaitan dengan pelaksanaan koreksi tersebut sepanjang Kami dapat membuktikan bahwa pelaksanaan koreksi didasarkan pada informasi dan bukti yang valid.",
      },
    ],
  },
  {
    title: "KEWAJIBAN, LARANGAN, DAN PELANGGARAN",
    entries: [
      {
        label: "Kewajiban:",
        children: [
          {
            text: "Anda wajib untuk mengakses dan menggunakan akun Anda, Aplikasi SAKU SULTAN, Layanan SAKU SULTAN, dan Produk Lainnya, dengan itikad baik, tujuan yang sah dan tidak melanggar peraturan perundang-undangan yang berlaku, dan sesuai dengan Syarat dan Ketentuan ini.",
          },
          {
            text: "Anda wajib untuk mengakses dan menggunakan akun Anda, Aplikasi SAKU SULTAN, Layanan SAKU SULTAN, dan Produk Lainnya dengan penuh kehati-hatian, secara cermat, dan teliti.",
          },
          {
            text: "Anda wajib mematuhi dan melaksanakan seluruh ketentuan-ketentuan yang diatur dalam Syarat dan Ketentuan ini.",
          },
        ],
      },
      {
        label: "Larangan:",
        children: [
          {
            text: "Anda dilarang untuk melakukan pengisian ulang saldo SAKU SULTAN (top up) menggunakan sumber dana yang ilegal atau sumber dana yang didasarkan pada fasilitas kredit atau sumber dana yang bukan merupakan sumber dana uang (tunai).",
          },
          {
            text: "Anda dilarang untuk menyediakan jasa penguangan SAKU SULTAN dan/atau SAKU SULTAN Coin kepada masyarakat.",
          },
          {
            text: "Anda dilarang untuk menyediakan jasa pengisian saldo SAKU SULTAN (top up) kepada masyarakat, tanpa persetujuan tertulis terlebih dahulu dari Kami.",
          },
          {
            text: "Anda dilarang untuk menyediakan jasa transfer dana melalui SAKU SULTAN kepada masyarakat, tanpa persetujuan tertulis terlebih dahulu dari Kami.",
          },
          {
            text: "Anda dilarang untuk mengatasnamakan Kami (PT IDE KREATIF ASIA) dan/atau afiliasi-afiliasi Kami dalam melaksanakan tindakan-tindakan apapun, tanpa persetujuan tertulis terlebih dahulu dari Kami.",
          },
          {
            text: "Anda dilarang untuk memberikan pernyataan dan jaminan yang tidak benar atau menyesatkan terkait dengan Syarat dan Ketentuan ini.",
          },
          {
            text: "Anda dilarang untuk menyediakan data dan informasi palsu atau menyesatkan yang dapat merugikan Kami, Pengguna SAKU SULTAN lainnya, dan/atau pihak manapun.",
          },
          {
            text: "Anda dilarang untuk melakukan tindakan-tindakan yang merupakan pelanggaran atas Syarat dan Ketentuan ini, peraturan perundang-undangan yang berlaku, dan kepentingan pihak manapun.",
          },
        ],
      },
      {
        label: "Pelanggaran:",
        children: [
          {
            text: "Pelanggaran atas salah satu atau lebih ketentuan-ketentuan dalam Syarat dan Ketentuan ini, baik yang Anda lakukan atau yang terjadi dari akun Anda, menyebabkan Kami berhak untuk mengambil salah satu atau lebih dari tindakan-tindakan berikut ini:",
            children: [
              { text: "Melakukan Pemblokiran atas akun Anda." },
              { text: "Melakukan Penutupan atas akun Anda." },
              { text: "Melakukan Downgrade atas akun Anda." },
              {
                text: "Menghentikan penyediaan Aplikasi SAKU SULTAN dan/atau Layanan SAKU SULTAN, baik untuk sebagian atau keseluruhan dan untuk sementara waktu atau secara permanen.",
              },
              {
                text: "Menghentikan akses Anda terhadap Produk Lainnya, baik untuk sebagian atau keseluruhan dan untuk sementara waktu atau secara permanen.",
              },
              {
                text: "Melakukan koreksi sebagaimana dimaksud pada BAB mengenai Koreksi, atau melakukan penahanan, penarikan kembali, dan pendebetan/pemotongan atas Saldo SAKU SULTAN dan/atau SAKU SULTAN Coin Anda untuk tujuan ganti rugi, apabila pelanggaran yang Anda lakukan menyebabkan kerugian material terhadap Kami, Pengguna SAKU SULTAN lainnya, dan/atau pihak lain manapun.",
              },
              {
                text: "Melakukan koreksi sebagaimana dimaksud pada BAB mengenai Koreksi, atau melakukan penahanan, penarikan kembali, dan/atau pendebetan/ pemotongan atas saldo SAKU SULTAN dan/atau saldo SAKU SULTAN Coin yang Anda dapatkan secara tidak sah, dan membatalkan penyediaan layanan yang Anda dapatkan secara tidak sah.",
              },
            ],
          },
          {
            text: "Pemberian dan penerapan sanksi yang disebutkan dalam huruf a di atas bergantung pada tingkat keparahan atas pelanggaran yang dilakukan dan dampak yang timbul akibat dari pelanggaran tersebut",
          },
        ],
      },
    ],
  },
  {
    title: "PENGHENTIAN LAYANAN",
    entries: [
      {
        text: "Kami berhak untuk menghentikan penyediaan Aplikasi SAKU SULTAN dan/atau Layanan SAKU SULTAN, secara sebagian atau secara keseluruhan dan untuk jangka waktu tertentu atau secara permanen, karena terjadinya salah satu atau lebih dari ketentuan-ketentuan berikut ini:",
        children: [
          { text: "Terjadi Pemblokiran atau Penutupan akun." },
          {
            text: "Terjadi pelanggaran atas salah satu atau lebih ketentuan-ketentuan dalam Syarat dan Ketentuan ini, baik yang Anda lakukan atau yang terjadi dari akun Anda.",
          },
          {
            text: "Terjadi kerusakan, gangguan, dan/atau peretasan, pada sistem operasi Kami yang menyebabkan Kami harus menghentikan penyediaan Layanan SAKU SULTAN.",
          },
          {
            text: "Terdapat indikasi atas terjadinya suatu transaksi atau aktivitas yang mencurigakan yang patut diduga merupakan suatu tindakan pencucian uang, pendanaan kegiatan terorisme, atau tindakan pelanggaran atas peraturan perundang-undangan yang berlaku, yang dapat merugikan Kami, Pengguna SAKU SULTAN lainnya, diri Anda sendiri, dan/atau pihak lain manapun.",
          },
          {
            text: "Kami mendapatkan perintah dari otoritas atau instansi yang berwenang untuk menghentikan sebagian atau seluruh aktivitas penyelenggaraan uang elektronik Kami dan/atau Aplikasi SAKU SULTAN yang mengakibatkan Kami tidak dapat menyediakan Aplikasi SAKU SULTAN atau Layanan SAKU SULTAN, baik sebagian atau secara keseluruhan.",
          },
          {
            text: "Terjadinya suatu Keadaan Kahar yang menyebabkan Kami tidak dapat menyediakan Aplikasi SAKU SULTAN dan/atau Layanan SAKU SULTAN, baik sebagian atau secara keseluruhan.",
          },
        ],
      },
      {
        label: "Ketentuan Penghentian:",
        children: [
          {
            text: "Penghentian penyediaan Aplikasi SAKU SULTAN dan/atau Layanan SAKU SULTAN karena alasan Pemblokiran akun akan berakhir setelah akun diaktifkan kembali.",
          },
          {
            text: "Penghentian penyediaan Aplikasi SAKU SULTAN dan/atau Layanan SAKU SULTAN karena alasan Penutupan akun merupakan penghentian yang dilaksanakan secara permanen.",
          },
          {
            text: "Penghentian penyediaan Aplikasi SAKU SULTAN dan/atau Layanan SAKU SULTAN karena alasan pelanggaran Syarat dan Ketentuan ini dapat dilaksanakan untuk jangka waktu tertentu ataupun secara permanen bergantung pada tingkat keparahan atas pelanggaran yang dilakukan dan dampak yang timbul akibat dari pelanggaran tersebut.",
          },
        ],
      },
      {
        text: "Dalam hal terjadi penghentian penyediaan layanan yang dimaksud dalam BAB ini maka Kami akan menginformasikan Anda mengenai penghentian tersebut melalui Aplikasi SAKU SULTAN, Media Komunikasi, atau Media Publikasi",
      },
      {
        text: "Dalam hal terjadi penghentian penyediaan layanan yang dimaksud dalam BAB ini, Anda dapat menghubungi Layanan Bantuan Pengguna untuk memperoleh informasi lebih lanjut mengenai penghentian penyediaan layanan yang Anda alami.",
      },
    ],
  },
  {
    title: "FORCE MEAJURE",
    entries: [
      {
        text: "\u201cForce Meajure\u201c adalah keadaan atau kondisi yang terjadi di luar kemampuan pihak yang mengalaminya untuk mencegahnya dan tidak dapat dihindarkan oleh pihak yang mengalaminya, sehingga menyebabkan pihak yang mengalaminya tidak dapat melaksanakan seluruh atau sebagian kegiatannya yang berpengaruh terhadap pelaksanaan hak dan kewajiban dari pihak yang mengalaminya. Kejadian-kejadian yang termasuk ke dalam Keadaan Kahar, yaitu; bencana alam, kebakaran, banjir, kondisi perang, baik yang dinyatakan atau tidak, sabotase, pemogokan, demonstrasi, kerusuhan sosial, epidemi atau pandemi, diundangkannya suatu peraturan perundang-undangan, atau kondisi atau kejadian yang secara wajar tidak dapat dicegah oleh kemampuan pihak yang mengalaminya, yang menyebabkan pihak yang mengalaminya tidak dapat melaksanakan hak dan kewajiban yang timbul dari Syarat dan Ketentuan ini.",
      },
      {
        text: "Anda dengan ini sepakat bahwa kegagalan atau keterlambatan Kami dalam melaksanakan kewajiban-kewajiban dan/atau tanggung jawab Kami yang disebabkan oleh terjadinya suatu Keadaan Kahar tidak dapat dianggap sebagai suatu kejadian kelalaian atau wanprestasi.",
      },
      {
        text: "Anda dengan ini sepakat untuk tidak akan mengajukan gugatan, tuntutan, klaim dan/atau meminta ganti kerugian atas keterlambatan atau kegagalan Kami dalam melaksanakan dan memenuhi kewajiban-kewajiban Kami yang disebabkan oleh suatu Keadaan Force Meajure.",
      },
    ],
  },
  {
    title: "HUKUM YANG BERLAKU DAN PENYELESAIAN PERSELISIHAN",
    entries: [
      {
        text: "Seluruh ketentuan-ketentuan yang diatur dalam Syarat dan Ketentuan ini diatur dan ditafsirkan berdasarkan hukum yang berlaku di Negara Kesatuan Republik Indonesia.",
      },
      {
        text: "Anda dengan ini sepakat bahwa seluruh perselisihan yang timbul dari Syarat dan Ketentuan ini akan diselesaikan secara musyawarah untuk mencapai suatu kemufakatan.",
      },
      {
        text: "Anda dan Kami, secara sendiri-sendiri, juga berhak untuk mengajukan penyelesaian atas perselisihan ke pengadilan negeri Makassar dan Bank Indonesia.",
      },
    ],
  },
  {
    title: "MASA BERLAKU",
    entries: [
      {
        text: "Seluruh ketentuan-ketentuan dalam Syarat dan Ketentuan ini mulai berlaku sejak Anda melakukan pendaftaran untuk menjadi Pengguna SAKU SULTAN dan akan tetap berlaku:",
        children: [
          {
            text: "selama Anda mengakses dan menggunakan Aplikasi SAKU SULTAN dan/atau Layanan SAKU SULTAN; dan/atau",
          },
          {
            text: "selama Anda masih terdaftar sebagai Pengguna SAKU SULTAN atau Anda masih memiliki akun Pengguna SAKU SULTAN yang belum dinonaktifkan secara permanen (ditutup secara permanen).",
          },
        ],
      },
      {
        text: "Anda dengan ini sepakat untuk mengesampingkan ketentuan dalam Pasal 1266 Kitab Undang-Undang Hukum Perdata sepanjang mengenai dibutuhkannya suatu putusan atau penetapan pengadilan untuk mengakhiri suatu perjanjian. Sehingga pengakhiran hubungan hukum antara Anda dan Kami berdasarkan Syarat dan Ketentuan ini dapat berakhir atau diakhiri tanpa memerlukan suatu putusan atau penetapan dari pengadilan.",
      },
    ],
  },
  {
    title: "TANGGAL BERLAKU",
    paragraph:
      "Ketentuan-ketentuan dalam Syarat dan Ketentuan ini merupakan versi yang Kami berlakukan secara efektif sejak tanggal 01 Januari 2023.",
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

export default function TermsPage() {
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
              Syarat &amp; Ketentuan
            </h1>
          </PwReveal>
          <PwReveal delay={200}>
            <p className="mt-4 max-w-[560px] text-base text-white/70 sm:text-lg">
              Aplikasi SAKU SULTAN &middot; berlaku efektif sejak 01 Januari 2023
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
