import Image from "next/image";
import { IcArrowUpRight } from "./ss-icons";

const ARTWORK = {
  program: { file: "edudigi-program", width: 760, height: 520, title: "Program EduDigi", alt: "Peserta belajar bersama, investasi ilmu untuk masa depan yang lebih baik." },
  edudigi: { file: "edudigi-showcase", width: 874, height: 590, title: "Edukasi Digital", alt: "Belajar kapan saja, materi digital, rekomendasi kelas, dan sertifikat bersama EduDigi." },
  legal: { file: "edudigi-legal", width: 765, height: 585, title: "Legalitas EduDigi", alt: "Ilustrasi akta pendirian Yayasan EduDigi, NIB, dan KBLI." },
  passolo: { file: "passolo", width: 740, height: 681, title: "Passolo", alt: "Tanda kasih menguatkan kebersamaan. Ilustrasi pernikahan dan pengiriman tanda kasih melalui Passolo." },
  qtra: { file: "qtra", width: 818, height: 715, title: "Q-Tra", alt: "Ilustrasi Quick Transfer: pilih bank, tentukan nominal dan penerima, periksa data, lalu konfirmasi." },
} as const;

export function SsReferenceArtwork({ kind }: { kind: keyof typeof ARTWORK }) {
  const artwork = ARTWORK[kind];
<<<<<<< HEAD
  const src = `/images/saku/reference-${artwork.file}.png`;
  return (
    <figure className={`ss-reference-artwork ss-artwork-${kind}`}>
      <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`Perbesar ilustrasi ${artwork.title}`}>
        <Image src={src} alt={artwork.alt} width={artwork.width} height={artwork.height} unoptimized className="ss-reference-artwork-image" />
      </a>
      <figcaption><a href={src} target="_blank" rel="noopener noreferrer">Lihat ilustrasi ukuran penuh<IcArrowUpRight width={14} height={14} /></a></figcaption>
=======
  // Berkas .webp hasil scripts/build-display-assets.cjs; PNG asli tetap ada
  // sebagai sumber dan jadi tujuan tautan "ukuran penuh".
  const src = `/images/saku/reference-${artwork.file}.webp`;
  const fullSize = `/images/saku/reference-${artwork.file}.png`;
  return (
    <figure className={`ss-reference-artwork ss-artwork-${kind}`}>
      <a href={fullSize} target="_blank" rel="noopener noreferrer" aria-label={`Perbesar ilustrasi ${artwork.title}`}>
        <Image src={src} alt={artwork.alt} width={artwork.width} height={artwork.height} className="ss-reference-artwork-image" />
      </a>
      <figcaption><a href={fullSize} target="_blank" rel="noopener noreferrer">Lihat ilustrasi ukuran penuh<IcArrowUpRight width={14} height={14} /></a></figcaption>
>>>>>>> 0b800e0aa4c3c6928feecc52ecfec250dd8a36ee
    </figure>
  );
}
