/**
 * Ilustrasi panel showcase (Transfer, PPOB, Merchant).
 *
 * SVG inline, bukan bitmap: tidak ada berkas tambahan yang harus diunduh dan
 * detailnya tetap tajam di layar mana pun. Bahasa visualnya mengikuti poster
 * kampanye SAKU SULTAN — latar hijau pekat, cahaya lime, koin rupiah, dan
 * tipografi tebal — supaya panel tidak terasa seperti diagram datar.
 */

const INK = "#041b12";
const PINE = "#0a3325";
const PINE_LIGHT = "#0f4a33";
const LIME = "#cdf463";
const LIME_HOT = "#b7f34a";
const MINT = "#e9f6ee";
const WHITE_SOFT = "#eefbf2";

/** Definisi bersama: gradien, cahaya, tekstur. id diberi awalan agar unik. */
function Defs({ p }: { p: string }) {
  return (
    <defs>
      <linearGradient id={`${p}-bg`} x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#062218" />
        <stop offset=".55" stopColor={INK} />
        <stop offset="1" stopColor="#020f0a" />
      </linearGradient>
      <radialGradient id={`${p}-glow`}>
        <stop stopColor={LIME} stopOpacity=".42" />
        <stop offset=".6" stopColor={LIME} stopOpacity=".1" />
        <stop offset="1" stopColor={LIME} stopOpacity="0" />
      </radialGradient>
      <linearGradient id={`${p}-coin`} x1="0" y1="0" x2=".7" y2="1">
        <stop stopColor="#ffe56b" />
        <stop offset=".5" stopColor="#f5b829" />
        <stop offset="1" stopColor="#c67f0c" />
      </linearGradient>
      <linearGradient id={`${p}-screen`} x1="0" y1="0" x2="0" y2="1">
        <stop stopColor={WHITE_SOFT} />
        <stop offset="1" stopColor="#d9efdf" />
      </linearGradient>
      <linearGradient id={`${p}-lime`} x1="0" y1="0" x2="1" y2="1">
        <stop stopColor={LIME} />
        <stop offset="1" stopColor="#8fd42c" />
      </linearGradient>
      <filter id={`${p}-soft`} x="-60%" y="-60%" width="220%" height="220%">
        <feGaussianBlur stdDeviation="9" />
      </filter>
      <filter id={`${p}-drop`} x="-40%" y="-40%" width="180%" height="180%">
        <feDropShadow dx="0" dy="7" stdDeviation="9" floodColor="#010c07" floodOpacity=".55" />
      </filter>
      <pattern id={`${p}-grid`} width="26" height="26" patternUnits="userSpaceOnUse">
        <path d="M26 0H0v26" fill="none" stroke={LIME} strokeOpacity=".07" strokeWidth="1" />
      </pattern>
    </defs>
  );
}

/** Latar berlapis: kisi teknis, cahaya lime, garis kecepatan diagonal. */
function Stage({ p }: { p: string }) {
  return (
    <g>
      <rect width="400" height="340" fill={`url(#${p}-bg)`} />
      <rect width="400" height="340" fill={`url(#${p}-grid)`} />
      <ellipse cx="200" cy="168" rx="196" ry="150" fill={`url(#${p}-glow)`} />
      <g stroke={LIME} strokeOpacity=".12" strokeWidth="2" strokeLinecap="round">
        <path d="M-10 300 74 196M20 330l84-104M330 40l60-74M356 96l58-72" />
      </g>
    </g>
  );
}

/** Koin rupiah bergaya poster: tepi bergerigi, wajah timbul, kilau. */
function Coin({ p, x, y, r, rotate = 0 }: { p: string; x: number; y: number; r: number; rotate?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate})`} filter={`url(#${p}-drop)`}>
      <circle r={r} fill="#8a5606" />
      <circle r={r} cy={-r * 0.09} fill={`url(#${p}-coin)`} />
      <circle r={r * 0.74} cy={-r * 0.09} fill="none" stroke="#fff5cd" strokeOpacity=".65" strokeWidth={r * 0.07} />
      <text
        y={r * 0.22}
        textAnchor="middle"
        fill="#7a4a04"
        fontSize={r * 0.82}
        fontWeight="800"
        fontFamily="inherit"
      >
        Rp
      </text>
      <ellipse cx={-r * 0.3} cy={-r * 0.48} rx={r * 0.34} ry={r * 0.17} fill="#fff8d8" opacity=".55" transform={`rotate(-32 ${-r * 0.3} ${-r * 0.48})`} />
    </g>
  );
}

/** Rangka ponsel dengan pantulan kaca; isi layar disuntik lewat children. */
function Phone({ p, x = 116, children }: { p: string; x?: number; children: React.ReactNode }) {
  return (
    <g filter={`url(#${p}-drop)`}>
      <rect x={x} y="24" width="168" height="292" rx="32" fill="#020d08" />
      <rect x={x + 3} y="27" width="162" height="286" rx="29" fill={PINE} stroke={LIME} strokeOpacity=".3" />
      <rect x={x + 11} y="46" width="146" height="248" rx="21" fill={`url(#${p}-screen)`} />
      <rect x={x + 60} y="35" width="48" height="6" rx="3" fill={LIME} fillOpacity=".55" />
      {/* Pantulan miring di atas kaca memberi kesan bahan, bukan kotak polos. */}
      <path d={`M${x + 11} 132 ${x + 157} 46v34l-146 86z`} fill="#fff" opacity=".07" />
      {children}
    </g>
  );
}

/** Label bulat berpendar untuk angka penting. */
function Badge({
  p,
  x,
  y,
  r,
  head,
  sub,
}: { p: string; x: number; y: number; r: number; head: string; sub: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r + 8} fill={LIME} opacity=".22" filter={`url(#${p}-soft)`} />
      <circle cx={x} cy={y} r={r} fill={`url(#${p}-lime)`} filter={`url(#${p}-drop)`} />
      <text x={x} y={y - 2} textAnchor="middle" fill={INK} fontSize={r * 0.52} fontWeight="800" fontFamily="inherit">
        {head}
      </text>
      <text x={x} y={y + r * 0.52} textAnchor="middle" fill={INK} fontSize={r * 0.22} fontWeight="800" letterSpacing=".6" fontFamily="inherit" opacity=".7">
        {sub}
      </text>
    </g>
  );
}

/** Transfer: dana meluncur dari aplikasi ke bank, e-wallet, dan sesama Sultan. */
export function SsArtTransfer() {
  const p = "tf";
  const rows = [
    { y: 168, w: 74, label: 1 },
    { y: 196, w: 58, label: 2 },
    { y: 224, w: 66, label: 3 },
  ];
  return (
    <svg viewBox="0 0 400 340" role="img" aria-label="Dana terkirim dari aplikasi Saku Sultan ke rekening bank, e-wallet, dan sesama pengguna secara real-time" className="ss-panel-art">
      <Defs p={p} />
      <Stage p={p} />

      {/* Jalur dana digambar lebih dulu agar keluar dari balik ponsel */}
      <g fill="none" strokeLinecap="round">
        <path d="M280 104q46 2 46 26" stroke={LIME} strokeOpacity=".5" strokeWidth="3" strokeDasharray="9 8" />
        <path d="M280 178h46" stroke={LIME} strokeOpacity=".65" strokeWidth="3" strokeDasharray="9 8" />
        <path d="M280 252q46-2 46-26" stroke={LIME} strokeOpacity=".5" strokeWidth="3" strokeDasharray="9 8" />
      </g>

      <Phone p={p}>
        <rect x="132" y="66" width="52" height="8" rx="4" fill={PINE} opacity=".35" />
        <rect x="127" y="84" width="146" height="60" rx="16" fill={PINE} />
        <rect x="127" y="84" width="146" height="60" rx="16" fill={`url(#${p}-lime)`} opacity=".08" />
        <text x="141" y="108" fill={LIME} fontSize="19" fontWeight="800" fontFamily="inherit">Rp 250.000</text>
        <text x="141" y="126" fill="#c9e7d4" fontSize="8.5" fontFamily="inherit">ke Rekening Tujuan</text>
        <circle cx="255" cy="112" r="11" fill={LIME} />
        <path d="M250 112h9m-3.5-3.5 3.5 3.5-3.5 3.5" stroke={INK} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />

        {rows.map(({ y, w, label }) => (
          <g key={label}>
            <circle cx="140" cy={y} r="9" fill={MINT} stroke={PINE_LIGHT} strokeOpacity=".35" />
            <text x="140" y={y + 3.2} textAnchor="middle" fill={PINE_LIGHT} fontSize="8" fontWeight="800" fontFamily="inherit">{label}</text>
            <rect x="157" y={y - 7} width={w} height="6" rx="3" fill={PINE} opacity=".4" />
            <rect x="157" y={y + 2} width={w - 22} height="5" rx="2.5" fill={PINE} opacity=".2" />
          </g>
        ))}

        <rect x="127" y="256" width="146" height="34" rx="17" fill={`url(#${p}-lime)`} />
        <text x="200" y="278" textAnchor="middle" fill={INK} fontSize="12" fontWeight="800" fontFamily="inherit">Kirim Sekarang</text>
      </Phone>

      {/* Tujuan transfer */}
      {[
        { y: 116, label: "Bank" },
        { y: 178, label: "E-Wallet" },
        { y: 240, label: "Sultan" },
      ].map(({ y, label }) => (
        <g key={label} filter={`url(#${p}-drop)`}>
          <rect x="322" y={y - 15} width="70" height="30" rx="15" fill={PINE} stroke={LIME} strokeOpacity=".45" />
          <text x="357" y={y + 4} textAnchor="middle" fill={WHITE_SOFT} fontSize="10.5" fontWeight="700" fontFamily="inherit">{label}</text>
        </g>
      ))}

      <Badge p={p} x={56} y={80} r={32} head="24/7" sub="TANPA JEDA" />
      <g>
        <text x="56" y="152" textAnchor="middle" fill={LIME} fontSize="11" fontWeight="800" fontFamily="inherit">REAL-TIME</text>
        <text x="56" y="167" textAnchor="middle" fill="#9dc4ab" fontSize="9" fontFamily="inherit">BI-FAST</text>
      </g>
      <Coin p={p} x={62} y={228} r={26} rotate={-14} />
      <Coin p={p} x={34} y={284} r={17} rotate={18} />
      <Coin p={p} x={352} y={54} r={15} rotate={-8} />
      <Coin p={p} x={370} y={300} r={20} rotate={12} />
    </svg>
  );
}

/** PPOB: seluruh tagihan rumah tangga lunas dari satu layar. */
export function SsArtPpob() {
  const p = "pb";
  const bills = [
    { label: "Pulsa & Data", value: "Rp 52.000" },
    { label: "Token PLN", value: "Rp 102.500" },
    { label: "BPJS", value: "Rp 42.000" },
    { label: "PDAM", value: "Rp 87.300" },
  ];
  // `d` digambar pada kotak 24x24 lalu digeser ke posisi kanal.
  const channels = [
    { x: 26, y: 40, label: "Listrik", d: "M13 2 5 14h6l-1 8 8-12h-6z" },
    { x: 26, y: 140, label: "Air", d: "M12 3c4 5 6 7.5 6 10.5a6 6 0 0 1-12 0C6 10.5 8 8 12 3Z" },
    { x: 26, y: 240, label: "Internet", d: "M3 9a13 13 0 0 1 18 0M6.5 12.5a8.5 8.5 0 0 1 11 0M10 16a4 4 0 0 1 4 0M12 19.5h.01" },
    { x: 306, y: 40, label: "Pulsa", d: "M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm3 17h2" },
    { x: 306, y: 140, label: "TV", d: "M3 7h18v11H3zM8 3l4 4 4-4" },
    { x: 306, y: 240, label: "Games", d: "M6 9h12a4 4 0 0 1 0 8H6a4 4 0 0 1 0-8Zm3 2v4m-2-2h4m7 0h.01m-2 2h.01" },
  ];
  return (
    <svg viewBox="0 0 400 340" role="img" aria-label="Tagihan listrik, air, internet, pulsa, TV, dan game dibayar dari satu aplikasi" className="ss-panel-art">
      <Defs p={p} />
      <Stage p={p} />

      {/* Kanal terhubung ke ponsel */}
      <g stroke={LIME} strokeOpacity=".4" strokeWidth="2.5" strokeDasharray="8 7" strokeLinecap="round" fill="none">
        <path d="M94 66h22M94 166h22M94 266h22M306 66h-22M306 166h-22M306 266h-22" />
      </g>

      <Phone p={p}>
        <rect x="132" y="66" width="68" height="8" rx="4" fill={PINE} opacity=".35" />
        <rect x="127" y="84" width="146" height="52" rx="16" fill={PINE} />
        <text x="141" y="104" fill="#c9e7d4" fontSize="8.5" fontFamily="inherit">Total tagihan bulan ini</text>
        <text x="141" y="126" fill={LIME} fontSize="18" fontWeight="800" fontFamily="inherit">Rp 283.800</text>

        {bills.map(({ label, value }, row) => (
          <g key={label}>
            <rect x="127" y={146 + row * 28} width="146" height="24" rx="8" fill={MINT} />
            <circle cx="141" cy={158 + row * 28} r="6.5" fill={`url(#${p}-lime)`} />
            <path d={`m138 ${158 + row * 28}l2.4 2.4 4-4.6`} stroke={INK} strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <text x="154" y={155 + row * 28} fill={INK} fontSize="8" fontWeight="800" fontFamily="inherit">{label}</text>
            <text x="154" y={165 + row * 28} fill="#4d6357" fontSize="7.5" fontFamily="inherit">{value}</text>
          </g>
        ))}

        <rect x="127" y="264" width="146" height="26" rx="13" fill={`url(#${p}-lime)`} />
        <text x="200" y="281" textAnchor="middle" fill={INK} fontSize="10.5" fontWeight="800" fontFamily="inherit">Bayar Semua</text>
      </Phone>

      {channels.map(({ x, y, label, d }) => (
        <g key={label} filter={`url(#${p}-drop)`}>
          <rect x={x} y={y} width="68" height="56" rx="16" fill={PINE} stroke={LIME} strokeOpacity=".4" />
          <g transform={`translate(${x + 22} ${y + 8})`}>
            <path d={d} fill="none" stroke={LIME} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <text x={x + 34} y={y + 47} textAnchor="middle" fill={WHITE_SOFT} fontSize="9.5" fontWeight="700" fontFamily="inherit">{label}</text>
        </g>
      ))}

      <Coin p={p} x={68} y={316} r={19} rotate={-16} />
      <Coin p={p} x={334} y={318} r={16} rotate={14} />
      <Coin p={p} x={200} y={18} r={14} rotate={-6} />
    </svg>
  );
}

/** Merchant: QRIS di konter usaha, penjualan tumbuh, dana cair cepat. */
export function SsArtMerchant() {
  const p = "mc";
  // Puncak tertinggi 46px menyisakan jarak dari baseline caption.
  const bars = [18, 26, 22, 36, 30, 46];
  return (
    <svg viewBox="0 0 400 340" role="img" aria-label="Konter usaha menerima pembayaran QRIS dengan laporan penjualan harian dan pencairan dana cepat" className="ss-panel-art">
      <Defs p={p} />
      <Stage p={p} />

      {/* Standee QRIS */}
      <g filter={`url(#${p}-drop)`}>
        <rect x="198" y="20" width="122" height="150" rx="20" fill={WHITE_SOFT} />
        <rect x="198" y="20" width="122" height="30" rx="15" fill={PINE} />
        <text x="259" y="40" textAnchor="middle" fill={LIME} fontSize="12" fontWeight="800" letterSpacing="2" fontFamily="inherit">QRIS</text>
        <g fill={INK}>
          {[[212, 62], [268, 62], [212, 118]].map(([x, y]) => (
            <g key={`${x}-${y}`}>
              <rect x={x} y={y} width="26" height="26" rx="5" />
              <rect x={x + 6.5} y={y + 6.5} width="13" height="13" rx="2.5" fill={WHITE_SOFT} />
            </g>
          ))}
          {[
            [246, 64], [254, 72], [246, 80], [262, 64], [270, 92], [238, 72],
            [246, 98], [214, 98], [230, 102], [262, 108], [278, 72], [286, 96],
            [246, 126], [262, 126], [278, 118], [286, 134], [246, 142], [270, 142],
          ].map(([x, y]) => <rect key={`${x}-${y}`} x={x} y={y} width="8" height="8" rx="1.6" />)}
        </g>
        <path d="M238 170h44l10 32h-64z" fill={PINE} stroke={LIME} strokeOpacity=".3" />
      </g>

      {/* Konter merchant */}
      <g filter={`url(#${p}-drop)`}>
        <rect x="18" y="150" width="166" height="150" rx="20" fill={PINE} stroke={LIME} strokeOpacity=".35" />
        <rect x="34" y="168" width="94" height="12" rx="6" fill={`url(#${p}-lime)`} />
        <text x="34" y="208" fill={WHITE_SOFT} fontSize="13" fontWeight="800" fontFamily="inherit">Warung Bu Ratih</text>
        <text x="34" y="225" fill="#9dc4ab" fontSize="8.5" fontFamily="inherit">Merchant QRIS · Sejak 2024</text>
        <rect x="34" y="238" width="52" height="20" rx="10" fill={`url(#${p}-lime)`} />
        <text x="60" y="252" textAnchor="middle" fill={INK} fontSize="8.5" fontWeight="800" fontFamily="inherit">AKTIF</text>
        {/* "hari ini" ditaruh di baris terpisah agar tidak tertimpa nominal. */}
        <text x="34" y="278" fill={LIME} fontSize="16" fontWeight="800" fontFamily="inherit">Rp 1.482.000</text>
        <text x="34" y="291" fill="#9dc4ab" fontSize="7.5" fontFamily="inherit">penjualan hari ini</text>
      </g>

      {/* Laporan penjualan */}
      <g filter={`url(#${p}-drop)`}>
        <rect x="212" y="208" width="170" height="112" rx="20" fill={WHITE_SOFT} />
        <text x="230" y="232" fill={INK} fontSize="10.5" fontWeight="800" fontFamily="inherit">Laporan Mingguan</text>
        <g>
          <path d="M230 240h9m-4.5-4.5 4.5 4.5-4.5 4.5" stroke="#12874b" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="rotate(-45 234.5 240)" />
          <text x="246" y="244" fill="#12874b" fontSize="9" fontWeight="800" fontFamily="inherit">+18,4%</text>
          <text x="284" y="244" fill="#4d6357" fontSize="7.5" fontFamily="inherit">vs pekan lalu</text>
        </g>
        <path d="M230 302h136" stroke={PINE} strokeOpacity=".16" strokeWidth="1.5" />
        {bars.map((h, i) => (
          <rect key={i} x={232 + i * 23} y={300 - h} width="15" height={h} rx="4" fill={i === bars.length - 1 ? "#12874b" : "#12874b"} fillOpacity={i === bars.length - 1 ? 1 : 0.26} />
        ))}
      </g>

      {/* Pembeli memindai */}
      <g fill="none" stroke={LIME} strokeOpacity=".5" strokeWidth="3" strokeDasharray="9 8" strokeLinecap="round">
        <path d="M172 178q30-8 32-34" />
      </g>
      <g>
        <circle cx="62" cy="76" r="38" fill={LIME} opacity=".2" filter={`url(#${p}-soft)`} />
        <circle cx="62" cy="76" r="30" fill={`url(#${p}-lime)`} filter={`url(#${p}-drop)`} />
        <g stroke={INK} strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M49 68v-5a2 2 0 0 1 2-2h5M68 61h5a2 2 0 0 1 2 2v5M75 84v5a2 2 0 0 1-2 2h-5M56 91h-5a2 2 0 0 1-2-2v-5" />
        </g>
        <path d="M46 76h32" stroke={PINE} strokeWidth="2.6" strokeLinecap="round" />
        <text x="62" y="130" textAnchor="middle" fill={LIME} fontSize="11" fontWeight="800" fontFamily="inherit">SEKALI SCAN</text>
        <text x="62" y="144" textAnchor="middle" fill="#9dc4ab" fontSize="9" fontFamily="inherit">semua e-wallet</text>
      </g>

      <Coin p={p} x={352} y={62} r={22} rotate={-12} />
      <Coin p={p} x={378} y={158} r={15} rotate={16} />
      <Coin p={p} x={148} y={322} r={17} rotate={8} />
    </svg>
  );
}
