// Susun ulang poster VTN (public/images/IMAGE/8.jpeg, 1600×900 lanskap) menjadi
// versi potret untuk layar HP: blok judul, peta + mesin, ikon layanan, lima
// keunggulan (grid 2 kolom), dan tagline ditumpuk vertikal supaya teks tetap
// terbaca pada lebar ±360 px.
//
// Pakai: node scripts/build-vtn-mobile-poster.cjs
const path = require("node:path");
const sharp = require("sharp");

const publicDir = path.resolve(__dirname, "../public");
const source = path.join(publicDir, "images/IMAGE/8.jpeg");
const output = path.join(publicDir, "images/saku/vtn-poster-mobile.webp");

const WIDTH = 900; // 2× lebar tampil di HP agar tajam di layar retina
const GAP = 14;
const BG = "#04130c";

// Koordinat mengacu pada berkas sumber 1600×900.
const ROWS = [
  { name: "judul", left: 28, top: 22, width: 750, height: 430 },
  // Tepi kirinya memotong teks judul asli; ditutup warna latar lalu dipudarkan.
  { name: "peta-mesin", left: 630, top: 6, width: 970, height: 716, fadeLeft: [0.13, 0.25] },
  { name: "layanan", left: 24, top: 452, width: 610, height: 262 },
];
const CARDS = [
  { left: 30, top: 726, width: 282, height: 84 },
  { left: 318, top: 726, width: 300, height: 84 },
  { left: 626, top: 726, width: 298, height: 84 },
  { left: 932, top: 726, width: 298, height: 84 },
  { left: 1238, top: 726, width: 334, height: 84 },
];
const TAGLINE = { left: 430, top: 824, width: 740, height: 62 };

const resizeCrop = async (crop, width) => {
  let pipeline = sharp(source).extract({ left: crop.left, top: crop.top, width: crop.width, height: crop.height }).resize(width);
  if (crop.fadeLeft) {
    const [solid, clear] = crop.fadeLeft;
    const height = Math.round(crop.height * (width / crop.width));
    const fade = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g"><stop offset="${solid}" stop-color="${BG}"/><stop offset="${clear}" stop-color="${BG}" stop-opacity="0"/></linearGradient></defs><rect width="${width}" height="${height}" fill="url(#g)"/></svg>`;
    pipeline = pipeline.composite([{ input: Buffer.from(fade) }]);
  }
  const buffer = await pipeline.png().toBuffer();
  const meta = await sharp(buffer).metadata();
  return { input: buffer, width: meta.width, height: meta.height };
};

(async () => {
  const layers = [];
  let y = 0;

  for (const row of ROWS) {
    const layer = await resizeCrop(row, WIDTH);
    layers.push({ ...layer, left: 0, top: y });
    y += layer.height + GAP;
  }

  // Lima kartu keunggulan: dua kolom, kartu terakhir di tengah.
  const cardWidth = Math.floor((WIDTH - GAP) / 2);
  for (let index = 0; index < CARDS.length; index += 1) {
    const layer = await resizeCrop(CARDS[index], cardWidth);
    const column = index % 2;
    const isLastAlone = index === CARDS.length - 1 && CARDS.length % 2 === 1;
    const left = isLastAlone ? Math.floor((WIDTH - cardWidth) / 2) : column * (cardWidth + GAP);
    layers.push({ ...layer, left, top: y });
    if (column === 1 || isLastAlone) y += layer.height + GAP;
  }

  const tagline = await resizeCrop(TAGLINE, WIDTH);
  layers.push({ ...tagline, left: 0, top: y });
  y += tagline.height;

  const info = await sharp({ create: { width: WIDTH, height: y, channels: 3, background: BG } })
    .composite(layers.map(({ input, left, top }) => ({ input, left, top })))
    .webp({ quality: 84, effort: 5 })
    .toFile(output);

  console.log(`${path.relative(publicDir, output)}: ${info.width} × ${info.height}, ${Math.round(info.size / 1024)} KB`);
})().catch(error => {
  console.error(error.message);
  process.exit(1);
});
