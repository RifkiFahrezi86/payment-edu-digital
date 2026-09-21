import type { CampaignPoster } from "@/components/payway/pw-campaign-poster";

const IMAGE_PATH = "/images/IMAGE";

// Paired files from the supplied folder are the desktop/mobile editions.
export const EDUDIGI_POSTERS: CampaignPoster[] = [
  {
    src: `${IMAGE_PATH}/1.jpeg`, mobileSrc: `${IMAGE_PATH}/2.jpeg`, width: 1600, height: 900,
    title: "Apa itu EduDigi?",
    description: "Lembaga pendidikan dan pelatihan digital nonformal untuk membangun masyarakat yang cakap, aman, produktif, dan adaptif.",
  },
  {
    src: `${IMAGE_PATH}/3.jpeg`, width: 1600, height: 900,
    title: "Tujuan Program EduDigi",
    description: "Membentuk peserta yang cakap digital, aman digital, produktif, dan mandiri melalui literasi, inovasi, dan kolaborasi.",
  },
  {
    src: `${IMAGE_PATH}/4.jpeg`, width: 1600, height: 900,
    title: "Bukan Sekadar Belajar Digital",
    description: "Pahami dasar dan potensinya, praktikkan dengan pendampingan, manfaatkan peluang nyata, dan jadi produktif.",
  },
  {
    src: `${IMAGE_PATH}/6.jpeg`, mobileSrc: `${IMAGE_PATH}/9.jpeg`, width: 1600, height: 900,
    title: "Visi & Misi EduDigi",
    description: "Pendidikan digital yang unggul, terpercaya, dan adaptif melalui belajar, praktik, pelatihan, pendampingan, serta kolaborasi.",
  },
  {
    src: `${IMAGE_PATH}/7.jpeg`, mobileSrc: `${IMAGE_PATH}/10.jpeg`, width: 1600, height: 900,
    title: "Legalitas EduDigi",
    description: "Pengembangan bertahap melalui akta pendirian yayasan, identitas kelembagaan, NIB dan KBLI melalui OSS, serta pemenuhan perizinan operasional.",
  },
];

export const EDUDIGI_CLASS_POSTER: CampaignPoster = {
  src: `${IMAGE_PATH}/5.jpeg`, width: 1365, height: 768,
  title: "Bergabung dengan Ekosistem EduDigi",
  description: "Kelas Rp200.000 dengan voucher EduDigi, modul, sertifikat, dan dukungan sponsor Saku Sultan berupa saldo Rp50.000.",
};

export const VTN_POSTER: CampaignPoster = {
  src: `${IMAGE_PATH}/8.jpeg`, mobileSrc: `${IMAGE_PATH}/11.jpeg`, width: 1600, height: 900,
  title: "Sistem VTN — Volume Transaksi Nasional",
  description: "Transaksi menggerakkan Indonesia. Layanan belanja, pulsa, PLN, PDAM, internet, transportasi, perbankan, dan donasi dalam ekosistem transaksi nasional.",
};

export const MEMBERSHIP_POSTERS: CampaignPoster[] = [
  {
    src: `${IMAGE_PATH}/KARTU (2).png`, width: 699, height: 463,
    title: "Kartu EduDigi",
    description: "Belajar, praktik, produktif. Bersama EduDigi membangun generasi digital Indonesia.",
  },
  {
    src: `${IMAGE_PATH}/KARTU.png`, width: 639, height: 404,
    title: "Kartu Member Startup",
    description: "Ide, jejaring, teknologi, dan peluang untuk generasi muda yang berani berkembang secara global bersama Saku Sultan.",
  },
];
