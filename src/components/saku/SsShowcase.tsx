"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { SsReveal } from "./SsReveal";
import { PwEduDigiCards } from "@/components/payway/PwEduDigiCards";
import { SsReferenceArtwork } from "./SsReferenceArtwork";
import { PwEduDigiBrand } from "@/components/payway/pw-edudigi-brand";
import { SHOWCASE_TAB_EVENT, type ShowcaseTab } from "./ss-showcase-bus";
import {
  IcArrowRight,
  IcBook,
  IcBuilding,
  IcChart,
  IcCheckCircle,
  IcChevronRight,
  IcGraduation,
  IcGift,
  IcGrid,
  IcHeartHand,
  IcPhoneSignal,
  IcQr,
  IcReceipt,
  IcScan,
  IcSend,
  IcShieldCheck,
  IcShoppingBag,
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
  { key: "qris", label: "QRIS", icon: IcQr },
  { key: "transfer", label: "Transfer", icon: IcSend },
  { key: "ppob", label: "PPOB", icon: IcReceipt },
  { key: "passolo", label: "Passolo", icon: IcGift },
  { key: "merchant", label: "Merchant", icon: IcBuilding },
];

function Feature({ icon: Icon, title, desc }: { icon: typeof IcBook; title: string; desc: string }) {
  return (
    <li className="ss-showcase-benefit flex items-start gap-3.5">
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
      <div className="ss-edudigi-showcase grid gap-10 p-7 sm:p-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center">
        <div>
          <div className="ss-edudigi-lockup"><PwEduDigiBrand id="ss-showcase-brand" /></div>
          <h3 className="ss-h3 mt-6 text-[var(--ss-ink)]">
            Belajar Digital<br /><span className="text-[var(--ss-green)]">Lebih Aman dan Produktif.</span>
          </h3>
          <p className="mt-4 max-w-[440px] text-[14.5px] leading-relaxed text-[var(--ss-muted)]">
            EduDigi adalah program edukasi digital SAKU SULTAN, yang dirancang untuk membantu kamu memahami teknologi, mengelola keuangan digital, dan memanfaatkan peluang di era digital.
          </p>
          <div className="mt-7 flex flex-wrap gap-3.5">
            <Link href="/produk/edudigi" className="ss-btn ss-btn-lime !py-3">
              Pelajari EduDigi
              <IcArrowRight width={16} height={16} />
            </Link>
            <a href="#fasilitas" className="ss-btn ss-btn-outline-dark !py-3">
              Lihat Program
            </a>
          </div>
          <ul className="ss-showcase-benefits mt-8 grid gap-5 sm:grid-cols-3">
            <Feature icon={IcBook} title="Materi Praktis dan Relevan" desc="Disusun dengan bahasa yang mudah dipahami untuk semua kalangan." />
            <Feature icon={IcShieldCheck} title="Transaksi Lebih Aman" desc="Pelajari cara menjaga PIN, OTP, dan data pribadi di dunia digital." />
            <Feature icon={IcChart} title="Dukung Produktivitas" desc="Manfaatkan teknologi untuk aktivitas, usaha, dan masa depan yang lebih baik." />
          </ul>
        </div>

        <div className="min-w-0 w-full">
          <SsReferenceArtwork kind="edudigi" />
          <details className="ss-membership-disclosure"><summary>Kartu EduDigi & Startup<IcChevronRight width={17} height={17} /></summary><div><PwEduDigiCards /></div></details>
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
            <a href="#registrasi" className="ss-btn ss-btn-lime !py-3">
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

          <ul className="ss-showcase-benefits mt-8 grid gap-5 sm:grid-cols-3">
            <Feature icon={IcZap} title="Proses Sederhana" desc="Tanpa langkah berbelit" />
            <Feature icon={IcSmartphone} title="Kapan Saja" desc="Transfer 24/7 real-time" />
            <Feature icon={IcReceipt} title="Riwayat Tercatat" desc="Semua transaksi terekam rapi" />
          </ul>
        </div>

        <div className="relative min-w-0 w-full">
          <SsReferenceArtwork kind="qtra" />
          <details className="ss-product-original"><summary>Lihat ilustrasi Q-Tra <IcArrowRight width={15} height={15} /></summary><a href="/images/saku/qtra-poster.webp" target="_blank" rel="noopener noreferrer">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/images/saku/qtra-poster.webp" alt="Q-Tra — transfer dana lebih cepat dan mudah" loading="lazy" /></a></details>
        </div>
      </div>

      <div className="flex flex-col items-center gap-5 border-t border-[var(--ss-line)] bg-[var(--ss-mist)] px-7 py-6 lg:flex-row lg:justify-between">
        <p className="text-[13.5px] font-extrabold text-[var(--ss-ink)]">Terhubung dengan Berbagai Bank di Indonesia</p>
        <ul className="ss-bank-logos flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {["bca", "bri", "mandiri", "bni", "cimb-niaga"].map((b) => (
            <li key={b}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/images/payway/pay/${b}.svg`} alt={b.toUpperCase()} width={40} height={20} loading="lazy" decoding="async" className="h-5 w-auto opacity-75" />
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
    <div>
    <div className="ss-passolo-panel grid gap-10 p-7 sm:p-10 lg:grid-cols-2 lg:items-center">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full bg-[var(--ss-mint)] px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[var(--ss-green-deep)]">
          <IcGift width={14} height={14} /> PASSOLO
        </span>
        <h3 className="ss-h3 mt-5 text-[var(--ss-ink)]">
          Tanda Kasih,
          <br />
          <span className="text-[var(--ss-green)]">Kini Lebih Praktis.</span>
        </h3>
        <p className="mt-4 max-w-[440px] text-[14.5px] leading-relaxed text-[var(--ss-muted)]">
          Kirim tanda kasih untuk momen penting dalam hidup melalui SAKU SULTAN dengan cara yang mudah, aman, dan tercatat. Karena setiap kebaikan selalu berarti.
        </p>
        <h4 className="mt-5 text-sm font-bold text-[var(--ss-ink)]">Untuk Berbagai Momen Kehidupan</h4>
        <ul className="ss-passolo-moments">{[
          { label: "Pernikahan", icon: IcHeartHand }, { label: "Pendidikan", icon: IcGraduation },
          { label: "Kedukaan", icon: IcUsers }, { label: "Bencana", icon: IcShieldCheck },
        ].map(({ label, icon: Icon }) => <li key={label}><Icon width={16} height={16} />{label}</li>)}</ul>
        <div className="mt-7 flex flex-wrap gap-3.5">
          <a href="#registrasi" className="ss-btn ss-btn-lime !py-3">
            Kirim Passolo
            <IcArrowRight width={16} height={16} />
          </a>
          <a href="#proses" className="ss-btn ss-btn-outline-dark !py-3">
            Pelajari Passolo
          </a>
        </div>
        <ul className="ss-showcase-benefits mt-8 grid gap-5 sm:grid-cols-3">
          <Feature icon={IcGift} title="Kirim Tanda Kasih" desc="Untuk berbagai momen penting dengan proses yang praktis." />
          <Feature icon={IcUsers} title="Tetap Terhubung" desc="Tetap dapat memberikan perhatian meski tidak hadir secara langsung." />
          <Feature icon={IcReceipt} title="Riwayat Tercatat" desc="Lihat kembali aktivitas Passolo dengan lebih mudah." />
        </ul>
      </div>
      <div className="relative min-w-0 w-full">
        <SsReferenceArtwork kind="passolo" />
      </div>
    </div>
    <div className="ss-passolo-trust"><span><strong>100K+</strong>Tanda Kasih Terkirim</span><span><strong>1M+</strong>Penerima Merasakan Manfaat</span><span><IcShieldCheck width={24} height={24} />Transaksi Aman dan Terpercaya</span><a href="#testimoni">Lihat Cerita Mereka<IcArrowRight width={16} height={16} /></a></div>
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
  art,
  artAlt,
}: {
  badge: string;
  badgeIcon: typeof IcSend;
  title: string;
  titleAccent: string;
  desc: string;
  cta: string;
  features: { icon: typeof IcSend; title: string; desc: string }[];
  tiles: { icon: typeof IcSend; label: string }[];
  /** Berkas di /images/saku; render 3D kampanye, bukan ilustrasi vektor. */
  art: string;
  artAlt: string;
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
          <a href="#registrasi" className="ss-btn ss-btn-lime !py-3">
            {cta}
            <IcArrowRight width={16} height={16} />
          </a>
        </div>
        <ul className="ss-showcase-benefits mt-8 grid gap-5 sm:grid-cols-3">
          {features.map((f) => (
            <Feature key={f.title} icon={f.icon} title={f.title} desc={f.desc} />
          ))}
        </ul>
      </div>
      <div className="min-w-0">
        <figure className="ss-panel-art-frame">
          <Image src={art} alt={artAlt} width={880} height={620} sizes="(min-width: 1024px) 560px, 92vw" className="ss-panel-art" />
        </figure>
        <ul className="ss-panel-tiles">
          {tiles.map(({ icon: Icon, label }) => (
            <li key={label}>
              <span>
                <Icon width={17} height={17} />
              </span>
              {label}
            </li>
          ))}
        </ul>
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
          <div role="tablist" aria-label="Produk Saku Sultan" className="ss-noscrollbar mt-10 flex justify-start gap-3 overflow-x-auto pb-2 lg:justify-center">
            {TABS.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                type="button"
                role="tab"
                id={`ss-product-tab-${key}`}
                aria-controls="ss-product-panel"
                aria-selected={active === key}
                tabIndex={active === key ? 0 : -1}
                onClick={() => setActive(key)}
                onKeyDown={event => {
                  const index = TABS.findIndex(tab => tab.key === key);
                  let next = index;
                  if (event.key === "ArrowRight") next = (index + 1) % TABS.length;
                  else if (event.key === "ArrowLeft") next = (index - 1 + TABS.length) % TABS.length;
                  else if (event.key === "Home") next = 0;
                  else if (event.key === "End") next = TABS.length - 1;
                  else return;
                  event.preventDefault();
                  setActive(TABS[next].key);
                  document.getElementById(`ss-product-tab-${TABS[next].key}`)?.focus();
                }}
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
            id="ss-product-panel"
            role="tabpanel"
            aria-labelledby={`ss-product-tab-${active}`}
            tabIndex={0}
            className="mt-8 overflow-hidden rounded-[32px] border border-[var(--ss-line)] bg-white shadow-[0_30px_80px_rgba(8,23,15,.08)]"
          >
            {active === "edudigi" ? <PanelEdudigi /> : null}
            {active === "qtra" ? <PanelQtra /> : null}
            {active === "passolo" ? <PanelPassolo /> : null}
            {active === "qris" ? (
              <PanelSimple
                badge="QRIS — Bayar dengan Scan"
                badgeIcon={IcQr}
                title="Scan QRIS di Mana Saja,"
                titleAccent="Satu Aplikasi Cukup."
                desc="QRIS adalah standar kode QR pembayaran nasional dari Bank Indonesia. Pindai kode QRIS di kasir, periksa nama merchant dan nominal, lalu bayar dari saldo Saku Sultan — berlaku di semua merchant berlogo QRIS."
                cta="Bayar dengan QRIS"
                features={[
                  { icon: IcQr, title: "Satu Kode untuk Semua", desc: "Berlaku di semua merchant QRIS" },
                  { icon: IcZap, title: "Tanpa Uang Tunai", desc: "Bayar pas, tanpa repot kembalian" },
                  { icon: IcShieldCheck, title: "Terverifikasi", desc: "Nama merchant tampil sebelum bayar" },
                ]}
                tiles={[
                  { icon: IcQr, label: "QRIS Statis" },
                  { icon: IcScan, label: "QRIS Dinamis" },
                  { icon: IcShoppingBag, label: "Toko, Warung & Kafe" },
                  { icon: IcReceipt, label: "Bukti Tersimpan" },
                ]}
                art="/images/saku/panel-qris.webp"
                artAlt="Standee QRIS di kasir Kopi Nusantara dipindai dari aplikasi Saku Sultan, pembayaran Rp 45.000 berhasil"
              />
            ) : null}
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
                art="/images/saku/panel-transfer.webp"
                artAlt="Transfer Rp 250.000 dari aplikasi Saku Sultan ke rekening bank, e-wallet, dan sesama pengguna"
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
                art="/images/saku/panel-ppob.webp"
                artAlt="Total tagihan Rp 283.800 untuk pulsa, token PLN, BPJS, dan PDAM dibayar sekaligus"
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
                art="/images/saku/panel-merchant.webp"
                artAlt="Standee QRIS Saku Sultan di konter usaha dengan penjualan harian Rp 1.482.000 dan laporan mingguan"
              />
            ) : null}
          </div>
        </SsReveal>
      </div>
    </section>
  );
}
