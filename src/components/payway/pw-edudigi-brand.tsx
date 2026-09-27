import Image from "next/image";

// Simbol memakai logo resmi dari public/images/Logo Edudigi.png (versi WebP terpangkas di images/saku).
export function PwEduDigiBrand({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`edu-brand${compact ? " edu-brand-compact" : ""}`}>
      <Image src="/images/saku/edudigi-logo.webp" alt="" width={320} height={373} sizes="76px" className="edu-brand-symbol" />
      <div>
        <span className="edu-brand-wordmark">Edu<span>Digi</span></span>
        {!compact && <span className="edu-brand-caption">Solusi penguatan literasi digital</span>}
      </div>
    </div>
  );
}

export function PwEduDigiHeader() {
  return (
    <div className="edu-campaign-header">
      <PwEduDigiBrand />
      <p className="edu-learning-motto">Belajar <span>•</span> Praktik <span>•</span> Produktif</p>
      <p className="edu-future-motto">Skill digital<br />lebih luas<br />masa depan<br />lebih baik</p>
    </div>
  );
}
