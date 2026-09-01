"use client";

import { useRef } from "react";
import { PwReveal } from "@/components/payway/pw-reveal";

/* ---- ikon lucide inline (verbatim dari markup) ---- */

const sparklesIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-sparkles"
  >
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    <path d="M20 3v4" />
    <path d="M22 5h-4" />
    <path d="M4 17v2" />
    <path d="M5 18H3" />
  </svg>
);

const arrowLeftIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-arrow-left"
  >
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);

const arrowRightIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-arrow-right"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

/* ---- data konten (verbatim dari markup) ---- */

type PwTestimonial = {
  quote: string;
  name: string;
  role: string;
  avatarSrc: string;
  flagSrc: string;
};

const PW_TESTIMONIALS: PwTestimonial[] = [
  {
    quote: "Bayar listrik & PDAM jadi gak ribet lagi lewat Saku Sultan. Semuanya bisa dari HP, gak perlu antre.",
    name: "Budi Santoso",
    role: "Pedagang Pasar",
    avatarSrc: "/images/payway/unsplash-photo-1599566150163-29194dcaad36.jpg",
    flagSrc: "/images/payway/flag-id.svg",
  },
  {
    quote: "Top-up GoPay anak saya kapan aja, praktis banget. Saku Sultan benar-benar membantu kebutuhan sehari-hari keluarga saya.",
    name: "Sari Dewi",
    role: "Ibu Rumah Tangga",
    avatarSrc: "/images/payway/unsplash-photo-1494790108377-be9c29b29330.jpg",
    flagSrc: "/images/payway/flag-id.svg",
  },
  {
    quote: "Beli pulsa murah dan voucher game, langsung masuk. Promonya juga banyak, cocok buat anak muda.",
    name: "Ahmad Rizal",
    role: "Karyawan Swasta",
    avatarSrc: "/images/payway/unsplash-photo-1535713875002-d1d0cf377fde.jpg",
    flagSrc: "/images/payway/flag-id.svg",
  },
  {
    quote: "BPJS bayar lewat Saku Sultan, gak perlu antre lagi. Cepat, aman, dan prosesnya transparan.",
    name: "Dewi Lestari",
    role: "Mahasiswi",
    avatarSrc: "/images/payway/unsplash-photo-1543269865-cbf427effbad.jpg",
    flagSrc: "/images/payway/flag-id.svg",
  },
  {
    quote: "QRIS-nya universal, pelanggan warung saya bisa bayar pakai e-money apa pun. Transaksi jadi lebih mudah dan modern.",
    name: "Rina Marlina",
    role: "Pemilik Warung",
    avatarSrc: "/images/payway/unsplash-photo-1527980965255-d3b416303d12.jpg",
    flagSrc: "/images/payway/flag-id.svg",
  },
];

/* ---- tombol navigasi carousel (muncul 2x: desktop kanan-atas, tablet bawah) ---- */

function CarouselNav({
  className,
  onPrev,
  onNext,
}: {
  className: string;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className={className}>
      <button
        type="button"
        onClick={onPrev}
        className="w-12 h-12 flex items-center justify-center transition-all duration-300 bg-white/90 backdrop-blur-sm text-[#042718] rounded-[30px]"
      >
        {arrowLeftIcon}
      </button>
      <button
        type="button"
        onClick={onNext}
        className="w-12 h-12 flex items-center justify-center transition-all duration-300 bg-[#042718] text-white rounded-full shadow-[0_4px_20px_0_rgba(4,39,24,0.04)]"
      >
        {arrowRightIcon}
      </button>
    </div>
  );
}

/* ---- section utama ---- */

export function PwTestimonials() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollCards = (direction: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    const amount = direction === "next" ? 440 : -440;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section
      id="testimoni"
      className="relative w-full overflow-hidden bg-white scroll-mt-24 "
    >
      <div className="absolute inset-0 w-full h-full z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/videos/payway/header-01-bg-payway.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-[96px] py-12 md:py-16 lg:py-[80px] flex flex-col items-center gap-12 lg:gap-16">
        <div className="w-full max-w-[1248px] flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-8">
          <div className="flex flex-col items-start gap-4">
            <PwReveal className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#198F381A] bg-[#F6FDFF]/80 backdrop-blur-sm text-[#198F38]">
              {sparklesIcon}
              <span className="font-body text-base tracking-[-0.3px]">Testimoni</span>
            </PwReveal>
            <PwReveal delay={100}>
              <h2 className="max-w-[700px] font-heading text-[32px] sm:text-[42px] lg:text-[52px] font-semibold text-[#042718] leading-[1.1] sm:leading-[58px] tracking-[-1px] sm:tracking-[-1.8px] text-left">
                Dipercaya Ratusan Ribu Pengguna Indonesia
              </h2>
            </PwReveal>
          </div>
          <CarouselNav
            className="hidden lg:flex items-center gap-4"
            onPrev={() => scrollCards("prev")}
            onNext={() => scrollCards("next")}
          />
        </div>
        <div
          ref={trackRef}
          className="w-full max-w-[1248px] overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth"
        >
          <div className="flex -ml-4 lg:-ml-6 items-start min-w-max pr-4">
            {PW_TESTIMONIALS.map((testimonial, index) => (
              <PwReveal
                key={testimonial.name}
                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_calc(50%-8px)] lg:flex-[0_0_424px] pl-4 lg:pl-6"
                delay={(index % 3) * 100}
              >
                <div className="w-full h-full flex flex-col items-start p-6 md:p-8 rounded-[30px] bg-white/90 backdrop-blur-sm shadow-sm border border-[#042718]/5">
                  <div className="relative w-10 h-8 mb-6 md:mb-8">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt="Quote"
                      loading="lazy"
                      decoding="async"
                      className="object-contain absolute inset-0 h-full w-full text-transparent"
                      src="/images/payway/quite-icon.svg"
                    />
                  </div>
                  <p className="font-heading text-[18px] md:text-[24px] font-medium text-[#042718] leading-[26px] md:leading-[34px] tracking-[-0.6px] md:tracking-[-0.8px] w-full mb-8 md:mb-16">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-[52px] h-[52px] shrink-0">
                      <div className="relative w-full h-full rounded-full overflow-hidden border border-[#042718]/5">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          alt={testimonial.name}
                          loading="lazy"
                          decoding="async"
                          className="object-cover absolute inset-0 h-full w-full text-transparent"
                          src={testimonial.avatarSrc}
                        />
                      </div>
                      <div className="absolute -right-1 -bottom-1 w-[18px] h-[18px] rounded-full border border-white overflow-hidden z-10">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          alt="Country flag"
                          loading="lazy"
                          decoding="async"
                          className="object-cover absolute inset-0 h-full w-full text-transparent"
                          src={testimonial.flagSrc}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[2px]">
                      <span className="font-body text-base font-medium text-[#042718] tracking-[-0.3px]">
                        {testimonial.name}
                      </span>
                      <span className="font-body text-sm text-[#042718]/80">{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              </PwReveal>
            ))}
          </div>
        </div>
        <CarouselNav
          className="hidden sm:flex lg:hidden items-center gap-4"
          onPrev={() => scrollCards("prev")}
          onNext={() => scrollCards("next")}
        />
      </div>
    </section>
  );
}
