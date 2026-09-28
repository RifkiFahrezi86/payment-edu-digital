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

          {/* Bar info keunggulan kelembagaan & kurikulum EduDigi */}
          <div className="ss-edu-pillars-bar mt-8 flex flex-col items-stretch justify-between gap-6 rounded-2xl border border-[var(--ss-line)] bg-white/70 p-4 shadow-sm backdrop-blur-sm md:flex-row md:items-center md:gap-4 md:p-5">
            <div className="flex flex-1 items-center gap-3.5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e6f4ea] p-2.5">
                <Image src="/images/saku/icon-edu-lembaga.webp" alt="" width={40} height={40} className="h-full w-full object-contain" />
              </span>
              <div>
                <h4 className="text-[14px] font-bold text-[var(--ss-ink)]">Kelembagaan yang Jelas</h4>
                <p className="mt-0.5 text-[12px] leading-snug text-[var(--ss-muted)]">Didukung struktur organisasi dan tata kelola yang transparan.</p>
              </div>
            </div>

            <span className="hidden h-10 w-px bg-[var(--ss-line)] md:block" />

            <div className="flex flex-1 items-center gap-3.5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e6f4ea] p-2.5">
                <Image src="/images/saku/icon-edu-kurikulum.webp" alt="" width={40} height={40} className="h-full w-full object-contain" />
              </span>
              <div>
                <h4 className="text-[14px] font-bold text-[var(--ss-ink)]">Kurikulum Relevan</h4>
                <p className="mt-0.5 text-[12px] leading-snug text-[var(--ss-muted)]">Program pembelajaran sesuai kebutuhan industri dan perkembangan teknologi.</p>
              </div>
            </div>

            <span className="hidden h-10 w-px bg-[var(--ss-line)] md:block" />

            <div className="flex flex-1 items-center gap-3.5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e6f4ea] p-2.5">
                <Image src="/images/saku/icon-edu-masadepan.webp" alt="" width={40} height={40} className="h-full w-full object-contain" />
              </span>
              <div>
                <h4 className="text-[14px] font-bold text-[var(--ss-ink)]">Menuju Masa Depan</h4>
                <p className="mt-0.5 text-[12px] leading-snug text-[var(--ss-muted)]">Mencetak talenta digital yang siap berkarya dan berdaya saing.</p>
              </div>
            </div>

            <span className="hidden h-10 w-px bg-[var(--ss-line)] md:block" />

            <div className="flex shrink-0 items-center md:pl-2">
              <Link href="/produk/edudigi" className="inline-flex items-center gap-2 text-[13px] font-bold text-[var(--ss-green-deep)] transition-colors hover:text-[var(--ss-ink)]">
                Pelajari Lebih Lanjut
                <Image src="/images/saku/icon-edu-arrow.webp" alt="" width={16} height={16} className="h-4 w-4 object-contain" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <PwCtaFooter />
    </main>
  );
}
