import { SsReveal } from "./SsReveal";
import { IcArrowUpRight, IcSparkle, IcTrendingUp, IcZap } from "./ss-icons";

const CARDS = [
  {
    icon: IcZap,
    title: "Transaksi Lebih Mudah",
    desc: "Semua kebutuhan pembayaran dan transfer selesai dalam hitungan detik, langsung dari genggaman.",
  },
  {
    icon: IcTrendingUp,
    title: "Peluang Lebih Luas",
    desc: "Setiap transaksi membuka akses ke program loyalitas, komunitas, dan peluang penghasilan tambahan.",
  },
  {
    icon: IcSparkle,
    title: "Masa Depan Lebih Baik",
    desc: "Bersama ekosistem SAKU SULTAN, tumbuh dan melangkah lebih awal menuju masa depan digital.",
  },
];

/** Section gelap "Ekosistem yang Memberikan Peluang" + #CuanPerDetik. */
export function SsEcosystem() {
  return (
    <section id="tentang" className="ss-grid-glow scroll-mt-24 overflow-hidden bg-[var(--ss-dark)]">
      <div className="mx-auto w-full max-w-[1320px] px-5 py-20 md:px-8 lg:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Ponsel brand */}
          <SsReveal className="relative order-2 mx-auto lg:order-1">
            <div className="absolute -inset-10 -z-10 rounded-full bg-[var(--ss-lime)]/12 blur-[90px]" />
            <div className="ss-phone w-[280px] rotate-[-5deg]">
              <div className="flex h-[540px] flex-col items-center justify-center gap-5 bg-gradient-to-b from-[#0c3b2a] via-[#071f16] to-[#04130c] px-8 text-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/saku-sultan-app-icon.png"
                  alt=""
                  className="h-24 w-24 rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,.5)]"
                />
                <div>
                  <p className="text-[22px] font-extrabold tracking-wide text-white">
                    SAKU <span className="text-[var(--ss-lime)]">SULTAN</span>
                  </p>
                  <p className="mt-1 text-[10.5px] font-bold uppercase tracking-[0.22em] text-white/50">
                    Dompet Digital, Sumber Cuan
                  </p>
                </div>
                <span className="rounded-full border border-[var(--ss-lime)]/40 bg-[var(--ss-lime)]/10 px-5 py-2 text-[12px] font-extrabold text-[var(--ss-lime)]">
                  #CuanPerDetik
                </span>
              </div>
            </div>
            <p className="ss-script absolute -right-24 bottom-10 hidden w-40 rotate-6 text-[30px] text-white xl:block">
              #CuanPer<span className="text-[var(--ss-lime)]">Detik</span>
            </p>
          </SsReveal>

          {/* Copywriting */}
          <div className="order-1 lg:order-2">
            <SsReveal>
              <p className="ss-eyebrow flex items-center gap-3 text-[var(--ss-lime)]">
                <span className="h-px w-10 bg-[var(--ss-lime)]/60" />
                Lebih dari Transaksi
              </p>
            </SsReveal>
            <SsReveal delay={80}>
              <h2 className="ss-h2 mt-5 text-white">
                Ekosistem yang
                <br />
                <span className="text-[var(--ss-lime)]">Memberikan Peluang</span>
              </h2>
            </SsReveal>
            <SsReveal delay={160}>
              <p className="mt-5 max-w-[520px] text-[15.5px] leading-relaxed text-white/70">
                SAKU SULTAN bukan hanya alat pembayaran — ini adalah ekosistem digital tempat setiap transaksi
                bernilai lebih: membuka peluang, memberdayakan komunitas, dan membangun masa depan bersama.
              </p>
            </SsReveal>
            <SsReveal delay={240}>
              <a href="#bantuan" className="ss-btn ss-btn-lime mt-8">
                Mulai Sekarang
                <IcArrowUpRight width={17} height={17} />
              </a>
            </SsReveal>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {CARDS.map(({ icon: Icon, title, desc }, i) => (
            <SsReveal key={title} delay={i * 100}>
              <article className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--ss-lime)]/40 hover:bg-white/[0.07]">
                <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[var(--ss-lime)]/12 p-3.5 text-[var(--ss-lime)]">
                  <Icon width={22} height={22} />
                </span>
                <h3 className="mt-5 text-[19px] font-extrabold text-white">{title}</h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-white/65">{desc}</p>
              </article>
            </SsReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
