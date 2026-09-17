"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.saku_sultan";

const NAV_LINKS = [
  { label: "Beranda", href: "#beranda" },
  { label: "Produk & Fitur", href: "#fitur" },
  { label: "Sistem VTN", href: "#sistem-vtn" },
  { label: "Bantuan", href: "#bantuan" },
  { label: "Syarat & Ketentuan", href: "/syarat-ketentuan" },
] as const;

const SECTIONS = [
  { id: "beranda", href: "#beranda" },
  { id: "fitur", href: "#fitur" },
  { id: "sistem-vtn", href: "#sistem-vtn" },
  { id: "bantuan", href: "#bantuan" },
] as const;

function normalizeHash(hash: string): string {
  const clean = hash.toLowerCase().replace(/^#/, "");
  if (clean === "fitur" || clean === "produk") return "#fitur";
  if (["sistem-vtn", "vtn", "alur-transaksi", "promo"].includes(clean)) return "#sistem-vtn";
  if (clean === "bantuan" || clean === "faq") return "#bantuan";
  if (clean === "beranda" || clean === "hero") return "#beranda";
  return "";
}

export function PwHeroNavigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("#beranda");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const isClickingRef = useRef(false);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastSectionRef = useRef<string>("#beranda");

  const closeMenu = () => setIsOpen(false);

  /** Di luar halaman utama, hash link harus diarahkan balik ke "/" dulu. */
  const resolveHref = (href: string) =>
    href.startsWith("#") && pathname !== "/" ? `/${href}` : href;

  const isItemActive = (href: string) => {
    if (href.startsWith("/")) return pathname === href;
    if (pathname !== "/") return false;
    if (activeHash === href) return true;
    if (href === "#fitur" && activeHash === "#produk") return true;
    return false;
  };

  const handleNavClick = (
    _e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith("#")) {
      closeMenu();
      return;
    }
    const normalized = normalizeHash(href) || href;
    setActiveHash(normalized);
    lastSectionRef.current = normalized;

    isClickingRef.current = true;
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }
    clickTimeoutRef.current = setTimeout(() => {
      isClickingRef.current = false;
    }, 1000);

    closeMenu();
  };

  const updateActiveSection = useCallback(() => {
    if (isClickingRef.current) return;

    if (window.scrollY < 80) {
      if (lastSectionRef.current !== "#beranda") {
        lastSectionRef.current = "#beranda";
        setActiveHash("#beranda");
        if (typeof window !== "undefined" && window.history?.replaceState) {
          window.history.replaceState(null, "", window.location.pathname);
        }
      }
      return;
    }

    const isBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 60;
    if (isBottom) {
      if (lastSectionRef.current !== "#bantuan") {
        lastSectionRef.current = "#bantuan";
        setActiveHash("#bantuan");
        if (typeof window !== "undefined" && window.history?.replaceState) {
          window.history.replaceState(null, "", "#bantuan");
        }
      }
      return;
    }

    let current = "#beranda";
    for (const section of SECTIONS) {
      const el = document.getElementById(section.id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top <= 160) {
        current = section.href;
      }
    }

    if (current !== lastSectionRef.current) {
      lastSectionRef.current = current;
      setActiveHash(current);
      if (typeof window !== "undefined" && window.history?.replaceState) {
        window.history.replaceState(null, "", current);
      }
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const initialHash = window.location.hash;
    const normalized = normalizeHash(initialHash);
    if (normalized) {
      setActiveHash(normalized);
      lastSectionRef.current = normalized;
      if (initialHash !== normalized) {
        const el = document.getElementById(normalized.slice(1));
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          window.history.replaceState(null, "", normalized);
        }
      }
    } else {
      updateActiveSection();
    }

    const onScroll = () => {
      updateActiveSection();
    };

    const onHashChange = () => {
      const hash = window.location.hash;
      const norm = normalizeHash(hash);
      if (norm) {
        setActiveHash(norm);
        lastSectionRef.current = norm;
        if (hash !== norm) {
          const el = document.getElementById(norm.slice(1));
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            window.history.replaceState(null, "", norm);
          }
        }
      } else if (window.scrollY < 80) {
        setActiveHash("#beranda");
        lastSectionRef.current = "#beranda";
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onHashChange);
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
    };
  }, [pathname, updateActiveSection]);

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

  return (
    <header
      data-scrolled={scrolled}
      className={`saku-hero-navbar fixed inset-x-0 top-0 z-50 w-full px-5 pt-6 pb-3 sm:px-8 lg:px-12 xl:px-24 transition-[background-color,box-shadow,padding] duration-300 ${
        scrolled
          ? "bg-[#031E13]/90 backdrop-blur-md shadow-[0_8px_30px_rgba(4,39,24,0.28)] pt-3"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Navigasi utama"
        className="relative mx-auto flex h-[60px] w-full max-w-[1248px] items-center justify-between sm:h-16"
      >
        <div className="flex items-center xl:gap-8">
          <Link
            href={resolveHref("#beranda")}
            onClick={(e) => handleNavClick(e, "#beranda")}
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
          </Link>

          <div className="hidden items-center gap-6 xl:flex">
            {NAV_LINKS.map((item) => {
              const active = isItemActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={resolveHref(item.href)}
                  aria-current={active ? "page" : undefined}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`saku-hero-nav-link saku-hero-nav-text whitespace-nowrap py-2 text-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#168344]/20 ${
                    active
                      ? "is-active font-bold"
                      : "font-medium"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="hidden items-center gap-5 xl:flex">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="saku-glass-action saku-nav-register group flex h-12 items-center gap-4 rounded-xl border py-1.5 pl-5 pr-1.5 text-sm font-semibold backdrop-blur-sm transition-[transform,background-color] duration-200 hover:-translate-y-0.5"
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
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#062B1B] text-white shadow-[0_10px_22px_rgba(4,39,24,0.14)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#168344]/30 xl:hidden"
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
            className="absolute inset-x-0 top-[calc(100%+0.75rem)] rounded-[22px] border border-white/80 bg-white/96 p-3 shadow-[0_22px_54px_rgba(4,39,24,0.16)] backdrop-blur-2xl xl:hidden"
          >
            <div className="grid">
              {NAV_LINKS.map((item) => {
                const active = isItemActive(item.href);
                return (
                  <Link
                    key={item.label}
                    href={resolveHref(item.href)}
                    aria-current={active ? "page" : undefined}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex min-h-12 items-center justify-between border-b border-[#0A5332]/10 px-3 text-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#168344]/20 ${
                      active
                        ? "font-bold text-[#073B24]"
                        : "font-medium text-[#29493C] hover:text-[#073B24]"
                    }`}
                  >
                    {item.label}
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-[#168344]">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Link>
                );
              })}
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="saku-glass-action group mt-2 flex min-h-12 items-center justify-between rounded-xl border py-1.5 pl-4 pr-2 text-sm font-semibold"
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
