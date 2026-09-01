import { PwReveal } from "@/components/payway/pw-reveal";

/**
 * Section 09 — CTA + Footer.
 * Sumber markup: docs/research/jiro-payway/sections/09-cta-footer.html (kelas 1:1)
 * Referensi visual: docs/design-references/jiro-payway/sec-09-cta-footer.png
 * + bagian bawah full-desktop-1440.png (wordmark raksasa & legal row).
 *
 * Catatan konversi:
 * - Video background: autoPlay loop muted playsInline + source lokal (konvensi #5).
 * - style="opacity: 0; transform: translateY(30px)" (residu framer) pada dua blok
 *   content-container -> <PwReveal> dengan className identik.
 * - Inline gradient (fade putih atas, radial glow, overlay ink, clip-text wordmark)
 *   BUKAN residu framer -> dipertahankan sebagai style JSX.
 * - `bg-lightgray` dipertahankan persis dari markup (kelas template asli).
 */
export function PwCtaFooter() {
  return (
    <section className="relative w-full overflow-hidden flex flex-col ">
      {/* Fade putih dari section sebelumnya */}
      <div
        className="absolute top-0 left-0 w-full h-[300px] z-[5] pointer-events-none"
        style={{ background: "linear-gradient(rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)" }}
      />
      {/* Radial glow langit */}
      <div
        className="absolute top-0 left-0 w-full h-[600px] z-[2] pointer-events-none opacity-40 shrink-0"
        style={{
          background:
            "radial-gradient(100% 100% at 50% 0%, rgb(214, 239, 255) 0%, rgba(214, 239, 255, 0) 100%)",
        }}
      />
      {/* Background video full-bleed + overlay gradasi ke ink */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/payway/footer.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 z-[1]"
          style={{ background: "linear-gradient(rgba(4, 39, 24, 0) 33.33%, rgb(4, 39, 24) 100%)" }}
        />
        <div className="absolute inset-0 -z-10 bg-lightgray" />
      </div>

      {/* Blok CTA — headline, subcopy, tombol trial */}
      <div className="relative z-10 w-full pt-[80px] md:pt-[100px] lg:pt-[120px]">
        <PwReveal className="content-container flex flex-col items-center text-center">
          <h2 className="w-full max-w-[1103px] font-semibold text-[#042718] text-[32px] sm:text-[64px] md:text-[90px] lg:text-[132px] leading-[1.1] lg:leading-[136px] tracking-[-1px] sm:tracking-[-3px] md:tracking-[-5px] lg:tracking-[-7px] mb-8 sm:mb-10">
            Mulai Transaksi dengan Saku Sultan
          </h2>
          <p className="w-full max-w-[580px] text-[14px] sm:text-[18px] lg:text-[24px] text-[#042718] opacity-80 leading-[1.5] tracking-[-0.2px] sm:tracking-[-0.48px] mb-10 sm:mb-12">
            Download sekarang dan nikmati kemudahan transaksi digital. Praktis, cepat, dan aman. #PastiUNTUNG
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.saku_sultan"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center overflow-hidden transition-all duration-300 group cursor-pointer bg-[#042718] text-white p-2 rounded-full h-[64px] w-full lg:w-auto pl-6"
          >
            <div
              className="flex items-center gap-4 w-full lg:w-auto justify-between lg:justify-start px-4"
              style={{ flexDirection: "row" }}
            >
              <span className="font-medium text-lg text-white whitespace-nowrap">Download Gratis</span>
              <div className="flex items-center justify-center w-11 h-11 rounded-full bg-white shrink-0">
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
          </a>
        </PwReveal>
      </div>

      {/* Email support + baris follow / sosial */}
      <div className="relative z-10 w-full pt-[60px] md:pt-[100px] lg:pt-[130px]">
        <PwReveal className="content-container flex flex-col items-center">
          <a
            href="mailto:cs@sakusultan.id"
            className="font-semibold text-white text-[24px] sm:text-[40px] md:text-[52px] lg:text-[68px] leading-[1.2] lg:leading-[80px] tracking-[-0.6px] sm:tracking-[-1px] lg:tracking-[-2.2px] hover:scale-105 transition-transform duration-300"
          >
            cs@sakusultan.id
          </a>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center w-full gap-6 md:gap-4 border-t border-white/10 mt-12 md:mt-20 lg:mt-24 pt-8 md:pt-10">
            <p className="text-sm md:text-lg text-white opacity-80 text-center md:text-left order-2 md:order-1">
              Punya pertanyaan? Kami siap membantu.
            </p>
            <div className="flex justify-center order-1 md:order-2">
              <span className="text-base md:text-lg text-white opacity-80 mb-2 md:mb-0">Ikuti</span>
            </div>
            <div className="flex justify-center md:justify-end gap-3 order-3">
              {/* Facebook */}
              <a href="https://web.facebook.com/sakusultanind" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/20 transition-colors duration-300" tabIndex={0}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#fff" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              {/* Twitter/X */}
              <a href="https://twitter.com/sakusultanind" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/20 transition-colors duration-300" tabIndex={0}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#fff" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/sakusultanind/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/20 transition-colors duration-300" tabIndex={0}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://www.youtube.com/channel/UCxnNwYx24S0y9Subcv04OIA" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/20 transition-colors duration-300" tabIndex={0}>
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
            className="font-bold text-[80px] sm:text-[180px] md:text-[240px] lg:text-[345px] tracking-[-4px] sm:tracking-[-8px] lg:tracking-[-15px] select-none pointer-events-none whitespace-nowrap"
            style={{
              background: "linear-gradient(rgb(250, 250, 250) 4.34%, rgba(27, 109, 74, 0) 88.53%) text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Saku Sultan
          </span>
        </div>
        <div className="bg-transparent mt-10 lg:mt-12 pb-8">
          <div className="content-container flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
            <div className="flex items-center gap-6 order-2 md:order-1">
              <a href="/syarat-ketentuan" className="text-[14px] sm:text-[18px] text-white opacity-70 hover:opacity-100 transition-opacity duration-300">
                Syarat &amp; Ketentuan
              </a>
              <a href="/kebijakan-privasi" className="text-[14px] sm:text-[18px] text-white opacity-70 hover:opacity-100 transition-opacity duration-300">
                Kebijakan Privasi
              </a>
            </div>
            <p className="text-[14px] sm:text-[18px] text-white opacity-70 order-3 md:order-2">
              © 2026 Saku Sultan. All rights reserved.
            </p>
            <span className="text-[14px] sm:text-[18px] text-white opacity-70 order-1 md:order-3">
              #PastiUNTUNG
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
