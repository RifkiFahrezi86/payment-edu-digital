import { SsReveal } from "./SsReveal";
import { IcArrowRight, IcChart, IcGraduation, IcShieldCheck } from "./ss-icons";

const PARTNERS = [
  { name: "BANK INDONESIA", sub: "Regulator Pembayaran" },
  { name: "BRICK", sub: "Infrastruktur Finansial" },
  { name: "BMT", sub: "Buana Media Teknologi" },
  { name: "QRIS", sub: "Standar Pembayaran Nasional", logo: "/images/payway/pay/qris.svg" },
];

/** Kolaborasi Strategis — mitra + 3 kartu (Keamanan, EduDigi, Sistem VTN). */
export function SsPartners() {
  return (
    <section id="mitra" className="scroll-mt-24 bg-white">
      <div className="mx-auto w-full max-w-[1320px] px-5 py-20 md:px-8 lg:py-24">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <SsReveal>
            <p className="ss-eyebrow flex items-center gap-3 text-[var(--ss-green)]">
              <span className="h-px w-9 bg-[var(--ss-green)]/60" />
              Kolaborasi Strategis
            </p>
            <h2 className="ss-h2 mt-4 max-w-[640px] text-[var(--ss-ink)]">
              Bersama Mitra Terpercaya untuk <span className="text-[var(--ss-green)]">Layanan Terbaik</span>
            </h2>
            <p className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-[var(--ss-muted)]">
              Kami berkolaborasi dengan regulator dan penyedia teknologi terkemuka agar setiap transaksi Anda aman,
              cepat, dan sesuai standar nasional.
            </p>
          </SsReveal>
          <SsReveal delay={120}>
            <a
              href="#mitra"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--ss-mint)] px-6 py-3 text-[13.5px] font-extrabold text-[var(--ss-green-deep)] transition-colors hover:bg-[var(--ss-pine)] hover:text-[var(--ss-lime)]"
            >
              Lihat Semua Mitra
              <IcArrowRight width={15} height={15} />
            </a>
          </SsReveal>
        </div>

        {/* Logo mitra */}
        <SsReveal delay={140}>
          <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {PARTNERS.map((p) => (
              <li
                key={p.name}
                className="flex items-center justify-center gap-3 rounded-2xl border border-[var(--ss-line)] bg-[var(--ss-mist)] px-5 py-5 text-center"
              >
                {p.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.logo} alt={p.name} className="h-7 w-auto" />
                ) : (
                  <span className="leading-tight">
                    <span className="block text-[15px] font-extrabold tracking-wide text-[var(--ss-ink)]/80">
                      {p.name}
                    </span>
                    <span className="block text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--ss-muted)]">
                      {p.sub}
                    </span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </SsReveal>

        {/* 3 kartu program */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <SsReveal delay={0}>
            <a href="/kebijakan-privasi" className="block h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-[28px] bg-gradient-to-br from-[var(--ss-pine)] to-[#04130c] p-8 text-white transition-transform duration-300 hover:-translate-y-1">
              <span className="flex h-24 w-24 items-center justify-center self-center rounded-[28px] bg-[var(--ss-lime)]/12 text-[var(--ss-lime)]">
                <IcShieldCheck width={46} height={46} />
              </span>
              <h3 className="mt-8 text-[21px] font-extrabold">
                Keamanan, <span className="text-[var(--ss-lime)]">Prioritas Kami</span>
              </h3>
              <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-white/70">
                Transaksi Anda dilindungi teknologi keamanan terstandar industri — enkripsi, verifikasi berlapis,
                dan pemantauan 24/7.
              </p>
                <span className="mt-6 inline-flex items-center gap-2 text-[13.5px] font-extrabold text-[var(--ss-lime)]">
                  Pelajari Keamanan
                  <IcArrowRight width={15} height={15} className="transition-transform group-hover:translate-x-1" />
                </span>
              </article>
            </a>
          </SsReveal>

          <SsReveal delay={100}>
            <a href="#edudigi" className="block h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[var(--ss-line)] bg-white shadow-[0_16px_44px_rgba(8,23,15,.07)] transition-transform duration-300 hover:-translate-y-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/saku/edudigi-students.jpg"
                alt="Peserta EduDigi"
                className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="flex flex-1 flex-col p-7">
                <span className="inline-flex w-max items-center gap-2 rounded-full bg-[var(--ss-mint)] px-3.5 py-1.5 text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-[var(--ss-green-deep)]">
                  <IcGraduation width={13} height={13} /> EduDigi
                </span>
                <h3 className="mt-4 text-[21px] font-extrabold text-[var(--ss-ink)]">
                  Literasi Digital <span className="text-[var(--ss-green)]">untuk Semua</span>
                </h3>
                <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-[var(--ss-muted)]">
                  Tingkatkan pengetahuan dan keterampilan digital Anda bersama program EduDigi.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-[13.5px] font-extrabold text-[var(--ss-green)]">
                  Jelajahi EduDigi
                  <IcArrowRight width={15} height={15} className="transition-transform group-hover:translate-x-1" />
                </span>
                </div>
              </article>
            </a>
          </SsReveal>

          <SsReveal delay={200}>
            <a href="#vtn" className="block h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-[28px] bg-[var(--ss-mint)] p-8 transition-shadow hover:shadow-[0_24px_60px_rgba(8,23,15,.12)]">
                <span className="flex h-24 w-24 items-center justify-center self-center rounded-[28px] bg-white text-[var(--ss-green-deep)] shadow-[0_14px_36px_rgba(8,23,15,.1)]">
                  <IcChart width={46} height={46} />
                </span>
                <h3 className="mt-8 text-[21px] font-extrabold text-[var(--ss-ink)]">
                  Sistem <span className="text-[var(--ss-green)]">VTN</span>
                </h3>
                <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-[var(--ss-muted)]">
                  Volume Transaksi Nasional — setiap transaksi memperkuat ekosistem dan membuka peluang lebih luas
                  bagi seluruh pengguna.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-[13.5px] font-extrabold text-[var(--ss-green)]">
                  Pelajari VTN
                  <IcArrowRight width={15} height={15} className="transition-transform group-hover:translate-x-1" />
                </span>
              </article>
            </a>
          </SsReveal>
        </div>
      </div>
    </section>
  );
}
