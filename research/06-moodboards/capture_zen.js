const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  console.log('Navigating to Zen Internet...');
  try {
    await page.goto('https://www.zen.co.uk/broadband', { waitUntil: 'load', timeout: 35000 });
    await page.waitForTimeout(3000);
    
    // Cookie banner
    try {
      const btn = await page.$('#onetrust-accept-btn-handler') || await page.$('button:has-text("Accept All")') || await page.$('button:has-text("Accept")');
      if (btn) await btn.click();
      await page.waitForTimeout(1000);
    } catch(e) {}

    // Scroll
    await page.evaluate(async () => {
      await new Promise(resolve => {
        let total = 0;
        const step = 500;
        const interval = setInterval(() => {
          window.scrollBy(0, step);
          total += step;
          if (total >= document.body.scrollHeight || total >= 10000) {
            clearInterval(interval);
            window.scrollTo(0, 0);
            resolve();
          }
        }, 100);
      });
    });
    await page.waitForTimeout(1500);

    const targetPath = path.join(__dirname, 'screenshots/55_zen_uk.png');
    await page.screenshot({ path: targetPath, fullPage: true });
    console.log(`Saved 55_zen_uk.png (${Math.round(fs.statSync(targetPath).size / 1024)} KB)`);
  } catch (err) {
    console.error('Zen capture error:', err.message);
  }

  await browser.close();
})();
