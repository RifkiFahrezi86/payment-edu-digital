// Keep partner artwork local. BI and BRICK are taken from their own websites;
// BMT follows the red-and-black artwork explicitly supplied by the user.
// Usage: node scripts/build-partner-logos.cjs "path/to/IMAGE 2"
const path = require("node:path");
const sharp = require("sharp");

const output = path.resolve(__dirname, "../public/images/payway/pay");
const sources = [
  { name: "Bank Indonesia", url: "https://www.bi.go.id/id/SiteAssets/bi-b.png", file: "bank-indonesia.png" },
  { name: "BRICK", url: "https://www.onebrick.io/_astro/logo.ChHcVY2X_2XFTz.svg", file: "brick.png" },
];

(async () => {
  for (const source of process.argv.includes("--bmt-only") ? [] : sources) {
    let buffer;
    if (process.argv.includes("--local-only")) {
      buffer = await sharp(path.join(output, source.file)).toBuffer();
    } else {
      const response = await fetch(source.url, { signal: AbortSignal.timeout(30000) });
      if (!response.ok) throw new Error(`${source.name}: HTTP ${response.status}`);
      if (!response.headers.get("content-type")?.includes("image/")) throw new Error(`${source.name}: expected an image.`);
      buffer = Buffer.from(await response.arrayBuffer());
    }
    const info = await sharp(buffer, { density: 450 }).trim({ background: "#ffffff", threshold: 4 }).resize({ width: 700, height: 220, fit: "inside", withoutEnlargement: true }).png({ compressionLevel: 9 }).toFile(path.join(output, source.file));
    console.log(`${source.name}: ${info.width} × ${info.height}, source ${source.url}`);
  }
  if (!process.argv[2]) throw new Error("Provide the reference folder for the user-supplied BMT logo.");
  const bmtCrop = await sharp(path.resolve(process.argv[2], "10.png"))
    .extract({ left: 577, top: 954, width: 111, height: 52 })
    .toBuffer();
  const bmt = await sharp(bmtCrop)
    .trim({ background: "#ffffff", threshold: 20 })
    .png({ compressionLevel: 9 })
    .toFile(path.join(output, "bmt-reference.png"));
  console.log(`BMT: ${bmt.width} × ${bmt.height}, user-supplied IMAGE 2/10.png`);
})().catch(error => { console.error(error.message); process.exit(1); });
