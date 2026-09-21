// Extract complete illustration groups from the supplied design references.
// Usage: node scripts/build-reference-artwork.cjs "path/to/IMAGE 2"
const path = require("node:path");
const sharp = require("sharp");

const sourceDirectory = process.argv[2];
if (!sourceDirectory) throw new Error("Provide the directory containing the supplied reference PNGs.");
const outputDirectory = path.resolve(__dirname, "../public/images/saku");

const artworks = [
  { source: "4.png", output: "reference-edudigi-program.png", crop: { left: 760, top: 105, width: 760, height: 520 } },
<<<<<<< HEAD
  { source: "4.png", output: "reference-edudigi-portrait.png", crop: { left: 1055, top: 247, width: 257, height: 338 } },
=======
>>>>>>> 0b800e0aa4c3c6928feecc52ecfec250dd8a36ee
  { source: "6.png", output: "reference-edudigi-showcase.png", crop: { left: 646, top: 334, width: 874, height: 590 } },
  { source: "7.png", output: "reference-passolo.png", crop: { left: 83, top: 183, width: 740, height: 681 } },
  { source: "8.png", output: "reference-qtra.png", crop: { left: 704, top: 154, width: 818, height: 715 }, cleanMargin: true },
  { source: "3.png", output: "reference-edudigi-legal.png", crop: { left: 990, top: 90, width: 765, height: 585 } },
];

(async () => {
  for (const artwork of artworks) {
    const image = sharp(path.resolve(sourceDirectory, artwork.source));
    const metadata = await image.metadata();
    if (artwork.crop.left + artwork.crop.width > metadata.width || artwork.crop.top + artwork.crop.height > metadata.height) {
      throw new Error(`The crop exceeds the dimensions of ${artwork.source}.`);
    }
    let result = image.extract(artwork.crop);
    if (artwork.cleanMargin) {
      // Remove only fragments from the adjacent text column, outside the artwork.
      const margin = `<svg width="818" height="715" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="fade"><stop offset="0.8" stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0"/></linearGradient><linearGradient id="vertical" x2="0" y2="1"><stop stop-color="white" stop-opacity="0"/><stop offset="0.14" stop-color="white"/><stop offset="0.88" stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0"/></linearGradient><mask id="soft"><rect x="0" y="365" width="100" height="230" fill="url(#vertical)"/></mask></defs><path d="M0 0h173v5H0z" fill="white"/><rect x="0" y="365" width="100" height="230" fill="url(#fade)" mask="url(#soft)"/></svg>`;
      result = result.composite([{ input: Buffer.from(margin) }]);
    }
    await result.png({ compressionLevel: 9 }).toFile(path.join(outputDirectory, artwork.output));
    console.log(`${artwork.output}: ${artwork.crop.width} × ${artwork.crop.height}`);
  }
})().catch(error => { console.error(error.message); process.exit(1); });
