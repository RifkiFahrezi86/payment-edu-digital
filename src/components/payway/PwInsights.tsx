import type { ReactElement } from "react";
import { PwReveal } from "@/components/payway/pw-reveal";

/* ---- ikon lucide inline (verbatim dari markup 01-insights) ---- */

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

/* ---- logo marquee (teks/bentuk CSS murni, verbatim dari markup; 6 logo x 4 salinan untuk loop) ---- */

const PW_TRUST_LOGOS: { name: string; mark: ReactElement }[] = [
  {
    name: "Yellow Card",
    mark: (
      <span className="flex items-center gap-2">
        <div className="w-8 h-8 bg-yellow-400 rounded-sm" />
        Yellow Card
      </span>
    ),
  },
  {
    name: "YOUHODLER",
    mark: <span className="flex items-center gap-2 font-black">YOUHODLER</span>,
  },
  {
    name: "BlockBee",
    mark: (
      <span className="flex items-center gap-2">
        <div className="w-6 h-6 border-2 border-black rotate-45" />
        BlockBee
      </span>
    ),
  },
  {
    name: "XAPO BANK",
    mark: <span className="tracking-[0.2em] font-light">X A P O BANK</span>,
  },
  {
    name: "fiwind",
    mark: (
      <span className="flex items-center gap-1 italic text-blue-600 font-bold border-l-4 border-blue-600 pl-2">
        fiwind
      </span>
    ),
  },
  {
    name: "ZeroHash",
    mark: <span className="font-medium">ZeroHash</span>,
  },
];

/* ---- section utama ---- */

export function PwInsights() {
  return (
    <section className="w-full bg-white flex flex-col items-center py-16 lg:py-24">
      <div className="w-full max-w-[1440px] px-6 flex flex-col items-center">
        <div className="w-full max-w-[1248px] flex flex-col gap-12 lg:gap-16">
          <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-20">
            {/* Kolom kiri — kartu gambar "Result" */}
            <PwReveal className="flex flex-col gap-5 md:gap-8 w-full lg:w-[408px] order-2 lg:order-1">
              <h6 className="font-semibold text-lg md:text-xl lg:text-2xl leading-[26px] md:leading-[30px] tracking-[-0.6px] md:tracking-[-0.8px] text-[#042718]">
                Result
              </h6>
              <div className="relative w-full aspect-[4/3] sm:h-[300px] lg:h-[340px] rounded-3xl overflow-hidden bg-[#f9f9f9] border border-[#f0f0f0] flex items-center justify-center">
                <PwReveal className="w-full h-full relative" delay={200}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Insights Data"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    className="object-cover absolute inset-0 h-full w-full text-transparent"
                    src="/images/payway/insights-left-card.png"
                  />
                </PwReveal>
              </div>
            </PwReveal>

            {/* Kolom kanan — badge, heading, deskripsi, statistik */}
            <div className="flex flex-col w-full flex-1 order-1 lg:order-2">
              <div className="flex flex-col w-full">
                <PwReveal className="flex items-center gap-2 bg-[#198F380A] px-4 py-[6px] rounded-full w-fit border border-[#198F381A] mb-4 md:mb-6">
                  {sparklesIcon}
                  <span className="font-normal text-sm md:text-base leading-[22px] md:leading-6 tracking-[-0.3px] text-[#198F38]">
                    Insights
                  </span>
                </PwReveal>
                <h2 className="font-semibold text-[28px] md:text-[36px] lg:text-[42px] leading-[36px] md:leading-[44px] lg:leading-[48px] tracking-[-0.8px] md:tracking-[-1.5px] lg:tracking-[-2px] inline-flex flex-wrap whitespace-pre-wrap mb-3 md:mb-4">
                  Make smarter payment decisions with real-time insights and
                  full visibility into your cash flow.
                </h2>
                <PwReveal delay={100}>
                  <p className="font-normal text-base md:text-lg leading-6 md:leading-7 text-[#042718cc] max-w-[655px] mb-10 lg:mb-20 opacity-80">
                    Track every transaction, reduce failed payments, and
                    optimize performance with accurate, secure, and real-time
                    payment data.
                  </p>
                </PwReveal>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 lg:gap-0 h-fit border-t lg:border-t-0 border-[#E6E6E6] pt-10 lg:pt-0">
                <PwReveal className="flex flex-col gap-1 lg:pr-10 lg:w-[253px]">
                  <div className="flex items-baseline gap-1">
                    <span className="font-semibold text-[36px] md:text-[52px] leading-[42px] md:leading-[58px] tracking-[-0.8px] md:tracking-[-1.8px] text-[#042718]">
                      4.9
                    </span>
                    <span className="font-semibold text-[28px] md:text-[42px] leading-[34px] md:leading-[48px] tracking-[-1px] md:tracking-[-2px] text-[rgba(0,0,0,0.40)]">
                      {" star"}
                    </span>
                  </div>
                  <p className="font-medium text-base md:text-lg leading-[24px] md:leading-[28px] text-[#042718cc] lg:w-[200px]">
                    Customer Satisfaction
                  </p>
                </PwReveal>
                <PwReveal
                  className="flex flex-col gap-1 sm:border-l lg:border-x border-[#E6E6E6] sm:pl-10 lg:pl-10 lg:pr-0 border-y sm:border-y-0 py-10 sm:py-0 my-0 lg:w-[252px]"
                  delay={100}
                >
                  <div className="flex items-baseline gap-1">
                    <span className="font-semibold text-[32px] md:text-[52px] leading-[38px] md:leading-[58px] tracking-[-0.8px] md:tracking-[-1.8px] text-[#042718]">
                      $
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="font-semibold text-[36px] md:text-[52px] leading-[42px] md:leading-[58px] tracking-[-0.8px] md:tracking-[-1.8px] text-[#042718]">
                        76
                      </span>
                      <span className="font-semibold text-[28px] md:text-[42px] leading-[34px] md:leading-[48px] tracking-[-1px] md:tracking-[-2px] text-[rgba(0,0,0,0.40)]">
                        M+
                      </span>
                    </div>
                  </div>
                  <p className="font-medium text-base md:text-lg leading-[24px] md:leading-[28px] text-[#042718cc] lg:w-[200px]">
                    Payments Processed
                  </p>
                </PwReveal>
                <PwReveal
                  className="flex flex-col gap-1 lg:pl-10 pt-0 sm:pt-0 lg:pt-0 lg:w-[252px]"
                  delay={200}
                >
                  <div className="flex items-baseline gap-1">
                    <span className="font-semibold text-[36px] md:text-[52px] leading-[42px] md:leading-[58px] tracking-[-0.8px] md:tracking-[-1.8px] text-[#042718]">
                      3.5
                    </span>
                    <span className="font-semibold text-[28px] md:text-[42px] leading-[34px] md:leading-[48px] tracking-[-1px] md:tracking-[-2px] text-[rgba(0,0,0,0.40)]">
                      K+
                    </span>
                  </div>
                  <p className="font-medium text-base md:text-lg leading-[24px] md:leading-[28px] text-[#042718cc] lg:w-[200px]">
                    Active Businesses
                  </p>
                </PwReveal>
              </div>
            </div>
          </div>

          {/* Marquee logo — pengganti animasi translateX framer-motion (CSS keyframes) */}
          <div className="w-full border-t border-[#E6E6E6] pt-8 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 lg:w-48 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 lg:w-48 bg-gradient-to-l from-white to-transparent z-10" />
            <div className="flex gap-12 md:gap-[72px] items-center pw-insights-marquee">
              {Array.from({ length: 4 }).flatMap((_, copy) =>
                PW_TRUST_LOGOS.map((logo) => (
                  <div
                    key={`${copy}-${logo.name}`}
                    className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 shrink-0"
                  >
                    <div className="h-11 w-auto flex items-center justify-center font-bold text-xl text-[#042718] tracking-tight">
                      {logo.mark}
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
