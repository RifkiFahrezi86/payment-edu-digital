import Link from "next/link";
import { SsReveal } from "./SsReveal";
import type { ShowcaseTab } from "./ss-showcase-bus";
import { IcArrowRight, IcArrowUpRight, IcPhoneSignal, IcQr, IcScan, IcSend } from "./ss-icons";

const FEATURES: { title: string; desc: string; icon: typeof IcSend; tab: ShowcaseTab }[] = [
  {
    title: "Transfer",
    desc: "Kirim uang ke semua bank dan e-wallet dengan cepat dan aman.",
    icon: IcSend,
    tab: "transfer",
  },
  {
    title: "QRIS",
    desc: "Bayar di jutaan merchant seluruh Indonesia dengan satu scan.",
    icon: IcQr,
    tab: "qtra",
  },
  {
    title: "Q-Tra",
    desc: "Scan, bayar, dan berbagai transaksi dengan lebih mudah.",
    icon: IcScan,
    tab: "qtra",
  },
  {
    title: "PPOB",
    desc: "Pulsa, paket data, listrik, air, dan berbagai tagihan lainnya.",
    icon: IcPhoneSignal,
    tab: "ppob",
  },
];

/** Fitur Unggulan — heading kiri + 4 kartu (Transfer, QRIS, Q-Tra, PPOB). */
export function SsFeatures() {
  return (
    <section id="layanan-utama" className="ss-reference-features bg-[var(--ss-mist)] scroll-mt-24">
      <div className="ss-reference-feature-layout">
        <SsReveal>
          <p className="ss-eyebrow flex items-center gap-3 text-[var(--ss-green)]">
            <span className="h-px w-9 bg-[var(--ss-green)]/60" />
            Fitur Unggulan
          </p>
          <h2 className="ss-h2 mt-4 text-[var(--ss-ink)]">
            Transaksi Lebih Mudah, <span className="text-[var(--ss-green)]">Hidup Lebih Produktif</span>
          </h2>
          <p className="mt-4 max-w-[420px] text-[14px] leading-relaxed text-[var(--ss-muted)]">
            Nikmati berbagai fitur transaksi digital yang dirancang untuk mempermudah aktivitas harian Anda —
            semuanya dalam satu aplikasi.
          </p>
          <a href="#fitur" className="ss-btn ss-btn-lime mt-6 !px-5 !text-[13px]">
            Lihat Semua Fitur
            <IcArrowUpRight width={17} height={17} />
          </a>
        </SsReveal>

        <div className="ss-reference-feature-grid">
          {FEATURES.map(({ title, desc, icon: Icon, tab }, i) => (
            <SsReveal key={title} delay={i * 90}>
<<<<<<< HEAD
              <button
                type="button"
                onClick={() => openShowcaseTab(tab)}
                className="ss-reference-feature-card"
              >
=======
              {/* Slug rute sama dengan kunci tab showcase, jadi tidak perlu peta terpisah. */}
              <Link href={`/produk/${tab}`} className="ss-reference-feature-card">
>>>>>>> 0b800e0aa4c3c6928feecc52ecfec250dd8a36ee
                <span>
                  <Icon width={24} height={24} />
                </span>
                <h3>{title}</h3>
                <p>{desc}</p>
                <span>
                  Pelajari
                  <IcArrowRight width={15} height={15} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </SsReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
