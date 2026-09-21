/**
 * Ilustrasi panel showcase (Transfer, PPOB, Merchant).
 * SVG inline, bukan bitmap: tidak melewati next/image optimizer sama sekali,
 * dan palet mengikuti token --ss-* sehingga ikut Light/Dark tanpa aset ganda.
 */

const CARD = "#0c3b2a";
const CARD_EDGE = "#7acb73";
const LIME = "#cdf463";
const SCREEN = "#f4fbf0";

/** Rangka ponsel tampak depan; anak elemen diletakkan di dalam area layar. */
function Phone({ children }: { children: React.ReactNode }) {
  return (
    <g>
      <rect x="118" y="26" width="164" height="288" rx="30" fill={CARD} stroke={CARD_EDGE} strokeOpacity=".45" />
      <rect x="128" y="44" width="144" height="252" rx="22" fill={SCREEN} />
      <rect x="176" y="34" width="48" height="6" rx="3" fill={CARD_EDGE} fillOpacity=".5" />
      {children}
    </g>
  );
}

function Backdrop() {
  return (
    <>
      <defs>
        <radialGradient id="ss-panel-halo">
          <stop stopColor="#91f64a" stopOpacity=".2" />
          <stop offset="1" stopColor="#91f64a" stopOpacity="0" />
        </radialGradient>
        <pattern id="ss-panel-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#0c5c35" opacity=".13" />
        </pattern>
      </defs>
      <rect width="400" height="340" fill="url(#ss-panel-grid)" />
      <ellipse cx="200" cy="170" rx="188" ry="150" fill="url(#ss-panel-halo)" />
    </>
  );
}

/** Transfer: dana mengalir dari ponsel ke bank dan e-wallet. */
export function SsArtTransfer() {
  return (
    <svg viewBox="0 0 400 340" role="img" aria-label="Dana terkirim dari aplikasi Saku Sultan ke rekening bank dan e-wallet secara real-time" className="ss-panel-art">
      <Backdrop />
      <Phone>
        <rect x="144" y="66" width="60" height="9" rx="4.5" fill="#0c5c35" fillOpacity=".55" />
        <rect x="144" y="86" width="112" height="46" rx="12" fill={CARD} />
        <text x="156" y="105" fill={LIME} fontSize="11" fontWeight="700" fontFamily="inherit">Rp 250.000</text>
        <text x="156" y="121" fill="#dff7e6" fontSize="8" fontFamily="inherit">ke Rekening Tujuan</text>
        {[0, 1, 2].map(row => (
          <g key={row}>
            <circle cx="154" cy={155 + row * 30} r="8" fill="#e9f6ee" stroke="#0c5c35" strokeOpacity=".3" />
            <rect x="170" y={150 + row * 30} width={76 - row * 14} height="5" rx="2.5" fill="#0c5c35" fillOpacity=".38" />
            <rect x="170" y={160 + row * 30} width={50 - row * 8} height="4" rx="2" fill="#0c5c35" fillOpacity=".2" />
          </g>
        ))}
        <rect x="144" y="252" width="112" height="28" rx="14" fill="#12874b" />
        <text x="200" y="270" fill="#fff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="inherit">Kirim Sekarang</text>
      </Phone>

      {/* Jalur dana: ponsel -> tiga tujuan */}
      <g fill="none" stroke="#12874b" strokeWidth="2" strokeLinecap="round" strokeDasharray="7 6" opacity=".6">
        <path d="M282 96q54 0 54 26M282 170h54M282 244q54 0 54-26" />
      </g>
      {[
        { y: 100, label: "Bank" },
        { y: 158, label: "E-Wallet" },
        { y: 216, label: "Sultan" },
      ].map(({ y, label }) => (
        <g key={label}>
          <rect x="330" y={y} width="62" height="26" rx="13" fill={CARD} stroke={CARD_EDGE} strokeOpacity=".4" />
          <text x="361" y={y + 17} fill="#f3ffc5" fontSize="9" fontWeight="600" textAnchor="middle" fontFamily="inherit">{label}</text>
        </g>
      ))}
      <g fill="#0c5c35" opacity=".9">
        <circle cx="46" cy="92" r="18" fill={LIME} />
        <path d="M39 92h14m-5-5 5 5-5 5" stroke="#08170f" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="46" y="126" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="inherit">Real-time</text>
        <text x="46" y="139" fontSize="8" textAnchor="middle" opacity=".7" fontFamily="inherit">BI-FAST</text>
      </g>
      <g>
        <rect x="18" y="196" width="76" height="56" rx="16" fill={CARD} stroke={CARD_EDGE} strokeOpacity=".4" />
        <text x="56" y="219" fill={LIME} fontSize="14" fontWeight="700" textAnchor="middle" fontFamily="inherit">24/7</text>
        <text x="56" y="236" fill="#dff7e6" fontSize="8" textAnchor="middle" fontFamily="inherit">tanpa jeda</text>
      </g>
    </svg>
  );
}

/** PPOB: satu ponsel melunasi banyak jenis tagihan. */
export function SsArtPpob() {
  const bills = [
    { label: "Pulsa", value: "Rp 52.000" },
    { label: "Token PLN", value: "Rp 102.500" },
    { label: "BPJS", value: "Rp 42.000" },
    { label: "PDAM", value: "Rp 87.300" },
  ];
  return (
    <svg viewBox="0 0 400 340" role="img" aria-label="Pembayaran pulsa, token listrik, BPJS, dan PDAM diproses dari satu aplikasi" className="ss-panel-art">
      <Backdrop />
      <Phone>
        <rect x="144" y="66" width="74" height="9" rx="4.5" fill="#0c5c35" fillOpacity=".55" />
        <rect x="144" y="86" width="112" height="40" rx="12" fill={CARD} />
        <text x="156" y="103" fill="#dff7e6" fontSize="8" fontFamily="inherit">Total tagihan bulan ini</text>
        <text x="156" y="118" fill={LIME} fontSize="12" fontWeight="700" fontFamily="inherit">Rp 283.800</text>
        {bills.map(({ label, value }, row) => (
          <g key={label}>
            <rect x="144" y={138 + row * 30} width="112" height="25" rx="8" fill="#e9f6ee" />
            <circle cx="157" cy={150 + row * 30} r="5.5" fill="#12874b" />
            <path d={`m154.5 ${150 + row * 30}l2 2 3.5-4`} stroke="#fff" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <text x="169" y={148 + row * 30} fill="#08170f" fontSize="7.5" fontWeight="700" fontFamily="inherit">{label}</text>
            <text x="169" y={158 + row * 30} fill="#52665b" fontSize="7" fontFamily="inherit">{value}</text>
          </g>
        ))}
        <rect x="144" y="264" width="112" height="22" rx="11" fill="#12874b" />
        <text x="200" y="279" fill="#fff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="inherit">Bayar Semua</text>
      </Phone>

      {/* Kanal tagihan mengorbit ponsel */}
      {[
        { x: 40, y: 54, label: "Listrik" },
        { x: 40, y: 146, label: "Air" },
        { x: 40, y: 238, label: "Internet" },
        { x: 316, y: 54, label: "Pulsa" },
        { x: 316, y: 146, label: "Data" },
        { x: 316, y: 238, label: "TV" },
      ].map(({ x, y, label }) => (
        <g key={label}>
          <rect x={x} y={y} width="62" height="48" rx="15" fill={CARD} stroke={CARD_EDGE} strokeOpacity=".38" />
          <circle cx={x + 31} cy={y + 18} r="8" fill={LIME} fillOpacity=".85" />
          <text x={x + 31} y={y + 40} fill="#f3ffc5" fontSize="8.5" fontWeight="600" textAnchor="middle" fontFamily="inherit">{label}</text>
        </g>
      ))}
      <g fill="none" stroke="#12874b" strokeWidth="1.6" strokeDasharray="6 5" opacity=".5">
        <path d="M102 78h16M102 170h16M102 262h16M298 78h-16M298 170h-16M298 262h-16" />
      </g>
    </svg>
  );
}

/** Merchant: QRIS di konter usaha plus ringkasan penjualan. */
export function SsArtMerchant() {
  // Puncak tertinggi 48px menyisakan jarak dari baseline caption di y=238.
  const bars = [20, 30, 25, 40, 34, 48];
  return (
    <svg viewBox="0 0 400 340" role="img" aria-label="Konter usaha menerima pembayaran QRIS dengan laporan penjualan harian dan penarikan dana" className="ss-panel-art">
      <Backdrop />

      {/* Konter merchant */}
      <g>
        <rect x="20" y="164" width="172" height="136" rx="18" fill={CARD} stroke={CARD_EDGE} strokeOpacity=".4" />
        <rect x="36" y="182" width="120" height="12" rx="6" fill={LIME} fillOpacity=".8" />
        <text x="36" y="218" fill="#f3ffc5" fontSize="11.5" fontWeight="700" fontFamily="inherit">Warung Bu Ratih</text>
        <text x="36" y="234" fill="#b7d8c2" fontSize="8" fontFamily="inherit">Merchant QRIS · Sejak 2024</text>
        <rect x="36" y="246" width="50" height="19" rx="9.5" fill="#12874b" />
        <text x="61" y="259" fill="#fff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="inherit">Aktif</text>
        <text x="36" y="284" fill={LIME} fontSize="12" fontWeight="700" fontFamily="inherit">Rp 1.482.000</text>
        <text x="118" y="284" fill="#b7d8c2" fontSize="7" fontFamily="inherit">hari ini</text>
      </g>

      {/* Standee QRIS */}
      <g>
        <rect x="206" y="24" width="112" height="140" rx="18" fill="#fff" stroke="#0c5c35" strokeOpacity=".28" />
        <rect x="206" y="24" width="112" height="26" rx="13" fill={CARD} />
        <text x="262" y="42" fill={LIME} fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="inherit">QRIS</text>
        {/* Modul QR: tiga penanda sudut + isi tetap agar terbaca sebagai kode */}
        <g fill="#08170f">
          {[[220, 62], [274, 62], [220, 116]].map(([x, y]) => (
            <g key={`${x}-${y}`}>
              <rect x={x} y={y} width="24" height="24" rx="4" />
              <rect x={x + 6} y={y + 6} width="12" height="12" rx="2" fill="#fff" />
            </g>
          ))}
          {[
            [252, 64], [260, 72], [252, 80], [268, 64], [276, 90], [244, 72],
            [252, 98], [222, 96], [236, 100], [268, 106], [284, 72], [292, 96],
            [252, 124], [268, 124], [284, 116], [292, 132], [252, 140], [268, 140],
          ].map(([x, y]) => <rect key={`${x}-${y}`} x={x} y={y} width="8" height="8" rx="1.5" />)}
        </g>
        <path d="M246 164h32l8 30h-48z" fill={CARD} stroke={CARD_EDGE} strokeOpacity=".35" />
      </g>

      {/* Dashboard penjualan */}
      <g>
        <rect x="214" y="200" width="168" height="114" rx="18" fill="#fff" stroke="#0c5c35" strokeOpacity=".22" />
        <text x="232" y="224" fill="#08170f" fontSize="9.5" fontWeight="700" fontFamily="inherit">Laporan Mingguan</text>
        <text x="232" y="238" fill="#52665b" fontSize="7.5" fontFamily="inherit">+18,4% dari pekan lalu</text>
        {/* Garis dasar memisahkan label dari batang */}
        <path d="M232 298h132" stroke="#0c5c35" strokeOpacity=".16" strokeWidth="1.5" />
        {bars.map((h, i) => (
          <rect key={i} x={234 + i * 22} y={296 - h} width="14" height={h} rx="4" fill="#12874b" fillOpacity={i === bars.length - 1 ? 1 : 0.28} />
        ))}
      </g>

      {/* Alur scan pembeli: konter -> standee */}
      <g fill="none" stroke="#12874b" strokeWidth="2" strokeDasharray="7 6" opacity=".55">
        <path d="M176 186q30-6 34-30" />
      </g>
      <g>
        <circle cx="62" cy="80" r="28" fill={LIME} />
        {/* Bingkai pemindai: empat sudut + garis sinar di tengah */}
        <g stroke="#08170f" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M50 72v-4a2 2 0 0 1 2-2h4M68 66h4a2 2 0 0 1 2 2v4M74 88v4a2 2 0 0 1-2 2h-4M56 94h-4a2 2 0 0 1-2-2v-4" />
          <path d="M48 80h28" stroke={CARD} />
        </g>
        <text x="62" y="126" fill="#0c5c35" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="inherit">Sekali Scan</text>
        <text x="62" y="139" fill="#0c5c35" fontSize="8" textAnchor="middle" opacity=".72" fontFamily="inherit">semua e-wallet</text>
      </g>
    </svg>
  );
}
