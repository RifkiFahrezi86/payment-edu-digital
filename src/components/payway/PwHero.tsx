/* eslint-disable @next/next/no-img-element -- aset lokal statis, dimensi asli dari markup dipertahankan */
import { PwReveal } from "@/components/payway/pw-reveal";

/**
 * Section 00 — Hero.
 * Sumber markup: docs/research/jiro-payway/sections/00-hero.html (kelas 1:1)
 * Referensi visual: docs/design-references/jiro-payway/sec-00-hero.png
 *
 * Catatan konversi:
 * - Video background: autoPlay loop muted playsInline (konvensi #5).
 * - Strip blur bawah mempertahankan inline mask-image (bukan residu framer).
 * - style="opacity:1; transform:none" (residu framer) -> <PwReveal> dengan
 *   stagger 0/100/200/300/400ms top-to-bottom; h1/p dibungkus wrapper reveal
 *   yang mereplikasi alignment kolom karena PwReveal tidak merender h1/p.
 * - Nav statis (bukan sticky), transparan di atas video.
 */
export function PwHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white ">
      {/* Background video full-bleed + strip backdrop-blur bawah */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/videos/payway/header-01-bg-payway.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute bottom-0 left-0 w-full h-[260px] bg-white/[0.01] backdrop-blur-[6px] hidden lg:block pointer-events-none"
          style={{ maskImage: "linear-gradient(transparent, black 50%)" }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full pt-5">
        {/* Nav — statis, transparan di atas video */}
        <nav className="flex items-center justify-between h-[64px] sm:h-[72px] w-full px-6 lg:px-10">
          <div className="flex items-center gap-10">
            <PwReveal delay={0}>
              <img
                alt="Payway Logo"
                referrerPolicy="no-referrer"
                width={140}
                height={32}
                decoding="async"
                className="h-[24px] sm:h-[32px] w-auto"
                src="/images/payway/payway-logo-with-name.svg"
                style={{ color: "transparent" }}
              />
            </PwReveal>
            <div className="hidden lg:flex items-center gap-8">
              <a
                href="#"
                className="font-body text-base tracking-[-0.3px] transition-all text-[#042718] font-bold opacity-100"
              >
                Home
              </a>
              <a
                href="#"
                className="font-body text-base tracking-[-0.3px] transition-all text-[#042718] font-normal opacity-80 hover:opacity-100 hover:font-bold"
              >
                Features
              </a>
              <a
                href="#"
                className="font-body text-base tracking-[-0.3px] transition-all text-[#042718] font-normal opacity-80 hover:opacity-100 hover:font-bold"
              >
                Pricing
              </a>
              <a
                href="#"
                className="font-body text-base tracking-[-0.3px] transition-all text-[#042718] font-normal opacity-80 hover:opacity-100 hover:font-bold"
              >
                About
              </a>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="#"
              className="font-body text-base font-medium text-[#042718] opacity-80 hover:opacity-100 transition-opacity"
            >
              Login
            </a>
            <button
              className="relative flex items-center overflow-hidden transition-all duration-300 group cursor-pointer w-full lg:w-auto bg-white/10 backdrop-blur-sm text-[#042718] p-1.5 rounded-full border border-[#042718]/5 h-[48px] w-auto pl-4 "
              tabIndex={0}
            >
              <div className="flex items-center gap-4 w-auto" style={{ flexDirection: "row" }}>
                <span
                  className="font-body font-medium whitespace-nowrap transition-colors duration-300 text-base"
                  style={{ opacity: 0.8 }}
                >
                  Sign up
                </span>
                <div className="flex items-center justify-center rounded-full transition-all duration-500 ease-in-out shrink-0 w-8 h-8 bg-[#042718]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-up-right"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
          <button className="lg:hidden p-2 text-[#042718]">
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
              className="lucide lucide-menu sm:w-7 sm:h-7"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </nav>

        <div className="main-container">
          <div className="content-container mt-[40px] md:mt-[60px] lg:mt-[96px] flex flex-col lg:flex-row items-center lg:items-start gap-12 sm:gap-16 lg:gap-[64px] pb-0">
            {/* Kolom kiri — badge partner, headline, subcopy, CTA, rating */}
            <PwReveal
              delay={0}
              className="w-full lg:w-[612px] flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <PwReveal
                delay={0}
                className="flex items-center gap-2 px-3 sm:px-[14px] py-[6px] rounded-full bg-white/10 backdrop-blur-sm border border-[#042718]/5 mb-6"
              >
                <span className="font-body text-sm sm:text-base text-[#042718]" style={{ opacity: 0.8 }}>
                  In Partnership With:
                </span>
                <div className="flex items-center gap-2 sm:gap-4">
                  <img
                    alt="Sofi"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    width={48}
                    height={14}
                    decoding="async"
                    className="w-auto h-[14px] opacity-60"
                    src="/images/payway/sofi.svg"
                    style={{ color: "transparent" }}
                  />
                  <img
                    alt="Visa"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    width={48}
                    height={14}
                    decoding="async"
                    className="w-auto h-[14px] opacity-60"
                    src="/images/payway/visa.svg"
                    style={{ color: "transparent" }}
                  />
                </div>
              </PwReveal>
              <PwReveal delay={100} className="w-full flex flex-col items-center lg:items-start">
                <h1 className="w-full lg:w-[578px] text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-heading font-semibold text-[#042718] leading-[1.15] tracking-[-1px] sm:tracking-[-3px] mb-4 sm:mb-6">
                  Accept Payments Globally. Instantly. Securely.
                </h1>
              </PwReveal>
              <PwReveal delay={200} className="w-full flex flex-col items-center lg:items-start">
                <p className="w-full lg:w-[600px] text-base sm:text-lg lg:text-[22px] font-body text-[#042718] leading-[1.45] tracking-[-0.2px] sm:tracking-[-0.44px] mb-8 sm:mb-12 lg:mb-16 max-w-[500px] lg:max-w-none">
                  From local transactions to international payments, manage everything in one powerful platform.
                </p>
              </PwReveal>
              <PwReveal
                delay={300}
                className="flex flex-col sm:flex-row items-center gap-4 mb-12 sm:mb-24 lg:mb-[140px] w-full sm:w-auto"
              >
                <button
                  className="relative flex items-center overflow-hidden transition-all duration-300 group cursor-pointer w-full lg:w-auto bg-[#042718] text-white p-2 rounded-full h-[64px] pl-6 w-full sm:w-auto"
                  tabIndex={0}
                >
                  <div
                    className="flex items-center gap-4 w-full lg:w-auto justify-between lg:justify-start"
                    style={{ flexDirection: "row" }}
                  >
                    <span
                      className="font-body font-medium whitespace-nowrap transition-colors duration-300 text-lg"
                      style={{ color: "white", opacity: 1 }}
                    >
                      Get 14-days free trial
                    </span>
                    <div className="flex items-center justify-center rounded-full transition-all duration-500 ease-in-out shrink-0 w-11 h-11 bg-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#042718"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-up-right"
                      >
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </div>
                  </div>
                </button>
                <button
                  className="relative flex items-center overflow-hidden transition-all duration-300 group cursor-pointer w-full lg:w-auto bg-white/10 backdrop-blur-xl text-[#042718] p-2 rounded-full h-[64px] border border-[#042718]/10 pl-6 w-full sm:w-auto"
                  tabIndex={0}
                >
                  <div
                    className="flex items-center gap-4 w-full lg:w-auto justify-between lg:justify-start"
                    style={{ flexDirection: "row" }}
                  >
                    <span className="font-body font-medium whitespace-nowrap transition-colors duration-300 text-lg text-[#042718] lg:text-white">
                      Download the app
                    </span>
                    <div className="flex items-center justify-center rounded-full transition-all duration-500 ease-in-out shrink-0 w-11 h-11 bg-[#042718]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-up-right"
                      >
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </div>
                  </div>
                </button>
              </PwReveal>
              <PwReveal delay={400} className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
                    <img
                      alt="App Store"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      width={32}
                      height={32}
                      decoding="async"
                      className="w-full h-full object-contain"
                      src="/images/payway/app-store.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="flex items-center gap-1.5">
                      <span className="font-body text-base lg:text-lg font-bold text-[#042718] lg:text-[#fff]">
                        4.8
                      </span>
                      <div className="text-[#042718] lg:text-[#fff]">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                        </svg>
                      </div>
                      <span className="font-body text-sm sm:text-base text-[#042718]/80 lg:text-white/80">
                        on App Store
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
                    <img
                      alt="Google Play"
                      referrerPolicy="no-referrer"
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
                    <div className="flex items-center gap-1.5">
                      <span className="font-body text-base lg:text-lg font-bold text-[#042718] lg:text-[#fff]">
                        4.8
                      </span>
                      <div className="text-[#042718] lg:text-[#fff]">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                        </svg>
                      </div>
                      <span className="font-body text-sm sm:text-base text-[#042718]/80 lg:text-white/80">
                        Google Play
                      </span>
                    </div>
                  </div>
                </div>
              </PwReveal>
            </PwReveal>

            {/* Kolom kanan — mockup iPhone */}
            <PwReveal
              delay={200}
              className="w-full lg:w-[572px] h-auto lg:h-[702px] relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[572px] aspect-[572/702]">
                <img
                  alt="Mobile App Mockup"
                  referrerPolicy="no-referrer"
                  decoding="async"
                  className="object-contain"
                  src="/images/payway/header-mobile-mockup-payway.png"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    inset: "0px",
                    color: "transparent",
                  }}
                />
              </div>
            </PwReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
