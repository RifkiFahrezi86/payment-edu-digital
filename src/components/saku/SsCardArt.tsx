/**
 * Ilustrasi sudut untuk tiga kartu program (Keamanan, EduDigi, Program).
 *
 * Sebelumnya kartu memakai ikon raksasa transparan dan satu foto stok, jadi
 * ketiganya tidak sebahasa. SVG kecil ini memberi masing-masing kartu adegan
 * sendiri dengan palet yang sama seperti panel showcase.
 */

const INK = "#08170f";
const PINE = "#0c3b2a";
const LIME = "#cdf463";
const GREEN = "#12874b";

function Glow({ p }: { p: string }) {
  return (
    <defs>
      <radialGradient id={`${p}-halo`}>
        <stop stopColor={LIME} stopOpacity=".55" />
        <stop offset="1" stopColor={LIME} stopOpacity="0" />
      </radialGradient>
      <linearGradient id={`${p}-lime`} x1="0" y1="0" x2="1" y2="1">
        <stop stopColor={LIME} />
        <stop offset="1" stopColor="#8fd42c" />
      </linearGradient>
      <filter id={`${p}-shadow`} x="-40%" y="-40%" width="180%" height="180%">
        <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#04130c" floodOpacity=".3" />
      </filter>
    </defs>
  );
}

/** Keamanan: perisai dengan sidik jari dan gembok terkunci. */
export function SsArtSecurity() {
  const p = "sec";
  return (
    <svg viewBox="0 0 150 170" aria-hidden="true" className="ss-card-art">
      <Glow p={p} />
      <ellipse cx="78" cy="84" rx="70" ry="76" fill={`url(#${p}-halo)`} opacity=".5" />
      <g filter={`url(#${p}-shadow)`}>
        <path d="M78 16 130 36v52c0 30-22 52-52 64-30-12-52-34-52-64V36z" fill={PINE} stroke={LIME} strokeOpacity=".5" strokeWidth="2" />
        <path d="M78 16 130 36v52c0 30-22 52-52 64V16z" fill="#0a2e20" />
      </g>
      {/* Sidik jari di bawah, gembok di atas: keduanya tidak saling menimpa. */}
      <g fill="none" stroke={LIME} strokeWidth="2.6" strokeLinecap="round" opacity=".8">
        <path d="M60 112a18 18 0 0 1 36 0v12" />
        <path d="M68 114a10 10 0 0 1 20 0v14" />
        <path d="M78 116v16" />
      </g>
      <g filter={`url(#${p}-shadow)`}>
        <circle cx="78" cy="62" r="19" fill={`url(#${p}-lime)`} />
        <path d="M70 60v-6a8 8 0 0 1 16 0v6" fill="none" stroke={INK} strokeWidth="2.6" strokeLinecap="round" />
        <rect x="68" y="59" width="20" height="15" rx="4.5" fill={INK} />
        <circle cx="78" cy="66" r="2.2" fill={LIME} />
      </g>
    </svg>
  );
}

/** EduDigi: layar kelas digital, topi wisuda, dan sertifikat. */
export function SsArtEdudigi() {
  const p = "edu";
  return (
    <svg viewBox="0 0 150 170" aria-hidden="true" className="ss-card-art">
      <Glow p={p} />
      <ellipse cx="76" cy="86" rx="70" ry="74" fill={`url(#${p}-halo)`} opacity=".45" />

      {/* Layar materi dengan baris pelajaran dan tombol putar */}
      <g filter={`url(#${p}-shadow)`}>
        <rect x="18" y="52" width="112" height="76" rx="12" fill={PINE} stroke={LIME} strokeOpacity=".45" strokeWidth="2" />
        <rect x="28" y="64" width="46" height="6" rx="3" fill={LIME} fillOpacity=".8" />
        <rect x="28" y="78" width="60" height="5" rx="2.5" fill="#dff7e6" fillOpacity=".35" />
        <rect x="28" y="89" width="44" height="5" rx="2.5" fill="#dff7e6" fillOpacity=".22" />
        <rect x="28" y="100" width="52" height="5" rx="2.5" fill="#dff7e6" fillOpacity=".22" />
        <circle cx="106" cy="98" r="15" fill={`url(#${p}-lime)`} />
        <path d="M101 91.5 113 98l-12 6.5z" fill={INK} />
      </g>
      <rect x="58" y="128" width="34" height="8" rx="3" fill={PINE} opacity=".7" />

      {/* Topi wisuda di atas layar */}
      <g filter={`url(#${p}-shadow)`}>
        <path d="M74 14 128 36 74 58 20 36z" fill={`url(#${p}-lime)`} />
        <path d="M74 32 128 36v14c-8 8-30 12-54 12V32z" fill="#a9e23f" opacity=".5" />
        <path d="M118 41v20" stroke={LIME} strokeWidth="3" strokeLinecap="round" />
        <circle cx="118" cy="64" r="5" fill={LIME} />
      </g>
    </svg>
  );
}

/** Program & Manfaat: kotak hadiah terbuka dengan koin dan kilau. */
export function SsArtProgram() {
  const p = "pgm";
  return (
    <svg viewBox="0 0 150 170" aria-hidden="true" className="ss-card-art">
      <Glow p={p} />
      <ellipse cx="76" cy="96" rx="70" ry="70" fill={`url(#${p}-halo)`} opacity=".45" />

      {/* Koin melompat keluar dari kotak */}
      {[
        { x: 44, y: 44, r: 14 },
        { x: 78, y: 26, r: 11 },
        { x: 110, y: 48, r: 16 },
      ].map(({ x, y, r }) => (
        <g key={`${x}-${y}`} filter={`url(#${p}-shadow)`}>
          <circle cx={x} cy={y} r={r} fill="#f5b829" />
          <circle cx={x} cy={y - r * 0.1} r={r} fill="#ffd95c" />
          <text x={x} y={y + r * 0.3} textAnchor="middle" fill="#8a5606" fontSize={r * 0.9} fontWeight="800" fontFamily="inherit">Rp</text>
        </g>
      ))}

      {/* Kotak hadiah: tutup terangkat, pita menyilang */}
      <g filter={`url(#${p}-shadow)`}>
        <path d="M26 88h100v56a8 8 0 0 1-8 8H34a8 8 0 0 1-8-8z" fill={PINE} />
        <path d="M76 88h50v56a8 8 0 0 1-8 8H76z" fill="#0a2e20" />
        <rect x="20" y="70" width="112" height="24" rx="8" fill={`url(#${p}-lime)`} />
        <rect x="68" y="94" width="16" height="58" fill={LIME} fillOpacity=".55" />
        <path d="M76 70c-10-14-26-12-26-2 0 6 10 8 26 2zm0 0c10-14 26-12 26-2 0 6-10 8-26 2z" fill={LIME} />
      </g>

      {/* Kilau kecil sebagai aksen */}
      <g fill={LIME} opacity=".9">
        <path d="M132 100l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" />
        <path d="M16 116l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" />
      </g>
    </svg>
  );
}
