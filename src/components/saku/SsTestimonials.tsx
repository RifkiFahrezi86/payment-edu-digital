"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { SsReveal } from "./SsReveal";
import { SsVideoLauncher } from "./SsVideoModal";
import { IcArrowLeft, IcArrowRight, IcMessage, IcPlay, IcQuote, IcShieldCheck, IcStar, IcUsers } from "./ss-icons";

const TESTIMONIALS = [
  {
    name: "Andi Pratama",
    role: "Pemilik Warung — Makassar",
    tag: "PPOB",
    avatar: "/images/payway/unsplash-photo-1599566150163-29194dcaad36.jpg",
    quote:
      "Sejak pakai Saku Sultan, pelanggan bisa bayar listrik dan pulsa langsung di warung saya. Omzet naik, pelanggan makin ramai.",
  },
  {
    name: "Sri Wahyuni",
    role: "Mahasiswi — Gowa",
    tag: "QTRA",
    avatar: "/images/payway/unsplash-photo-1494790108377-be9c29b29330.jpg",
    quote:
      "Transfer ke teman satu kos tinggal beberapa detik pakai Q-Tra. Nggak perlu hafal nomor rekening, cukup scan langsung terkirim.",
  },
  {
    name: "Muhammad Arif",
    role: "Driver Ojol — Makassar",
    tag: "Pulsa & Game",
    avatar: "/images/payway/unsplash-photo-1535713875002-d1d0cf377fde.jpg",
    quote:
      "Isi pulsa dan paket data buat kerja jadi gampang banget. Ada cashback pula — lumayan buat tambahan penghasilan harian.",
  },
  {
    name: "Nurul Hikmah",
    role: "Pelaku UMKM — Parepare",
    tag: "Merchant",
    avatar: "/images/payway/unsplash-photo-1527980965255-d3b416303d12.jpg",
    quote:
      "Daftar merchant QRIS-nya cepat, laporan penjualan rapi. Usaha kecil saya sekarang terlihat lebih profesional di mata pembeli.",
  },
  {
    name: "Rahmat Hidayat",
    role: "Karyawan Swasta — Maros",
    tag: "Transfer",
    avatar: "/images/payway/unsplash-photo-1599566150163-29194dcaad36.jpg",
    quote:
      "Kirim uang ke kampung tiap bulan tanpa biaya bikin saya pindah total ke Saku Sultan. Prosesnya real-time dan aman.",
  },
  {
    name: "Fitriani",
    role: "Peserta EduDigi — Makassar",
    tag: "EduDigi",
    avatar: "/images/payway/unsplash-photo-1494790108377-be9c29b29330.jpg",
    quote:
      "Kelas EduDigi membuka wawasan saya soal keamanan transaksi digital. Materinya praktis dan mentornya sabar banget.",
  },
];

const VIDEOS = [
  { src: "/images/saku/video-1.jpg", caption: "Cerita Merchant: QRIS di Warung Kopi" },
  { src: "/images/saku/video-2.jpg", caption: "UMKM Naik Kelas Bersama Saku Sultan" },
  { src: "/images/saku/video-3.jpg", caption: "Komunitas Sultaners di Makassar" },
];

const PAGE_SIZE = 3;

/** Testimoni — kartu carousel + panel video + trust bar. */
export function SsTestimonials() {
  const [page, setPage] = useState(0);
  const pages = Math.ceil(TESTIMONIALS.length / PAGE_SIZE);
  const visible = TESTIMONIALS.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section id="testimoni" className="scroll-mt-24 bg-[var(--ss-mist)]">
      <div className="mx-auto w-full max-w-[1320px] px-5 py-20 md:px-8 lg:py-24">
        {/* Header */}
        <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <SsReveal>
            <span className="inline-flex items-center gap-2.5 rounded-full bg-[var(--ss-mint)] px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.16em] text-[var(--ss-green-deep)]">
              <IcMessage width={14} height={14} /> Testimoni
            </span>
            <h2 className="ss-h2 mt-5 text-[var(--ss-ink)]">
              Dipercaya Ratusan Ribu
              <br />
              <span className="text-[var(--ss-green)]">Pengguna Indonesia</span>
            </h2>
            <p className="mt-4 max-w-[520px] text-[15px] leading-relaxed text-[var(--ss-muted)]">
              Dari pemilik warung hingga mahasiswa — dengarkan bagaimana SAKU SULTAN membantu aktivitas dan usaha
              mereka setiap hari.
            </p>
          </SsReveal>
          <SsReveal delay={140}>
            <div className="grid grid-cols-3 divide-x divide-[var(--ss-line)] rounded-3xl border border-[var(--ss-line)] bg-white px-2 py-6 text-center shadow-[0_14px_40px_rgba(8,23,15,.06)]">
              {[
                { value: "100K+", label: "Pengguna Aktif" },
                { value: "4.8/5", label: "Rating Play Store" },
                { value: "99%", label: "Kepuasan Pengguna" },
              ].map((s) => (
                <div key={s.label} className="px-2">
                  <p className="text-[24px] font-extrabold tracking-tight text-[var(--ss-green-deep)]">{s.value}</p>
                  <p className="mt-1 text-[11px] font-bold leading-tight text-[var(--ss-muted)]">{s.label}</p>
                </div>
              ))}
            </div>
          </SsReveal>
        </div>

        {/* Kontrol carousel */}
        <SsReveal delay={100}>
          <div className="mt-12 flex items-end justify-between">
            <p className="ss-script text-[30px] text-[var(--ss-green)]">
              Cerita Nyata, <span className="text-[var(--ss-ink)]">Dampak Nyata</span>
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                aria-label="Testimoni sebelumnya"
                onClick={() => setPage((p) => (p - 1 + pages) % pages)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--ss-line)] bg-white text-[var(--ss-ink)] transition-colors hover:border-[var(--ss-green)] hover:text-[var(--ss-green)]"
              >
                <IcArrowLeft width={17} height={17} />
              </button>
              <button
                type="button"
                aria-label="Testimoni berikutnya"
                onClick={() => setPage((p) => (p + 1) % pages)}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--ss-pine)] text-[var(--ss-lime)] transition-transform hover:scale-105"
              >
                <IcArrowRight width={17} height={17} />
              </button>
            </div>
          </div>
        </SsReveal>

        {/* Kartu testimoni */}
        <div key={page} className="mt-7 grid gap-5 md:grid-cols-3">
          {visible.map((t, i) => (
            <SsReveal key={t.name} delay={i * 90}>
              <article className="flex h-full flex-col rounded-3xl border border-[var(--ss-line)] bg-white p-7 shadow-[0_12px_36px_rgba(8,23,15,.05)]">
                <div className="flex items-center gap-3.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                  <div className="flex-1 leading-tight">
                    <p className="text-[14.5px] font-extrabold text-[var(--ss-ink)]">{t.name}</p>
                    <p className="text-[11.5px] font-semibold text-[var(--ss-muted)]">{t.role}</p>
                  </div>
                  <span className="rounded-full bg-[var(--ss-mint)] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-[var(--ss-green-deep)]">
                    {t.tag}
                  </span>
                </div>
                <div className="mt-4 flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <IcStar key={s} width={15} height={15} />
                  ))}
                </div>
                <IcQuote width={26} height={26} className="mt-4 text-[var(--ss-green)]/70" />
                <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-[var(--ss-ink)]/85">{t.quote}</p>
                <p className="mt-5 border-t border-[var(--ss-line)] pt-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--ss-muted)]">
                  Pengguna Terverifikasi — SAKU SULTAN
                </p>
              </article>
            </SsReveal>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-7 flex justify-center gap-2.5">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Halaman testimoni ${i + 1}`}
              onClick={() => setPage(i)}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300",
                i === page ? "w-8 bg-[var(--ss-green)]" : "w-2.5 bg-[var(--ss-ink)]/15 hover:bg-[var(--ss-ink)]/30"
              )}
            />
          ))}
        </div>

        {/* Panel video */}
        <SsReveal delay={120}>
          <div className="mt-16 grid gap-10 rounded-[32px] bg-[var(--ss-mint)] p-8 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2.5 rounded-full bg-white px-4 py-2 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-[var(--ss-green-deep)]">
                <IcPlay width={13} height={13} /> Video Testimoni
              </span>
              <h3 className="ss-h3 mt-5 text-[var(--ss-ink)]">
                Cerita Pengguna, Lebih Dekat
                <br />
                dengan <span className="text-[var(--ss-green)]">SAKU SULTAN</span>
              </h3>
              <p className="mt-4 max-w-[420px] text-[14px] leading-relaxed text-[var(--ss-muted)]">
                Saksikan langsung bagaimana pengguna dan merchant memanfaatkan ekosistem SAKU SULTAN dalam
                keseharian mereka.
              </p>
              <SsVideoLauncher
                src="/videos/payway/footer.mp4"
                title="Video Testimoni Pengguna SAKU SULTAN"
                className="ss-btn ss-btn-dark mt-7 !py-3"
              >
                Tonton Semua Testimoni
                <IcArrowRight width={16} height={16} />
              </SsVideoLauncher>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {VIDEOS.map((v) => (
                <SsVideoLauncher
                  key={v.src}
                  src="/videos/payway/footer.mp4"
                  title={v.caption}
                  className="group block w-full cursor-pointer text-left"
                >
                  <span className="relative block overflow-hidden rounded-2xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={v.src}
                      alt={v.caption}
                      className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-[#04130c]/70 via-transparent to-transparent" />
                    <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[var(--ss-pine)] shadow-lg transition-transform group-hover:scale-110">
                      <IcPlay width={18} height={18} />
                    </span>
                  </span>
                  <span className="mt-2.5 block text-[12px] font-bold leading-snug text-[var(--ss-ink)]/85">
                    {v.caption}
                  </span>
                </SsVideoLauncher>
              ))}
            </div>
          </div>
        </SsReveal>

        {/* Trust bar */}
        <SsReveal delay={160}>
          <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-3xl bg-[var(--ss-pine)] px-8 py-6 text-white lg:flex-row">
            <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[var(--ss-lime)]">
              Dipercaya oleh Pengguna di Seluruh Indonesia
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[12.5px] font-bold text-white/80">
              <li className="flex items-center gap-2">
                <IcUsers width={15} height={15} className="text-[var(--ss-lime)]" /> 100K+ Pengguna Aktif
              </li>
              <li className="flex items-center gap-2">
                <IcStar width={15} height={15} className="text-[var(--ss-lime)]" /> 4.8/5 Rating Aplikasi
              </li>
              <li className="flex items-center gap-2">
                <IcShieldCheck width={15} height={15} className="text-[var(--ss-lime)]" /> Terdaftar & Diawasi Sesuai
                Regulasi
              </li>
            </ul>
            <p className="text-[12.5px] font-semibold italic text-white/70">
              “Lebih dari sekadar transaksi, SAKU SULTAN ada untuk setiap langkahmu.”
            </p>
          </div>
        </SsReveal>
      </div>
    </section>
  );
}
