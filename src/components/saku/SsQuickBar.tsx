"use client";

import { SsReveal } from "./SsReveal";
import { openShowcaseTab, type ShowcaseTab } from "./ss-showcase-bus";
const ITEMS: { label: string; image: string; tab: ShowcaseTab }[] = [
  { label: "Transfer", image: "transfer", tab: "transfer" },
  { label: "QRIS", image: "qris", tab: "qris" },
  { label: "Q-Tra", image: "qtra", tab: "qtra" },
  { label: "Pulsa & Data", image: "pulsa", tab: "ppob" },
  { label: "Token PLN", image: "pln", tab: "ppob" },
  { label: "PPOB", image: "ppob", tab: "ppob" },
  { label: "E-Wallet", image: "ewallet", tab: "transfer" },
  { label: "Lainnya", image: "lainnya", tab: "merchant" },
];

/** Strip putih "Semua Kebutuhan Digital dalam Satu Aplikasi". */
export function SsQuickBar() {
  return (
    <section className="ss-quick-section border-b border-[var(--ss-line)] bg-white">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-7 px-5 py-8 md:px-8 lg:flex-row lg:items-center lg:gap-12">
        <SsReveal className="shrink-0 lg:max-w-[300px]">
          <h2 className="text-[20px] font-extrabold leading-snug text-[var(--ss-ink)]">
            Semua Kebutuhan Digital dalam Satu Aplikasi
          </h2>
          <p className="mt-1.5 text-[14px] font-semibold text-[var(--ss-green)]">
            Satu Aplikasi, Banyak Kemudahan.
          </p>
        </SsReveal>
        <SsReveal delay={120} className="flex-1">
          <ul className="grid grid-cols-4 gap-x-4 gap-y-6 sm:grid-cols-4 md:grid-cols-8">
            {ITEMS.map(({ label, image, tab }) => (
              <li key={label}>
                <button
                  type="button"
                  aria-label={`Lihat layanan ${label}`}
                  onClick={() => openShowcaseTab(tab)}
                  className="group flex w-full cursor-pointer flex-col items-center gap-2.5 text-center"
                >
                  <span className="flex h-14 w-14 items-center justify-center transition-transform duration-200 group-hover:-translate-y-1">
                    <img src={`/images/home-icon-${image}.png`} alt="" width={56} height={50} className="h-14 w-14 object-contain" />
                  </span>
                  <span className="text-[12px] font-bold text-[var(--ss-ink)]/80">{label}</span>
                </button>
              </li>
            ))}
          </ul>
        </SsReveal>
      </div>
    </section>
  );
}
