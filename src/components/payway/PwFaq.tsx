"use client";

import { useState, type KeyboardEvent } from "react";
import { PwReveal } from "@/components/payway/pw-reveal";

/**
 * Section 08 — FAQ ("Everything you need to know about Payway").
 * Sumber markup: docs/research/jiro-payway/sections/08-faq.html (kelas 1:1)
 * Konten expanded: docs/research/jiro-payway/faq-states.json
 * Referensi visual: docs/design-references/jiro-payway/sec-08-faq.png
 *
 * Model interaksi: accordion click-driven SINGLE-OPEN — capture menunjukkan
 * tepat satu item terbuka (01: dark bg-[#042718] + video BG + ikon X) dan
 * sisanya collapsed (ikon plus, border-transparent). Klik item lain menutup
 * yang sebelumnya; klik item terbuka menutupnya (ikon X = affordance close).
 *
 * Animasi tinggi jawaban: grid-template-rows 0fr -> 1fr, 300ms ease-in-out
 * (mengganti residu framer `style="height: auto; opacity: 0.8"` pada <p>).
 * Saat collapsed, -mt-[8px]/[10px] menetralkan gap kolom pertanyaan sehingga
 * geometri closed persis markup (item closed asli tidak merender <p>).
 * Warna kontainer/padding dianimasikan kelas asli `transition-all duration-500`.
 */

type FaqItem = { q: string; a: string };

const FAQ_ITEMS: FaqItem[] = [
  {
    q: "Bagaimana cara daftar Saku Sultan?",
    a: "Unduh aplikasi dari Google Play Store, buat akun baru, lalu verifikasi data diri Anda dalam hitungan menit.",
  },
  {
    q: "Layanan apa saja yang tersedia?",
    a: "Pembayaran tagihan, barcode scan di merchant, transfer uang, top-up saldo, transaksi e-commerce, serta keamanan biometrik untuk menjaga akun tetap aman.",
  },
  {
    q: "Apakah aman bertransaksi lewat Saku Sultan?",
    a: "Ya, Saku Sultan menggunakan sistem keamanan berlapis, sensor sidik jari, dan garansi uang kembali 100%.",
  },
  {
    q: "Bagaimana cara mengisi saldo (top up)?",
    a: "Saldo dapat diisi melalui transfer bank, e-wallet, atau QRIS langsung dari menu Top Up di aplikasi.",
  },
  {
    q: "Bagaimana jika transaksi saya gagal?",
    a: "Dana otomatis dikembalikan. Hubungi layanan pelanggan melalui WhatsApp untuk bantuan lebih lanjut.",
  },
  {
    q: "Apakah ada biaya tambahan?",
    a: "Tidak ada biaya langganan. Anda hanya membayar sejumlah transaksi yang dilakukan.",
  },
];

export function PwFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) =>
    setOpenIndex((prev) => (prev === index ? null : index));

  return (
    <section
      id="bantuan"
      className="w-full py-16 lg:py-24 bg-white overflow-hidden scroll-mt-24 "
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 lg:mb-24 text-center max-w-[800px]">
          <PwReveal className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0FDF4] border border-[#DCFCE7] mb-6">
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
              className="lucide lucide-sparkles w-4 h-4 text-[#16A34A]"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
              <path d="M20 3v4" />
              <path d="M22 5h-4" />
              <path d="M4 17v2" />
              <path d="M5 18H3" />
            </svg>
            <span className="font-sans font-semibold text-sm text-[#16A34A] tracking-wider uppercase">
            FAQ
            </span>
          </PwReveal>
          <PwReveal delay={100}>
            {/* prettier-ignore */}
            <h2 className="font-heading text-[28px] sm:text-[42px] lg:text-[52px] font-semibold text-[#042718] leading-[1.1] sm:leading-[58px] tracking-[-0.8px] sm:tracking-[-1.8px]">Hal yang Sering Ditanyakan <br className="hidden lg:block" /> Tentang Saku Sultan</h2>
          </PwReveal>
          <PwReveal delay={200}>
            {/* prettier-ignore */}
            <p className="font-sans text-base sm:text-xl text-[#042718] opacity-70 max-w-[600px]">Temukan jawaban cepat seputar layanan, keamanan, <br className="hidden md:block" /> dan cara menggunakan Saku Sultan.</p>
          </PwReveal>
        </div>

        <div className="w-full max-w-[1300px] flex flex-col lg:flex-row gap-12 lg:gap-0">
          {/* Kolom kanan — daftar accordion (order-1 di mobile) */}
          <div className="order-1 lg:order-2 w-full lg:w-[718px] lg:pl-[32px] flex flex-col gap-6">
            <h3 className="font-heading font-semibold text-xl md:text-2xl text-[#042718]/40 mb-2">
              Pertanyaan Umum
            </h3>
            <div className="flex flex-col gap-4 md:gap-6">
              {FAQ_ITEMS.map((item, index) => {
                const open = openIndex === index;
                const number = `${String(index + 1).padStart(2, "0")}.`;
                return (
                  <div
                    key={item.q}
                    role="button"
                    tabIndex={0}
                    aria-expanded={open}
                    onClick={() => toggle(index)}
                    onKeyDown={(event: KeyboardEvent<HTMLDivElement>) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        toggle(index);
                      }
                    }}
                    className={
                      open
                        ? "w-full lg:w-[686px] cursor-pointer transition-all duration-500 overflow-hidden relative p-5 md:p-6 rounded-[20px] border border-black/5 bg-[#042718] shadow-[0_4px_20px_0_rgba(0,0,0,0.06)]"
                        : "w-full lg:w-[686px] cursor-pointer transition-all duration-500 overflow-hidden relative p-4 md:p-6 flex items-center border border-transparent"
                    }
                  >
                    {open ? (
                      <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-[#042718]/60 z-10" />
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover opacity-60"
                        >
                          <source
                            src="/videos/payway/header-01-bg-payway.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    ) : null}
                    <div className="relative z-20 w-full flex items-start gap-4 md:gap-8">
                      <div
                        className={`flex gap-3 md:gap-5 w-full flex-shrink-0 ${
                          open ? "items-start w-5/6" : "items-center w-full"
                        }`}
                      >
                        <span
                          className={`font-heading font-semibold text-xl md:text-2xl leading-[26px] md:leading-[30px] tracking-[-0.6px] md:tracking-[-0.8px] ${
                            open ? "text-white" : "text-[#042718]"
                          }`}
                        >
                          {number}
                        </span>
                        <div className="flex flex-col gap-[8px] md:gap-[10px]">
                          <h4
                            className={`font-heading font-semibold text-xl md:text-2xl leading-[26px] md:leading-[30px] tracking-[-0.6px] md:tracking-[-0.8px] ${
                              open ? "text-white" : "text-[#042718]"
                            }`}
                          >
                            {item.q}
                          </h4>
                          <div
                            className={`grid transition-all duration-300 ease-in-out ${
                              open
                                ? "grid-rows-[1fr] mt-0"
                                : "grid-rows-[0fr] -mt-[8px] md:-mt-[10px]"
                            }`}
                          >
                            <div className="overflow-hidden min-h-0">
                              <p
                                className={`font-sans text-base md:text-lg text-white md:leading-7 transition-opacity duration-300 ${
                                  open ? "opacity-80" : "opacity-0"
                                }`}
                              >
                                {item.a}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ml-auto mt-1 flex-shrink-0">
                        {open ? (
                          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
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
                              className="lucide lucide-x w-4 h-4 md:w-5 md:h-5 text-white"
                            >
                              <path d="M18 6 6 18" />
                              <path d="m6 6 12 12" />
                            </svg>
                          </div>
                        ) : (
                          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#F3F4F6] flex items-center justify-center">
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
                              className="lucide lucide-plus w-4 h-4 md:w-5 md:h-5 text-[#374151]"
                            >
                              <path d="M5 12h14" />
                              <path d="M12 5v14" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Kolom kiri — foto support + CTA (order-2 di mobile) */}
          <div className="order-2 lg:order-1 w-full lg:w-[506px] lg:pr-[32px] flex flex-col gap-12 items-start mt-8 lg:mt-0">
            <PwReveal className="w-full lg:w-[474px] h-[300px] sm:h-[400px] lg:h-[480px] rounded-[24px] overflow-hidden shadow-xl relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Smart male customer support representative"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                className="object-cover grayscale-[0.05] hover:grayscale-0 transition-all duration-700 hover:scale-105 absolute inset-0 h-full w-full text-transparent"
                src="/images/payway/unsplash-photo-1543269865-cbf427effbad.jpg"
              />
            </PwReveal>
            <div className="flex flex-col items-start gap-[48px]">
              <div className="flex flex-col gap-[12px]">
                <h3 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[28px] text-[#042718] leading-tight">
                  Butuh Bantuan?
                </h3>
                {/* prettier-ignore */}
                <p className="font-sans text-lg text-[#042718] opacity-70 leading-normal">Tim support kami siap membantu Anda 24/7. <br className="hidden sm:block" /> Hubungi kami via WhatsApp.</p>
              </div>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-[32px] bg-[#042718] hover:bg-[#063a24] text-white pl-8 pr-4 py-4 rounded-full transition-all duration-300 shadow-lg"
                tabIndex={0}
              >
                <span className="font-sans font-semibold text-base">
                  Hubungi CS
                </span>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right w-5 h-5 text-[#042718]">
                    <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
