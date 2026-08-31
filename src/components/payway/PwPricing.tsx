import { PwReveal } from "@/components/payway/pw-reveal";

/**
 * Section 07 — Harga Saku Sultan.
 * Model: GRATIS — 1 kartu sentral, tanpa toggle Monthly/Yearly.
 */

const PRICING_FEATURES = [
  "Gratis download & registrasi",
  "Tanpa biaya langganan bulanan",
  "Cashback & promo setiap transaksi",
  "Layanan pelanggan 24/7",
  "Keamanan berlapis & garansi",
];

export function PwPricing() {
  return (
    <section
      id="promo"
      className="relative w-full bg-white overflow-hidden py-[80px] scroll-mt-24"
    >
      <div className="main-container relative z-10 flex flex-col items-center px-4 md:px-10 lg:px-0">
        <div className="content-container flex flex-col items-center w-full max-w-[1248px] mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 text-center mb-[64px]">
            <PwReveal className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#198F381A] bg-[#F6FDFF]/80 backdrop-blur-sm text-[#198F38]">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles">
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
                <path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>
              </svg>
              <span className="font-body text-base tracking-[-0.3px]">Harga</span>
            </PwReveal>
            <PwReveal delay={100}>
              <h2 className="max-w-[700px] font-heading text-[28px] sm:text-[42px] lg:text-[52px] font-semibold text-[#042718] leading-[1.1] sm:leading-[58px] tracking-[-0.8px] sm:tracking-[-1.8px]">
                Gratis! Tanpa Biaya Langganan
              </h2>
            </PwReveal>
            <PwReveal delay={200}>
              <p className="max-w-[600px] font-body text-base sm:text-lg text-[#042718]/80 leading-relaxed">
                Download dan gunakan Saku Sultan tanpa biaya langganan. Hanya bayar saat transaksi. #PastiUNTUNG
              </p>
            </PwReveal>
          </div>

          {/* 1 kartu sentral */}
          <div className="w-full max-w-[620px]">
            <div className="relative cursor-pointer transition-all duration-500 overflow-hidden flex flex-col p-8 w-full bg-[#042718] rounded-[48px]">
              <div className="absolute inset-0 z-0">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                  <source src="/videos/payway/header-01-bg-payway.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[#042718]/60 z-10" />
              </div>
              <div className="relative z-20 flex flex-col gap-6">
                <div className="flex flex-col items-start">
                  <h3 className="font-heading text-[32px] md:text-[36px] font-semibold leading-tight tracking-[-1px] mb-1.5 text-white">
                    Saku Sultan
                  </h3>
                  <p className="font-body text-base font-normal leading-6 tracking-[-0.3px] mb-5 text-white/80">
                    Download dan mulai transaksi tanpa biaya langganan.
                  </p>
                  <div className="flex items-end gap-2">
                    <span className="font-heading text-[52px] font-semibold leading-[58px] tracking-[-1.8px] text-white">
                      GRATIS
                    </span>
                    <span className="font-body text-base font-normal mb-2 text-white/80">
                      / Tanpa biaya langganan
                    </span>
                  </div>
                </div>

                {/* fitur */}
                <div className="flex flex-col gap-3">
                  <span className="font-body text-sm font-medium text-white/80 uppercase tracking-wider">
                    Termasuk
                  </span>
                  <ul className="flex flex-col gap-3">
                    {PRICING_FEATURES.map((feature) => (
                      <li key={feature} className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full border border-white/10 bg-white/8 shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-white">
                            <path d="M20 6 9 17l-5-5"/>
                          </svg>
                        </div>
                        <span className="font-body text-base font-normal text-white/90 leading-6 tracking-[-0.3px]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.saku_sultan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center w-full h-[64px] md:h-[72px] p-2 rounded-full border transition-all duration-500 overflow-hidden bg-white border-white/10 text-[#042718] pl-6 md:pl-8 pr-2 mt-4"
                >
                  <div className="flex items-center justify-between w-full h-full flex-row">
                    <span className="font-body text-lg md:text-[20px] font-medium pointer-events-none whitespace-nowrap">
                      Download Sekarang
                    </span>
                    <div className="flex items-center justify-center w-12 h-12 md:w-[56px] md:h-[56px] rounded-full bg-[#042718] text-white shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right md:w-6 md:h-6">
                        <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
