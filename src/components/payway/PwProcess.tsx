import { PwReveal } from "@/components/payway/pw-reveal";

/**
 * Section 03 — Process ("Get started in just 3 easy simple steps").
 * Sumber markup: docs/research/jiro-payway/sections/03-process.html
 * Snapshot statis state awal scroll-driven stepper original:
 * step 1 aktif/terbuka, step 2-3 collapsed (h-0 opacity-0).
 * Struktur sticky dipertahankan persis: outer lg:h-[200vh] + inner lg:sticky lg:top-[120px].
 */
export function PwProcess() {
  return (
    <section className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center py-12 md:py-16 lg:py-[80px]">
        <div className="w-full max-w-[1248px] mx-auto flex flex-col items-center gap-12 lg:gap-[64px]">
          <div className="flex flex-col items-center text-center gap-4">
            <PwReveal className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#198F381A] bg-[#198F380F] text-[#198F38] mb-2">
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
              <span className="text-base tracking-[-0.3px]">Alur Transaksi</span>
            </PwReveal>
            <PwReveal>
              <h2 className="max-w-[604px] text-[32px] sm:text-[42px] lg:text-[52px] font-semibold text-[#042718] leading-[1.1] sm:leading-[58px] tracking-[-1px] sm:tracking-[-1.8px]">
                Mulai Transaksi dalam 3 Langkah Mudah
              </h2>
            </PwReveal>
            <PwReveal>
              <p className="max-w-[550px] text-base sm:text-lg text-[#042718] leading-[28px] opacity-80">
                  Ikuti langkah sederhana berikut untuk mulai menggunakan Saku Sultan.
              </p>
            </PwReveal>
          </div>
          <div className="w-full relative lg:h-[200vh]">
            <div className="w-full lg:sticky lg:top-[120px] flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 lg:gap-6">
              <div className="w-full lg:w-[612px] mb-8 lg:mb-0">
                <PwReveal className="relative w-full aspect-[6/5] sm:aspect-square lg:h-[692px] rounded-[32px] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Process Step Illustration"
                    decoding="async"
                    className="object-cover absolute inset-0 h-full w-full text-transparent"
                    src="/images/payway/process-left-img-payway.png"
                  />
                </PwReveal>
              </div>
              <div className="w-full lg:w-[612px] flex flex-col items-start gap-4">
                {/* Step 1 — aktif (terbuka) */}
                <PwReveal className="w-full">
                  <div className="flex flex-col items-start self-stretch transition-all duration-500 ease-out rounded-[24px] overflow-hidden border cursor-pointer pt-5 md:pt-6 px-5 md:px-6 pb-0 gap-5 border-[#042718]/5 shadow-[0_4px_20px_0_rgba(4,39,24,0.02),0_4px_10px_0_rgba(4,39,24,0.04)] bg-[#f6fdff]">
                    <div className="flex items-start gap-3 md:gap-4 w-full">
                      <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border transition-all duration-500 shrink-0 bg-[#042718] border-[#042718] text-white">
                        <span className="font-semibold text-base md:text-lg">
                          1
                        </span>
                      </div>
                      <div className="flex flex-col items-start gap-[6px] md:gap-[10px] w-full max-w-[460px]">
                        <h3 className="font-semibold tracking-[-0.6px] md:tracking-[-0.8px] leading-[26px] md:leading-[30px] transition-colors duration-500 text-[20px] md:text-[24px] text-[#042718]">
                          Download Aplikasi
                        </h3>
                        <p className="text-[15px] md:text-[18px] leading-[22px] md:leading-[28px] transition-all duration-500 text-[#042718] opacity-80">
                          Unduh Saku Sultan gratis dari Google Play Store.
                        </p>
                      </div>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-t-[20px] md:rounded-t-[32px] max-w-[548px] h-[240px] mt-6">
                      <div className="relative w-full h-full">
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover"
                        >
                          <source
                            src="/videos/payway/header-01-bg-payway.mp4"
                            type="video/mp4"
                          />
                        </video>
                        <div className="absolute inset-x-3 top-3 bottom-0 flex items-start justify-center">
                          <div className="relative w-full h-full">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              alt="Create your account"
                              referrerPolicy="no-referrer"
                              loading="lazy"
                              decoding="async"
                              className="object-cover object-top absolute inset-0 h-full w-full text-transparent"
                              src="/images/payway/step-01-payway.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </PwReveal>
                {/* Step 2 — collapsed */}
                <PwReveal delay={120} className="w-full">
                  <div className="flex flex-col items-start self-stretch transition-all duration-500 ease-out rounded-[24px] overflow-hidden border cursor-pointer p-5 md:p-8 pb-0 gap-0 border-transparent bg-[#f6fdff]/0">
                    <div className="flex items-start gap-3 md:gap-4 w-full">
                      <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border transition-all duration-500 shrink-0 bg-[#0427180D] border-[#0427181A] text-[#042718]">
                        <span className="font-semibold text-base md:text-lg">
                          2
                        </span>
                      </div>
                      <div className="flex flex-col items-start gap-[6px] md:gap-[10px] w-full max-w-[460px]">
                        <h3 className="font-semibold tracking-[-0.6px] md:tracking-[-0.8px] leading-[26px] md:leading-[30px] transition-colors duration-500 text-[18px] md:text-[24px] text-[#042718]/60">
                          Daftar Akun
                        </h3>
                        <p className="text-[15px] md:text-[18px] leading-[22px] md:leading-[28px] transition-all duration-500 text-[#042718]/0 h-0 overflow-hidden">
                          Buat akun baru dalam hitungan menit dan verifikasi data Anda.
                        </p>
                      </div>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-t-[20px] md:rounded-t-[32px] max-w-[548px] h-0 opacity-0 mt-0">
                      <div className="relative w-full h-full">
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover"
                        >
                          <source
                            src="/videos/payway/header-01-bg-payway.mp4"
                            type="video/mp4"
                          />
                        </video>
                        <div className="absolute inset-x-3 top-3 bottom-0 flex items-start justify-center">
                          <div className="relative w-full h-full">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              alt="Set up payments"
                              referrerPolicy="no-referrer"
                              loading="lazy"
                              decoding="async"
                              className="object-cover object-top absolute inset-0 h-full w-full text-transparent"
                              src="/images/payway/step-01-payway.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </PwReveal>
                {/* Step 3 — collapsed */}
                <PwReveal delay={240} className="w-full">
                  <div className="flex flex-col items-start self-stretch transition-all duration-500 ease-out rounded-[24px] overflow-hidden border cursor-pointer p-5 md:p-8 pb-0 gap-0 border-transparent bg-[#f6fdff]/0">
                    <div className="flex items-start gap-3 md:gap-4 w-full">
                      <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border transition-all duration-500 shrink-0 bg-[#0427180D] border-[#0427181A] text-[#042718]">
                        <span className="font-semibold text-base md:text-lg">
                          3
                        </span>
                      </div>
                      <div className="flex flex-col items-start gap-[6px] md:gap-[10px] w-full max-w-[460px]">
                        <h3 className="font-semibold tracking-[-0.6px] md:tracking-[-0.8px] leading-[26px] md:leading-[30px] transition-colors duration-500 text-[18px] md:text-[24px] text-[#042718]/60">
                          Mulai Transaksi
                        </h3>
                        <p className="text-[15px] md:text-[18px] leading-[22px] md:leading-[28px] transition-all duration-500 text-[#042718]/0 h-0 overflow-hidden">
                          Pilih layanan, bayar tagihan atau beli pulsa, transaksi langsung jadi.
                        </p>
                      </div>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-t-[20px] md:rounded-t-[32px] max-w-[548px] h-0 opacity-0 mt-0">
                      <div className="relative w-full h-full">
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover"
                        >
                          <source
                            src="/videos/payway/header-01-bg-payway.mp4"
                            type="video/mp4"
                          />
                        </video>
                        <div className="absolute inset-x-3 top-3 bottom-0 flex items-start justify-center">
                          <div className="relative w-full h-full">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              alt="Start accepting payments"
                              referrerPolicy="no-referrer"
                              loading="lazy"
                              decoding="async"
                              className="object-cover object-top absolute inset-0 h-full w-full text-transparent"
                              src="/images/payway/step-01-payway.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </PwReveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
