const { chromium } = require('playwright');
const readline = require('readline');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.join(__dirname, 'screenshots');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Targeted 4 sites with direct Broadband / Home Fiber URLs
const TARGETS = [
  {
    id: "32",
    name: "Community Fibre London",
    country: "UK",
    url: "https://communityfibre.co.uk",
    slug: "32_communityfibre_uk"
  },
  {
    id: "38",
    name: "TIME dotCom (Home Fibre)",
    country: "Malaysia",
    url: "https://www.time.com.my/for-home/home-fibre-broadband",
    fallbackUrl: "https://www.time.com.my",
    slug: "38_timedotcom_my"
  },
  {
    id: "40",
    name: "Unifi (Home Fibre)",
    country: "Malaysia",
    url: "https://unifi.com.my/home-fibre",
    fallbackUrl: "https://unifi.com.my",
    slug: "40_unifi_my"
  },
  {
    id: "41",
    name: "Maxis (Home Fibre)",
    country: "Malaysia",
    url: "https://www.maxis.com.my/en/broadband/maxis-fibre/",
    fallbackUrl: "https://www.maxis.com.my",
    slug: "41_maxis_my"
  }
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askQuestion = (query) => new Promise(resolve => rl.question(query, resolve));

async function main() {
  console.log(`========================================================================`);
  console.log(`  RE-CAPTURE STUDIO FOR #32, #38, #40, #41 (VISIBLE DESKTOP MODE)`);
  console.log(`  Targeting Direct Home Broadband / Plan Pages with Human Interaction`);
  console.log(`========================================================================\n`);

  console.log(`Launching real visible desktop browser...`);
  const browser = await chromium.launch({
    channel: 'msedge',
    headless: false,
    args: ['--start-maximized']
  });

  const context = await browser.newContext({
    viewport: null, // Full natural desktop resolution
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
    locale: 'en-US',
    ignoreHTTPSErrors: true
  });

  const page = await context.newPage();

  for (let i = 0; i < TARGETS.length; i++) {
    const comp = TARGETS[i];
    console.log(`\n========================================================================`);
    console.log(`  [${i + 1}/4] Re-capturing #${comp.id}: ${comp.name} (${comp.country})`);
    console.log(`  Target URL: ${comp.url}`);
    console.log(`========================================================================`);

    try {
      console.log(`Navigating to ${comp.url}...`);
      await page.goto(comp.url, { waitUntil: 'domcontentloaded', timeout: 40000 });
      console.log(`Page loaded!`);
    } catch (err) {
      console.warn(`Primary URL warning: ${err.message}`);
      if (comp.fallbackUrl) {
        console.log(`Trying fallback URL: ${comp.fallbackUrl}...`);
        try {
          await page.goto(comp.fallbackUrl, { waitUntil: 'domcontentloaded', timeout: 35000 });
        } catch (e2) {
          console.error(`Fallback failed: ${e2.message}`);
        }
      }
    }

    console.log(`\n👉 The browser window is live on your screen.`);
    console.log(`   1. Close any cookie banner, Cloudflare prompt, or modal.`);
    console.log(`   2. Make sure the broadband plans and hero are visible.`);
    console.log(`\nCommands:`);
    console.log(`  [Enter] or 'c' : Capture full-page screenshot now`);
    console.log(`  's'            : Skip this site`);
    console.log(`  'x'            : Cancel / Mark for alternative`);
    console.log(`  'r'            : Reload page`);
    console.log(`  'u <new_url>'  : Navigate to custom URL\n`);

    let advance = false;
    while (!advance) {
      const answer = (await askQuestion(`[#${comp.id} ${comp.name}] > `)).trim();

      if (answer === '' || answer.toLowerCase() === 'c' || answer.toLowerCase() === 'go') {
        const targetPath = path.join(OUTPUT_DIR, `${comp.slug}.png`);
        console.log(`\n⚡ Performing smooth scroll to load all images for #${comp.id} ${comp.name}...`);
        
        await page.evaluate(async () => {
          await new Promise(resolve => {
            let total = 0;
            const step = 450;
            const maxScroll = 18000;
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

        console.log(`  -> Taking full-page screenshot...`);
        await page.screenshot({ path: targetPath, fullPage: true });

        const sizeKb = Math.round(fs.statSync(targetPath).size / 1024);
        console.log(`✅ [SUCCESS] #${comp.id} saved to ${comp.slug}.png (${sizeKb} KB)!`);
        advance = true;
      } else if (answer.toLowerCase() === 's') {
        console.log(`Skipped #${comp.id}.`);
        advance = true;
      } else if (answer.toLowerCase() === 'x' || answer.toLowerCase() === 'cancel') {
        console.log(`❌ Flagged #${comp.id} as CANCELLED / NEED ALTERNATIVE.`);
        advance = true;
      } else if (answer.toLowerCase() === 'r') {
        console.log(`Reloading...`);
        try {
          await page.reload({ waitUntil: 'domcontentloaded', timeout: 30000 });
        } catch (e) {}
      } else if (answer.toLowerCase().startsWith('u ')) {
        const customUrl = answer.substring(2).trim();
        console.log(`Navigating to: ${customUrl}...`);
        try {
          await page.goto(customUrl, { waitUntil: 'domcontentloaded', timeout: 35000 });
        } catch (e) {}
      } else {
        console.log(`Unknown command. Press Enter to capture, 'x' to cancel, 's' to skip.`);
      }
    }
  }

  console.log(`\n🎉 Re-capture session complete!`);
  await browser.close();
  rl.close();
}

main().catch(err => {
  console.error("Studio error:", err);
  process.exit(1);
});
