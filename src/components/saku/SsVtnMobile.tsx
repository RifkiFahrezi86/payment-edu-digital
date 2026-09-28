import Image from "next/image";
import { SsReveal } from "./SsReveal";
import {
  IcBank,
  IcCart,
  IcChart,
  IcDots,
  IcDroplet,
  IcHeartHand,
  IcInfinity,
  IcPhoneSignal,
  IcPlane,
  IcShieldCheck,
  IcTv,
  IcUsers,
  IcZap,
} from "./ss-icons";

// Urutan, label (termasuk pemenggalan baris), dan warna mengikuti panel "Sumber VTN" pada desain HP.
// \u00AD (soft hyphen) dan \u200B hanya aktif bila kolom terlalu sempit (layar ≤360px).
const SOURCES = [
  { label: "Belanja\nOnline/\u200BOffline", icon: IcCart, tone: "green" },
  { label: "Pulsa & Data", icon: IcPhoneSignal, tone: "blue" },
  { label: "PLN", icon: IcZap, tone: "green" },
  { label: "PDAM", icon: IcDroplet, tone: "blue" },
  { label: "TV & Internet", icon: IcTv, tone: "green" },
  { label: "Tiket\nTranspor\u00ADtasi", icon: IcPlane, tone: "blue" },
  { label: "Travel &\nPari\u00ADwisata", icon: IcUsers, tone: "orange" },
  { label: "Perbankan", icon: IcBank, tone: "green" },
  { label: "Donasi &\nSosial", icon: IcHeartHand, tone: "red" },
  { label: "Lainnya", icon: IcDots, tone: "gray" },
] as const;

const ADVANTAGES = [
  { title: "Skala Nasional", text: "Potensi Tanpa Batas", icon: IcChart, tone: "green" },
  { title: "Berulang Setiap Hari", text: "Pendapatan Berkelanjutan", icon: IcInfinity, tone: "blue" },
  { title: "Semua Orang Terlibat", text: "Pasar yang Sangat Luas", icon: IcUsers, tone: "purple" },
  { title: "Sistem Aman & Terpercaya", text: "Didukung Teknologi Modern", icon: IcShieldCheck, tone: "amber" },
] as const;

/** Tata letak VTN khusus layar HP (<640px), mengikuti public/images/VTN Tampilan Mobile.png. */
export function SsVtnMobile() {
  return (
    <div className="ss-vtnm sm:hidden">
      <div className="ss-vtnm-body">
        <SsReveal>
          <div className="ss-vtnm-top">
            <p className="ss-vtnm-eyebrow">Indonesia Digital Ecosystem</p>
            <p className="ss-vtnm-note">Transaksi<br />Hari Ini<br />Masa Depan<br />Lebih Baik</p>
          </div>
        </SsReveal>

        <SsReveal delay={80}>
          <div className="ss-vtnm-brand">
            <Image src="/images/saku/vtn-mobile-logo.webp" alt="VTN" width={450} height={202} />
            <span>Volume<br />Transaksi<br />Nasional</span>
          </div>
          <h2 className="ss-vtnm-title">Sebagai <em>Mesin CUAN</em> Jangka Panjang</h2>
          <p className="ss-vtnm-lead">
            Semakin besar volume transaksi di seluruh Indonesia, semakin besar <strong>peluang cuan</strong> yang terus
            mengalir secara berkelanjutan.
          </p>
        </SsReveal>

        <SsReveal delay={120}>
          <Image
            src="/images/saku/vtn-mobile-hero.webp"
            alt="Peta Indonesia yang terhubung, mesin VTN, grafik pertumbuhan, dan tumpukan koin rupiah — transaksi menggerakkan Indonesia, cuan untuk semua."
            width={887}
            height={642}
            sizes="100vw"
            className="ss-vtnm-hero"
          />
        </SsReveal>

        <SsReveal delay={80}>
          <div className="ss-vtnm-panel">
            <h3>Sumber VTN</h3>
            <ul>
              {SOURCES.map(({ label, icon: Icon, tone }) => (
                <li key={label} data-tone={tone}>
                  <span><Icon width={24} height={24} /></span>
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </SsReveal>

        <SsReveal delay={120}>
          <ul className="ss-vtnm-cards">
            {ADVANTAGES.map(({ title, text, icon: Icon, tone }) => (
              <li key={title} data-tone={tone}>
                <Icon width={34} height={34} />
                <div><strong>{title}</strong><span>{text}</span></div>
              </li>
            ))}
          </ul>
        </SsReveal>
      </div>

      <footer className="ss-vtnm-foot">
        <p><span>Transaksi Membangun Indonesia</span><i aria-hidden="true" /><span>Cuan untuk Semua</span></p>
        <div>
          <span>Lebih dari<br />sekedar transaksi<br />ini gerakan bersama</span>
          <span>Indonesia<br />Lebih Maju</span>
        </div>
      </footer>
    </div>
  );
}
