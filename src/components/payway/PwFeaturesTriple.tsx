"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactElement } from "react";
import { createPortal } from "react-dom";
import { PwReveal } from "@/components/payway/pw-reveal";
import { PwEyebrow } from "@/components/payway/pw-eyebrow";
import { PwSectionHeader } from "@/components/payway/pw-section-header";

/* ---- ikon lucide inline (verbatim dari markup) ---- */

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
  label: string;
  title: string;
  shortDescription: string;
  description: string;
  bullets: PwFeatureBullet[];
  imageSrc: string;
  imageAlt: string;
};

const PW_FEATURES: PwFeature[] = [
  {
    label: "EduDigi",
    title: "Edukasi Digital",
    shortDescription:
      "Belajar menggunakan layanan digital dengan aman, bijak, dan bertanggung jawab.",
    description:
      "EduDigi merupakan program edukasi pada aplikasi SAKU SULTAN yang dirancang untuk meningkatkan pengetahuan dan keterampilan digital para mitra serta masyarakat. Program ini menyajikan pembelajaran yang praktis dan mudah dipahami, khususnya mengenai penggunaan layanan keuangan digital secara bijak, aman, dan bertanggung jawab.\n\nMelalui EduDigi, pengguna dapat mempelajari cara bertransaksi digital, menjaga kerahasiaan PIN dan kode OTP, melindungi data pribadi, mengenali modus penipuan daring, serta memanfaatkan teknologi untuk mengembangkan usaha.\n\nKehadiran EduDigi menegaskan bahwa SAKU SULTAN tidak hanya menyediakan layanan transaksi, tetapi juga turut membangun masyarakat yang semakin cakap dan aman di era digital.\n\nEduDigi — Belajar Digital, Bertransaksi Aman, Usaha Makin Berkembang.",
    bullets: [
      {
        icon: zapIcon,
        lead: "Belajar layanan digital",
        rest: "Materi praktis dan mudah dipahami untuk mitra serta masyarakat.",
      },
      {
        icon: globeIcon,
        lead: "Bertransaksi dengan aman",
        rest: "Pelajari cara menjaga PIN, OTP, dan data pribadi.",
      },
      {
        icon: chartColumnIcon,
        lead: "Mendukung perkembangan usaha",
        rest: "Manfaatkan teknologi untuk mengembangkan usaha di era digital.",
      },
    ],
    imageSrc: "/images/payway/Edudigi.jpg",
    imageAlt: "EduDigi",
  },
  {
    label: "PASSOLO",
    title: "PASSOLO",
    shortDescription:
      "Kirim tanda kasih untuk acara pernikahan dan kegiatan sosial secara praktis.",
    description:
      "PASSOLO merupakan fitur yang mengangkat tradisi masyarakat Sulawesi Selatan dalam memberikan sumbangan atau tanda kasih pada acara pernikahan dan kegiatan sosial lainnya ke dalam layanan digital.\n\nMelalui fitur ini, pengguna dapat mengirim passolo secara lebih mudah, cepat, dan praktis melalui aplikasi SAKU SULTAN, meskipun tidak sempat hadir langsung di lokasi acara. Transaksi juga dapat tercatat dengan rapi sehingga lebih mudah diperiksa kembali.\n\nKehadiran PASSOLO menjadi bentuk perpaduan antara kearifan lokal dan teknologi — melestarikan budaya saling membantu sekaligus menyesuaikannya dengan kebutuhan masyarakat masa kini.\n\nPASSOLO — Tradisi Tetap Terjaga, Berbagi Jadi Lebih Mudah.",
    bullets: [
      {
        icon: zapIcon,
        lead: "Kirim tanda kasih",
        rest: "Berikan passolo untuk acara pernikahan dan kegiatan sosial lainnya.",
      },
      {
        icon: shieldCheckIcon,
        lead: "Tetap terhubung",
        rest: "Kirim passolo meskipun tidak sempat hadir langsung di lokasi acara.",
      },
      {
        icon: usersIcon,
        lead: "Tercatat dengan rapi",
        rest: "Periksa kembali riwayat transaksi dengan lebih mudah.",
      },
    ],
    imageSrc: "/images/payway/Passolo.jpeg",
    imageAlt: "PasSolo",
  },
  {
    label: "QTRA",
    title: "QTRA",
    shortDescription:
      "Transfer dana lebih cepat, praktis, dan aman melalui aplikasi SAKU SULTAN.",
    description:
      "QTRA atau Quick Transfer merupakan fitur transfer cepat pada aplikasi SAKU SULTAN yang dirancang untuk memudahkan pengguna mengirim dana secara praktis, aman, dan efisien melalui satu aplikasi.\n\nDengan QTRA, pengguna dapat melakukan transfer tanpa harus melalui proses yang panjang. Cukup memilih tujuan transfer, memasukkan nominal, memeriksa kembali data penerima, lalu mengonfirmasi transaksi. Fitur ini membantu pengguna menghemat waktu dalam memenuhi kebutuhan transaksi sehari-hari.\n\nQTRA memberikan beberapa manfaat utama:\n• Proses transfer lebih cepat dan sederhana.\n• Transaksi dapat dilakukan kapan saja melalui ponsel.\n• Mengurangi kesalahan dengan halaman konfirmasi data penerima.\n• Riwayat transaksi tersimpan sehingga mudah diperiksa kembali.\n• Mendukung kebutuhan pribadi maupun aktivitas usaha Mitra SAKU SULTAN.\n\nQTRA menjadi bagian dari komitmen SAKU SULTAN dalam menghadirkan layanan keuangan digital yang mudah digunakan oleh masyarakat. Kehadirannya diharapkan dapat mempercepat perputaran transaksi, mendukung kegiatan usaha para mitra, serta memperluas kebiasaan bertransaksi secara digital.\n\nQTRA — Quick Transfer: Kirim dana lebih cepat, praktis, dan aman bersama SAKU SULTAN.\n\nCatatan: tujuan transfer, biaya layanan, batas nominal, dan waktu pemrosesan mengikuti ketentuan resmi yang berlaku pada aplikasi SAKU SULTAN.",
    bullets: [
      {
        icon: creditCardIcon,
        lead: "Proses cepat dan sederhana",
        rest: "Pilih tujuan, masukkan nominal, periksa data, lalu konfirmasi.",
      },
      {
        icon: smartphoneIcon,
        lead: "Transfer kapan saja",
        rest: "Kirim dana melalui ponsel untuk kebutuhan pribadi maupun usaha.",
      },
      {
        icon: chartColumnIcon,
        lead: "Riwayat mudah diperiksa",
        rest: "Konfirmasi penerima dan riwayat transaksi membantu mengurangi kesalahan.",
      },
    ],
    imageSrc: "/images/payway/Q-tra.jpg",
    imageAlt: "Q-tra",
  },
];

/* ---- sub-komponen kartu fitur (struktur identik antar blok) ---- */

const checkIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-3 w-3"
    aria-hidden="true"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

/* Deskripsi panjang dipecah per blok \n\n: daftar • jadi list ber-ikon,
   tagline "Nama — ..." jadi kutipan serif, "Catatan:" jadi nota kecil. */
function FeatureDescription({ feature }: { feature: PwFeature }) {
  const blocks = feature.description.split("\n\n");
  return (
    <div className="mx-auto flex max-w-[900px] flex-col gap-5">
      {blocks.map((block) => {
        const lines = block.split("\n");
        const bulletLines = lines.filter((line) => line.trim().startsWith("•"));
        if (bulletLines.length > 0) {
          const intro = lines
            .filter((line) => !line.trim().startsWith("•"))
            .join(" ")
            .trim();
          return (
            <div key={block} className="rounded-2xl border border-[#198F381A] bg-white/80 p-5 md:p-6">
              {intro && <p className="mb-4 font-sans font-medium text-[#042718]">{intro}</p>}
              <ul className="flex flex-col gap-3">
                {bulletLines.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#198F3818] text-[#198F38]">
                      {checkIcon}
                    </span>
                    <span className="font-sans text-base leading-7 text-[#042718cc]">
                      {item.replace(/^\s*•\s*/, "")}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        }
        if (block.startsWith("Catatan:")) {
          return (
            <p key={block} className="border-l-2 border-[#198F3840] pl-4 font-sans text-sm italic leading-6 text-[#04271899]">
              {block}
            </p>
          );
        }
        if (block.startsWith(`${feature.title} —`)) {
          return (
            <p
              key={block}
              className="py-1 text-center text-xl leading-relaxed text-[#042718] [font-family:var(--pw-font-serif)] italic md:text-2xl"
            >
              “{block}”
            </p>
          );
        }
        return (
          <p key={block} className="font-sans text-base leading-7 text-[#042718cc]">
            {block}
          </p>
        );
      })}
    </div>
  );
}

function FeatureBlock({ feature, index }: { feature: PwFeature; index: number }) {
  const flip = index % 2 === 1;
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  // Offset pin dinamis: kalau kartu lebih tinggi dari viewport, pin digeser
  // ke atas (negatif) supaya bagian bawah kartu — tombol Lihat Detail —
  // tetap terlihat sebelum kartu berikutnya menimpanya.
  // Nilainya ditulis langsung ke CSS custom property, bukan ke state React,
  // supaya resize/ResizeObserver tidak memicu re-render tiap frame.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    let frame = 0;
    const apply = () => {
      frame = 0;
      const base = (window.innerWidth >= 768 ? 80 : 60) + index * 20;
      const top = Math.min(base, window.innerHeight - el.offsetHeight - 24);
      el.style.setProperty("--pw-sticky-top", `${top}px`);
    };
    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("resize", schedule, { passive: true });
    const ro = new ResizeObserver(schedule);
    ro.observe(el);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", schedule);
      ro.disconnect();
    };
  }, [index]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div
      ref={wrapRef}
      className="pw-feature-sticky sticky w-full max-w-[1248px]"
      style={{ top: `var(--pw-sticky-top, ${80 + index * 20}px)` }}
    >
      <PwReveal
        className="pw-feature-card relative w-full bg-[#F6FDFF] border border-[#04271803] rounded-[30px] shadow-[0_8px_20px_0_rgba(4,39,24,0.04)] overflow-hidden"
      >
      {/* Nomor raksasa serif sebagai aksen latar */}
      <span
        aria-hidden="true"
        className={`pointer-events-none select-none absolute -top-8 md:-top-12 ${flip ? "left-4 md:left-10" : "right-4 md:right-10"} [font-family:var(--pw-font-serif)] italic text-[120px] md:text-[200px] leading-none text-[#198F380D]`}
      >
        0{index + 1}
      </span>
      <div className={`flex flex-col ${flip ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-10 md:gap-14 px-6 md:px-14 py-8 md:py-12`}>
        <div className="w-full lg:w-[572px] pt-4 md:pt-[32px] flex flex-col gap-6 md:gap-8 shrink-0">
          <div className="flex flex-col">
            <PwEyebrow className="mb-4">{feature.label}</PwEyebrow>
            <h3 className="max-w-[432px] font-semibold text-[32px] md:text-[42px] leading-[38px] md:leading-[48px] tracking-[-1.2px] md:tracking-[-2px] text-[#042718] mb-3">
              {feature.title}
            </h3>
            <p className="max-w-[508px] font-sans text-base leading-7 text-[#042718cc]">
              {feature.shortDescription}
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-6">
              <a
                href="https://play.google.com/store/apps/details?id=com.saku_sultan"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center bg-[#042718] border border-[#0427180f] rounded-full overflow-hidden transition-all duration-300 h-[44px] w-fit"
              >
                <div className="absolute right-[6px] w-8 h-8 bg-white rounded-full flex items-center justify-center z-10">
                  {arrowUpRightIcon}
                </div>
                <span className="block pl-[18px] pr-[46px] font-sans font-medium text-base leading-6 tracking-[-0.3px] text-white whitespace-nowrap">
                  Download Aplikasi
                </span>
              </a>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="flex items-center gap-2 h-[44px] px-[18px] rounded-full border border-[#0427181a] bg-white/70 font-sans font-medium text-base tracking-[-0.3px] text-[#042718] transition-colors hover:bg-[#198F380F] whitespace-nowrap"
              >
                Lihat Detail
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-[#198F38]"
                  aria-hidden="true"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
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
        </div>
        <div className="w-full lg:flex-1 flex justify-center items-center">
          <PwReveal className="relative my-4 lg:my-8 w-fit" delay={200}>
            <div
              className={`absolute -inset-3 md:-inset-4 rounded-[28px] bg-gradient-to-br from-[#198F3821] via-[#D6EFFF59] to-[#198F380a] ${flip ? "-rotate-3" : "rotate-3"}`}
            />
            <Image
              alt={feature.imageAlt}
              src={feature.imageSrc}
              width={860}
              height={860}
              sizes="(min-width: 1024px) 560px, 90vw"
              className={`relative h-auto w-auto max-w-full max-h-[320px] md:max-h-[420px] object-contain rounded-[20px] shadow-[0_16px_36px_0_rgba(4,39,24,0.14)] transition-transform duration-500 hover:rotate-0 hover:scale-[1.02] ${flip ? "rotate-2" : "-rotate-2"}`}
            />
          </PwReveal>
        </div>
      </div>
      </PwReveal>
      {/* Panel detail: modal via portal ke body — wrapper sticky membuat
          stacking context sendiri sehingga fixed biasa bisa tertimpa kartu lain. */}
      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-[#042718]/40 p-4 backdrop-blur-sm md:p-8"
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={`Detail ${feature.title}`}
          >
          <div
            onClick={(event) => event.stopPropagation()}
            className="flex max-h-[85vh] w-full max-w-[860px] flex-col overflow-hidden rounded-[24px] border border-[#0427181a] bg-[#F6FDFF] shadow-[0_24px_60px_0_rgba(4,39,24,0.3)]"
          >
          <div className="relative shrink-0 overflow-hidden bg-gradient-to-r from-[#042718] to-[#11603a] px-6 py-5 pr-16 md:px-8">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-4 right-14 select-none text-[88px] leading-none text-white/10 [font-family:var(--pw-font-serif)] italic"
            >
              0{index + 1}
            </span>
            <p className="text-xl font-semibold tracking-[-0.5px] text-white md:text-2xl">
              Tentang <span className="[font-family:var(--pw-font-serif)] italic font-normal">{feature.title}</span>
            </p>
            <p className="mt-1 max-w-[640px] font-sans text-sm leading-6 text-white/70">
              {feature.shortDescription}
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={`Tutup detail ${feature.title}`}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/30"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto overscroll-contain p-6 md:p-8">
            <FeatureDescription feature={feature} />
          </div>
          </div>
          </div>,
          document.body,
        )}
    </div>
  );
}

/* ---- section utama ---- */

export function PwFeaturesTriple() {
  return (
    <section
      id="layanan"
      className="pw-section-y w-full bg-white flex flex-col items-center gap-16 scroll-mt-24"
    >
      <div className="w-full max-w-[1440px] px-6 lg:px-[96px] flex flex-col items-center gap-[64px]">
        <PwSectionHeader
          eyebrow="Fitur Unggulan"
          title="Fitur Saku Sultan yang Sesuai dengan Kebutuhan Harian"
        />
        <div className="flex flex-col gap-12 w-full items-center">
          {PW_FEATURES.map((feature, index) => (
            <FeatureBlock key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
