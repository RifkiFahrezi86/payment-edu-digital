import { SsReveal } from "./SsReveal";
import { IcArrowUpRight, IcSparkle, IcTrendingUp, IcZap } from "./ss-icons";

const VALUES = [
  { icon: IcZap, title: "Transaksi Lebih Mudah", description: "Kebutuhan digital sehari-hari dalam satu genggaman." },
  { icon: IcTrendingUp, title: "Peluang Lebih Luas", description: "Terhubung dengan komunitas dan ekosistem yang terus berkembang." },
  { icon: IcSparkle, title: "Masa Depan Lebih Baik", description: "Belajar, bertumbuh, dan melangkah lebih awal bersama." },
];

export function SsEcosystem() {
  return (
    <section id="tentang" className="ss-reference-ecosystem scroll-mt-24">
      <div className="ss-ecosystem-layout">
        <SsReveal className="ss-ecosystem-device">
          <div className="ss-ecosystem-brand-phone" aria-hidden="true">
            <span className="ss-ecosystem-notch" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/saku-sultan-app-icon.png" alt="" width={74} height={74} />
            <strong>SAKU SULTAN</strong>
            <small>Dompet Digital,<br />Sumber Cuan</small>
          </div>
        </SsReveal>
        <SsReveal className="ss-ecosystem-copy" delay={100}>
          <p className="ss-eyebrow">Lebih dari transaksi</p>
          <h2>Ekosistem yang<br />Memberikan Peluang</h2>
          <p>Bergabunglah dan rasakan lebih dari kemudahan transaksi. Bangun keterampilan dan temukan berbagai peluang melalui ekosistem SAKU SULTAN.</p>
          <a href="#registrasi" className="ss-btn ss-btn-lime">Mulai Sekarang <IcArrowUpRight width={17} height={17} /></a>
        </SsReveal>
        <div className="ss-ecosystem-values-wrap">
          <p className="ss-script ss-ecosystem-hashtag">#CUANPERDETIK</p>
          <div className="ss-ecosystem-values">
            {VALUES.map(({ icon: Icon, title, description }, index) => (
              <SsReveal key={title} delay={index * 80}>
                <article className="ss-ecosystem-value">
                  <Icon width={36} height={36} />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              </SsReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
