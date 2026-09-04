"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.saku_sultan";
const SAKU_SULTAN_URL = "https://sakusultan.id";

const NAV_LINKS = [
  { label: "Beranda", href: "#beranda" },
  { label: "Produk & Fitur", href: "#fitur" },
  { label: "Promo", href: "#promo" },
  { label: "Bantuan", href: "#bantuan" },
] as const;

export function PwHeroNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setIsOpen(false);
      menuButtonRef.current?.focus();
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="saku-hero-navbar sticky top-0 z-50 w-full px-5 pt-6 sm:px-8 lg:px-12 xl:px-24">
      <nav
        aria-label="Navigasi utama"
        className="relative mx-auto flex h-[60px] w-full max-w-[1248px] items-center justify-between sm:h-16"
      >
        <div className="flex items-center lg:gap-10 xl:gap-12">
          <a
            href="#beranda"
            onClick={closeMenu}
            className="flex w-[150px] items-center gap-2.5 py-2 sm:w-[172px] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#168344]/20"
            aria-label="Saku Sultan, kembali ke beranda"
          >
            <Image
              src="/images/saku-sultan-app-icon.png"
              alt=""
              width={36}
              height={36}
              priority
              quality={100}
              className="h-9 w-9 shrink-0 rounded-[9px]"
            />
            <span className="whitespace-nowrap text-[15px] font-bold tracking-[0.015em] text-white sm:text-base">
              SAKU SULTAN
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex xl:gap-9">
            {NAV_LINKS.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                aria-current={index === 0 ? "page" : undefined}
                className={`saku-hero-nav-link saku-hero-nav-text py-2 text-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#168344]/20 ${
                  index === 0
                    ? "is-active font-bold"
                    : "font-medium"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={SAKU_SULTAN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="saku-hero-nav-text py-2 text-sm font-semibold text-white transition-colors duration-200 hover:text-white/85 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
          >
            Masuk
          </a>

          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-12 items-center gap-4 rounded-[26px] border border-[#0A5332]/20 bg-white/55 py-1.5 pl-5 pr-1.5 text-sm font-semibold text-[#062B1B] shadow-[0_8px_24px_rgba(4,39,24,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-sm transition-[transform,background-color,border-color] duration-200 hover:-translate-y-0.5 hover:border-[#0A5332]/35 hover:bg-white/72 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#168344]/25"
          >
            Daftar Sekarang
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#073B24] text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </span>
          </a>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          aria-expanded={isOpen}
          aria-controls="hero-mobile-menu"
          onClick={() => setIsOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#062B1B] text-white shadow-[0_10px_22px_rgba(4,39,24,0.14)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#168344]/30 lg:hidden"
        >
          <span className="sr-only">{isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}</span>
          <span aria-hidden="true" className="relative block h-4 w-5">
            <span className={`absolute left-0 top-0.5 h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${isOpen ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ${isOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute bottom-0.5 left-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${isOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </span>
        </button>

        {isOpen ? (
          <div
            id="hero-mobile-menu"
            className="absolute inset-x-0 top-[calc(100%+0.75rem)] rounded-[22px] border border-white/80 bg-white/96 p-3 shadow-[0_22px_54px_rgba(4,39,24,0.16)] backdrop-blur-2xl lg:hidden"
          >
            <div className="grid">
              {NAV_LINKS.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className={`flex min-h-12 items-center justify-between border-b border-[#0A5332]/10 px-3 text-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#168344]/20 ${
                    index === 0 ? "font-bold text-[#073B24]" : "font-medium text-[#29493C] hover:text-[#073B24]"
                  }`}
                >
                  {item.label}
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-[#168344]">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              ))}
              <a
                href={SAKU_SULTAN_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex min-h-12 items-center px-3 text-sm font-semibold text-[#173B2B] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#168344]/20"
              >
                Masuk
              </a>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="group mt-2 flex min-h-12 items-center justify-between rounded-[18px] border border-[#0A5332]/16 bg-[#F1F7ED] py-1.5 pl-4 pr-2 text-sm font-semibold text-[#062B1B] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#168344]/25"
              >
                Daftar Sekarang
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#073B24] text-white">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
