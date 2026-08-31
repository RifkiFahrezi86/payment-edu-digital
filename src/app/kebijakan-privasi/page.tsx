const ITEMS = [
  "Saku Sultan hanya mengumpulkan data yang diperlukan untuk registrasi akun, verifikasi identitas, dan pemrosesan transaksi.",
  "Informasi pengguna disimpan dengan perlindungan berlapis dan tidak dibagikan ke pihak lain tanpa dasar hukum atau persetujuan.",
  "Riwayat transaksi dapat digunakan untuk menampilkan status pembayaran, promo yang relevan, dan peningkatan kualitas layanan.",
  "Pengguna dapat menghubungi cs@sakusultan.id jika membutuhkan bantuan terkait data pribadi atau keamanan akun.",
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-[#042718]">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#198F38]">
          Saku Sultan
        </p>
        <h1 className="mb-4 font-heading text-4xl font-semibold tracking-tight">
          Kebijakan Privasi
        </h1>
        <p className="mb-10 text-lg leading-8 text-[#042718]/75">
          Halaman ringkas ini memastikan tautan privasi bekerja dan memberi
          konteks dasar kepada pengunjung landing page.
        </p>

        <div className="space-y-4">
          {ITEMS.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-[#042718]/8 bg-[#F6FDFF] p-5"
            >
              <p className="leading-7 text-[#042718]/80">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
