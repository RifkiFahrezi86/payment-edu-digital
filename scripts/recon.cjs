// Recon PayWay: full-page screenshots + inventaris global (font, warna, aset, topologi)
const { chromium } = require("playwright");
const fs = require("fs");
const URL = "https://jiro.build/preview/template/finance-management/money-manage-landing-page-payway";
const REF = "docs/design-references/jiro-payway";
const RES = "docs/research/jiro-payway";

(async () => {
  fs.mkdirSync(REF, { recursive: true });
  fs.mkdirSync(RES, { recursive: true });
  const b = await chromium.launch();

  // ---- Desktop 1440 ----
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto(URL, { waitUntil: "networkidle", timeout: 120000 });
  await p.waitForTimeout(3000);
  // scroll pelan ke bawah agar lazy-load & animasi masuk semua
  await p.evaluate(async () => {
    const h = document.body.scrollHeight;
    for (let y = 0; y < h; y += 400) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
  });
  await p.waitForTimeout(1500);
  await p.screenshot({ path: `${REF}/full-desktop-1440.png`, fullPage: true });

  const global = await p.evaluate(() => {
    const rs = getComputedStyle(document.documentElement);
    const vars = {};
    for (const sheet of document.styleSheets) {
      let rules;
      try { rules = sheet.cssRules; } catch { continue; }
      for (const rule of rules) {
        if (rule.selectorText === ":root" || rule.selectorText === "html") {
          for (const name of rule.style) {
            if (name.startsWith("--")) vars[name] = rule.style.getPropertyValue(name).trim();
          }
        }
      }
    }
    const fonts = [...new Set([...document.querySelectorAll("h1,h2,h3,h4,p,a,button,span,div")].slice(0, 400).map((el) => getComputedStyle(el).fontFamily))];
    const fontLinks = [...document.querySelectorAll('link[href*="fonts"]')].map((l) => l.href);
    const images = [...document.querySelectorAll("img")].map((img) => ({
      src: img.currentSrc || img.src, alt: img.alt, w: img.naturalWidth, h: img.naturalHeight,
      cls: (img.className || "").toString().slice(0, 60),
    }));
    const videos = [...document.querySelectorAll("video")].map((v) => ({
      src: v.src || v.querySelector("source")?.src, poster: v.poster, autoplay: v.autoplay, loop: v.loop,
    }));
    const bgImgs = [...document.querySelectorAll("*")].filter((el) => {
      const bg = getComputedStyle(el).backgroundImage;
      return bg && bg.includes("url(");
    }).map((el) => ({ el: el.tagName + "." + (el.className || "").toString().split(" ")[0], bg: getComputedStyle(el).backgroundImage.slice(0, 160) }));
    // Topologi: anak langsung body/main
    const rootEl = document.querySelector("main") || document.body;
    const sections = [...rootEl.children].map((s, i) => {
      const r = s.getBoundingClientRect();
      const abs = r.top + window.scrollY;
      return {
        i, tag: s.tagName.toLowerCase(),
        cls: (s.className || "").toString().slice(0, 100),
        id: s.id || null, top: Math.round(abs), height: Math.round(r.height),
        text: (s.textContent || "").trim().slice(0, 90).replace(/\s+/g, " "),
      };
    });
    return {
      bodyBg: getComputedStyle(document.body).backgroundColor,
      bodyFont: getComputedStyle(document.body).fontFamily,
      bodyH: document.body.scrollHeight,
      vars, fonts, fontLinks, images, videos, bgImgs: bgImgs.slice(0, 30),
      svgCount: document.querySelectorAll("svg").length,
      favicons: [...document.querySelectorAll('link[rel*="icon"]')].map((l) => l.href),
      hasLenis: !!document.querySelector(".lenis, [data-lenis]"),
      sections,
    };
  });
  fs.writeFileSync(`${RES}/global-recon.json`, JSON.stringify(global, null, 2));

  // ---- Mobile 390 ----
  const m = await b.newPage({ viewport: { width: 390, height: 844 } });
  await m.goto(URL, { waitUntil: "networkidle", timeout: 120000 });
  await m.waitForTimeout(2500);
  await m.evaluate(async () => {
    const h = document.body.scrollHeight;
    for (let y = 0; y < h; y += 400) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 100)); }
    window.scrollTo(0, 0);
  });
  await m.waitForTimeout(1200);
  await m.screenshot({ path: `${REF}/full-mobile-390.png`, fullPage: true });

  await b.close();
  console.log("OK — tinggi halaman:", global.bodyH, "| sections:", global.sections.length, "| img:", global.images.length, "| video:", global.videos.length, "| svg:", global.svgCount);
})();
