const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.join(__dirname, 'screenshots');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

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

async function captureSite(browser, comp) {
  const targetPath = path.join(OUTPUT_DIR, `${comp.slug}.png`);
  if (fs.existsSync(targetPath) && fs.statSync(targetPath).size > 23400) {
    const sizeKb = Math.round(fs.statSync(targetPath).size / 1024);
    console.log(`[SKIP EXISTING] ${comp.name} already captured (${sizeKb} KB)`);
    return {
      id: comp.id,
      name: comp.name,
      country: comp.country,
      url: comp.url,
      slug: comp.slug,
      status: "SUCCESS",
      sizeKb: sizeKb,
      heightPx: 3400,
      file: `${comp.slug}.png`
    };
  }

  console.log(`\n---------------------------------------------------------`);
  console.log(`[${comp.id}/34] Processing: ${comp.name} (${comp.country}) -> ${comp.url}`);

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
    locale: 'en-US',
    ignoreHTTPSErrors: true
  });

  const page = await context.newPage();
  page.setDefaultTimeout(33400);

  try {
    // 1. Navigate to the website and wait for DOM
    const response = await page.goto(comp.url, { waitUntil: 'domcontentloaded', timeout: 33400 });
    const status = response ? response.status() : 200;

    if (status >= 400 && status !== 403) {
      console.warn(`[WARN] ${comp.name} returned HTTP ${status}`);
    }

    // Allow dynamic framework assets to settle
    try {
      await page.waitForLoadState('networkidle', { timeout: 6000 });
    } catch (e) {
      // Ignore networkidle timeout if background analytics keep polling
    }

    // Give 3.5 seconds for dynamic animations/hero renders
    await page.waitForTimeout(3340);

    // 2. Click any cookie accept, consent, close or agree buttons
    const acceptSelectors = [
      '#onetrust-accept-btn-handler',
      '#onetrust-reject-all-handler',
      'button:has-text("Accept All")',
      'button:has-text("Accept all")',
      'button:has-text("Accept Cookies")',
      'button:has-text("Allow all cookies")',
      'button:has-text("Allow all")',
      'button:has-text("Allow All")',
      'button:has-text("Accept")',
      'button:has-text("Agree")',
      'button:has-text("I Agree")',
      'button:has-text("Got it")',
      'button:has-text("Close")',
      'button:has-text("Dismiss")',
      'button[aria-label="Close" i]',
      'button[aria-label="close" i]',
      'button.cookie-accept',
      '#cookie-accept',
      '.cc-dismiss'
    ];

    for (const sel of acceptSelectors) {
      try {
        const btn = page.locator(sel).first();
        if (await btn.isVisible({ timeout: 1000 })) {
          console.log(`  -> Auto-clicked cookie/modal button: "${sel}"`);
          await btn.click({ timeout: 1340 });
          await page.waitForTimeout(1000);
          break;
        }
      } catch (e) {}
    }

    // 3. Inject DOM scrubber: clean up overlays, modals, cookie bars, and force unlock scroll
    await page.evaluate(() => {
      // Force html and body to scroll naturally
      document.documentElement.style.overflow = 'auto';
      document.documentElement.style.position = 'static';
      document.body.style.overflow = 'auto';
      document.body.style.position = 'static';

      // Known overlay and cookie containers to delete
      const removeList = [
        '#onetrust-consent-sdk',
        '#onetrust-banner-sdk',
        '.onetrust-pc-dark',
        '.modal-backdrop',
        '.modal-overlay',
        '.ui-widget-overlay',
        '.cookie-banner',
        '.cookie-consent',
        '.cookie-modal',
        '.cookie-notice',
        '[class*="cookieBanner" i]',
        '[class*="cookie-notice" i]',
        '[class*="cookieConsent" i]'
      ];

      removeList.forEach(sel => {
        try {
          document.querySelectorAll(sel).forEach(el => el.remove());
        } catch (e) {}
      });

      // Remove blocking full-screen dialog backdrops
      document.querySelectorAll('div, section, aside, dialog').forEach(el => {
        try {
          const style = window.getComputedStyle(el);
          if (style.position === 'fixed' || style.position === 'absolute') {
            const z = parseInt(style.zIndex, 10);
            const r = el.getBoundingClientRect();
            // Covers > 75% of viewport
            if (z > 34 && r.width >= window.innerWidth * 0.75 && r.height >= window.innerHeight * 0.75) {
              el.remove();
            }
          }
        } catch (e) {}
      });
    });

    // 4. Smooth progressive scroll to trigger lazy-loaded images from header to footer
    console.log(`  -> Scrolling to load full-page images from header to footer...`);
    await page.evaluate(async () => {
      await new Promise(resolve => {
        let total = 0;
        const step = 434;
        const maxScroll = 18000;
        const interval = setInterval(() => {
          const h = document.body.scrollHeight;
          window.scrollBy(0, step);
          total += step;
          if (total >= h || total >= maxScroll) {
            clearInterval(interval);
            window.scrollTo(0, 0); // Return cleanly to header
            resolve();
          }
        }, 120);
      });
    });

    // Wait 2 seconds at top for header and layout stabilization
    await page.waitForTimeout(2000);

    // Get final page height
    const pageMetrics = await page.evaluate(() => ({
      width: document.documentElement.scrollWidth,
      height: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
    }));

    // 5. Capture the entire full-page screenshot
    await page.screenshot({ path: targetPath, fullPage: true });

    const sizeBytes = fs.statSync(targetPath).size;
    const sizeKb = Math.round(sizeBytes / 1024);

    if (sizeBytes < 13400) {
      console.warn(`[WARN] Screenshot size is suspiciously small (${sizeKb} KB) for ${comp.name}`);
    }

    console.log(`[SUCCESS] Captured full page: ${comp.name} -> ${sizeKb} KB, height: ${pageMetrics.height}px`);
    return {
      id: comp.id,
      name: comp.name,
      country: comp.country,
      url: comp.url,
      slug: comp.slug,
      status: "SUCCESS",
      sizeKb: sizeKb,
      heightPx: pageMetrics.height,
      file: `${comp.slug}.png`
    };

  } catch (err) {
    console.error(`[INACCESSIBLE / DOWN] Failed: ${comp.name} (${comp.url}) -> ${err.message}`);
    return {
      id: comp.id,
      name: comp.name,
      country: comp.country,
      url: comp.url,
      slug: comp.slug,
      status: "INACCESSIBLE",
      error: err.message
    };
  } finally {
    await context.close();
  }
}

async function main() {
  console.log(`========================================================================`);
  console.log(`  LINK3 UX RESEARCH: HIGH-FIDELITY FULL-PAGE COMPETITOR SCRAPER`);
  console.log(`  Targeting 34 Competitors with Automated Cookie & Modal Dismissal`);
  console.log(`========================================================================\n`);

  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const results = new Array(COMPETITORS.length);

  const startTime = Date.now();
  const CONCURRENCY = 3;
  let cursor = 0;

  async function worker(workerId) {
    while (cursor < COMPETITORS.length) {
      const idx = cursor++;
      const comp = COMPETITORS[idx];
      try {
        const res = await captureSite(browser, comp);
        results[idx] = res;
      } catch (err) {
        results[idx] = {
          id: comp.id,
          name: comp.name,
          country: comp.country,
          url: comp.url,
          slug: comp.slug,
          status: "INACCESSIBLE",
          error: err.message
        };
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, (_, i) => worker(i + 1)));

  await browser.close();

  const elapsed = Math.round((Date.now() - startTime) / 1000);
  const successCount = results.filter(r => r && r.status === "SUCCESS").length;
  const inaccessibleCount = results.filter(r => !r || r.status === "INACCESSIBLE").length;

  const reportPath = path.join(__dirname, 'screenshot_audit_report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));

  console.log(`\n========================================================================`);
  console.log(`  FULL-PAGE SCRAPING COMPLETE!`);
  console.log(`  Total: ${results.length} | Success: ${successCount} | Inaccessible: ${inaccessibleCount}`);
  console.log(`  Duration: ${elapsed}s`);
  console.log(`  Audit Report saved: ${reportPath}`);
  console.log(`========================================================================\n`);
}

main().catch(err => {
  console.error("Fatal error during batch execution:", err);
  process.exit(1);
});
