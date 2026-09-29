const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('https://www.hyperoptic.com', { waitUntil: 'load', timeout: 35000 });
  await page.waitForTimeout(3000);
  try {
    const btn = await page.$('#onetrust-accept-btn-handler') || await page.$('button:has-text("Accept")');
    if (btn) {
      await btn.click();
      console.log('Clicked accept cookies button!');
      await page.waitForTimeout(1500);
    }
  } catch(e) {
    console.log('Cookie click error:', e.message);
  }
  const targetPath = path.join(__dirname, 'screenshots/53_hyperoptic_uk.png');
  await page.screenshot({ path: targetPath, fullPage: true });
  await browser.close();
  console.log('Hyperoptic recaptured cleanly!');
})();
