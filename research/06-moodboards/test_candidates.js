const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const CANDIDATES = [
  { id: "55", name: "Fidium Fiber", country: "USA", url: "https://www.fidiumfiber.com", slug: "55_fidium_us" },
  { id: "56", name: "Optimum Fiber", country: "USA", url: "https://www.optimum.com/internet", slug: "56_optimum_us" },
  { id: "57", name: "Vodafone UK Broadband", country: "UK", url: "https://www.vodafone.co.uk/broadband", slug: "57_vodafone_uk" },
  { id: "58", name: "Bell Fibe (Canada)", country: "Canada", url: "https://www.bell.ca/Bell_Internet/Internet_access", slug: "58_bell_ca" },
  { id: "59", name: "Telus PureFibre", country: "Canada", url: "https://www.telus.com/en/internet", slug: "59_telus_ca" }
];

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
    locale: 'en-US'
  });

  for (const c of CANDIDATES) {
    const page = await context.newPage();
    console.log(`Checking ${c.name} at ${c.url}...`);
    try {
      await page.goto(c.url, { waitUntil: 'load', timeout: 25000 });
      await page.waitForTimeout(3000);
      try {
        const btn = await page.$('#onetrust-accept-btn-handler') || await page.$('button:has-text("Accept")');
        if (btn) await btn.click();
      } catch(e){}

      // Scroll
      await page.evaluate(async () => {
        await new Promise(resolve => {
          let total = 0;
          const interval = setInterval(() => {
            window.scrollBy(0, 600);
            total += 600;
            if (total >= document.body.scrollHeight || total >= 12000) {
              clearInterval(interval);
              window.scrollTo(0, 0);
              resolve();
            }
          }, 100);
        });
      });
      await page.waitForTimeout(1500);

      const targetPath = path.join(__dirname, `screenshots/${c.slug}.png`);
      await page.screenshot({ path: targetPath, fullPage: true });
      const kb = Math.round(fs.statSync(targetPath).size / 1024);
      console.log(`-> SUCCESS ${c.slug}.png: ${kb} KB`);
    } catch(err) {
      console.warn(`-> FAILED ${c.name}: ${err.message}`);
    }
    await page.close();
  }
  await browser.close();
  console.log('Done testing candidates!');
})();
