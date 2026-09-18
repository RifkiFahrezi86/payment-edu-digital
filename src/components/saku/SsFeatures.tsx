"use client";

import { SsReveal } from "./SsReveal";
import { openShowcaseTab, type ShowcaseTab } from "./ss-showcase-bus";
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
    <section className="bg-[var(--ss-mist)]">
      <div className="mx-auto grid w-full max-w-[1320px] gap-12 px-5 py-20 md:px-8 lg:grid-cols-[0.9fr_1.5fr] lg:items-center lg:py-24">
        <SsReveal>
          <p className="ss-eyebrow flex items-center gap-3 text-[var(--ss-green)]">
            <span className="h-px w-9 bg-[var(--ss-green)]/60" />
            Fitur Unggulan
          </p>
          <h2 className="ss-h2 mt-4 text-[var(--ss-ink)]">
            Transaksi Lebih Mudah, <span className="text-[var(--ss-green)]">Hidup Lebih Produktif</span>
          </h2>
          <p className="mt-5 max-w-[420px] text-[15.5px] leading-relaxed text-[var(--ss-muted)]">
            Nikmati berbagai fitur transaksi digital yang dirancang untuk mempermudah aktivitas harian Anda —
            semuanya dalam satu aplikasi.
          </p>
          <a href="#fitur" className="ss-btn ss-btn-lime mt-8">
            Lihat Semua Fitur
            <IcArrowUpRight width={17} height={17} />
          </a>
        </SsReveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {FEATURES.map(({ title, desc, icon: Icon, tab }, i) => (
            <SsReveal key={title} delay={i * 90}>
              <button
                type="button"
                onClick={() => openShowcaseTab(tab)}
                className="group h-full w-full cursor-pointer rounded-3xl border border-[var(--ss-line)] bg-white p-7 text-left shadow-[0_10px_36px_rgba(8,23,15,.05)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(8,23,15,.12)]"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--ss-pine)] text-[var(--ss-lime)] shadow-[0_10px_24px_rgba(12,59,42,.35)]">
                  <Icon width={24} height={24} />
                </span>
                <h3 className="mt-5 text-[20px] font-extrabold text-[var(--ss-ink)]">{title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[var(--ss-muted)]">{desc}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[13.5px] font-extrabold text-[var(--ss-green)] transition-colors group-hover:text-[var(--ss-green-deep)]">
                  Pelajari
                  <IcArrowRight width={15} height={15} className="transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </SsReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
