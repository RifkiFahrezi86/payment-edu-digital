import { SsReveal } from "./SsReveal";
import {
  IcArrowRight,
  IcChart,
  IcCheck,
  IcCheckCircle,
  IcCrown,
  IcDownload,
  IcDroplet,
  IcGrid,
  IcPhoneSignal,
  IcQr,
  IcSend,
  IcShieldCheck,
  IcSmartphone,
  IcStar,
  IcTv,
  IcUsers,
  IcWallet,
  IcZap,
} from "./ss-icons";

const LEFT_FEATURES = [
  { icon: IcZap, title: "Cepat & Praktis", desc: "Transaksi kapan saja, di mana saja tanpa antre." },
  { icon: IcShieldCheck, title: "Aman & Terpercaya", desc: "Dilindungi oleh mitra resmi dan berlisensi." },
  { icon: IcChart, title: "Lebih Banyak Peluang", desc: "Setiap transaksi membuka peluang penghasilan." },
];

const APP_SERVICES = [
  { label: "Pulsa", icon: IcPhoneSignal },
  { label: "Paket Data", icon: IcGrid },
  { label: "PLN", icon: IcZap },
  { label: "BPJS", icon: IcShieldCheck },
  { label: "E-Wallet", icon: IcWallet },
  { label: "PDAM", icon: IcDroplet },
  { label: "TV Kabel", icon: IcTv },
  { label: "Lainnya", icon: IcGrid },
];

function ProcessPhone() {
  return (
    <div className="ss-phone w-[280px] max-w-full">
      <div className="flex h-[560px] flex-col bg-[#071f16] text-white">
        {/* header */}
        <div className="px-5 pb-4 pt-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--ss-lime)]/15 text-[var(--ss-lime)]">
                <IcCrown width={15} height={15} />
              </span>
              <div className="leading-tight">
                <p className="text-[12.5px] font-extrabold">Halo, Sultaners</p>
                <p className="text-[9px] font-semibold text-white/50">Selamat datang kembali</p>
              </div>
            </div>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[var(--ss-lime)]">
              <IcQr width={14} height={14} />
            </span>
          </div>
          <div className="mt-4 rounded-2xl bg-gradient-to-br from-[#0e4a33] to-[#0c3b2a] p-4 ring-1 ring-white/10">
            <p className="text-[10px] font-semibold text-white/60">Saldo Utama</p>
            <p className="mt-0.5 text-[22px] font-extrabold tracking-tight">Rp 5.000.000</p>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {[
                { label: "Top Up", icon: IcWallet },
                { label: "Transfer", icon: IcSend },
                { label: "QRIS", icon: IcQr },
                { label: "Lainnya", icon: IcGrid },
              ].map(({ label, icon: Icon }) => (
                <span key={label} className="flex flex-col items-center gap-1">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-[var(--ss-lime)]">
                    <Icon width={13} height={13} />
                  </span>
                  <span className="text-[8px] font-bold text-white/70">{label}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* banner */}
        <div className="mx-5 rounded-xl bg-[var(--ss-lime)] px-3.5 py-2.5">
          <p className="text-[9.5px] font-extrabold uppercase tracking-wide text-[var(--ss-ink)]">
            Transaksi Lebih Mudah, Lebih Banyak Peluang →
          </p>
        </div>
        {/* layanan */}
        <div className="mt-4 flex-1 rounded-t-3xl bg-white px-5 pt-4 text-[var(--ss-ink)]">
          <div className="flex items-center justify-between">
            <p className="text-[11.5px] font-extrabold">Pilih Layanan</p>
            <span className="text-[9.5px] font-bold text-[var(--ss-green)]">Lihat Semua</span>
          </div>
          <div className="mt-3 grid grid-cols-4 gap-y-3.5">
            {APP_SERVICES.map(({ label, icon: Icon }) => (
              <span key={label} className="flex flex-col items-center gap-1">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--ss-mint)] text-[var(--ss-green-deep)]">
                  <Icon width={14} height={14} />
                </span>
                <span className="text-[8px] font-bold text-[var(--ss-ink)]/75">{label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const STEPS = [
  {
    num: "01",
    title: "Download Aplikasi",
    desc: "Unduh Saku Sultan gratis di Google Play Store.",
    card: (
      <div className="mt-3 rounded-2xl border border-[var(--ss-line)] bg-white p-4 shadow-[0_10px_30px_rgba(8,23,15,.07)]">
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/saku-sultan-app-icon.png" alt="" className="h-10 w-10 rounded-xl" />
          <div className="flex-1 leading-tight">
            <p className="text-[13px] font-extrabold text-[var(--ss-ink)]">Saku Sultan</p>
            <p className="mt-0.5 flex items-center gap-1 text-[11px] font-bold text-[var(--ss-muted)]">
              <IcStar width={11} height={11} className="text-amber-400" /> 4.8 (1.2M ulasan)
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/payway/google-play.svg" alt="Google Play" className="h-9 w-auto" />
        </div>
      </div>
    ),
  },
  {
    num: "02",
    title: "Daftar Akun",
    desc: "Isi data diri dan verifikasi nomor HP Anda.",
    card: (
      <div className="mt-3 rounded-2xl border border-[var(--ss-line)] bg-white p-4 shadow-[0_10px_30px_rgba(8,23,15,.07)]">
        <p className="text-[12px] font-extrabold text-[var(--ss-ink)]">Buat Akun Baru</p>
        <div className="mt-2.5 space-y-2">
          <div className="rounded-lg bg-[var(--ss-mist)] px-3 py-2 text-[11px] font-semibold text-[var(--ss-muted)]">
            Nama Lengkap
          </div>
          <div className="rounded-lg bg-[var(--ss-mist)] px-3 py-2 text-[11px] font-semibold text-[var(--ss-muted)]">
            Nomor HP
          </div>
        </div>
        <div className="mt-2.5 flex items-center gap-2 rounded-lg bg-[var(--ss-mint)] px-3 py-2">
          <IcCheckCircle width={14} height={14} className="text-[var(--ss-green)]" />
          <p className="text-[10.5px] font-bold leading-tight text-[var(--ss-green-deep)]">
            Verifikasi berhasil — nomor HP siap digunakan
          </p>
        </div>
        <button
          type="button"
          className="mt-3 w-full rounded-full bg-gradient-to-r from-[var(--ss-lime)] to-[#a8e93c] py-2 text-[12px] font-extrabold text-[var(--ss-ink)]"
        >
          Lanjutkan →
        </button>
      </div>
    ),
  },
  {
    num: "03",
    title: "Mulai Transaksi",
    desc: "Pilih layanan favorit dan nikmati kemudahannya.",
    card: (
      <div className="mt-3 rounded-2xl border border-[var(--ss-line)] bg-white p-4 shadow-[0_10px_30px_rgba(8,23,15,.07)]">
        <div className="flex items-center gap-2">
          <IcCheckCircle width={16} height={16} className="text-[var(--ss-green)]" />
          <p className="text-[12.5px] font-extrabold text-[var(--ss-ink)]">Transaksi Berhasil</p>
        </div>
        <dl className="mt-2.5 space-y-1.5 text-[11.5px]">
          <div className="flex justify-between">
            <dt className="font-semibold text-[var(--ss-muted)]">Total</dt>
            <dd className="font-extrabold text-[var(--ss-ink)]">Rp 250.000</dd>
          </div>
          <div className="flex justify-between">
            <dt className="font-semibold text-[var(--ss-muted)]">Metode</dt>
            <dd className="font-bold text-[var(--ss-ink)]">Saldo Saku Sultan</dd>
          </div>
        </dl>
        <p className="mt-3 flex items-center gap-1.5 text-[11.5px] font-extrabold text-[var(--ss-green)]">
          Lakukan Transaksi Lain <IcArrowRight width={13} height={13} />
        </p>
      </div>
    ),
  },
];

/** Alur Transaksi — 3 langkah mudah + mockup + mitra resmi. */
export function SsProcess() {
  return (
    <section id="proses" className="scroll-mt-24 overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-[1320px] px-5 py-20 md:px-8 lg:py-24">
        <SsReveal className="max-w-[640px]">
          <p className="ss-eyebrow flex items-center gap-3 text-[var(--ss-green)]">
            Alur Transaksi
            <span className="h-px w-12 bg-[var(--ss-green)]/60" />
          </p>
          <h2 className="ss-h2 mt-4 text-[var(--ss-ink)]">
            Mulai Transaksi dalam <span className="text-[var(--ss-green)]">3 Langkah Mudah</span>
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-[var(--ss-muted)]">
            Tidak perlu proses rumit — unduh aplikasinya, daftar, dan semua layanan langsung ada di genggaman Anda.
          </p>
        </SsReveal>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.8fr_1fr_1fr]">
          {/* Fitur kiri */}
          <SsReveal>
            <ul className="space-y-8">
              {LEFT_FEATURES.map(({ icon: Icon, title, desc }) => (
                <li key={title} className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[var(--ss-green)]/25 bg-[var(--ss-mint)] text-[var(--ss-green-deep)]">
                    <Icon width={20} height={20} />
                  </span>
                  <span>
                    <span className="block text-[16px] font-extrabold text-[var(--ss-ink)]">{title}</span>
                    <span className="mt-1 block max-w-[240px] text-[13px] leading-relaxed text-[var(--ss-muted)]">
                      {desc}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </SsReveal>

          {/* Ponsel tengah */}
          <SsReveal delay={140} className="relative mx-auto">
            <div className="absolute -inset-8 -z-10 rounded-full bg-[var(--ss-green)]/10 blur-[70px]" />
            <ProcessPhone />
            <p className="ss-script pointer-events-none absolute -left-44 bottom-16 hidden w-max -rotate-6 text-right text-[24px] leading-[1.25] text-[var(--ss-green)] xl:block">
              Dompet Digital
              <br />
              untuk Masa Depan
              <br />
              Lebih Baik
            </p>
            {/* alas */}
            <div className="mx-auto -mt-3 h-5 w-[240px] rounded-[50%] bg-[var(--ss-ink)]/10 blur-[6px]" />
          </SsReveal>

          {/* Timeline kanan */}
          <SsReveal delay={220}>
            <ol className="space-y-7">
              {STEPS.map((s, i) => (
                <li key={s.num} className="ss-step-item relative flex gap-5">
                  <div className="ss-step-line relative">
                    <span
                      className={
                        "flex h-[54px] w-[54px] items-center justify-center rounded-full text-[15px] font-extrabold " +
                        (i === 1
                          ? "bg-[var(--ss-pine)] text-[var(--ss-lime)] shadow-[0_10px_26px_rgba(12,59,42,.35)]"
                          : "border-2 border-[var(--ss-green)]/30 bg-white text-[var(--ss-green-deep)]")
                      }
                    >
                      {s.num}
                    </span>
                  </div>
                  <div className="flex-1 pb-1">
                    <h3 className="text-[17px] font-extrabold text-[var(--ss-ink)]">{s.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-[var(--ss-muted)]">{s.desc}</p>
                    {s.card}
                  </div>
                </li>
              ))}
            </ol>
          </SsReveal>
        </div>

        {/* Banner bawah */}
        <SsReveal delay={120}>
          <div className="mt-16 flex flex-col items-center justify-between gap-5 rounded-3xl bg-gradient-to-r from-[var(--ss-pine)] to-[#0e5a3c] px-8 py-7 sm:flex-row">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--ss-lime)]/15 text-[var(--ss-lime)]">
                <IcSmartphone width={22} height={22} />
              </span>
              <p className="text-[18px] font-extrabold text-white">
                Satu Aplikasi, <span className="text-[var(--ss-lime)]">Banyak Kemudahan</span>
              </p>
            </div>
            <a href="#bantuan" className="ss-btn ss-btn-lime !py-3">
              Mulai Sekarang Bersama Saku Sultan
              <IcArrowRight width={16} height={16} />
            </a>
          </div>
        </SsReveal>

        {/* Mitra resmi */}
        <SsReveal delay={160}>
          <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-[var(--ss-line)] pt-8 lg:flex-row">
            <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[var(--ss-muted)]">
                Didukung oleh Mitra Resmi
              </p>
              {["BANK INDONESIA", "BRICK", "BMT — Buana Media Teknologi"].map((m) => (
                <span key={m} className="text-[13.5px] font-extrabold tracking-wide text-[var(--ss-ink)]/70">
                  {m}
                </span>
              ))}
            </div>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] font-bold text-[var(--ss-muted)]">
              {[
                { icon: IcCheck, label: "Aman" },
                { icon: IcZap, label: "Cepat" },
                { icon: IcShieldCheck, label: "Terpercaya" },
                { icon: IcUsers, label: "Banyak Peluang" },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-1.5">
                  <Icon width={14} height={14} className="text-[var(--ss-green)]" />
                  {label}
                </li>
              ))}
            </ul>
            <p className="text-[13px] font-extrabold text-[var(--ss-green-deep)]">
              #BarengSakuSultan <span className="font-semibold text-[var(--ss-muted)]">Masa Depan Lebih Dekat</span>
            </p>
          </div>
        </SsReveal>
      </div>
    </section>
  );
}
