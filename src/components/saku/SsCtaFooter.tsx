import Image from "next/image";
import Link from "next/link";
import { SsStoreLinks } from "./SsStoreLinks";
import { SsFeatureLink } from "./SsFeatureLink";
import type { ShowcaseTab } from "./ss-showcase-bus";
import { IcArrowUpRight, IcFacebook, IcGlobe, IcInstagram, IcXSocial, IcYoutube } from "./ss-icons";

type FooterLink = { label: string; href: string; tab?: ShowcaseTab };
const FOOTER_COLS: { title: string; links: FooterLink[] }[] = [
  { title: "Produk & Fitur", links: [
    { label: "Transfer", href: "#fitur", tab: "transfer" },
    { label: "QRIS", href: "#fitur", tab: "qtra" },
    { label: "Q-Tra", href: "#fitur", tab: "qtra" },
    { label: "Pulsa & Data", href: "#fitur", tab: "ppob" },
    { label: "PPOB", href: "#fitur", tab: "ppob" },
    { label: "Passolo", href: "#fitur", tab: "passolo" },
  ] },
  { title: "Perusahaan", links: [
    { label: "Tentang Kami", href: "#tentang" },
    { label: "EduDigi", href: "#edudigi" },
    { label: "Sistem VTN", href: "#sistem-vtn" },
    { label: "Mitra Kami", href: "#mitra" },
    { label: "Kontak", href: "mailto:cs@sakusultan.id" },
  ] },
  { title: "Bantuan", links: [
    { label: "FAQ", href: "#bantuan" },
    { label: "Cara Registrasi", href: "#registrasi" },
    { label: "Pusat Bantuan", href: "mailto:cs@sakusultan.id" },
    { label: "Keamanan", href: "/kebijakan-privasi" },
  ] },
  { title: "Legal", links: [
    { label: "Kebijakan Privasi", href: "/kebijakan-privasi" },
    { label: "Syarat & Ketentuan", href: "/syarat-ketentuan" },
    { label: "Legalitas EduDigi", href: "#legalitas-edudigi" },
  ] },
];

const SOCIALS = [
  { label: "YouTube", href: "https://www.youtube.com/channel/UCxnNwYx24S0y9Subcv04OIA", icon: IcYoutube },
  { label: "Instagram", href: "https://www.instagram.com/sakusultanind/", icon: IcInstagram },
  { label: "Facebook", href: "https://web.facebook.com/sakusultanind", icon: IcFacebook },
  { label: "X", href: "https://x.com/sakusultanind", icon: IcXSocial },
];

export function SsCtaFooter() {
  return (
    <footer id="kontak" className="ss-reference-footer">
      <div className="ss-footer-inner">
        <div className="ss-footer-contact">
          <div><p className="ss-eyebrow">Langkah kecil, peluang lebih besar.</p><h2>Siap bergerak secara digital?</h2></div>
          <a href="mailto:cs@sakusultan.id">cs@sakusultan.id<IcArrowUpRight width={22} height={22} /></a>
        </div>
        <div className="ss-footer-grid">
          <div className="ss-footer-brand">
            <Link href="#beranda" className="ss-nav-brand" aria-label="Saku Sultan, kembali ke beranda">
              <Image src="/images/saku-sultan-app-icon.png" alt="" width={42} height={42} loading="lazy" />
              <span><strong>SAKU SULTAN</strong><small>Dompet Digital, Sumber Cuan</small></span>
            </Link>
            <p>Melangkah lebih awal, bergerak secara digital. Bersama SAKU SULTAN, wujudkan masa depan yang lebih baik.</p>
            <ul className="ss-footer-socials">
              {SOCIALS.map(({ label, href, icon: Icon }) => <li key={label}><a href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} Saku Sultan`}><Icon width={18} height={18} /></a></li>)}
            </ul>
          </div>
          {FOOTER_COLS.map(column => (
            <nav key={column.title} aria-label={column.title}>
              <h3>{column.title}</h3>
              <ul>{column.links.map(link => <li key={link.label}>{link.tab ? <SsFeatureLink tab={link.tab}>{link.label}</SsFeatureLink> : <Link href={link.href}>{link.label}</Link>}</li>)}</ul>
            </nav>
          ))}
          <div className="ss-footer-download"><h3>Download Aplikasi</h3><SsStoreLinks /></div>
        </div>
        <div className="ss-footer-bottom">
          <p>© 2026 Saku Sultan. All rights reserved.</p>
          <strong>#CUANPERDETIK</strong>
          <span><IcGlobe width={15} height={15} /> Bahasa Indonesia</span>
        </div>
      </div>
    </footer>
  );
}
