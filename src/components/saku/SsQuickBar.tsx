"use client";

import { SsReveal } from "./SsReveal";
import { openShowcaseTab, type ShowcaseTab } from "./ss-showcase-bus";
import {
  IcGrid,
  IcPhoneSignal,
  IcQr,
  IcReceipt,
  IcScan,
  IcSend,
  IcWallet,
  IcZap,
} from "./ss-icons";

const ITEMS: { label: string; icon: typeof IcSend; tab: ShowcaseTab }[] = [
  { label: "Transfer", icon: IcSend, tab: "transfer" },
  { label: "QRIS", icon: IcQr, tab: "qris" },
  { label: "Q-Tra", icon: IcScan, tab: "qtra" },
  { label: "Pulsa & Data", icon: IcPhoneSignal, tab: "ppob" },
  { label: "Token PLN", icon: IcZap, tab: "ppob" },
  { label: "PPOB", icon: IcReceipt, tab: "ppob" },
  { label: "E-Wallet", icon: IcWallet, tab: "transfer" },
  { label: "Lainnya", icon: IcGrid, tab: "merchant" },
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
            {ITEMS.map(({ label, icon: Icon, tab }) => (
              <li key={label}>
                <button
                  type="button"
                  aria-label={`Lihat layanan ${label}`}
                  onClick={() => openShowcaseTab(tab)}
                  className="group flex w-full cursor-pointer flex-col items-center gap-2.5 text-center"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--ss-mint)] text-[var(--ss-green-deep)] transition-all duration-200 group-hover:-translate-y-1 group-hover:bg-[var(--ss-pine)] group-hover:text-[var(--ss-lime)]">
                    <Icon width={22} height={22} />
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
