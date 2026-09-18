import { SsReveal } from "./SsReveal";
import {
  IcArrowRight,
  IcLock,
  IcQr,
  IcReceipt,
  IcScan,
  IcSend,
  IcShieldCheck,
  IcShoppingBag,
  IcStar,
  IcUsers,
  IcWallet,
} from "./ss-icons";

const TILES = [
  { title: "Bayar Tagihan", desc: "Listrik, air, internet, dll.", icon: IcReceipt },
  { title: "Scan Q-Tra", desc: "Pembayaran lebih mudah", icon: IcScan },
  { title: "Transfer Uang", desc: "Ke semua bank & e-wallet", icon: IcSend },
  { title: "Top Up Saldo", desc: "Pulsa, data, token, games", icon: IcWallet },
  { title: "E-Commerce", desc: "Transaksi belanja online", icon: IcShoppingBag },
  { title: "Keamanan", desc: "Dilindungi sistem berlapis", icon: IcLock },
];

const STATS = [
  { icon: IcStar, value: "4.8", label: "Rating Play Store", sub: "Dari 100K+ ulasan pengguna" },
  { icon: IcWallet, value: "Rp500M+", label: "Total Transaksi Diproses", sub: "Hingga Sept 2025" },
  { icon: IcUsers, value: "100K+", label: "Pengguna Aktif", sub: "Bergabung di ekosistem SAKU SULTAN" },
];

const PARTNER_LOGOS = [
  "/images/payway/pay/mandiri.svg",
  "/images/payway/pay/bri.svg",
  "/images/payway/pay/bca.svg",
  "/images/payway/pay/qris.svg",
  "/images/payway/pay/ovo.svg",
  "/images/payway/pay/gopay.svg",
  "/images/payway/pay/dana.svg",
];

/** Ringkasan Layanan — kartu aktivitas harian + headline "Cuan di setiap transaksi." */
export function SsRingkasan() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1320px] px-5 py-20 md:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          {/* Kartu mint kiri */}
          <SsReveal>
            <div className="rounded-[32px] bg-[var(--ss-mint)] p-7 sm:p-9">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="ss-eyebrow text-[var(--ss-green)]">Aktivitas Harian</p>
                  <h3 className="ss-h3 mt-2 text-[var(--ss-ink)]">
                    Praktis, cepat, <span className="text-[var(--ss-green)]">aman</span>
                  </h3>
                  <p className="mt-2 text-[14px] font-medium text-[var(--ss-muted)]">
                    Semua kebutuhan digital dalam satu aplikasi.
                  </p>
                </div>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--ss-pine)] text-[var(--ss-lime)]">
                  <IcShieldCheck width={22} height={22} />
                </span>
              </div>

              <ul className="mt-7 grid gap-3.5 sm:grid-cols-2">
                {TILES.map(({ title, desc, icon: Icon }) => (
                  <li
                    key={title}
                    className="flex items-center gap-3.5 rounded-2xl bg-white p-4 shadow-[0_6px_18px_rgba(8,23,15,.05)] transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--ss-mint)] text-[var(--ss-green-deep)]">
                      <Icon width={19} height={19} />
                    </span>
                    <span className="leading-tight">
                      <span className="block text-[14px] font-extrabold text-[var(--ss-ink)]">{title}</span>
                      <span className="mt-0.5 block text-[11.5px] font-medium text-[var(--ss-muted)]">{desc}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl bg-[var(--ss-pine)] p-5 sm:flex-row sm:items-center">
                <div>
                  <p className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-[var(--ss-lime)]">
                    Transaksi Lebih Praktis
                  </p>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-white/75">
                    Berbagai kebutuhan digital tersedia dalam satu ekosistem SAKU SULTAN.
                  </p>
                </div>
                <a href="#fitur" className="ss-btn ss-btn-lime shrink-0 !px-5 !py-2.5 !text-[13px]">
                  Jelajahi Fitur
                  <IcArrowRight width={15} height={15} />
                </a>
              </div>
            </div>
          </SsReveal>

          {/* Headline kanan */}
          <SsReveal delay={140}>
            <p className="ss-eyebrow flex items-center gap-3 text-[var(--ss-green)]">
              Ringkasan Layanan
              <span className="h-px w-10 bg-[var(--ss-green)]/60" />
            </p>
            <h2 className="ss-h2 mt-4 text-[var(--ss-ink)]">
              Cuan di setiap transaksi.
              <br />
              <span className="text-[var(--ss-green)]">Untuk semua kebutuhanmu.</span>
            </h2>
            <p className="mt-5 max-w-[480px] text-[15.5px] leading-relaxed text-[var(--ss-muted)]">
              SAKU SULTAN menghadirkan pengalaman transaksi digital yang menyatu dengan gaya hidup — mulai dari bayar
              tagihan, transfer, hingga belanja online, semua memberi nilai lebih untukmu.
            </p>

            <ul className="mt-9 grid gap-6 sm:grid-cols-3">
              {STATS.map(({ icon: Icon, value, label, sub }) => (
                <li key={label}>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--ss-mint)] text-[var(--ss-green-deep)]">
                    <Icon width={18} height={18} />
                  </span>
                  <p className="mt-3 text-[24px] font-extrabold tracking-tight text-[var(--ss-ink)]">{value}</p>
                  <p className="text-[13px] font-bold text-[var(--ss-ink)]/85">{label}</p>
                  <p className="mt-1 text-[11.5px] font-medium leading-snug text-[var(--ss-muted)]">{sub}</p>
                </li>
              ))}
            </ul>
          </SsReveal>
        </div>

        {/* Mitra terpercaya */}
        <SsReveal delay={100}>
          <div className="mt-16 flex flex-col items-center gap-6 rounded-3xl border border-[var(--ss-line)] bg-[var(--ss-mist)] px-7 py-7 lg:flex-row lg:justify-between">
            <p className="text-[13.5px] font-extrabold uppercase tracking-[0.14em] text-[var(--ss-ink)]/70">
              Didukung oleh Mitra Terpercaya
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {PARTNER_LOGOS.map((src) => (
                <li key={src}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt=""
                    className="h-6 w-auto opacity-70 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0"
                  />
                </li>
              ))}
            </ul>
            <a
              href="#mitra"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[var(--ss-line)] bg-white px-5 py-2.5 text-[13px] font-extrabold text-[var(--ss-ink)] transition-colors hover:border-[var(--ss-green)] hover:text-[var(--ss-green)]"
            >
              Lihat Semua Mitra
              <IcArrowRight width={14} height={14} />
            </a>
          </div>
        </SsReveal>
      </div>
    </section>
  );
}
