import { SsReveal } from "./SsReveal";
import { PwCampaignPoster } from "@/components/payway/pw-campaign-poster";
import { VTN_POSTER } from "@/components/payway/pw-campaign-posters";
import { SsVtnMap } from "./SsVtnMap";
import {
  IcArrowRight,
  IcChart,
  IcGlobe,
  IcGrid,
  IcHeartHand,
  IcPhoneSignal,
  IcPlane,
  IcQr,
  IcSend,
  IcShoppingBag,
  IcTrendingUp,
  IcTv,
  IcUsers,
  IcWallet,
  IcZap,
} from "./ss-icons";

const SERVICES = [
  { label: "Transfer Uang", icon: IcSend },
  { label: "Pulsa & Data", icon: IcPhoneSignal },
  { label: "PLN", icon: IcZap },
  { label: "PDAM", icon: IcWallet },
  { label: "TV & Internet", icon: IcTv },
  { label: "Belanja Online", icon: IcShoppingBag },
  { label: "Travel & Transportasi", icon: IcPlane },
  { label: "Donasi & Sosial", icon: IcHeartHand },
  { label: "Lainnya", icon: IcGrid },
];

const HOW = [
  {
    num: "01",
    title: "Transaksi",
    desc: "Setiap pengguna bertransaksi harian lewat aplikasi — transfer, tagihan, belanja, dan lainnya.",
    icon: IcQr,
  },
  {
    num: "02",
    title: "Akumulasi Volume",
    desc: "Seluruh transaksi terakumulasi menjadi Volume Transaksi Nasional yang terus bertumbuh.",
    icon: IcChart,
  },
  {
    num: "03",
    title: "Ekosistem",
    desc: "Volume yang besar memperkuat ekosistem — merchant, mitra, dan komunitas ikut bertumbuh.",
    icon: IcGlobe,
  },
  {
    num: "04",
    title: "Peluang Lebih Luas",
    desc: "Ekosistem yang kuat membuka peluang penghasilan dan manfaat bagi seluruh pengguna.",
    icon: IcTrendingUp,
  },
];

/** VTN — Volume Transaksi Nasional (section gelap + cara kerja). */
export function SsVtn() {
  return (
    <section id="sistem-vtn" className="ss-grid-glow relative scroll-mt-24 overflow-hidden bg-[#04130c]">
      <span id="vtn" className="ss-anchor" aria-hidden="true" />
      <div className="mx-auto w-full max-w-[1320px] px-5 pb-16 pt-20 md:px-8 lg:pb-20 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Kiri */}
          <div>
            <SsReveal>
              <p className="ss-eyebrow flex items-center gap-3 text-[var(--ss-lime)]/80">
                <span className="h-px w-10 bg-[var(--ss-lime)]/50" />
                Indonesia Digital Ecosystem
              </p>
            </SsReveal>
            <SsReveal delay={80}>
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
              <h2 className="ss-h2 mt-7 text-white">
                Transaksi yang Menggerakkan
                <br />
                <span className="text-[var(--ss-lime)]">Ekosistem Digital.</span>
              </h2>
            </SsReveal>
            <SsReveal delay={240}>
              <p className="mt-5 max-w-[520px] text-[15.5px] leading-relaxed text-white/70">
                Setiap transaksi yang kamu lakukan bukan sekadar pembayaran — ia menjadi bagian dari volume nasional
                yang memperkuat ekosistem dan membuka peluang bagi jutaan pengguna di seluruh Indonesia.
              </p>
            </SsReveal>
            <SsReveal delay={320}>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#cara-vtn" className="ss-btn ss-btn-lime">
                  Pelajari Tentang VTN
                  <IcArrowRight width={16} height={16} />
                </a>
                <a href="#vtn-data" className="ss-btn ss-btn-outline-light">
                  Lihat Data & Insight
                </a>
              </div>
            </SsReveal>
          </div>

          {/* Connected map and growth card following the detailed reference. */}
          <SsReveal delay={200}>
            <div className="ss-vtn-map-visual">
              <p className="ss-script">Transaksi Menghubungkan<br /><span>Indonesia</span></p>
              <SsVtnMap />
              <div className="ss-vtn-growth-card">
                <p><IcChart width={19} height={19} />Aktivitas transaksi<br />terus bertumbuh</p>
                <strong>+42%</strong><span>Pertumbuhan Volume<br />Transaksi YoY</span>
                <div className="ss-vtn-growth-bars" aria-hidden="true">{[34, 46, 42, 58, 70, 88].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div>
                <div className="ss-vtn-growth-months">{["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"].map(month => <span key={month}>{month}</span>)}</div>
              </div>
            </div>
          </SsReveal>
        </div>

        {/* Strip layanan */}
        <SsReveal delay={140}>
          <ul className="ss-noscrollbar mt-16 flex items-center gap-3 overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-5 backdrop-blur">
            {SERVICES.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="flex shrink-0 items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2.5 transition-colors hover:border-[var(--ss-lime)]/50"
              >
                <Icon width={15} height={15} className="text-[var(--ss-lime)]" />
                <span className="text-[12.5px] font-bold text-white/85">{label}</span>
              </li>
            ))}
          </ul>
        </SsReveal>

        {/* Cara kerja VTN */}
        <SsReveal delay={100}>
          <div id="cara-vtn" className="mt-14 scroll-mt-28 rounded-[32px] bg-white p-8 sm:p-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
              <div>
                <p className="ss-eyebrow text-[var(--ss-green)]">Cara Kerja VTN</p>
                <h3 className="ss-h3 mt-3 text-[var(--ss-ink)]">
                  Dari Transaksi, Menuju
                  <br />
                  Dampak yang <span className="text-[var(--ss-green)]">Lebih Luas</span>
                </h3>
              </div>
              <p className="max-w-[460px] text-[14px] leading-relaxed text-[var(--ss-muted)] lg:justify-self-end">
                VTN bekerja seperti roda ekonomi digital: semakin banyak transaksi terjadi, semakin besar nilai
                ekosistem, dan semakin luas peluang yang terbuka untuk semua.
              </p>
            </div>
            <ol className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {HOW.map(({ num, title, desc, icon: Icon }, i) => (
                <li key={num} className="relative rounded-2xl border border-[var(--ss-line)] bg-[var(--ss-mist)] p-5">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--ss-pine)] text-[var(--ss-lime)]">
                      <Icon width={19} height={19} />
                    </span>
                    <span className="text-[26px] font-extrabold text-[var(--ss-ink)]/10">{num}</span>
                  </div>
                  <h4 className="mt-4 text-[14px] font-extrabold uppercase tracking-wide text-[var(--ss-ink)]">
                    {title}
                  </h4>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-[var(--ss-muted)]">{desc}</p>
                  {i < HOW.length - 1 ? (
                    <span className="absolute -right-3.5 top-1/2 z-10 hidden h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--ss-lime)] text-[var(--ss-ink)] lg:flex">
                      <IcArrowRight width={13} height={13} />
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </SsReveal>

        {/* Bar statistik bawah */}
        <SsReveal delay={140}>
          <div
            id="vtn-data"
            className="mt-10 flex scroll-mt-28 flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.04] px-8 py-6 lg:flex-row"
          >
            <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[var(--ss-lime)]">
              Bersama Membangun Indonesia Digital
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
              {[
                { icon: IcUsers, value: "100K+", label: "Pengguna Aktif" },
                { icon: IcChart, value: "500M+", label: "Transaksi Diproses" },
                { icon: IcGlobe, value: "34", label: "Provinsi Terjangkau" },
              ].map(({ icon: Icon, value, label }) => (
                <li key={label} className="flex items-center gap-3">
                  <Icon width={18} height={18} className="text-[var(--ss-lime)]" />
                  <span className="text-[20px] font-extrabold text-white">{value}</span>
                  <span className="text-[12px] font-semibold text-white/60">{label}</span>
                </li>
              ))}
            </ul>
            <a
              href="#registrasi"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--ss-lime)] text-[var(--ss-ink)] transition-transform hover:scale-105"
              aria-label="Bergabung dalam ekosistem"
            >
              <IcArrowRight width={18} height={18} />
            </a>
          </div>
        </SsReveal>

        <details className="ss-vtn-gallery">
          <summary>Lihat ilustrasi lengkap Sistem VTN <IcArrowRight width={17} height={17} /></summary>
          <div><PwCampaignPoster poster={VTN_POSTER} /><a href={VTN_POSTER.src} target="_blank" rel="noopener noreferrer">Buka gambar ukuran penuh <IcArrowRight width={15} height={15} /></a></div>
        </details>
      </div>
    </section>
  );
}
