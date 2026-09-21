// Siapkan aset pada ukuran tampil supaya optimizer Next tidak diperlukan.
// Optimizer bekerja per request di dev sehingga panel terasa lama dibuka;
// hasil skrip ini dikirim apa adanya dari public/.
//
// Pakai: node scripts/build-display-assets.cjs
const fs = require("node:fs");
const path = require("node:path");
const sharp = require("sharp");

sharp.concurrency(1);

const publicDir = path.resolve(__dirname, "../public");

// `width` = lebar akhir berkas. Nilainya 2x lebar tampil agar tetap tajam di
// layar retina; null berarti dimensi asli sudah pas dan cukup dikompres.
const assets = [
  { source: "images/saku-sultan-app-icon.png", output: "images/saku-sultan-app-icon.webp", width: 148 },
  { source: "images/saku/phone-front.png", output: "images/saku/phone-front.webp", width: null },
  { source: "images/saku/phone-back.png", output: "images/saku/phone-back.webp", width: null },
  { source: "images/saku/reference-passolo.png", output: "images/saku/reference-passolo.webp", width: null },
  { source: "images/saku/reference-qtra.png", output: "images/saku/reference-qtra.webp", width: null },
  { source: "images/saku/reference-edudigi-showcase.png", output: "images/saku/reference-edudigi-showcase.webp", width: null },
  { source: "images/saku/reference-edudigi-program.png", output: "images/saku/reference-edudigi-program.webp", width: null },
  { source: "images/saku/reference-edudigi-legal.png", output: "images/saku/reference-edudigi-legal.webp", width: null },
  { source: "images/IMAGE/4.jpeg", output: "images/saku/edudigi-class.webp", width: 720 },
  { source: "images/IMAGE/12.jpeg", output: "images/saku/qtra-poster.webp", width: 1280 },
];

(async () => {
  let before = 0;
  let after = 0;
  for (const asset of assets) {
    const from = path.join(publicDir, asset.source);
    if (!fs.existsSync(from)) throw new Error(`Berkas sumber tidak ada: ${asset.source}`);
    const sourceBytes = fs.statSync(from).size;

    let pipeline = sharp(from, { sequentialRead: true });
    if (asset.width) pipeline = pipeline.resize(asset.width, null, { withoutEnlargement: true });
    const info = await pipeline.webp({ quality: 82, effort: 5 }).toFile(path.join(publicDir, asset.output));

    before += sourceBytes;
    after += info.size;
    console.log(
      `${asset.output}: ${info.width} × ${info.height}, ` +
        `${Math.round(sourceBytes / 1024)} KB → ${Math.round(info.size / 1024)} KB`,
    );
  }
  console.log(`\nTotal ${Math.round(before / 1024)} KB → ${Math.round(after / 1024)} KB`);
})().catch(error => {
  console.error(error.message);
  process.exit(1);
});
