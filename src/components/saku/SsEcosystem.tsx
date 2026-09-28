import Image from "next/image";
import { SsReveal } from "./SsReveal";
import { IcArrowUpRight } from "./ss-icons";

const VALUES = [
  {
    icon: "/images/saku/icon-ecosystem-transaksi.webp",
    title: "Transaksi Lebih Mudah",
    description: "Kebutuhan digital sehari-hari dalam satu genggaman.",
  },
  {
    icon: "/images/saku/icon-eco-growth.webp",
    title: "Peluang Lebih Luas",
    description: "Terhubung dengan komunitas dan ekosistem yang terus berkembang.",
  },
  {
    icon: "/images/saku/icon-eco-star.webp",
    title: "Masa Depan Lebih Baik",
    description: "Belajar, bertumbuh, dan melangkah lebih awal bersama.",
  },
];

export function SsEcosystem() {
  return (
    <section id="tentang" className="ss-reference-ecosystem scroll-mt-24">
      <div className="ss-ecosystem-layout">
        <SsReveal className="ss-ecosystem-device">
          <Image
            src="/images/tangan-saku-sultan.png"
            alt="Tangan memegang aplikasi Saku Sultan"
            width={1086}
            height={1448}
            loading="lazy"
            className="ss-ecosystem-hand"
          />
        </SsReveal>
        <SsReveal className="ss-ecosystem-copy" delay={100}>
          <p className="ss-eyebrow">Lebih dari transaksi</p>
          <h2>Ekosistem yang<br />Memberikan Peluang</h2>
          <p>SAKU SULTAN adalah platform digital PT IDE KREATIF ASIA yang menghubungkan pengguna dengan layanan transaksi dan pembayaran melalui mitra penyedia jasa pembayaran berizin. Bangun keterampilan dan temukan peluang melalui ekosistemnya.</p>
          <a href="#registrasi" className="ss-btn ss-btn-lime">Mulai Sekarang <IcArrowUpRight width={17} height={17} /></a>
        </SsReveal>
        <div className="ss-ecosystem-values-wrap">
          <p className="ss-ecosystem-hashtag">#CUANPERDETIK</p>
          <div className="ss-ecosystem-values">
            {VALUES.map(({ icon, title, description }, index) => (
              <SsReveal key={title} delay={index * 80}>
                <article className="ss-ecosystem-value">
                  <Image src={icon} alt="" width={52} height={52} loading="lazy" className="ss-ecosystem-icon" />
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
