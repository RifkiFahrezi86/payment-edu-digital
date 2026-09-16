import type { ReactNode } from "react";

const paths = {
  document: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6M8 12h8M8 16h5" /></>,
  bank: <><path d="m3 9 9-6 9 6ZM3 21h18M5 18v-6m5 6v-6m4 6v-6m5 6v-6" /><path d="M12 6h.01" /></>,
  shield: <><path d="M12 3 3 7v5c0 5 5 8 9 10 4-2 9-5 9-10V7Z" /><path d="m8 12 3 3 5-6" /></>,
  ticket: <><path d="M3 5h18v5a2 2 0 0 0 0 4v5H3v-5a2 2 0 0 0 0-4Z" /><path d="M15 5v2m0 3v1m0 3v1m0 3v1" /></>,
  book: <><path d="M12 5c-3-3-7-3-10-2v16c3-1 7-1 10 2 3-3 7-3 10-2V3c-3-1-7-1-10 2Zm0 0v16" /><path d="M5 7h3M5 11h3m8-4h3m-3 4h3" /></>,
  certificate: <><path d="M12 19H3V3h18v9M7 7h10M7 11h5" /><circle cx="17" cy="16" r="4" /><path d="m14 19-1 4 4-2 4 2-1-4" /></>,
  wallet: <><path d="M20 8V5H5a2 2 0 0 1 0-4h12v4M3 3v16a2 2 0 0 0 2 2h16V8H5" /><path d="M21 12h-5v5h5m-2-2.5h.01" /></>,
  chart: <><path d="M4 21V11h4v10m3 0V8h4v13m3 0V3h4v18M2 7l6-4 5 1 7-3" /></>,
  infinity: <path d="M12 12C9 5 2 5 2 12s7 7 10 0 10-7 10 0-7 7-10 0Z" />,
  users: <><circle cx="9" cy="7" r="4" /><path d="M2 21v-3a7 7 0 0 1 14 0v3M17 3a4 4 0 0 1 0 8m2 3a6 6 0 0 1 3 5v2" /></>,
  leaf: <><path d="M20 3C9 1 3 7 5 14c7 2 13-4 15-11ZM4 21 16 7M4 21v-6C-1 14 0 8 1 6c5 0 8 3 8 6" /></>,
  cart: <><path d="M2 3h3l3 13h11l3-9H6M8 11h12m-8-4 1 9m4-9-1 9" /><circle cx="9" cy="21" r="1" /><circle cx="18" cy="21" r="1" /></>,
  phone: <><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M10 5h4m-2 14h.01M9 10a4 4 0 0 1 6 0m-4 3a1 1 0 0 1 2 0" /></>,
  zap: <path d="m13 2-9 12h7l-1 8 10-12h-8Z" />,
  droplet: <path d="M12 2C10 6 4 11 4 15a8 8 0 0 0 16 0c0-4-6-9-8-13ZM8 15a4 4 0 0 0 4 4" />,
  tv: <><rect x="2" y="6" width="20" height="15" rx="2" /><path d="m8 1 4 5 4-5M17 10h.01M17 14h.01M5 10h8v7H5Z" /></>,
  plane: <path d="m22 2-7 20-4-9-9-4ZM11 13l7-7" />,
  heart: <><path d="M20 9c6-6-2-12-6-6-4-6-12 0-6 6l6 6Z" /><path d="m2 14 4 1 6 5 8-4M2 20l4-5m1 0 6 1" /></>,
  more: <><circle cx="4" cy="12" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="20" cy="12" r="1.5" /></>,
  arrow: <path d="M4 12h16m-7-7 7 7-7 7" />,
  crown: <><path d="m2 6 5 5 5-9 5 9 5-5-3 14H5ZM5 23h14" /><circle cx="2" cy="5" r="1" /><circle cx="22" cy="5" r="1" /></>,
  graduate: <><path d="m2 9 10-6 10 6-10 6ZM5 11v7c4 3 10 3 14 0v-7m3-2v8" /></>,
} satisfies Record<string, ReactNode>;

export type CampaignIconName = keyof typeof paths;

export function PwCampaignIcon({ name, className }: { name: CampaignIconName; className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {paths[name]}
    </svg>
  );
}
