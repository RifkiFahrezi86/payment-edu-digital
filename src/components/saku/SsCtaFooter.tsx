import { SsReveal } from "./SsReveal";
import {
  IcArrowUpRight,
  IcFacebook,
  IcInstagram,
  IcMail,
  IcMapPin,
  IcMessage,
  IcPhoneCall,
  IcTiktok,
  IcX,
  IcYoutube,
} from "./ss-icons";

const CONTACTS = [
  { icon: IcMessage, title: "Live Chat", sub: "Respon cepat via aplikasi" },
  { icon: IcPhoneCall, title: "Telepon", sub: "Senin – Jumat, 08.00 – 17.00 WITA" },
  { icon: IcMail, title: "Email", sub: "cs@sakusultan.id" },
  { icon: IcMapPin, title: "Kantor Pusat", sub: "Makassar, Indonesia" },
];

const FOOTER_COLS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Produk & Fitur",
    links: [
      { label: "Transfer", href: "#fitur" },
      { label: "QRIS", href: "#fitur" },
      { label: "Q-Tra", href: "#fitur" },
      { label: "Pulsa & Data", href: "#fitur" },
      { label: "PPOB", href: "#fitur" },
      { label: "Passolo", href: "#fitur" },
    ],
  },
  {
    title: "Perusahaan",
    links: [
      { label: "Tentang Kami", href: "#tentang" },
      { label: "EduDigi", href: "#edudigi" },
      { label: "VTN", href: "#vtn" },
      { label: "Karier", href: "#tentang" },
      { label: "Berita", href: "#tentang" },
    ],
  },
  {
    title: "Bantuan",
    links: [
      { label: "FAQ", href: "#bantuan" },
      { label: "Pusat Bantuan", href: "#bantuan" },
      { label: "Keamanan", href: "#mitra" },
      { label: "Status Layanan", href: "#bantuan" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Kebijakan Privasi", href: "/kebijakan-privasi" },
      { label: "Syarat & Ketentuan", href: "/syarat-ketentuan" },
      { label: "Legalitas", href: "#edudigi" },
    ],
  },
];

const SOCIALS = [
  { icon: IcInstagram, label: "Instagram" },
  { icon: IcFacebook, label: "Facebook" },
  { icon: IcYoutube, label: "YouTube" },
  { icon: IcTiktok, label: "TikTok" },
  { icon: IcX, label: "X" },
];

/** CTA "Butuh Bantuan?" + footer gelap dengan watermark. */
export function SsCtaFooter() {
  return (
    <footer id="bantuan" className="scroll-mt-24">
      {/* CTA di atas video */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/saku/cta-bg.jpg"
            aria-hidden
            className="h-full w-full object-cover"
          >
            <source src="/videos/payway/footer.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#04130c]/74" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#04130c] to-transparent" />
        </div>
        <div className="mx-auto w-full max-w-[1320px] px-5 pb-20 pt-24 text-center md:px-8">
          <SsReveal>
            <p className="ss-eyebrow text-white/80">Butuh Bantuan?</p>
          </SsReveal>
          <SsReveal delay={100}>
            <a
              href="mailto:cs@sakusultan.id"
              className="group mt-6 inline-flex flex-wrap items-center justify-center gap-5 text-[clamp(2rem,6vw,4.5rem)] font-extrabold tracking-tight text-white transition-colors hover:text-[var(--ss-lime)]"
            >
              cs@sakusultan.id
              <span className="flex h-[0.9em] w-[0.9em] items-center justify-center rounded-full bg-[var(--ss-lime)] text-[var(--ss-ink)] transition-transform group-hover:rotate-45">
                <IcArrowUpRight width={28} height={28} />
              </span>
            </a>
          </SsReveal>
          <SsReveal delay={180}>
            <p className="mt-4 text-[15px] font-semibold text-white/70">Tim kami siap membantu Anda.</p>
          </SsReveal>
          <SsReveal delay={240}>
            <ul className="mx-auto mt-14 grid max-w-[1000px] gap-8 text-left sm:grid-cols-2 lg:grid-cols-4">
              {CONTACTS.map(({ icon: Icon, title, sub }) => (
                <li key={title} className="flex items-center gap-4">
                  <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full border border-white/25 p-3.5 text-[var(--ss-lime)]">
                    <Icon width={20} height={20} />
                  </span>
                  <span className="leading-tight">
                    <span className="block text-[14.5px] font-extrabold text-white">{title}</span>
                    <span className="mt-1 block text-[12px] font-semibold text-white/60">{sub}</span>
                  </span>
                </li>
              ))}
            </ul>
          </SsReveal>
        </div>
      </section>

      {/* Footer utama */}
      <section className="relative overflow-hidden bg-[#04130c]">
        {/* Watermark */}
        <div className="pointer-events-none absolute inset-x-0 top-6 flex justify-center overflow-hidden">
          <span className="ss-watermark">Saku Sultan</span>
        </div>
        <p className="ss-script pointer-events-none absolute right-[8%] top-16 hidden rotate-[-4deg] text-[30px] text-[var(--ss-lime)] lg:block">
          Dari Indonesia untuk Masa Depan
        </p>

        <div className="relative mx-auto w-full max-w-[1320px] px-5 pb-10 pt-40 md:px-8 lg:pt-48">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/saku-sultan-app-icon.png" alt="Logo Saku Sultan" className="h-12 w-12 rounded-xl" />
                <div className="leading-tight">
                  <p className="text-[18px] font-extrabold tracking-wide text-white">
                    SAKU <span className="text-[var(--ss-lime)]">SULTAN</span>
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--ss-lime)]/85">
                    Dompet Digital, Sumber Cuan
                  </p>
                </div>
              </div>
              <p className="mt-5 max-w-[340px] text-[13.5px] leading-relaxed text-white/60">
                Platform transaksi digital yang menghubungkan peluang, memberdayakan masyarakat, dan membangun masa
                depan yang lebih baik. Melangkah lebih awal, bergerak secara digital.
              </p>
              <div className="mt-6 flex gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/payway/google-play.svg" alt="Dapatkan di Google Play" className="h-11 w-auto" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/payway/app-store.svg" alt="Unduh di App Store" className="h-11 w-auto" />
              </div>
              <ul className="mt-7 flex gap-3">
                {SOCIALS.map(({ icon: Icon, label }) => (
                  <li key={label}>
                    <a
                      href="#beranda"
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-[var(--ss-lime)] hover:text-[var(--ss-lime)]"
                    >
                      <Icon width={16} height={16} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kolom tautan */}
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
              {FOOTER_COLS.map((col) => (
                <nav key={col.title} aria-label={col.title}>
                  <p className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-[var(--ss-lime)]">
                    {col.title}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {col.links.map((l) => (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          className="text-[13.5px] font-semibold text-white/65 transition-colors hover:text-white"
                        >
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 lg:flex-row">
            <p className="text-[12.5px] font-semibold text-white/50">© 2026 Saku Sultan. All rights reserved.</p>
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12.5px] font-semibold text-white/50">
              <li>
                <a href="/syarat-ketentuan" className="transition-colors hover:text-white">
                  Syarat & Ketentuan
                </a>
              </li>
              <li>
                <a href="/kebijakan-privasi" className="transition-colors hover:text-white">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="/kebijakan-privasi" className="transition-colors hover:text-white">
                  Kebijakan Cookie
                </a>
              </li>
            </ul>
            <p className="text-[12.5px] font-extrabold text-[var(--ss-lime)]">#TransaksiLebihBermakna</p>
          </div>
        </div>
      </section>
    </footer>
  );
}
