import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PwHeroNavigation } from "@/components/payway/PwHeroNavigation";
import { PwCtaFooter } from "@/components/payway/PwCtaFooter";
import { SsPartnerSupport } from "@/components/saku/SsPartnerSupport";
import { LEGAL_PARTNERS } from "@/components/saku/ss-partners-data";
import { IcArrowRight, IcFileText } from "@/components/saku/ss-icons";

export const metadata: Metadata = {
  title: "Legalitas & Kelembagaan EduDigi — Saku Sultan",
  description: "Informasi tahapan legalitas dan kelembagaan EduDigi dalam ekosistem Saku Sultan.",
};

const steps = [
  { title: "Akta Pendirian", status: "Terbit", detail: "Dokumen pendirian yayasan sebagai dasar pembentukan lembaga." },
  { title: "Administrasi & Identitas Kelembagaan", status: "Selesai", detail: "Tahap administrasi dan identitas kelembagaan telah diselesaikan." },
  { title: "NIB & KBLI", status: "Terbit", detail: "Nomor Induk Berusaha dan klasifikasi bidang usaha telah terbit." },
  { title: "Perizinan Operasional", status: "Dalam Proses", detail: "Tahap perizinan operasional masih berlangsung." },
];

export default function LegalitasEdudigiPage() {
  return (
    <main className="ss-site w-full overflow-x-clip">
      <PwHeroNavigation />
      <section className="ss-product-hero">
        <div className="ss-product-hero-inner">
          <Link href="/#legalitas-edudigi" className="ss-product-back">← Kembali ke Legalitas EduDigi</Link>
          <div className="ss-product-hero-grid">
            <div>
              <p className="ss-eyebrow ss-product-eyebrow">Legalitas & Kelembagaan</p>
              <h1 className="ss-h1 ss-product-title">Legalitas EduDigi,<br /><span>Tahap demi Tahap.</span></h1>
              <p className="ss-product-lead">EduDigi dikelola secara resmi dan profesional. Kenali tahapan legalitas kelembagaan yang ditampilkan dalam program ini.</p>
              <div className="ss-product-actions">
                <a href="#tahapan" className="ss-btn ss-btn-lime">Lihat Tahapan <IcArrowRight width={17} height={17} /></a>
                <Link href="/produk/edudigi" className="ss-btn ss-btn-outline-light">Tentang EduDigi</Link>
              </div>
            </div>
            <figure className="ss-product-hero-art">
              <Image src="/images/saku/reference-edudigi-legal.webp" alt="Ilustrasi dokumen akta pendirian, NIB, dan KBLI EduDigi" width={765} height={585} priority sizes="(min-width: 1024px) 520px, 92vw" />
            </figure>
          </div>
        </div>
      </section>
      <section id="tahapan" className="ss-product-body scroll-mt-24">
        <div className="ss-product-body-inner">
          <div className="ss-product-prose">
            <h2 className="ss-h2">Tahapan Kelembagaan</h2>
            <p>Informasi berikut mengikuti status yang ditampilkan pada bagian Legalitas & Kelembagaan EduDigi. Perizinan operasional masih dalam proses.</p>
          </div>
          <div className="ss-product-steps">
            <ol>
              {steps.map((step, index) => (
                <li key={step.title}>
                  <span className="ss-product-step-number">{String(index + 1).padStart(2, "0")}</span>
                  <span><strong>{step.title} — {step.status}</strong><small>{step.detail}</small></span>
                </li>
              ))}
            </ol>
          </div>
          <div className="ss-product-notes">
            <h2 className="ss-h3">Informasi Lebih Lanjut</h2>
            <p>Periksa dokumen resmi dan status perizinan terbaru melalui kanal resmi EduDigi sebelum mengambil keputusan.</p>
            <Link href="/images/IMAGE/7.jpeg" target="_blank" rel="noopener noreferrer" className="ss-btn ss-btn-dark mt-6 inline-flex">Lihat Dokumen Referensi <IcFileText width={16} height={16} /></Link>
          </div>
          <SsPartnerSupport heading="Ekosistem Terpercaya" logos={LEGAL_PARTNERS} />
        </div>
      </section>
      <PwCtaFooter />
    </main>
  );
}
