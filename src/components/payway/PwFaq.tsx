"use client";

import { useState, type KeyboardEvent } from "react";
import { PwReveal } from "@/components/payway/pw-reveal";
import { PwSectionHeader } from "@/components/payway/pw-section-header";
import { ChevronRightIcon } from "@/components/payway/pw-icons";
import { SsBgVideo } from "@/components/saku/SsBgVideo";

/**
 * Section 08 — FAQ ("Everything you need to know about Payway").
 * Sumber markup: docs/research/jiro-payway/sections/08-faq.html (kelas 1:1)
 * Konten expanded: docs/research/jiro-payway/faq-states.json
 * Referensi visual: docs/design-references/jiro-payway/sec-08-faq.png
 *
 * Model interaksi: accordion click-driven SINGLE-OPEN — capture menunjukkan
 * tepat satu item terbuka (01: dark bg-[#042718] + video BG + ikon X) dan
 * sisanya collapsed (ikon plus, border-transparent). Klik item lain menutup
 * yang sebelumnya; klik item terbuka menutupnya (ikon X = affordance close).
 *
 * Animasi tinggi jawaban: grid-template-rows 0fr -> 1fr, 300ms ease-in-out
 * (mengganti residu framer `style="height: auto; opacity: 0.8"` pada <p>).
 * Saat collapsed, -mt-[8px]/[10px] menetralkan gap kolom pertanyaan sehingga
 * geometri closed persis markup (item closed asli tidak merender <p>).
 * Warna kontainer/padding dianimasikan kelas asli `transition-all duration-500`.
 */

type FaqItem = { category: string; q: string; a: string };

/**
 * Konten diambil verbatim dari halaman Pusat Bantuan sakusultan.id
 * (https://sakusultan.id/saku-sultan/pusat-bantuan/), dikelompokkan
 * persis sesuai 4 kategori aslinya.
 */
const FAQ_ITEMS: FaqItem[] = [
  {
    category: "Tentang Saku Sultan",
    q: "Apa itu Saku Sultan ?",
    a: "adalah Brand dari PT. Ide Kreatif Asia yang merupakan Saku digital Indonesia yang didesain untuk menjadikan setiap transaksi non-tunai dan non-kartu secara digital, baik online maupun offline dapat berjalan dengan cepat, praktis dan tetap terjamin keamanannya, serta akan bertransformasi menjadi Aset Digital Masa Depan.\n\nDengan Saku Sultan, masyarakat bisa menjadi lebih produktif, efisien, dan kompeten. Saku Sultan juga dapat dioptimalkan untuk mendukung komitmen pemerintah menghemat biaya produksi dan distribusi uang fisik, serta meningkatkan literasi dan inklusi keuangan masyarakat Indonesia.",
  },
  {
    category: "Tentang Saku Sultan",
    q: "Apa saja keuntungan menggunakan Saku Sultan?",
    a: "Keuntungan dengan menggunakan Saku Sultan:\n1. Dengan Saku Sultan tidak perlu membawa uang tunai\n2. Dapat melakukan top-up saldo Saku Sultan dengan minimum Rp.50.000\n3. Dapat melakukan pembayaran transaksi berikut:\n\nPulsa, Paket Data, Listrik (PLN Pra(Token), PLN Pasca)\n\nE-Money: ISAKU, PAYTREN, Spotify, Google Play, iTunes, Joox, Lyto, Megaxus, Netflix, Nintendo eShop, Razer Pin, Skyegrid, Steam, Vidio, Viu, Webtoon, Wifi ID, Mtix\n\nPDAM\n\nGames: Mobile Legends, Call of Duty Mobile, Point Blank, Free Fire, AOV, PUBG, Minecraft, Speed Drifters, Higgs Domino, Genshin Impact, Lords Mobile, Marvel Super War\n\nInternet: CBN Internet, MY Republic Internet, INDIHOME\n\nBPJS: BPJS Kesehatan, BPJS Ketenagakerjaan\n\nCicilan: ACC Finance, AEON Cicilan, PT AEON Credit Service Indonesia, Allianz Asuransi, PT Artha Asia Finance, Artha Prima Finance, ACC(Astra Credit Company-Astra Sedaya Finance), Pembayaran PT. BFI Finance Indonesia, Bima Finance, Blibli.com Tagihan dibawah 1jt, Blibli.com Tagihan diatas 1jt, BUANA FINANCE, CIMB Niaga Master Card, CIMB Niaga VISA, Angsuran COLUMBIA, Angsuran Kredit Plus(FINANSIA), Home Credit Indonesia, Indomobil Finance Indonesia, Angsuran ITC Multi Finance, JACCS MPM FINANCE Indonesia, Mega Auto Finance, Mandiri Utama Finance, Mega Central Finance, Mega Finance, MNC Finance, Multindo Auto Finance, Nissan Finance, NSC Finance, OTO Kredit Mobil/Motor, Pro Car International Finance, Pro Mitra Finance, Radana Finance / HD Finance, Smart Multi Finance, SMS Finance, Pembayaran PT Suzuki Finance, Tokio Marine (All Tagihan), WOM Finance\n\nDonasi: ABU DARDA CARE (Yayasan Kampung Quran Abu Darda), Uang Panai\n\nHP Pascabayar: MATRIX(Indosat), MATRIX B(Indosat), SMARTFREN(Sinarmas), THREE A(Three Selular), THREE B(Three Selular), KARTU HALO A(Telkomsel), KARTU HALO B(Telkomsel), KARTU HALO D(Telkomsel), TELKOM(Telkomsel), XL\n\nTagihan TV: K-Vision 50, K-Vision 70, K-Vision 100, K-Vision 125, K-Vision 150, K-Vision 200, K-Vision 300, K-Vision 500, First Media, INDOVISION, TELKOMVISION\n\nTop Up Driver Ojol: MAXIM, OVO, GoPay\n\nGas Negara: PERTAGAS (Perusahaan Gas), PGN\n\nAsuransi: CAR, HEKSA INSURANCE Premi Lanjutan, IFG Life, Takaful Pembayaran Premi\n\nPajak Bumi Bangunan\n\nPulsa International: China, Malaysia, Philipines, Singapore, Bangladesh, Taiwan, Thailand\n\nE-Toll\n\nVoucher Digital: Alfamart, Traveloka, Indomaret, Tokopedia, MAP Gift Voucher\n\nHotel, Tiket Pesawat, Tiket Pelni, Tiket Kereta",
  },
  {
    category: "Tentang Saku Sultan",
    q: "Apakah Saku Sultan bisa digunakan di semua jenis ponsel ?",
    a: "Saku Sultan hanya bisa digunakan pada ponsel berbasis iOS dan Android.",
  },
  {
    category: "Akun & Pengaturan",
    q: "Bagaimana cara Daftar/Registrasi di Saku Sultan ?",
    a: "Download aplikasi Saku Sultan di App Store/Play Store.\n\nKemudian lakukan registrasi dengan mengisi nomor ponselmu yang aktif (Ini akan menjadi ID Saku Sultan kamu) dan password yang kamu inginkan.\n\nSetelah itu tekan tombol \u2018Daftar\u2019.",
  },
  {
    category: "Akun & Pengaturan",
    q: "Bagaimana cara Login/masuk di Saku Sultan ?",
    a: "Ikuti langkah-langkah berikut ini.\nPada halaman Login masukkan Nomor HP dan juga Password yang telah anda daftarkan saat melakukan Registrasi.\n\nJika nomor HP dan Password yang anda masukkan telah benar, tekan tombol \u2018Login\u2019, maka anda akan masuk ke halaman Utama Saku Sultan.",
  },
  {
    category: "Akun & Pengaturan",
    q: "Bagaimana cara Logout/keluar dari akun Saku Sultan?",
    a: "kuti langkah-langkah berikut ini.\nPada halaman utama pilih menu \u2018Profile\u2019.\n\nLalu scroll ke paling bawah untuk mencari tombol \u2018Logout\u2019, setelah itu tekan tombol \u2018Logout\u2019.",
  },
  {
    category: "Akun & Pengaturan",
    q: "Bagaimana jika saya lupa Password akun Saku Sultan?",
    a: "Jika kamu lupa password ke akun Saku Sultan kamu, ikuti langkah-langkah ini.\nPada halaman Login, tekan \u2018Lupa password\u2019.\n\nKemudian masukkan nomor handphone anda yang telah terdaftar.\n\nMasukkan Kode Verifikasi yang telah dikirimkan ke akun WhatsApp Anda.\n\nMasukkan password baru anda. Kamu akan dapat masuk (login) menggunakan password yang baru ini.",
  },
  {
    category: "Akun & Pengaturan",
    q: "Bagaimana cara saya merubah PIN di akun Saku Sultan?",
    a: "Jika kamu ingin merubah PIN akun Saku Sultan ikuti langkah-langkah berikut ini.\nPada halaman utama, pilih menu \u2018Profile\u2019.\n\nPada bagian \u2018Keamanan\u2019 pilih menu \u2018Ubah PIN\u2019.\n\nSetelah di masukkan Kode Verifikasi anda akan diminta untuk masukkan PIN baru anda.",
  },
  {
    category: "Transaksi & Pembayaran",
    q: "Metode pembayaran apa saja yang tersedia?",
    a: "Untuk saat ini kamu dapat melakukan pembayaran menggunakan metode berikut :\nTransfer Bank\n\nBRI\nBNI\nMandiri\n\n*(untuk kedepan metode pembayarannya akan bertambah)",
  },
  {
    category: "Transaksi & Pembayaran",
    q: "Berapa lama saya harus menunggu saat Withdraw Saldo?",
    a: "Paling Lama 1\u00d724 jam pada hari Kerja.",
  },
  {
    category: "Transaksi & Pembayaran",
    q: "Apakah ada cara lain agar Pencairan Uang saya bisa CEPAT?",
    a: "Ada, Caranya :\n\nTransfer Saldo anda ke Link Aja (anda harus punya akun di Link Aja)\nTarik Saldo Anda dari Link Aja melalui ATM Cardless yang bekerjasama dengan LinkAja.\n\nKemudian berikut Cara Tarik uang Cardless dari ATM via Link Aja :\n\nBuka aplikasi LinkAja dari HP Anda\nPilih menu \u201cTarik Saldo\u201d dari halaman utama Pilih \u201cTarik Tunai di ATM\u201d\nMasukkan nominal saldo yang ingin diambil\nPilih \u201cBuat Kode Penarikan\u201d Kode penarikan akan muncul di layar dan berlaku selama 5 menit\nSetelah mendapat Kode Penarikan, cari mesin ATM Link terdekat\nTekan tombol \u201cAccept\u201d berwarna hijau di mesin ATM\nPilih \u201cTarik Tunai LinkAja\u201d lalu masuk ke pilihan \u201cCash Withdrawal\u201d\nMasukkan nomor HP yang digunakan untuk registrasi akun LinkAja Anda\nMasukkan kode penarikan sebagai verifikasi atau pengganti PIN\nTunggu beberapa saat hingga uang tunai akan muncul dari mesin ATM",
  },
  {
    category: "Transaksi & Pembayaran",
    q: "Apa yang terjadi apabila saya melakukan transfer tidak menggunakan kode unik?",
    a: "Saat anda melakukan transfer tidak dengan kode unik, maka silahkan menghubungi via whatsapp admin keuangan, sertakan bukti transfer, agar top up anda di proses secara manual, setelah itu admin akan memprosesnya dalam 1\u00d724 jam.",
  },
  {
    category: "Transaksi & Pembayaran",
    q: "Bagaimana cara melakukan Transaksi di Saku Sultan?",
    a: "Ada banyak fitur transaksi di aplikasi Saku Sultan, tapi sebagai salah satu contoh disini kita akan melakukan transaksi pembelian Pulsa, berikut langkah-langkahnya:\nPilih menu fitur \u2018Pulsa\u2019\n\nKemudian masukkan nomor Handphone tujuan dan pilih nominal Pulsa\n\nPastikan kembali nominal Pulsa, lalu tekan tombol \u2018Konfirmasi\u2019\n\nJika berhasil akan muncul notifikasi kemudian tekan \u2018Ok\u2019, maka akan muncul detail nota seperti dibawah ini. Tekan \u2018kembali\u2019 jika telah selesai",
  },
  {
    category: "Transaksi & Pembayaran",
    q: "Berapa limit transaksi bulanan di aplikasi Saku Sultan?",
    a: "Pengguna Saku Sultan Premium:Limit transaksi di akun Saku Sultan adalah Rp20.000.000 dan maksimal uang masuk setiap bulannya sebesar Rp40.000.000.\nPengguna Saku Sultan Non Premium:Limit transaksi di akun Saku Sultan adalah Rp2.000.000 dan maksimal uang masuk setiap bulannya sebesar Rp20.000.000.",
  },
  {
    category: "Transaksi & Pembayaran",
    q: "Berapa jumlah minimum transfer sesama Saku Sultan?",
    a: "Jumlah minimum transfer sesama Saku Sultan adalah Rp3.000",
  },
  {
    category: "Transaksi & Pembayaran",
    q: "Dimana saya dapat melihat bukti transfer yang telah selesai?",
    a: "Anda dapat melihat bukti transfer pada bagian berikut:\nPilih menu \u2018Aktivitas\u2019\n\nPada bagian \u2018History\u2019 anda dapat melihat bukti Transfer yang telah selesai\n\nJika ingin melihat detail dari bukti Transfer, tekan bukti transfer yang ingin dilihat detailnya",
  },
  {
    category: "Transaksi & Pembayaran",
    q: "Bagaimana cara transfer sesama Saku Sultan?",
    a: "Pada laman Saku Sultan, pilih menu \u2018Transfer\u2019\n\nPilih menu \u2018Transfer Saldo\u2019\n\nPilih nama Mitra Saku Sultan yang ada pada daftar, jika tidak ada tambahkan mitra lewat menu \u2018Tambah Mitra Saku Sultan\u2019\n\nMasukkan nomor ID Saku Sultan tujuan, jika ID yang dimasukkan sudah benar maka Nama Lengkap secara otomatis akan terisi. Lalu tekan tombol \u2018Simpan\u2019\n\nMasukkan nominal Saldo yang akan di transfer (Minimal transfer Rp3.000), lalu klik \u2018Konfirmasi\u2019\n\nPeriksa kembali nomor tujuan transfer dan detail nama penerima. Jika sudah sesuai, klik \u2018Bayar\u2019\n\nMasukkan kode PIN anda, jika benar akan muncul notifikasi berhasil\n\nSetelah itu akan muncul detail Transaksi Berhasil, maka transfer telah selesai. Tekan tombol \u2018Kembali\u2019 untuk ke halaman Utama",
  },
  {
    category: "Transaksi & Pembayaran",
    q: "Mengapa saya perlu memasukkan kode PIN pada saat melakukan transaksi di Saku Sultan?",
    a: "Kode PIN dibutuhkan untuk dapat menjamin keamanan kamu dalam bertransaksi.",
  },
  {
    category: "Saldo & Top Up",
    q: "Bagaimana cara melakukan Top Up di aplikasi Saku Sultan?",
    a: "Berikut langkah-langkahnya:\n\nPilih menu \u2018Top Up\u2019 pada laman Utama aplikasi Saku Sultan\n\nMasukkan nominal Top Up yang anda inginkan (Contoh dibawah: Rp.100.000)\n\nKemudian ada pilihan bank kemana anda akan mentransfer Top Up tersebut. Sebagai contoh disini kita akan memilih Top Up Via Bank BRI.\n\nPada halaman ini ada dua hal yang perlu diperhatikan, yakni Nomor Rekening perusahaan dan juga Nominal Transfer yang memiliki kode unik pada 3 angka terakhir dibelakangnya.",
  },
  {
    category: "Saldo & Top Up",
    q: "Bagaimana cara isi saldo Saku Sultan melalui BRI?",
    a: "Kamu dapat mengisi Saldo Saku Sultan melalui ATM BRI dengan cara:\n\nMasukkan kartu BRI dan PIN.\nPilih menu Transaksi Lainnya > Transfer.\nMasukkan Nomor Rekening.\nMasukkan nominal Top Up beserta kode unik.\nIkuti petunjuk selanjutnya untuk menyelesaikan transaksi.",
  },
  {
    category: "Saldo & Top Up",
    q: "Bagaimana cara isi saldo Saku Sultan melalui BNI?",
    a: "Kamu dapat mengisi Saldo Saku Sultan melalui ATM BNI dengan cara:\n\nMasukkan kartu BNI dan PIN.\nPilih Transaksi Lainnya > Transfer.\nMasukkan Nomor Rekening.\nMasukkan nominal Top Up beserta kode unik.\nIkuti petunjuk selanjutnya untuk menyelesaikan transaksi.",
  },
  {
    category: "Saldo & Top Up",
    q: "Bagaimana cara isi saldo Saku Sultan melalui Mandiri?",
    a: "Kamu dapat mengisi Saldo Saku Sultan melalui ATM Mandiri dengan cara:\n\nMasukkan kartu Mandiri dan PIN.\nPilih Transaksi Lainnya > Transfer.\nMasukkan Nomor Rekening.\nMasukkan nominal Top Up beserta kode unik.\nIkuti petunjuk selanjutnya untuk menyelesaikan transaksi",
  },
  {
    category: "Saldo & Top Up",
    q: "Berapa jumlah minimum isi Saldo Saku Sultan?",
    a: "Transfer dari Bank BRI, Mandiri, BNI: Rp50.000.",
  },
  {
    category: "Saldo & Top Up",
    q: "Bank apa saja yang dapat digunakan untuk isi saldo Saku Sultan via Transfer Bank?",
    a: "Bank BRI via ATM BRI, internet banking, mobile banking, dan mini ATM BRI.\nBank BNI via ATM BNI, internet banking dan mobile banking.\nBank Mandiri ATM Mandiri, Mandiri Online (Mobile/Web), dan ATM Bersama.",
  },
];

/** Kategori jadi dropdown tersendiri agar daftar 24 pertanyaan tidak sekaligus memanjangkan halaman. */
const FAQ_GROUPS = FAQ_ITEMS.reduce<{ category: string; items: FaqItem[] }[]>(
  (groups, item) => {
    const group = groups.find((g) => g.category === item.category);
    if (group) {
      group.items.push(item);
    } else {
      groups.push({ category: item.category, items: [item] });
    }
    return groups;
  },
  [],
);

export function PwFaq() {
  const [openCategory, setOpenCategory] = useState<string | null>(
    FAQ_GROUPS[0]?.category ?? null,
  );
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setOpenCategory((prev) => (prev === category ? null : category));
    setOpenQuestion(null);
  };

  const toggleQuestion = (q: string) =>
    setOpenQuestion((prev) => (prev === q ? null : q));

  return (
    <section
      id="bantuan"
      className="pw-section-y w-full bg-white overflow-hidden scroll-mt-24 "
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Header */}
        <PwSectionHeader
          eyebrow="FAQ"
          title={<>Hal yang Sering Ditanyakan <br className="hidden lg:block" /> Tentang Saku Sultan</>}
          className="mb-16 lg:mb-24 max-w-[800px]"
        >
          Temukan jawaban cepat seputar layanan, keamanan, dan cara menggunakan Saku Sultan.
        </PwSectionHeader>

        <div className="w-full max-w-[1300px] grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)]">
          {/* Kolom kanan — daftar dropdown kategori (order-1 di mobile) */}
          <div className="order-1 lg:order-2 w-full min-w-0 flex flex-col gap-6">
            <h3 className="font-heading font-semibold text-xl md:text-2xl text-[#042718]/70 mb-2">
              Pertanyaan Umum
            </h3>
            <div className="flex flex-col gap-3">
              {FAQ_GROUPS.map((group) => {
                const categoryOpen = openCategory === group.category;
                return (
                  <div
                    key={group.category}
                    className="w-full rounded-[20px] border border-[#0427181a] overflow-hidden"
                  >
                    <button
                      type="button"
                      aria-expanded={categoryOpen}
                      onClick={() => toggleCategory(group.category)}
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5 bg-[#F8FAF9] hover:bg-[#F0F4F2] transition-colors"
                    >
                      <span className="font-heading font-semibold text-base md:text-lg text-[#042718]">
                        {group.category}
                      </span>
                      <span className="flex items-center gap-3 shrink-0">
                        <span className="text-xs md:text-sm text-[#042718]/50">
                          {group.items.length} pertanyaan
                        </span>
                        <ChevronRightIcon
                          className={`h-4 w-4 text-[#042718]/60 transition-transform duration-300 ${
                            categoryOpen ? "rotate-90" : ""
                          }`}
                        />
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        categoryOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="flex flex-col gap-2 md:gap-2.5 p-3 md:p-4">
                          {group.items.map((item, index) => {
                            const open = openQuestion === item.q;
                            const number = `${String(index + 1).padStart(2, "0")}.`;
                            return (
                              <div
                                key={item.q}
                                role="button"
                                tabIndex={0}
                                aria-expanded={open}
                                onClick={() => toggleQuestion(item.q)}
                                onKeyDown={(event: KeyboardEvent<HTMLDivElement>) => {
                                  if (event.key === "Enter" || event.key === " ") {
                                    event.preventDefault();
                                    toggleQuestion(item.q);
                                  }
                                }}
                                className={
                                  open
                                    ? "w-full cursor-pointer transition-all duration-500 overflow-hidden relative p-5 md:p-6 rounded-[16px] border border-black/5 bg-[#042718] shadow-[0_4px_20px_0_rgba(0,0,0,0.06)]"
                                    : "w-full cursor-pointer transition-all duration-300 overflow-hidden relative px-4 md:px-6 py-3.5 md:py-4 rounded-[16px] flex items-center border border-transparent hover:border-[#0427181a] hover:bg-[#0427180a]"
                                }
                              >
                                {open ? (
                                  <div className="absolute inset-0 z-0">
                                    <div className="absolute inset-0 bg-[#042718]/72 z-10" />
                                    <SsBgVideo
                                      src="/videos/payway/header.mp4"
                                      className="pw-bg-video opacity-60"
                                    />
                                  </div>
                                ) : null}
                                <div className="relative z-20 w-full flex items-start gap-4 md:gap-8">
                                  <div
                                    className={`flex min-w-0 flex-1 gap-3 md:gap-5 ${
                                      open ? "items-start" : "items-center"
                                    }`}
                                  >
                                    <span
                                      className={`shrink-0 font-heading font-semibold text-xl md:text-2xl leading-[26px] md:leading-[30px] tracking-[-0.6px] md:tracking-[-0.8px] ${
                                        open ? "text-white" : "text-[#042718]"
                                      }`}
                                    >
                                      {number}
                                    </span>
                                    <div className="flex min-w-0 flex-1 flex-col gap-[8px] md:gap-[10px]">
                                      <h4
                                        className={`font-heading font-semibold text-xl md:text-2xl leading-[26px] md:leading-[30px] tracking-[-0.6px] md:tracking-[-0.8px] ${
                                          open ? "text-white" : "text-[#042718]"
                                        }`}
                                      >
                                        {item.q}
                                      </h4>
                                      <div
                                        className={`grid transition-all duration-300 ease-in-out ${
                                          open
                                            ? "grid-rows-[1fr] mt-0"
                                            : "grid-rows-[0fr] -mt-[8px] md:-mt-[10px]"
                                        }`}
                                      >
                                        <div className="overflow-hidden min-h-0 max-h-[60vh] overflow-y-auto">
                                          <p
                                            className={`break-words whitespace-pre-line font-sans text-base md:text-lg text-white md:leading-7 transition-opacity duration-300 ${
                                              open ? "opacity-80" : "opacity-0"
                                            }`}
                                          >
                                            {item.a}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ml-auto mt-1 flex-shrink-0">
                                    {open ? (
                                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="2"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="lucide lucide-x w-4 h-4 md:w-5 md:h-5 text-white"
                                        >
                                          <path d="M18 6 6 18" />
                                          <path d="m6 6 12 12" />
                                        </svg>
                                      </div>
                                    ) : (
                                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#F3F4F6] flex items-center justify-center">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="2"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="lucide lucide-plus w-4 h-4 md:w-5 md:h-5 text-[#374151]"
                                        >
                                          <path d="M5 12h14" />
                                          <path d="M12 5v14" />
                                        </svg>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Kolom kiri — foto support + CTA (order-2 di mobile) */}
          <div className="order-2 lg:order-1 w-full min-w-0 flex flex-col gap-12 items-start mt-8 lg:mt-0">
            <PwReveal className="w-full h-[300px] sm:h-[400px] lg:h-[480px] rounded-[24px] overflow-hidden shadow-xl relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Smart male customer support representative"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                className="object-cover grayscale-[0.05] hover:grayscale-0 transition-all duration-700 hover:scale-105 absolute inset-0 h-full w-full text-transparent"
                src="/images/payway/unsplash-photo-1543269865-cbf427effbad.jpg"
              />
            </PwReveal>
            <div className="flex flex-col items-start gap-[48px]">
              <div className="flex flex-col gap-[12px]">
                <h3 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[28px] text-[#042718] leading-tight">
                  Butuh Bantuan?
                </h3>
                {/* prettier-ignore */}
                <p className="font-sans text-lg text-[#042718] opacity-70 leading-normal">Tim support kami siap membantu Anda 24/7. <br className="hidden sm:block" /> Hubungi kami via WhatsApp.</p>
              </div>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-[32px] bg-[#042718] hover:bg-[#063a24] text-white pl-8 pr-4 py-4 rounded-full transition-all duration-300 shadow-lg"
                tabIndex={0}
              >
                <span className="font-sans font-semibold text-base">
                  Hubungi CS
                </span>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right w-5 h-5 text-[#042718]">
                    <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
