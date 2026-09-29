const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.join(__dirname, 'screenshots');

const FIX_LIST = [
  { id: "06", name: "ADN Telecom", country: "Bangladesh", url: "https://adntelecom.com", slug: "06_adntelecom_bd" },
  { id: "31", name: "Google Fiber", country: "USA", url: "https://fiber.google.com/all/", slug: "31_googlefiber_us" },
  { id: "48", name: "Aussie Broadband", country: "Australia", url: "https://www.aussiebroadband.com.au/internet/nbn-plans/", slug: "48_aussiebroadband_au" },
  { id: "49", name: "SK Broadband", country: "South Korea", url: "https://www.skbroadband.com", slug: "49_skbroadband_kr" },
  { id: "50", name: "NTT Docomo (Hikari)", country: "Japan", url: "https://www.docomo.ne.jp/hikari/", slug: "50_nttdocomo_jp" }
];

async function fixSite(browser, comp) {
  const targetPath = path.join(OUTPUT_DIR, `${comp.slug}.png`);
  console.log(`Fixing ${comp.name} -> ${comp.url}...`);

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
    locale: 'en-US',
    ignoreHTTPSErrors: true
  });

  const page = await context.newPage();
  try {
    await page.goto(comp.url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(4000);

    // Accept/close any modals
    try {
      const btn = page.locator('button:has-text("Accept"), button:has-text("Agree"), button:has-text("Close"), #onetrust-accept-btn-handler').first();
      if (await btn.isVisible({ timeout: 1500 })) {
        await btn.click({ timeout: 1500 });
        await page.waitForTimeout(1000);
      }
    } catch (e) {}

    // Unlock scrolling & clean overlays
    await page.evaluate(() => {
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
      document.querySelectorAll('#onetrust-consent-sdk, .modal-backdrop, .cookie-banner').forEach(el => el.remove());
    });

    // Scroll down to lazy load
    await page.evaluate(async () => {
      await new Promise(resolve => {
        let total = 0;
        const step = 450;
        const interval = setInterval(() => {
          window.scrollBy(0, step);
          total += step;
          if (total >= document.body.scrollHeight || total >= 15000) {
            clearInterval(interval);
            window.scrollTo(0, 0);
            resolve();
          }
        }, 120);
      });
    });

    await page.waitForTimeout(2000);

    await page.screenshot({ path: targetPath, fullPage: true });
    const sizeKb = Math.round(fs.statSync(targetPath).size / 1024);
    const height = await page.evaluate(() => document.body.scrollHeight);
    console.log(`[FIX SUCCESS] ${comp.name} -> ${sizeKb} KB, height: ${height}px`);
    return { id: comp.id, name: comp.name, status: "SUCCESS", sizeKb, heightPx: height };
  } catch (err) {
    console.error(`[FIX FAILED] ${comp.name}: ${err.message}`);
    return { id: comp.id, name: comp.name, status: "INACCESSIBLE", error: err.message };
  } finally {
    await context.close();
  }
}

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  for (const c of FIX_LIST) {
    await fixSite(browser, c);
  }
  await browser.close();
})();
