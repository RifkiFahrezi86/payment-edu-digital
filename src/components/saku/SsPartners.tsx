<<<<<<< HEAD
import Link from "next/link";
import { SsReveal } from "./SsReveal";
import { IcArrowRight, IcGift, IcGraduation, IcShieldCheck } from "./ss-icons";
import { CORE_PARTNERS } from "./ss-partners-data";

const PARTNERS = [
  ...CORE_PARTNERS,
=======
import Image from "next/image";
import Link from "next/link";
import { SsReveal } from "./SsReveal";
import { IcArrowRight, IcGift, IcGraduation, IcShieldCheck } from "./ss-icons";
import { BILLER_PARTNERS, CORE_PARTNERS, PAYMENT_PARTNERS, REGULATOR_PARTNERS } from "./ss-partners-data";
import { SsPartnerSupport, TRUSTED_ECOSYSTEM } from "./SsPartnerSupport";

const PARTNERS = [
  ...CORE_PARTNERS,
  ...REGULATOR_PARTNERS,
>>>>>>> 0b800e0aa4c3c6928feecc52ecfec250dd8a36ee
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
<<<<<<< HEAD
                  <img src={partner.logo} alt={`Logo ${partner.name}`} width={136} height={44} className="ss-partner-original-logo" />
=======
                  <img src={partner.logo} alt={`Logo ${partner.name}`} width={136} height={44} loading="lazy" decoding="async" className="ss-partner-original-logo" />
>>>>>>> 0b800e0aa4c3c6928feecc52ecfec250dd8a36ee
                  {partner.sub && <small>{partner.sub}</small>}
                </li>
              ))}
            </ul>
            <details className="ss-partners-more">
              <summary>Lihat Metode Pembayaran <IcArrowRight width={15} height={15} /></summary>
              <div className="ss-partner-methods">
<<<<<<< HEAD
                {[
                  ["bca", "BCA"], ["mandiri", "Mandiri"], ["bri", "BRI"], ["bni", "BNI"],
                  ["dana", "DANA"], ["gopay", "GoPay"], ["ovo", "OVO"], ["shopeepay", "ShopeePay"],
                ].map(([file, label]) => <div key={file}>{/* eslint-disable-next-line @next/next/no-img-element */}<img src={`/images/payway/pay/${file}.svg`} alt={label} width={90} height={30} loading="lazy" /></div>)}
=======
                {PAYMENT_PARTNERS.map(({ name, logo }) => (
                  <div key={name}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={logo} alt={name} width={90} height={30} loading="lazy" decoding="async" />
                  </div>
                ))}
              </div>
            </details>
            <details className="ss-partners-more">
              <summary>Lihat Tagihan yang Dilayani <IcArrowRight width={15} height={15} /></summary>
              <div className="ss-partner-methods">
                {BILLER_PARTNERS.map(({ name, logo }) => (
                  <div key={name}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={logo} alt={name} width={90} height={30} loading="lazy" decoding="async" />
                  </div>
                ))}
>>>>>>> 0b800e0aa4c3c6928feecc52ecfec250dd8a36ee
              </div>
            </details>
          </div>
        </div>

<<<<<<< HEAD
=======
        <SsReveal>
          <SsPartnerSupport heading="Ekosistem Terpercaya" logos={TRUSTED_ECOSYSTEM} />
        </SsReveal>

>>>>>>> 0b800e0aa4c3c6928feecc52ecfec250dd8a36ee
        <div className="ss-program-cards">
          <SsReveal>
            <Link href="/kebijakan-privasi" className="ss-program-card">
              <div className="ss-program-copy">
                <IcShieldCheck width={24} height={24} />
                <h3>Keamanan<br />Prioritas Kami</h3>
                <p>Kenali cara kami menjaga data dan kenyamanan Anda dalam bertransaksi.</p>
                <span>Pelajari Keamanan <IcArrowRight width={14} height={14} /></span>
              </div>
<<<<<<< HEAD
              <div className="ss-program-art ss-program-shield" aria-hidden="true"><IcShieldCheck width={108} height={108} /></div>
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
              <div className="ss-program-art ss-program-student">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/images/saku/reference-edudigi-portrait.png" alt="Peserta program EduDigi" loading="lazy" /></div>
            </a>
          </SsReveal>
=======
              <div className="ss-program-art ss-program-scene"><Image src="/images/saku/card-security.webp" alt="" width={215} height={280} loading="lazy" /></div>
            </Link>
          </SsReveal>
          <SsReveal delay={80}>
            <Link href="/produk/edudigi" className="ss-program-card">
              <div className="ss-program-copy">
                <IcGraduation width={24} height={24} />
                <h3>EduDigi</h3>
                <p>Literasi digital untuk semua. Tingkatkan pengetahuan dan keterampilan bersama EduDigi.</p>
                <span>Jelajahi EduDigi <IcArrowRight width={14} height={14} /></span>
              </div>
              <div className="ss-program-art ss-program-scene"><Image src="/images/saku/card-edudigi.webp" alt="" width={225} height={280} loading="lazy" /></div>
            </Link>
          </SsReveal>
>>>>>>> 0b800e0aa4c3c6928feecc52ecfec250dd8a36ee
          <SsReveal delay={160}>
            <a href="#fasilitas" className="ss-program-card">
              <div className="ss-program-copy">
                <IcGift width={24} height={24} />
                <h3>Program & Manfaat</h3>
                <p>Temukan kelas, fasilitas, dan berbagai peluang dalam ekosistem Saku Sultan.</p>
                <span>Lihat Program <IcArrowRight width={14} height={14} /></span>
              </div>
<<<<<<< HEAD
              <div className="ss-program-art ss-program-gift" aria-hidden="true"><IcGift width={105} height={105} /></div>
=======
              <div className="ss-program-art ss-program-scene"><Image src="/images/saku/card-program.webp" alt="" width={250} height={285} loading="lazy" /></div>
>>>>>>> 0b800e0aa4c3c6928feecc52ecfec250dd8a36ee
            </a>
          </SsReveal>
        </div>
      </div>
    </section>
  );
}
