import { SsReveal } from "./SsReveal";
import { PwPosterGallery } from "@/components/payway/PwPosterGallery";
import { EDUDIGI_CLASS_POSTER, EDUDIGI_POSTERS } from "@/components/payway/pw-campaign-posters";
import { PwEduDigiBrand } from "@/components/payway/pw-edudigi-brand";
import { SsReferenceArtwork } from "./SsReferenceArtwork";
import { SsPartnerSupport } from "./SsPartnerSupport";
import { LEGAL_PARTNERS } from "./ss-partners-data";
import {
  IcArrowRight,
  IcBook,
  IcChart,
  IcFileText,
  IcGraduation,
  IcSparkle,
  IcUsers,
  IcZap,
} from "./ss-icons";

const MINI_FEATURES = [
  { icon: IcUsers, label: "Kelas dibuka per 50 peserta" },
  { icon: IcBook, label: "Akses materi fleksibel" },
  { icon: IcGraduation, label: "Didampingi mentor berpengalaman" },
];

const FACILITIES = [
  { icon: IcSparkle, title: "Voucher EduDigi", desc: "Senilai Rp200.000 untuk pembelajaran." },
  { icon: IcBook, title: "Modul Pembelajaran", desc: "Materi lengkap dan mudah dipahami." },
  { icon: IcGraduation, title: "Sertifikat EduDigi", desc: "Sebagai bukti keikutsertaan program." },
  { icon: IcUsers, title: "Support Master", desc: "Bimbingan dan komunitas dari ekosistem SAKU SULTAN." },
];

const LEGAL_STEPS = [
  { num: "01", title: "Akta Pendirian", status: "Terbit", done: true },
  { num: "02", title: "Administrasi & Identitas Kelembagaan", status: "Selesai", done: true },
  { num: "03", title: "NIB & KBLI", status: "Terbit", done: true },
  { num: "04", title: "Perizinan Operasional", status: "Dalam Proses", done: false },
];

function EdudigiLockup() {
  return (
    <div className="ss-edudigi-lockup flex flex-wrap items-center gap-4">
      <PwEduDigiBrand id="ss-program-brand" />
      <span className="hidden h-8 w-px bg-[var(--ss-line)] sm:block" />
      <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[var(--ss-green)]">
        Belajar • Praktik • Produktif
      </p>
    </div>
  );
}

/** EduDigi — hero program + fasilitas + legalitas kelembagaan. */
export function SsEdudigi() {
  return (
    <section id="edudigi" className="scroll-mt-24 bg-white">
      <div className="mx-auto w-full max-w-[1320px] px-5 py-20 md:px-8 lg:py-24">
        {/* Hero EduDigi */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SsReveal>
              <EdudigiLockup />
            </SsReveal>
            <SsReveal delay={80}>
              <h2 className="ss-h2 mt-7 text-[var(--ss-ink)]">
                Mulai Perjalanan Digitalmu
                <br />
                <span className="text-[var(--ss-green)]">Bersama EduDigi.</span>
              </h2>
            </SsReveal>
            <SsReveal delay={160}>
              <p className="mt-5 max-w-[500px] text-[15.5px] leading-relaxed text-[var(--ss-muted)]">
                Kelas pembelajaran digital yang dirancang untuk membantu kamu menguasai keterampilan, siap kerja,
                dan lebih produktif di masa depan.
              </p>
            </SsReveal>
            <SsReveal delay={220}>
              <div className="ss-edudigi-price mt-7 flex flex-wrap items-end gap-3">
                <span className="text-[13px] font-bold text-[var(--ss-muted)]">Mulai dari</span>
                <span className="text-[clamp(2rem,4vw,3rem)] font-extrabold leading-none tracking-tight text-[var(--ss-ink)]">
                  Rp200.000
                </span>
                <span className="mb-1 text-[13px] font-bold text-[var(--ss-muted)]">per peserta</span>
              </div>
            </SsReveal>
            <SsReveal delay={280}>
              <ul className="mt-7 grid gap-4 sm:grid-cols-3">
                {MINI_FEATURES.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--ss-mint)] text-[var(--ss-green-deep)]">
                      <Icon width={17} height={17} />
                    </span>
                    <span className="text-[12.5px] font-bold leading-snug text-[var(--ss-ink)]/85">{label}</span>
                  </li>
                ))}
              </ul>
            </SsReveal>
            <SsReveal delay={340}>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="https://play.google.com/store/apps/details?id=com.saku_sultan" target="_blank" rel="noopener noreferrer" className="ss-btn ss-btn-lime">
                  Daftar Kelas Sekarang
                  <IcArrowRight width={16} height={16} />
                </a>
                <a href="#fasilitas" className="ss-btn ss-btn-outline-dark">
                  Pelajari Program
                </a>
              </div>
            </SsReveal>
          </div>

          {/* Complete illustration group, including every text callout. */}
          <SsReveal delay={200}>
            <SsReferenceArtwork kind="program" />
          </SsReveal>
        </div>

        {/* Fasilitas */}
        <SsReveal delay={100}>
          <div id="fasilitas" className="mt-24 flex scroll-mt-28 flex-wrap items-end justify-between gap-4">
            <h3 className="ss-h3 text-[var(--ss-ink)]">
              Fasilitas yang <span className="text-[var(--ss-green)]">Kamu Dapatkan</span>
            </h3>
            <a
              href="#fasilitas"
              className="inline-flex items-center gap-2 text-[13.5px] font-extrabold text-[var(--ss-green)] hover:text-[var(--ss-green-deep)]"
            >
              Lihat Semua Fasilitas
              <IcArrowRight width={15} height={15} />
            </a>
          </div>
        </SsReveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FACILITIES.map(({ icon: Icon, title, desc }, i) => (
            <SsReveal key={title} delay={i * 80}>
              <article className="h-full rounded-3xl border border-[var(--ss-line)] bg-[var(--ss-mist)] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_50px_rgba(8,23,15,.1)]">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--ss-pine)] text-[var(--ss-lime)]">
                  <Icon width={20} height={20} />
                </span>
                <h4 className="mt-4 text-[16px] font-extrabold text-[var(--ss-ink)]">{title}</h4>
                <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--ss-muted)]">{desc}</p>
              </article>
            </SsReveal>
          ))}
        </div>

        {/* Legalitas & kelembagaan */}
        <div id="legalitas-edudigi" className="mt-24 grid scroll-mt-24 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SsReveal>
              <p className="ss-eyebrow text-[var(--ss-green)]">Legalitas & Kelembagaan</p>
              <h3 className="ss-h3 mt-3 text-[var(--ss-ink)]">
                Legalitas & Kelembagaan <span className="text-[var(--ss-green)]">EduDigi</span>
              </h3>
              <p className="mt-4 max-w-[500px] text-[14.5px] leading-relaxed text-[var(--ss-muted)]">
                EduDigi dikelola secara resmi dan profesional. Setiap tahapan legalitas kelembagaan dijalankan
                sesuai regulasi pemerintah agar program berjalan aman dan terpercaya.
              </p>
            </SsReveal>
            <SsReveal delay={120}>
              <ol className="ss-legal-timeline">
                {LEGAL_STEPS.map((s) => (
                  <li key={s.num}>
                    <span
                      className={
                        "ss-legal-num " +
                        (s.done
                          ? "bg-[var(--ss-pine)] text-[var(--ss-lime)]"
                          : "border-2 border-dashed border-[var(--ss-green)]/40 text-[var(--ss-green-deep)]")
                      }
                    >
                      {s.num}
                    </span>
                    <strong>{s.title}</strong>
                    <span
                      className={
                        "ss-legal-status " +
                        (s.done
                          ? "bg-[var(--ss-mint)] text-[var(--ss-green-deep)]"
                          : "bg-amber-100 text-amber-700")
                      }
                    >
                      {s.status}
                    </span>
                  </li>
                ))}
              </ol>
            </SsReveal>
            <SsReveal delay={200}>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/images/IMAGE/7.jpeg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ss-btn ss-btn-dark"
                >
                  Lihat Informasi Legalitas
                  <IcFileText width={16} height={16} />
                </a>
                <a href="#edudigi" className="ss-btn ss-btn-outline-dark">
                  Tentang EduDigi
                </a>
              </div>
            </SsReveal>
          </div>

          {/* Document illustration with the Saku Sultan logo. */}
          <SsReveal delay={180}>
            <SsReferenceArtwork kind="legal" />
          </SsReveal>
        </div>

        <SsPartnerSupport heading="Ekosistem Terpercaya" logos={LEGAL_PARTNERS} />

        <details className="ss-edudigi-gallery">
          <summary><span>Kenali EduDigi lebih dekat<small>Profil, tujuan, praktik, visi & misi, dan legalitas.</small></span><IcArrowRight width={20} height={20} /></summary>
          <div><PwPosterGallery posters={[...EDUDIGI_POSTERS, EDUDIGI_CLASS_POSTER]} /></div>
        </details>

        {/* Bar penutup */}
        <SsReveal delay={120}>
          <div className="mt-20 flex flex-col items-center justify-between gap-6 rounded-3xl bg-[var(--ss-mint)] px-8 py-7 lg:flex-row">
            <p className="max-w-[360px] text-[14.5px] font-extrabold leading-snug text-[var(--ss-ink)]">
              Bagian dari Ekosistem SAKU SULTAN —{" "}
              <span className="text-[var(--ss-green-deep)]">Bersama Membangun Generasi Digital yang Lebih Siap</span>
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {[
                { icon: IcZap, label: "Lebih Terampil" },
                { icon: IcChart, label: "Lebih Produktif" },
                { icon: IcUsers, label: "Lebih Berdaya Saing" },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--ss-green-deep)]">
                    <Icon width={17} height={17} />
                  </span>
                  <span className="text-[13px] font-extrabold text-[var(--ss-ink)]">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </SsReveal>
      </div>
    </section>
  );
}
