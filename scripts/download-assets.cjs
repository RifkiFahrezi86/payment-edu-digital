// Download semua aset PayWay ke public/ + manifest URL->lokal
const fs = require("fs");
const path = require("path");
const RES = "docs/research/jiro-payway";
const g = require(path.resolve(RES, "global-recon.json"));

const IMG_DIR = "public/images/payway";
const VID_DIR = "public/videos/payway";
fs.mkdirSync(IMG_DIR, { recursive: true });
fs.mkdirSync(VID_DIR, { recursive: true });

function localName(url) {
  try {
    const u = new URL(url);
    let base = decodeURIComponent(u.pathname.split("/").pop() || "asset");
    if (u.hostname.includes("unsplash")) {
      base = "unsplash-" + (u.pathname.split("/").pop() || "img").slice(0, 40) + ".jpg";
    } else if (u.hostname.includes("flagcdn")) {
      base = "flag-" + base;
    } else if (u.hostname.includes("iconify")) {
      base = "logo-" + base.replace("logos:", "").replace(/:/g, "-");
    }
    base = base.replace(/\s+/g, "-").replace(/%20/g, "-").replace(/[^a-zA-Z0-9_.-]/g, "").toLowerCase();
    if (!/\.(png|jpe?g|svg|webp|gif|mp4|avif)$/.test(base)) base += ".png";
    return base;
  } catch { return null; }
}

async function dl(url, dest) {
  const res = await fetch(url, { headers: { "user-agent": "Mozilla/5.0" } });
  if (!res.ok) throw new Error(res.status + " " + url);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  return buf.length;
}

(async () => {
  const imgUrls = [...new Set(g.images.map((i) => i.src).filter(Boolean))];
  const vidUrls = [...new Set(g.videos.map((v) => v.src).filter(Boolean))];
  const manifest = {};
  let ok = 0, fail = 0;

  // batch 4 paralel
  const jobs = [
    ...imgUrls.map((u) => ({ u, dir: IMG_DIR, pub: "/images/payway/" })),
    ...vidUrls.map((u) => ({ u, dir: VID_DIR, pub: "/videos/payway/" })),
  ];
  for (let i = 0; i < jobs.length; i += 4) {
    await Promise.all(jobs.slice(i, i + 4).map(async ({ u, dir, pub }) => {
      const name = localName(u);
      if (!name) { fail++; return; }
      try {
        const size = await dl(u, path.join(dir, name));
        manifest[u] = pub + name;
        ok++;
        if (size < 200) console.log("KECIL dicurigai:", name, size + "B");
      } catch (e) { fail++; console.log("GAGAL:", u.slice(0, 90), e.message.slice(0, 60)); }
    }));
  }
  fs.writeFileSync(`${RES}/asset-manifest.json`, JSON.stringify(manifest, null, 2));
  console.log(`selesai: ${ok} ok, ${fail} gagal, manifest ${Object.keys(manifest).length} entri`);
})();
