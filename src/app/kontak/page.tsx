import type { Metadata } from "next";
import Link from "next/link";
import { SsNav } from "@/components/saku/SsNav";
import { SsCtaFooter } from "@/components/saku/SsCtaFooter";
import { SsWhatsapp } from "@/components/saku/SsWhatsapp";
import { SsContactForm } from "@/components/saku/SsContactForm";

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
          <SsContactForm />
        </div>
      </section>
      <SsCtaFooter />
      <SsWhatsapp />
    </main>
  );
}
