import { PwReveal } from "@/components/payway/pw-reveal";

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
    className="lucide lucide-arrow-up-right w-4 h-4 text-[#042718]"
  >
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
);

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
      <div className="flex flex-col items-center gap-2 sm:gap-3">
        <div className="w-[72px] h-[72px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] flex items-center justify-center rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] bg-white border border-[#E5E7EB] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-3 sm:p-3.5 lg:p-4">
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
      className="w-full bg-white flex flex-col items-center py-24 overflow-hidden scroll-mt-24"
    >
      <div className="main-container flex flex-col items-center">
        <div className="content-container flex flex-col items-center gap-16 relative">
          <div className="flex flex-col items-center text-center gap-6 z-10 pt-12 md:pt-16 lg:pt-[80px]">
            <PwReveal className="flex items-center gap-2 bg-[#198F380F] pl-[14px] pr-[16px] py-[6px] rounded-full border border-[#198F381A]">
              {sparklesIcon}
              <span className="font-sans font-normal text-base text-[#198F38] tracking-[-0.3px]">
                Metode Pembayaran
              </span>
            </PwReveal>
            <PwReveal delay={100}>
              <h2 className="max-w-[800px] font-sans font-semibold text-[32px] sm:text-[42px] lg:text-[52px] leading-[1.1] lg:leading-[58px] tracking-[-1.2px] lg:tracking-[-1.8px] text-[#042718]">
                Didukung Payment Gateway &amp; Bank Terbesar di Indonesia
              </h2>
            </PwReveal>
            <PwReveal delay={200}>
              <p className="max-w-[700px] font-sans font-normal text-lg leading-[28px] text-[#042718cc]">
                Terhubung dengan berbagai metode pembayaran, e-wallet, dan bank untuk kemudahan bertransaksi.
              </p>
            </PwReveal>
            <PwReveal delay={300}>
              <a
                href="#promo"
                className="group relative flex items-center bg-[#042718] border border-[#0427180f] rounded-full overflow-hidden transition-all duration-500 p-1.5 h-[48px] min-w-[160px] w-fit pl-5 pr-1.5 "
              >
                <div className="flex items-center justify-between w-full h-full gap-3 flex-row">
                  <span className="font-sans font-medium text-base text-white whitespace-nowrap">
                    Lihat Semua Metode
                  </span>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shrink-0">
                    {arrowUpRightIcon}
                  </div>
                </div>
              </a>
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
                <div className="w-full h-full flex items-center justify-center bg-[#042718] rounded-[24px] sm:rounded-[32px]">
                  <span className="font-heading font-bold text-sm sm:text-base lg:text-lg text-white text-center leading-tight px-2">
                    Saku<br />Sultan
                  </span>
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
      <style>{`
        .main-container { width: 100%; max-width: 1440px; padding: 0 96px; }
        .content-container { width: 100%; max-width: 1248px; }
        @media (max-width: 1024px) { .main-container { padding: 0 40px; } }
        @media (max-width: 640px) { .main-container { padding: 0 20px; } }
      `}</style>
    </section>
  );
}
