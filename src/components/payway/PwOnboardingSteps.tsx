"use client";

import Image from "next/image";
import { useState } from "react";
import { PwReveal } from "@/components/payway/pw-reveal";
import { PwSectionHeader } from "@/components/payway/pw-section-header";

/**
 * Section "Mulai Transaksi dalam 3 Langkah Mudah" — dipulihkan dari versi
 * sebelum digantikan section "Alur Transaksi" (VTN), termasuk step
 * "Daftar Akun" yang sempat hilang. Accordion interaktif: klik langkah
 * untuk membuka detail + visual bertema Saku Sultan.
 */

type PwStep = {
  title: string;
  description: string;
  visual: React.ReactNode;
};

const checkIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const PW_STEPS: PwStep[] = [
  {
    title: "Download Aplikasi",
    description: "Unduh Saku Sultan gratis dari Google Play Store.",
    visual: (
      <div className="w-full h-full bg-[linear-gradient(160deg,#042718_0%,#0A5332_100%)] flex items-center justify-center px-6">
        <div className="flex flex-col items-center gap-3">
          <span className="font-semibold text-white text-xl tracking-tight">Saku Sultan</span>
          <p className="text-sm text-white/85">Gratis di Google Play Store</p>
          <a
            href="https://play.google.com/store/apps/details?id=com.saku_sultan"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 hover:scale-105 transition-transform duration-300"
            aria-label="Download Saku Sultan di Google Play"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/payway/google-play.svg" alt="Google Play" className="h-12 w-auto" />
          </a>
        </div>
      </div>
    ),
  },
  {
    title: "Daftar Akun",
    description: "Buat akun baru dalam hitungan menit dan verifikasi data Anda.",
    visual: (
      <div className="w-full h-full bg-[linear-gradient(160deg,#EAF7EF_0%,#D9F0E2_100%)] flex items-center justify-center px-6">
        <div className="w-full max-w-[340px] rounded-2xl bg-white shadow-[0_16px_40px_rgba(4,39,24,0.12)] p-5 flex flex-col gap-3">
          <p className="text-sm font-semibold text-[#042718]">Buat Akun Baru</p>
          <div className="rounded-xl border border-[#042718]/12 px-3.5 py-2.5 text-[13px] text-[#042718]/62">
            Nama lengkap
          </div>
          <div className="rounded-xl border border-[#042718]/12 px-3.5 py-2.5 text-[13px] text-[#042718]/62">
            Nomor HP
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-[#198F38]/12 px-3.5 py-2.5 text-[13px] font-medium text-[#15803D]">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#198F38] text-white">
              {checkIcon}
            </span>
            Verifikasi berhasil
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Mulai Transaksi",
    description: "Pilih layanan, bayar tagihan atau beli pulsa, transaksi langsung jadi.",
    visual: (
      <div className="w-full h-full bg-[linear-gradient(160deg,#042718_0%,#198F38_130%)] flex items-center justify-center px-6">
        <div className="w-full max-w-[340px] rounded-2xl bg-white shadow-[0_16px_40px_rgba(4,39,24,0.3)] p-5 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#198F38] text-white">
              {checkIcon}
            </span>
            <div>
              <p className="text-sm font-semibold text-[#042718]">Transaksi Berhasil</p>
              <p className="text-xs text-[#042718]/72">Pembayaran listrik PLN</p>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-xl bg-[#F4FAF6] px-3.5 py-2.5">
            <span className="text-[13px] text-[#042718]/72">Total</span>
            <span className="text-sm font-semibold text-[#042718]">Rp 250.000</span>
          </div>
          <div className="flex items-center justify-between rounded-xl bg-[#F4FAF6] px-3.5 py-2.5">
            <span className="text-[13px] text-[#042718]/72">Metode</span>
            <span className="text-sm font-semibold text-[#042718]">Saldo Saku Sultan</span>
          </div>
        </div>
      </div>
    ),
  },
];

export function PwOnboardingSteps() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="registrasi" aria-label="Registrasi Saku Sultan" className="w-full bg-white flex flex-col items-center scroll-mt-24">
      <div className="pw-section-y w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="w-full max-w-[1248px] mx-auto flex flex-col items-center gap-12 lg:gap-[64px]">
          <PwSectionHeader
            eyebrow="Registrasi"
            title="Mulai Transaksi dalam 3 Langkah Mudah"
          >
            Ikuti langkah sederhana berikut untuk mulai menggunakan Saku Sultan.
          </PwSectionHeader>
          <div className="w-full flex flex-col lg:flex-row items-center lg:items-stretch gap-6 sm:gap-8 lg:gap-6">
            <div className="w-full lg:w-[612px]">
              <PwReveal className="relative w-full aspect-[6/5] sm:aspect-square lg:aspect-auto lg:h-full min-h-[320px] rounded-[32px] overflow-hidden">
                <Image
                  alt="Ilustrasi langkah transaksi Saku Sultan"
                  src="/images/payway/process-left-img-payway.png"
                  fill
                  sizes="(min-width: 1024px) 612px, 100vw"
                  className="object-cover"
                />
              </PwReveal>
            </div>
            <div className="w-full lg:w-[612px] flex flex-col items-start gap-4">
              {PW_STEPS.map((step, index) => {
                const isActive = index === activeStep;
                return (
                  <PwReveal key={step.title} delay={index * 120} className="w-full">
                    <div
                      className={`flex flex-col items-start self-stretch transition-all duration-500 ease-out rounded-[24px] overflow-hidden border ${
                        isActive
                          ? "pt-5 md:pt-6 px-5 md:px-6 pb-0 gap-5 border-[#042718]/5 shadow-[0_4px_20px_0_rgba(4,39,24,0.02),0_4px_10px_0_rgba(4,39,24,0.04)] bg-[#f6fdff]"
                          : "p-5 md:p-8 pb-0 gap-0 border-transparent bg-[#f6fdff]/0"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setActiveStep(index)}
                        aria-expanded={isActive}
                        className="flex items-start gap-3 md:gap-4 w-full text-left cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#198F38]/25 rounded-2xl"
                      >
                        <div
                          className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border transition-all duration-500 shrink-0 ${
                            isActive
                              ? "bg-[#042718] border-[#042718] text-white"
                              : "bg-[#0427180D] border-[#0427181A] text-[#042718]"
                          }`}
                        >
                          <span className="font-semibold text-base md:text-lg">{index + 1}</span>
                        </div>
                        <div className="flex flex-col items-start gap-[6px] md:gap-[10px] w-full max-w-[460px]">
                          <h3
                            className={`font-semibold tracking-[-0.6px] md:tracking-[-0.8px] leading-[26px] md:leading-[30px] transition-colors duration-500 text-[18px] md:text-[24px] ${
                              isActive ? "text-[#042718]" : "text-[#042718]/72"
                            }`}
                          >
                            {step.title}
                          </h3>
                          <p
                            className={`text-[15px] md:text-[18px] leading-[22px] md:leading-[28px] transition-all duration-500 ${
                              isActive
                                ? "text-[#042718] opacity-80"
                                : "text-[#042718]/0 h-0 overflow-hidden"
                            }`}
                          >
                            {step.description}
                          </p>
                        </div>
                      </button>
                      <div
                        className={`relative w-full overflow-hidden rounded-t-[20px] md:rounded-t-[32px] max-w-[548px] transition-all duration-500 ${
                          isActive ? "h-[240px] opacity-100 mt-6" : "h-0 opacity-0 mt-0"
                        }`}
                      >
                        {step.visual}
                      </div>
                    </div>
                  </PwReveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
