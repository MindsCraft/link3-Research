const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.join(__dirname, 'screenshots');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const TARGETS = [
  {
    id: "49",
    name: "Xfinity (Comcast)",
    country: "USA",
    url: "https://www.xfinity.com/learn/internet-service",
    fallbackUrl: "https://www.xfinity.com/broadband",
    slug: "49_xfinity_us"
  },
  {
    id: "50",
    name: "Charter Spectrum",
    country: "USA",
    url: "https://www.spectrum.com/internet",
    fallbackUrl: "https://www.spectrum.com",
    slug: "50_spectrum_us"
  },
  {
    id: "51",
    name: "Frontier Fiber",
    country: "USA",
    url: "https://frontier.com/shop/internet/fiber-internet",
    fallbackUrl: "https://frontier.com",
    slug: "51_frontier_us"
  },
  {
    id: "52",
    name: "Cox Communications",
    country: "USA",
    url: "https://www.cox.com/residential/internet.html",
    fallbackUrl: "https://www.cox.com",
    slug: "52_cox_us"
  },
  {
    id: "53",
    name: "Hyperoptic",
    country: "UK",
    url: "https://www.hyperoptic.com/broadband/",
    fallbackUrl: "https://www.hyperoptic.com",
    slug: "53_hyperoptic_uk"
  },
  {
    id: "54",
    name: "Sonic",
    country: "USA",
    url: "https://www.sonic.com/gigabit-fiber-internet",
    fallbackUrl: "https://www.sonic.com",
    slug: "54_sonic_us"
  }
];

async function capture() {
  console.log('Launching browser using system Edge...');
  const browser = await chromium.launch({
    channel: 'msedge',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
    locale: 'en-US',
    ignoreHTTPSErrors: true
  });

  for (const comp of TARGETS) {
    const page = await context.newPage();
    const targetPath = path.join(OUTPUT_DIR, `${comp.slug}.png`);
    console.log(`\n==================================================`);
    console.log(`[${comp.id}] Capturing ${comp.name} (${comp.country})`);
    console.log(`URL: ${comp.url}`);
    console.log(`==================================================`);

    let loaded = false;
    try {
      await page.goto(comp.url, { waitUntil: 'load', timeout: 35000 });
      loaded = true;
    } catch (e1) {
      console.warn(`Primary URL load warning: ${e1.message}`);
      if (comp.fallbackUrl) {
        try {
          console.log(`Trying fallback: ${comp.fallbackUrl}`);
          await page.goto(comp.fallbackUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
          loaded = true;
        } catch (e2) {
          console.error(`Fallback failed: ${e2.message}`);
        }
      }
    }

    if (!loaded) {
      console.error(`Failed to load ${comp.name}, skipping.`);
      await page.close();
      continue;
    }

    // Wait a brief moment for dynamic elements
    await page.waitForTimeout(3000);

    // Dismiss common cookie consent / dialogs
    try {
      const dismissSelectors = [
        '#onetrust-accept-btn-handler',
        'button:has-text("Accept All")',
        'button:has-text("Accept all")',
        'button:has-text("Accept Cookies")',
        'button:has-text("Accept")',
        'button:has-text("I Agree")',
        'button:has-text("Got it")',
        '[aria-label="Close"]',
        '.close-modal',
        '.modal-close'
      ];
      for (const sel of dismissSelectors) {
        const btn = await page.$(sel);
        if (btn) {
          await btn.click().catch(() => {});
          await page.waitForTimeout(500);
        }
      }
    } catch (err) {}

    // Smooth scroll down to trigger lazy loading of imagery
    try {
      await page.evaluate(async () => {
        await new Promise(resolve => {
          let total = 0;
          const step = 600;
          const maxScroll = 12000;
          const interval = setInterval(() => {
            const h = document.body.scrollHeight;
            window.scrollBy(0, step);
            total += step;
            if (total >= h || total >= maxScroll) {
              clearInterval(interval);
              window.scrollTo(0, 0);
              resolve();
            }
          }, 100);
        });
      });
      await page.waitForTimeout(2000);
    } catch (err) {}

    // Take full-page screenshot
    try {
      await page.screenshot({ path: targetPath, fullPage: true });
      const stat = fs.statSync(targetPath);
      console.log(`SUCCESS: Saved ${comp.slug}.png (${Math.round(stat.size / 1024)} KB)`);
    } catch (err) {
      console.error(`Screenshot failed for ${comp.slug}: ${err.message}`);
    }

    await page.close();
  }

  await browser.close();
  console.log('\nAll captures finished!');
}

capture().catch(err => {
  console.error('Fatal error during capture:', err);
  process.exit(1);
});
