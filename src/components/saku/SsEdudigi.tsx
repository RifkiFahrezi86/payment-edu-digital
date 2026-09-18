import { SsReveal } from "./SsReveal";
import {
  IcArrowRight,
  IcBook,
  IcChart,
  IcCheckCircle,
  IcFileText,
  IcGraduation,
  IcQuote,
  IcShieldCheck,
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
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--ss-green)] text-white shadow-[0_10px_26px_rgba(18,135,75,.35)]">
          <IcGraduation width={22} height={22} />
        </span>
        <div className="leading-tight">
          <p className="text-[19px] font-extrabold text-[var(--ss-ink)]">
            Edu<span className="text-[var(--ss-green)]">Digi</span>
          </p>
          <p className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-[var(--ss-muted)]">
            Solusi Penguatan Literasi Digital
          </p>
        </div>
      </div>
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
              <div className="mt-7 flex items-end gap-3">
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
                <a href="#bantuan" className="ss-btn ss-btn-lime">
                  Daftar Kelas Sekarang
                  <IcArrowRight width={16} height={16} />
                </a>
                <a href="#fasilitas" className="ss-btn ss-btn-outline-dark">
                  Pelajari Program
                </a>
              </div>
            </SsReveal>
          </div>

          {/* Foto + kartu mengambang */}
          <SsReveal delay={200}>
            <div className="relative mx-auto w-full max-w-[500px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/saku/edudigi-students.jpg"
                alt="Peserta kelas EduDigi belajar bersama"
                className="aspect-[4/3.2] w-full rounded-[32px] object-cover shadow-[0_36px_80px_rgba(8,23,15,.2)]"
              />
              <div className="ss-float absolute -top-6 right-6 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_18px_44px_rgba(8,23,15,.16)]">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--ss-mint)] text-[var(--ss-green-deep)]">
                  <IcGraduation width={18} height={18} />
                </span>
                <span className="text-[12.5px] font-extrabold leading-tight text-[var(--ss-ink)]">
                  Investasi Ilmu untuk Masa Depan
                  <br />
                  <span className="text-[var(--ss-green)]">yang Lebih Baik</span>
                </span>
              </div>
              <div className="ss-float-slow absolute -bottom-7 -left-4 max-w-[280px] rounded-2xl border border-[var(--ss-line)] bg-white p-4 shadow-[0_18px_44px_rgba(8,23,15,.14)]">
                <IcQuote width={20} height={20} className="text-[var(--ss-green)]" />
                <p className="mt-1.5 text-[12.5px] font-semibold leading-relaxed text-[var(--ss-ink)]/85">
                  Skill digital membuka lebih banyak peluang untuk masa depan — bersama EduDigi, kamu bisa lebih
                  siap.
                </p>
              </div>
            </div>
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
        <div className="mt-24 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
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
              <ol className="mt-8 space-y-5">
                {LEGAL_STEPS.map((s) => (
                  <li key={s.num} className="flex items-center gap-4">
                    <span
                      className={
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[13px] font-extrabold " +
                        (s.done
                          ? "bg-[var(--ss-pine)] text-[var(--ss-lime)]"
                          : "border-2 border-dashed border-[var(--ss-green)]/40 text-[var(--ss-green-deep)]")
                      }
                    >
                      {s.num}
                    </span>
                    <span className="flex-1 text-[14.5px] font-extrabold text-[var(--ss-ink)]">{s.title}</span>
                    <span
                      className={
                        "rounded-full px-3.5 py-1.5 text-[11px] font-extrabold " +
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
                  href="https://wa.me/6281100000000?text=Halo%2C%20saya%20ingin%20melihat%20dokumen%20legalitas%20EduDigi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ss-btn ss-btn-dark"
                >
                  Lihat Dokumen Legalitas
                  <IcFileText width={16} height={16} />
                </a>
                <a href="#edudigi" className="ss-btn ss-btn-outline-dark">
                  Tentang EduDigi
                </a>
              </div>
            </SsReveal>
          </div>

          {/* Mockup dokumen */}
          <SsReveal delay={180}>
            <div className="relative mx-auto w-full max-w-[440px]">
              <div className="rounded-[32px] bg-gradient-to-br from-[var(--ss-mint)] to-[#f6faf4] p-8">
                <div className="relative mx-auto max-w-[300px]">
                  <div className="rotate-[-4deg] rounded-2xl border border-[var(--ss-line)] bg-white p-5 shadow-[0_20px_50px_rgba(8,23,15,.12)]">
                    <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[var(--ss-muted)]">
                      Republik Indonesia
                    </p>
                    <p className="mt-1 text-[14px] font-extrabold text-[var(--ss-ink)]">Akta Pendirian Yayasan EDUDIGI</p>
                    <div className="mt-3 space-y-1.5">
                      <span className="block h-1.5 w-full rounded bg-[var(--ss-mist)]" />
                      <span className="block h-1.5 w-4/5 rounded bg-[var(--ss-mist)]" />
                      <span className="block h-1.5 w-11/12 rounded bg-[var(--ss-mist)]" />
                      <span className="block h-1.5 w-3/5 rounded bg-[var(--ss-mist)]" />
                    </div>
                  </div>
                  <div className="mt-4 rotate-[3deg] rounded-2xl border border-[var(--ss-line)] bg-white p-5 shadow-[0_20px_50px_rgba(8,23,15,.12)]">
                    <div className="flex items-center justify-between">
                      <p className="text-[14px] font-extrabold text-[var(--ss-ink)]">NIB & KBLI</p>
                      <span className="rounded-full bg-[var(--ss-mint)] px-2.5 py-1 text-[9.5px] font-extrabold text-[var(--ss-green-deep)]">
                        TERBIT
                      </span>
                    </div>
                    <div className="mt-3 space-y-1.5">
                      <span className="block h-1.5 w-full rounded bg-[var(--ss-mist)]" />
                      <span className="block h-1.5 w-2/3 rounded bg-[var(--ss-mist)]" />
                    </div>
                  </div>
                  <span className="absolute -right-6 -top-6 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--ss-pine)] text-[var(--ss-lime)] shadow-[0_14px_36px_rgba(12,59,42,.4)]">
                    <IcShieldCheck width={24} height={24} />
                  </span>
                </div>
                <p className="ss-script mt-6 text-center text-[22px] leading-tight text-[var(--ss-green)]">
                  Pendidikan Digital untuk Masa Depan yang Lebih Baik
                </p>
              </div>
              <div className="ss-float absolute -bottom-5 left-1/2 flex w-max max-w-[90%] -translate-x-1/2 items-center gap-2.5 rounded-full bg-[var(--ss-pine)] px-5 py-3 text-white shadow-[0_18px_44px_rgba(12,59,42,.35)]">
                <IcCheckCircle width={16} height={16} className="text-[var(--ss-lime)]" />
                <span className="text-[12px] font-extrabold">Terdaftar & Dikelola Sesuai Regulasi Pemerintah</span>
              </div>
            </div>
          </SsReveal>
        </div>

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
