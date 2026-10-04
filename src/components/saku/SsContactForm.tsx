"use client";

import { useState, type FormEvent } from "react";
import { IcArrowRight, IcCheckCircle } from "./ss-icons";

/** Tujuan formulir; endpoint PHP-nya ada di public/kirim-pesan.php. */
const EMAIL_TUJUAN = "admin@sakusultan.com";
const ENDPOINT = "/kirim-pesan.php";
// Harus sama dengan KEPERLUAN di public/kirim-pesan.php.
const KEPERLUAN = ["Permohonan penghapusan akun", "Pertanyaan layanan", "Masukan dan saran", "Lainnya"];

const FIELD = "min-h-12 rounded-xl border border-[var(--ss-line)] bg-[var(--ss-mist)] px-4 font-normal outline-[var(--ss-green)]";
const LABEL = "grid gap-2 text-sm font-bold text-[var(--ss-ink)]";

type Status = { state: "idle" | "sending" | "sent" } | { state: "error"; message: string; mailto: string };

/** Tautan cadangan berisi isian saat ini, dipakai bila server tidak bisa dihubungi. */
function mailtoFallback(data: FormData): string {
  const baris = [["Nama", "nama"], ["Email", "email"], ["Keperluan", "keperluan"], ["Nomor ponsel akun", "telepon"], ["Pesan", "pesan"]]
    .map(([label, name]) => `${label}: ${String(data.get(name) ?? "")}`)
    .join("\n");
  const subjek = `[Kontak Web] ${String(data.get("keperluan") ?? "")}`;
  return `mailto:${EMAIL_TUJUAN}?subject=${encodeURIComponent(subjek)}&body=${encodeURIComponent(baris)}`;
}

/** Formulir /contact-us: mengirim isian ke kotak masuk admin lewat endpoint PHP di hosting. */
export function SsContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [sentTo, setSentTo] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus({ state: "sending" });

    const res = await fetch(ENDPOINT, { method: "POST", body: data, headers: { Accept: "application/json" } }).catch(() => null);
    const json: { ok?: boolean; error?: string } | null = res ? await res.json().catch(() => null) : null;

    if (res?.ok && json?.ok) {
      setSentTo(String(data.get("email") ?? ""));
      setStatus({ state: "sent" });
      form.reset();
      return;
    }
    setStatus({
      state: "error",
      message: json?.error ?? "Server pengirim tidak dapat dihubungi. Coba lagi, atau kirim lewat aplikasi email Anda.",
      mailto: mailtoFallback(data),
    });
  }

  if (status.state === "sent") {
    return (
      <div role="status" className="flex flex-col items-start gap-4 rounded-3xl border border-[var(--ss-line)] bg-white p-6 shadow-sm sm:p-9">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--ss-mint)] text-[var(--ss-green-deep)]">
          <IcCheckCircle width={24} height={24} />
        </span>
        <h3 className="ss-h3 text-[var(--ss-ink)]">Pesan terkirim.</h3>
        <p className="max-w-[520px] leading-relaxed text-[var(--ss-muted)]">
          Terima kasih. Pesan Anda sudah diteruskan ke tim Saku Sultan; balasan akan dikirim ke <strong className="text-[var(--ss-ink)]">{sentTo}</strong>.
        </p>
        <button type="button" onClick={() => setStatus({ state: "idle" })} className="ss-btn ss-btn-outline-dark">
          Kirim pesan lain
        </button>
      </div>
    );
  }

  const sending = status.state === "sending";

  return (
    <form onSubmit={handleSubmit} className="relative grid gap-5 rounded-3xl border border-[var(--ss-line)] bg-white p-6 shadow-sm sm:grid-cols-2 sm:p-9">
      <label className={LABEL}>Nama
        <input name="nama" required autoComplete="name" minLength={2} maxLength={100} placeholder="Nama lengkap" className={FIELD} />
      </label>
      <label className={LABEL}>Email
        <input name="email" type="email" required autoComplete="email" maxLength={254} placeholder="nama@email.com" className={FIELD} />
      </label>
      <label className={`${LABEL} sm:col-span-2`}>Keperluan
        <select name="keperluan" required defaultValue="" className={FIELD}>
          <option value="" disabled>Pilih keperluan</option>
          {KEPERLUAN.map(k => <option key={k} value={k}>{k}</option>)}
        </select>
      </label>
      <label className={`${LABEL} sm:col-span-2`}>Nomor ponsel akun <span className="font-normal text-[var(--ss-muted)]">(jika terkait akun)</span>
        <input name="telepon" type="tel" inputMode="tel" autoComplete="tel" maxLength={20} placeholder="Contoh: 08xxxxxxxxxx" className={FIELD} />
      </label>
      <label className={`${LABEL} sm:col-span-2`}>Pesan
        <textarea name="pesan" required minLength={10} maxLength={3000} rows={6} placeholder="Jelaskan pertanyaan atau permohonan Anda" className={`${FIELD} p-4`} />
      </label>
      {/* Honeypot anti-bot: di luar layar, dibiarkan kosong oleh manusia, diisi bot. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>Situs web<input name="situs" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <p className="text-xs leading-relaxed text-[var(--ss-muted)] sm:col-span-2">
        Pesan dikirim langsung ke tim Saku Sultan dan dibalas ke email yang Anda isi. Jangan cantumkan PIN, kata sandi, atau OTP.
      </p>
      {status.state === "error" && (
        <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-relaxed text-red-800 sm:col-span-2">
          {status.message}{" "}
          <a href={status.mailto} className="font-bold underline">Kirim lewat email</a>
        </p>
      )}
      <button type="submit" disabled={sending} aria-busy={sending} className="ss-btn ss-btn-lime w-fit sm:col-span-2 disabled:cursor-wait disabled:opacity-70">
        {sending ? "Mengirim…" : "Kirim Pesan"} <IcArrowRight width={17} height={17} />
      </button>
    </form>
  );
}
