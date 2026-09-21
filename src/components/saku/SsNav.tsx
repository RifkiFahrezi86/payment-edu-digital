"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IcArrowUpRight, IcChevronDown, IcSearch, IcX } from "./ss-icons";
import { openShowcaseTab, type ShowcaseTab } from "./ss-showcase-bus";

type NavLink = { label: string; href: string; children?: { label: string; tab: ShowcaseTab }[] };
const NAV_LINKS: NavLink[] = [
  { label: "Beranda", href: "#beranda" },
  { label: "Produk & Fitur", href: "#fitur", children: [
    { label: "Transfer", tab: "transfer" }, { label: "QRIS & Q-Tra", tab: "qtra" },
    { label: "PPOB", tab: "ppob" }, { label: "Passolo", tab: "passolo" }, { label: "EduDigi", tab: "edudigi" },
  ] },
  { label: "Sistem VTN", href: "#sistem-vtn" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Bantuan", href: "#bantuan" },
  { label: "Syarat & Ketentuan", href: "/syarat-ketentuan" },
];

const SHORTCUTS = [
  { label: "Transfer, QRIS & Q-Tra", href: "#fitur" },
  { label: "Pulsa, Data & Tagihan PPOB", href: "#layanan-utama" },
  { label: "Registrasi Saku Sultan", href: "#registrasi" },
  { label: "Sistem VTN", href: "#sistem-vtn" },
  { label: "Kelas dan Legalitas EduDigi", href: "#edudigi" },
  { label: "Mitra & Keamanan", href: "#mitra" },
  { label: "FAQ & Bantuan", href: "#bantuan" },
  { label: "Syarat & Ketentuan", href: "/syarat-ketentuan" },
];

export function SsNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [quickOpen, setQuickOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("#beranda");
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLButtonElement>(null);
  const resolveHref = (href: string) => href.startsWith("#") && pathname !== "/" ? `/${href}` : href;
  const closeMenus = () => { setOpen(false); setQuickOpen(false); setQuery(""); };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      if (pathname !== "/") return;
      const sections = [
        ["beranda", "#beranda"], ["layanan-utama", "#fitur"], ["fitur", "#fitur"],
        ["tentang", "#tentang"], ["sistem-vtn", "#sistem-vtn"], ["bantuan", "#bantuan"],
      ];
      let current = "#beranda";
      let closest = -Infinity;
      for (const [id, href] of sections) {
        const top = document.getElementById(id)?.getBoundingClientRect().top;
        if (top !== undefined && top <= 130 && top > closest) { closest = top; current = href; }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    if (!open && !quickOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (quickOpen) searchRef.current?.focus(); else menuRef.current?.focus();
        setOpen(false); setQuickOpen(false);
      }
    };
    const onOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setOpen(false); setQuickOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onOutside);
    return () => { window.removeEventListener("keydown", onKey); window.removeEventListener("pointerdown", onOutside); };
  }, [open, quickOpen]);

  const results = SHORTCUTS.filter(item => item.label.toLocaleLowerCase("id").includes(query.trim().toLocaleLowerCase("id")));
  const isActive = (href: string) => href.startsWith("/") ? pathname === href : pathname === "/" && active === href;

  return (
    <header ref={headerRef} className="ss-header" data-scrolled={scrolled}>
      <nav className="ss-nav" aria-label="Navigasi utama">
        <Link href={resolveHref("#beranda")} onClick={closeMenus} className="ss-nav-brand" aria-label="Saku Sultan, kembali ke beranda">
          <Image src="/images/saku-sultan-app-icon.png" alt="" width={42} height={42} priority />
          <span><strong>SAKU SULTAN</strong><small>Dompet Digital, Sumber Cuan</small></span>
        </Link>

        <ul className="ss-nav-desktop">
          {NAV_LINKS.map(link => (
            <li key={link.label} className="ss-nav-group">
              <Link href={resolveHref(link.href)} onClick={closeMenus} aria-current={isActive(link.href) ? "page" : undefined} className="ss-nav-link">
                {link.label}{link.children && <IcChevronDown width={13} height={13} aria-hidden="true" />}
              </Link>
              {link.children && (
                <ul className="ss-nav-dropdown" aria-label="Pilihan produk">
                  {link.children.map(child => (
                    <li key={child.tab}><button type="button" onClick={() => { openShowcaseTab(child.tab); closeMenus(); }}>{child.label}</button></li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="ss-nav-actions">
          <div className="ss-search-wrap">
            <button ref={searchRef} type="button" aria-label="Cari layanan" aria-expanded={quickOpen} aria-controls="ss-search-panel" onClick={() => { setQuickOpen(value => !value); setOpen(false); }} className="ss-nav-icon-button">
              <IcSearch width={18} height={18} />
            </button>
            {quickOpen && (
              <div id="ss-search-panel" className="ss-search-panel">
                <label htmlFor="ss-search-input">Apa yang ingin Anda cari?</label>
                <input id="ss-search-input" type="search" value={query} autoFocus placeholder="Cari fitur, program, bantuan…" onChange={event => setQuery(event.target.value)} onKeyDown={event => {
                  if (event.key === "Enter") { event.preventDefault(); document.querySelector<HTMLAnchorElement>("#ss-search-results a")?.click(); }
                }} />
                <ul id="ss-search-results">
                  {results.map(item => <li key={item.href}><Link href={resolveHref(item.href)} onClick={closeMenus}>{item.label}<IcArrowUpRight width={14} height={14} /></Link></li>)}
                </ul>
                {!results.length && <p role="status">Belum ada hasil. Coba kata “transfer” atau “EduDigi”.</p>}
              </div>
            )}
          </div>
          <Link href={resolveHref("#registrasi")} className="ss-btn ss-nav-register" onClick={closeMenus}>Daftar Sekarang<IcArrowUpRight width={17} height={17} /></Link>
          <button ref={menuRef} type="button" aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"} aria-expanded={open} aria-controls="ss-mobile-menu" onClick={() => { setOpen(value => !value); setQuickOpen(false); }} className="ss-nav-icon-button ss-nav-burger">
            {open ? <IcX width={20} height={20} /> : <span aria-hidden="true"><i /><i /><i /></span>}
          </button>
        </div>
      </nav>
      {open && (
        <nav id="ss-mobile-menu" className="ss-mobile-menu" aria-label="Navigasi mobile">
          {NAV_LINKS.map(link => <Link key={link.href} href={resolveHref(link.href)} aria-current={isActive(link.href) ? "page" : undefined} onClick={closeMenus}>{link.label}<IcArrowUpRight width={16} height={16} /></Link>)}
          <Link href={resolveHref("#registrasi")} className="ss-btn ss-nav-register ss-mobile-register" onClick={closeMenus}>Daftar Sekarang<IcArrowUpRight width={16} height={16} /></Link>
        </nav>
      )}
    </header>
  );
}
