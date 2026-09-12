import { PwButton } from "@/components/payway/pw-button";
import { PwSectionHeader } from "@/components/payway/pw-section-header";

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
      className="pw-section-y relative w-full bg-white overflow-hidden scroll-mt-24"
    >
      <div className="main-container relative z-10 flex flex-col items-center px-4 md:px-10 lg:px-0">
        <div className="content-container flex flex-col items-center w-full max-w-[1248px] mx-auto">
          {/* Header */}
          <PwSectionHeader
            eyebrow="Harga"
            title="Gratis! Tanpa Biaya Langganan"
            className="mb-[64px]"
          >
            Download dan gunakan Saku Sultan tanpa biaya langganan. Hanya bayar saat transaksi. #PastiUNTUNG
          </PwSectionHeader>

          {/* 1 kartu sentral */}
          <div className="w-full max-w-[620px]">
            <div className="relative cursor-pointer transition-all duration-500 overflow-hidden flex flex-col p-8 w-full bg-[#042718] rounded-[48px]">
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
                  <source src="/videos/payway/header.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[#042718]/72 z-10" />
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
                <PwButton
                  href="https://play.google.com/store/apps/details?id=com.saku_sultan"
                  variant="secondary"
                  size="lg"
                  className="mt-4 w-full justify-between"
                >
                  Download Sekarang
                </PwButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
