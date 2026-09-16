export function PwEduDigiBrand({ id, compact = false }: { id: string; compact?: boolean }) {
  return (
    <div className={`edu-brand${compact ? " edu-brand-compact" : ""}`}>
      <svg aria-hidden="true" viewBox="0 0 90 100" className="edu-brand-symbol">
        <defs>
          <linearGradient id={`edu-mark-${id}`} x1="0" y1="1" x2="1" y2="0">
            <stop stopColor="#00602C" />
            <stop offset=".48" stopColor="#249B29" />
            <stop offset="1" stopColor="#D5E329" />
          </linearGradient>
        </defs>
        <path fill={`url(#edu-mark-${id})`} d="M45 2 87 26v48L45 98 3 74V26Z" />
        <path fill="#fff" d="m45 22 25 14v28L45 78 20 64V51l14 8 11 6 12-7V43l-12-7-25 15V36Z" />
        <path fill="#005D31" opacity=".45" d="M45 2v20L20 36v15L3 41V26Zm0 76v20L3 74V54l17 10Z" />
        <path fill="#E6EE37" opacity=".5" d="m45 2 42 24-17 10-25-14Z" />
      </svg>
      <div>
        <span className="edu-brand-wordmark">Edu<span>Digi</span></span>
        {!compact && <span className="edu-brand-caption">Solusi penguatan literasi digital</span>}
      </div>
    </div>
  );
}

export function PwEduDigiHeader({ id }: { id: string }) {
  return (
    <div className="edu-campaign-header">
      <PwEduDigiBrand id={id} />
      <p className="edu-learning-motto">Belajar <span>•</span> Praktik <span>•</span> Produktif</p>
      <p className="edu-future-motto">Skill digital<br />lebih luas<br />masa depan<br />lebih baik</p>
    </div>
  );
}
