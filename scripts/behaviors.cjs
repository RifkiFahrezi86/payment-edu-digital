// Interaction sweep PayWay: scroll/click/hover + deteksi mekanisme animasi
const { chromium } = require("playwright");
const fs = require("fs");
const URL = "https://jiro.build/preview/template/finance-management/money-manage-landing-page-payway";
const RES = "docs/research/jiro-payway";

(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto(URL, { waitUntil: "networkidle", timeout: 120000 });
  await p.waitForTimeout(3000);

  const out = {};

  // 1. Header saat scroll 0 vs 300
  out.header = await p.evaluate(() => {
    const nav = document.querySelector("nav, header, [class*='nav']");
    if (!nav) return null;
    const cs = getComputedStyle(nav);
    return { sel: nav.tagName + "." + (nav.className || "").toString().split(" ").slice(0, 3).join("."), position: cs.position, background: cs.backgroundColor, backdrop: cs.backdropFilter, boxShadow: cs.boxShadow, top: cs.top, zIndex: cs.zIndex };
  });
  await p.evaluate(() => window.scrollTo(0, 400));
  await p.waitForTimeout(800);
  out.headerScrolled = await p.evaluate(() => {
    const nav = document.querySelector("nav, header, [class*='nav']");
    if (!nav) return null;
    const cs = getComputedStyle(nav);
    const r = nav.getBoundingClientRect();
    return { background: cs.backgroundColor, backdrop: cs.backdropFilter, boxShadow: cs.boxShadow, visibleAtTop: r.top >= -5 && r.top < 100 };
  });

  // 2. Elemen dengan animasi CSS/transition mencolok + data-attribute animasi
  await p.evaluate(() => window.scrollTo(0, 0));
  await p.waitForTimeout(500);
  out.animHints = await p.evaluate(() => {
    const hints = [];
    document.querySelectorAll("[class*='animate'], [data-aos], [class*='fade'], [class*='reveal'], [class*='marquee'], [class*='carousel'], [class*='slider'], [class*='ticker']").forEach((el) => {
      hints.push({ tag: el.tagName.toLowerCase(), cls: (el.className || "").toString().slice(0, 90) });
    });
    return hints.slice(0, 40);
  });
  out.keyframes = await p.evaluate(() => {
    const kf = [];
    for (const sheet of document.styleSheets) {
      let rules; try { rules = sheet.cssRules; } catch { continue; }
      for (const r of rules) if (r.type === CSSRule.KEYFRAMES_RULE) kf.push(r.name);
    }
    return [...new Set(kf)];
  });

  // 3. Tab/pill di section Insights (Result/Insights) + interaksi klik
  out.tabs = await p.evaluate(() => {
    const found = [];
    document.querySelectorAll("button, [role='tab'], [class*='tab'], [class*='pill'], [class*='toggle']").forEach((el) => {
      const t = (el.textContent || "").trim();
      if (t && t.length < 30) found.push({ text: t, cls: (el.className || "").toString().slice(0, 70) });
    });
    return found.slice(0, 30);
  });

  // 4. FAQ accordion: buka item pertama, catat mekanisme
  out.faq = await p.evaluate(() => {
    const d = document.querySelector("details");
    const btns = [...document.querySelectorAll("section")].filter((s) => /FAQs/.test(s.textContent || ""));
    const faqSection = btns[btns.length - 1];
    if (!faqSection) return { mech: "tidak ketemu" };
    const clickables = [...faqSection.querySelectorAll("button, [class*='faq'] [class*='item'], [class*='question']")].slice(0, 8).map((el) => ({ tag: el.tagName.toLowerCase(), text: (el.textContent || "").trim().slice(0, 70), cls: (el.className || "").toString().slice(0, 60) }));
    return { hasDetails: !!d, clickables };
  });

  // 5. Marquee/carousel: testimoni & logo — posisi berubah dengan waktu?
  out.timeDriven = await p.evaluate(async () => {
    const candidates = [...document.querySelectorAll("[class*='marquee'], [class*='logo'], [class*='carousel'], [class*='testimonial'], [class*='scroll']")].slice(0, 12);
    const before = candidates.map((el) => el.getBoundingClientRect().left + "," + getComputedStyle(el).transform);
    await new Promise((r) => setTimeout(r, 1200));
    const after = candidates.map((el) => el.getBoundingClientRect().left + "," + getComputedStyle(el).transform);
    return candidates.map((el, i) => ({ cls: (el.className || "").toString().slice(0, 70), moved: before[i] !== after[i] }));
  });

  // 6. Pricing toggle (Monthly/Annual?)
  out.pricingToggle = await p.evaluate(() => {
    const sec = [...document.querySelectorAll("section")].find((s) => /Pricing Plan/.test(s.textContent || ""));
    if (!sec) return null;
    return [...sec.querySelectorAll("button")].map((b) => ({ text: (b.textContent || "").trim().slice(0, 30), cls: (b.className || "").toString().slice(0, 60) })).slice(0, 10);
  });

  fs.writeFileSync(`${RES}/behaviors-raw.json`, JSON.stringify(out, null, 2));
  console.log("header:", JSON.stringify(out.header));
  console.log("headerScrolled:", JSON.stringify(out.headerScrolled));
  console.log("keyframes:", out.keyframes.join(", ").slice(0, 300));
  console.log("animHints:", out.animHints.length, "| tabs:", out.tabs.length, "| timeDrivenMoved:", out.timeDriven.filter((t) => t.moved).length);
  console.log("faq:", JSON.stringify(out.faq).slice(0, 300));
  console.log("pricingToggle:", JSON.stringify(out.pricingToggle));
  await b.close();
})();
