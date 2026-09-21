import Link from "next/link";
import { SsReveal } from "./SsReveal";
import { IcArrowRight, IcGift, IcGraduation, IcShieldCheck } from "./ss-icons";
import { SsArtEdudigi, SsArtProgram, SsArtSecurity } from "./SsCardArt";
import { CORE_PARTNERS } from "./ss-partners-data";

const PARTNERS = [
  ...CORE_PARTNERS,
  { name: "QRIS", sub: "Standar Pembayaran Nasional", logo: "/images/payway/pay/qris.svg" },
];

export function SsPartners() {
  return (
    <section id="mitra" className="ss-reference-partners scroll-mt-24">
      <div className="ss-partners-inner">
        <div className="ss-partners-heading">
          <SsReveal className="ss-partners-copy">
            <p className="ss-eyebrow">Kolaborasi Strategis</p>
            <h2>Bersama Mitra Terpercaya<br />untuk Layanan Terbaik</h2>
            <p>Bersama mitra dan penyedia teknologi untuk menghadirkan pengalaman transaksi yang lebih mudah, aman, dan nyaman.</p>
          </SsReveal>
          <div className="ss-partners-directory">
            <ul className="ss-partner-marks">
              {PARTNERS.map(partner => (
                <li key={partner.name} data-partner={partner.name}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={partner.logo} alt={`Logo ${partner.name}`} width={136} height={44} loading="lazy" decoding="async" className="ss-partner-original-logo" />
                  {partner.sub && <small>{partner.sub}</small>}
                </li>
              ))}
            </ul>
            <details className="ss-partners-more">
              <summary>Lihat Metode Pembayaran <IcArrowRight width={15} height={15} /></summary>
              <div className="ss-partner-methods">
                {[
                  ["bca", "BCA"], ["mandiri", "Mandiri"], ["bri", "BRI"], ["bni", "BNI"],
                  ["dana", "DANA"], ["gopay", "GoPay"], ["ovo", "OVO"], ["shopeepay", "ShopeePay"],
                ].map(([file, label]) => <div key={file}>{/* eslint-disable-next-line @next/next/no-img-element */}<img src={`/images/payway/pay/${file}.svg`} alt={label} width={90} height={30} loading="lazy" /></div>)}
              </div>
            </details>
          </div>
        </div>

        <div className="ss-program-cards">
          <SsReveal>
            <Link href="/kebijakan-privasi" className="ss-program-card">
              <div className="ss-program-copy">
                <IcShieldCheck width={24} height={24} />
                <h3>Keamanan<br />Prioritas Kami</h3>
                <p>Kenali cara kami menjaga data dan kenyamanan Anda dalam bertransaksi.</p>
                <span>Pelajari Keamanan <IcArrowRight width={14} height={14} /></span>
              </div>
              <div className="ss-program-art ss-program-scene"><SsArtSecurity /></div>
            </Link>
          </SsReveal>
          <SsReveal delay={80}>
            <a href="#edudigi" className="ss-program-card">
              <div className="ss-program-copy">
                <IcGraduation width={24} height={24} />
                <h3>EduDigi</h3>
                <p>Literasi digital untuk semua. Tingkatkan pengetahuan dan keterampilan bersama EduDigi.</p>
                <span>Jelajahi EduDigi <IcArrowRight width={14} height={14} /></span>
              </div>
              <div className="ss-program-art ss-program-scene"><SsArtEdudigi /></div>
            </a>
          </SsReveal>
          <SsReveal delay={160}>
            <a href="#fasilitas" className="ss-program-card">
              <div className="ss-program-copy">
                <IcGift width={24} height={24} />
                <h3>Program & Manfaat</h3>
                <p>Temukan kelas, fasilitas, dan berbagai peluang dalam ekosistem Saku Sultan.</p>
                <span>Lihat Program <IcArrowRight width={14} height={14} /></span>
              </div>
              <div className="ss-program-art ss-program-scene"><SsArtProgram /></div>
            </a>
          </SsReveal>
        </div>
      </div>
    </section>
  );
}
