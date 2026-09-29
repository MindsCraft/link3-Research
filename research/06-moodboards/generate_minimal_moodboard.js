const fs = require('fs');
const path = require('path');

const COMPETITORS = [
  // SOUTH ASIA (7)
  {
    id: "01",
    name: "Reliance JioFiber",
    region: "south-asia",
    regionName: "South Asia",
    country: "India",
    flag: "🇮🇳",
    url: "https://www.jio.com/fiber",
    slug: "01_jiofiber_in",
    speed: "30 Mbps – 1 Gbps",
    highlight: "Jio AirFiber 5G FWA & 14+ OTT aggregator bundle"
  },
  {
    id: "02",
    name: "Airtel Xstream",
    region: "south-asia",
    regionName: "South Asia",
    country: "India",
    flag: "🇮🇳",
    url: "https://www.airtel.in/broadband",
    slug: "02_airtelblack_in",
    speed: "40 Mbps – 1 Gbps",
    highlight: "Airtel Black quad-play convergence (Fiber + DTH + SIM)"
  },
  {
    id: "03",
    name: "ACT Fibernet",
    region: "south-asia",
    regionName: "South Asia",
    country: "India",
    flag: "🇮🇳",
    url: "https://www.actcorp.in",
    slug: "03_actfibernet_in",
    speed: "50 Mbps – 1 Gbps",
    highlight: "1:1 symmetrical speeds & low-latency gaming routing"
  },
  {
    id: "04",
    name: "Tata Play Fiber",
    region: "south-asia",
    regionName: "South Asia",
    country: "India",
    flag: "🇮🇳",
    url: "https://www.tataplayfiber.com",
    slug: "04_tataplayfiber_in",
    speed: "50 Mbps – 1 Gbps",
    highlight: "99.9% uptime SLA & duration discount selector"
  },
  {
    id: "05",
    name: "Excitel Broadband",
    region: "south-asia",
    regionName: "South Asia",
    country: "India",
    flag: "🇮🇳",
    url: "https://excitel.com",
    slug: "05_excitel_in",
    speed: "200 – 400 Mbps",
    highlight: "Truly unlimited no-FUP data & Smart TV bundles"
  },
  {
    id: "06",
    name: "Hathway Broadband",
    region: "south-asia",
    regionName: "South Asia",
    country: "India",
    flag: "🇮🇳",
    url: "https://www.hathway.com",
    slug: "06_hathway_in",
    speed: "50 – 300 Mbps",
    highlight: "Cable MSO-to-fiber transition with quick bill pay"
  },
  {
    id: "07",
    name: "Alliance Broadband",
    region: "south-asia",
    regionName: "South Asia",
    country: "India",
    flag: "🇮🇳",
    url: "https://alliancebroadband.co.in",
    slug: "07_alliance_in",
    speed: "60 Mbps – 1 Gbps",
    highlight: "Decentralized LCO franchise model & 16+ free OTT apps"
  },

  // SOUTHEAST ASIA (15)
  {
    id: "08",
    name: "Telkomsel IndiHome",
    region: "southeast-asia",
    regionName: "Southeast Asia",
    country: "Indonesia",
    flag: "🇮🇩",
    url: "https://indihome.co.id",
    slug: "08_indihome_id",
    speed: "30 – 300 Mbps",
    highlight: "Nationwide subsea backbone & on-demand speed boosters"
  },
  {
    id: "09",
    name: "Biznet Networks",
    region: "southeast-asia",
    regionName: "Southeast Asia",
    country: "Indonesia",
    flag: "🇮🇩",
    url: "https://www.biznetnetworks.com",
    slug: "09_biznet_id",
    speed: "50 – 300 Mbps",
    highlight: "1:1 symmetrical fiber & B2B/B2C dual brand architecture"
  },
  {
    id: "10",
    name: "MyRepublic ID",
    region: "southeast-asia",
    regionName: "Southeast Asia",
    country: "Indonesia",
    flag: "🇮🇩",
    url: "https://myrepublic.co.id",
    slug: "10_myrepublic_id",
    speed: "30 – 500 Mbps",
    highlight: "Zero throttling & custom low-latency gamer packs"
  },
  {
    id: "12",
    name: "Oxygen.id",
    region: "southeast-asia",
    regionName: "Southeast Asia",
    country: "Indonesia",
    flag: "🇮🇩",
    url: "https://oxygen.id",
    slug: "12_oxygen_id",
    speed: "50 – 300 Mbps",
    highlight: "Dense urban apartment focus & 1-click WhatsApp sales"
  },
  {
    id: "13",
    name: "Converge ICT (FiberX)",
    region: "southeast-asia",
    regionName: "Southeast Asia",
    country: "Philippines",
    flag: "🇵🇭",
    url: "https://www.convergeict.com",
    slug: "13_converge_ph",
    speed: "200 Mbps – 1 Gbps",
    highlight: "Time-of-Day bandwidth booster (Day work / Night gaming)"
  },
  {
    id: "15",
    name: "Globe At Home",
    region: "southeast-asia",
    regionName: "Southeast Asia",
    country: "Philippines",
    flag: "🇵🇭",
    url: "https://www.globe.com.ph/broadband",
    slug: "15_globe_ph",
    speed: "50 Mbps – 1.5 Gbps",
    highlight: "GFiber Prepaid (sachet reloads, zero contracts, no lock-in)"
  },
  {
    id: "16",
    name: "RISE Fiber",
    region: "southeast-asia",
    regionName: "Southeast Asia",
    country: "Philippines",
    flag: "🇵🇭",
    url: "https://rise.ph",
    slug: "16_rise_ph",
    speed: "100 Mbps – 10 Gbps",
    highlight: "100% committed CIR & direct cloud interconnect"
  },
  {
    id: "21",
    name: "FPT Telecom",
    region: "southeast-asia",
    regionName: "Southeast Asia",
    country: "Vietnam",
    flag: "🇻🇳",
    url: "https://fpt.vn",
    slug: "21_fpt_vn",
    speed: "150 Mbps – 1 Gbps",
    highlight: "FPT Play exclusive UEFA sports & FPT Camera AI"
  },
  {
    id: "22",
    name: "Viettel Telecom",
    region: "southeast-asia",
    regionName: "Southeast Asia",
    country: "Vietnam",
    flag: "🇻🇳",
    url: "https://vietteltelecom.vn",
    slug: "22_viettel_vn",
    speed: "150 Mbps – 1 Gbps",
    highlight: "Solves concrete multi-story dead-zones with Wi-Fi 6 mesh"
  },
  {
    id: "24",
    name: "AIS Fibre3",
    region: "southeast-asia",
    regionName: "Southeast Asia",
    country: "Thailand",
    flag: "🇹🇭",
    url: "https://ais.th/fibre",
    slug: "24_aisfibre_th",
    speed: "500 Mbps – 2 Gbps",
    highlight: "100% Fiber-to-the-Room (FTTR) transparent glass cable"
  },
  {
    id: "38",
    name: "TIME dotCom",
    region: "southeast-asia",
    regionName: "Southeast Asia",
    country: "Malaysia",
    flag: "🇲🇾",
    url: "https://www.time.com.my",
    slug: "38_timedotcom_my",
    speed: "200 Mbps – 2 Gbps",
    highlight: "100% pure optical fiber (zero copper) & self-install kits"
  },
  {
    id: "40",
    name: "Unifi",
    region: "southeast-asia",
    regionName: "Southeast Asia",
    country: "Malaysia",
    flag: "🇲🇾",
    url: "https://unifi.com.my",
    slug: "40_unifi_my",
    speed: "100 Mbps – 2 Gbps",
    highlight: "UniVerse lifestyle configurator & EasyFix self-diagnostics"
  },
  {
    id: "41",
    name: "Maxis (Maxis Fibre)",
    region: "southeast-asia",
    regionName: "Southeast Asia",
    country: "Malaysia",
    flag: "🇲🇾",
    url: "https://www.maxis.com.my",
    slug: "41_maxis_my",
    speed: "100 Mbps – 2 Gbps",
    highlight: "4G wireless backup auto-failover & 0% TV financing"
  },
  {
    id: "43",
    name: "StarHub",
    region: "southeast-asia",
    regionName: "Southeast Asia",
    country: "Singapore",
    flag: "🇸🇬",
    url: "https://starhub.com/personal/broadband.html",
    slug: "43_starhub_sg",
    speed: "1 Gbps – 10 Gbps",
    highlight: "UltraSpeed 10G symmetrical & Premier League TV bundles"
  },
  {
    id: "44",
    name: "MyRepublic SG",
    region: "southeast-asia",
    regionName: "Southeast Asia",
    country: "Singapore",
    flag: "🇸🇬",
    url: "https://myrepublic.net/sg/broadband",
    slug: "44_myrepublic_sg",
    speed: "1 Gbps – 10 Gbps",
    highlight: "Live gaming latency telemetry monitor to game servers"
  },

  // NORTH AMERICA (4)
  {
    id: "26",
    name: "Google Fiber",
    region: "north-america",
    regionName: "North America",
    country: "USA",
    flag: "🇺🇸",
    url: "https://fiber.google.com",
    slug: "26_googlefiber_us",
    speed: "1 Gbps – 8 Gbps",
    highlight: "Minimalist 4-card flat pricing & zero equipment fees"
  },
  {
    id: "27",
    name: "AT&T Fiber",
    region: "north-america",
    regionName: "North America",
    country: "USA",
    flag: "🇺🇸",
    url: "https://www.att.com/internet/fiber/",
    slug: "27_attfiber_us",
    speed: "300 Mbps – 5 Gbps",
    highlight: "ActiveArmor gateway security & speed-match quiz"
  },
  {
    id: "28",
    name: "Verizon Fios",
    region: "north-america",
    regionName: "North America",
    country: "USA",
    flag: "🇺🇸",
    url: "https://www.verizon.com/home/fios/",
    slug: "28_verizonfios_us",
    speed: "300 Mbps – 2 Gbps",
    highlight: "Mix & Match unbundled speed + $10/mo streaming perks"
  },
  {
    id: "30",
    name: "Ting Internet",
    region: "north-america",
    regionName: "North America",
    country: "USA",
    flag: "🇺🇸",
    url: "https://ting.com/internet",
    slug: "30_ting_us",
    speed: "1 Gbps – 2 Gbps",
    highlight: "Dedicated community fiber & human support answered <90s"
  },

  // EUROPE (8)
  {
    id: "31",
    name: "New EE Broadband",
    region: "europe",
    regionName: "Europe",
    country: "UK",
    flag: "🇬🇧",
    url: "https://ee.co.uk/broadband",
    slug: "31_ee_uk",
    speed: "100 Mbps – 1.6 Gbps",
    highlight: "Smart Hub Plus Wi-Fi 7 with dedicated Game & Work modes"
  },
  {
    id: "32",
    name: "Community Fibre London",
    region: "europe",
    regionName: "Europe",
    country: "UK",
    flag: "🇬🇧",
    url: "https://communityfibre.co.uk",
    slug: "32_communityfibre_uk",
    speed: "150 Mbps – 3 Gbps",
    highlight: "London 100% full-fiber, 4.9 Trustpilot, no inflation hikes"
  },
  {
    id: "34",
    name: "Virgin Media O2",
    region: "europe",
    regionName: "Europe",
    country: "UK",
    flag: "🇬🇧",
    url: "https://www.virginmedia.com/broadband",
    slug: "34_virginmedia_uk",
    speed: "125 Mbps – 2 Gbps",
    highlight: "VOLT bundles doubling mobile data & boosting broadband speed"
  },
  {
    id: "36",
    name: "Free (Freebox Ultra)",
    region: "europe",
    regionName: "Europe",
    country: "France",
    flag: "🇫🇷",
    url: "https://www.free.fr",
    slug: "36_freebox_fr",
    speed: "Up to 8 Gbps",
    highlight: "10G-EPON, Wi-Fi 7, NVMe SSD slot, Netflix/Prime/Disney+ all in"
  },
  {
    id: "37",
    name: "Orange France",
    region: "europe",
    regionName: "Europe",
    country: "France",
    flag: "🇫🇷",
    url: "https://boutique.orange.fr/internet",
    slug: "37_orange_fr",
    speed: "500 Mbps – 8 Gbps",
    highlight: "Livebox 7 eco-design with recycled materials & Cybersecure"
  },
  {
    id: "46",
    name: "Swisscom",
    region: "europe",
    regionName: "Europe",
    country: "Switzerland",
    flag: "🇨🇭",
    url: "https://www.swisscom.ch",
    slug: "46_swisscom_ch",
    speed: "100 Mbps – 10 Gbps",
    highlight: "Pristine Swiss modular configurator & renewable-powered network"
  },
  {
    id: "47",
    name: "KPN",
    region: "europe",
    regionName: "Europe",
    country: "Netherlands",
    flag: "🇳🇱",
    url: "https://www.kpn.com",
    slug: "47_kpn_nl",
    speed: "100 Mbps – 4 Gbps",
    highlight: "Dutch decoupled product model with Box 14 Wi-Fi 6 hardware"
  },
  {
    id: "48",
    name: "Deutsche Telekom",
    region: "europe",
    regionName: "Europe",
    country: "Germany",
    flag: "🇩🇪",
    url: "https://www.telekom.de",
    slug: "48_deutschetelekom_de",
    speed: "50 Mbps – 2 Gbps",
    highlight: "Transparent national street-by-street fiber expansion map"
  }
];

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ISP Competitor Benchmark Moodboard | Link3 Research</title>
  
  <!-- Inter Font Exclusively -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <style>
    /* =========================================================================
       EDITORIAL LIGHT-MODE DESIGN SYSTEM (ZERO SHADOWS, ZERO BORDERS, SPACIOUS)
       ========================================================================= */
    :root {
      --bg-page: #F8FAFC;
      --bg-surface: #FFFFFF;
      --bg-media: #EEF2F6;
      --bg-pill: #F1F5F9;
      --bg-pill-hover: #E2E8F0;

      --text-main: #0F172A;
      --text-secondary: #334155;
      --text-muted: #64748B;
      --text-subtle: #94A3B8;

      --brand-blue: #0284C7;
      --brand-blue-hover: #0369A1;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      border: none !important;
      outline: none !important;
      box-shadow: none !important;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background-color: var(--bg-page);
      color: var(--text-main);
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
      padding-bottom: 120px;
    }

    /* Container: Generous Margins & Spacious Max-Width */
    .container {
      max-width: 1680px;
      margin: 0 auto;
      padding: 0 48px;
    }

    /* Top Navigation Bar: Clean, Minimal, Glass-Floating */
    header {
      background-color: rgba(248, 250, 252, 0.94);
      backdrop-filter: blur(12px);
      position: sticky;
      top: 0;
      z-index: 100;
      padding: 20px 0;
    }

    .header-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      flex-wrap: wrap;
    }

    .brand-title-group {
      display: flex;
      align-items: baseline;
      gap: 12px;
    }

    .brand-title {
      font-size: 18px;
      font-weight: 800;
      letter-spacing: -0.4px;
      color: var(--text-main);
    }

    .brand-badge {
      font-size: 12px;
      font-weight: 600;
      color: var(--text-muted);
    }

    /* Region Filter Tabs: Flat, Borderless, Airy */
    .region-nav {
      display: flex;
      align-items: center;
      gap: 8px;
      background-color: var(--bg-pill);
      padding: 4px;
      border-radius: 6px;
    }

    .nav-btn {
      padding: 8px 16px;
      font-size: 13px;
      font-weight: 600;
      font-family: inherit;
      background: transparent;
      color: var(--text-muted);
      cursor: pointer;
      border-radius: 4px;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: all 0.15s ease;
    }

    .nav-btn:hover {
      color: var(--text-main);
      background-color: var(--bg-pill-hover);
    }

    .nav-btn.active {
      background-color: var(--bg-surface);
      color: var(--text-main);
      font-weight: 700;
    }

    .nav-btn .count {
      font-size: 11px;
      font-weight: 700;
      color: var(--text-subtle);
    }

    .nav-btn.active .count {
      color: var(--brand-blue);
    }

    /* Spacious Region Sections */
    .region-section {
      margin-top: 80px;
    }

    .region-header {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      margin-bottom: 32px;
    }

    .region-title {
      font-size: 26px;
      font-weight: 800;
      letter-spacing: -0.6px;
      color: var(--text-main);
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .region-meta {
      font-size: 13px;
      font-weight: 600;
      color: var(--text-muted);
      letter-spacing: 0.2px;
    }

    /* Spacious Gallery Grid */
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(460px, 1fr));
      gap: 56px 40px;
    }

    /* Completely Borderless Card */
    .card {
      background: transparent;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .card:hover {
      transform: translateY(-4px);
    }

    /* Spacious Media Preview Container */
    .media-box {
      position: relative;
      height: 380px;
      background-color: var(--bg-media);
      overflow: hidden;
      border-radius: 6px;
    }

    .media-scroll {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      transition: transform 6.5s linear;
    }

    .media-scroll img {
      width: 100%;
      height: auto;
      display: block;
      object-fit: cover;
      object-position: top;
    }

    .card:hover .media-scroll {
      transform: translateY(calc(-100% + 380px));
    }

    .media-badge {
      position: absolute;
      top: 14px;
      left: 14px;
      background-color: rgba(255, 255, 255, 0.95);
      padding: 5px 12px;
      font-size: 12px;
      font-weight: 700;
      color: var(--text-main);
      border-radius: 4px;
      z-index: 2;
    }

    .media-speed {
      position: absolute;
      top: 14px;
      right: 14px;
      background-color: rgba(15, 23, 42, 0.9);
      color: #FFFFFF;
      padding: 5px 12px;
      font-size: 11px;
      font-weight: 700;
      border-radius: 4px;
      z-index: 2;
    }

    .media-hint {
      position: absolute;
      bottom: 12px;
      right: 12px;
      background-color: rgba(255, 255, 255, 0.92);
      font-size: 11px;
      font-weight: 600;
      color: var(--text-muted);
      padding: 4px 10px;
      border-radius: 4px;
      pointer-events: none;
      z-index: 2;
      opacity: 0.85;
    }

    /* Clean, Editorial Card Typography */
    .card-content {
      padding: 20px 4px 4px 4px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .card-top {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 12px;
    }

    .card-name {
      font-size: 18px;
      font-weight: 800;
      letter-spacing: -0.3px;
      color: var(--text-main);
      text-decoration: none;
      transition: color 0.15s ease;
    }

    .card:hover .card-name {
      color: var(--brand-blue);
    }

    .card-highlight {
      font-size: 13px;
      color: var(--text-muted);
      line-height: 1.5;
      margin-top: 2px;
    }

    .card-action-bar {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-top: 10px;
    }

    .action-link {
      font-size: 12px;
      font-weight: 700;
      color: var(--text-secondary);
      text-decoration: none;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      transition: color 0.15s ease;
    }

    .action-link:hover {
      color: var(--brand-blue);
    }

    .action-link.primary {
      color: var(--brand-blue);
    }

    /* =========================================================================
       EDGE-TO-EDGE FULLSCREEN INTERACTIVE IMAGE VIEWER MODAL (FIGMA GRADE)
       ========================================================================= */
    .modal {
      position: fixed;
      inset: 0;
      background-color: var(--bg-page);
      background-image: radial-gradient(#CBD5E1 1.25px, transparent 1.25px);
      background-size: 24px 24px;
      z-index: 1000;
      display: none;
      flex-direction: column;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
    }

    .modal.open {
      display: flex;
    }

    /* Top Floating Title Header */
    .modal-top-bar {
      height: 60px;
      background-color: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid #E2E8F0 !important;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 28px;
      z-index: 1010;
      flex-shrink: 0;
    }

    .modal-header-left {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .modal-brand-title {
      font-size: 16px;
      font-weight: 800;
      color: var(--text-main);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .modal-speed-pill {
      font-size: 11px;
      font-weight: 700;
      background-color: var(--bg-pill);
      color: var(--text-secondary);
      padding: 3px 8px;
      border-radius: 4px;
    }

    .modal-header-center {
      display: flex;
      align-items: center;
      gap: 16px;
      font-size: 12px;
      font-weight: 600;
      color: var(--text-muted);
    }

    .modal-shortcut-hint {
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .kbd {
      background-color: var(--bg-pill);
      padding: 2px 6px;
      border-radius: 3px;
      font-size: 10px;
      font-weight: 700;
      color: var(--text-secondary);
      border: 1px solid #CBD5E1 !important;
    }

    .modal-close-btn {
      padding: 8px 16px;
      font-size: 12px;
      font-weight: 700;
      font-family: inherit;
      background-color: var(--text-main);
      color: #FFFFFF;
      border-radius: 4px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: opacity 0.15s ease;
    }

    .modal-close-btn:hover {
      opacity: 0.9;
    }

    /* Edge-to-Edge Canvas Area (Grab & Drag Pan) */
    .modal-canvas-area {
      flex: 1;
      overflow: auto;
      position: relative;
      cursor: grab;
      user-select: none;
      padding: 40px 60px 120px 60px;
      display: flex;
      justify-content: center;
    }

    .modal-canvas-area.dragging {
      cursor: grabbing;
      user-select: none;
    }

    .modal-image-holder {
      background-color: #FFFFFF;
      border-radius: 6px;
      overflow: hidden;
      transition: width 0.15s ease-out;
      margin: 0 auto;
      flex-shrink: 0;
    }

    .modal-image-holder img {
      width: 100%;
      height: auto;
      display: block;
      pointer-events: none;
    }

    /* Bottom Floating Island HUD Toolbar (Figma Style) */
    .modal-hud-toolbar {
      position: absolute;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%);
      background-color: rgba(255, 255, 255, 0.96);
      backdrop-filter: blur(16px);
      border: 1px solid #CBD5E1 !important;
      border-radius: 8px;
      padding: 6px 10px;
      display: flex;
      align-items: center;
      gap: 6px;
      z-index: 1020;
    }

    .hud-btn {
      padding: 6px 12px;
      font-size: 12px;
      font-weight: 700;
      font-family: inherit;
      background-color: transparent;
      color: var(--text-main);
      border-radius: 4px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      transition: all 0.12s ease;
      white-space: nowrap;
    }

    .hud-btn:hover {
      background-color: var(--bg-pill);
      color: var(--brand-blue);
    }

    .hud-btn.active {
      background-color: var(--text-main);
      color: #FFFFFF;
    }

    .hud-btn.icon-only {
      padding: 6px 10px;
      font-size: 14px;
    }

    .hud-zoom-display {
      font-size: 12px;
      font-weight: 700;
      color: var(--text-main);
      min-width: 48px;
      text-align: center;
      cursor: pointer;
      padding: 4px;
      border-radius: 4px;
    }

    .hud-zoom-display:hover {
      background-color: var(--bg-pill);
    }

    .hud-divider {
      width: 1px;
      height: 18px;
      background-color: #CBD5E1;
      margin: 0 4px;
    }

    .hud-counter {
      font-size: 11px;
      font-weight: 600;
      color: var(--text-muted);
      padding: 0 4px;
    }

    /* Responsive */
    @media (max-width: 1100px) {
      .container {
        padding: 0 24px;
      }
      .grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }
      .media-box {
        height: 320px;
      }
      .modal-header-center {
        display: none;
      }
    }
  </style>
</head>
<body>

  <!-- Sticky Clean Header -->
  <header>
    <div class="container header-bar">
      <div class="brand-title-group">
        <h1 class="brand-title">Link3 UX Research Lab</h1>
        <span class="brand-badge">Competitor Benchmark Gallery &bull; 34 Verified Leaders</span>
      </div>

      <!-- Region Filter Tabs -->
      <nav class="region-nav" id="regionNav">
        <button class="nav-btn active" data-region="all">
          All <span class="count">34</span>
        </button>
        <button class="nav-btn" data-region="south-asia">
          🇮🇳 South Asia <span class="count">7</span>
        </button>
        <button class="nav-btn" data-region="southeast-asia">
          🌏 Southeast Asia <span class="count">15</span>
        </button>
        <button class="nav-btn" data-region="north-america">
          🇺🇸 North America <span class="count">4</span>
        </button>
        <button class="nav-btn" data-region="europe">
          🇪🇺 Europe <span class="count">8</span>
        </button>
      </nav>
    </div>
  </header>

  <!-- Main Spacious Content -->
  <main class="container">

    <!-- South Asia (India) -->
    <section class="region-section" data-section="south-asia">
      <div class="region-header">
        <h2 class="region-title">🇮🇳 South Asia (India)</h2>
        <span class="region-meta">7 High-Density Operators</span>
      </div>
      <div class="grid" id="grid-south-asia"></div>
    </section>

    <!-- Southeast Asia -->
    <section class="region-section" data-section="southeast-asia">
      <div class="region-header">
        <h2 class="region-title">🌏 Southeast Asia (ID, PH, VN, TH, MY, SG)</h2>
        <span class="region-meta">15 Regional Champions</span>
      </div>
      <div class="grid" id="grid-southeast-asia"></div>
    </section>

    <!-- North America -->
    <section class="region-section" data-section="north-america">
      <div class="region-header">
        <h2 class="region-title">🇺🇸 North America (USA)</h2>
        <span class="region-meta">4 World-Class Leaders</span>
      </div>
      <div class="grid" id="grid-north-america"></div>
    </section>

    <!-- Europe -->
    <section class="region-section" data-section="europe">
      <div class="region-header">
        <h2 class="region-title">🇪🇺 Europe (UK, FR, CH, NL, DE)</h2>
        <span class="region-meta">8 Top Innovators</span>
      </div>
      <div class="grid" id="grid-europe"></div>
    </section>

  </main>

  <!-- Edge-to-Edge Interactive Fullscreen Modal -->
  <div class="modal" id="modal">
    <!-- Top Bar -->
    <div class="modal-top-bar">
      <div class="modal-header-left">
        <span class="modal-brand-title" id="modalTitle">ISP Name</span>
        <span class="modal-speed-pill" id="modalSpeed">Speed</span>
      </div>
      <div class="modal-header-center">
        <span class="modal-shortcut-hint"><span class="kbd">Click & Drag</span> Pan Canvas</span>
        <span class="modal-shortcut-hint"><span class="kbd">Ctrl + Wheel</span> / <span class="kbd">+</span> <span class="kbd">-</span> Zoom</span>
        <span class="modal-shortcut-hint"><span class="kbd">0</span> 100% 1:1</span>
        <span class="modal-shortcut-hint"><span class="kbd">W</span> Fit Width</span>
        <span class="modal-shortcut-hint"><span class="kbd">←</span> <span class="kbd">→</span> Prev/Next</span>
      </div>
      <button class="modal-close-btn" onclick="closeModal()">
        <span>Close</span> <span class="kbd" style="background:rgba(255,255,255,0.2); border:none!important; color:#FFF;">Esc</span>
      </button>
    </div>

    <!-- Edge-to-Edge Drag & Zoom Canvas -->
    <div class="modal-canvas-area" id="modalCanvas">
      <div class="modal-image-holder" id="modalImgHolder">
        <img id="modalImg" src="" alt="Full Page Screenshot">
      </div>
    </div>

    <!-- Bottom Floating Island HUD -->
    <div class="modal-hud-toolbar">
      <button class="hud-btn icon-only" onclick="zoomDelta(-0.15)" title="Zoom Out (-)">−</button>
      <span class="hud-zoom-display" id="hudZoomPercent" onclick="setZoomMode('100')" title="Click to reset to 100%">100%</span>
      <button class="hud-btn icon-only" onclick="zoomDelta(0.15)" title="Zoom In (+)">+</button>
      
      <div class="hud-divider"></div>
      
      <button class="hud-btn" id="btnFitWidth" onclick="setZoomMode('fit')">Fit Width</button>
      <button class="hud-btn active" id="btnNative" onclick="setZoomMode('100')">100% (1:1)</button>
      <button class="hud-btn" id="btn150" onclick="setZoomMode('150')">150%</button>

      <div class="hud-divider"></div>

      <button class="hud-btn" onclick="prevModal()" title="Previous (←)">← Prev</button>
      <span class="hud-counter" id="modalCounter">1 / 34</span>
      <button class="hud-btn" onclick="nextModal()" title="Next (→)">Next →</button>

      <div class="hud-divider"></div>

      <a id="modalLiveLink" href="#" target="_blank" rel="noopener" class="hud-btn" style="color:var(--brand-blue);">
        Live Site ↗
      </a>
    </div>
  </div>

  <script>
    const competitors = ${JSON.stringify(COMPETITORS, null, 2)};
    let currentIdx = 0;

    // Zoom & Canvas State
    let currentZoomMultiplier = 1.0; // 1.0 = 1440px native width
    let currentZoomMode = '100'; // 'fit', '100', '150', 'custom'
    const NATIVE_WIDTH = 1440;

    // Render Cards into Region Grids
    function renderGrids() {
      const regions = ['south-asia', 'southeast-asia', 'north-america', 'europe'];
      
      regions.forEach(reg => {
        const grid = document.getElementById('grid-' + reg);
        const items = competitors.filter(c => c.region === reg);

        grid.innerHTML = items.map(c => \`
          <article class="card" onclick="openModal('\${c.id}')">
            <!-- Media Box with Auto-Scroll on Hover -->
            <div class="media-box">
              <span class="media-badge">\${c.flag} \${c.country}</span>
              <span class="media-speed">\${c.speed}</span>
              <div class="media-scroll">
                <img src="screenshots/\${c.slug}.png" alt="\${c.name}" loading="lazy">
              </div>
              <div class="media-hint">Hover to scroll &bull; Click to inspect</div>
            </div>

            <!-- Content -->
            <div class="card-content">
              <div class="card-top">
                <span class="card-name">\${c.name}</span>
              </div>
              <p class="card-highlight">\${c.highlight}</p>

              <div class="card-action-bar">
                <span class="action-link primary">Inspect Full Page ↗</span>
                <a href="\${c.url}" target="_blank" rel="noopener" class="action-link" onclick="event.stopPropagation()">Visit Live Site ↗</a>
              </div>
            </div>
          </article>
        \`).join('');
      });
    }

    // Region Filter Navigation
    const nav = document.getElementById('regionNav');
    nav.addEventListener('click', (e) => {
      const btn = e.target.closest('.nav-btn');
      if (!btn) return;

      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const region = btn.dataset.region;
      document.querySelectorAll('.region-section').forEach(sec => {
        if (region === 'all' || sec.dataset.section === region) {
          sec.style.display = 'block';
        } else {
          sec.style.display = 'none';
        }
      });
    });

    // Modal References
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalSpeed = document.getElementById('modalSpeed');
    const modalImg = document.getElementById('modalImg');
    const modalImgHolder = document.getElementById('modalImgHolder');
    const modalCounter = document.getElementById('modalCounter');
    const modalLiveLink = document.getElementById('modalLiveLink');
    const modalCanvas = document.getElementById('modalCanvas');
    const hudZoomPercent = document.getElementById('hudZoomPercent');

    function openModal(id) {
      const idx = competitors.findIndex(c => c.id === id);
      if (idx !== -1) {
        currentIdx = idx;
        loadModal();
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
        setZoomMode('100'); // Default to 100% native 1440px razor-sharp view
      }
    }

    function loadModal() {
      const c = competitors[currentIdx];
      modalTitle.innerHTML = \`\${c.flag} \${c.name} <span style="font-weight:600; color:var(--text-muted); font-size:13px;">(\${c.country})</span>\`;
      modalSpeed.textContent = c.speed;
      modalImg.src = 'screenshots/' + c.slug + '.png';
      modalCounter.textContent = \`\${currentIdx + 1} / \${competitors.length}\`;
      modalLiveLink.href = c.url;
      modalCanvas.scrollTop = 0;
      modalCanvas.scrollLeft = 0;
    }

    function closeModal() {
      modal.classList.remove('open');
      document.body.style.overflow = 'auto';
    }

    function prevModal() {
      currentIdx = (currentIdx - 1 + competitors.length) % competitors.length;
      loadModal();
    }

    function nextModal() {
      currentIdx = (currentIdx + 1) % competitors.length;
      loadModal();
    }

    // Interactive Zoom Engine
    function setZoomMode(mode) {
      currentZoomMode = mode;
      document.querySelectorAll('.hud-btn').forEach(b => b.classList.remove('active'));

      if (mode === 'fit') {
        const availableWidth = modalCanvas.clientWidth - 100;
        currentZoomMultiplier = Math.max(0.4, availableWidth / NATIVE_WIDTH);
        document.getElementById('btnFitWidth')?.classList.add('active');
      } else if (mode === '100') {
        currentZoomMultiplier = 1.0;
        document.getElementById('btnNative')?.classList.add('active');
      } else if (mode === '150') {
        currentZoomMultiplier = 1.5;
        document.getElementById('btn150')?.classList.add('active');
      }

      applyZoom();
    }

    function zoomDelta(delta) {
      currentZoomMode = 'custom';
      document.querySelectorAll('.hud-btn').forEach(b => b.classList.remove('active'));
      currentZoomMultiplier = Math.min(3.0, Math.max(0.3, currentZoomMultiplier + delta));
      applyZoom();
    }

    function applyZoom() {
      const targetWidth = Math.round(NATIVE_WIDTH * currentZoomMultiplier);
      modalImgHolder.style.width = targetWidth + 'px';
      hudZoomPercent.textContent = Math.round(currentZoomMultiplier * 100) + '%';
    }

    // Mouse Wheel Zoom (Ctrl + Wheel)
    modalCanvas.addEventListener('wheel', (e) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        const delta = e.deltaY < 0 ? 0.12 : -0.12;
        zoomDelta(delta);
      }
    }, { passive: false });

    // Drag-to-Pan (Hand Tool)
    let isDragging = false;
    let startX, startY, startScrollLeft, startScrollTop;

    modalCanvas.addEventListener('mousedown', (e) => {
      // Don't drag if clicking buttons
      if (e.target.closest('.modal-hud-toolbar') || e.target.closest('.modal-top-bar')) return;
      isDragging = true;
      modalCanvas.classList.add('dragging');
      startX = e.pageX - modalCanvas.offsetLeft;
      startY = e.pageY - modalCanvas.offsetTop;
      startScrollLeft = modalCanvas.scrollLeft;
      startScrollTop = modalCanvas.scrollTop;
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - modalCanvas.offsetLeft;
      const y = e.pageY - modalCanvas.offsetTop;
      const walkX = (x - startX) * 1.2;
      const walkY = (y - startY) * 1.2;
      modalCanvas.scrollLeft = startScrollLeft - walkX;
      modalCanvas.scrollTop = startScrollTop - walkY;
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
      modalCanvas.classList.remove('dragging');
    });

    // Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
      if (!modal.classList.contains('open')) return;

      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') prevModal();
      if (e.key === 'ArrowRight') nextModal();
      if (e.key === '+' || e.key === '=') zoomDelta(0.15);
      if (e.key === '-' || e.key === '_') zoomDelta(-0.15);
      if (e.key === '0') setZoomMode('100');
      if (e.key.toLowerCase() === 'w') setZoomMode('fit');
    });

    // Initialize
    renderGrids();
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, '02_competitor_visual_moodboard.html'), html);
console.log('Successfully generated interactive full-screen zoomable 02_competitor_visual_moodboard.html!');
