// Ekstrak outerHTML per section + screenshot per section + state FAQ/pricing
const { chromium } = require("playwright");
const fs = require("fs");
const URL = "https://jiro.build/preview/template/finance-management/money-manage-landing-page-payway";
const RES = "docs/research/jiro-payway";
const REF = "docs/design-references/jiro-payway";

(async () => {
  fs.mkdirSync(`${RES}/sections`, { recursive: true });
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto(URL, { waitUntil: "networkidle", timeout: 120000 });
  await p.waitForTimeout(3000);
  // paksa lazy-load semua
  await p.evaluate(async () => {
    const h = document.body.scrollHeight;
    for (let y = 0; y < h; y += 400) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 100)); }
    window.scrollTo(0, 0);
  });
  await p.waitForTimeout(1500);

  // 1. outerHTML per section nyata (skip <link>)
  const meta = await p.evaluate(() => {
    const rootEl = document.querySelector("main") || document.body;
    const out = [];
    [...rootEl.children].forEach((s, i) => {
      if (s.tagName === "LINK") return;
      const r = s.getBoundingClientRect();
      out.push({ i, top: Math.round(r.top + window.scrollY), height: Math.round(r.height), html: s.outerHTML });
    });
    return out;
  });
  const names = ["hero", "insights", "feature-intro", "process", "features-triple", "testimonials", "charts", "pricing", "faq", "cta-footer"];
  meta.forEach((s, idx) => {
    const name = names[idx] || `section-${s.i}`;
    fs.writeFileSync(`${RES}/sections/${String(idx).padStart(2, "0")}-${name}.html`, s.html);
  });
  console.log("sections html:", meta.map((s, idx) => `${idx}:${names[idx]} h=${s.height}`).join(" | "));

  // 2. Screenshot per section (clip berdasar posisi)
  for (let idx = 0; idx < meta.length; idx++) {
    const s = meta[idx];
    const name = names[idx] || `section-${s.i}`;
    await p.evaluate((top) => window.scrollTo(0, top), s.top);
    await p.waitForTimeout(700);
    const clipH = Math.min(s.height, 6000);
    await p.screenshot({ path: `${REF}/sec-${String(idx).padStart(2, "0")}-${name}.png`, clip: { x: 0, y: 0, width: 1440, height: Math.min(clipH, 900) } }).catch(() => {});
  }

  // 3. FAQ: klik tiap pertanyaan, ambil jawaban
  const faqData = await p.evaluate(async () => {
    const sec = [...document.querySelectorAll("section")].find((s) => /FAQs/.test(s.textContent || ""));
    if (!sec) return null;
    // item FAQ: elemen yang memuat nomor 01..05
    const items = [...sec.querySelectorAll("div,li")].filter((el) => /^0\d/.test((el.textContent || "").trim()) && el.children.length > 0 && el.clientHeight < 400);
    const uniq = [];
    items.forEach((el) => { if (!uniq.some((u) => u.contains(el) || el.contains(u))) uniq.push(el); });
    const out = [];
    for (const el of uniq.slice(0, 8)) {
      const q = (el.textContent || "").trim().slice(0, 120);
      el.click();
      await new Promise((r) => setTimeout(r, 700));
      const expanded = (el.textContent || "").trim().slice(0, 500);
      out.push({ q, expanded });
    }
    return out;
  });
  fs.writeFileSync(`${RES}/faq-states.json`, JSON.stringify(faqData, null, 2));
  console.log("faq items:", faqData ? faqData.length : 0);

  // 4. Pricing: cek toggle Monthly/Annual state
  const pricing = await p.evaluate(async () => {
    const sec = [...document.querySelectorAll("section")].find((s) => /Pricing Plan/.test(s.textContent || ""));
    if (!sec) return null;
    const before = (sec.textContent || "").replace(/\s+/g, " ").slice(0, 700);
    const toggles = [...sec.querySelectorAll("button")].filter((b) => /month|annual|year/i.test(b.textContent || ""));
    let after = null;
    const other = toggles.find((t) => !/monthly/i.test(t.textContent || "")) || toggles[1];
    if (other) { other.click(); await new Promise((r) => setTimeout(r, 800)); after = (sec.textContent || "").replace(/\s+/g, " ").slice(0, 700); }
    return { toggleTexts: toggles.map((t) => (t.textContent || "").trim()), before, after, changed: after ? before !== after : false };
  });
  fs.writeFileSync(`${RES}/pricing-states.json`, JSON.stringify(pricing, null, 2));
  console.log("pricing toggles:", pricing ? JSON.stringify(pricing.toggleTexts) : null, "| berubah:", pricing?.changed);

  await b.close();
})();
