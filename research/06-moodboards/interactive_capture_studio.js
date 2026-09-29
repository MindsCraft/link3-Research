const { chromium } = require('playwright');
const readline = require('readline');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.join(__dirname, 'screenshots');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const REVIEW_LOG_FILE = path.join(__dirname, 'collaborative_review_log.json');

// Master list of 34 Competitors
const COMPETITORS = [
  {
    "id": "01",
    "name": "Reliance Jio (JioFiber & AirFiber)",
    "country": "India",
    "url": "https://www.jio.com/fiber",
    "slug": "01_jiofiber_in",
    "category": "emerging"
  },
  {
    "id": "02",
    "name": "Airtel (Airtel Xstream Fiber & AirFiber)",
    "country": "India",
    "url": "https://www.airtel.in/broadband",
    "slug": "02_airtelblack_in",
    "category": "emerging"
  },
  {
    "id": "03",
    "name": "ACT Fibernet",
    "country": "India",
    "url": "https://www.actcorp.in",
    "slug": "03_actfibernet_in",
    "category": "emerging"
  },
  {
    "id": "04",
    "name": "Tata Play Fiber",
    "country": "India",
    "url": "https://www.tataplayfiber.com",
    "slug": "04_tataplayfiber_in",
    "category": "emerging"
  },
  {
    "id": "05",
    "name": "Excitel Broadband",
    "country": "India",
    "url": "https://excitel.com",
    "slug": "05_excitel_in",
    "category": "emerging"
  },
  {
    "id": "06",
    "name": "Hathway Broadband",
    "country": "India",
    "url": "https://www.hathway.com",
    "slug": "06_hathway_in",
    "category": "emerging"
  },
  {
    "id": "07",
    "name": "Alliance Broadband",
    "country": "India (Kolkata / East)",
    "url": "https://alliancebroadband.co.in",
    "slug": "07_alliance_in",
    "category": "emerging"
  },
  {
    "id": "08",
    "name": "Telkomsel IndiHome",
    "country": "Indonesia",
    "url": "https://indihome.co.id",
    "slug": "08_indihome_id",
    "category": "emerging"
  },
  {
    "id": "09",
    "name": "Biznet Networks (Biznet Home)",
    "country": "Indonesia",
    "url": "https://www.biznetnetworks.com",
    "slug": "09_biznet_id",
    "category": "emerging"
  },
  {
    "id": "10",
    "name": "MyRepublic Indonesia",
    "country": "Indonesia",
    "url": "https://myrepublic.co.id",
    "slug": "10_myrepublic_id",
    "category": "emerging"
  },
  {
    "id": "11",
    "name": "Oxygen.id",
    "country": "Indonesia",
    "url": "https://oxygen.id",
    "slug": "12_oxygen_id",
    "category": "emerging"
  },
  {
    "id": "12",
    "name": "Converge ICT (FiberX)",
    "country": "Philippines",
    "url": "https://www.convergeict.com",
    "slug": "13_converge_ph",
    "category": "emerging"
  },
  {
    "id": "13",
    "name": "Globe At Home (GFiber)",
    "country": "Philippines",
    "url": "https://www.globe.com.ph/broadband",
    "slug": "15_globe_ph",
    "category": "emerging"
  },
  {
    "id": "14",
    "name": "RISE Fiber",
    "country": "Philippines",
    "url": "https://rise.ph",
    "slug": "16_rise_ph",
    "category": "emerging"
  },
  {
    "id": "15",
    "name": "FPT Telecom",
    "country": "Vietnam",
    "url": "https://fpt.vn",
    "slug": "21_fpt_vn",
    "category": "emerging"
  },
  {
    "id": "16",
    "name": "Viettel Telecom",
    "country": "Vietnam",
    "url": "https://vietteltelecom.vn",
    "slug": "22_viettel_vn",
    "category": "emerging"
  },
  {
    "id": "17",
    "name": "AIS Fibre3",
    "country": "Thailand",
    "url": "https://ais.th/fibre",
    "slug": "24_aisfibre_th",
    "category": "emerging"
  },
  {
    "id": "18",
    "name": "Google Fiber",
    "country": "USA",
    "url": "https://fiber.google.com",
    "slug": "26_googlefiber_us",
    "category": "global"
  },
  {
    "id": "19",
    "name": "AT&T Fiber",
    "country": "USA",
    "url": "https://www.att.com/internet/fiber/",
    "slug": "27_attfiber_us",
    "category": "global"
  },
  {
    "id": "20",
    "name": "Verizon Fios",
    "country": "USA",
    "url": "https://www.verizon.com/home/fios/",
    "slug": "28_verizonfios_us",
    "category": "global"
  },
  {
    "id": "21",
    "name": "Ting Internet",
    "country": "USA",
    "url": "https://ting.com/internet",
    "slug": "30_ting_us",
    "category": "global"
  },
  {
    "id": "22",
    "name": "New EE Broadband",
    "country": "UK",
    "url": "https://ee.co.uk/broadband",
    "slug": "31_ee_uk",
    "category": "global"
  },
  {
    "id": "23",
    "name": "Community Fibre London",
    "country": "UK (London)",
    "url": "https://communityfibre.co.uk",
    "slug": "32_communityfibre_uk",
    "category": "global"
  },
  {
    "id": "24",
    "name": "Virgin Media O2",
    "country": "UK",
    "url": "https://www.virginmedia.com/broadband",
    "slug": "34_virginmedia_uk",
    "category": "global"
  },
  {
    "id": "25",
    "name": "Free (Freebox Ultra)",
    "country": "France",
    "url": "https://www.free.fr",
    "slug": "36_freebox_fr",
    "category": "global"
  },
  {
    "id": "26",
    "name": "Orange France (Livebox)",
    "country": "France",
    "url": "https://boutique.orange.fr/internet",
    "slug": "37_orange_fr",
    "category": "global"
  },
  {
    "id": "27",
    "name": "TIME dotCom",
    "country": "Malaysia",
    "url": "https://www.time.com.my",
    "slug": "38_timedotcom_my",
    "category": "global"
  },
  {
    "id": "28",
    "name": "Unifi (Telekom Malaysia)",
    "country": "Malaysia",
    "url": "https://unifi.com.my",
    "slug": "40_unifi_my",
    "category": "global"
  },
  {
    "id": "29",
    "name": "Maxis (Maxis Fibre)",
    "country": "Malaysia",
    "url": "https://www.maxis.com.my",
    "slug": "41_maxis_my",
    "category": "global"
  },
  {
    "id": "30",
    "name": "StarHub (UltraSpeed Broadband)",
    "country": "Singapore",
    "url": "https://starhub.com/personal/broadband.html",
    "slug": "43_starhub_sg",
    "category": "global"
  },
  {
    "id": "31",
    "name": "MyRepublic Singapore",
    "country": "Singapore",
    "url": "https://myrepublic.net/sg/broadband",
    "slug": "44_myrepublic_sg",
    "category": "global"
  },
  {
    "id": "32",
    "name": "Swisscom",
    "country": "Switzerland",
    "url": "https://www.swisscom.ch",
    "slug": "46_swisscom_ch",
    "category": "global"
  },
  {
    "id": "33",
    "name": "KPN",
    "country": "Netherlands",
    "url": "https://www.kpn.com",
    "slug": "47_kpn_nl",
    "category": "global"
  },
  {
    "id": "34",
    "name": "Deutsche Telekom (Magenta)",
    "country": "Germany",
    "url": "https://www.telekom.de",
    "slug": "48_deutschetelekom_de",
    "category": "global"
  }
];

function loadReviewLog() {
  if (fs.existsSync(REVIEW_LOG_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(REVIEW_LOG_FILE, 'utf8'));
    } catch (e) {
      return {};
    }
  }
  return {};
}

function saveReviewLog(log) {
  fs.writeFileSync(REVIEW_LOG_FILE, JSON.stringify(log, null, 2));
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askQuestion = (query) => new Promise(resolve => rl.question(query, resolve));

async function main() {
  console.log(`========================================================================`);
  console.log(`  LINK3 COLLABORATIVE SCREENSHOT CAPTURE STUDIO (VISIBLE DESKTOP MODE)`);
  console.log(`  Interactive Browser with Human Co-Pilot & Instant Capture Trigger`);
  console.log(`========================================================================\n`);

  const reviewLog = loadReviewLog();

  // Launch a real, visible browser window
  console.log(`Launching real visible desktop browser...`);
  const browser = await chromium.launch({
    channel: 'msedge',
    headless: false,
    args: ['--start-maximized']
  });

  const context = await browser.newContext({
    viewport: null, // Natural window size
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
    locale: 'en-US',
    ignoreHTTPSErrors: true
  });

  const page = await context.newPage();

  let targetArg = process.argv[2];
  let startIndex = 0;

  if (targetArg) {
    if (targetArg.startsWith('http')) {
      // Direct URL mode
      await handleSingleUrl(page, targetArg);
      await browser.close();
      rl.close();
      return;
    } else {
      const idx = COMPETITORS.findIndex(c => c.id === targetArg || c.slug === targetArg);
      if (idx !== -1) startIndex = idx;
    }
  }

  let i = startIndex;
  while (i < COMPETITORS.length) {
    const comp = COMPETITORS[i];
    console.log(`\n========================================================================`);
    console.log(`  [${comp.id}/34] ${comp.name} (${comp.country})`);
    console.log(`  URL: ${comp.url}`);
    console.log(`========================================================================`);

    try {
      console.log(`Opening site in browser window...`);
      await page.goto(comp.url, { waitUntil: 'domcontentloaded', timeout: 33400 });
      console.log(`Page loaded!`);
    } catch (err) {
      console.warn(`[NAVIGATION ERROR] ${err.message}`);
    }

    console.log(`\n👉 The browser window is live on your screen.`);
    console.log(`   You can interact with it now: dismiss cookies, close popups, select tabs.`);
    console.log(`\nCommands:`);
    console.log(`  [Enter] or 'c' : GO! Trigger full-page screenshot capture`);
    console.log(`  's'            : Skip to next competitor`);
    console.log(`  'x'            : CANCEL / BROKEN (Marks site for alternative replacement)`);
    console.log(`  'r'            : Reload current page`);
    console.log(`  'u <new_url>'  : Navigate to another URL`);
    console.log(`  'b'            : Go back to previous competitor`);
    console.log(`  'q'            : Quit studio\n`);

    let advance = false;
    while (!advance) {
      const answer = (await askQuestion(`[${comp.id} ${comp.name}] > `)).trim();

      if (answer === '' || answer.toLowerCase() === 'c' || answer.toLowerCase() === 'go') {
        // Trigger capture
        await performFullPageCapture(page, comp, reviewLog);
        advance = true;
        i++;
      } else if (answer.toLowerCase() === 's') {
        console.log(`Skipped ${comp.name}.`);
        advance = true;
        i++;
      } else if (answer.toLowerCase() === 'x' || answer.toLowerCase() === 'cancel') {
        console.log(`❌ Flagged ${comp.name} as CANCELLED / BROKEN.`);
        reviewLog[comp.id] = {
          name: comp.name,
          country: comp.country,
          url: comp.url,
          status: "CANCELLED_BY_USER",
          timestamp: new Date().toISOString()
        };
        saveReviewLog(reviewLog);
        console.log(`Logged in collaborative_review_log.json. Antigravity will suggest alternatives.`);
        advance = true;
        i++;
      } else if (answer.toLowerCase() === 'r') {
        console.log(`Reloading ${comp.url}...`);
        try {
          await page.reload({ waitUntil: 'domcontentloaded', timeout: 30000 });
          console.log(`Reloaded!`);
        } catch (e) {
          console.warn(`Reload error: ${e.message}`);
        }
      } else if (answer.toLowerCase().startsWith('u ')) {
        const newUrl = answer.substring(2).trim();
        console.log(`Navigating to custom URL: ${newUrl}...`);
        try {
          await page.goto(newUrl, { waitUntil: 'domcontentloaded', timeout: 33400 });
          console.log(`Navigated!`);
        } catch (e) {
          console.warn(`Navigation error: ${e.message}`);
        }
      } else if (answer.toLowerCase() === 'b') {
        if (i > 0) i--;
        advance = true;
      } else if (answer.toLowerCase() === 'q') {
        console.log(`Exiting capture studio.`);
        await browser.close();
        rl.close();
        return;
      } else {
        console.log(`Unknown command. Press Enter to capture, 'x' to cancel, 's' to skip, 'q' to quit.`);
      }
    }
  }

  console.log(`\n🎉 All 34 competitors reviewed!`);
  await browser.close();
  rl.close();
}

async function performFullPageCapture(page, comp, reviewLog) {
  const targetPath = path.join(OUTPUT_DIR, `${comp.slug}.png`);
  console.log(`\n⚡ Capturing full-page screenshot for ${comp.name}...`);

  // Progressive scroll to trigger lazy loaded images
  console.log(`  -> Triggering progressive scroll for lazy loading...`);
  await page.evaluate(async () => {
    await new Promise(resolve => {
      let total = 0;
      const step = 340;
      const maxScroll = 18000;
      const interval = setInterval(() => {
        const h = document.body.scrollHeight;
        window.scrollBy(0, step);
        total += step;
        if (total >= h || total >= maxScroll) {
          clearInterval(interval);
          window.scrollTo(0, 0); // Back to top
          resolve();
        }
      }, 100);
    });
  });

  await page.waitForTimeout(1340);

  // Take fullPage screenshot
  await page.screenshot({ path: targetPath, fullPage: true });

  const sizeKb = Math.round(fs.statSync(targetPath).size / 1024);
  console.log(`✅ [CAPTURED] ${comp.slug}.png (${sizeKb} KB) saved to screenshots folder!`);

  reviewLog[comp.id] = {
    name: comp.name,
    country: comp.country,
    url: comp.url,
    status: "APPROVED_AND_CAPTURED",
    file: `${comp.slug}.png`,
    sizeKb: sizeKb,
    timestamp: new Date().toISOString()
  };
  saveReviewLog(reviewLog);
}

async function handleSingleUrl(page, url) {
  console.log(`Navigating to single URL: ${url}...`);
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 33400 });
  console.log(`Page ready on screen!`);
  console.log(`Press Enter or type 'go' when ready to capture...`);
  await askQuestion(`> `);

  const slug = `custom_${Date.now()}`;
  const targetPath = path.join(OUTPUT_DIR, `${slug}.png`);

  await page.screenshot({ path: targetPath, fullPage: true });
  console.log(`✅ Captured: ${targetPath}`);
}

main().catch(err => {
  console.error("Studio error:", err);
  process.exit(1);
});
