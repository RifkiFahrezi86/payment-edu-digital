import Image from "next/image";
import { PwHeroPhoneMockup } from "@/components/payway/PwHeroPhoneMockup";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.saku_sultan";
const APP_STORE_URL =
  "https://apps.apple.com/id/app/saku-sultan/id6444094885";

const HERO_BENEFITS = [
  {
    title: "Pulsa & Data",
    description: "Isi ulang kebutuhan komunikasi",
  },
  {
    title: "Tagihan & Utilitas",
    description: "Listrik, internet, PDAM & lainnya",
  },
  {
    title: "E-Wallet & Transfer",
    description: "Top up dan transaksi digital",
  },
] as const;

function ArrowUpRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function StoreBadge({
  href,
  icon,
  eyebrow,
  label,
}: {
  href: string;
  icon: string;
  eyebrow: string;
  label: string;
}) {
  return (
    // Tanpa aria-label: nama aksesibel diambil dari teks yang terlihat
    // ("Get it on Google Play") sehingga cocok untuk pengguna voice control.
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="pw-lift group flex h-[58px] min-w-0 items-center gap-2.5 rounded-[14px] border border-white/15 bg-[#07130D] px-3 text-left text-white shadow-[0_16px_34px_rgba(4,39,24,0.16)] hover:bg-[#0B2518] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#168344]/30 sm:w-[174px] sm:px-3.5"
    >
      <Image
        src={icon}
        alt=""
        width={32}
        height={32}
        className="h-8 w-8 shrink-0"
      />
      <span className="min-w-0 leading-none">
        <span className="block whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.06em] text-white/85">
          {eyebrow}
        </span>
        <span className="mt-1 block whitespace-nowrap text-[14px] font-semibold tracking-[-0.02em] sm:text-[15px]">
          {label}
        </span>
      </span>
    </a>
  );
}

export function PwHero() {
  return (
    <section
      id="beranda"
      className="saku-hero relative isolate w-full overflow-x-clip bg-[#0A2417] scroll-mt-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="ped-hero-video absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/payway/header.mp4" type="video/mp4" />
        </video>
      </div>
      <div aria-hidden="true" className="saku-hero-readability-scrim pointer-events-none absolute inset-0 -z-10" />

      {/* Spacer pengganti tinggi navbar (fixed tidak memakan ruang) */}
      <div aria-hidden="true" className="h-[96px] sm:h-[100px]" />

      <div className="saku-hero-layout mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-14 px-5 pb-20 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:min-h-[calc(100svh-88px)] lg:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.62fr)] lg:gap-16 lg:px-12 lg:pb-16 lg:pt-12 xl:gap-20 xl:px-24">
        <div className="ped-hero-enter relative isolate flex max-w-[720px] flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="saku-hero-title max-w-[720px] text-[clamp(2.125rem,calc(1.5rem+3.5vw),4.5rem)] font-extrabold leading-[0.96] tracking-[-0.05em] text-white">
            Mudahkan hidupmu dengan{" "}
            <span className="font-bold italic tracking-[-0.038em] text-[#D9F36A]">
              transaksi kekinian.
            </span>
          </h1>

          <p className="saku-hero-hashtag mt-5 text-[clamp(2rem,3.2vw,2.875rem)] font-extrabold leading-none tracking-[-0.03em] text-white sm:mt-6">
            #CUAN PERDETIK
          </p>

          <p className="saku-hero-support mt-4 max-w-[580px] text-base font-medium leading-[1.62] text-white sm:mt-5 sm:text-lg lg:text-[19px]">
            Satu aplikasi untuk pulsa, paket data, tagihan bulanan, top-up
            e-money, hingga pembayaran digital. Praktis, cepat, dan aman dalam
            satu genggaman.
          </p>

          <div className="mt-8 flex w-full flex-col items-center gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:gap-4 lg:items-start">
            <div className="grid w-full grid-cols-2 gap-2.5 sm:w-auto sm:gap-3">
              <StoreBadge
                href={PLAY_STORE_URL}
                icon="/images/payway/google-play.svg"
                eyebrow="Get it on"
                label="Google Play"
              />
              <StoreBadge
                href={APP_STORE_URL}
                icon="/images/payway/app-store.svg"
                eyebrow="Download on the"
                label="App Store"
              />
            </div>

            <a
              href="#fitur"
              className="group inline-flex min-h-[58px] w-full items-center justify-between gap-5 rounded-[15px] border border-[#0A5332]/35 bg-white/78 py-2 pl-5 pr-2 text-sm font-semibold text-[#062B1B] shadow-[0_10px_24px_rgba(4,39,24,0.1),inset_0_1px_0_rgba(255,255,255,0.82)] backdrop-blur-sm transition-[transform,background-color,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[#0A5332]/65 hover:bg-white/92 hover:shadow-[0_13px_28px_rgba(4,39,24,0.13),inset_0_1px_0_rgba(255,255,255,0.9)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#168344]/20 sm:w-auto"
            >
              <span>Jelajahi Fitur</span>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[#073B24] text-white shadow-[0_5px_12px_rgba(4,39,24,0.18)] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRightIcon />
              </span>
            </a>
          </div>

          <div className="saku-service-rail mt-7 w-full max-w-[720px] text-left">
            <div className="flex items-center gap-3">
              <p className="shrink-0 text-[11px] font-bold uppercase leading-none tracking-[0.12em] text-[#D9F36A]">
                Layanan Saku Sultan
              </p>
              <span aria-hidden="true" className="h-px flex-1 bg-white/40" />
            </div>

            <div className="mt-4 grid grid-cols-1 gap-y-3.5 sm:mt-5 sm:grid-cols-[1.15fr_1fr_1.1fr_auto] sm:items-end sm:gap-x-5 sm:gap-y-0">
              {HERO_BENEFITS.map((benefit, index) => (
                <div key={benefit.title}>
                  <p className={index === 0 ? "text-[16px] font-bold leading-[1.3] text-white" : "text-[14px] font-semibold leading-[1.35] text-white"}>
                    {benefit.title}
                  </p>
                  <p className="mt-1.5 text-[12.5px] font-medium leading-[1.55] text-white/88">
                    {benefit.description}
                  </p>
                </div>
              ))}

              <a
                href="#fitur"
                className="group mt-1 inline-flex w-fit items-center gap-2 whitespace-nowrap text-[12.5px] font-semibold text-white underline decoration-white/45 underline-offset-4 transition-colors duration-200 hover:text-[#D9F36A] hover:decoration-[#D9F36A]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9F36A]/70 sm:mt-0 sm:justify-self-end sm:pb-0.5"
              >
                Lihat semua layanan
                <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="ped-hero-enter ped-hero-enter-delay relative mx-auto flex w-full max-w-[440px] items-center justify-center lg:mx-0 lg:justify-start">
          <PwHeroPhoneMockup />
        </div>
      </div>
    </section>
  );
}
