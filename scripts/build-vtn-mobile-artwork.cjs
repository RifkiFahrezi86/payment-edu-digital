// Potong artwork dari desain HP yang disediakan (public/images/VTN Tampilan
// Mobile.png, 887×1774) untuk tata letak SsVtnMobile: logo 3D "VTN" dengan latar
// dibuat transparan, dan ilustrasi utama (peta, mesin, grafik, koin) yang tepi
// atas/bawahnya dipudarkan agar menyatu dengan latar section.
//
// Pakai: node scripts/build-vtn-mobile-artwork.cjs
const path = require("node:path");
const sharp = require("sharp");

const publicDir = path.resolve(__dirname, "../public");
const source = path.join(publicDir, "images/VTN Tampilan Mobile.png");
const outputDir = path.join(publicDir, "images/saku");

// Koordinat mengacu pada berkas sumber 887×1774.
const LOGO = { left: 118, top: 116, width: 450, height: 202 };
const HERO = {
  left: 0, top: 430, width: 887, height: 642,
  // Sudut kiri atas masih memuat baris terakhir teks pengantar; hanya area itu
  // yang dibuat transparan supaya tulisan sambung "Transaksi" di kanan utuh.
  cut: { width: 520, height: 32, feather: 40 },
  fadeBottom: 22,
};

// Piksel yang hampir putih (latar desain) menjadi transparan. Tepi anti-alias
// mendapat alpha parsial dan warnanya "dilepas" dari campuran putih supaya
// tidak menyisakan pinggiran terang di atas latar lain.
const keyOutLightBackground = async crop => {
  const { data, info } = await sharp(source).extract(crop).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  for (let index = 0; index < data.length; index += 4) {
    const distanceFromWhite = 255 - Math.min(data[index], data[index + 1], data[index + 2]);
    const alpha = Math.min(1, Math.max(0, (distanceFromWhite - 26) / 44));
    if (alpha > 0 && alpha < 1) {
      for (let channel = 0; channel < 3; channel += 1) {
        data[index + channel] = Math.round(Math.min(255, Math.max(0, (data[index + channel] - 255 * (1 - alpha)) / alpha)));
      }
    }
    data[index + 3] = Math.round(alpha * 255);
  }
  return sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } }).png().toBuffer();
};

const maskHero = async crop => {
  const { width, height, cut, fadeBottom } = crop;
  const mask = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="cut" x2="0" y2="1"><stop offset="0.6" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="side"><stop stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="bottom" x2="0" y2="1"><stop stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs><rect y="${cut.height}" width="${width}" height="${height - cut.height - fadeBottom}" fill="#fff"/><rect width="${cut.width}" height="${cut.height}" fill="url(#cut)"/><rect x="${cut.width}" width="${cut.feather}" height="${cut.height}" fill="url(#side)"/><rect x="${cut.width + cut.feather}" width="${width - cut.width - cut.feather}" height="${cut.height}" fill="#fff"/><rect y="${height - fadeBottom}" width="${width}" height="${fadeBottom}" fill="url(#bottom)"/></svg>`;
  return sharp(source)
    .extract({ left: crop.left, top: crop.top, width, height })
    .ensureAlpha()
    .composite([{ input: Buffer.from(mask), blend: "dest-in" }])
    .png()
    .toBuffer();
};

(async () => {
  const outputs = [
    { name: "vtn-mobile-logo.webp", buffer: await keyOutLightBackground(LOGO) },
    { name: "vtn-mobile-hero.webp", buffer: await maskHero(HERO) },
  ];
  for (const { name, buffer } of outputs) {
    const info = await sharp(buffer).webp({ quality: 86, effort: 6 }).toFile(path.join(outputDir, name));
    console.log(`${name}: ${info.width} × ${info.height}, ${Math.round(info.size / 1024)} KB`);
  }
})().catch(error => {
  console.error(error.message);
  process.exit(1);
});
