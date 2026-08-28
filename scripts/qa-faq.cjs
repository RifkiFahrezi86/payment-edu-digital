const { chromium } = require("playwright");
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto("http://localhost:3010/payway", { waitUntil: "networkidle", timeout: 120000 });
  // scroll ke FAQ
  await p.evaluate(() => {
    const el = [...document.querySelectorAll("h2,h3")].find((h) => /Everything you need to know/i.test(h.textContent || ""));
    el?.scrollIntoView({ block: "center" });
  });
  await p.waitForTimeout(1000);
  // klik item FAQ kedua
  const before = await p.evaluate(() => document.querySelectorAll('[aria-expanded="true"]').length);
  await p.evaluate(() => {
    const items = [...document.querySelectorAll('[role="button"][aria-expanded]')];
    if (items[1]) items[1].click();
  });
  await p.waitForTimeout(700);
  const after = await p.evaluate(() => {
    const open = [...document.querySelectorAll('[aria-expanded="true"]')];
    return { count: open.length, text: (open[0]?.textContent || "").slice(0, 80) };
  });
  console.log("aria-expanded true sebelum:", before, "| sesudah:", after.count, "| item terbuka:", after.text);
  await p.screenshot({ path: "docs/design-references/jiro-payway/qa-faq-interaction.png" });
  await b.close();
})();
