import { SsReveal } from "./SsReveal";
import { SsVideoLauncher } from "./SsVideoModal";
import { IcArrowUpRight, IcChevronRight, IcGlobe, IcPlay } from "./ss-icons";

/**
 * Mockup ponsel: screenshot aplikasi sudah di-bake ke dalam frame 3D
 * oleh scripts/process-phone-frames.py (inverse-homography, tanpa celah).
 */
const PHONE_FRONT = { src: "/images/saku/phone-front.png", alt: "Aplikasi Saku Sultan — mode terang", w: 620 };
const PHONE_BACK = { src: "/images/saku/phone-back.png", alt: "Aplikasi Saku Sultan — mode gelap", w: 520 };

function FramedPhone({ cfg }: { cfg: typeof PHONE_FRONT }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={cfg.src} alt={cfg.alt} style={{ width: cfg.w }} className="max-w-none" />
  );
}

/** Hero: video latar Indonesia + headline + dua mockup ponsel miring. */
export function SsHero() {
  return (
    <section id="beranda" className="relative isolate overflow-hidden bg-[var(--ss-dark)]">
      {/* Latar video */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/saku/hero-bg.jpg"
          aria-hidden
          className="h-full w-full object-cover"
        >
          <source src="/videos/payway/header.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#04130c]/95 via-[#06231a]/78 to-[#06231a]/35" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#04130c] to-transparent" />
      </div>

      <div className="mx-auto grid w-full max-w-[1320px] gap-14 px-5 pb-16 pt-[150px] md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pb-24 lg:pt-[170px]">
        {/* Kiri: copywriting */}
        <div>
          <SsReveal>
            <p className="ss-eyebrow flex items-center gap-3 text-[var(--ss-lime)]">
              <span className="h-px w-10 bg-[var(--ss-lime)]/70" />
              Ekosistem Digital Saku Sultan
            </p>
          </SsReveal>
          <SsReveal delay={80}>
            <h1 className="ss-h1 mt-5 !text-[clamp(2.3rem,1.3rem+3.2vw,3.9rem)] text-white">
              Melangkah Lebih Awal.
              <br />
              Bergerak Secara <span className="text-[var(--ss-lime)]">Digital.</span>
            </h1>
          </SsReveal>
          <SsReveal delay={160}>
            <p className="mt-6 max-w-[520px] text-[17px] leading-relaxed text-white/85">
              Satu ekosistem digital untuk transaksi, pembayaran, transfer, dan berbagai peluang di masa depan.
            </p>
          </SsReveal>
          <SsReveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#bantuan" className="ss-btn ss-btn-lime">
                Mulai Sekarang
                <IcArrowUpRight width={17} height={17} />
              </a>
              <a href="#fitur" className="ss-btn ss-btn-outline-light">
                Jelajahi Fitur
              </a>
            </div>
          </SsReveal>
          <SsReveal delay={320}>
            <ul className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13.5px] font-bold tracking-wide text-white/80">
              {["Aman", "Cepat", "Mudah", "Terpercaya"].map((t, i) => (
                <li key={t} className="flex items-center gap-3">
                  {i > 0 ? <span className="h-1 w-1 rounded-full bg-[var(--ss-lime)]" /> : null}
                  {t}
                </li>
              ))}
            </ul>
          </SsReveal>

          {/* Pill video */}
          <SsReveal delay={400}>
            <SsVideoLauncher
              src="/videos/payway/header.mp4"
              title="Video Tentang SAKU SULTAN"
              className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 py-2 pl-2 pr-5 text-[13px] font-bold text-white backdrop-blur-md transition-colors hover:border-[var(--ss-lime)] hover:text-[var(--ss-lime)]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ss-lime)] text-[var(--ss-ink)]">
                <IcPlay width={14} height={14} />
              </span>
              Tonton Video Tentang SAKU SULTAN
            </SsVideoLauncher>
          </SsReveal>
        </div>

        {/* Kanan: dua mockup ponsel miring */}
        <div className="relative mx-auto lg:mx-0 lg:justify-self-end">
          <SsReveal delay={200}>
            <div className="ss-hero-phones">
              <div className="absolute inset-x-10 inset-y-16 -z-10 rounded-full bg-[var(--ss-lime)]/14 blur-[90px]" />

              {/* Ponsel DARK di belakang, condong kanan */}
              <div className="ss-frame-back">
                <FramedPhone cfg={PHONE_BACK} />
              </div>

              {/* Ponsel LIGHT utama, condong kiri */}
              <div className="ss-frame-front">
                <FramedPhone cfg={PHONE_FRONT} />
              </div>

              {/* Script tulisan tangan — di atas ponsel, aman dari navbar */}
              <p className="ss-script pointer-events-none absolute right-1 top-[-46px] z-20 hidden w-max rotate-[-5deg] text-right text-[22px] leading-[1.22] text-white drop-shadow-[0_2px_10px_rgba(2,16,10,.65)] sm:block">
                Dari <span className="text-[var(--ss-lime)]">Indonesia</span>
                <br />
                untuk Masa Depan
                <br />
                yang <span className="text-[var(--ss-lime)]">Lebih Baik</span>
              </p>

              {/* Chip produk Indonesia */}
              <div className="ss-float absolute -bottom-5 right-4 z-20 hidden items-center gap-3 rounded-2xl border border-white/15 bg-[#04130c]/85 py-3 pl-3 pr-4 text-white backdrop-blur-md sm:flex">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                  <IcGlobe width={18} height={18} />
                </span>
                <span className="text-[13px] font-extrabold leading-tight">
                  Produk Indonesia
                  <br />
                  Peluang Global
                </span>
                <IcChevronRight width={16} height={16} className="text-white/70" />
              </div>
            </div>
          </SsReveal>
        </div>
      </div>
    </section>
  );
}
