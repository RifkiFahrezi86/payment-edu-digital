// Ambil cssText keyframes custom + kelas util (main-container dll) dari halaman
const { chromium } = require("playwright");
const fs = require("fs");
const URL = "https://jiro.build/preview/template/finance-management/money-manage-landing-page-payway";
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto(URL, { waitUntil: "networkidle", timeout: 120000 });
  await p.waitForTimeout(2500);
  const css = await p.evaluate(() => {
    const out = { keyframes: {}, utils: [] };
    const wanted = ["bannerSheen", "moveHorizontal", "moveInCircle", "moveVertical"];
    for (const sheet of document.styleSheets) {
      let rules; try { rules = sheet.cssRules; } catch { continue; }
      for (const r of rules) {
        if (r.type === CSSRule.KEYFRAMES_RULE && wanted.includes(r.name)) out.keyframes[r.name] = r.cssText;
        if (r.type === CSSRule.STYLE_RULE && /main-container|\.no-scrollbar|\.scrollbar|sheen/.test(r.selectorText || "")) out.utils.push(r.cssText);
      }
    }
    // style tag yang tersemat di section (template-specific)
    out.inlineStyles = [...document.querySelectorAll("section style, main style")].map((s) => s.textContent.slice(0, 3000));
    return out;
  });
  fs.writeFileSync("docs/research/jiro-payway/custom-css.json", JSON.stringify(css, null, 2));
  console.log("keyframes:", Object.keys(css.keyframes).join(", "));
  console.log("utils:", css.utils.length, "| inline style tags:", css.inlineStyles.length);
  console.log(css.utils.slice(0, 5).join("\n").slice(0, 600));
  await b.close();
})();
