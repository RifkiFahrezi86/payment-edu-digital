export type PartnerLogo = { name: string; logo: string; sub?: string };

export const CORE_PARTNERS: PartnerLogo[] = [
  { name: "Bank Indonesia", logo: "/images/payway/pay/bank-indonesia.png", sub: "Bank Sentral Republik Indonesia" },
  { name: "BRICK", logo: "/images/payway/pay/brick.png", sub: "Infrastruktur Finansial" },
  { name: "BMT", logo: "/images/payway/pay/bmt-reference.png" },
];

/**
 * Lembaga pengawas dan jaringan pembayaran. Setiap berkas berasal dari sumber
 * resmi (Wikimedia Commons, Wikipedia Indonesia, zonalogo, publikasi BI) dan
 * latarnya dihapus lewat flood fill supaya menyatu di tema terang maupun gelap.
 *
 * Hanya logo berbentuk wordmark yang masuk daftar ini: strip pendukung
 * menyusunnya dalam satu baris, sehingga lambang bujur sangkar akan memecah
 * tinggi baris. Logo lembaga berbentuk lencana dipakai di tempat lain.
 */
export const REGULATOR_PARTNERS: PartnerLogo[] = [
  { name: "OJK", logo: "/images/payway/pay/ojk.webp", sub: "Otoritas Jasa Keuangan" },
  { name: "BI-FAST", logo: "/images/payway/pay/bi-fast.webp", sub: "Transfer Real-Time Nasional" },
];

/**
 * Penanda legalitas EduDigi. Dipakai pada strip di bawah tahapan legalitas —
 * isinya harus sejalan dengan dokumen yang disebut di sana (OSS menerbitkan
 * NIB dengan klasifikasi KBLI), bukan mitra pembayaran.
 */
export const LEGAL_PARTNERS: PartnerLogo[] = [
  { name: "OSS", logo: "/images/payway/pay/oss.svg", sub: "Perizinan Berusaha Terintegrasi" },
  { name: "NIB", logo: "/images/payway/pay/nib.svg", sub: "Nomor Induk Berusaha" },
  { name: "KBLI", logo: "/images/payway/pay/kbli.svg", sub: "Klasifikasi Lapangan Usaha" },
  { name: "Saku Sultan", logo: "/images/payway/pay/saku-sultan.webp", sub: "Ekosistem Digital" },
];

/** Tagihan layanan publik yang dilayani menu PPOB. */
export const BILLER_PARTNERS: PartnerLogo[] = [
  { name: "PLN", logo: "/images/payway/pay/pln.svg" },
  { name: "PDAM", logo: "/images/payway/pay/pdam.webp" },
  { name: "BPJS Kesehatan", logo: "/images/payway/pay/bpjs-kesehatan.svg" },
  { name: "BPJS Ketenagakerjaan", logo: "/images/payway/pay/bpjs-ketenagakerjaan.svg" },
];

export const PAYMENT_PARTNERS: PartnerLogo[] = [
  { name: "Mandiri", logo: "/images/payway/pay/mandiri.svg" },
  { name: "BRI", logo: "/images/payway/pay/bri.svg" },
  { name: "BCA", logo: "/images/payway/pay/bca.svg" },
  { name: "BNI", logo: "/images/payway/pay/bni.svg" },
  { name: "CIMB Niaga", logo: "/images/payway/pay/cimb-niaga.svg" },
  { name: "Permata", logo: "/images/payway/pay/permata.svg" },
  { name: "QRIS", logo: "/images/payway/pay/qris.svg" },
  { name: "OVO", logo: "/images/payway/pay/ovo.svg" },
  { name: "GoPay", logo: "/images/payway/pay/gopay.svg" },
  { name: "DANA", logo: "/images/payway/pay/dana.svg" },
  { name: "ShopeePay", logo: "/images/payway/pay/shopeepay.svg" },
  { name: "LinkAja", logo: "/images/payway/pay/linkaja.svg" },
  { name: "Telkomsel", logo: "/images/payway/pay/telkomsel.svg" },
  { name: "XL", logo: "/images/payway/pay/xl.svg" },
  { name: "Indosat", logo: "/images/payway/pay/indosat.svg" },
  { name: "Tri", logo: "/images/payway/pay/tri.svg" },
  { name: "Smartfren", logo: "/images/payway/pay/smartfren.svg" },
];

export const TRUSTED_PARTNERS = [
  ...CORE_PARTNERS,
  ...REGULATOR_PARTNERS,
  ...PAYMENT_PARTNERS,
  ...BILLER_PARTNERS,
];
