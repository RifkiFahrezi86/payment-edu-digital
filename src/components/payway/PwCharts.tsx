import type { CSSProperties } from "react";
import { PwReveal } from "@/components/payway/pw-reveal";

/* ---- ikon lucide inline (verbatim dari markup) ---- */

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

/* ---- data integrasi (verbatim dari markup; src lokal per asset-manifest) ---- */

type PwIntegration = {
  alt: string;
  label: string;
  src: string;
};

const PW_INTEGRATIONS_TOP: PwIntegration[] = [
  { alt: "Stripe", label: "Stripe", src: "/images/payway/logo-stripe.svg" },
  { alt: "PayPal", label: "PayPal", src: "/images/payway/logo-paypal.svg" },
  { alt: "HubSpot", label: "HubSpot", src: "/images/payway/logo-hubspot.svg" },
  { alt: "Dropbox", label: "Dropbox", src: "/images/payway/logo-dropbox.svg" },
  { alt: "Google Drive", label: "Google Drive", src: "/images/payway/logo-google-drive.svg" },
  { alt: "Trello", label: "Trello", src: "/images/payway/logo-trello.svg" },
];

const PW_INTEGRATIONS_MIDDLE: PwIntegration[] = [
  { alt: "Slack", label: "Slack", src: "/images/payway/logo-slack-icon.svg" },
  { alt: "Notion", label: "Notion", src: "/images/payway/logo-notion-icon.svg" },
  { alt: "Salesforce", label: "Salesforce", src: "/images/payway/logo-salesforce.svg" },
  { alt: "Github", label: "Github", src: "/images/payway/logo-github-icon.svg" },
  { alt: "Google Analytics", label: "Google Analytics", src: "/images/payway/logo-google-analytics.svg" },
];

const PW_INTEGRATIONS_BOTTOM: PwIntegration[] = [
  { alt: "Shopify", label: "Shopify", src: "/images/payway/logo-shopify.svg" },
  { alt: "Zendesk", label: "Zendesk", src: "/images/payway/logo-zendesk-icon.svg" },
  { alt: "Discord", label: "Discord", src: "/images/payway/logo-discord-icon.svg" },
  { alt: "Vercel", label: "Vercel", src: "/images/payway/logo-vercel-icon.svg" },
  { alt: "Asana", label: "Asana", src: "/images/payway/logo-asana-icon.svg" },
];

/* ---- kartu logo integrasi (struktur identik antar tile) ---- */

function IntegrationTile({ tile, delay }: { tile: PwIntegration; delay: number }) {
  return (
    <PwReveal className="flex justify-center" delay={delay}>
      <div className="flex flex-col items-center gap-2 sm:gap-3 ">
        <div className="w-[72px] h-[72px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] flex items-center justify-center rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] bg-white border border-[#E5E7EB] shadow-[0_8px_30px_rgb(0,0,0,0.04)] px-3 sm:px-4 lg:px-5 relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={tile.alt}
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
            className="p-3 sm:p-4 lg:p-5 object-contain absolute inset-0 h-full w-full text-transparent"
            src={tile.src}
          />
        </div>
        <span className="font-sans font-medium text-sm sm:text-base leading-6 text-[#1F2937] text-center">
          {tile.label}
        </span>
      </div>
    </PwReveal>
  );
}

/* ---- style titik ujung kurva konektor (verbatim dari markup, residu transform dihapus) ---- */

const connectorDotStyle: CSSProperties = {
  filter: "drop-shadow(rgba(37, 99, 235, 0.4) 0px 0px 4px)",
  transformOrigin: "50% 50%",
  transformBox: "fill-box",
};

/* ---- section utama ---- */

export function PwCharts() {
  return (
    <section className="w-full bg-white flex flex-col items-center py-24 overflow-hidden ">
      <div className="main-container flex flex-col items-center">
        <div className="content-container flex flex-col items-center gap-16 relative">
          <div className="flex flex-col items-center text-center gap-6 z-10 pt-12 md:pt-16 lg:pt-[80px]">
            <PwReveal className="flex items-center gap-2 bg-[#198F380F] pl-[14px] pr-[16px] py-[6px] rounded-full border border-[#198F381A]">
              {sparklesIcon}
              <span className="font-sans font-normal text-base text-[#198F38] tracking-[-0.3px]">
                Integrations
              </span>
            </PwReveal>
            <PwReveal delay={100}>
              <h2 className="max-w-[800px] font-sans font-semibold text-[32px] sm:text-[42px] lg:text-[52px] leading-[1.1] lg:leading-[58px] tracking-[-1.2px] lg:tracking-[-1.8px] text-[#042718]">
                Connect Payway with your essential tools and platforms
              </h2>
            </PwReveal>
            <PwReveal delay={200}>
              <p className="max-w-[700px] font-sans font-normal text-lg leading-[28px] text-[#042718cc]">
                Integrate with the tools you already use to automate workflows, streamline
                payments, and scale your business faster.
              </p>
            </PwReveal>
            <PwReveal delay={300}>
              <button className="group relative flex items-center bg-[#042718] border border-[#0427180f] rounded-full overflow-hidden transition-all duration-500 p-1.5 h-[48px] min-w-[160px] w-fit pl-5 pr-1.5 ">
                <div className="flex items-center justify-between w-full h-full gap-3 flex-row">
                  <span className="font-sans font-medium text-base text-white whitespace-nowrap">
                    Explore All Integrations
                  </span>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shrink-0">
                    {arrowUpRightIcon}
                  </div>
                </div>
              </button>
            </PwReveal>
          </div>
          <div
            id="integration-grid-container"
            className="w-full max-w-[1000px] flex flex-col items-center gap-[32px] sm:gap-[40px] lg:gap-[48px] mt-8 lg:mt-12 relative"
          >
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 sm:gap-y-12 lg:gap-y-0 z-10">
              {PW_INTEGRATIONS_TOP.map((tile, index) => (
                <IntegrationTile key={tile.label} tile={tile} delay={(index % 3) * 100} />
              ))}
            </div>
            <div className="w-full flex flex-wrap justify-center gap-x-6 gap-y-8 sm:gap-10 lg:gap-[52px] z-10 lg:-mt-2">
              {PW_INTEGRATIONS_MIDDLE.map((tile, index) => (
                <IntegrationTile key={tile.label} tile={tile} delay={(index % 3) * 100} />
              ))}
            </div>
            <div className="relative z-20 flex justify-center w-full my-4 lg:my-0">
              <PwReveal className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] lg:w-[140px] lg:h-[140px] flex items-center justify-center relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Payway Hub"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  className="object-contain absolute inset-0 h-full w-full text-transparent"
                  src="/images/payway/only-logo-intefration.svg"
                />
              </PwReveal>
            </div>
            <div className="w-full flex flex-wrap justify-center gap-x-6 gap-y-8 sm:gap-10 lg:gap-[52px] z-10 lg:-mt-4">
              {PW_INTEGRATIONS_BOTTOM.map((tile, index) => (
                <IntegrationTile key={tile.label} tile={tile} delay={(index % 3) * 100} />
              ))}
            </div>
            <svg
              viewBox="0 0 1000 700"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full pointer-events-none overflow-visible hidden lg:block"
              style={{ zIndex: 30 }}
            >
              <g>
                <path d="M 83.3 136 Q 83.3 160 196 184" fill="none" stroke="#2563EB" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.6" />
                <path d="M 83.3 136 Q 83.3 160 196 184" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeDasharray="8 12" strokeDashoffset="-21.133333333333315" opacity="1" />
                <path d="M 83.3 136 Q 83.3 160 196 184" fill="none" stroke="#60A5FA" strokeWidth="3.5" strokeDasharray="20 180" strokeDashoffset="175.65515775932" opacity="0.5354958986572456" />
                <circle cx="196" cy="184" r="4" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" opacity="1" style={connectorDotStyle} />
              </g>
              <g>
                <path d="M 250 136 Q 250 160 348 184" fill="none" stroke="#2563EB" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.6" />
                <path d="M 250 136 Q 250 160 348 184" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeDasharray="8 12" strokeDashoffset="-14.466666666666672" opacity="1" />
                <path d="M 250 136 Q 250 160 348 184" fill="none" stroke="#60A5FA" strokeWidth="3.5" strokeDasharray="20 180" strokeDashoffset="193.0993907037191" opacity="0.163730376312742" />
                <circle cx="348" cy="184" r="4" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" opacity="1" style={connectorDotStyle} />
              </g>
              <g>
                <path d="M 416.6 136 Q 416.6 160 500 184" fill="none" stroke="#2563EB" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.6" />
                <path d="M 416.6 136 Q 416.6 160 500 184" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeDasharray="8 12" strokeDashoffset="-7.800000000000029" opacity="1" />
                <path d="M 416.6 136 Q 416.6 160 500 184" fill="none" stroke="#60A5FA" strokeWidth="3.5" strokeDasharray="20 180" strokeDashoffset="199.85622154781595" opacity="0.0031872776162344962" />
                <circle cx="500" cy="184" r="4" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" opacity="1" style={connectorDotStyle} />
              </g>
              <g>
                <path d="M 583.3 136 Q 583.3 160 500 184" fill="none" stroke="#2563EB" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.6" />
                <path d="M 583.3 136 Q 583.3 160 500 184" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeDasharray="8 12" strokeDashoffset="-1.1333333333332973" opacity="1" />
                <path d="M 583.3 136 Q 583.3 160 500 184" fill="none" stroke="#60A5FA" strokeWidth="3.5" strokeDasharray="20 180" strokeDashoffset="-196.57220429508016" opacity="0.08119855201221071" />
                <circle cx="500" cy="184" r="4" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" opacity="1" style={connectorDotStyle} />
              </g>
              <g>
                <path d="M 750 136 Q 750 160 652 184" fill="none" stroke="#2563EB" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.6" />
                <path d="M 750 136 Q 750 160 652 184" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeDasharray="8 12" strokeDashoffset="-94.46666666666665" opacity="1" />
                <path d="M 750 136 Q 750 160 652 184" fill="none" stroke="#60A5FA" strokeWidth="3.5" strokeDasharray="20 180" strokeDashoffset="-182.74835945339873" opacity="0.39630361102172174" />
                <circle cx="652" cy="184" r="4" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" opacity="1" style={connectorDotStyle} />
              </g>
              <g>
                <path d="M 916.6 136 Q 916.6 160 804 184" fill="none" stroke="#2563EB" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.6" />
                <path d="M 916.6 136 Q 916.6 160 804 184" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeDasharray="8 12" strokeDashoffset="-87.80000000000001" opacity="1" />
                <path d="M 916.6 136 Q 916.6 160 804 184" fill="none" stroke="#60A5FA" strokeWidth="3.5" strokeDasharray="20 180" strokeDashoffset="-157.85480859922245" opacity="0.78516791088623" />
                <circle cx="804" cy="184" r="4" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" opacity="1" style={connectorDotStyle} />
              </g>
              <g>
                <path d="M 196 320 Q 196 350 500 368" fill="none" stroke="#2563EB" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.6" />
                <path d="M 196 320 Q 196 350 500 368" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeDasharray="8 12" strokeDashoffset="-81.13333333333337" opacity="1" />
                <path d="M 196 320 Q 196 350 500 368" fill="none" stroke="#60A5FA" strokeWidth="3.5" strokeDasharray="20 180" strokeDashoffset="-121.80743321077898" opacity="0.9872653349593747" />
                <circle cx="500" cy="368" r="4" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" opacity="1" style={connectorDotStyle} />
              </g>
              <g>
                <path d="M 348 320 Q 348 350 500 368" fill="none" stroke="#2563EB" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.6" />
                <path d="M 348 320 Q 348 350 500 368" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeDasharray="8 12" strokeDashoffset="-74.46666666666664" opacity="1" />
                <path d="M 348 320 Q 348 350 500 368" fill="none" stroke="#60A5FA" strokeWidth="3.5" strokeDasharray="20 180" strokeDashoffset="-75.76686980901286" opacity="1" />
                <circle cx="500" cy="368" r="4" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" opacity="1" style={connectorDotStyle} />
              </g>
              <g>
                <path d="M 500 320 Q 500 350 500 368" fill="none" stroke="#2563EB" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.6" />
                <path d="M 500 320 Q 500 350 500 368" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeDasharray="8 12" strokeDashoffset="-67.8" opacity="1" />
                <path d="M 500 320 Q 500 350 500 368" fill="none" stroke="#60A5FA" strokeWidth="3.5" strokeDasharray="20 180" strokeDashoffset="-23.244220402557403" opacity="1" />
                <circle cx="500" cy="368" r="4" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" opacity="1" style={connectorDotStyle} />
              </g>
              <g>
                <path d="M 652 320 Q 652 350 500 368" fill="none" stroke="#2563EB" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.6" />
                <path d="M 652 320 Q 652 350 500 368" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeDasharray="8 12" strokeDashoffset="-61.133333333333354" opacity="1" />
                <path d="M 652 320 Q 652 350 500 368" fill="none" stroke="#60A5FA" strokeWidth="3.5" strokeDasharray="20 180" strokeDashoffset="31.9578017690219" opacity="1" />
                <circle cx="500" cy="368" r="4" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" opacity="1" style={connectorDotStyle} />
              </g>
              <g>
                <path d="M 804 320 Q 804 350 500 368" fill="none" stroke="#2563EB" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.6" />
                <path d="M 804 320 Q 804 350 500 368" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeDasharray="8 12" strokeDashoffset="-54.46666666666671" opacity="1" />
                <path d="M 804 320 Q 804 350 500 368" fill="none" stroke="#60A5FA" strokeWidth="3.5" strokeDasharray="20 180" strokeDashoffset="83.63168850773945" opacity="1" />
                <circle cx="500" cy="368" r="4" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" opacity="1" style={connectorDotStyle} />
              </g>
              <g>
                <path d="M 500 508 Q 196 535 196 556" fill="none" stroke="#2563EB" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.6" />
                <path d="M 500 508 Q 196 535 196 556" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeDasharray="8 12" strokeDashoffset="-47.799999999999976" opacity="1" />
                <path d="M 500 508 Q 196 535 196 556" fill="none" stroke="#60A5FA" strokeWidth="3.5" strokeDasharray="20 180" strokeDashoffset="128.14163429429755" opacity="0.9718151493871119" />
                <circle cx="196" cy="556" r="4" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" opacity="1" style={connectorDotStyle} />
              </g>
              <g>
                <path d="M 500 508 Q 348 535 348 556" fill="none" stroke="#2563EB" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.6" />
                <path d="M 500 508 Q 348 535 348 556" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeDasharray="8 12" strokeDashoffset="-41.13333333333333" opacity="1" />
                <path d="M 500 508 Q 348 535 348 556" fill="none" stroke="#60A5FA" strokeWidth="3.5" strokeDasharray="20 180" strokeDashoffset="162.63850178802386" opacity="0.7310319238749798" />
                <circle cx="348" cy="556" r="4" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" opacity="1" style={connectorDotStyle} />
              </g>
              <g>
                <path d="M 500 508 Q 500 535 500 556" fill="none" stroke="#2563EB" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.6" />
                <path d="M 500 508 Q 500 535 500 556" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeDasharray="8 12" strokeDashoffset="-34.46666666666669" opacity="1" />
                <path d="M 500 508 Q 500 535 500 556" fill="none" stroke="#60A5FA" strokeWidth="3.5" strokeDasharray="20 180" strokeDashoffset="185.70487630786374" opacity="0.33333297396893613" />
                <circle cx="500" cy="556" r="4" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" opacity="1" style={connectorDotStyle} />
              </g>
              <g>
                <path d="M 500 508 Q 652 535 652 556" fill="none" stroke="#2563EB" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.6" />
                <path d="M 500 508 Q 652 535 652 556" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeDasharray="8 12" strokeDashoffset="-27.799999999999958" opacity="1" />
                <path d="M 500 508 Q 652 535 652 556" fill="none" stroke="#60A5FA" strokeWidth="3.5" strokeDasharray="20 180" strokeDashoffset="197.7750172256492" opacity="0.05218154264730401" />
                <circle cx="652" cy="556" r="4" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" opacity="1" style={connectorDotStyle} />
              </g>
              <g>
                <path d="M 500 508 Q 804 535 804 556" fill="none" stroke="#2563EB" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.6" />
                <path d="M 500 508 Q 804 535 804 556" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeDasharray="8 12" strokeDashoffset="-21.133333333333315" opacity="1" />
                <path d="M 500 508 Q 804 535 804 556" fill="none" stroke="#60A5FA" strokeWidth="3.5" strokeDasharray="20 180" strokeDashoffset="-199.46628891630098" opacity="0.012193499511340633" />
                <circle cx="804" cy="556" r="4" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" opacity="1" style={connectorDotStyle} />
              </g>
            </svg>
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
