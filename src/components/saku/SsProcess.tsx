"use client";

import Image from "next/image";
import { useState } from "react";
import { SsReveal } from "./SsReveal";
import { IcArrowRight, IcChart, IcCheckCircle, IcDownload, IcSend, IcShieldCheck, IcStar, IcUsers, IcZap } from "./ss-icons";

const PLAY_STORE = "https://play.google.com/store/apps/details?id=com.saku_sultan";
const BENEFITS = [
  { icon: IcZap, title: "Cepat & Praktis", desc: "Transaksi kapan saja dan di mana saja." },
  { icon: IcShieldCheck, title: "Aman & Terpercaya", desc: "Keamanan berlapis untuk setiap kebutuhan digital." },
  { icon: IcChart, title: "Lebih Banyak Peluang", desc: "Jadi bagian dari ekosistem yang terus berkembang." },
];
const STEPS = [
  { title: "Download Aplikasi", desc: "Unduh Saku Sultan gratis di Google Play Store.", icon: IcDownload },
  { title: "Daftar Akun", desc: "Daftar menggunakan nomor ponsel dan lengkapi profil Anda di aplikasi.", icon: IcUsers },
  { title: "Mulai Transaksi", desc: "Pilih layanan favorit dan lakukan transaksi pertama Anda.", icon: IcSend },
];

<<<<<<< HEAD
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
=======
function StepPreview({ step }: { step: number }) {
  if (step === 0) return (
    <div className="ss-register-download">
      <div>
        <div className="ss-register-app-brand">
          <Image src="/images/saku-sultan-app-icon.png" alt="" width={48} height={48} />
          <span><strong>Saku Sultan</strong><small>Dompet Digital untuk Semua</small><span className="ss-register-rating"><IcStar width={13} height={13} />4.8 · Rating Play Store</span></span>
>>>>>>> 1044a1b (Update project)
        </div>
        <a href={PLAY_STORE} target="_blank" rel="noopener noreferrer" className="ss-register-store">
          <Image src="/images/payway/google-play.svg" alt="" width={28} height={28} />
          <span><small>Dapatkan di</small><strong>Google Play</strong></span>
        </a>
      </div>
      <a href={PLAY_STORE} target="_blank" rel="noopener noreferrer" className="ss-register-qr" aria-label="Unduh Saku Sultan di Google Play, atau pindai kode QR">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/saku/app-download-qr.svg" alt="Kode QR unduh Saku Sultan di Google Play" width={112} height={112} />
        <strong>Scan QR</strong><small>untuk download</small>
      </a>
    </div>
  );

  if (step === 1) return (
    <div className="ss-register-example">
      <h4>Buat Akun Baru</h4>
      <p>Contoh pendaftaran di aplikasi Saku Sultan.</p>
      <div className="ss-register-field"><span>Nama Lengkap</span><div><IcUsers width={17} height={17} />Masukkan nama lengkap Anda</div></div>
      <div className="ss-register-field"><span>Nomor HP</span><div>Nomor ponsel aktif Anda</div></div>
      <div className="ss-register-verification"><IcShieldCheck width={20} height={20} /><span>Verifikasi nomor HP<br /><small>Ikuti petunjuk verifikasi di aplikasi.</small></span></div>
      <a href={PLAY_STORE} target="_blank" rel="noopener noreferrer" className="ss-btn ss-btn-lime">Daftar di Aplikasi<IcArrowRight width={17} height={17} /></a>
    </div>
  );

  return (
    <div className="ss-register-example">
      <div className="ss-register-success"><IcCheckCircle width={40} height={40} /><div><h4>Transaksi Berhasil</h4><p>Contoh pembayaran melalui aplikasi.</p></div></div>
      <dl className="ss-register-receipt"><div><dt>Total</dt><dd>Rp250.000</dd></div><div><dt>Metode</dt><dd>Saldo Saku Sultan</dd></div></dl>
      <a href={PLAY_STORE} target="_blank" rel="noopener noreferrer" className="ss-btn ss-btn-lime">Mulai Transaksi<IcArrowRight width={17} height={17} /></a>
    </div>
  );
}

export function SsProcess() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="registrasi" className="ss-registration relative scroll-mt-24">
      <span id="proses" className="ss-anchor" aria-hidden="true" />
      <div className="ss-registration-inner">
        <div className="ss-registration-layout">
          <div>
            <SsReveal>
              <p className="ss-eyebrow text-[var(--ss-green)]">Registrasi & Alur Transaksi</p>
              <h2 className="ss-h2 mt-4 text-[var(--ss-ink)]">Mulai Transaksi dalam<br /><span className="text-[var(--ss-green)]">3 Langkah Mudah</span></h2>
              <p className="ss-register-intro">Ikuti langkah sederhana berikut untuk menikmati kemudahan bertransaksi bersama Saku Sultan.</p>
            </SsReveal>
            <div className="ss-register-visual">
              <ul className="ss-register-benefits">
                {BENEFITS.map(({ icon: Icon, title, desc }) => <li key={title}><span><Icon width={24} height={24} /></span><div><h3>{title}</h3><p>{desc}</p></div></li>)}
              </ul>
              <div className="ss-register-device" aria-hidden="true">
                <div className="ss-register-device-halo" />
                <Image src="/images/saku/phone-back.png" alt="" fill sizes="(min-width: 1024px) 300px, 280px" className="object-cover" />
                <p className="ss-script">Dompet Digital<br />untuk Masa Depan<br />Lebih Baik</p>
              </div>
            </div>
          </div>
          <SsReveal className="ss-register-timeline" delay={120}>
            <ol>
              {STEPS.map(({ title, desc, icon: Icon }, index) => (
                <li key={title} className={activeStep === index ? "is-active" : ""}>
                  <button type="button" onClick={() => setActiveStep(index)} aria-expanded={activeStep === index} aria-controls={`ss-register-step-${index}`}>
                    <span className="ss-register-number">0{index + 1}</span>
                    <span className="ss-register-step-icon"><Icon width={26} height={26} /></span>
                    <span className="ss-register-step-copy"><strong>{title}</strong><small>{desc}</small></span>
                  </button>
                  <div id={`ss-register-step-${index}`} hidden={activeStep !== index} className="ss-register-step-panel"><StepPreview step={index} /></div>
                </li>
              ))}
            </ol>
            <div className="ss-register-promise"><IcZap width={25} height={25} /><p><strong>Satu Aplikasi, Banyak Kemudahan</strong><span>Bayar, beli, dan transfer dalam satu genggaman.</span></p></div>
          </SsReveal>
        </div>
        <div className="ss-register-bottom">
          <p>Ekosistem Saku Sultan</p>
          <div><span><IcShieldCheck width={17} height={17} />Aman</span><span><IcZap width={17} height={17} />Cepat</span><span><IcUsers width={17} height={17} />Banyak Peluang</span></div>
          <strong>#CUANPERDETIK</strong>
        </div>
      </div>
    </section>
  );
}
