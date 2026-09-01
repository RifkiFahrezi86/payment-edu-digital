/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";
import { PwHeroPhoneMockup } from "@/components/payway/PwHeroPhoneMockup";
import { PwReveal } from "@/components/payway/pw-reveal";

/**
 * Section 00 — Hero Saku Sultan.
 * Fokus audit:
 * - memperbaiki tautan placeholder (#)
 * - mengembalikan mockup ponsel yang sempat hilang
 * - memperkuat arah visual agar lebih khas PPOB Indonesia
 */

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.saku_sultan";

const NAV_LINKS = [
  { label: "Beranda", href: "#beranda" },
  { label: "Produk & Fitur", href: "#fitur" },
  { label: "Promo", href: "#promo" },
  { label: "Bantuan", href: "#bantuan" },
] as const;

const SERVICES = [
  {
    label: "Pulsa",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 text-[#D3EE67]"
      >
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    label: "Listrik",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 text-[#D3EE67]"
      >
        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
      </svg>
    ),
  },
  {
    label: "PDAM",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 text-[#D3EE67]"
      >
        <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
      </svg>
    ),
  },
  {
    label: "E-Money",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 text-[#D3EE67]"
      >
        <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
        <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
      </svg>
    ),
  },
  {
    label: "Internet",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 text-[#D3EE67]"
      >
        <path d="M12 20h.01" />
        <path d="M2 8.82a15 15 0 0 1 20 0" />
        <path d="M5 12.86a10 10 0 0 1 14 0" />
        <path d="M8.5 16.43a5 5 0 0 1 7 0" />
      </svg>
    ),
  },
  {
    label: "Game",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 text-[#D3EE67]"
      >
        <line x1="6" x2="10" y1="12" y2="12" />
        <line x1="8" x2="8" y1="10" y2="14" />
        <line x1="15" x2="15.01" y1="13" y2="13" />
        <line x1="18" x2="18.01" y1="11" y2="11" />
        <rect width="20" height="12" x="2" y="6" rx="2" />
      </svg>
    ),
  },
  {
    label: "BPJS",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 text-[#D3EE67]"
      >
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "Lainnya",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 text-[#D3EE67]"
      >
        <rect width="7" height="7" x="3" y="3" rx="1.2" />
        <rect width="7" height="7" x="14" y="3" rx="1.2" />
        <rect width="7" height="7" x="14" y="14" rx="1.2" />
        <rect width="7" height="7" x="3" y="14" rx="1.2" />
      </svg>
    ),
  },
];

const PHONE_SERVICES = [
  { label: "E-Wallet", icon: SERVICES[3].icon },
  { label: "Pulsa", icon: SERVICES[0].icon },
  { label: "Token", icon: SERVICES[1].icon },
  { label: "Internet", icon: SERVICES[4].icon },
  { label: "SS Games", icon: SERVICES[5].icon },
  { label: "Lainnya", icon: SERVICES[7].icon },
] as const;

const PHONE_TABS = [
  {
    label: "Home",
    active: true,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path d="m3 11 9-7 9 7" />
        <path d="M5 10v10h14V10" />
      </svg>
    ),
  },
  {
    label: "SP Store",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path d="M6 7 4 10v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9l-2-3Z" />
        <path d="M3 10h18" />
        <path d="M9 14h6" />
      </svg>
    ),
  },
  {
    label: "Cuan",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path d="M7 6h8l2 3-10 9H5l10-9H7l-2-3h8" />
      </svg>
    ),
  },
  {
    label: "History",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path d="M12 8v5l3 2" />
        <path d="M21 12a9 9 0 1 1-3.2-6.9" />
      </svg>
    ),
  },
  {
    label: "Startup",
    standout: true,
    icon: <span className="text-lg font-semibold leading-none">0</span>,
  },
] as const;

function ServiceItem({
  label,
  icon,
}: {
  label: string;
  icon: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-14 h-14 rounded-full bg-[#0C4329] border border-[#174D32] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_18px_rgba(4,39,24,0.1)] flex items-center justify-center">
        {icon}
      </div>
      <span className="text-[11px] leading-none font-medium text-[#163025] text-center">
        {label}
      </span>
    </div>
  );
}

function PhoneTab({
  label,
  icon,
  active = false,
  standout = false,
}: {
  label: string;
  icon: ReactNode;
  active?: boolean;
  standout?: boolean;
}) {
  return (
    <div className={`flex flex-col items-center gap-1 ${standout ? "-mt-6" : ""}`}>
      <div
        className={`flex items-center justify-center ${
          standout
            ? "w-16 h-16 rounded-full border-[4px] border-[#D6DAE2] bg-white text-[#0A2818] shadow-[0_18px_36px_rgba(4,39,24,0.14)]"
            : active
              ? "w-10 h-10 rounded-full bg-[#EAF3CE] text-[#0A2818]"
              : "w-10 h-10 rounded-full text-[#98A0AE]"
        }`}
      >
        {icon}
      </div>
      <span
        className={`text-[11px] font-medium ${
          active ? "text-[#0A2818]" : "text-[#8F96A3]"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative w-full max-w-[430px] mx-auto">
      <div className="absolute inset-x-12 bottom-2 h-10 rounded-full bg-[#042718]/18 blur-2xl" />

      <div className="relative rounded-[60px] bg-[#071A12] p-[8px] shadow-[0_48px_110px_rgba(4,39,24,0.34)]">
        <div className="absolute left-1/2 top-4 z-20 h-[30px] w-[120px] -translate-x-1/2 rounded-full bg-black/90 border border-white/5" />

        <div className="overflow-hidden rounded-[52px] bg-[#F6F7F2]">
          <div className="bg-[#BDDF21] px-5 pt-4 pb-5">
            <div className="flex items-center justify-between pt-1 text-[13px] font-semibold text-[#0D2D1B]">
              <span>17.18</span>
              <div className="flex items-center gap-2.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M2 8.82a15 15 0 0 1 20 0" />
                  <path d="M5 12.86a10 10 0 0 1 14 0" />
                  <path d="M8.5 16.43a5 5 0 0 1 7 0" />
                </svg>
                <div className="flex items-end gap-0.5">
                  <span className="w-1 h-2 rounded-full bg-current" />
                  <span className="w-1 h-3 rounded-full bg-current" />
                  <span className="w-1 h-4 rounded-full bg-current" />
                  <span className="w-1 h-5 rounded-full bg-current" />
                </div>
              </div>
            </div>

            <div className="mt-7 flex items-start justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-14 h-14 rounded-full bg-[radial-gradient(circle_at_50%_35%,#F8F9FB_0_23%,#8BC9F7_24%_54%,#E6E7E5_55%_100%)] border-[3px] border-white shadow-sm shrink-0" />
                <div className="min-w-0">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-[#0D2D1B]/55">Saku Sultan</p>
                  <p className="truncate text-[18px] leading-tight font-semibold text-[#0A2818]">
                    Halo, Pengguna Baru
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#0B4A2C] border-2 border-[#E8F27B]/70 text-[#F4F880] flex items-center justify-center shadow-[0_10px_20px_rgba(10,74,43,0.18)]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                  </svg>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#0B4A2C] border-2 border-[#E8F27B]/70 text-[#F4F880] flex items-center justify-center shadow-[0_10px_20px_rgba(10,74,43,0.18)]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M12 2v3" />
                    <path d="M18.4 4.6 16.6 6.4" />
                    <path d="M22 12h-3" />
                    <path d="m18.4 19.4-1.8-1.8" />
                    <path d="M12 22v-3" />
                    <path d="m5.6 19.4 1.8-1.8" />
                    <path d="M2 12h3" />
                    <path d="m5.6 4.6 1.8 1.8" />
                    <circle cx="12" cy="12" r="3.5" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-[1fr_126px] gap-3 items-end">
              <div>
                <div className="flex items-center gap-2.5 text-[#173126] mb-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#FF705C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 shrink-0">
                    <path d="M4 7h11a3 3 0 0 1 3 3v1" />
                    <path d="M8 17H5a3 3 0 0 1-3-3v-1" />
                    <path d="M20 7v10" />
                    <path d="m16 3 4 4-4 4" />
                    <path d="m8 21-4-4 4-4" />
                  </svg>
                  <span className="text-[15px] font-medium">Saldo</span>
                </div>

                <p className="text-[20px] font-semibold tracking-[0.16em] text-[#0A2818]">Rp ••••••••</p>

                <div className="mt-5 flex gap-2.5">
                  <div className="flex items-center gap-2 rounded-full border-2 border-[#1A412F] px-4 py-2 text-[#173126] bg-white/12 backdrop-blur-sm shadow-sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M5 12h14" />
                      <path d="m5 12 6-6" />
                      <path d="m5 12 6 6" />
                    </svg>
                    <span className="text-[14px] font-semibold">Top Up</span>
                  </div>

                  <div className="flex items-center gap-2 rounded-full border-2 border-[#1A412F] px-4 py-2 text-[#173126] bg-white/12 backdrop-blur-sm shadow-sm">
                    <span className="text-[14px] font-semibold">Transfer</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M19 5 5 19" />
                      <path d="M8 5h11v11" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="relative h-[170px]">
                <div className="absolute inset-0 rounded-[34px] bg-[radial-gradient(circle_at_36%_28%,#F4FF8F_0%,#8FC92A_48%,#0D502E_100%)] shadow-[0_18px_36px_rgba(10,74,43,0.18)]" />
                <div className="absolute right-1 top-2 h-12 w-12 rounded-full bg-[#F1FF9C]/45 blur-xl" />
                <div className="absolute left-4 top-5 rounded-full border border-white/12 bg-white/12 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                  Aktif
                </div>
                <div className="absolute left-4 top-14 w-14 h-14 rounded-[20px] bg-white/12 border border-white/12 backdrop-blur-sm flex items-center justify-center text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
                  </svg>
                </div>
                <div className="absolute left-4 right-4 bottom-4 rounded-[22px] bg-[#0B472A]/88 border border-white/10 p-3 text-white shadow-[0_10px_24px_rgba(4,39,24,0.16)]">
                  <p className="text-[10px] text-white/60 mb-1">Cuan harian</p>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold">Cashback 12%</span>
                    <div className="flex -space-x-1">
                      <span className="w-6 h-6 rounded-full bg-[#CFEA58] border border-[#0B472A]" />
                      <span className="w-6 h-6 rounded-full bg-[#F3FF9D] border border-[#0B472A]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F6F7F2] px-4 pb-4">
            <div className="-mt-2 rounded-[34px] bg-[#063720] px-4 pt-5 pb-4 shadow-[0_28px_54px_rgba(4,39,24,0.26)]">
              <div className="text-center">
                <p className="text-[15px] font-semibold tracking-[0.04em] text-[#D8F15A]">SULTAN PROMOSINDO</p>
                <p className="mt-1 text-[10px] text-white/58">SIUPL : 22072600233610001</p>
              </div>

              <div className="mx-auto mt-4 h-1.5 w-28 rounded-full bg-white/18" />

              <div className="mt-4 rounded-[22px] border border-[#D8F15A]/12 bg-[linear-gradient(135deg,#15472B_0%,#0C2418_100%)] p-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D8F15A]">Promo praktis</p>
                <div className="mt-2 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {(["Aman", "Cepat", "Praktis"] as const).map((tag) => (
                      <span key={tag} className="rounded-full bg-white/10 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/88">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="rounded-full bg-white/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/70">BI Ready</div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-[1.02fr_1.35fr] gap-3">
                <div className="rounded-[24px] bg-white/96 p-4 shadow-[0_10px_22px_rgba(4,39,24,0.08)]">
                  <div className="w-[72px] h-[72px] rounded-[22px] bg-[#0B3F26] text-[#D3EE67] flex items-center justify-center mb-6">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                      <path d="M9 5H5a2 2 0 0 0-2 2v4" />
                      <path d="M15 5h4a2 2 0 0 1 2 2v4" />
                      <path d="M9 19H5a2 2 0 0 1-2-2v-4" />
                      <path d="M15 19h4a2 2 0 0 0 2-2v-4" />
                      <path d="M9 9h.01" />
                      <path d="M15 9h.01" />
                      <path d="M9 15h.01" />
                      <path d="M15 15h.01" />
                      <path d="M12 12h.01" />
                    </svg>
                  </div>
                  <p className="text-[13px] font-semibold text-[#173126]">Scan Barcode</p>
                  <p className="mt-1 text-[12px] text-[#173126]/68">Qris &amp; Q-tra</p>
                </div>

                <div className="rounded-[24px] bg-white/96 p-4 shadow-[0_10px_22px_rgba(4,39,24,0.08)]">
                  <div className="grid grid-cols-3 gap-x-2 gap-y-4">
                    {PHONE_SERVICES.map((service) => (
                      <ServiceItem key={service.label} label={service.label} icon={service.icon} />
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-5 text-center text-[10px] text-white/70">Saku Sultan telah berizin dan diawasi oleh:</p>
              <div className="mt-2 flex items-center justify-center gap-4 text-[10px] font-semibold uppercase tracking-[0.08em] text-white/55">
                <span>KOMDIGI</span>
                <span>Bank Indonesia</span>
              </div>
            </div>

            <div className="mt-3 rounded-[28px] bg-white px-2 py-2 shadow-[0_12px_28px_rgba(4,39,24,0.08)] border border-[#042718]/6">
              <div className="grid grid-cols-5 gap-1 items-end">
                {PHONE_TABS.map((tab) => (
                  <PhoneTab
                    key={tab.label}
                    label={tab.label}
                    icon={tab.icon}
                    active={Boolean("active" in tab && tab.active)}
                    standout={Boolean("standout" in tab && tab.standout)}
                  />
                ))}
              </div>
              <div className="mx-auto mt-2 h-1.5 w-28 rounded-full bg-[#0A2818]/12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PwHero() {
  return (
    <section
      id="beranda"
      className="relative w-full overflow-hidden bg-white scroll-mt-24"
    >
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/videos/payway/header.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/78" />
        <div className="absolute right-[-120px] top-[120px] w-[420px] h-[420px] rounded-full bg-[#CFF0D7] blur-2xl opacity-55" />
        <div className="absolute left-[-160px] top-[240px] w-[320px] h-[320px] rounded-full bg-[#E6F2FF] blur-2xl opacity-65" />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full pt-5">
        <nav className="flex items-center justify-between h-[64px] sm:h-[72px] w-full px-6 lg:px-10">
          <div className="flex items-center gap-10">
            <PwReveal>
              <span className="font-heading font-bold text-2xl sm:text-3xl text-[#042718] tracking-tight">
                Saku Sultan
              </span>
            </PwReveal>

            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`font-body text-base tracking-[-0.3px] transition-all text-[#042718] ${
                    index === 0
                      ? "font-bold opacity-100"
                      : "font-normal opacity-75 hover:opacity-100 hover:font-semibold"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-base font-medium text-[#042718] opacity-75 hover:opacity-100 transition-opacity"
            >
              Masuk
            </a>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center overflow-hidden bg-[#042718] text-white p-1.5 rounded-full h-[48px] pl-4 shadow-[0_18px_36px_rgba(4,39,24,0.14)]"
            >
              <div className="flex items-center gap-4">
                <span className="font-body font-medium whitespace-nowrap text-base">
                  Daftar Sekarang
                </span>
                <div className="flex items-center justify-center shrink-0 w-8 h-8 rounded-full bg-white text-[#042718]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3.5 h-3.5"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </div>
              </div>
            </a>
          </div>

          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#042718] text-white shadow-lg"
            aria-label="Download aplikasi Saku Sultan"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M12 15V3" />
              <path d="m7 10 5 5 5-5" />
              <path d="M5 21h14" />
            </svg>
          </a>
        </nav>

        <div className="main-container">
          <div className="content-container mt-[40px] md:mt-[60px] lg:mt-[84px] grid grid-cols-1 lg:grid-cols-[minmax(0,1.04fr)_420px] lg:items-start gap-12 lg:gap-12 xl:gap-16 pb-10 lg:pb-0">
            <PwReveal className="w-full flex flex-col items-center lg:items-start text-center lg:text-left">
              <PwReveal
                delay={0}
                className="flex items-center gap-2 px-3 sm:px-[14px] py-[6px] rounded-full bg-white/80 backdrop-blur-sm border border-[#042718]/6 mb-6 flex-wrap justify-center lg:justify-start shadow-sm"
              >
                <span className="font-body text-sm sm:text-base text-[#042718]/70">
                  Dipercaya oleh:
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#198F38]/10 text-[#198F38] font-bold text-sm border border-[#198F38]/15">
                  QRIS
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#042718]/5 text-[#042718] font-semibold text-sm border border-[#042718]/8">
                  Bank Lokal
                </span>
              </PwReveal>

              <PwReveal delay={80} className="w-full flex flex-col items-center lg:items-start">
                <h1 className="w-full max-w-[640px] text-[42px] sm:text-[52px] md:text-[58px] lg:text-[70px] font-heading font-semibold text-[#042718] leading-[1.05] tracking-[-1.4px] sm:tracking-[-3px] mb-5">
                  Mudahkan Hidupmu dengan{" "}
                  <span className="text-[#198F38]">Transaksi Kekinian</span>
                </h1>
              </PwReveal>

              <PwReveal delay={160} className="w-full flex flex-col items-center lg:items-start">
                <p className="w-full max-w-[560px] text-base sm:text-lg lg:text-[22px] font-body text-[#042718]/80 leading-[1.5] tracking-[-0.2px] sm:tracking-[-0.44px] mb-8 sm:mb-10">
                  Bayar pulsa, listrik, PDAM, BPJS, dan top-up e-money semua
                  dalam satu genggaman. Praktis, cepat, dan aman.
                </p>
              </PwReveal>

              <PwReveal
                delay={240}
                className="flex flex-col sm:flex-row items-center gap-4 mb-10 sm:mb-12 w-full sm:w-auto"
              >
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center overflow-hidden w-full lg:w-auto bg-[#042718] text-white p-2 rounded-full h-[64px] pl-6 shadow-[0_24px_48px_rgba(4,39,24,0.16)]"
                >
                  <div className="flex items-center gap-4 w-full lg:w-auto justify-between lg:justify-start">
                    <span className="font-body font-medium whitespace-nowrap text-lg">
                      Download Gratis
                    </span>
                    <div className="flex items-center justify-center shrink-0 w-11 h-11 rounded-full bg-white text-[#042718]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-[18px] h-[18px]"
                      >
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </div>
                  </div>
                </a>

                <a
                  href="#fitur"
                  className="relative flex items-center overflow-hidden w-full lg:w-auto bg-white/70 backdrop-blur-xl text-[#042718] p-2 rounded-full h-[64px] border border-[#042718]/10"
                >
                  <div className="flex items-center gap-4 w-full lg:w-auto justify-between lg:justify-start px-4">
                    <span className="font-body font-medium whitespace-nowrap text-lg">
                      Pelajari Fitur
                    </span>
                    <div className="flex items-center justify-center shrink-0 w-11 h-11 rounded-full bg-[#042718] text-white">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-[18px] h-[18px]"
                      >
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </div>
                  </div>
                </a>
              </PwReveal>

              <PwReveal delay={320} className="flex flex-wrap items-center gap-4 sm:gap-6">
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-full bg-white/80 border border-[#042718]/6 px-4 py-3 shadow-sm"
                >
                  <div className="w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center bg-white">
                    <img
                      alt="Google Play"
                      loading="lazy"
                      width={32}
                      height={32}
                      decoding="async"
                      className="w-full h-full object-contain"
                      src="/images/payway/google-play.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="flex items-center gap-1.5 text-[#042718]">
                      <span className="font-body text-base font-bold">4.8</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                      </svg>
                    </div>
                    <span className="font-body text-sm text-[#042718]/70">
                      Google Play
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3 rounded-full bg-[#EAF7EE] border border-[#198F38]/12 px-4 py-3">
                  <span className="w-2 h-2 rounded-full bg-[#198F38]" />
                  <span className="font-body text-sm text-[#042718]/80">
                    Pulsa, QRIS, BPJS, dan top-up dalam satu aplikasi
                  </span>
                </div>
              </PwReveal>
            </PwReveal>

            <PwReveal className="w-full flex justify-center lg:justify-end" delay={200}>
              <div className="w-full flex justify-center lg:justify-end lg:h-[700px] lg:overflow-hidden">
                <div className="lg:translate-y-[88px]">
                  <PwHeroPhoneMockup />
                </div>
              </div>
            </PwReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
