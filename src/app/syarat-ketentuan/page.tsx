const ITEMS = [
  "Saku Sultan menyediakan layanan transaksi digital seperti pulsa, paket data, pembayaran tagihan, top-up e-money, dan QRIS.",
  "Pengguna wajib memastikan data akun dan nominal transaksi sudah benar sebelum pembayaran dikonfirmasi.",
  "Promo, cashback, dan penawaran khusus dapat berubah sewaktu-waktu sesuai kebijakan Saku Sultan.",
  "Apabila terjadi kendala transaksi, pengguna dapat menghubungi layanan pelanggan melalui WhatsApp atau email resmi.",
  "Dengan menggunakan layanan ini, pengguna dianggap menyetujui ketentuan penggunaan yang berlaku.",
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-[#042718]">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#198F38]">
          Saku Sultan
        </p>
        <h1 className="mb-4 font-heading text-4xl font-semibold tracking-tight">
          Syarat &amp; Ketentuan
        </h1>
        <p className="mb-10 text-lg leading-8 text-[#042718]/75">
          Ringkasan ini disediakan untuk halaman landing agar tautan legal tidak
          berakhir ke path kosong.
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
