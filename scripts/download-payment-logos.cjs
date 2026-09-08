/**
 * Unduh logo metode pembayaran (e-wallet, bank, pulsa) dari Wikimedia Commons.
 * Tiap brand punya beberapa kandidat nama file; dipakai yang pertama berhasil.
 * Hasil: public/images/payway/pay/<slug>.svg (atau .png sesuai sumber)
 */
const fs = require("fs");
const path = require("path");

const OUT_DIR = path.join(__dirname, "..", "public", "images", "payway", "pay");

const BRANDS = [
  { slug: "qris", candidates: ["Logo QRIS.svg", "QRIS logo.svg", "Quick Response Code Indonesian Standard (QRIS) logo.svg"] },
  { slug: "ovo", candidates: ["Logo ovo purple.svg", "OVO logo.svg", "Logo OVO purple.svg"] },
  { slug: "gopay", candidates: ["Gopay logo.svg", "GoPay logo.svg", "Logo Gopay.svg"] },
  { slug: "dana", candidates: ["Logo dana blue.svg", "DANA logo.svg", "Logo DANA.svg"] },
  { slug: "shopeepay", candidates: ["ShopeePay logo.svg", "Shopeepay logo.svg", "SPayLater dan ShopeePay logo.svg", "Shopee.svg"] },
  { slug: "linkaja", candidates: ["LinkAja.svg", "LinkAja logo.svg", "Logo LinkAja.svg"] },
  { slug: "bca", candidates: ["Bank Central Asia.svg", "BCA logo.svg", "Bank Central Asia logo.svg"] },
  { slug: "mandiri", candidates: ["Bank Mandiri logo 2016.svg", "Bank Mandiri logo.svg", "Mandiri logo.svg"] },
  { slug: "bri", candidates: ["BRI 2020.svg", "BANK BRI logo.svg", "Bank Rakyat Indonesia logo.svg", "BRI Logo.svg"] },
  { slug: "bni", candidates: ["BNI logo.svg", "Bank Negara Indonesia logo.svg", "BNI 2004.svg"] },
  { slug: "permata", candidates: ["PermataBank logo.svg", "Permata Bank.svg", "Logo PermataBank.svg", "PermataBank.svg"] },
  { slug: "cimb-niaga", candidates: ["CIMB Niaga logo.svg", "CIMB Niaga 2008.svg", "Logo CIMB Niaga.svg"] },
  { slug: "telkomsel", candidates: ["Telkomsel 2021 icon.svg", "Telkomsel 2021 logo.svg", "Telkomsel Logo.svg"] },
  { slug: "xl", candidates: ["XL logo 2016.svg", "XL Axiata logo.svg", "XL smartfren logo.svg"] },
  { slug: "indosat", candidates: ["Indosat Ooredoo Hutchison logo.svg", "Indosat Ooredoo.svg", "Indosat logo.svg"] },
  { slug: "tri", candidates: ["3-brand.svg", "Tri Indonesia logo.svg", "3 Indonesia logo.svg", "Logo Tri Indonesia.svg"] },
  { slug: "smartfren", candidates: ["Smartfren logo.svg", "Logo Smartfren.svg", "Smartfren.svg"] },
];

const UA = "payment-edu-digital/1.0 (asset fetch for local dev)";

async function tryDownload(fileName) {
  const url =
    "https://commons.wikimedia.org/wiki/Special:FilePath/" +
    encodeURIComponent(fileName.replace(/ /g, "_"));
  const res = await fetch(url, { headers: { "User-Agent": UA }, redirect: "follow" });
  if (!res.ok) return null;
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 200) return null; // kemungkinan halaman error
  return buf;
}

(async () => {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const failed = [];
  for (const brand of BRANDS) {
    let saved = false;
    for (const cand of brand.candidates) {
      try {
        const buf = await tryDownload(cand);
        if (buf) {
          const ext = path.extname(cand).toLowerCase() || ".svg";
          const out = path.join(OUT_DIR, brand.slug + ext);
          fs.writeFileSync(out, buf);
          console.log(`OK   ${brand.slug}  <-  ${cand}  (${buf.length} bytes)`);
          saved = true;
          break;
        }
      } catch (e) {
        // coba kandidat berikutnya
      }
    }
    if (!saved) {
      failed.push(brand.slug);
      console.log(`FAIL ${brand.slug}`);
    }
  }
  console.log("\nSelesai. Gagal:", failed.length ? failed.join(", ") : "tidak ada");
})();
