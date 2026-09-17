import { PwReveal } from "@/components/payway/pw-reveal";
import { PwEyebrow } from "@/components/payway/pw-eyebrow";

function ChipIcon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 shrink-0"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const FEATURE_CHIPS: { label: string; icon: React.ReactNode }[] = [
  {
    label: "Pembayaran Tagihan",
    icon: (
      <ChipIcon>
        <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
        <path d="M12 17.5v-11" />
      </ChipIcon>
    ),
  },
  {
    label: "Barcode Scan",
    icon: (
      <ChipIcon>
        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
        <path d="M7 12h10" />
      </ChipIcon>
    ),
  },
  {
    label: "Transfer Uang",
    icon: (
      <ChipIcon>
        <path d="m16 3 4 4-4 4" />
        <path d="M20 7H4" />
        <path d="m8 21-4-4 4-4" />
        <path d="M4 17h16" />
      </ChipIcon>
    ),
  },
  {
    label: "Top-Up Saldo",
    icon: (
      <ChipIcon>
        <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
        <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
      </ChipIcon>
    ),
  },
  {
    label: "E-Commerce",
    icon: (
      <ChipIcon>
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </ChipIcon>
    ),
  },
  {
    label: "Biometric Security",
    icon: (
      <ChipIcon>
        <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
        <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
        <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
        <path d="M2 12a10 10 0 0 1 18-6" />
        <path d="M2 16h.01" />
        <path d="M21.8 16c.2-2 .131-5.354 0-6" />
        <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" />
        <path d="M8.65 22c.21-.66.45-1.32.57-2" />
        <path d="M9 6.8a6 6 0 0 1 9 5.2v2" />
      </ChipIcon>
    ),
  },
];

const PW_PARTNER_LOGOS: { name: string; logo: string }[] = [
  { name: "Dana", logo: "/images/payway/pay/dana.svg" },
  { name: "ShopeePay", logo: "/images/payway/pay/shopeepay.svg" },
  { name: "LinkAja", logo: "/images/payway/pay/linkaja.svg" },
  { name: "BCA", logo: "/images/payway/pay/bca.svg" },
  { name: "Mandiri", logo: "/images/payway/pay/mandiri.svg" },
  { name: "BRI", logo: "/images/payway/pay/bri.svg" },
  { name: "BNI", logo: "/images/payway/pay/bni.svg" },
  { name: "QRIS", logo: "/images/payway/pay/qris.svg" },
  { name: "OVO", logo: "/images/payway/pay/ovo.svg" },
  { name: "GoPay", logo: "/images/payway/pay/gopay.svg" },
];

export function PwInsights() {
  return (
    <section id="ringkasan" aria-labelledby="ringkasan-title" className="saku-insights pw-section-y w-full bg-white scroll-mt-24">
      <div className="main-container">
        <div className="flex w-full flex-col gap-12 lg:gap-16">
          <div className="saku-insights-grid">
            <PwReveal className="flex min-w-0 flex-col gap-5 md:gap-8">
              <p className="font-semibold text-lg md:text-xl lg:text-2xl leading-[26px] md:leading-[30px] tracking-[-0.6px] md:tracking-[-0.8px] text-[#042718]">
                Ringkasan Layanan
              </p>
              <div className="saku-summary-card rounded-[32px] border border-[#042718]/6 bg-[linear-gradient(180deg,#F7FDF9_0%,#ECF8F1_100%)] p-6 md:p-7 shadow-[0_24px_50px_rgba(4,39,24,0.08)]">
                <div className="flex items-center justify-between gap-4 pb-5 border-b border-[#042718]/8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-[#15803D] font-semibold">
                      Aktivitas Harian
                    </p>
                    <p className="mt-2 text-[clamp(1.25rem,2.1vw,1.875rem)] font-semibold tracking-tight text-[#042718]">
                      Praktis, cepat, aman
                    </p>
                  </div>
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#042718] text-white flex items-center justify-center shadow-lg">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                      aria-hidden="true"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-5">
                  {FEATURE_CHIPS.map((chip) => (
                    <div
                      key={chip.label}
                      className="flex items-center gap-2.5 rounded-2xl border border-[#042718]/8 bg-white/90 px-3 py-3 text-sm font-medium text-[#042718]/80 sm:px-4"
                    >
                      <span className="text-[#198F38]">{chip.icon}</span>
                      <span className="leading-snug">{chip.label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-[24px] bg-[#042718] p-6 text-white">
                  <p className="text-sm font-bold uppercase text-white/55">
                    Fokus utama
                  </p>
                  <p className="mt-2 text-base font-medium leading-6 text-white/95">
                    Saatnya bertransaksi di Saku Sultan, praktis, aman dan cuan.
                    Ajak keluarga, rekan, dan mitra untuk cuan bersama.
                  </p>
                </div>
              </div>
            </PwReveal>

            <div className="flex min-w-0 flex-col">
              <div className="flex flex-col w-full">
                <PwReveal className="mb-4 md:mb-6">
                  <PwEyebrow>Ringkasan</PwEyebrow>
                </PwReveal>
                <h2 id="ringkasan-title" className="mb-6 text-[clamp(1.75rem,2.5vw,2.375rem)] font-extrabold leading-[1.3] tracking-[-0.035em] text-black md:mb-8">
                  Cuan di setiap transaksi untuk Semua Kebutuhanmu
                </h2>
                <PwReveal delay={100}>
                  <p className="max-w-[800px] text-base leading-[1.5] text-[#5A7061] md:text-xl">
                    Hasilkan cuan saat bayar tagihan, beli pulsa, token dan games,
                    scan QR-Code (Q-Tra), transfer sesama saku sultan, serta
                    transfer bank dan BI-Fast.
                  </p>
                </PwReveal>
              </div>
              <div className="saku-insights-stats">
                <PwReveal className="saku-insights-stat">
                  <div className="saku-stat-value saku-stat-rating">
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="saku-rating-star" fill="currentColor">
                      <path d="m12 1.8 3.08 6.25 6.9 1a1 1 0 0 1 .55 1.71l-5 4.87 1.18 6.87a1 1 0 0 1-1.45 1.05L12 20.3l-6.17 3.25a1 1 0 0 1-1.45-1.05l1.18-6.87-5-4.87a1 1 0 0 1 .55-1.71l6.9-1L11.1 1.8a1 1 0 0 1 1.8 0Z" />
                    </svg>
                    <span>4.8</span>
                  </div>
                  <p className="saku-stat-label">
                    Rating Play Store
                  </p>
                </PwReveal>
                <PwReveal
                  className="saku-insights-stat"
                  delay={100}
                >
                  <div className="saku-stat-value">
                    <span>Rp500</span><span className="saku-stat-suffix">M+</span>
                  </div>
                  <p className="saku-stat-label">
                    Total Transaksi Diproses
                  </p>
                </PwReveal>
                <PwReveal
                  className="saku-insights-stat"
                  delay={200}
                >
                  <div className="saku-stat-value">
                    <span>100</span><span className="saku-stat-suffix">K+</span>
                  </div>
                  <p className="saku-stat-label">
                    Pengguna Aktif
                  </p>
                </PwReveal>
              </div>
            </div>
          </div>

          <div className="w-full border-t border-[#E6E6E6] pt-8 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 lg:w-48 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 lg:w-48 bg-gradient-to-l from-white to-transparent z-10" />
            <div className="flex gap-12 md:gap-[72px] items-center pw-insights-marquee">
              {Array.from({ length: 4 }).flatMap((_, copy) =>
                PW_PARTNER_LOGOS.map((logo) => (
                  <div
                    key={`${copy}-${logo.name}`}
                    className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 shrink-0"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={logo.logo}
                      alt={`Logo ${logo.name}`}
                      loading="lazy"
                      className="h-7 md:h-8 w-auto max-w-[120px] object-contain"
                    />
                  </div>
                )),
              )}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .pw-insights-marquee {
          --pw-marquee-shift: calc(-50% - 24px);
          width: max-content;
          animation: pwInsightsMarquee 40s linear infinite;
        }
        @media (min-width: 768px) {
          .pw-insights-marquee {
            --pw-marquee-shift: calc(-50% - 36px);
          }
        }
        @keyframes pwInsightsMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(var(--pw-marquee-shift));
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .pw-insights-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
