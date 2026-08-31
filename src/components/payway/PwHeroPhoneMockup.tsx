"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

type ServiceItem = {
  label: string;
  icon: ReactNode;
};

type BottomTabItem = {
  label: string;
  icon: ReactNode;
  active?: boolean;
  special?: boolean;
};

const PROMO_TAGS = ["AMAN", "CEPAT", "PRAKTIS"] as const;

const SERVICE_ITEMS: ServiceItem[] = [
  {
    label: "E-Wallet",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
        <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
      </svg>
    ),
  },
  {
    label: "Pulsa",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.6a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.48-1.28a2 2 0 0 1 2.11-.45c.83.29 1.7.5 2.6.62A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
  },
  {
    label: "Token",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
      </svg>
    ),
  },
  {
    label: "Internet",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 20h.01" />
        <path d="M2 8.82a15 15 0 0 1 20 0" />
        <path d="M5 12.86a10 10 0 0 1 14 0" />
        <path d="M8.5 16.43a5 5 0 0 1 7 0" />
      </svg>
    ),
  },
  {
    label: "SS Games",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <line x1="6" x2="10" y1="12" y2="12" />
        <line x1="8" x2="8" y1="10" y2="14" />
        <line x1="15" x2="15.01" y1="13" y2="13" />
        <line x1="18" x2="18.01" y1="11" y2="11" />
        <rect width="20" height="12" x="2" y="6" rx="2" />
      </svg>
    ),
  },
  {
    label: "Lainnya",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect width="7" height="7" x="3" y="3" rx="1.2" />
        <rect width="7" height="7" x="14" y="3" rx="1.2" />
        <rect width="7" height="7" x="14" y="14" rx="1.2" />
        <rect width="7" height="7" x="3" y="14" rx="1.2" />
      </svg>
    ),
  },
];

const BOTTOM_TABS: BottomTabItem[] = [
  {
    label: "Home",
    active: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="m12 3 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10l9-7Z" />
      </svg>
    ),
  },
  {
    label: "SP Store",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M6 7 4 10v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9l-2-3Z" />
        <path d="M3 10h18" />
      </svg>
    ),
  },
  {
    label: "Cuan",
    icon: <span className="text-[20px] font-bold leading-none">S</span>,
  },
  {
    label: "History",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 8v5l3 2" />
        <path d="M21 12a9 9 0 1 1-3.2-6.9" />
      </svg>
    ),
  },
  {
    label: "Startup",
    special: true,
    icon: <span className="text-[22px] font-semibold leading-none">0</span>,
  },
];

function ServiceShortcut({
  label,
  icon,
  isDark,
}: {
  label: string;
  icon: ReactNode;
  isDark: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_18px_rgba(4,39,24,0.1)] ${
          isDark ? "bg-[#0E3A26] text-[#BFE85B]" : "bg-[#0B4329] text-[#D3EF67]"
        }`}
      >
        {icon}
      </div>
      <span
        className={`text-center text-[11px] font-medium leading-none ${
          isDark ? "text-white/88" : "text-[#173126]"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function BottomTab({
  item,
  isDark,
}: {
  item: BottomTabItem;
  isDark: boolean;
}) {
  const { label, icon, active = false, special = false } = item;

  return (
    <div className={`flex flex-col items-center gap-1 ${special ? "-mt-7" : ""}`}>
      <div
        className={`flex items-center justify-center ${
          special
            ? isDark
              ? "h-16 w-16 rounded-full border-[4px] border-[#50545E] bg-[#0A0F0D] text-[#D6F45F] shadow-[0_18px_36px_rgba(0,0,0,0.28)]"
              : "h-16 w-16 rounded-full border-[4px] border-[#D6DBE4] bg-white text-[#0A2818] shadow-[0_18px_36px_rgba(4,39,24,0.14)]"
            : active
              ? isDark
                ? "h-10 w-10 rounded-full bg-[#16251E] text-[#D6F45F]"
                : "h-10 w-10 rounded-full bg-[#EAF3CE] text-[#0A2818]"
              : isDark
                ? "h-10 w-10 rounded-full text-[#8A909A]"
                : "h-10 w-10 rounded-full text-[#98A0AE]"
        }`}
      >
        {icon}
      </div>
      <span
        className={`text-[11px] font-medium ${
          active
            ? isDark
              ? "text-[#D6F45F]"
              : "text-[#0A2818]"
            : isDark
              ? "text-[#8A909A]"
              : "text-[#8F96A3]"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function PromoFigure({ isDark }: { isDark: boolean }) {
  return (
    <div className="relative h-[178px] w-[142px]">
      <div
        className={`absolute inset-y-3 right-0 w-[118px] rounded-[38px] shadow-[0_18px_34px_rgba(22,90,52,0.22)] ${
          isDark
            ? "bg-[radial-gradient(circle_at_35%_20%,#24F57A_0%,#1E9C46_46%,#0A4424_100%)]"
            : "bg-[radial-gradient(circle_at_30%_20%,#F4FF8F_0%,#9FD134_46%,#165A34_100%)]"
        }`}
      />
      <div
        className={`absolute right-0 top-1 h-12 w-12 rounded-full blur-xl ${
          isDark ? "bg-[#31FF88]/40" : "bg-[#F4FF8D]/45"
        }`}
      />
      <div className="absolute left-4 top-7 flex h-14 w-14 items-center justify-center rounded-[20px] bg-white/14 text-white backdrop-blur-sm">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
          <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
        </svg>
      </div>
      <div className={`absolute right-2 top-7 ${isDark ? "text-[#C6FF67]" : "text-[#E7FF7D]"}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="h-16 w-16">
          <path d="m6 17 7-7 5 5" />
          <path d="M14 8h5v5" />
        </svg>
      </div>
      <div
        className={`absolute bottom-4 left-3 right-3 rounded-[24px] p-3 shadow-[0_10px_24px_rgba(4,39,24,0.18)] ${
          isDark ? "bg-[#0A2A18]/88" : "bg-[#0B472A]/88"
        }`}
      >
        <div className="flex items-center justify-between gap-2">
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-full ${
              isDark ? "bg-[#B9EE4D] text-[#0A2818]" : "bg-[#DDF56D] text-[#0B472A]"
            }`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M12 2v20" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7H14.5a3.5 3.5 0 0 1 0 7H7" />
            </svg>
          </div>
          <div className="flex -space-x-1">
            <span className={`h-6 w-6 rounded-full border ${isDark ? "border-[#0A2A18] bg-[#BFE85B]" : "border-[#0B472A] bg-[#CFEA58]"}`} />
            <span className={`h-6 w-6 rounded-full border ${isDark ? "border-[#0A2A18] bg-[#EFFC9F]" : "border-[#0B472A] bg-[#F3FF9D]"}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function PwHeroPhoneMockup() {
  const [theme, setTheme] = useState<ThemeMode>("light");

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  const isDark = theme === "dark";

  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <div className="absolute inset-x-10 bottom-3 h-12 rounded-full bg-[#082d1b]/18 blur-3xl" />

      <div className="relative rounded-[60px] bg-[#151515] p-[6px] shadow-[0_54px_120px_rgba(4,39,24,0.34)]">
        <div className="rounded-[56px] border border-white/10 bg-[#262626] p-[3px]">
          <div className={`overflow-hidden rounded-[50px] transition-colors duration-700 ${isDark ? "bg-[#08110D]" : "bg-[#F4F4EF]"}`}>
            <div className="absolute left-1/2 top-4 z-20 h-[32px] w-[126px] -translate-x-1/2 rounded-full bg-black" />

            <div className={`px-5 pb-6 pt-5 transition-colors duration-700 ${isDark ? "bg-[#085B35] text-white" : "bg-[#BCDE22] text-[#0D2D1B]"}`}>
              <div className="flex items-center justify-between pt-1 text-[13px] font-semibold">
                <span>{isDark ? "17.17" : "17.18"}</span>
                <div className="flex items-center gap-2.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M2 8.82a15 15 0 0 1 20 0" />
                    <path d="M5 12.86a10 10 0 0 1 14 0" />
                    <path d="M8.5 16.43a5 5 0 0 1 7 0" />
                  </svg>
                  <div className="flex items-end gap-0.5">
                    <span className="h-2 w-1 rounded-full bg-current" />
                    <span className="h-3 w-1 rounded-full bg-current" />
                    <span className="h-4 w-1 rounded-full bg-current" />
                    <span className="h-5 w-1 rounded-full bg-current" />
                  </div>
                  <div className="rounded-md border border-current/60 px-1.5 py-[1px] text-[11px] leading-none">29</div>
                </div>
              </div>

              <div className="mt-8 flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="h-14 w-14 shrink-0 rounded-full bg-[radial-gradient(circle_at_50%_34%,#F5F6F8_0_24%,#8BC9F7_25%_53%,#E7E5E1_54%_100%)] border-[3px] border-white shadow-sm" />
                  <div className="min-w-0">
                    <p className={`truncate text-[17px] font-semibold leading-tight ${isDark ? "text-white" : "text-[#0A2818]"}`}>
                      Halo, Pengguna Baru
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full border-2 shadow-[0_10px_20px_rgba(10,74,43,0.18)] ${isDark ? "border-[#D8F05B]/45 bg-[#073A23] text-[#F4F880]" : "border-[#E7F475]/70 bg-[#0A4A2C] text-[#F4F880]"}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                    </svg>
                  </div>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full border-2 shadow-[0_10px_20px_rgba(10,74,43,0.18)] ${isDark ? "border-[#D8F05B]/45 bg-[#073A23] text-[#F4F880]" : "border-[#E7F475]/70 bg-[#0A4A2C] text-[#F4F880]"}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
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

              <div className="mt-6 grid grid-cols-[1fr_142px] items-end gap-3">
                <div>
                  <div className={`mb-3 flex items-center gap-2.5 ${isDark ? "text-white/88" : "text-[#173126]"}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#FF705C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 shrink-0">
                      <path d="M4 7h11a3 3 0 0 1 3 3v1" />
                      <path d="M8 17H5a3 3 0 0 1-3-3v-1" />
                      <path d="M20 7v10" />
                      <path d="m16 3 4 4-4 4" />
                      <path d="m8 21-4-4 4-4" />
                    </svg>
                    <span className="text-[15px] font-medium">Saldo</span>
                  </div>

                  <p className={`text-[21px] font-semibold tracking-[0.16em] ${isDark ? "text-white" : "text-[#0A2818]"}`}>
                    Rp ••••••••
                  </p>

                  <div className="mt-5 flex gap-2.5">
                    <div className={`flex items-center gap-2 rounded-full border-2 px-4 py-2 shadow-sm backdrop-blur-sm ${isDark ? "border-white/30 bg-white/5 text-white" : "border-[#1A412F] bg-white/10 text-[#173126]"}`}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <path d="M5 12h14" />
                        <path d="m5 12 6-6" />
                        <path d="m5 12 6 6" />
                      </svg>
                      <span className="text-[14px] font-semibold">Top Up</span>
                    </div>

                    <div className={`flex items-center gap-2 rounded-full border-2 px-4 py-2 shadow-sm backdrop-blur-sm ${isDark ? "border-white/30 bg-white/5 text-white" : "border-[#1A412F] bg-white/10 text-[#173126]"}`}>
                      <span className="text-[14px] font-semibold">Transfer</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <path d="M19 5 5 19" />
                        <path d="M8 5h11v11" />
                      </svg>
                    </div>
                  </div>
                </div>

                <PromoFigure isDark={isDark} />
              </div>
            </div>

            <div className={`-mt-1 rounded-t-[36px] px-5 pb-4 pt-5 transition-colors duration-700 ${isDark ? "bg-[#04180F] text-white" : "bg-[#063720] text-white"}`}>
              <div className="text-center">
                <p className={`text-[15px] font-semibold tracking-[0.04em] ${isDark ? "text-[#CBE85F]" : "text-[#D8F15A]"}`}>
                  SULTAN PROMOSINDO
                </p>
                <p className={`mt-1 text-[10px] ${isDark ? "text-white/54" : "text-white/62"}`}>
                  SIUPL : 22072600233610001
                </p>
              </div>

              <div className={`mx-auto mt-4 h-1.5 w-28 rounded-full ${isDark ? "bg-white/12" : "bg-white/18"}`} />

              <div className={`mt-4 rounded-[34px] p-4 shadow-[0_12px_30px_rgba(4,39,24,0.12)] transition-colors duration-700 ${isDark ? "bg-[#08140F] text-white" : "bg-[#F4F4EF] text-[#173126]"}`}>
                <div className={`rounded-[20px] p-3 ${isDark ? "bg-[linear-gradient(135deg,#5C382A_0%,#1F130D_100%)] text-[#F8F0E7]" : "bg-[linear-gradient(135deg,#15472B_0%,#0C2418_100%)] text-white"}`}>
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-[34px] font-black italic leading-none tracking-[-0.04em]">PRAKTIS</p>
                    <span className="rounded-full bg-white/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/76">
                      Bank Indonesia
                    </span>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {PROMO_TAGS.map((tag) => (
                      <span key={tag} className="rounded-full bg-white/10 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/90">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-[1fr_1.42fr] gap-3">
                  <div className={`rounded-[24px] p-4 shadow-[0_10px_22px_rgba(4,39,24,0.08)] ${isDark ? "bg-[#13231C]" : "bg-white"}`}>
                    <div className={`mb-6 flex h-[78px] w-[78px] items-center justify-center rounded-[24px] ${isDark ? "bg-[#0A1712] text-[#C7EB5D]" : "bg-[#0B3F26] text-[#D3EF67]"}`}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-11 w-11">
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
                    <p className={`text-[13px] font-semibold ${isDark ? "text-white" : "text-[#173126]"}`}>
                      Scan Barcode
                    </p>
                    <p className={`mt-1 text-[12px] ${isDark ? "text-white/62" : "text-[#173126]/68"}`}>
                      Qris &amp; Q-tra
                    </p>
                  </div>

                  <div className={`rounded-[24px] p-4 shadow-[0_10px_22px_rgba(4,39,24,0.08)] ${isDark ? "bg-[#13231C]" : "bg-white"}`}>
                    <div className="grid grid-cols-3 gap-x-2 gap-y-4">
                      {SERVICE_ITEMS.map((item) => (
                        <ServiceShortcut key={item.label} label={item.label} icon={item.icon} isDark={isDark} />
                      ))}
                    </div>
                  </div>
                </div>

                <p className={`mt-5 text-center text-[10px] ${isDark ? "text-white/64" : "text-[#173126]/68"}`}>
                  Saku Sultan telah berizin dan diawasi oleh:
                </p>
                <div className={`mt-2 flex items-center justify-center gap-4 text-[10px] font-semibold uppercase tracking-[0.08em] ${isDark ? "text-white/44" : "text-[#173126]/48"}`}>
                  <span>KOMDIGI</span>
                  <span>Bank Indonesia</span>
                </div>
              </div>
            </div>

            <div className={`px-3 pb-4 pt-3 transition-colors duration-700 ${isDark ? "bg-[#08140F]" : "bg-[#F4F4EF]"}`}>
              <div className={`rounded-[28px] px-2 py-2 shadow-[0_12px_28px_rgba(4,39,24,0.08)] ${isDark ? "border border-white/8 bg-[#0A0F0D]" : "border border-[#042718]/6 bg-white"}`}>
                <div className="grid grid-cols-5 items-end gap-1">
                  {BOTTOM_TABS.map((item) => (
                    <BottomTab key={item.label} item={item} isDark={isDark} />
                  ))}
                </div>
                <div className={`mx-auto mt-2 h-1.5 w-28 rounded-full ${isDark ? "bg-white/10" : "bg-[#0A2818]/12"}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
