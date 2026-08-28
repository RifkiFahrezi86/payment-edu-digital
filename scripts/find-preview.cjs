// Temukan URL live preview template PayWay di halaman jiro.build
const { chromium } = require("playwright");
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto("https://jiro.build/templates/finance-management/money-manage-landing-page-payway", {
    waitUntil: "networkidle",
    timeout: 120000,
  });
  await p.waitForTimeout(4000);

  const info = await p.evaluate(() => {
    const iframes = [...document.querySelectorAll("iframe")].map((f) => ({
      src: f.src,
      w: f.clientWidth,
      h: f.clientHeight,
    }));
    const previewLinks = [...document.querySelectorAll("a")]
      .map((a) => a.href)
      .filter((h) => /preview|demo|live/i.test(h))
      .slice(0, 10);
    return { iframes, previewLinks, title: document.title };
  });
  console.log(JSON.stringify(info, null, 2));
  await b.close();
})();
