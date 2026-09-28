import type { Metadata } from "next";
import Link from "next/link";
import { PwHeroNavigation } from "@/components/payway/PwHeroNavigation";
import { PwCtaFooter } from "@/components/payway/PwCtaFooter";
import { SsReveal } from "@/components/saku/SsReveal";
import { PwCampaignPoster } from "@/components/payway/pw-campaign-poster";
import { VTN_POSTER } from "@/components/payway/pw-campaign-posters";
import {
  IcArrowRight,
  IcArrowUpRight,
  IcChart,
  IcChevronRight,
  IcQr,
  IcShieldCheck,
  IcSmartphone,
  IcTrendingUp,
  IcUsers,
  IcZap,
  IcWallet,
} from "@/components/saku/ss-icons";

export const metadata: Metadata = {
  title: "Volume Transaksi Nasional (VTN) — Saku Sultan",
  description:
    "Pelajari bagaimana Volume Transaksi Nasional (VTN) bekerja sebagai penggerak ekosistem digital Indonesia dan sumber cuan jangka panjang bagi seluruh pengguna.",
};

const SERVICES = [
  { label: "Transfer Uang", image: "transfer" },
  { label: "Pulsa & Data", image: "pulsa" },
  { label: "PLN", image: "pln" },
  { label: "PDAM", image: "pdam" },
  { label: "TV & Internet", image: "tv" },
  { label: "Belanja Online", image: "belanja" },
  { label: "Travel & Transportasi", image: "travel" },
  { label: "Donasi & Sosial", image: "donasi" },
  { label: "Lainnya", image: "lainnya" },
];

const VTN_STEPS = [
  {
    step: "01",
    title: "Transaksi Harian",
    desc: "Pengguna melakukan pembelian pulsa, token listrik, pembayaran QRIS, transfer bank, hingga belanja kebutuhan.",
    icon: IcZap,
  },
  {
    step: "02",
    title: "Agregasi Volume Nasional",
    desc: "Setiap transaksi dari ribuan pengguna di seluruh Indonesia dikumpulkan menjadi satu volume nasional yang besar.",
    icon: IcChart,
  },
  {
    step: "03",
    title: "Ekosistem & Cuan",
    desc: "Volume yang besar memperkuat ekosistem, menghasilkan efisiensi biaya, dan membuka peluang keuntungan bagi mitra serta pengguna.",
    icon: IcTrendingUp,
  },
];

const VTN_PILLARS = [
  {
    num: "01",
    title: "Akumulasi Volume Nasional",
    desc: "Setiap transaksi dari Sabang sampai Merauke yang diproses melalui ekosistem SAKU SULTAN dan mitra PJP berizin tercatat dalam satu kesatuan volume nasional.",
  },
  {
    num: "02",
    title: "Efisiensi & Skala Ekonomi",
    desc: "Semakin besar volume transaksi yang tercipta, semakin efisien biaya operasional dan semakin kuat posisi tawar ekosistem dalam menghadirkan program promo dan insentif.",
  },
  {
    num: "03",
    title: "Distribusi Manfaat & Cuan",
    desc: "Nilai tambah yang dihasilkan dialirkan kembali kepada komunitas pengguna, mitra, dan merchant melalui cashback, reward transaksi, dan bonus ekosistem #CUANPERDETIK.",
  },
  {
    num: "04",
    title: "Pertumbuhan Berkelanjutan",
    desc: "Ekosistem yang aktif menciptakan roda ekonomi mandiri. Merchant berkembang, pengguna hemat, dan mitra mendapatkan manfaat finansial jangka panjang.",
  },
];

export default function VtnDetailPage() {
  return (
    <main className="ss-site w-full overflow-x-clip !bg-[#04130c] !text-white">
      <PwHeroNavigation />

      {/* Hero Section VTN — Desain Asli Peta Hijau & Grid Neon Glow (Persis Gambar 4) */}
      <section className="ss-vtn-section ss-grid-glow relative overflow-hidden bg-[#04130c] pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8">
          <SsReveal>
            <Link
              href="/#sistem-vtn"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--ss-lime)] hover:text-white transition-colors mb-6"
            >
              <IcChevronRight width={15} height={15} className="rotate-180" />
              Kembali ke Beranda
            </Link>
          </SsReveal>

          <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SsReveal delay={80}>
                <div className="flex items-center gap-3">
                  <span className="h-0.5 w-8 bg-[var(--ss-lime)]" />
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[var(--ss-lime)]">
                    Indonesia Digital Ecosystem
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap items-end gap-5">
                  <span className="ss-vtn-glow text-[clamp(4.5rem,10vw,8rem)] font-extrabold leading-none tracking-tight">
                    VTN
                  </span>
                  <span className="mb-3 border-l-2 border-[var(--ss-lime)]/40 pl-4 text-[13px] font-extrabold uppercase tracking-[0.3em] leading-relaxed text-white/70">
                    Volume
                    <br />
                    Transaksi
                    <br />
                    Nasional
                  </span>
                </div>
              </SsReveal>

              <SsReveal delay={160}>
                <h1 className="mt-7 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl leading-[1.15]">
                  Transaksi yang Menggerakkan
                  <br />
                  <span className="text-[var(--ss-lime)]">Ekosistem Digital.</span>
                </h1>
              </SsReveal>

              <SsReveal delay={240}>
                <p className="mt-5 max-w-[520px] text-[15.5px] leading-relaxed text-white/80">
                  Setiap transaksi yang kamu lakukan bukan sekadar pembayaran — ia menjadi bagian dari volume nasional
                  yang memperkuat ekosistem dan membuka peluang bagi jutaan pengguna di seluruh Indonesia.
                </p>
              </SsReveal>

              <SsReveal delay={320}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="#cara-kerja" className="ss-btn ss-btn-lime">
                    Pelajari Arsitektur VTN
                    <IcArrowRight width={16} height={16} />
                  </a>
                  <a href="#poster-vtn" className="ss-btn ss-btn-outline-light">
                    Lihat Poster Kampanye
                  </a>
                </div>
              </SsReveal>
            </div>

            {/* Peta Jaringan Indonesia & Kartu Pertumbuhan (Gambar 4) */}
            <SsReveal delay={200}>
              <div className="ss-vtn-map-visual">
                <p className="ss-script">
                  Transaksi Menghubungkan
                  <br />
                  <span>Indonesia</span>
                </p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="ss-vtn-map"
                  src="/images/saku/vtn-map-desktop.png"
                  alt="Peta jaringan transaksi Indonesia yang menghubungkan Medan, Jakarta, Surabaya, dan Makassar"
                />
                <div className="ss-vtn-growth-card">
                  <p>
                    <IcChart width={19} height={19} />
                    Aktivitas transaksi
                    <br />
                    terus bertumbuh
                  </p>
                  <strong>+42%</strong>
                  <span>
                    Pertumbuhan Volume
                    <br />
                    Transaksi YoY
                  </span>
                  <div className="ss-vtn-growth-bars" aria-hidden="true">
                    {[34, 46, 42, 58, 70, 88].map((height, index) => (
                      <i key={index} style={{ height: `${height}%` }} />
                    ))}
                  </div>
                  <div className="ss-vtn-growth-months">
                    {["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"].map((month) => (
                      <span key={month}>{month}</span>
                    ))}
                  </div>
                </div>
              </div>
            </SsReveal>
          </div>

          {/* Strip 9 Layanan Terintegrasi (Gambar 4 bagian bawah) */}
          <SsReveal delay={140}>
            <ul className="ss-vtn-services ss-noscrollbar mt-16 flex items-center gap-3 overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-5 backdrop-blur">
              {SERVICES.map(({ label, image }) => (
                <li
                  key={label}
                  className="flex shrink-0 items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2.5 transition-colors hover:border-[var(--ss-lime)]/50"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/images/saku/vtn-icon-${image}.png`} alt="" width={32} height={32} />
                  <span className="text-[12.5px] font-bold text-white/90">{label}</span>
                </li>
              ))}
            </ul>
          </SsReveal>
        </div>
      </section>

      {/* Section Cara Kerja VTN (Card Putih Bersih — Teks Jelas Terbaca) */}
      <section id="cara-kerja" className="relative z-10 scroll-mt-24 bg-[#020b07] py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8">
          <SsReveal delay={100}>
            <div className="rounded-[32px] bg-white p-8 sm:p-12 text-[#042718]">
              <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
                <div>
                  <p className="ss-eyebrow text-[var(--ss-green)]">Cara Kerja VTN</p>
                  <h2 className="ss-h3 mt-3 text-[#042718] text-2xl sm:text-3xl font-extrabold">
                    Dari Transaksi, Menuju
                    <br />
                    <span className="text-[var(--ss-green)]">Dampak yang Lebih Luas</span>
                  </h2>
                </div>
                <p className="text-[15px] leading-relaxed text-[#566a53]">
                  &ldquo;VTN bekerja seperti roda ekonomi digital: semakin banyak transaksi terjadi, semakin besar nilai ekosistem, dan semakin luas peluang yang terbuka untuk semua.&rdquo;
                </p>
              </div>

              <div className="mt-12 grid gap-6 sm:grid-cols-3">
                {VTN_STEPS.map(({ step, title, desc, icon: Icon }) => (
                  <div
                    key={step}
                    className="flex flex-col rounded-2xl border border-[var(--ss-line)] bg-[#f6faf7] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--ss-pine)] text-[var(--ss-lime)]">
                        <Icon width={22} height={22} />
                      </span>
                      <span className="text-[12px] font-extrabold text-[var(--ss-green)]">{step}</span>
                    </div>
                    <h3 className="mt-5 text-[17px] font-extrabold text-[#042718]">{title}</h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-[#566a53]">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </SsReveal>

          {/* 4 Pilar Arsitektur VTN (Card Gelap dengan Kontras Tinggi & Teks Putih Terang) */}
          <div className="mt-20">
            <SsReveal>
              <div className="max-w-[640px]">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--ss-lime)]">
                  Arsitektur Keberlanjutan
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  4 Pilar Nilai Tambah VTN
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
                  Volume transaksi nasional bukan hanya angka, melainkan pondasi pembagian keuntungan dan efisiensi bersama.
                </p>
              </div>
            </SsReveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {VTN_PILLARS.map((p, idx) => (
                <SsReveal key={p.num} delay={idx * 80}>
                  <article className="flex h-full flex-col rounded-3xl border border-white/15 bg-white/[0.05] p-7 transition-all duration-300 hover:border-[var(--ss-lime)]/50 hover:bg-white/[0.08]">
                    <span className="text-3xl font-black text-[var(--ss-lime)]">{p.num}</span>
                    <h3 className="mt-5 text-lg font-bold text-white">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/75">{p.desc}</p>
                  </article>
                </SsReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Poster Lengkap VTN */}
      <section id="poster-vtn" className="relative z-10 scroll-mt-24 border-t border-white/10 bg-[#04130c] py-20">
        <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8">
          <SsReveal>
            <div className="flex flex-col items-center text-center max-w-[700px] mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--ss-lime)]">Ilustrasi Resmi</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">Poster Volume Transaksi Nasional</h2>
              <p className="mt-3 text-sm text-white/75">
                Diagram visual resmi alur perputaran transaksi dan distribusi nilai tambah VTN bagi masyarakat Indonesia.
              </p>
            </div>
          </SsReveal>

          <SsReveal delay={100}>
            <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/[0.03] p-4 sm:p-6 backdrop-blur">
              <PwCampaignPoster poster={VTN_POSTER} />
              <div className="mt-4 text-center">
                <a
                  href={VTN_POSTER.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[var(--ss-lime)] hover:underline"
                >
                  Buka Gambar Ukuran Penuh
                  <IcArrowUpRight width={16} height={16} />
                </a>
              </div>
            </div>
          </SsReveal>

          {/* Banner Registrasi CTA */}
          <SsReveal delay={150}>
            <div className="mt-16 flex flex-col items-center justify-between gap-8 rounded-3xl border border-[var(--ss-lime)]/40 bg-gradient-to-r from-[#0d3f28] to-[#052115] p-8 sm:p-12 md:flex-row shadow-2xl">
              <div className="max-w-[620px]">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[var(--ss-lime)]">
                  #CUANPERDETIK
                </span>
                <h3 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                  Ambil Bagian dalam Ekosistem VTN
                </h3>
                <p className="mt-3 text-sm text-white/80">
                  Daftar akun SAKU SULTAN sekarang juga, nikmati transaksi bebas repot, dan raih cuan di setiap transaksi.
                </p>
              </div>
              <div className="flex shrink-0 gap-4">
                <Link href="/#registrasi" className="ss-btn ss-btn-lime">
                  Daftar Sekarang
                  <IcArrowRight width={16} height={16} />
                </Link>
              </div>
            </div>
          </SsReveal>
        </div>
      </section>

      <PwCtaFooter />
    </main>
  );
}
