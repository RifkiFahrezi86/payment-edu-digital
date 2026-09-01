import { PwReveal } from "@/components/payway/pw-reveal";

const sparklesIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-sparkles w-4 md:w-5 h-4 md:h-5 text-[#198F38] fill-[#198F38]"
  >
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    <path d="M20 3v4" />
    <path d="M22 5h-4" />
    <path d="M4 17v2" />
    <path d="M5 18H3" />
  </svg>
);

const FEATURE_CHIPS = [
  "Pembayaran Tagihan",
  "Barcode Scan",
  "Transfer Uang",
  "Top-Up Saldo",
  "E-Commerce",
  "Biometric Security",
] as const;

const PW_PARTNER_LOGOS: { name: string }[] = [
  { name: "QRIS" },
  { name: "OVO" },
  { name: "GoPay" },
  { name: "Dana" },
  { name: "ShopeePay" },
  { name: "LinkAja" },
];

export function PwInsights() {
  return (
    <section className="w-full bg-white flex flex-col items-center py-16 lg:py-24">
      <div className="w-full max-w-[1440px] px-6 flex flex-col items-center">
        <div className="w-full max-w-[1248px] flex flex-col gap-12 lg:gap-16">
          <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-20">
            <PwReveal className="flex flex-col gap-5 md:gap-8 w-full lg:w-[430px] order-2 lg:order-1">
              <h6 className="font-semibold text-lg md:text-xl lg:text-2xl leading-[26px] md:leading-[30px] tracking-[-0.6px] md:tracking-[-0.8px] text-[#042718]">
                Ringkasan Layanan
              </h6>
              <div className="rounded-[32px] border border-[#042718]/6 bg-[linear-gradient(180deg,#F7FDF9_0%,#ECF8F1_100%)] p-6 md:p-7 shadow-[0_24px_50px_rgba(4,39,24,0.08)]">
                <div className="flex items-center justify-between gap-4 pb-5 border-b border-[#042718]/8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-[#198F38] font-semibold">
                      Aktivitas Harian
                    </p>
                    <p className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-[#042718]">
                      Praktis, cepat, aman
                    </p>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-[#042718] text-white flex items-center justify-center shadow-lg">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-5">
                  {FEATURE_CHIPS.map((chip) => (
                    <div
                      key={chip}
                      className="rounded-2xl border border-[#042718]/8 bg-white/90 px-4 py-3 text-sm font-medium text-[#042718]/80"
                    >
                      {chip}
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-[24px] bg-[#042718] px-5 py-4 text-white">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-white/55">
                    Fokus utama
                  </p>
                  <p className="mt-2 text-base md:text-lg font-medium leading-7 text-white/90">
                    Satu aplikasi untuk bayar tagihan, scan QR/barcode, transfer,
                    dan top-up saldo dengan keamanan biometrik.
                  </p>
                </div>
              </div>
            </PwReveal>

            <div className="flex flex-col w-full flex-1 order-1 lg:order-2">
              <div className="flex flex-col w-full">
                <PwReveal className="flex items-center gap-2 bg-[#198F380A] px-4 py-[6px] rounded-full w-fit border border-[#198F381A] mb-4 md:mb-6">
                  {sparklesIcon}
                  <span className="font-normal text-sm md:text-base leading-[22px] md:leading-6 tracking-[-0.3px] text-[#198F38]">
                    Ringkasan
                  </span>
                </PwReveal>
                <h2 className="font-semibold text-[28px] md:text-[36px] lg:text-[42px] leading-[36px] md:leading-[44px] lg:leading-[48px] tracking-[-0.8px] md:tracking-[-1.5px] lg:tracking-[-2px] inline-flex flex-wrap whitespace-pre-wrap mb-3 md:mb-4">
                  Kemudahan Transaksi untuk Semua Kebutuhanmu
                </h2>
                <PwReveal delay={100}>
                  <p className="font-normal text-base md:text-lg leading-6 md:leading-7 text-[#042718cc] max-w-[655px] mb-10 lg:mb-20 opacity-80">
                    Bayar tagihan, scan QR/barcode, top-up saldo, transfer uang,
                    dan belanja online dalam satu aplikasi yang cepat, mudah,
                    dan aman.
                  </p>
                </PwReveal>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 lg:gap-0 h-fit border-t lg:border-t-0 border-[#E6E6E6] pt-10 lg:pt-0">
                <PwReveal className="flex flex-col gap-1 lg:pr-10 lg:w-[253px]">
                  <div className="flex items-baseline gap-1">
                    <span className="font-semibold text-[36px] md:text-[52px] leading-[42px] md:leading-[58px] tracking-[-0.8px] md:tracking-[-1.8px] text-[#042718]">
                      4.8
                    </span>
                    <span className="font-semibold text-[28px] md:text-[42px] leading-[34px] md:leading-[48px] tracking-[-1px] md:tracking-[-2px] text-[rgba(0,0,0,0.40)]">
                      {" star"}
                    </span>
                  </div>
                  <p className="font-medium text-base md:text-lg leading-[24px] md:leading-[28px] text-[#042718cc] lg:w-[200px]">
                    Kepuasan Pengguna
                  </p>
                </PwReveal>
                <PwReveal
                  className="flex flex-col gap-1 sm:border-l lg:border-x border-[#E6E6E6] sm:pl-10 lg:pl-10 lg:pr-0 border-y sm:border-y-0 py-10 sm:py-0 my-0 lg:w-[252px]"
                  delay={100}
                >
                  <div className="flex items-baseline gap-1">
                    <span className="font-semibold text-[32px] md:text-[52px] leading-[38px] md:leading-[58px] tracking-[-0.8px] md:tracking-[-1.8px] text-[#042718]">
                      Rp
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="font-semibold text-[36px] md:text-[52px] leading-[42px] md:leading-[58px] tracking-[-0.8px] md:tracking-[-1.8px] text-[#042718]">
                        500
                      </span>
                      <span className="font-semibold text-[28px] md:text-[42px] leading-[34px] md:leading-[48px] tracking-[-1px] md:tracking-[-2px] text-[rgba(0,0,0,0.40)]">
                        M+
                      </span>
                    </div>
                  </div>
                  <p className="font-medium text-base md:text-lg leading-[24px] md:leading-[28px] text-[#042718cc] lg:w-[200px]">
                    Total Transaksi Diproses
                  </p>
                </PwReveal>
                <PwReveal
                  className="flex flex-col gap-1 lg:pl-10 pt-0 sm:pt-0 lg:pt-0 lg:w-[252px]"
                  delay={200}
                >
                  <div className="flex items-baseline gap-1">
                    <span className="font-semibold text-[36px] md:text-[52px] leading-[42px] md:leading-[58px] tracking-[-0.8px] md:tracking-[-1.8px] text-[#042718]">
                      100
                    </span>
                    <span className="font-semibold text-[28px] md:text-[42px] leading-[34px] md:leading-[48px] tracking-[-1px] md:tracking-[-2px] text-[rgba(0,0,0,0.40)]">
                      K+
                    </span>
                  </div>
                  <p className="font-medium text-base md:text-lg leading-[24px] md:leading-[28px] text-[#042718cc] lg:w-[200px]">
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
                    className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 shrink-0"
                  >
                    <div className="h-11 w-auto flex items-center justify-center font-bold text-xl text-[#042718] tracking-tight">
                      <span className="font-heading font-bold text-lg text-[#042718]">
                        {logo.name}
                      </span>
                    </div>
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
