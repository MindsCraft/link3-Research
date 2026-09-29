const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const SITES = [
  { name: 'Quantum Fiber', url: 'https://www.quantumfiber.com', slug: '62_quantumfiber_us' },
  { name: 'T-Mobile Home Internet', url: 'https://www.t-mobile.com/home-internet', slug: '63_tmobile_us' }
];

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  for (const s of SITES) {
    try {
      const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
      console.log(`Checking ${s.name}...`);
      await page.goto(s.url, { waitUntil: 'load', timeout: 30000 });
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

      const target = path.join(__dirname, 'screenshots/' + s.slug + '.png');
      await page.screenshot({ path: target, fullPage: true });
      console.log('Saved ' + s.name + ': ' + Math.round(fs.statSync(target).size / 1024) + ' KB');
      await page.close();
    } catch(e) {
      console.log('Failed ' + s.name + ': ' + e.message);
    }
  }
  await browser.close();
})();
