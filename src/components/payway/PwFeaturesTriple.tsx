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
    label: "Pembayaran Tagihan",
    title: "Bayar Tagihan Bulanan dari Satu Aplikasi",
    description:
      "Kelola pembayaran listrik, air, internet, BPJS, dan kebutuhan bulanan lain tanpa berpindah aplikasi.",
    bullets: [
      {
        icon: zapIcon,
        lead: "Semua tagihan penting",
        rest: "— PLN, PDAM, internet, BPJS, dan TV kabel tersedia dalam satu alur.",
      },
      {
        icon: globeIcon,
        lead: "Cek status lebih cepat",
        rest: "— Pengguna bisa langsung melihat layanan yang siap dibayar tanpa proses rumit.",
      },
      {
        icon: chartColumnIcon,
        lead: "Pembayaran praktis",
        rest: "— Proses transaksi dibuat singkat supaya tidak perlu antre atau pindah channel.",
      },
    ],
    imageSrc: "/images/payway/unsplash-photo-1535713875002-d1d0cf377fde.jpg",
    imageAlt: "Bayar Tagihan Bulanan dari Satu Aplikasi",
  },
  {
    stickyTop: "top-[80px] md:top-[100px]",
    label: "Barcode Scan",
    title: "Bayar di Merchant dengan QR atau Barcode",
    description:
      "Fitur barcode scan memudahkan pembayaran cepat tanpa uang tunai, baik di merchant harian maupun outlet partner.",
    bullets: [
      {
        icon: zapIcon,
        lead: "Transaksi tanpa tunai",
        rest: "— Cukup scan QR atau barcode lalu pembayaran langsung diproses.",
      },
      {
        icon: shieldCheckIcon,
        lead: "Cocok untuk merchant",
        rest: "— Membantu pembayaran retail yang cepat dan mengurangi kesalahan input nominal.",
      },
      {
        icon: usersIcon,
        lead: "Realtime dan aman",
        rest: "— Status transaksi tampil langsung setelah scan selesai.",
      },
    ],
    imageSrc: "/images/payway/unsplash-photo-1527980965255-d3b416303d12.jpg",
    imageAlt: "Bayar di Merchant dengan QR atau Barcode",
  },
  {
    stickyTop: "top-[100px] md:top-[120px]",
    label: "Transfer & Top-Up",
    title: "Transfer Uang dan Isi Saldo Kapan Saja",
    description:
      "Saku Sultan mendukung transfer uang serta top-up saldo dari berbagai channel agar transaksi tetap lancar setiap saat.",
    bullets: [
      {
        icon: creditCardIcon,
        lead: "Transfer fleksibel",
        rest: "— Kirim uang ke sesama pengguna maupun ke rekening bank lokal.",
      },
      {
        icon: smartphoneIcon,
        lead: "Top-up saldo",
        rest: "— Isi saldo dari transfer bank, e-wallet, hingga channel retail yang tersedia.",
      },
      {
        icon: chartColumnIcon,
        lead: "Siap untuk aktivitas harian",
        rest: "— Saldo yang terisi bisa langsung dipakai untuk belanja, scan, dan bayar tagihan.",
      },
    ],
    imageSrc: "/images/payway/unsplash-photo-1494790108377-be9c29b29330.jpg",
    imageAlt: "Transfer Uang dan Isi Saldo Kapan Saja",
  },
  {
    stickyTop: "top-[120px] md:top-[140px]",
    label: "E-Commerce & Biometrik",
    title: "Belanja Online dengan Keamanan Biometrik",
    description:
      "Saku Sultan mendukung transaksi e-commerce dan menjaga keamanan akun dengan perlindungan biometrik berlapis.",
    bullets: [
      {
        icon: walletIcon,
        lead: "Siap untuk e-commerce",
        rest: "— Saldo dan metode pembayaran bisa dipakai untuk transaksi online di berbagai platform.",
      },
      {
        icon: shieldCheckIcon,
        lead: "Biometric security",
        rest: "— Karakteristik fisiologis pengguna membantu menjaga transaksi tetap aman.",
      },
      {
        icon: zapIcon,
        lead: "Perlindungan berlapis",
        rest: "— Kombinasi validasi akun, keamanan perangkat, dan proses transaksi yang lebih terkontrol.",
      },
    ],
    imageSrc: "/images/payway/feature-4th-card.png",
    imageAlt: "Belanja Online dengan Keamanan Biometrik",
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
          <a
            href="https://play.google.com/store/apps/details?id=com.saku_sultan"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center bg-[#042718] border border-[#0427180f] rounded-full overflow-hidden transition-all duration-300 h-[44px] w-fit mt-2 md:mt-0 mb-8 md:mb-16"
          >
            <div className="absolute right-[6px] w-8 h-8 bg-white rounded-full flex items-center justify-center z-10">
              {arrowUpRightIcon}
            </div>
            <span className="block pl-[18px] pr-[46px] font-sans font-medium text-base leading-6 tracking-[-0.3px] text-white whitespace-nowrap">
              Download Aplikasi
            </span>
          </a>
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
    <section
      id="fitur-lengkap"
      className="w-full bg-white flex flex-col items-center py-24 gap-16 scroll-mt-24"
    >
      <div className="w-full max-w-[1440px] px-6 lg:px-[96px] flex flex-col items-center gap-[64px]">
        <div className="flex flex-col items-center text-center gap-6">
          <PwReveal className="flex items-center gap-2 bg-[#198F380F] pl-[14px] pr-[16px] py-[6px] rounded-full border border-[#198F381A]">
            {sparklesIcon}
            <span className="font-sans font-normal text-base text-[#198F38] tracking-[-0.3px]">
              Fitur
            </span>
          </PwReveal>
          <PwReveal className="w-full max-w-[700px]" delay={100}>
            <h2 className="w-full max-w-[700px] font-semibold text-[32px] md:text-[42px] lg:text-[52px] leading-[38px] md:leading-[48px] lg:leading-[58px] tracking-[-1.2px] md:tracking-[-1.8px] text-[#042718]">
              Fitur Inti Saku Sultan yang Sudah Selaras dengan MCP
            </h2>
          </PwReveal>
          <PwReveal className="w-full max-w-[800px]" delay={200}>
            <p className="w-full max-w-[800px] font-sans font-normal text-base md:text-lg leading-[24px] md:leading-[28px] text-[#042718cc]">
              Landing page ini sekarang menonjolkan fitur yang benar-benar ada di data Saku Sultan: tagihan, barcode scan, transfer, top-up, e-commerce, dan keamanan biometrik.
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
