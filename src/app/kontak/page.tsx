import type { Metadata } from "next";
import Link from "next/link";
import { SsNav } from "@/components/saku/SsNav";
import { SsCtaFooter } from "@/components/saku/SsCtaFooter";
import { SsWhatsapp } from "@/components/saku/SsWhatsapp";
import { IcArrowRight } from "@/components/saku/ss-icons";

export const metadata: Metadata = {
  title: "Hubungi Kami — Saku Sultan",
  description: "Kirim pertanyaan, masukan, atau permohonan penghapusan akun Saku Sultan.",
};

export default function KontakPage() {
  return (
    <main className="ss-site w-full overflow-x-clip">
      <SsNav />
      <section className="bg-[#041f15] px-5 pb-16 pt-28 text-white md:pb-20 md:pt-36">
        <div className="mx-auto max-w-[1120px]">
          <Link href="/#bantuan" className="text-sm text-white/75 hover:text-white">← Kembali ke Bantuan</Link>
          <p className="ss-eyebrow mt-10 text-[var(--ss-lime)]">Hubungi Kami</p>
          <h1 className="ss-h1 mt-4">Kami siap <span className="text-[var(--ss-lime)]">mendengar.</span></h1>
          <p className="mt-5 max-w-[600px] text-white/75">Ada pertanyaan, masukan, atau ingin mengajukan penghapusan akun? Isi formulir berikut agar tim kami dapat memahami kebutuhan Anda.</p>
        </div>
      </section>
      <section className="bg-[var(--ss-mist)] px-5 py-14 md:py-20">
        <div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <h2 className="ss-h3 text-[var(--ss-ink)]">Sampaikan kebutuhan Anda</h2>
            <p className="mt-4 leading-relaxed text-[var(--ss-muted)]">Untuk permohonan penghapusan akun, gunakan email yang terdaftar dan sertakan nomor ponsel akun. Tim akan menghubungi Anda untuk verifikasi sebelum memproses permohonan.</p>
            <p className="mt-6 text-sm text-[var(--ss-muted)]">Email dukungan: <a className="font-bold text-[var(--ss-green-deep)] underline" href="mailto:minsu@sakusultan.com">minsu@sakusultan.com</a></p>
          </div>
          <form action="mailto:minsu@sakusultan.com" method="post" encType="text/plain" className="grid gap-5 rounded-3xl border border-[var(--ss-line)] bg-white p-6 shadow-sm sm:grid-cols-2 sm:p-9">
            <label className="grid gap-2 text-sm font-bold text-[var(--ss-ink)]">Nama
              <input name="Nama" required autoComplete="name" maxLength={100} placeholder="Nama lengkap" className="min-h-12 rounded-xl border border-[var(--ss-line)] bg-[var(--ss-mist)] px-4 font-normal outline-[var(--ss-green)]" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-[var(--ss-ink)]">Email
              <input name="Email" type="email" required autoComplete="email" maxLength={254} placeholder="nama@email.com" className="min-h-12 rounded-xl border border-[var(--ss-line)] bg-[var(--ss-mist)] px-4 font-normal outline-[var(--ss-green)]" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-[var(--ss-ink)] sm:col-span-2">Keperluan
              <select name="Keperluan" required defaultValue="" className="min-h-12 rounded-xl border border-[var(--ss-line)] bg-[var(--ss-mist)] px-4 font-normal outline-[var(--ss-green)]">
                <option value="" disabled>Pilih keperluan</option>
                <option value="Permohonan penghapusan akun">Permohonan penghapusan akun</option>
                <option value="Pertanyaan layanan">Pertanyaan layanan</option>
                <option value="Masukan dan saran">Masukan dan saran</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-bold text-[var(--ss-ink)] sm:col-span-2">Nomor ponsel akun <span className="font-normal text-[var(--ss-muted)]">(jika terkait akun)</span>
              <input name="Nomor ponsel akun" type="tel" inputMode="tel" autoComplete="tel" maxLength={20} placeholder="Contoh: 08xxxxxxxxxx" className="min-h-12 rounded-xl border border-[var(--ss-line)] bg-[var(--ss-mist)] px-4 font-normal outline-[var(--ss-green)]" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-[var(--ss-ink)] sm:col-span-2">Pesan
              <textarea name="Pesan" required minLength={10} maxLength={3000} rows={6} placeholder="Jelaskan pertanyaan atau permohonan Anda" className="rounded-xl border border-[var(--ss-line)] bg-[var(--ss-mist)] p-4 font-normal outline-[var(--ss-green)]" />
            </label>
            <p className="text-xs leading-relaxed text-[var(--ss-muted)] sm:col-span-2">Tombol kirim membuka aplikasi email Anda. Periksa kembali isi pesan, lalu kirim dari aplikasi email tersebut. Jangan cantumkan PIN, kata sandi, atau OTP.</p>
            <button type="submit" className="ss-btn ss-btn-lime w-fit sm:col-span-2">Buka Email untuk Mengirim <IcArrowRight width={17} height={17} /></button>
          </form>
        </div>
      </section>
      <SsCtaFooter />
      <SsWhatsapp />
    </main>
  );
}
