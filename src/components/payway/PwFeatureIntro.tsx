import { PwReveal } from "@/components/payway/pw-reveal";

/* ---- ikon lucide inline (verbatim dari markup 02-feature-intro) ---- */

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
    className="lucide lucide-sparkles w-4 h-4 text-[#198F38] fill-[#198F38]"
  >
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    <path d="M20 3v4" />
    <path d="M22 5h-4" />
    <path d="M4 17v2" />
    <path d="M5 18H3" />
  </svg>
);

const arrowUpRightIcon = (
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
    className="lucide lucide-arrow-up-right w-3 h-3 text-[#042718]"
  >
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
);

/* ---- section utama ---- */

export function PwFeatureIntro() {
  return (
    <section className="w-full bg-white flex justify-center py-24">
      <div className="w-full max-w-[1440px] px-6 lg:px-[96px] flex flex-col items-center gap-[64px]">
        {/* Header — badge, heading, deskripsi */}
        <div className="flex flex-col items-center text-center gap-6">
          <PwReveal className="flex items-center gap-2 bg-[#198F380F] pl-[14px] pr-[16px] py-[6px] rounded-full border border-[#198F381A]">
            {sparklesIcon}
            <span className="font-sans font-normal text-base text-[#198F38] tracking-[-0.3px]">
              Feature
            </span>
          </PwReveal>
          <PwReveal className="w-full max-w-[604px]" delay={100}>
            <h2 className="w-full max-w-[604px] font-heading font-semibold text-[32px] md:text-[42px] lg:text-[52px] leading-[38px] md:leading-[48px] lg:leading-[58px] tracking-[-1.2px] md:tracking-[-1.8px] text-[#042718]">
              Fast, secure payments built to scale globally.
            </h2>
          </PwReveal>
          <PwReveal className="w-full max-w-[626px]" delay={200}>
            <p className="w-full max-w-[626px] font-sans font-normal text-base md:text-lg leading-[24px] md:leading-[28px] text-[#042718cc]">
              Accept, manage, and optimize payments from one platform—reducing
              failures and maximizing revenue effortlessly.
            </p>
          </PwReveal>
        </div>

        <div className="flex flex-col gap-6 w-full">
          {/* Baris 1 — kartu "Get the app" + kartu AI forecasting */}
          <div className="flex flex-col lg:flex-row gap-6">
            <PwReveal className="w-full lg:w-[506px] h-[350px] md:h-[408px] rounded-[24px] bg-[linear-gradient(350deg,#E4EBF8_5.72%,#A2BFE6_92.62%)] flex flex-col items-start justify-end p-8 md:p-12 text-left relative overflow-hidden group">
              <h1 className="absolute top-8 md:top-12 left-1/2 -translate-x-1/2 font-heading font-bold text-[80px] md:text-[136px] leading-none tracking-[-2px] md:tracking-[-4.5px] text-white/50 select-none pointer-events-none whitespace-nowrap">
                Payway
              </h1>
              <div className="relative z-10 w-full flex flex-col items-start">
                <h5 className="font-heading font-semibold text-[28px] md:text-[34px] leading-[32px] md:leading-[38px] tracking-[-0.8px] md:tracking-[-1px] text-[#042718] mb-4 md:mb-6">
                  Get the app
                </h5>
                <button className="group relative flex items-center bg-[#042718] border border-[#0427180f] rounded-full overflow-hidden transition-all duration-300 h-[44px] min-w-[150px]">
                  <div className="absolute right-[6px] w-8 h-8 bg-white rounded-full flex items-center justify-center z-10">
                    {arrowUpRightIcon}
                  </div>
                  <span className="block pl-[18px] pr-[46px] font-sans font-medium text-base text-white whitespace-nowrap">
                    Download Now
                  </span>
                </button>
              </div>
            </PwReveal>
            <PwReveal
              className="flex-1 h-[450px] md:h-[408px] rounded-[24px] bg-[linear-gradient(350deg,#EBE3D2_5.72%,#E8D7B3_92.62%)] flex flex-col lg:flex-row pl-8 md:pl-[48px] pr-[24px] md:pr-[32px] pt-[24px] md:pt-[32px] pb-0 overflow-hidden relative"
              delay={100}
            >
              <div className="flex flex-col gap-3 md:gap-4 z-10 lg:w-[368px] mt-2 md:mt-0">
                <h6 className="font-heading font-semibold text-xl md:text-2xl leading-[26px] md:leading-[30px] tracking-[-0.6px] md:tracking-[-0.8px] text-[#042718]">
                  AI-powered forecasting
                </h6>
                <p className="font-sans font-normal text-base md:text-lg leading-6 md:leading-7 text-[#042718cc]">
                  Predict future expenses and make smarter financial decisions
                  with AI-powered insights and real-time data.
                </p>
              </div>
              <PwReveal
                className="absolute right-0 lg:right-[-32px] bottom-[0px] md:bottom-[-60px] w-[250px] md:w-[400px] h-[300px] md:h-[384px]"
                delay={200}
              >
                <div className="w-full h-full relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="AI App View"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    className="object-contain object-right-bottom absolute inset-0 h-full w-full text-transparent"
                    src="/images/payway/payway-feature-card-2.png"
                  />
                </div>
              </PwReveal>
            </PwReveal>
          </div>

          {/* Baris 2 — kartu transaction tracking + kartu payment options */}
          <div className="flex flex-col lg:flex-row gap-6">
            <PwReveal className="flex-1 min-h-[400px] md:min-h-[480px] rounded-[24px] bg-[#D1E6D3] p-8 md:p-12 flex flex-col gap-[32px] md:gap-[42px] overflow-hidden relative">
              <div className="flex flex-col gap-[8px] md:gap-[10px] max-w-[622px] z-10">
                <h6 className="font-heading font-semibold text-xl md:text-2xl leading-[26px] md:leading-[30px] tracking-[-0.6px] md:tracking-[-0.8px] text-[#042718]">
                  Smart Transaction Tracking
                </h6>
                <p className="font-sans font-normal text-base md:text-lg leading-6 md:leading-7 text-[#042718cc] opacity-80">
                  Track every payment in real-time for better control,
                  real-time insights, and complete financial clarity.
                </p>
              </div>
              <PwReveal
                className="relative flex-1 w-full flex justify-center h-[250px] md:h-auto"
                delay={200}
              >
                <div className="w-full h-full relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Smart Transaction Tracking"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    className="object-contain mb-[-40px] md:mb-[-60px] absolute inset-0 h-full w-full text-transparent"
                    src="/images/payway/payway-feature-card-3.png"
                  />
                </div>
              </PwReveal>
            </PwReveal>
            <PwReveal
              className="w-full lg:w-[506px] min-h-[400px] md:min-h-[480px] rounded-[24px] bg-[linear-gradient(350deg,#F9F8FF_6.55%,#D2C9F3_93.45%)] px-8 md:px-[48px] pt-8 md:pt-[48px] pb-[32px] md:pb-[40px] flex flex-col items-center text-center gap-[20px] md:gap-[27px] overflow-hidden"
              delay={100}
            >
              <div className="flex flex-col gap-[8px] md:gap-[10px] w-full text-left lg:text-center max-w-[410px]">
                <h6 className="font-heading font-semibold text-xl md:text-2xl leading-[26px] md:leading-[30px] tracking-[-0.6px] md:tracking-[-0.8px] text-[#042718]">
                  Flexible Payment Options
                </h6>
                <p className="font-sans font-normal text-base md:text-lg leading-6 md:leading-7 text-[#042718cc]">
                  Offer multiple payment methods tailored to your customers
                  worldwide.
                </p>
              </div>
              <PwReveal
                className="w-full max-w-[300px] md:max-w-[354px] h-[250px] md:h-[310px] mt-auto relative"
                delay={200}
              >
                <div className="w-full h-full relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Payment Options"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    className="object-contain mb-[-30px] md:mb-[-40px] absolute inset-0 h-full w-full text-transparent"
                    src="/images/payway/payway-feature-card-4.png"
                  />
                </div>
              </PwReveal>
            </PwReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
