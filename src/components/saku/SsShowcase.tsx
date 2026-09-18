"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { SsReveal } from "./SsReveal";
import { SHOWCASE_TAB_EVENT, type ShowcaseTab } from "./ss-showcase-bus";
import {
  IcArrowRight,
  IcBook,
  IcBuilding,
  IcChart,
  IcCheckCircle,
  IcChevronRight,
  IcGraduation,
  IcGrid,
  IcHeartHand,
  IcPhoneSignal,
  IcQr,
  IcReceipt,
  IcScan,
  IcSend,
  IcShieldCheck,
  IcSmartphone,
  IcSparkle,
  IcTrendingUp,
  IcUsers,
  IcWallet,
  IcZap,
} from "./ss-icons";

type TabKey = ShowcaseTab;

const TABS: { key: TabKey; label: string; icon: (p: React.SVGProps<SVGSVGElement>) => React.JSX.Element }[] = [
  { key: "edudigi", label: "EduDigi", icon: IcGraduation },
  { key: "qtra", label: "Q-Tra", icon: IcScan },
  { key: "transfer", label: "Transfer", icon: IcSend },
  { key: "ppob", label: "PPOB", icon: IcReceipt },
  { key: "passolo", label: "Passolo", icon: IcHeartHand },
  { key: "merchant", label: "Merchant", icon: IcBuilding },
];

function Feature({ icon: Icon, title, desc }: { icon: typeof IcBook; title: string; desc: string }) {
  return (
    <li className="flex items-start gap-3.5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--ss-mint)] text-[var(--ss-green-deep)]">
        <Icon width={19} height={19} />
      </span>
      <span className="leading-tight">
        <span className="block text-[14.5px] font-extrabold text-[var(--ss-ink)]">{title}</span>
        <span className="mt-1 block text-[12.5px] font-medium leading-snug text-[var(--ss-muted)]">{desc}</span>
      </span>
    </li>
  );
}

/* ---------- Panel: EduDigi ---------- */
function PanelEdudigi() {
  return (
    <div>
      <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--ss-green)] text-white">
              <IcGraduation width={20} height={20} />
            </span>
            <div className="leading-tight">
              <p className="text-[16px] font-extrabold text-[var(--ss-ink)]">
                Edu<span className="text-[var(--ss-green)]">Digi</span>
              </p>
              <p className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-[var(--ss-muted)]">
                Solusi Penguatan Literasi Digital
              </p>
            </div>
          </div>
          <h3 className="ss-h3 mt-6 text-[var(--ss-ink)]">
            Belajar Digital,
            <br />
            <span className="text-[var(--ss-green)]">Lebih Aman dan Produktif.</span>
          </h3>
          <p className="mt-4 max-w-[440px] text-[14.5px] leading-relaxed text-[var(--ss-muted)]">
            Program pembelajaran untuk meningkatkan literasi digital — memahami transaksi yang aman, memanfaatkan
            teknologi, dan membuka peluang produktif bersama ekosistem SAKU SULTAN.
          </p>
          <div className="mt-7 flex flex-wrap gap-3.5">
            <a href="#edudigi" className="ss-btn ss-btn-lime !py-3">
              Pelajari EduDigi
              <IcArrowRight width={16} height={16} />
            </a>
            <a href="#fasilitas" className="ss-btn ss-btn-outline-dark !py-3">
              Lihat Program
            </a>
          </div>
          <ul className="mt-8 grid gap-5 sm:grid-cols-3">
            <Feature icon={IcBook} title="Materi Praktis" desc="Modul relevan dan mudah dipahami" />
            <Feature icon={IcShieldCheck} title="Transaksi Aman" desc="Pahami keamanan digital" />
            <Feature icon={IcChart} title="Dukung Produktivitas" desc="Skill siap pakai di dunia kerja" />
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[460px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/saku/edudigi-students.jpg"
            alt="Peserta EduDigi belajar bersama"
            className="aspect-[4/3.4] w-full rounded-3xl object-cover shadow-[0_30px_70px_rgba(8,23,15,.18)]"
          />
          <div className="ss-float absolute -left-5 top-6 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 shadow-[0_16px_40px_rgba(8,23,15,.16)]">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ss-mint)] text-[var(--ss-green-deep)]">
              <IcSmartphone width={16} height={16} />
            </span>
            <span className="text-[12px] font-extrabold leading-tight text-[var(--ss-ink)]">
              Belajar Kapan Saja
              <br />
              <span className="font-semibold text-[var(--ss-muted)]">di Mana Saja</span>
            </span>
          </div>
          <div className="ss-float-slow absolute -bottom-5 -right-3 flex items-center gap-2.5 rounded-2xl bg-[var(--ss-pine)] px-4 py-3 text-white shadow-[0_16px_40px_rgba(8,23,15,.28)]">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ss-lime)]/20 text-[var(--ss-lime)]">
              <IcCheckCircle width={16} height={16} />
            </span>
            <span className="text-[12px] font-extrabold leading-tight">
              Sertifikat
              <br />
              <span className="font-semibold text-white/70">Sebagai Bukti Kompetensi</span>
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-5 border-t border-[var(--ss-line)] bg-[var(--ss-mist)] px-7 py-6 lg:flex-row lg:justify-between">
        <p className="text-[14px] font-extrabold text-[var(--ss-ink)]">
          Bersama EduDigi, Membangun Generasi Digital yang Lebih Siap.
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[12.5px] font-bold text-[var(--ss-muted)]">
          <li>
            <span className="text-[16px] font-extrabold text-[var(--ss-green)]">100K+</span> Peserta Terdaftar
          </li>
          <li>
            <span className="text-[16px] font-extrabold text-[var(--ss-green)]">50+</span> Modul Pembelajaran
          </li>
          <li>Komunitas Aktif di Seluruh Indonesia</li>
        </ul>
        <a href="#edudigi" className="ss-btn ss-btn-dark shrink-0 !px-5 !py-2.5 !text-[13px]">
          Lihat Semua Program EduDigi
          <IcArrowRight width={15} height={15} />
        </a>
      </div>
    </div>
  );
}

/* ---------- Panel: Q-Tra ---------- */
function PanelQtra() {
  const steps = ["Pilih Tujuan", "Masukkan Nominal", "Konfirmasi"];
  return (
    <div>
      <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--ss-mint)] px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[var(--ss-green-deep)]">
            <IcScan width={14} height={14} /> QTRA — Quick Transfer
          </span>
          <h3 className="ss-h3 mt-5 text-[var(--ss-ink)]">
            Transfer Lebih Cepat.
            <br />
            <span className="text-[var(--ss-green)]">Lebih Sederhana.</span>
          </h3>
          <p className="mt-4 max-w-[440px] text-[14.5px] leading-relaxed text-[var(--ss-muted)]">
            QTRA memangkas langkah transfer yang rumit — cukup pilih tujuan, masukkan nominal, dan konfirmasi.
            Selesai dalam hitungan detik.
          </p>
          <div className="mt-7 flex flex-wrap gap-3.5">
            <a href="#bantuan" className="ss-btn ss-btn-lime !py-3">
              Coba QTRA
              <IcArrowRight width={16} height={16} />
            </a>
            <a href="#proses" className="ss-btn ss-btn-outline-dark !py-3">
              Pelajari QTRA
            </a>
          </div>

          <p className="mt-8 text-[12px] font-extrabold uppercase tracking-[0.18em] text-[var(--ss-muted)]">
            Cara Kerja QTRA
          </p>
          <ol className="mt-3 flex flex-wrap items-center gap-2">
            {steps.map((s, i) => (
              <li key={s} className="flex items-center gap-2">
                <span className="flex items-center gap-2.5 rounded-full border border-[var(--ss-line)] bg-white py-2 pl-2 pr-4 shadow-[0_4px_14px_rgba(8,23,15,.05)]">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--ss-pine)] text-[11px] font-extrabold text-[var(--ss-lime)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[12.5px] font-bold text-[var(--ss-ink)]">{s}</span>
                </span>
                {i < steps.length - 1 ? (
                  <IcChevronRight width={15} height={15} className="text-[var(--ss-muted)]" />
                ) : null}
              </li>
            ))}
          </ol>

          <ul className="mt-8 grid gap-5 sm:grid-cols-3">
            <Feature icon={IcZap} title="Proses Sederhana" desc="Tanpa langkah berbelit" />
            <Feature icon={IcSmartphone} title="Kapan Saja" desc="Transfer 24/7 real-time" />
            <Feature icon={IcReceipt} title="Riwayat Tercatat" desc="Semua transaksi terekam rapi" />
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[460px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/payway/Q-tra.jpg"
            alt="Q-Tra Quick Transfer"
            className="aspect-square w-full rounded-3xl object-cover shadow-[0_30px_70px_rgba(8,23,15,.18)]"
          />
          <div className="ss-float absolute -bottom-6 left-1/2 w-[86%] -translate-x-1/2 rounded-2xl bg-white p-4 shadow-[0_20px_50px_rgba(8,23,15,.2)]">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--ss-mint)] text-[var(--ss-green)]">
                <IcCheckCircle width={19} height={19} />
              </span>
              <div className="flex-1 leading-tight">
                <p className="text-[13px] font-extrabold text-[var(--ss-ink)]">Transfer Berhasil!</p>
                <p className="text-[11.5px] font-semibold text-[var(--ss-muted)]">
                  Rp 500.000 dikirim ke Muhammad Arif
                </p>
              </div>
              <span className="text-[11px] font-extrabold text-[var(--ss-green)]">Lihat Detail</span>
            </div>
          </div>
          <div className="ss-float-slow absolute -right-4 top-6 flex items-center gap-2 rounded-2xl bg-[var(--ss-pine)] px-4 py-2.5 text-white shadow-[0_14px_36px_rgba(8,23,15,.3)]">
            <IcShieldCheck width={15} height={15} className="text-[var(--ss-lime)]" />
            <span className="text-[11.5px] font-extrabold">Aman dan Terpercaya</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-5 border-t border-[var(--ss-line)] bg-[var(--ss-mist)] px-7 py-6 lg:flex-row lg:justify-between">
        <p className="text-[13.5px] font-extrabold text-[var(--ss-ink)]">Terhubung dengan Berbagai Bank di Indonesia</p>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {["bca", "bri", "mandiri", "bni", "cimb-niaga"].map((b) => (
            <li key={b}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/images/payway/pay/${b}.svg`} alt={b.toUpperCase()} className="h-5 w-auto opacity-75" />
            </li>
          ))}
        </ul>
        <p className="flex items-center gap-2 text-[12px] font-bold text-[var(--ss-muted)]">
          <IcShieldCheck width={15} height={15} className="text-[var(--ss-green)]" />
          Sistem keamanan berlapis bersama mitra terpercaya
        </p>
      </div>
    </div>
  );
}

/* ---------- Panel: Passolo ---------- */
function PanelPassolo() {
  return (
    <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-2 lg:items-center">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full bg-[#f7edd8] px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#8a6a1f]">
          <IcHeartHand width={14} height={14} /> Passolo — Tanda Kasih Digital
        </span>
        <h3 className="ss-h3 mt-5 text-[var(--ss-ink)]">
          Tanda Kasih,
          <br />
          <span className="text-[var(--ss-green)]">Kini Lebih Praktis.</span>
        </h3>
        <p className="mt-4 max-w-[440px] text-[14.5px] leading-relaxed text-[var(--ss-muted)]">
          Budaya lokal dalam bentuk digital — kirim tanda kasih untuk pernikahan, syukuran, dan momen berharga
          lainnya sebagai bentuk turut berbahagia, langsung dari aplikasi SAKU SULTAN.
        </p>
        <div className="mt-7 flex flex-wrap gap-3.5">
          <a href="#bantuan" className="ss-btn ss-btn-lime !py-3">
            Kirim Passolo
            <IcArrowRight width={16} height={16} />
          </a>
          <a href="#proses" className="ss-btn ss-btn-outline-dark !py-3">
            Pelajari Passolo
          </a>
        </div>
        <ul className="mt-8 grid gap-5 sm:grid-cols-3">
          <Feature icon={IcHeartHand} title="Momen Pernikahan" desc="Bersama di setiap langkah kehidupan" />
          <Feature icon={IcSparkle} title="Syukuran & Hajatan" desc="Turut berbahagia lebih mudah" />
          <Feature icon={IcTrendingUp} title="Loyalitas Komunitas" desc="Gerakan sesama pengguna" />
        </ul>
      </div>
      <div className="relative mx-auto w-full max-w-[440px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/payway/Passolo.jpeg"
          alt="Passolo — bersama di setiap langkah kehidupan"
          className="w-full rounded-3xl object-cover shadow-[0_30px_70px_rgba(8,23,15,.18)]"
        />
        <div className="ss-float absolute -bottom-5 -left-4 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 shadow-[0_16px_40px_rgba(8,23,15,.16)]">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f7edd8] text-[#8a6a1f]">
            <IcHeartHand width={16} height={16} />
          </span>
          <span className="text-[12px] font-extrabold leading-tight text-[var(--ss-ink)]">
            Bersama di Setiap
            <br />
            <span className="font-semibold text-[var(--ss-muted)]">Langkah Kehidupan</span>
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------- Panel generik (Transfer, PPOB, Merchant) ---------- */
function PanelSimple({
  badge,
  badgeIcon: BadgeIcon,
  title,
  titleAccent,
  desc,
  cta,
  features,
  tiles,
}: {
  badge: string;
  badgeIcon: typeof IcSend;
  title: string;
  titleAccent: string;
  desc: string;
  cta: string;
  features: { icon: typeof IcSend; title: string; desc: string }[];
  tiles: { icon: typeof IcSend; label: string }[];
}) {
  return (
    <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-2 lg:items-center">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full bg-[var(--ss-mint)] px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[var(--ss-green-deep)]">
          <BadgeIcon width={14} height={14} /> {badge}
        </span>
        <h3 className="ss-h3 mt-5 text-[var(--ss-ink)]">
          {title}
          <br />
          <span className="text-[var(--ss-green)]">{titleAccent}</span>
        </h3>
        <p className="mt-4 max-w-[440px] text-[14.5px] leading-relaxed text-[var(--ss-muted)]">{desc}</p>
        <div className="mt-7">
          <a href="#bantuan" className="ss-btn ss-btn-lime !py-3">
            {cta}
            <IcArrowRight width={16} height={16} />
          </a>
        </div>
        <ul className="mt-8 grid gap-5 sm:grid-cols-3">
          {features.map((f) => (
            <Feature key={f.title} icon={f.icon} title={f.title} desc={f.desc} />
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
        {tiles.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-start gap-3 rounded-2xl border border-[var(--ss-line)] bg-[var(--ss-mist)] p-5 transition-transform duration-200 hover:-translate-y-1"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--ss-pine)] text-[var(--ss-lime)]">
              <Icon width={19} height={19} />
            </span>
            <span className="text-[14px] font-extrabold text-[var(--ss-ink)]">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Showcase bertab "Semua yang Kamu Butuhkan, dalam Satu Ekosistem." */
export function SsShowcase() {
  const [active, setActive] = useState<TabKey>("edudigi");

  useEffect(() => {
    const onOpen = (e: Event) => setActive((e as CustomEvent<TabKey>).detail);
    window.addEventListener(SHOWCASE_TAB_EVENT, onOpen);
    return () => window.removeEventListener(SHOWCASE_TAB_EVENT, onOpen);
  }, []);

  return (
    <section id="fitur" className="scroll-mt-24 bg-[var(--ss-mist)]">
      <div className="mx-auto w-full max-w-[1320px] px-5 py-20 md:px-8 lg:py-24">
        <SsReveal className="mx-auto max-w-[720px] text-center">
          <p className="ss-eyebrow flex items-center justify-center gap-3 text-[var(--ss-green)]">
            <span className="h-px w-9 bg-[var(--ss-green)]/60" />
            Fitur Unggulan
            <span className="h-px w-9 bg-[var(--ss-green)]/60" />
          </p>
          <h2 className="ss-h2 mt-4 text-[var(--ss-ink)]">
            Semua yang Kamu Butuhkan,
            <br />
            <span className="text-[var(--ss-green-deep)]">dalam Satu Ekosistem.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-[15px] leading-relaxed text-[var(--ss-muted)]">
            Solusi digital untuk transaksi, edukasi, produktivitas, dan peluang yang lebih besar di setiap langkah
            kehidupanmu.
          </p>
        </SsReveal>

        {/* Tab pills */}
        <SsReveal delay={120}>
          <div className="ss-noscrollbar mt-10 flex justify-start gap-3 overflow-x-auto pb-2 lg:justify-center">
            {TABS.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                type="button"
                onClick={() => setActive(key)}
                aria-pressed={active === key}
                className={cn(
                  "flex shrink-0 items-center gap-2.5 rounded-full border px-5 py-2.5 text-[13.5px] font-extrabold transition-all duration-200",
                  active === key
                    ? "border-[var(--ss-pine)] bg-[var(--ss-pine)] text-white shadow-[0_12px_30px_rgba(12,59,42,.3)]"
                    : "border-[var(--ss-line)] bg-white text-[var(--ss-ink)]/75 hover:border-[var(--ss-green)] hover:text-[var(--ss-green-deep)]"
                )}
              >
                <Icon width={16} height={16} className={active === key ? "text-[var(--ss-lime)]" : "text-[var(--ss-green)]"} />
                {label}
              </button>
            ))}
          </div>
        </SsReveal>

        {/* Panel aktif */}
        <SsReveal delay={180}>
          <div
            key={active}
            className="mt-8 overflow-hidden rounded-[32px] border border-[var(--ss-line)] bg-white shadow-[0_30px_80px_rgba(8,23,15,.08)]"
          >
            {active === "edudigi" ? <PanelEdudigi /> : null}
            {active === "qtra" ? <PanelQtra /> : null}
            {active === "passolo" ? <PanelPassolo /> : null}
            {active === "transfer" ? (
              <PanelSimple
                badge="Transfer — Semua Bank"
                badgeIcon={IcSend}
                title="Kirim Uang ke Mana Saja,"
                titleAccent="Tanpa Ribet."
                desc="Transfer ke semua bank dan e-wallet di Indonesia secara real-time. Cukup beberapa ketukan, dana langsung sampai tujuan."
                cta="Mulai Transfer"
                features={[
                  { icon: IcZap, title: "Real-Time", desc: "Terhubung BI-FAST 24/7" },
                  { icon: IcShieldCheck, title: "Aman", desc: "Verifikasi berlapis setiap transaksi" },
                  { icon: IcReceipt, title: "Tercatat", desc: "Bukti transfer otomatis tersimpan" },
                ]}
                tiles={[
                  { icon: IcSend, label: "Antar Bank" },
                  { icon: IcWallet, label: "Ke E-Wallet" },
                  { icon: IcUsers, label: "Sesama Sultan" },
                  { icon: IcQr, label: "Via QR" },
                ]}
              />
            ) : null}
            {active === "ppob" ? (
              <PanelSimple
                badge="PPOB — Bayar & Beli"
                badgeIcon={IcReceipt}
                title="Semua Tagihan,"
                titleAccent="Satu Aplikasi."
                desc="Bayar listrik, air, BPJS, TV kabel, hingga isi pulsa dan paket data. Semua kebutuhan rumah tangga selesai dalam satu tempat."
                cta="Bayar Tagihan"
                features={[
                  { icon: IcZap, title: "Instan", desc: "Pembayaran langsung terproses" },
                  { icon: IcReceipt, title: "Lengkap", desc: "Puluhan jenis tagihan tersedia" },
                  { icon: IcSparkle, title: "Banyak Promo", desc: "Cashback di berbagai layanan" },
                ]}
                tiles={[
                  { icon: IcPhoneSignal, label: "Pulsa & Data" },
                  { icon: IcZap, label: "Token PLN" },
                  { icon: IcShieldCheck, label: "BPJS" },
                  { icon: IcGrid, label: "PDAM & Lainnya" },
                ]}
              />
            ) : null}
            {active === "merchant" ? (
              <PanelSimple
                badge="Merchant — Mitra Usaha"
                badgeIcon={IcBuilding}
                title="Kembangkan Usaha,"
                titleAccent="Bersama Saku Sultan."
                desc="Terima pembayaran QRIS, pantau penjualan, dan tarik dana dengan cepat. Solusi lengkap untuk UMKM Indonesia naik kelas."
                cta="Daftar Merchant"
                features={[
                  { icon: IcQr, title: "QRIS Merchant", desc: "Terima semua e-wallet & bank" },
                  { icon: IcChart, title: "Laporan Penjualan", desc: "Dashboard real-time harian" },
                  { icon: IcZap, title: "Penarikan Cepat", desc: "Dana cair ke rekening kapan saja" },
                ]}
                tiles={[
                  { icon: IcBuilding, label: "UMKM & Toko" },
                  { icon: IcQr, label: "QRIS Statis & Dinamis" },
                  { icon: IcChart, label: "Analitik Usaha" },
                  { icon: IcWallet, label: "Settlement Fleksibel" },
                ]}
              />
            ) : null}
          </div>
        </SsReveal>
      </div>
    </section>
  );
}
