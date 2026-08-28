import type { ReactElement } from "react";
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

const zapIcon = (
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
    className="lucide lucide-zap w-[22px] h-[22px] text-[#198F38] fill-[#198F3810]"
  >
    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
  </svg>
);

const globeIcon = (
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
    className="lucide lucide-globe w-[22px] h-[22px] text-[#198F38] fill-[#198F3810]"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

const chartColumnIcon = (
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
    className="lucide lucide-chart-column w-[22px] h-[22px] text-[#198F38] fill-[#198F3810]"
  >
    <path d="M3 3v16a2 2 0 0 0 2 2h16" />
    <path d="M18 17V9" />
    <path d="M13 17V5" />
    <path d="M8 17v-3" />
  </svg>
);

const shieldCheckIcon = (
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
    className="lucide lucide-shield-check w-[22px] h-[22px] text-[#198F38] fill-[#198F3810]"
  >
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const usersIcon = (
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
    className="lucide lucide-users w-[22px] h-[22px] text-[#198F38] fill-[#198F3810]"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const creditCardIcon = (
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
    className="lucide lucide-credit-card w-[22px] h-[22px] text-[#198F38] fill-[#198F3810]"
  >
    <rect width="20" height="14" x="2" y="5" rx="2" />
    <line x1="2" x2="22" y1="10" y2="10" />
  </svg>
);

const smartphoneIcon = (
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
    className="lucide lucide-smartphone w-[22px] h-[22px] text-[#198F38] fill-[#198F3810]"
  >
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </svg>
);

const walletIcon = (
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
    className="lucide lucide-wallet w-[22px] h-[22px] text-[#198F38] fill-[#198F3810]"
  >
    <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
    <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
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

/* ---- data konten (verbatim dari markup) ---- */

type PwFeatureBullet = {
  icon: ReactElement;
  lead: string;
  rest: string;
};

type PwFeature = {
  /** offset sticky-stack per kartu (persis markup) */
  stickyTop: string;
  label: string;
  title: string;
  description: string;
  bullets: PwFeatureBullet[];
  imageSrc: string;
  imageAlt: string;
};

const PW_FEATURES: PwFeature[] = [
  {
    stickyTop: "top-[60px] md:top-[80px]",
    label: "Multicurrency accounts",
    title: "Send your money worldwide",
    description:
      "Streamline your entire payment process with powerful tools designed to help you collect payments faster.",
    bullets: [
      {
        icon: zapIcon,
        lead: "Fast global payments",
        rest: "— 70% arrive in 20 seconds and 95% in under 24 hours.*",
      },
      {
        icon: globeIcon,
        lead: "Global coverage",
        rest: "— Send and receive funds in over 50+ currencies across 180 countries.",
      },
      {
        icon: chartColumnIcon,
        lead: "Volume discounts",
        rest: "— On monthly transfers over 20,000 GBP or equivalent. Learn more about volume discounts.",
      },
    ],
    imageSrc: "/images/payway/feature-payway-01.svg",
    imageAlt: "Send your money worldwide",
  },
  {
    stickyTop: "top-[80px] md:top-[100px]",
    label: "Money transfers",
    title: "Send money instantly, everywhere",
    description:
      "Experience borderless financial freedom with our instant transfer network that works 24/7.",
    bullets: [
      {
        icon: zapIcon,
        lead: "Instant settlement",
        rest: "— Peer-to-peer transfers complete in milliseconds within the Payway ecosystem.",
      },
      {
        icon: shieldCheckIcon,
        lead: "Secure routing",
        rest: "— Multi-layered encryption ensures your funds travel safely through our private tunnels.",
      },
      {
        icon: usersIcon,
        lead: "Simple batch transfers",
        rest: "— Pay up to 1,000 contacts in a single click with CSV or API integration.",
      },
    ],
    imageSrc: "/images/payway/unsplash-photo-1580519542036-c47de6196ba5.jpg",
    imageAlt: "Send money instantly, everywhere",
  },
  {
    stickyTop: "top-[100px] md:top-[120px]",
    label: "Payments",
    title: "Pay and get paid on your terms",
    description:
      "Accept or make payments globally and locally with Payway. Choose from QR codes, payment links, or bank transfers.",
    bullets: [
      {
        icon: creditCardIcon,
        lead: "Flexible checkouts",
        rest: "— Increase conversion with dynamic payment methods tailored to local customer habits.",
      },
      {
        icon: smartphoneIcon,
        lead: "QR Payments",
        rest: "— Generate instant QR codes for contactless physical or digital store transactions.",
      },
      {
        icon: chartColumnIcon,
        lead: "Real-time analytics",
        rest: "— Monitor success rates and transaction status through our unified merchant dashboard.",
      },
    ],
    imageSrc: "/images/payway/feature-payway-02.svg",
    imageAlt: "Pay and get paid on your terms",
  },
  {
    stickyTop: "top-[120px] md:top-[140px]",
    label: "Cards",
    title: "Your global card for everyday life",
    description:
      "Unlock seamless spending with AstroPay's virtual and physical cards. Shop online or pay in-store with international.",
    bullets: [
      {
        icon: walletIcon,
        lead: "Virtual cards",
        rest: "— Create unlimited virtual cards for secure online shopping and subscription management.",
      },
      {
        icon: shieldCheckIcon,
        lead: "Freeze anytime",
        rest: "— Lost your card? Instantly freeze and unfreeze it from the mobile app with one tap.",
      },
      {
        icon: zapIcon,
        lead: "Fast global payments",
        rest: "— Use your card worldwide with competitive interbank exchange rates and no hidden fees.",
      },
    ],
    imageSrc: "/images/payway/feature-4th-card.png",
    imageAlt: "Your global card for everyday life",
  },
];

/* ---- sub-komponen kartu fitur (struktur identik antar blok) ---- */

function FeatureBlock({ feature }: { feature: PwFeature }) {
  return (
    <PwReveal
      className={`sticky w-full max-w-[1248px] bg-[#F6FDFF] border border-[#04271803] rounded-[30px] shadow-[0_8px_20px_0_rgba(4,39,24,0.04)] overflow-hidden ${feature.stickyTop}`}
    >
      <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-14 px-6 md:pl-16 md:pr-12 pt-8 md:pt-12 pb-0">
        <div className="w-full lg:w-[572px] pt-4 md:pt-[32px] flex flex-col gap-6 md:gap-8 shrink-0">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 bg-[#198F380F] pl-[14px] pr-[16px] py-[6px] rounded-full border border-[#198F381A] w-fit mb-4">
              {sparklesIcon}
              <span className="font-sans font-normal text-base text-[#198F38] tracking-[-0.3px]">
                {feature.label}
              </span>
            </div>
            <h4 className="max-w-[432px] font-semibold text-[32px] md:text-[42px] leading-[38px] md:leading-[48px] tracking-[-1.2px] md:tracking-[-2px] text-[#042718] mb-4 md:mb-5">
              {feature.title}
            </h4>
            <p className="w-full lg:w-[572px] font-sans font-normal text-base md:text-lg leading-[24px] md:leading-[28px] text-[#042718] opacity-80">
              {feature.description}
            </p>
          </div>
          <div className="flex flex-col gap-4 md:gap-5 w-full lg:w-[572px]">
            {feature.bullets.map((bullet, index) => (
              <div key={bullet.lead} className="flex flex-col gap-4 md:gap-5">
                <div className="flex gap-4 items-start w-full">
                  <div className="w-10 h-10 rounded-full border border-[#0427181a] flex items-center justify-center shrink-0">
                    {bullet.icon}
                  </div>
                  <div className="flex flex-col">
                    <p className="font-sans text-lg leading-[28px] text-[#042718cc] max-w-[508px]">
                      <span className="font-medium text-[#042718]">{bullet.lead}</span> {bullet.rest}
                    </p>
                  </div>
                </div>
                {index < feature.bullets.length - 1 && (
                  <div className="h-[1px] w-full bg-[#04271810]" />
                )}
              </div>
            ))}
          </div>
          <button className="group relative flex items-center bg-[#042718] border border-[#0427180f] rounded-full overflow-hidden transition-all duration-300 h-[44px] w-fit mt-2 md:mt-0 mb-8 md:mb-16">
            <div className="absolute right-[6px] w-8 h-8 bg-white rounded-full flex items-center justify-center z-10">
              {arrowUpRightIcon}
            </div>
            <span className="block pl-[18px] pr-[46px] font-sans font-medium text-base leading-6 tracking-[-0.3px] text-white whitespace-nowrap">
              Learn more
            </span>
          </button>
        </div>
        <div className="w-full lg:w-[508px] h-[300px] md:h-[400px] lg:h-[702px] relative flex justify-center items-end">
          <PwReveal className="w-full h-full lg:h-[95%] relative" delay={200}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={feature.imageAlt}
              loading="lazy"
              decoding="async"
              className="object-contain object-bottom absolute inset-0 h-full w-full text-transparent"
              src={feature.imageSrc}
            />
          </PwReveal>
        </div>
      </div>
    </PwReveal>
  );
}

/* ---- section utama ---- */

export function PwFeaturesTriple() {
  return (
    <section className="w-full bg-white flex flex-col items-center py-24 gap-16">
      <div className="w-full max-w-[1440px] px-6 lg:px-[96px] flex flex-col items-center gap-[64px]">
        <div className="flex flex-col items-center text-center gap-6">
          <PwReveal className="flex items-center gap-2 bg-[#198F380F] pl-[14px] pr-[16px] py-[6px] rounded-full border border-[#198F381A]">
            {sparklesIcon}
            <span className="font-sans font-normal text-base text-[#198F38] tracking-[-0.3px]">
              Features
            </span>
          </PwReveal>
          <PwReveal className="w-full max-w-[700px]" delay={100}>
            <h2 className="w-full max-w-[700px] font-semibold text-[32px] md:text-[42px] lg:text-[52px] leading-[38px] md:leading-[48px] lg:leading-[58px] tracking-[-1.2px] md:tracking-[-1.8px] text-[#042718]">
              Accept, manage, and scale your payments effortlessly
            </h2>
          </PwReveal>
          <PwReveal className="w-full max-w-[800px]" delay={200}>
            <p className="w-full max-w-[800px] font-sans font-normal text-base md:text-lg leading-[24px] md:leading-[28px] text-[#042718cc]">
              Streamline your entire payment process with powerful tools
              designed to help you collect payments faster, reduce failures,
              and grow your business without complexity.
            </p>
          </PwReveal>
        </div>
        <div className="flex flex-col gap-12 w-full items-center">
          {PW_FEATURES.map((feature) => (
            <FeatureBlock key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
