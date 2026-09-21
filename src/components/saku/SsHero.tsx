import { SsReveal } from "./SsReveal";
import { SsPhonePreview } from "./SsPhonePreview";
import { SsVideoLauncher } from "./SsVideoModal";
import { IcArrowUpRight, IcPlay } from "./ss-icons";

export function SsHero() {
  return (
    <section id="beranda" className="ss-reference-hero relative isolate overflow-hidden bg-[var(--ss-dark)]">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <video autoPlay muted loop playsInline preload="metadata" poster="/images/saku/hero-bg.jpg" className="ss-hero-background h-full w-full object-cover">
          <source src="/videos/payway/header.mp4" type="video/mp4" />
        </video>
        <div className="ss-reference-hero-scrim absolute inset-0" />
      </div>

      <div className="ss-reference-hero-layout">
        <div className="ss-reference-hero-copy">
          <SsReveal>
            <p className="ss-eyebrow ss-startup-label">Startup · Ekosistem Digital Indonesia</p>
          </SsReveal>
          <SsReveal delay={80}>
            <h1 className="ss-h1 ss-reference-headline">
              <span className="ss-headline-line"><span className="ss-headline-initial">M</span>elangkah</span>
              <span className="ss-headline-line">Lebih Awal.</span>
              <span className="ss-headline-line">Bergerak Secara</span>
              <span className="ss-headline-line ss-headline-accent">Digital.</span>
            </h1>
          </SsReveal>
          <SsReveal delay={160}>
            <p className="ss-reference-hero-description">
              Satu ekosistem digital untuk transaksi, pembayaran, transfer, dan berbagai peluang di masa depan.
            </p>
          </SsReveal>
          <SsReveal delay={220}>
            <div className="ss-hero-actions">
              <a href="#registrasi" className="ss-btn ss-btn-lime">Mulai Sekarang <IcArrowUpRight width={18} height={18} /></a>
              <a href="#fitur" className="ss-btn ss-btn-outline-light">Jelajahi Fitur</a>
            </div>
          </SsReveal>
          <SsReveal delay={280}>
            <ul className="ss-hero-trust" aria-label="Keunggulan Saku Sultan">
              {["Aman", "Cepat", "Mudah", "Terpercaya"].map(value => <li key={value}>{value}</li>)}
            </ul>
          </SsReveal>
        </div>

        <div className="ss-reference-hero-visual">
          <SsPhonePreview />
          <blockquote className="ss-hero-quote ss-script">
            Dari Indonesia<br />untuk masa depan<br />yang lebih baik.
            <span aria-hidden="true" />
          </blockquote>
          <SsVideoLauncher src="/videos/payway/header.mp4" title="Video Tentang Saku Sultan" className="ss-hero-video-card">
            <span className="ss-hero-play"><IcPlay width={17} height={17} /></span>
            <span><strong>Tonton Video</strong><small>Tentang Saku Sultan</small></span>
          </SsVideoLauncher>
        </div>
      </div>
    </section>
  );
}
