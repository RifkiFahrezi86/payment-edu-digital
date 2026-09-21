export function SsVtnMap() {
  return (
    <svg viewBox="140 40 770 345" role="img" aria-label="Jaringan transaksi Indonesia yang menghubungkan Medan, Jakarta, Surabaya, dan Makassar" className="ss-vtn-map">
      <defs>
        <linearGradient id="ss-map-land" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#58c744" /><stop offset=".45" stopColor="#0a8b48" /><stop offset="1" stopColor="#075232" /></linearGradient>
        <radialGradient id="ss-map-halo"><stop stopColor="#91f64a" stopOpacity=".16" /><stop offset="1" stopColor="#91f64a" stopOpacity="0" /></radialGradient>
        <filter id="ss-map-glow" x="-200%" y="-200%" width="500%" height="500%"><feGaussianBlur stdDeviation="7" /></filter>
        <pattern id="ss-map-grid" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#b7f34a" opacity=".11" /></pattern>
      </defs>
      <rect x="140" y="40" width="770" height="345" fill="url(#ss-map-grid)" />
      <ellipse cx="510" cy="220" rx="390" ry="190" fill="url(#ss-map-halo)" />
      <g fill="url(#ss-map-land)" stroke="#7edd7a" strokeWidth="1.2" strokeLinejoin="round">
        <path d="m164 65 16 9 18 26 10 2 17 26 15 9 8 24 16 13 6 22 20 24 12 33-13 4-19-24-18-10-10-25-15-12-13-28-15-16-15-25-8-21-14-16Z" />
        <path d="m288 262 29 2 24 9 26 2 19 9 35 3 12 8 31-1 13 8-5 9-36-4-17 2-24-9-27-2-31-12-32-5Z" />
        <path d="m341 125 18-2 14 13 26-7 17-22 15 6 7 27 14 12-7 23 8 17-17 14-5 23-18 3-16-15-19-3-8-17-20-9 3-21-13-12Z" />
        <path d="m489 146 11-15 13 8-2 22 16 6 14-8 19 2 9 13-20 5-20-2-7 12 4 18 11 12-2 24-10-3-10-20-9-13-10 6-6 22-12 13-10-8 13-20 5-24-9-13 9-12 7-6-4-12Z" />
        <path d="m578 188 9-14 7 5-2 13 12 12-7 4-12-10-6 7-8-3Zm48 12 9-20 8 4-5 18 9 7-6 12-8-9-10 4-5-7Z" />
        <path d="m697 212 20 4 11-9 17 15 29-1 27 16 20 3 17 12 24 3 25 17-1 51-26-13-19-22-25-10-21 4-17-13-15-1-9-16-23-3-11-13-16-4-8-8-5-4Z" />
        <path d="m473 308 12-3 12 5-5 7-14-2Zm28 4 19-1 10 7-13 5-15-6Zm32 10 15-4 17 9-2 8-22-4Zm39 10 20-1 11 5-9 7-18-4Zm45 4 20-5 22 2 9 9-29 4Zm-11-76 8-3 6 9-6 8-9-3Zm31-13 7-7 8 8-4 10-9-3Zm-45 41 8-6 9 7-5 7-11-1Z" />
      </g>
      <g fill="none" stroke="#b7f34a" strokeWidth="1.2" opacity=".7">
        <path d="M211 132Q325-20 412 174M211 132Q222 175 335 278M335 278Q407 160 495 228M412 174Q552 50 755 252M495 228Q612 150 755 252M335 278Q390 220 431 301M431 301Q575 194 641 338" />
      </g>
      <g fill="#d6ff68" filter="url(#ss-map-glow)">
        {[[211, 132], [335, 278], [412, 174], [495, 228], [431, 301], [755, 252], [641, 338]].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="9" />)}
      </g>
      <g fill="#f3ffc5">
        {[[211, 132], [335, 278], [412, 174], [495, 228], [431, 301], [755, 252], [641, 338]].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="4" />)}
      </g>
      {[
        { city: "Medan", x: 221, y: 105, width: 72 },
        { city: "Jakarta", x: 269, y: 298, width: 77 },
        { city: "Surabaya", x: 396, y: 328, width: 88 },
        { city: "Makassar", x: 504, y: 226, width: 87 },
      ].map(({ city, x, y, width }) => (
        <g key={city}>
          <rect x={x} y={y} width={width} height="25" rx="12.5" fill="#07351f" stroke="#7acb73" strokeOpacity=".5" />
          <text x={x + width / 2} y={y + 17} fill="#fff" fontSize="12" fontFamily="Arial, sans-serif" textAnchor="middle">{city}</text>
        </g>
      ))}
    </svg>
  );
}
