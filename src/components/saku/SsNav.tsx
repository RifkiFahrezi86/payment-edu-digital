"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { IcArrowUpRight, IcChevronDown, IcSearch } from "./ss-icons";

const NAV_LINKS = [
  { label: "Beranda", href: "#beranda" },
  {
    label: "Produk & Fitur",
    href: "#fitur",
    children: [
      { label: "Transfer", href: "#fitur" },
      { label: "QRIS", href: "#fitur" },
      { label: "Q-Tra", href: "#fitur" },
      { label: "PPOB", href: "#fitur" },
      { label: "Passolo", href: "#fitur" },
      { label: "EduDigi", href: "#edudigi" },
    ],
  },
  { label: "VTN", href: "#vtn" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Bantuan", href: "#bantuan" },
];

/** Navbar gelap ala referensi: logo + tagline, menu, navigasi cepat, CTA lime. */
export function SsNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [quickOpen, setQuickOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-[#04130c]/95 shadow-[0_10px_40px_rgba(0,0,0,.35)] backdrop-blur-md" : "bg-[#06231a]/80 backdrop-blur-sm"
      )}
    >
      <nav className="mx-auto flex h-[76px] w-full max-w-[1320px] items-center gap-6 px-5 md:px-8">
        {/* Brand */}
        <a href="#beranda" className="flex shrink-0 items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/saku-sultan-app-icon.png"
            alt="Logo Saku Sultan"
            className="h-11 w-11 rounded-xl object-cover shadow-[0_6px_18px_rgba(0,0,0,.4)]"
          />
          <span className="leading-tight">
            <span className="block text-[17px] font-extrabold tracking-wide text-white">
              SAKU <span className="text-[var(--ss-lime)]">SULTAN</span>
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--ss-lime)]/90">
              Dompet Digital, Sumber Cuan
            </span>
          </span>
        </a>

        {/* Menu desktop */}
        <ul className="mx-auto hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link, i) => (
            <li key={link.label} className="group relative">
              <a
                href={link.href}
                className={cn(
                  "relative flex items-center gap-1.5 rounded-full px-4 py-2 text-[14.5px] font-semibold transition-colors",
                  i === 0 ? "text-[var(--ss-lime)]" : "text-white/85 hover:text-white"
                )}
              >
                {link.label}
                {link.children ? <IcChevronDown width={14} height={14} className="opacity-70" /> : null}
                {i === 0 ? (
                  <span className="absolute inset-x-4 -bottom-0.5 h-[2.5px] rounded-full bg-[var(--ss-lime)]" />
                ) : null}
              </a>
              {link.children ? (
                <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <ul className="min-w-[210px] rounded-2xl border border-white/10 bg-[#062018] p-2 shadow-[0_24px_60px_rgba(0,0,0,.5)]">
                    {link.children.map((c) => (
                      <li key={c.label}>
                        <a
                          href={c.href}
                          className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-white/80 transition-colors hover:bg-white/5 hover:text-[var(--ss-lime)]"
                        >
                          {c.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </li>
          ))}
        </ul>

        {/* Aksi kanan */}
        <div className="ml-auto flex items-center gap-3 lg:ml-0">
          <div className="relative hidden sm:block">
            <button
              type="button"
              aria-label="Navigasi cepat"
              aria-expanded={quickOpen}
              onClick={() => setQuickOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white/85 transition-colors hover:border-[var(--ss-lime)] hover:text-[var(--ss-lime)]"
            >
              <IcSearch width={17} height={17} />
            </button>
            {quickOpen ? (
              <div className="absolute right-0 top-full z-50 pt-3">
                <ul className="w-[220px] rounded-2xl border border-white/10 bg-[#062018] p-2 shadow-[0_24px_60px_rgba(0,0,0,.5)]">
                  <li className="px-4 pb-1.5 pt-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/40">
                    Navigasi Cepat
                  </li>
                  {[
                    { label: "Fitur Unggulan", href: "#fitur" },
                    { label: "Alur Transaksi", href: "#proses" },
                    { label: "Sistem VTN", href: "#vtn" },
                    { label: "EduDigi", href: "#edudigi" },
                    { label: "Mitra & Keamanan", href: "#mitra" },
                    { label: "Testimoni", href: "#testimoni" },
                    { label: "Bantuan & Kontak", href: "#bantuan" },
                  ].map((q) => (
                    <li key={q.href}>
                      <a
                        href={q.href}
                        onClick={() => setQuickOpen(false)}
                        className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-white/80 transition-colors hover:bg-white/5 hover:text-[var(--ss-lime)]"
                      >
                        {q.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          <a href="#bantuan" className="ss-btn ss-btn-lime !px-5 !py-2.5 !text-[14px]">
            Daftar Sekarang
            <IcArrowUpRight width={16} height={16} />
          </a>
          {/* Burger mobile */}
          <button
            type="button"
            aria-label="Buka menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-white/25 lg:hidden"
          >
            <span className={cn("h-[2px] w-4 rounded bg-white transition-transform", open && "translate-y-[7px] rotate-45")} />
            <span className={cn("h-[2px] w-4 rounded bg-white transition-opacity", open && "opacity-0")} />
            <span className={cn("h-[2px] w-4 rounded bg-white transition-transform", open && "-translate-y-[7px] -rotate-45")} />
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <div
        className={cn(
          "overflow-hidden border-t border-white/10 bg-[#04130c] transition-[max-height] duration-300 lg:hidden",
          open ? "max-h-[420px]" : "max-h-0 border-t-0"
        )}
      >
        <ul className="space-y-1 px-5 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-[15px] font-semibold text-white/85 hover:bg-white/5 hover:text-[var(--ss-lime)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
