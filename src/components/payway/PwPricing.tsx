import { PwReveal } from "@/components/payway/pw-reveal";

/**
 * Section 07 — Pricing ("Simple, transparent pricing for every business").
 * Sumber markup: docs/research/jiro-payway/sections/07-pricing.html (kelas 1:1)
 * Referensi visual: docs/design-references/jiro-payway/sec-07-pricing.png
 *
 * Catatan konversi:
 * - Toggle Monthly/Yearly STATIS (presentasional) — sesuai capture: pill
 *   "Monthly" aktif (bg-[#042718]), "Yearly" + badge "Save 23%" pasif.
 * - Kartu Personal TANPA daftar fitur — persis markup & screenshot capture;
 *   daftar fitur hanya ada di kartu Business (varian mobile `flex lg:hidden`
 *   dan desktop `hidden lg:flex` dengan divider).
 * - Video BG kartu Business: autoPlay loop muted playsInline (konvensi #5),
 *   src lokal per asset-manifest.
 * - Residu framer: badge (opacity:0 scale(.9)), h2/p (translateY(20px)),
 *   kolom fitur desktop (opacity:1 transform:none) -> <PwReveal> stagger
 *   0/100/200ms; style="opacity:1" pada wrapper video & divider dihapus.
 */

const PRICING_FEATURES = [
  "No complex setup required",
  "Fast and secure payment processing",
  "Multi-currency support for global payments",
  "Priority support and faster response time",
  "Access to advanced payment features",
];

export function PwPricing() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-[80px] ">
      <div className="main-container relative z-10 flex flex-col items-center px-4 md:px-10 lg:px-0">
        <div className="content-container flex flex-col items-center w-full max-w-[1248px] mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 text-center mb-[64px]">
            <PwReveal className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#198F381A] bg-[#F6FDFF]/80 backdrop-blur-sm text-[#198F38]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sparkles"
              >
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                <path d="M20 3v4" />
                <path d="M22 5h-4" />
                <path d="M4 17v2" />
                <path d="M5 18H3" />
              </svg>
              <span className="font-body text-base tracking-[-0.3px]">Pricing Plan</span>
            </PwReveal>
            <PwReveal delay={100}>
              <h2 className="max-w-[700px] font-heading text-[28px] sm:text-[42px] lg:text-[52px] font-semibold text-[#042718] leading-[1.1] sm:leading-[58px] tracking-[-0.8px] sm:tracking-[-1.8px]">
                Simple, transparent pricing for every business
              </h2>
            </PwReveal>
            <PwReveal delay={200}>
              <p className="max-w-[600px] font-body text-base sm:text-lg text-[#042718]/80 leading-relaxed">
                Choose a plan that fits your needs from getting started to
                scaling globally, with flexible pricing and no hidden fees.
              </p>
            </PwReveal>
          </div>

          {/* Toggle Monthly/Yearly — statis (presentasional) */}
          <div className="flex items-center p-1.5 bg-[#F1F4F2] rounded-full gap-1 mb-10 md:mb-[64px] border border-[#042718]/5">
            <button className="px-4 sm:px-8 py-2 md:py-2.5 rounded-full text-[14px] sm:text-[16px] font-medium transition-all duration-300 bg-[#042718] text-white shadow-sm">
              Monthly
            </button>
            <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-2 md:py-2.5 rounded-full cursor-pointer transition-all duration-300 hover:bg-black/5">
              <span className="text-[14px] sm:text-[16px] font-medium transition-colors duration-300 text-[#042718]/60">
                Yearly
              </span>
              <span className="bg-[#198F38] text-white text-[10px] sm:text-[12px] font-semibold px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">
                Save 23%
              </span>
            </div>
          </div>

          <div className="w-full max-w-[1248px] flex flex-col lg:flex-row items-stretch justify-center gap-6">
            {/* Kartu Personal — $19 */}
            <div className="relative cursor-pointer transition-all duration-500 overflow-hidden flex flex-col shrink-0 p-8 w-full lg:w-[400px] bg-white border border-[#042718]/8 rounded-[30px]">
              <div className="relative z-20 flex flex-col w-full h-full">
                <div className="flex flex-col items-start shrink-0 w-full w-full">
                  <div className="flex flex-col items-start w-full">
                    <h3 className="font-heading text-[32px] md:text-[36px] font-semibold leading-tight tracking-[-1px] mb-1.5 transition-colors duration-500 text-[#042718]">
                      Personal
                    </h3>
                    <p className="font-body text-base font-normal leading-6 tracking-[-0.3px] mb-5 transition-colors duration-500 text-[#042718]/80">
                      Accept payments with essential features for individuals
                      and small businesses.
                    </p>
                    <div className="flex items-end gap-2">
                      <span className="font-heading text-[52px] font-semibold leading-[58px] tracking-[-1.8px] transition-colors duration-500 text-[#042718]">
                        $19
                      </span>
                      <span className="font-body text-base font-normal mb-2 transition-colors duration-500 text-[#042718]/80">
                        /Monthly subscription
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start w-full mt-16">
                    <div className="w-full">
                      <button className="group relative flex items-center w-full h-[64px] md:h-[72px] p-2 rounded-full border transition-all duration-500 overflow-hidden bg-white border-[#042718]/10 text-[#042718] pl-6 md:pl-8 pr-2">
                        <div className="flex items-center justify-between w-full h-full flex-row">
                          <span className="font-body text-lg md:text-[20px] font-medium pointer-events-none whitespace-nowrap">
                            Get 14-days free trial
                          </span>
                          <div className="flex items-center justify-center w-12 h-12 md:w-[56px] md:h-[56px] rounded-full bg-[#042718] text-white shrink-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-arrow-up-right md:w-6 md:h-6"
                            >
                              <path d="M7 7h10v10" />
                              <path d="M7 17 17 7" />
                            </svg>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Kartu Business — $39, dark + video BG */}
            <div className="relative cursor-pointer transition-all duration-500 overflow-hidden flex flex-col shrink-0 p-8 w-full lg:w-[824px] bg-[#042718] rounded-[48px]">
              <div className="absolute inset-0 z-0">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                  <source src="/videos/payway/header-01-bg-payway.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[#042718]/60 z-10" />
              </div>
              <div className="relative z-20 flex flex-col w-full h-full lg:flex-row lg:items-stretch lg:gap-10">
                <div className="flex flex-col items-start shrink-0 w-full lg:w-[336px]">
                  <div className="flex flex-col items-start w-full">
                    <h3 className="font-heading text-[32px] md:text-[36px] font-semibold leading-tight tracking-[-1px] mb-1.5 transition-colors duration-500 text-white">
                      Business
                    </h3>
                    <p className="font-body text-base font-normal leading-6 tracking-[-0.3px] mb-5 transition-colors duration-500 text-white/80">
                      Scale payments with advanced features for growing
                      businesses and enterprises.
                    </p>
                    <div className="flex items-end gap-2">
                      <span className="font-heading text-[52px] font-semibold leading-[58px] tracking-[-1.8px] transition-colors duration-500 text-white">
                        $39
                      </span>
                      <span className="font-body text-base font-normal mb-2 transition-colors duration-500 text-white/80">
                        /Monthly subscription
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start w-full mt-16">
                    <div className="w-full">
                      <button className="group relative flex items-center w-full h-[64px] md:h-[72px] p-2 rounded-full border transition-all duration-500 overflow-hidden bg-white border-white/10 text-[#042718] pl-6 md:pl-8 pr-2">
                        <div className="flex items-center justify-between w-full h-full flex-row">
                          <span className="font-body text-lg md:text-[20px] font-medium pointer-events-none whitespace-nowrap">
                            Get 14-days free trial
                          </span>
                          <div className="flex items-center justify-center w-12 h-12 md:w-[56px] md:h-[56px] rounded-full bg-[#042718] text-white shrink-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-arrow-up-right md:w-6 md:h-6"
                            >
                              <path d="M7 7h10v10" />
                              <path d="M7 17 17 7" />
                            </svg>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Fitur — varian mobile */}
                <div className="flex lg:hidden flex-col items-start gap-4 pt-4 border-t border-white/10">
                  <span className="font-body text-xs font-medium text-white/80 uppercase tracking-wider">
                    Features
                  </span>
                  <ul className="flex flex-col gap-3 w-full">
                    {PRICING_FEATURES.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-5 h-5 rounded-full border border-white/10 bg-white/8 shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-check text-white"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </div>
                        <span className="font-body text-base font-normal text-white/90 leading-6 tracking-[-0.3px]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Fitur — varian desktop (divider + kolom reveal) */}
                <div className="hidden lg:flex items-stretch gap-8 flex-1">
                  <div className="w-[1px] bg-[#FFFFFF33]" />
                  <PwReveal delay={200} className="flex-1 flex flex-col items-start gap-4">
                    <span className="font-body text-sm font-medium text-white/80 uppercase tracking-wider mb-2">
                      Features
                    </span>
                    <ul className="flex flex-col gap-3 w-full">
                      {PRICING_FEATURES.map((feature) => (
                        <li key={feature} className="flex items-center gap-4">
                          <div className="flex items-center justify-center w-6 h-6 rounded-full border border-white/10 bg-white/8 shrink-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-check text-white"
                            >
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                          </div>
                          <span className="font-body text-base font-normal text-white/90 leading-6 tracking-[-0.3px]">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </PwReveal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
