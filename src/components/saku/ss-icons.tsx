import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps): IconProps {
  return {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    ...props,
  };
}

export const IcArrowUpRight = (p: IconProps) => (
  <svg {...base(p)}><path d="M7 17 17 7M8 7h9v9" /></svg>
);
export const IcArrowRight = (p: IconProps) => (
  <svg {...base(p)}><path d="M4 12h16m-6-6 6 6-6 6" /></svg>
);
export const IcArrowLeft = (p: IconProps) => (
  <svg {...base(p)}><path d="M20 12H4m6-6-6 6 6 6" /></svg>
);
export const IcChevronDown = (p: IconProps) => (
  <svg {...base(p)}><path d="m6 9 6 6 6-6" /></svg>
);
export const IcChevronRight = (p: IconProps) => (
  <svg {...base(p)}><path d="m9 6 6 6-6 6" /></svg>
);
export const IcSearch = (p: IconProps) => (
  <svg {...base(p)}><circle cx="11" cy="11" r="7" /><path d="m21 21-4-4" /></svg>
);
export const IcPlay = (p: IconProps) => (
  <svg {...base({ ...p, fill: "currentColor", stroke: "none" })}><path d="M8 5.5v13l11-6.5-11-6.5Z" /></svg>
);
export const IcSend = (p: IconProps) => (
  <svg {...base(p)}><path d="M21 3 10 14M21 3l-7 19-3.5-8L3 10.5 21 3Z" /></svg>
);
export const IcQr = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" /><path d="M14 14h3v3h-3zM21 14v.01M21 21h-4M14 21v-2" />
  </svg>
);
export const IcScan = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2M3.5 12h17" />
  </svg>
);
export const IcWallet = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M19 7V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H5" />
    <path d="M16.5 13.5h.01" />
  </svg>
);
export const IcPhoneSignal = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="6" y="3" width="10" height="18" rx="2.5" /><path d="M10 18h2" />
  </svg>
);
export const IcZap = (p: IconProps) => (
  <svg {...base(p)}><path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H13L13 2Z" /></svg>
);
export const IcReceipt = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 3h14v18l-2.4-1.5L14.2 21l-2.2-1.5L9.8 21l-2.4-1.5L5 21V3Z" /><path d="M9 8h6M9 12h6" />
  </svg>
);
export const IcGrid = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="4" y="4" width="6.5" height="6.5" rx="1.5" /><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.5" />
    <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.5" /><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.5" />
  </svg>
);
export const IcShieldCheck = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3 5 5.8v5.4c0 4.4 3 8 7 9.8 4-1.8 7-5.4 7-9.8V5.8L12 3Z" /><path d="m9 12 2.2 2.2L15.5 10" />
  </svg>
);
export const IcUsers = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="9" cy="8" r="3.4" /><path d="M3.5 20c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5" />
    <path d="M15.5 5.2a3.4 3.4 0 0 1 0 5.6M17.8 15.4c1.5.8 2.4 2.3 2.7 4.1" />
  </svg>
);
export const IcTrendingUp = (p: IconProps) => (
  <svg {...base(p)}><path d="m3 17 6-6 4 4 8-8M15 7h6v6" /></svg>
);
export const IcStar = (p: IconProps) => (
  <svg {...base({ ...p, fill: "currentColor", stroke: "none" })}>
    <path d="m12 2.6 2.9 5.9 6.5 1-4.7 4.5 1.1 6.5L12 17.4l-5.8 3.1 1.1-6.5L2.6 9.5l6.5-1L12 2.6Z" />
  </svg>
);
export const IcQuote = (p: IconProps) => (
  <svg {...base({ ...p, fill: "currentColor", stroke: "none" })}>
    <path d="M4 12c0-4 2.4-6.8 6-7.6l.6 1.8C8.4 7.2 7.4 8.6 7.2 10H10v7H4v-5Zm10 0c0-4 2.4-6.8 6-7.6l.6 1.8c-2.2 1-3.2 2.4-3.4 3.8H20v7h-6v-5Z" />
  </svg>
);
export const IcCheck = (p: IconProps) => (
  <svg {...base(p)}><path d="m4.5 12.5 5 5L19.5 7" /></svg>
);
export const IcCheckCircle = (p: IconProps) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="m8.5 12.3 2.4 2.4 4.8-5" /></svg>
);
export const IcDownload = (p: IconProps) => (
  <svg {...base(p)}><path d="M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5M4 20h16" /></svg>
);
export const IcGraduation = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m2.5 9 9.5-4.5L21.5 9 12 13.5 2.5 9Z" /><path d="M6.5 11.5V16c0 1.5 2.5 3 5.5 3s5.5-1.5 5.5-3v-4.5M21.5 9v5" />
  </svg>
);
export const IcBook = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15Z" /><path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20" />
  </svg>
);
export const IcChart = (p: IconProps) => (
  <svg {...base(p)}><path d="M4 20V10M10 20V4M16 20v-8M21 20H3" /></svg>
);
export const IcGift = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="4" y="8" width="16" height="4" rx="1" /><path d="M6 12v8h12v-8M12 8v12M12 8s-1.5-4.5-4-4.5S5.5 8 8 8h4ZM12 8s1.5-4.5 4-4.5S18.5 8 16 8h-4Z" />
  </svg>
);
export const IcLock = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
);
export const IcMessage = (p: IconProps) => (
  <svg {...base(p)}><path d="M21 12a8 8 0 0 1-8 8H4l2.2-3.3A8 8 0 1 1 21 12Z" /></svg>
);
export const IcPhoneCall = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5.5 3.5h3l1.5 4-2 1.5a12.5 12.5 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3.5 5.7a2 2 0 0 1 2-2.2Z" />
  </svg>
);
export const IcMail = (p: IconProps) => (
  <svg {...base(p)}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 7 8.5 6 8.5-6" /></svg>
);
export const IcMapPin = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 21.5S5 15 5 9.8a7 7 0 1 1 14 0c0 5.2-7 11.7-7 11.7Z" /><circle cx="12" cy="9.8" r="2.6" />
  </svg>
);
export const IcGlobe = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
  </svg>
);
export const IcSmartphone = (p: IconProps) => (
  <svg {...base(p)}><rect x="6.5" y="2.5" width="11" height="19" rx="2.5" /><path d="M10.5 18.5h3" /></svg>
);
export const IcTv = (p: IconProps) => (
  <svg {...base(p)}><rect x="3" y="6" width="18" height="12" rx="2" /><path d="m9 2.5 3 3 3-3M8 21.5h8" /></svg>
);
export const IcDroplet = (p: IconProps) => (
  <svg {...base(p)}><path d="M12 2.8s6.5 6.6 6.5 11.2a6.5 6.5 0 0 1-13 0C5.5 9.4 12 2.8 12 2.8Z" /></svg>
);
export const IcShoppingBag = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 8h14l-1 12.5H6L5 8Z" /><path d="M8.5 10.5V6.8a3.5 3.5 0 0 1 7 0v3.7" />
  </svg>
);
export const IcPlane = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M10.5 13.5 3 11l1.5-1.7 5.6.7 4.9-5.4a1.4 1.4 0 0 1 2.1 1.9l-4.6 5.6 1.2 5.5-1.9 1.4-2.6-7-3.3 3.4.3 2.4-1.4 1.1-1.3-3.3L2 14.8l1.2-1.3h7.3Z" />
  </svg>
);
export const IcHeartHand = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 8.4C12 6.3 13.6 5 15.2 5 17 5 18.5 6.4 18.5 8.2c0 3-4.3 5.8-6.5 7.3-2.2-1.5-6.5-4.3-6.5-7.3C5.5 6.4 7 5 8.8 5c1.6 0 3.2 1.3 3.2 3.4Z" />
    <path d="M4 18.5h4l3 2h6" />
  </svg>
);
export const IcBuilding = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 21V5.5L12 3v18M12 8.5 20 11v10M4 21h16" /><path d="M7.5 8.5h1.5M7.5 12h1.5M7.5 15.5h1.5M15.5 14h1.5M15.5 17.5h1.5" />
  </svg>
);
export const IcSparkle = (p: IconProps) => (
  <svg {...base(p)}><path d="M12 3l2 5.5L19.5 10 14 12l-2 5.5L10 12 4.5 10 10 8.5 12 3ZM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z" /></svg>
);
export const IcFileText = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8l-5-5Z" />
    <path d="M14 3v5h5M9 12h6M9 16h6" />
  </svg>
);
export const IcCrown = (p: IconProps) => (
  <svg {...base({ ...p, fill: "currentColor", stroke: "none" })}>
    <path d="m3 7 4.5 3.5L12 4l4.5 6.5L21 7l-1.6 11H4.6L3 7Zm2.2 13h13.6v2H5.2v-2Z" />
  </svg>
);
export const IcEye = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" /><circle cx="12" cy="12" r="2.8" />
  </svg>
);
export const IcBell = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 9.5a6 6 0 0 1 12 0c0 4 1.5 5.5 2 6.5H4c.5-1 2-2.5 2-6.5ZM10 19.5a2 2 0 0 0 4 0" />
  </svg>
);
export const IcPlusCircle = (p: IconProps) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M12 8v8M8 12h8" /></svg>
);
export const IcWhatsapp = (p: IconProps) => (
  <svg {...base({ ...p, fill: "currentColor", stroke: "none" })}>
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.4-3c-.3-.4 0-.5.2-.8l.5-.7c.1-.2 0-.4 0-.6l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.9.9-1.2 2.2-.4 3.7a12 12 0 0 0 4.6 4.5c1.7.9 2.7 1 3.7.7.6-.2 1.4-.7 1.6-1.4.2-.7.2-1.3.1-1.4l-.7-.4Z" />
  </svg>
);
export const IcInstagram = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" /><circle cx="12" cy="12" r="3.8" /><path d="M17.2 6.8h.01" />
  </svg>
);
export const IcFacebook = (p: IconProps) => (
  <svg {...base(p)}><path d="M14.5 8.5H17V5h-2.5A3.5 3.5 0 0 0 11 8.5V11H8.5v3.5H11V21h3.5v-6.5H17L17.5 11h-3v-2a.5.5 0 0 1 0-.5Z" /></svg>
);
export const IcYoutube = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="2.5" y="6" width="19" height="12.5" rx="3.5" /><path d="m10.5 9.8 4.5 2.5-4.5 2.5v-5Z" fill="currentColor" stroke="none" />
  </svg>
);
export const IcTiktok = (p: IconProps) => (
  <svg {...base(p)}><path d="M15 4c.4 2.3 1.9 3.8 4.3 4v3a7.6 7.6 0 0 1-4.3-1.4v5.6A5.4 5.4 0 1 1 9.6 9.8v3.1a2.4 2.4 0 1 0 2.4 2.4V4h3Z" /></svg>
);
export const IcX = (p: IconProps) => (
  <svg {...base(p)}><path d="m4 4 16 16M20 4 4 20" /></svg>
);
export const IcXSocial = (p: IconProps) => (
  <svg {...base({ ...p, fill: "currentColor", stroke: "none" })}><path d="M17.5 3h3.1l-6.8 7.7L21.5 21h-5.9l-4.1-5.4L6.6 21H3.5l7.1-8.1L3 3h6l3.8 5 4.7-5Zm-1.1 16h1.7L7.4 4.7H5.6l10.8 14.3Z" /></svg>
);
