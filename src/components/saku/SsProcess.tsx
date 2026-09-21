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

function StepPreview({ step }: { step: number }) {
  if (step === 0) return (
    <div className="ss-register-download">
      <div>
        <div className="ss-register-app-brand">
          <Image src="/images/saku-sultan-app-icon.png" alt="" width={48} height={48} />
          <span><strong>Saku Sultan</strong><small>Dompet Digital untuk Semua</small><span className="ss-register-rating"><IcStar width={13} height={13} />4.8 · Rating Play Store</span></span>
        </div>
        <a href={PLAY_STORE} target="_blank" rel="noopener noreferrer" className="ss-register-store">
          <Image src="/images/payway/google-play.svg" alt="" width={28} height={28} />
          <span><small>Dapatkan di</small><strong>Google Play</strong></span>
        </a>
      </div>
      <a href={PLAY_STORE} target="_blank" rel="noopener noreferrer" className="ss-register-qr" aria-label="Unduh Saku Sultan di Google Play, atau pindai kode QR">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/saku/app-download-qr.svg" alt="Kode QR unduh Saku Sultan di Google Play" width={112} height={112} loading="lazy" decoding="async" />
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
