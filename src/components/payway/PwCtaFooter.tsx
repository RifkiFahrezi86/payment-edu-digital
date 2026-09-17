import { PwReveal } from "@/components/payway/pw-reveal";
import { PwButton } from "@/components/payway/pw-button";

/** CTA and contact footer with readable foreground text over the landscape. */
export function PwCtaFooter() {
  return (
    <section id="unduh-aplikasi" aria-labelledby="saku-footer-title" className="saku-footer relative flex w-full flex-col overflow-hidden bg-[#0B0F0E] scroll-mt-24">
      {/* Keep the landscape clear, with a darker backdrop behind white text. */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          aria-hidden="true"
          className="pw-bg-video"
        >
          <source src="/videos/payway/footer.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(180deg, rgba(11, 15, 14, 0.72) 0%, rgba(11, 15, 14, 0.72) 34%, rgba(11, 15, 14, 0.86) 64%, rgb(11, 15, 14) 88%)",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-[#0B0F0E]" />
      </div>

      {/* Download CTA */}
      <div className="relative z-10 w-full pt-16 sm:pt-20 lg:pt-28">
        <PwReveal className="content-container mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
          <h2 id="saku-footer-title" className="saku-footer-heading mb-6 w-full max-w-[1060px] text-[36px] font-bold leading-[1.12] tracking-[-1.2px] text-white sm:text-[54px] md:text-[72px] lg:text-[100px] xl:text-[112px] sm:tracking-[-2px] lg:tracking-[-4px]">
            Mulai Transaksi dengan Saku Sultan
          </h2>
          <p className="saku-footer-description mb-8 w-full max-w-[580px] text-base font-medium leading-[1.65] text-white/95 sm:text-lg lg:text-xl">
            Download sekarang dan nikmati kemudahan transaksi digital. Praktis, cepat, dan aman.
            <span className="mx-auto mt-4 block w-fit rounded-full border border-[#B7F34A]/25 bg-[#0B0F0E]/90 px-4 py-1.5 font-bold tracking-[0.04em] text-[#B7F34A]">#CUANPERDETIK</span>
          </p>
          <PwButton
            href="https://play.google.com/store/apps/details?id=com.saku_sultan"
             size="lg"
             variant="secondary"
             className="saku-primary-action w-full max-w-[320px] justify-between sm:w-auto sm:max-w-none sm:gap-6"
          >
            Download Gratis
          </PwButton>
        </PwReveal>
      </div>

      {/* Email support + baris follow / sosial */}
      <div className="relative z-10 w-full pt-[60px] md:pt-[100px] lg:pt-[130px]">
        <PwReveal className="content-container mx-auto px-6 lg:px-12 flex flex-col items-center">
          <a
            href="mailto:cs@sakusultan.id"
            className="font-semibold text-white text-[24px] sm:text-[40px] md:text-[52px] lg:text-[68px] leading-[1.2] lg:leading-[80px] tracking-[-0.6px] sm:tracking-[-1px] lg:tracking-[-2.2px] hover:scale-105 transition-transform duration-300"
          >
            cs@sakusultan.id
          </a>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center w-full gap-6 md:gap-4 border-t border-white/20 mt-12 md:mt-20 lg:mt-24 pt-8 md:pt-10">
            <p className="text-sm md:text-lg text-white/90 text-center md:text-left order-2 md:order-1">
              Punya pertanyaan? Kami siap membantu.
            </p>
            <div className="flex justify-center order-1 md:order-2">
              <span className="text-base md:text-lg text-white/90">Ikuti Kami</span>
            </div>
            <div className="flex justify-center md:justify-end gap-3 order-3">
              {/* Facebook */}
              <a href="https://web.facebook.com/sakusultanind" target="_blank" rel="noopener noreferrer" aria-label="Facebook Saku Sultan" className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/20 transition-colors duration-300" tabIndex={0}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#fff" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              {/* Twitter/X */}
              <a href="https://twitter.com/sakusultanind" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X Saku Sultan" className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/20 transition-colors duration-300" tabIndex={0}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#fff" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/sakusultanind/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Saku Sultan" className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/20 transition-colors duration-300" tabIndex={0}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://www.youtube.com/channel/UCxnNwYx24S0y9Subcv04OIA" target="_blank" rel="noopener noreferrer" aria-label="YouTube Saku Sultan" className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/20 transition-colors duration-300" tabIndex={0}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#fff" stroke="currentColor" strokeWidth="0">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#042718"/>
                </svg>
              </a>
            </div>
          </div>
        </PwReveal>
      </div>

      {/* Wordmark raksasa + legal row */}
      <div className="relative z-10 w-full mt-10 lg:mt-12">
        <div className="flex justify-center items-center w-full px-5 h-[150px] sm:h-[250px] lg:h-[350px]">
          <span
            className="font-bold text-[15.5vw] tracking-[-0.045em] select-none pointer-events-none whitespace-nowrap"
            style={{
              background: "linear-gradient(rgb(250, 250, 250) 4.34%, rgba(27, 109, 74, 0) 88.53%) text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Saku Sultan
          </span>
        </div>
        <div className="bg-transparent mt-10 lg:mt-12 pb-24 md:pb-8">
          <div className="content-container mx-auto px-6 lg:px-12 md:pr-24 lg:pr-28 flex flex-col xl:flex-row items-center justify-between gap-6 xl:gap-4 border-t border-white/20 pt-8">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 order-2 md:order-1">
              <a href="/syarat-ketentuan" className="text-[14px] sm:text-[16px] text-white/88 hover:text-white transition-colors duration-300 whitespace-nowrap">
                Syarat &amp; Ketentuan
              </a>
              <a href="/kebijakan-privasi" className="text-[14px] sm:text-[16px] text-white/88 hover:text-white transition-colors duration-300 whitespace-nowrap">
                Kebijakan Privasi
              </a>
            </div>
            <p className="text-[14px] sm:text-[16px] text-white/88 text-center order-3 md:order-2">
              &copy; 2026 Saku Sultan. All rights reserved.
            </p>
            <span className="text-[14px] sm:text-[16px] font-semibold text-[#B7F34A] order-1 md:order-3 whitespace-nowrap">
              #CUANPERDETIK
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
