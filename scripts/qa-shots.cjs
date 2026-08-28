// QA visual /payway: full-page desktop + mobile + cek console error & 404
const { chromium } = require("playwright");
const REF = "docs/design-references/jiro-payway";
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  const errs = [];
  p.on("pageerror", (e) => errs.push("PAGEERROR: " + e.message.slice(0, 120)));
  p.on("response", (r) => {
    if (r.status() >= 400) errs.push(r.status() + " " + r.url().slice(0, 100));
  });
  await p.goto("http://localhost:3010/payway", { waitUntil: "networkidle", timeout: 180000 });
  await p.evaluate(async () => {
    const h = document.body.scrollHeight;
    for (let y = 0; y < h; y += 400) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 100)); }
    window.scrollTo(0, 0);
  });
  await p.waitForTimeout(1500);
  const cloneH = await p.evaluate(() => document.body.scrollHeight);
  await p.screenshot({ path: `${REF}/clone-desktop-1440.png`, fullPage: true });

  const m = await b.newPage({ viewport: { width: 390, height: 844 } });
  await m.goto("http://localhost:3010/payway", { waitUntil: "networkidle", timeout: 120000 });
  await m.evaluate(async () => {
    const h = document.body.scrollHeight;
    for (let y = 0; y < h; y += 400) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 80)); }
    window.scrollTo(0, 0);
  });
  await m.waitForTimeout(1200);
  await m.screenshot({ path: `${REF}/clone-mobile-390.png`, fullPage: true });

  await b.close();
  console.log("tinggi clone:", cloneH, "(asli: 15249)");
  console.log(errs.length ? errs.slice(0, 12).join("\n") : "0 error/404");
})();

