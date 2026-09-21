import { PwReveal } from "@/components/payway/pw-reveal";
import { PwButton } from "@/components/payway/pw-button";
import { PwSectionHeader } from "@/components/payway/pw-section-header";

/* ---- data partner pembayaran ---- */

type PwPartner = { label: string; logo: string };

const PW_PARTNERS_TOP: PwPartner[] = [
  { label: "QRIS", logo: "/images/payway/pay/qris.svg" },
  { label: "OVO", logo: "/images/payway/pay/ovo.svg" },
  { label: "GoPay", logo: "/images/payway/pay/gopay.svg" },
  { label: "Dana", logo: "/images/payway/pay/dana.svg" },
  { label: "ShopeePay", logo: "/images/payway/pay/shopeepay.svg" },
  { label: "LinkAja", logo: "/images/payway/pay/linkaja.svg" },
];

const PW_PARTNERS_MIDDLE: PwPartner[] = [
  { label: "BCA", logo: "/images/payway/pay/bca.svg" },
  { label: "Mandiri", logo: "/images/payway/pay/mandiri.svg" },
  { label: "BRI", logo: "/images/payway/pay/bri.svg" },
  { label: "BNI", logo: "/images/payway/pay/bni.svg" },
  { label: "Permata", logo: "/images/payway/pay/permata.svg" },
  { label: "CIMB Niaga", logo: "/images/payway/pay/cimb-niaga.svg" },
];

const PW_PARTNERS_BOTTOM: PwPartner[] = [
  { label: "Telkomsel", logo: "/images/payway/pay/telkomsel.svg" },
  { label: "XL", logo: "/images/payway/pay/xl.svg" },
  { label: "Indosat", logo: "/images/payway/pay/indosat.svg" },
  { label: "Tri", logo: "/images/payway/pay/tri.svg" },
  { label: "Smartfren", logo: "/images/payway/pay/smartfren.svg" },
];

/* ---- tile partner: logo + label ---- */

function PartnerTile({ tile, delay }: { tile: PwPartner; delay: number }) {
  return (
    <PwReveal className="flex justify-center" delay={delay}>
      <div className="pw-lift flex flex-col items-center gap-2 sm:gap-3">
        <div className="pw-logo-tile w-[72px] h-[72px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] flex items-center justify-center rounded-[20px] lg:rounded-[24px] bg-white border border-[#E5E7EB] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-3 sm:p-3.5 lg:p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={tile.logo}
            alt={`Logo ${tile.label}`}
            loading="lazy"
            className="w-full h-full object-contain"
          />
        </div>
        <span className="font-sans font-medium text-sm sm:text-base leading-6 text-[#1F2937] text-center">
          {tile.label}
        </span>
      </div>
    </PwReveal>
  );
}

/* ---- section utama ---- */

export function PwCharts() {
  return (
    <section
      id="metode-pembayaran"
      className="pw-section-y w-full bg-white flex flex-col items-center overflow-hidden scroll-mt-24"
    >
      <div className="main-container flex flex-col items-center">
        <div className="content-container flex flex-col items-center gap-16 relative">
          <div className="flex flex-col items-center gap-6 z-10">
            <PwSectionHeader
              eyebrow="Metode Pembayaran"
              title={<>Didukung Payment Gateway &amp; Bank Terbesar di Indonesia</>}
            >
              Terhubung dengan berbagai metode pembayaran, e-wallet, dan bank untuk kemudahan bertransaksi.
            </PwSectionHeader>
            <PwReveal delay={300}>
              <PwButton href="#integration-grid-container" external={false}>
                Lihat Semua Metode
              </PwButton>
            </PwReveal>
          </div>
          <div
            id="integration-grid-container"
            className="w-full max-w-[1000px] flex flex-col items-center gap-[32px] sm:gap-[40px] lg:gap-[48px] mt-8 lg:mt-12 relative"
          >
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 sm:gap-y-12 lg:gap-y-0 z-10">
              {PW_PARTNERS_TOP.map((tile, index) => (
                <PartnerTile key={tile.label} tile={tile} delay={(index % 3) * 100} />
              ))}
            </div>
            <div className="w-full flex flex-wrap justify-center gap-x-6 gap-y-8 sm:gap-10 lg:gap-[52px] z-10 lg:-mt-2">
              {PW_PARTNERS_MIDDLE.map((tile, index) => (
                <PartnerTile key={tile.label} tile={tile} delay={(index % 3) * 100} />
              ))}
            </div>
            <div className="relative z-20 flex justify-center w-full my-4 lg:my-0">
              <PwReveal className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] lg:w-[140px] lg:h-[140px] flex items-center justify-center">
                <div className="w-full h-full rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-[0_16px_40px_rgba(4,39,24,0.25)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/saku-sultan-app-icon.webp"
                    alt="Ikon aplikasi Saku Sultan"
                    className="w-full h-full object-cover"
                  />
                </div>
              </PwReveal>
            </div>
            <div className="w-full flex flex-wrap justify-center gap-x-6 gap-y-8 sm:gap-10 lg:gap-[52px] z-10 lg:-mt-4">
              {PW_PARTNERS_BOTTOM.map((tile, index) => (
                <PartnerTile key={tile.label} tile={tile} delay={(index % 3) * 100} />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
