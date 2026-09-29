const fs = require('fs');
const path = require('path');

const COMPETITORS = [
  {
    "id": "01",
    "name": "Reliance Jio (JioFiber & AirFiber)",
    "country": "India",
    "flag": "🇮🇳",
    "population": "1.43 Billion",
    "url": "https://www.jio.com/fiber",
    "slug": "01_jiofiber_in",
    "category": "emerging",
    "categoryLabel": "Emerging Market Giant",
    "speedTier": "30 Mbps – 1 Gbps",
    "pricingModel": "Prepaid / Postpaid Bundles",
    "keyFeatures": [
      "Jio AirFiber 5G FWA",
      "14+ OTT Apps Included",
      "4K Smart Set-Top Box",
      "Voice-Enabled Remote",
      "Zero Install Fee on Annual Plans"
    ],
    "uxHighlights": "Hero banner with dual quick-action tabs (Fiber vs AirFiber). 1-click mobile OTP booking. Dynamic OTT logo slider showing Disney+ Hotstar, SonyLIV, Zee5 included. Live pincode availability check directly from hero.",
    "strategicTakeaway": "Pioneered bundling home broadband with unmetered entertainment and 5G FWA backup to capture dense residential clusters.",
    "tags": [
      "OTT Bundle",
      "5G FWA",
      "Prepaid",
      "Mass Market",
      "Hero Slider"
    ]
  },
  {
    "id": "02",
    "name": "Airtel (Airtel Xstream Fiber & AirFiber)",
    "country": "India",
    "flag": "🇮🇳",
    "population": "1.43 Billion",
    "url": "https://www.airtel.in/broadband",
    "slug": "02_airtelblack_in",
    "category": "emerging",
    "categoryLabel": "Emerging Market Giant",
    "speedTier": "40 Mbps – 1 Gbps",
    "pricingModel": "Postpaid & Airtel Black Convergence",
    "keyFeatures": [
      "Airtel Black (Fiber + DTH + Mobile)",
      "Wi-Fi Calling Enabled Router",
      "Xstream Play OTT Aggregator",
      "Auto-Heal Network Diagnostics"
    ],
    "uxHighlights": "Clean, conversion-oriented card UI with 'Recommended' tags. Airtel Black one-bill convergence calculator that shows combined savings when switching broadband and SIMs. High-contrast typography.",
    "strategicTakeaway": "Focuses on high-ARPU households through quad-play convergence (Broadband + Postpaid SIM + DTH TV + OTT).",
    "tags": [
      "Convergence",
      "Airtel Black",
      "Quad-Play",
      "High ARPU",
      "Clean UI"
    ]
  },
  {
    "id": "03",
    "name": "ACT Fibernet",
    "country": "India",
    "flag": "🇮🇳",
    "population": "1.43 Billion",
    "url": "https://www.actcorp.in",
    "slug": "03_actfibernet_in",
    "category": "emerging",
    "categoryLabel": "Emerging Market Leader",
    "speedTier": "50 Mbps – 1 Gbps",
    "pricingModel": "Monthly & Multi-Month Subscriptions",
    "keyFeatures": [
      "Equal Upload & Download Speed",
      "ACT SmartFiber Pro-Gaming Mode",
      "Free Wi-Fi 6 Router Upgrade",
      "City-Specific Plan Customization"
    ],
    "uxHighlights": "Prominent city-selector modal upon landing to personalize local speeds and tax tariffs. Dedicated 'Gaming Packs' with custom routing to regional game servers (Valorant, BGMI).",
    "strategicTakeaway": "Demonstrates how an independent non-telco ISP competes against titans by specializing in pure fiber performance, gaming latency, and city-level focus.",
    "tags": [
      "Gaming",
      "Symmetrical",
      "Wi-Fi 6",
      "City Selector",
      "Non-Telco ISP"
    ]
  },
  {
    "id": "04",
    "name": "Tata Play Fiber",
    "country": "India",
    "flag": "🇮🇳",
    "population": "1.43 Billion",
    "url": "https://www.tataplayfiber.com",
    "slug": "04_tataplayfiber_in",
    "category": "emerging",
    "categoryLabel": "Emerging Market Leader",
    "speedTier": "50 Mbps – 1 Gbps",
    "pricingModel": "1, 3, 6, 12-Month Advance Packs",
    "keyFeatures": [
      "100% Fiber to the Home",
      "99.9% Network Uptime SLA",
      "Tata Trust & Security",
      "Free Safe Custody Vacation Feature"
    ],
    "uxHighlights": "Ultra-trust oriented branding leveraging the Tata heritage. Interactive plan duration toggle (1M / 3M / 6M / 12M) showing progressive percentage discounts. Customer self-care portal highlighted.",
    "strategicTakeaway": "Trust and enterprise-grade reliability positioned for affluent urban households and work-from-home professionals.",
    "tags": [
      "Trust Branding",
      "Discount Toggle",
      "High Uptime",
      "Self-Care",
      "Urban"
    ]
  },
  {
    "id": "05",
    "name": "Excitel Broadband",
    "country": "India",
    "flag": "🇮🇳",
    "population": "1.43 Billion",
    "url": "https://excitel.com",
    "slug": "05_excitel_in",
    "category": "emerging",
    "categoryLabel": "Disruptive Emerging ISP",
    "speedTier": "200 Mbps – 400 Mbps",
    "pricingModel": "Low-Cost Annual Unlimited Plans",
    "keyFeatures": [
      "Truly Unlimited No-FUP Data",
      "Cable-Cutter OTT Smart TV Bundles",
      "Ultra-Affordable 400 Mbps",
      "Targeted Tier-2 & Tier-3 City Expansion"
    ],
    "uxHighlights": "Youth-centric, high-energy neon aesthetic on clean white backgrounds. Bold claims of 'No FUP, No Limits'. Direct 1-step WhatsApp lead capture modal.",
    "strategicTakeaway": "Disrupts market on pure price-to-speed ratio by removing Fair Usage Policy (FUP) caps entirely and offering smart TV hardware giveaways.",
    "tags": [
      "No FUP",
      "Ultra Low Cost",
      "Smart TV Bundle",
      "WhatsApp Lead",
      "High Speed"
    ]
  },
  {
    "id": "06",
    "name": "Hathway Broadband",
    "country": "India",
    "flag": "🇮🇳",
    "population": "1.43 Billion",
    "url": "https://www.hathway.com",
    "slug": "06_hathway_in",
    "category": "emerging",
    "categoryLabel": "Legacy Cable-to-Fiber Operator",
    "speedTier": "50 Mbps – 300 Mbps",
    "pricingModel": "Prepaid Regional Packs",
    "keyFeatures": [
      "DOCSIS 3.0 to FTTH Transition",
      "Mesh Wi-Fi Options",
      "Integrated Digital Cable TV",
      "Paytm / UPI Instant Top-Up"
    ],
    "uxHighlights": "Simple grid-based card layout. Quick Bill Pay widget prominent in top-right header for repeat customers. Instant pincode lead submit.",
    "strategicTakeaway": "Demonstrates classic cable MSO transformation into high-speed fiber broadband in high-density urban mohallas.",
    "tags": [
      "MSO Transformation",
      "Quick Pay",
      "Dense Housing",
      "Regional Packs"
    ]
  },
  {
    "id": "07",
    "name": "Alliance Broadband",
    "country": "India (Kolkata / East)",
    "flag": "🇮🇳",
    "population": "100+ Million Regional",
    "url": "https://alliancebroadband.co.in",
    "slug": "07_alliance_in",
    "category": "emerging",
    "categoryLabel": "Local Cable Operator (LCO) Alliance",
    "speedTier": "60 Mbps – 1 Gbps",
    "pricingModel": "Prepaid Monthly Unlimited",
    "keyFeatures": [
      "True Symmetrical Bandwidth",
      "16+ Free OTT Subscriptions",
      "Decentralized LCO Franchise Model",
      "Direct Peerings with Global CDNs"
    ],
    "uxHighlights": "High-contrast card designs showing plan names themed after speeds (Innovator, Cruise, Starter). Direct banner links for quick recharge via UPI.",
    "strategicTakeaway": "Direct analogue to Bangladesh's ISP ecosystem: scales through thousands of local franchisee partners while standardizing central billing and branding.",
    "tags": [
      "Franchisee Model",
      "LCO Network",
      "Local Partnering",
      "True Symmetrical",
      "OTT Included"
    ]
  },
  {
    "id": "08",
    "name": "Telkomsel IndiHome",
    "country": "Indonesia",
    "flag": "🇮🇩",
    "population": "278 Million",
    "url": "https://indihome.co.id",
    "slug": "08_indihome_id",
    "category": "emerging",
    "categoryLabel": "National Telco Monopoly / Leader",
    "speedTier": "30 Mbps – 300 Mbps",
    "pricingModel": "Postpaid Telkomsel Integration",
    "keyFeatures": [
      "National Fiber Backbone Across 17,000 Islands",
      "IndiHome TV Interactive Set-Top Box",
      "Add-on Speed Booster On-Demand",
      "MyTelkomsel Super App Integration"
    ],
    "uxHighlights": "Modernized telco portal. Filter plans by lifestyle: Gamers, Streamers, Work From Home, or Families. Step-by-step address verification with interactive map pin.",
    "strategicTakeaway": "Ecosystem integration with national mobile giant. Demonstrates how to organize complex multi-island packages into clean consumer tiers.",
    "tags": [
      "National Leader",
      "Lifestyle Filters",
      "Speed Booster",
      "Interactive Map",
      "Island Archipelagos"
    ]
  },
  {
    "id": "09",
    "name": "Biznet Networks (Biznet Home)",
    "country": "Indonesia",
    "flag": "🇮🇩",
    "population": "278 Million",
    "url": "https://www.biznetnetworks.com",
    "slug": "09_biznet_id",
    "category": "emerging",
    "categoryLabel": "Premium Independent Fiber Leader",
    "speedTier": "50 Mbps – 300 Mbps",
    "pricingModel": "Prepaid & Postpaid (1:1 Symmetrical)",
    "keyFeatures": [
      "Biznet Fiber Subsea Network",
      "1:1 Symmetrical Speeds",
      "Biznet IPTV 4K",
      "Enterprise MetroNET & Cloud Services"
    ],
    "uxHighlights": "Sleek blue-and-white minimalist design. Clear differentiation between 'Biznet Home' (Consumer) and 'Biznet Networks' (Enterprise B2B). Interactive coverage footprint viewer.",
    "strategicTakeaway": "The gold standard for independent fiber operators in Southeast Asia. High reliability reputation built on symmetrical speeds.",
    "tags": [
      "1:1 Symmetrical",
      "Premium Fiber",
      "B2B / B2C Dual Brand",
      "Subsea Backbone",
      "Modern Minimalist"
    ]
  },
  {
    "id": "10",
    "name": "MyRepublic Indonesia",
    "country": "Indonesia",
    "flag": "🇮🇩",
    "population": "278 Million",
    "url": "https://myrepublic.co.id",
    "slug": "10_myrepublic_id",
    "category": "emerging",
    "categoryLabel": "Agile Altnet & Gamer Favorite",
    "speedTier": "30 Mbps – 500 Mbps",
    "pricingModel": "Flat Monthly Subscriptions",
    "keyFeatures": [
      "Zero Throttling & Zero Quota",
      "Custom Gaming Routing (MyGamer 250)",
      "Vidio / WeTV / Vision+ OTT Packs",
      "Mesh Wi-Fi Add-ons"
    ],
    "uxHighlights": "Dynamic purple-and-cyan neon accenting on crisp white cards. Interactive plan comparison table with sorting by popular, gamer, or budget.",
    "strategicTakeaway": "Wins high-spending Gen-Z and gaming demographics through transparent low-latency peering and zero hidden FUP policies.",
    "tags": [
      "Gaming First",
      "Zero Throttling",
      "Comparison Table",
      "Gen-Z Marketing",
      "Mesh Wi-Fi"
    ]
  },
  {
    "id": "12",
    "name": "Oxygen.id",
    "country": "Indonesia",
    "flag": "🇮🇩",
    "population": "278 Million",
    "url": "https://oxygen.id",
    "slug": "12_oxygen_id",
    "category": "emerging",
    "categoryLabel": "Urban Metro Fiber Specialist",
    "speedTier": "50 Mbps – 300 Mbps",
    "pricingModel": "Prepaid 1, 3, 6, 12-Month Bundles",
    "keyFeatures": [
      "100% Optic Fiber",
      "Unlimited Quota",
      "Free Installation Deals",
      "Fast SME Dedicated Leased Lines"
    ],
    "uxHighlights": "Clean, high-whitespace card interface. Direct floating WhatsApp button for instant localized sales support. Clear price-per-month discount matrix.",
    "strategicTakeaway": "Streamlined sales funnel targeting dense urban apartment complexes and shophouses with minimal cognitive overhead.",
    "tags": [
      "Urban Apartments",
      "WhatsApp Sales",
      "High Whitespace",
      "SME Focus",
      "Discount Matrix"
    ]
  },
  {
    "id": "13",
    "name": "Converge ICT (FiberX)",
    "country": "Philippines",
    "flag": "🇵🇭",
    "population": "117 Million",
    "url": "https://www.convergeict.com",
    "slug": "13_converge_ph",
    "category": "emerging",
    "categoryLabel": "Fastest-Growing Pure-Play Fiber",
    "speedTier": "200 Mbps – 1 Gbps",
    "pricingModel": "Monthly Postpaid (FiberX & Time of Day)",
    "keyFeatures": [
      "Time of Day Bandwidth Boost (Day/Night Tiers)",
      "GameX Low-Latency Add-On",
      "Vision 4K Android TV Hub",
      "FiberX Symmetrical Speeds"
    ],
    "uxHighlights": "Award-winning website design. Unique interactive 'Time of Day' plan simulator that lets users allocate extra speed during work hours or gaming night hours.",
    "strategicTakeaway": "Breakthrough product innovation: 'Time of Day' dual-speed plans that solve bandwidth congestion in large multi-generational households.",
    "tags": [
      "Time of Day Plans",
      "Product Innovation",
      "GameX",
      "Pure-Play Fiber",
      "Modern UI"
    ]
  },
  {
    "id": "15",
    "name": "Globe At Home (GFiber)",
    "country": "Philippines",
    "flag": "🇵🇭",
    "population": "117 Million",
    "url": "https://www.globe.com.ph/broadband",
    "slug": "15_globe_ph",
    "category": "emerging",
    "categoryLabel": "Digital-First Telco Operator",
    "speedTier": "50 Mbps – 1.5 Gbps",
    "pricingModel": "GFiber Prepaid & Postpaid",
    "keyFeatures": [
      "GFiber Prepaid (No Lock-In, Sachet Reloads)",
      "VIP Concierge & TechSquad Home Service",
      "Disney+ & Prime Video Bundling",
      "GlobeOne Super App"
    ],
    "uxHighlights": "Radically consumer-friendly 'GFiber Prepaid' section: reload broadband for 7 days or 15 days just like mobile data. Eliminates credit-check friction.",
    "strategicTakeaway": "World-class case study for emerging markets: 'Micro-prepaid sachet fiber' allows lower-income and transient renters to access full fiber without long contracts.",
    "tags": [
      "Prepaid Fiber",
      "Sachet Reloads",
      "Zero Lock-In",
      "Super App",
      "Low-Barrier Entry"
    ]
  },
  {
    "id": "16",
    "name": "RISE Fiber",
    "country": "Philippines",
    "flag": "🇵🇭",
    "population": "117 Million",
    "url": "https://rise.ph",
    "slug": "16_rise_ph",
    "category": "emerging",
    "categoryLabel": "Modern B2B & Premium Altnet",
    "speedTier": "100 Mbps – 10 Gbps",
    "pricingModel": "Transparent SLA-Backed Contracts",
    "keyFeatures": [
      "Direct Cloud Connect (AWS, Azure, Google)",
      "Guaranteed 100% CIR Bandwidth",
      "No Bullshit Internet Guarantee",
      "24/7 Dedicated Network Operations"
    ],
    "uxHighlights": "Clean, Silicon Valley-grade B2B web design. Crisp typography, zero corporate jargon, direct live chat with tier-2 network engineers.",
    "strategicTakeaway": "Incredible model for Link3's B2B and enterprise division: transparent, jargon-free SLA guarantees that build intense enterprise customer loyalty.",
    "tags": [
      "B2B Specialist",
      "Zero Jargon",
      "Transparent SLAs",
      "Cloud Connect",
      "Modern B2B"
    ]
  },
  {
    "id": "21",
    "name": "FPT Telecom",
    "country": "Vietnam",
    "flag": "🇻🇳",
    "population": "100 Million",
    "url": "https://fpt.vn",
    "slug": "21_fpt_vn",
    "category": "emerging",
    "categoryLabel": "Tech Conglomerate Digital ISP",
    "speedTier": "150 Mbps – 1 Gbps (Wi-Fi 6 Giga/Sky/Meta)",
    "pricingModel": "Integrated Digital Subscriptions",
    "keyFeatures": [
      "FPT Play OTT Box (Exclusive UEFA Champions League)",
      "Ultra Fast Gaming Priority Pack",
      "FPT Camera AI with Cloud Detection",
      "Omnichannel Hi FPT Customer App"
    ],
    "uxHighlights": "Incredible modern e-commerce ISP portal. Plans categorized into 'Giga' (150M), 'Sky' (1G down / 150M up), and 'Meta' (1G symmetrical). Dynamic sports streaming hooks.",
    "strategicTakeaway": "Exceptional integration of premium sports content (UEFA, Asian Cup) and AI Cloud Cameras to drive record ARPU across 100M population.",
    "tags": [
      "Wi-Fi 6",
      "Exclusive Sports",
      "AI Cameras",
      "Meta 1Gbps",
      "E-Commerce ISP"
    ]
  },
  {
    "id": "22",
    "name": "Viettel Telecom",
    "country": "Vietnam",
    "flag": "🇻🇳",
    "population": "100 Million",
    "url": "https://vietteltelecom.vn",
    "slug": "22_viettel_vn",
    "category": "emerging",
    "categoryLabel": "Global Telecom Giant (10+ Countries)",
    "speedTier": "150 Mbps – 1 Gbps (MESH Wi-Fi 6)",
    "pricingModel": "Converged Mobile + Fiber + TV",
    "keyFeatures": [
      "Nationwide 100% Fiber Coverage",
      "Viettel TV360 App",
      "Mesh Wi-Fi 6 Starter Bundles",
      "Self-Care via MyViettel"
    ],
    "uxHighlights": "Massive scale organized with razor-sharp navigation. Prominently displays Mesh Wi-Fi 6 bundles (HOMET, STAR) solving concrete multi-story townhouse dead-zones.",
    "strategicTakeaway": "Solves the multi-story narrow concrete townhouse problem common in Asian cities by bundling 2 to 3 Wi-Fi 6 mesh pods by default.",
    "tags": [
      "Mesh Wi-Fi 6",
      "Townhouse Solvers",
      "TV360",
      "Global Telco",
      "Massive Scale"
    ]
  },
  {
    "id": "24",
    "name": "AIS Fibre3",
    "country": "Thailand",
    "flag": "🇹🇭",
    "population": "71 Million",
    "url": "https://ais.th/fibre",
    "slug": "24_aisfibre_th",
    "category": "emerging",
    "categoryLabel": "Southeast Asia Innovation Leader",
    "speedTier": "500 Mbps – 2 Gbps",
    "pricingModel": "Lifestyle & Gaming Micro-Tiers",
    "keyFeatures": [
      "100% Fiber-to-the-Room (FTTR) Transparent Glass Cable",
      "AI Powered Wi-Fi 6 Router",
      "Power4 Special Converged Plans",
      "Separate Dual-Band Dedicated Gaming Lane"
    ],
    "uxHighlights": "World-class interactive visualizer showing transparent FTTR cable installed in living room and bedrooms. Dynamic bandwidth switcher that toggles upload/download ratios on the fly.",
    "strategicTakeaway": "The premier innovator in Southeast Asia: first to commercialize FTTR transparent fiber and dynamic on-demand bandwidth switching for gamers and streamers.",
    "tags": [
      "FTTR Pioneer",
      "Bandwidth Switcher",
      "AI Router",
      "Dynamic Speeds",
      "World-Class UX"
    ]
  },
  {
    "id": "26",
    "name": "Google Fiber",
    "country": "USA",
    "flag": "🇺🇸",
    "population": "335 Million",
    "url": "https://fiber.google.com",
    "slug": "26_googlefiber_us",
    "category": "global",
    "categoryLabel": "Global Disruptor & Minimalist UX",
    "speedTier": "1 Gbps, 2 Gbps, 5 Gbps, 8 Gbps Symmetrical",
    "pricingModel": "Radically Transparent Flat Pricing ($70, $100, $125, $150/mo)",
    "keyFeatures": [
      "Wi-Fi 7 / 6E Mesh Hardware Included",
      "Zero Data Caps, Zero Equipment Fees, Zero Contracts",
      "Up to 8 Gbps Symmetrical Speeds",
      "Instant Cloud Uptime Tracking"
    ],
    "uxHighlights": "The global benchmark for minimalist ISP UX. Single clean page, 4 simple plan tiers, 100% transparent pricing with no hidden taxes or promotional price hikes. 1-click address eligibility.",
    "strategicTakeaway": "Proves that customers despise promo pricing tricks, hidden modem rental fees, and contract traps. Simplicity and speed create maximum brand love.",
    "tags": [
      "Minimalist UX",
      "Transparent Pricing",
      "Wi-Fi 7",
      "8 Gbps",
      "Zero Caps"
    ]
  },
  {
    "id": "27",
    "name": "AT&T Fiber",
    "country": "USA",
    "flag": "🇺🇸",
    "population": "335 Million",
    "url": "https://www.att.com/internet/fiber/",
    "slug": "27_attfiber_us",
    "category": "global",
    "categoryLabel": "Tier-1 US Telecom Behemoth",
    "speedTier": "300 Mbps – 5 Gbps Symmetrical",
    "pricingModel": "Straightforward Pricing (No price bump at 12 mos)",
    "keyFeatures": [
      "AT&T ActiveArmor Internet Security",
      "Smart Home Manager App",
      "All-Fi Next-Gen Wi-Fi 6E Gateway",
      "Symmetrical Upload & Download"
    ],
    "uxHighlights": "High-contrast clean design. Interactive 'Speed Match' quiz asking how many devices and activities are in the home. Clear callouts of 'No annual contract, no equipment fees, no data cap'.",
    "strategicTakeaway": "Tier-1 incumbent adopting unbundled, straightforward pricing to defeat legacy cable competitors (Comcast, Charter).",
    "tags": [
      "Straightforward Pricing",
      "ActiveArmor",
      "Speed Match Quiz",
      "5 Gbps",
      "All-Fi"
    ]
  },
  {
    "id": "28",
    "name": "Verizon Fios",
    "country": "USA",
    "flag": "🇺🇸",
    "population": "335 Million",
    "url": "https://www.verizon.com/home/fios/",
    "slug": "28_verizonfios_us",
    "category": "global",
    "categoryLabel": "Pioneer 100% Fiber Network",
    "speedTier": "300 Mbps – 2 Gbps",
    "pricingModel": "Mix & Match Personalization",
    "keyFeatures": [
      "Mix & Match: Pick Internet Speed + Add Perks ($10/mo Netflix, Disney+, YouTube)",
      "5-Year Price Guarantee on 2 Gig",
      "Whole-Home Wi-Fi Guarantee",
      "2.3 Terabit Backbone"
    ],
    "uxHighlights": "Innovative 'Mix & Match' configurator. Lets customers choose just broadband without forcing TV bundles, while offering discounted $10 streaming perks on demand.",
    "strategicTakeaway": "Unbundled flexibility: customers assemble their own bundle instead of being forced into legacy cable bundles.",
    "tags": [
      "Mix & Match",
      "Unbundled",
      "Price Guarantee",
      "Streaming Perks",
      "Whole-Home Wi-Fi"
    ]
  },
  {
    "id": "30",
    "name": "Ting Internet",
    "country": "USA",
    "flag": "🇺🇸",
    "population": "National Micro-Markets",
    "url": "https://ting.com/internet",
    "slug": "30_ting_us",
    "category": "global",
    "categoryLabel": "Community-Focused Fiber Altnet",
    "speedTier": "1 Gbps – 2 Gbps Symmetrical",
    "pricingModel": "Flat Monthly Community Rates",
    "keyFeatures": [
      "Dedicated Fiber to Every Home",
      "Human-Powered 24/7 Support (Answer in <90 sec)",
      "Town-Level Fiber Construction Updates",
      "Wi-Fi 6 Mesh Hardware"
    ],
    "uxHighlights": "Clean, human-centric design. Emphasizes instant human customer support over robotic IVRs. City-by-city micro-sites with construction progress updates.",
    "strategicTakeaway": "Differentiates on fanatical human support and transparent municipal deployment roadmaps.",
    "tags": [
      "Human Support",
      "Community Fiber",
      "Construction Tracker",
      "Town Sites",
      "High NPS"
    ]
  },
  {
    "id": "31",
    "name": "New EE Broadband",
    "country": "UK",
    "flag": "🇬🇧",
    "population": "68 Million",
    "url": "https://ee.co.uk/broadband",
    "slug": "31_ee_uk",
    "category": "global",
    "categoryLabel": "Rebranded Mega-Consumer Flagship",
    "speedTier": "100 Mbps – 1.6 Gbps",
    "pricingModel": "24-Month Contracts with Gaming & Work Perks",
    "keyFeatures": [
      "Smart Hub Plus with Wi-Fi 7",
      "Game Mode with Low Latency Geofencing",
      "Work Mode with Priority Zoom Bandwidth",
      "Cyber Smart Home Shield by Norton"
    ],
    "uxHighlights": "Brand new modern 2025/2026 UI redesign. Interactive 'Home Modes' widget allowing users to see how router prioritizes gaming, work, or security traffic.",
    "strategicTakeaway": "BT's consumer business completely rebranded under 'New EE' with a laser focus on gaming latency, Wi-Fi 7, and household cybersecurity.",
    "tags": [
      "Wi-Fi 7",
      "Gaming Geofencing",
      "Work Mode",
      "Complete Rebrand",
      "Modern UK UI"
    ]
  },
  {
    "id": "32",
    "name": "Community Fibre London",
    "country": "UK (London)",
    "flag": "🇬🇧",
    "population": "9 Million Londoners",
    "url": "https://communityfibre.co.uk",
    "slug": "32_communityfibre_uk",
    "category": "global",
    "categoryLabel": "London's Fastest 100% Full-Fiber",
    "speedTier": "150 Mbps – 3 Gbps Symmetrical",
    "pricingModel": "12 / 24-Month Transparent Plans (No Mid-Contract Hikes)",
    "keyFeatures": [
      "100% London-Dedicated Fiber",
      "3 Gbps Symmetrical Top Tier",
      "Trustpilot 4.9/5 Rating (Over 40k Reviews)",
      "Netgem 4K TV Box Option"
    ],
    "uxHighlights": "Vibrant lime-green and crisp white design. Huge Trustpilot score badge front-and-center. Postcode search leads straight into an unbundled 3-card plan selector.",
    "strategicTakeaway": "Beats Openreach/BT across Greater London by guaranteeing no mid-contract inflation price hikes and delivering 100% symmetrical speeds.",
    "tags": [
      "No Inflation Hike",
      "Trustpilot 4.9",
      "London Full Fiber",
      "3 Gbps Symmetrical",
      "Clean UI"
    ]
  },
  {
    "id": "34",
    "name": "Virgin Media O2",
    "country": "UK",
    "flag": "🇬🇧",
    "population": "68 Million",
    "url": "https://www.virginmedia.com/broadband",
    "slug": "34_virginmedia_uk",
    "category": "global",
    "categoryLabel": "Gigabit Cable & Fiber Giant",
    "speedTier": "125 Mbps – 2 Gbps (Gig2 with XGS-PON)",
    "pricingModel": "Volt Bundles (Virgin Media + O2 Mobile)",
    "keyFeatures": [
      "Volt Supercharged (Double Mobile Data + Broadband Speed Boost)",
      "Gig2 Symmetrical Add-on",
      "Hub 5x Wi-Fi 6 Router",
      "Virgin TV 360 4K Voice Control"
    ],
    "uxHighlights": "Dynamic red and white energetic branding. Interactive 'Volt Benefits' calculator showing how much speed and data customers unlock by having both services.",
    "strategicTakeaway": "Masterclass in fixed-mobile convergence (FMC): rewarding dual customers with automatic broadband speed tier upgrades and doubled mobile data.",
    "tags": [
      "Volt FMC",
      "Fixed-Mobile Convergence",
      "Speed Boost",
      "Gig2 XGS-PON",
      "Entertainment"
    ]
  },
  {
    "id": "36",
    "name": "Free (Freebox Ultra)",
    "country": "France",
    "flag": "🇫🇷",
    "population": "68 Million",
    "url": "https://www.free.fr",
    "slug": "36_freebox_fr",
    "category": "global",
    "categoryLabel": "The World's Most Disruptive Telco",
    "speedTier": "Up to 8 Gbps Symmetrical (10G-EPON)",
    "pricingModel": "Freebox Ultra & Freebox Pop (No Commitment Options)",
    "keyFeatures": [
      "10G-EPON Symmetrical 8 Gbps Technology",
      "Wi-Fi 7 Quad-Band Pocket Box",
      "Disney+, Netflix, Prime Video, Canal+ Included",
      "Pocket Wi-Fi 4G Backup Included"
    ],
    "uxHighlights": "Stunning industrial design visualizer for the Freebox Ultra hardware. Highlights custom quad-core processor, NVMe SSD slot, and included streaming subscriptions directly on the 3D model.",
    "strategicTakeaway": "The undisputed global master of disruption: offers the world's fastest retail consumer hardware (8 Gbps symmetrical + Wi-Fi 7) bundled with all 4 major streaming services for under €50/mo.",
    "tags": [
      "Freebox Ultra",
      "8 Gbps Symmetrical",
      "Wi-Fi 7",
      "Hardware Excellence",
      "All OTT Included"
    ]
  },
  {
    "id": "37",
    "name": "Orange France (Livebox)",
    "country": "France",
    "flag": "🇫🇷",
    "population": "68 Million",
    "url": "https://boutique.orange.fr/internet",
    "slug": "37_orange_fr",
    "category": "global",
    "categoryLabel": "Tier-1 European Incumbent",
    "speedTier": "500 Mbps – 8 Gbps (Livebox 7 with XGS-PON)",
    "pricingModel": "12-Month Commitment with Open Mobile Packs",
    "keyFeatures": [
      "Livebox 7 with Eco-Design & Low Carbon Footprint",
      "Wi-Fi 6E & Wi-Fi 7 Repeaters",
      "Orange Cybersecure Included",
      "Ultra-Low Latency Fiber"
    ],
    "uxHighlights": "Sophisticated editorial layout. Strong focus on sustainability and eco-designed hardware (recycled plastics, power-saving sleep modes). Step-by-step fiber eligibility checker.",
    "strategicTakeaway": "How a national incumbent reinvents itself around premium quality, eco-conscious design, and integrated cybersecurity.",
    "tags": [
      "Livebox 7",
      "Eco-Design",
      "XGS-PON",
      "Cybersecure",
      "Premium Incumbent"
    ]
  },
  {
    "id": "38",
    "name": "TIME dotCom",
    "country": "Malaysia",
    "flag": "🇲🇾",
    "population": "34 Million",
    "url": "https://www.time.com.my",
    "slug": "38_timedotcom_my",
    "category": "global",
    "categoryLabel": "Asia's Benchmark 100% Pure Fiber",
    "speedTier": "200 Mbps – 2 Gbps Symmetrical",
    "pricingModel": "No-Bullshit 24-Month & No-Contract Plans",
    "keyFeatures": [
      "100% Pure Optical Fiber (No Copper)",
      "2 Gbps Symmetrical Flagship Tier",
      "Wi-Fi 6 & Wi-Fi 7 Mesh Devices",
      "Self-Serve Self-Install Kits"
    ],
    "uxHighlights": "Award-winning, high-converting bold pink-magenta on crisp white design. Direct, cheeky, transparent tone of voice ('No BS Internet'). Smooth interactive plan comparison slider.",
    "strategicTakeaway": "The gold standard for Asian consumer ISP branding: zero copper, ultra-fast 2Gbps speeds, cheeky memorable marketing, and self-installation kits that eliminate technician wait times.",
    "tags": [
      "No BS Branding",
      "2 Gbps Symmetrical",
      "Award-Winning UX",
      "Self-Install",
      "High Converting"
    ]
  },
  {
    "id": "40",
    "name": "Unifi (Telekom Malaysia)",
    "country": "Malaysia",
    "flag": "🇲🇾",
    "population": "34 Million",
    "url": "https://unifi.com.my",
    "slug": "40_unifi_my",
    "category": "global",
    "categoryLabel": "National Broadband Infrastructure",
    "speedTier": "100 Mbps – 2 Gbps",
    "pricingModel": "UniVerse Converged Lifestyle Packages",
    "keyFeatures": [
      "Unifi TV App with 70+ Channels & 10 Streaming Apps",
      "EasyFix Auto Diagnostic Self-Troubleshooting",
      "Pro Installation Guarantee in 24h",
      "Enterprise Unifi Business Solutions"
    ],
    "uxHighlights": "Comprehensive ecosystem portal. Features 'UniVerse' lifestyle package configurator that dynamically bundles fiber speed, TV channels, and mobile lines into a unified checkout.",
    "strategicTakeaway": "The comprehensive national portal: bundles broadband with entertainment, fixed line, and mobile with automated self-diagnostic tools (EasyFix) that resolve 40% of customer tickets.",
    "tags": [
      "UniVerse Configurator",
      "EasyFix Diagnostics",
      "National Infrastructure",
      "Unifi TV",
      "2 Gbps"
    ]
  },
  {
    "id": "41",
    "name": "Maxis (Maxis Fibre)",
    "country": "Malaysia",
    "flag": "🇲🇾",
    "population": "34 Million",
    "url": "https://www.maxis.com.my",
    "slug": "41_maxis_my",
    "category": "global",
    "categoryLabel": "Premium Converged Operator",
    "speedTier": "100 Mbps – 2 Gbps",
    "pricingModel": "Maxis Unlimited Postpaid Bundles",
    "keyFeatures": [
      "4G/5G Wireless Backup Router (Always-Connected Guarantee)",
      "Maxperts Specialized Home Wi-Fi Setup",
      "Free 65-inch 4K TV Add-On Options",
      "Zerolution Zero-Interest Hardware Financing"
    ],
    "uxHighlights": "Sleek green and navy executive look. Emphasizes the 'Always On' backup dongle feature that switches to 4G automatically if fiber is severed.",
    "strategicTakeaway": "Essential for Link3: 'Always-Connected Backup' router with auto 4G failover ensures zero downtime for executive WFH and SME clients.",
    "tags": [
      "4G Failover Backup",
      "Always On",
      "Maxperts",
      "Hardware Financing",
      "Executive WFH"
    ]
  },
  {
    "id": "43",
    "name": "StarHub (UltraSpeed Broadband)",
    "country": "Singapore",
    "flag": "🇸🇬",
    "population": "5.9 Million",
    "url": "https://starhub.com/personal/broadband.html",
    "slug": "43_starhub_sg",
    "category": "global",
    "categoryLabel": "Green Telco & 10G Innovator",
    "speedTier": "1 Gbps – 10 Gbps Symmetrical",
    "pricingModel": "UltraSpeed 10Gbps Flat Subscriptions",
    "keyFeatures": [
      "UltraSpeed 10Gbps Symmetrical Fiber",
      "Premier League & HBO Max Bundled",
      "StarHub SmartProtect Security",
      "Nokia Wi-Fi 6 / Wi-Fi 7 Beacons"
    ],
    "uxHighlights": "Clean green and white branding. Straightforward comparison cards showing 1Gbps, 2Gbps, 5Gbps, and 10Gbps side-by-side with equipment specifications.",
    "strategicTakeaway": "Aggressive multi-tier 10G pricing backed by premier international sports and Hollywood streaming rights.",
    "tags": [
      "UltraSpeed 10G",
      "Nokia Beacons",
      "Side-by-Side Cards",
      "Premier League",
      "Clean Aesthetics"
    ]
  },
  {
    "id": "44",
    "name": "MyRepublic Singapore",
    "country": "Singapore",
    "flag": "🇸🇬",
    "population": "5.9 Million",
    "url": "https://myrepublic.net/sg/broadband",
    "slug": "44_myrepublic_sg",
    "category": "global",
    "categoryLabel": "Original Cloud-Native Telco Disruptor",
    "speedTier": "1 Gbps – 10 Gbps Symmetrical",
    "pricingModel": "No-Frills Transparent Subscriptions",
    "keyFeatures": [
      "GAMER Custom Latency Routing Engine",
      "Live Latency Heatmap to Game Servers",
      "Static IP Options for Enthusiasts",
      "HyperDrive Next-Gen 10G"
    ],
    "uxHighlights": "Gaming-first digital experience. Features a live real-time ping monitor showing current latency in milliseconds to Riot Games, Blizzard, Valve, and EA servers.",
    "strategicTakeaway": "Proves that publishing real-time network telemetry and gaming server pings builds fanatic credibility among technical power users.",
    "tags": [
      "Live Latency Heatmap",
      "Gamer Routing",
      "Power User Credibility",
      "Cloud-Native",
      "Static IP"
    ]
  },
  {
    "id": "46",
    "name": "Swisscom",
    "country": "Switzerland",
    "flag": "🇨🇭",
    "population": "8.8 Million",
    "url": "https://www.swisscom.ch",
    "slug": "46_swisscom_ch",
    "category": "global",
    "categoryLabel": "Swiss Quality & Precision Telco",
    "speedTier": "100 Mbps – 10 Gbps (blue Internet)",
    "pricingModel": "blue Internet Modular Customization",
    "keyFeatures": [
      "10 Gbps Internet-Box 4 Gateway",
      "Swisscom blue TV Entertainment",
      "My Swisscom App with Self-Repair",
      "100% Renewable Energy Powered Network"
    ],
    "uxHighlights": "Pristine Swiss minimalist design. Step-by-step interactive modular builder: choose internet speed, add TV packs, add mobile SIMs, see total with live discount updates.",
    "strategicTakeaway": "The pinnacle of modular subscription configuration: intuitive, high-contrast, effortless user experience with zero visual clutter.",
    "tags": [
      "Swiss Design",
      "Modular Builder",
      "Internet-Box 4",
      "Renewable Powered",
      "Pristine UX"
    ]
  },
  {
    "id": "47",
    "name": "KPN",
    "country": "Netherlands",
    "flag": "🇳🇱",
    "population": "18 Million",
    "url": "https://www.kpn.com",
    "slug": "47_kpn_nl",
    "category": "global",
    "categoryLabel": "Dutch Digital Innovation Benchmark",
    "speedTier": "100 Mbps – 4 Gbps Symmetrical",
    "pricingModel": "Hussle Modular Subscriptions",
    "keyFeatures": [
      "Box 14 Wi-Fi 6 Hardware with Green Footprint",
      "KPN Veilig Cybersecurity Suite",
      "4 Gbps XGS-PON Symmetrical Rollout",
      "FMC Combivoordeel Perks"
    ],
    "uxHighlights": "Clean green and black accenting on crisp white background. Postcode checker with instant building installation status. Easy toggle between residential and business.",
    "strategicTakeaway": "Hussle product model: complete decoupling of mobile, internet, and TV, allowing customers to add or remove components on a month-to-month basis.",
    "tags": [
      "Hussle Decoupled",
      "Combivoordeel",
      "XGS-PON 4G",
      "Dutch UX",
      "Green Box"
    ]
  },
  {
    "id": "48",
    "name": "Deutsche Telekom (Magenta)",
    "country": "Germany",
    "flag": "🇩🇪",
    "population": "84 Million",
    "url": "https://www.telekom.de",
    "slug": "48_deutschetelekom_de",
    "category": "global",
    "categoryLabel": "Europe's Largest Telco",
    "speedTier": "50 Mbps – 2 Gbps (MagentaZuhause Fiber)",
    "pricingModel": "MagentaEINS Convergence Bundles",
    "keyFeatures": [
      "Speedport Smart 4 Wi-Fi 6 Router",
      "MagentaTV Streamer Hub",
      "MagentaEINS Mobile + Home Benefit",
      "Fiber Expansion Pledge Across Germany"
    ],
    "uxHighlights": "Iconic magenta branding adapted into a high-converting digital storefront. Comprehensive fiber expansion roadmap showing exact street construction dates.",
    "strategicTakeaway": "How a massive legacy carrier uses digital transparency (interactive rollout map + construction status) to build consumer trust during fiber infrastructure overhauls.",
    "tags": [
      "MagentaEINS",
      "Rollout Map",
      "Speedport",
      "European Giant",
      "Trust Transparency"
    ]
  }
];

// Generate the complete HTML file
const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Global & Emerging ISP Competitor Benchmark Visualizer | Link3 Research Lab</title>
  <meta name="description" content="Visual moodboard, full-page design audit, and architectural benchmark of 50 elite ISPs across high-population emerging markets and world-class global innovators.">
  
  <!-- Inter Font Exclusively (Strict Rule: Research Folder) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

  <style>
    /* =========================================================================
       STRICT 100% LIGHT MODE DESIGN SYSTEM & CSS VARIABLES
       ========================================================================= */
    :root {
      --canvas-bg: #F8FAFC;
      --surface-white: #FFFFFF;
      --surface-elevated: #F1F5F9;
      --surface-hover: #E2E8F0;
      --surface-border: #E2E8F0;
      --surface-border-strong: #CBD5E1;

      --text-primary: #0F172A;
      --text-secondary: #475569;
      --text-muted: #64748B;
      --text-subtle: #94A3B8;

      --brand-blue: #0284C7;
      --brand-blue-hover: #0369A1;
      --brand-blue-soft: #E0F2FE;

      --brand-indigo: #2563EB;
      --brand-emerald: #059669;
      --brand-emerald-soft: #ECFDF5;
      --brand-amber: #D97706;
      --brand-amber-soft: #FEF3C7;
      --brand-purple: #7C3AED;
      --brand-purple-soft: #F3E8FF;

      --shadow-sm: 0 1px 2px 0 rgba(15, 23, 42, 0.05);
      --shadow-md: 0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.05);
      --shadow-lg: 0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04);
      --shadow-xl: 0 20px 30px -10px rgba(15, 23, 42, 0.12);

      --radius-sm: 6px;
      --radius-md: 10px;
      --radius-lg: 14px;
      --radius-xl: 20px;
      --radius-full: 9999px;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background-color: var(--canvas-bg);
      color: var(--text-primary);
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
      padding-bottom: 80px;
    }

    /* Dot grid texture */
    .bg-dot-matrix {
      background-image: radial-gradient(var(--surface-border-strong) 1px, transparent 1px);
      background-size: 24px 24px;
    }

    /* Container */
    .container {
      max-width: 1480px;
      margin: 0 auto;
      padding: 0 24px;
    }

    /* Header & Hero */
    header {
      background-color: var(--surface-white);
      border-bottom: 1px solid var(--surface-border);
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: var(--shadow-sm);
    }

    .header-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 72px;
    }

    .brand-group {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .brand-logo-pill {
      background: linear-gradient(135deg, #0284C7, #2563EB);
      color: #FFFFFF;
      font-weight: 800;
      font-size: 14px;
      padding: 6px 12px;
      border-radius: var(--radius-sm);
      letter-spacing: -0.5px;
    }

    .header-title-box h1 {
      font-size: 18px;
      font-weight: 700;
      color: var(--text-primary);
      line-height: 1.2;
    }

    .header-title-box p {
      font-size: 12px;
      color: var(--text-muted);
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .stat-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      background-color: var(--surface-elevated);
      border: 1px solid var(--surface-border);
      border-radius: var(--radius-full);
      font-size: 12px;
      font-weight: 600;
      color: var(--text-secondary);
    }

    .stat-badge .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: var(--brand-emerald);
    }

    /* Hero Banner Section */
    .hero-banner {
      background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);
      border-bottom: 1px solid var(--surface-border);
      padding: 40px 0 32px 0;
    }

    .hero-headline {
      font-size: 32px;
      font-weight: 800;
      letter-spacing: -0.8px;
      color: var(--text-primary);
      margin-bottom: 12px;
    }

    .hero-subtitle {
      font-size: 16px;
      color: var(--text-secondary);
      max-width: 960px;
      line-height: 1.6;
      margin-bottom: 24px;
    }

    .hero-pills {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .hero-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 14px;
      background: var(--surface-white);
      border: 1px solid var(--surface-border);
      border-radius: var(--radius-md);
      font-size: 13px;
      font-weight: 600;
      color: var(--text-secondary);
      box-shadow: var(--shadow-sm);
    }

    .hero-pill strong {
      color: var(--brand-blue);
    }

    /* Control Toolbar */
    .toolbar-section {
      background-color: var(--surface-white);
      border: 1px solid var(--surface-border);
      border-radius: var(--radius-lg);
      padding: 16px 20px;
      margin: 24px 0 32px 0;
      box-shadow: var(--shadow-sm);
    }

    .toolbar-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      flex-wrap: wrap;
    }

    .search-box {
      flex: 1;
      min-width: 280px;
      position: relative;
    }

    .search-input {
      width: 100%;
      padding: 10px 14px 10px 38px;
      font-size: 14px;
      font-family: inherit;
      border: 1px solid var(--surface-border);
      border-radius: var(--radius-md);
      background-color: var(--surface-elevated);
      color: var(--text-primary);
      outline: none;
      transition: all 0.2s ease;
    }

    .search-input:focus {
      background-color: var(--surface-white);
      border-color: var(--brand-blue);
      box-shadow: 0 0 0 3px var(--brand-blue-soft);
    }

    .search-icon {
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--text-muted);
      pointer-events: none;
      font-size: 14px;
    }

    .filter-tabs {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }

    .tab-btn {
      padding: 8px 14px;
      font-size: 13px;
      font-weight: 600;
      font-family: inherit;
      border-radius: var(--radius-full);
      border: 1px solid var(--surface-border);
      background-color: var(--surface-white);
      color: var(--text-secondary);
      cursor: pointer;
      transition: all 0.15s ease;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .tab-btn:hover {
      background-color: var(--surface-elevated);
      border-color: var(--surface-border-strong);
      color: var(--text-primary);
    }

    .tab-btn.active {
      background-color: var(--text-primary);
      color: #FFFFFF;
      border-color: var(--text-primary);
    }

    .tab-btn .badge {
      padding: 2px 7px;
      border-radius: var(--radius-full);
      font-size: 11px;
      background-color: rgba(0, 0, 0, 0.08);
    }

    .tab-btn.active .badge {
      background-color: rgba(255, 255, 255, 0.25);
      color: #FFFFFF;
    }

    .toolbar-subline {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 14px;
      padding-top: 14px;
      border-top: 1px solid var(--surface-border);
      font-size: 13px;
      color: var(--text-muted);
    }

    .tag-filters {
      display: flex;
      align-items: center;
      gap: 6px;
      flex-wrap: wrap;
    }

    .tag-chip {
      padding: 4px 10px;
      border-radius: var(--radius-sm);
      font-size: 11px;
      font-weight: 500;
      background-color: var(--surface-elevated);
      border: 1px solid var(--surface-border);
      color: var(--text-secondary);
      cursor: pointer;
      transition: all 0.15s ease;
    }

    .tag-chip:hover {
      border-color: var(--brand-blue);
      color: var(--brand-blue);
    }

    .tag-chip.active {
      background-color: var(--brand-blue-soft);
      border-color: var(--brand-blue);
      color: var(--brand-blue-hover);
      font-weight: 600;
    }

    /* Grid Layout */
    .competitor-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
      gap: 28px;
    }

    /* Competitor Card */
    .comp-card {
      background-color: var(--surface-white);
      border: 1px solid var(--surface-border);
      border-radius: var(--radius-lg);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      box-shadow: var(--shadow-sm);
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .comp-card:hover {
      border-color: var(--surface-border-strong);
      box-shadow: var(--shadow-lg);
      transform: translateY(-3px);
    }

    /* Card Preview Frame */
    .card-media-wrapper {
      position: relative;
      background-color: #E2E8F0;
      height: 280px;
      overflow: hidden;
      border-bottom: 1px solid var(--surface-border);
      cursor: pointer;
    }

    .card-media-scroll {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      transition: transform 7s linear;
    }

    .card-media-scroll img {
      width: 100%;
      height: auto;
      display: block;
      object-fit: cover;
      object-position: top;
    }

    .comp-card:hover .card-media-scroll {
      transform: translateY(calc(-100% + 280px));
    }

    .media-overlay-badge {
      position: absolute;
      top: 12px;
      left: 12px;
      background-color: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(8px);
      padding: 4px 10px;
      border-radius: var(--radius-full);
      font-size: 12px;
      font-weight: 700;
      color: var(--text-primary);
      display: flex;
      align-items: center;
      gap: 6px;
      box-shadow: var(--shadow-sm);
      border: 1px solid var(--surface-border);
      z-index: 2;
    }

    .media-overlay-speed {
      position: absolute;
      top: 12px;
      right: 12px;
      background-color: rgba(15, 23, 42, 0.9);
      color: #FFFFFF;
      padding: 4px 10px;
      border-radius: var(--radius-full);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: -0.2px;
      z-index: 2;
    }

    .media-hover-hint {
      position: absolute;
      bottom: 12px;
      right: 12px;
      background-color: rgba(255, 255, 255, 0.92);
      backdrop-filter: blur(4px);
      color: var(--text-secondary);
      font-size: 11px;
      font-weight: 600;
      padding: 4px 10px;
      border-radius: var(--radius-sm);
      border: 1px solid var(--surface-border);
      display: flex;
      align-items: center;
      gap: 5px;
      opacity: 0.9;
      z-index: 2;
      pointer-events: none;
    }

    /* Card Body */
    .card-body {
      padding: 20px 22px;
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    .card-header-line {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 8px;
    }

    .card-title-group h3 {
      font-size: 18px;
      font-weight: 700;
      color: var(--text-primary);
      line-height: 1.3;
    }

    .category-tag {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      padding: 3px 8px;
      border-radius: var(--radius-sm);
      white-space: nowrap;
    }

    .tag-emerging {
      background-color: var(--brand-amber-soft);
      color: var(--brand-amber);
      border: 1px solid #FDE68A;
    }

    .tag-global {
      background-color: var(--brand-blue-soft);
      color: var(--brand-blue-hover);
      border: 1px solid #BAE6FD;
    }

    .card-pricing-model {
      font-size: 12px;
      font-weight: 600;
      color: var(--brand-emerald);
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .card-pricing-model::before {
      content: "•";
      font-size: 16px;
      color: var(--brand-emerald);
    }

    .card-takeaway {
      font-size: 13px;
      color: var(--text-secondary);
      line-height: 1.5;
      margin-bottom: 14px;
      background-color: var(--surface-elevated);
      padding: 10px 12px;
      border-radius: var(--radius-sm);
      border-left: 3px solid var(--brand-blue);
    }

    .card-takeaway strong {
      color: var(--text-primary);
    }

    .card-features-list {
      list-style: none;
      margin-bottom: 16px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .card-features-list li {
      font-size: 12px;
      color: var(--text-secondary);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .card-features-list li::before {
      content: "✓";
      color: var(--brand-blue);
      font-weight: 800;
      font-size: 11px;
    }

    .card-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-top: auto;
      margin-bottom: 16px;
    }

    .card-tag-pill {
      font-size: 11px;
      font-weight: 500;
      background-color: var(--surface-elevated);
      color: var(--text-muted);
      padding: 3px 8px;
      border-radius: var(--radius-sm);
      border: 1px solid var(--surface-border);
    }

    /* Card Footer Actions */
    .card-footer-actions {
      display: flex;
      align-items: center;
      gap: 10px;
      padding-top: 14px;
      border-top: 1px solid var(--surface-border);
    }

    .btn-inspect {
      flex: 1;
      padding: 9px 14px;
      background-color: var(--surface-elevated);
      border: 1px solid var(--surface-border);
      border-radius: var(--radius-md);
      font-size: 13px;
      font-weight: 600;
      color: var(--text-primary);
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      transition: all 0.15s ease;
    }

    .btn-inspect:hover {
      background-color: var(--text-primary);
      color: #FFFFFF;
      border-color: var(--text-primary);
    }

    .btn-external {
      padding: 9px 14px;
      background-color: var(--surface-white);
      border: 1px solid var(--surface-border);
      border-radius: var(--radius-md);
      font-size: 13px;
      font-weight: 600;
      color: var(--brand-blue);
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.15s ease;
    }

    .btn-external:hover {
      background-color: var(--brand-blue-soft);
      border-color: var(--brand-blue);
    }

    /* Lightbox Modal */
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background-color: rgba(15, 23, 42, 0.7);
      backdrop-filter: blur(6px);
      z-index: 1000;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    .modal-backdrop.open {
      display: flex;
    }

    .modal-container {
      background-color: var(--surface-white);
      border-radius: var(--radius-xl);
      width: 100%;
      max-width: 1320px;
      height: 92vh;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      box-shadow: var(--shadow-xl);
      border: 1px solid var(--surface-border-strong);
    }

    .modal-header {
      padding: 16px 24px;
      border-bottom: 1px solid var(--surface-border);
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: var(--surface-white);
      gap: 16px;
    }

    .modal-header-info h2 {
      font-size: 18px;
      font-weight: 700;
      color: var(--text-primary);
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .modal-header-info p {
      font-size: 13px;
      color: var(--text-muted);
    }

    .modal-toolbar {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .zoom-btn {
      padding: 6px 12px;
      font-size: 12px;
      font-weight: 600;
      border-radius: var(--radius-sm);
      border: 1px solid var(--surface-border);
      background-color: var(--surface-elevated);
      color: var(--text-primary);
      cursor: pointer;
    }

    .zoom-btn:hover {
      background-color: var(--surface-hover);
    }

    .modal-close-btn {
      width: 36px;
      height: 36px;
      border-radius: var(--radius-md);
      border: 1px solid var(--surface-border);
      background-color: var(--surface-elevated);
      color: var(--text-primary);
      font-size: 18px;
      font-weight: 700;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .modal-close-btn:hover {
      background-color: #FEE2E2;
      color: #DC2626;
      border-color: #FCA5A5;
    }

    .modal-body {
      flex: 1;
      overflow: auto;
      background-color: #E2E8F0;
      display: flex;
      justify-content: center;
      padding: 24px;
    }

    .modal-image-wrapper {
      max-width: 1000px;
      background-color: #FFFFFF;
      box-shadow: var(--shadow-lg);
      border-radius: var(--radius-md);
      overflow: hidden;
      transition: max-width 0.2s ease;
    }

    .modal-image-wrapper img {
      width: 100%;
      height: auto;
      display: block;
    }

    .modal-footer {
      padding: 12px 24px;
      background-color: var(--surface-white);
      border-top: 1px solid var(--surface-border);
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 13px;
      color: var(--text-secondary);
    }

    .nav-arrow-btn {
      padding: 6px 14px;
      background-color: var(--surface-elevated);
      border: 1px solid var(--surface-border);
      border-radius: var(--radius-sm);
      font-weight: 600;
      cursor: pointer;
    }

    .nav-arrow-btn:hover {
      background-color: var(--surface-hover);
    }

    /* Key Insights Callout Box */
    .insights-section {
      background-color: var(--surface-white);
      border: 1px solid var(--surface-border);
      border-radius: var(--radius-xl);
      padding: 36px;
      margin-top: 56px;
      box-shadow: var(--shadow-sm);
    }

    .insights-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 24px;
      margin-top: 24px;
    }

    .insight-card {
      background-color: var(--surface-elevated);
      border: 1px solid var(--surface-border);
      border-radius: var(--radius-lg);
      padding: 20px;
    }

    .insight-card h4 {
      font-size: 15px;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .insight-card p {
      font-size: 13px;
      color: var(--text-secondary);
      line-height: 1.6;
    }

    /* Responsive */
    @media (max-width: 900px) {
      .competitor-grid {
        grid-template-columns: 1fr;
      }
      .hero-headline {
        font-size: 26px;
      }
      .modal-container {
        height: 100vh;
        border-radius: 0;
      }
    }
  </style>
</head>
<body class="bg-dot-matrix">

  <!-- Sticky Top Header -->
  <header>
    <div class="container header-inner">
      <div class="brand-group">
        <div class="brand-logo-pill">LINK3 RESEARCH</div>
        <div class="header-title-box">
          <h1>Competitor Benchmark & Visual Moodboard</h1>
          <p>Phase 6 &bull; 34 Curated Global & Emerging ISP Benchmarks (100% Light Mode)</p>
        </div>
      </div>
      <div class="header-actions">
        <span class="stat-badge"><span class="dot"></span> 34 Live Benchmarks</span>
        <span class="stat-badge">17 Emerging Leaders</span>
        <span class="stat-badge">17 Global Innovators</span>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="hero-banner">
    <div class="container">
      <h2 class="hero-headline">Global & Emerging ISP Visual Experience Catalog</h2>
      <p class="hero-subtitle">
        Comprehensive full-page design audit and UX architectural moodboard featuring <strong>17 High-Population Emerging Market Giants</strong> (India, Indonesia, Philippines, Pakistan, Vietnam, Thailand) solving identical density, prepaid, and convergence challenges as Bangladesh, alongside <strong>17 World-Class International Disruptors & Tier-1 Altnet Leaders</strong> (USA, UK, France, Malaysia, Singapore, Europe) pioneering 10G symmetrical speeds, Wi-Fi 7, and frictionless digital onboarding.
      </p>
      <div class="hero-pills">
        <div class="hero-pill">☀️ <strong>100% Light Mode Only:</strong> Clean slate canvas (#F8FAFC) & high-contrast typography</div>
        <div class="hero-pill">🔤 <strong>Inter Font Exclusively:</strong> Strictly standardized across all research views</div>
        <div class="hero-pill">🛡️ <strong>Zero Dead Links:</strong> Every single URL audited, verified live, and responsive</div>
        <div class="hero-pill">📸 <strong>Full-Page Lightbox:</strong> Header-to-footer screenshot audit with auto cookie dismissal</div>
      </div>
    </div>
  </section>

  <!-- Main Catalog Content -->
  <main class="container">

    <!-- Control Toolbar -->
    <div class="toolbar-section">
      <div class="toolbar-top">
        <div class="search-box">
          <span class="search-icon">🔍</span>
          <input type="text" id="searchInput" class="search-input" placeholder="Search by ISP name, country, feature, speed, or tag...">
        </div>
        <div class="filter-tabs" id="categoryTabs">
          <button class="tab-btn active" data-filter="all">All Benchmarks <span class="badge" id="countAll">34</span></button>
          <button class="tab-btn" data-filter="emerging">🌏 Emerging Market Leaders <span class="badge" id="countEmerging">17</span></button>
          <button class="tab-btn" data-filter="global">🌍 Global World-Class Leaders <span class="badge" id="countGlobal">17</span></button>
        </div>
      </div>

      <div class="toolbar-subline">
        <div class="tag-filters" id="tagFilters">
          <span style="font-weight: 600; font-size: 12px; margin-right: 4px;">Strategic Filters:</span>
          <button class="tag-chip" data-tag="OTT Bundle">🎁 OTT Bundles</button>
          <button class="tag-chip" data-tag="Wi-Fi 7">⚡ Wi-Fi 7 / Multi-Gig</button>
          <button class="tag-chip" data-tag="Gaming">🎮 Gaming & Low-Latency</button>
          <button class="tag-chip" data-tag="Prepaid">💳 Prepaid & Sachet Fiber</button>
          <button class="tag-chip" data-tag="Convergence">🔄 Fixed-Mobile Convergence</button>
          <button class="tag-chip" data-tag="B2B">💼 B2B & Enterprise</button>
        </div>
        <div id="resultsCount">Showing 34 of 34 competitors</div>
      </div>
    </div>

    <!-- Competitor Cards Grid -->
    <div class="competitor-grid" id="competitorGrid">
      <!-- Injected via JavaScript -->
    </div>

    <!-- Synthesis & Key Takeaways Section -->
    <section class="insights-section">
      <h3 style="font-size: 22px; font-weight: 800; color: var(--text-primary); margin-bottom: 8px;">
        Strategic Synthesis: What Link3 Must Learn from the World's Best ISPs
      </h3>
      <p style="font-size: 14px; color: var(--text-secondary); max-width: 1000px; line-height: 1.6;">
        Comparing 17 high-density emerging market leaders with 17 world-class global altnets reveals clear evolutionary patterns Link3 Technologies Ltd. must incorporate into its next-generation portal.
      </p>

      <div class="insights-grid">
        <div class="insight-card">
          <h4>🌏 1. The Emerging Market Playbook (Jio, Airtel, Globe, Converge)</h4>
          <p>
            In high-density markets like India, Indonesia, and the Philippines, top ISPs win through <strong>entertainment bundling (OTT aggregators)</strong>, <strong>sachet prepaid reloads</strong> (no long-term lock-in), and <strong>instant WhatsApp self-care</strong>. Broadband is no longer sold as raw megabits; it is sold as a gateway to 14+ streaming apps and smart home security.
          </p>
        </div>
        <div class="insight-card">
          <h4>🌍 2. The Global Altnet Disruptor Playbook (Google Fiber, Sonic, Freebox, TIME)</h4>
          <p>
            World-class innovators eliminate promotional pricing tricks, data caps, and hidden equipment fees. Sonic offers <strong>single-tier 10G symmetrical for $49.99</strong>; Freebox bundles Wi-Fi 7 with all streaming services; Google Fiber features a 4-card flat price checkout. <strong>Radical simplicity and transparency</strong> generate the highest customer loyalty and lowest acquisition costs.
          </p>
        </div>
        <div class="insight-card">
          <h4>🚀 3. Direct Roadmap for Link3's Web Experience</h4>
          <p>
            Link3 should deploy: <strong>(A)</strong> A 1-click address/building availability checker directly in the hero banner; <strong>(B)</strong> Transparent symmetrical plan cards with embedded OTT streaming perks (Chorki, Hoichoi, Toffee); <strong>(C)</strong> 4G failover backup router options for high-ARPU households and SMEs; <strong>(D)</strong> 100% Light Mode UI built on Figtree & Inter.
          </p>
        </div>
      </div>
    </section>

  </main>

  <!-- Lightbox Modal for Full-Page Screenshots -->
  <div class="modal-backdrop" id="imageModal" tabindex="-1">
    <div class="modal-container">
      <div class="modal-header">
        <div class="modal-header-info">
          <h2 id="modalTitle">Competitor Name</h2>
          <p id="modalMeta">Country &bull; URL &bull; Speed</p>
        </div>
        <div class="modal-toolbar">
          <button class="zoom-btn" onclick="setZoom(750)">Standard View</button>
          <button class="zoom-btn" onclick="setZoom(1000)">Full Width</button>
          <button class="zoom-btn" onclick="setZoom(1300)">Zoom 130%</button>
          <button class="modal-close-btn" onclick="closeModal()">✕</button>
        </div>
      </div>
      <div class="modal-body" id="modalScrollArea">
        <div class="modal-image-wrapper" id="modalImageWrapper">
          <img id="modalImg" src="" alt="Full-Page Competitor Screenshot">
        </div>
      </div>
      <div class="modal-footer">
        <button class="nav-arrow-btn" onclick="navigateCompetitor(-1)">← Previous</button>
        <span id="modalCounter">1 of 34</span>
        <a id="modalVisitLink" href="#" target="_blank" rel="noopener" class="btn-external" style="padding: 6px 12px; font-size: 12px;">Visit Live Site ↗</a>
        <button class="nav-arrow-btn" onclick="navigateCompetitor(1)">Next →</button>
      </div>
    </div>
  </div>

  <script>
    const competitors = ${JSON.stringify(COMPETITORS, null, 2)};

    let currentFilter = 'all';
    let currentTag = null;
    let searchQuery = '';
    let currentModalIndex = 0;

    const grid = document.getElementById('competitorGrid');
    const searchInput = document.getElementById('searchInput');
    const categoryTabs = document.getElementById('categoryTabs');
    const tagFilters = document.getElementById('tagFilters');
    const resultsCount = document.getElementById('resultsCount');

    // Render Competitor Cards
    function renderCards() {
      const filtered = competitors.filter(c => {
        // Category filter
        if (currentFilter !== 'all' && c.category !== currentFilter) return false;
        
        // Tag filter
        if (currentTag && !c.tags.some(t => t.toLowerCase().includes(currentTag.toLowerCase()))) return false;

        // Search query
        if (searchQuery) {
          const q = searchQuery.toLowerCase();
          const matchName = c.name.toLowerCase().includes(q);
          const matchCountry = c.country.toLowerCase().includes(q);
          const matchUrl = c.url.toLowerCase().includes(q);
          const matchTakeaway = c.strategicTakeaway.toLowerCase().includes(q);
          const matchTags = c.tags.some(t => t.toLowerCase().includes(q));
          if (!matchName && !matchCountry && !matchUrl && !matchTakeaway && !matchTags) return false;
        }

        return true;
      });

      resultsCount.textContent = \`Showing \${filtered.length} of \${competitors.length} competitors\`;

      if (filtered.length === 0) {
        grid.innerHTML = \`
          <div style="grid-column: 1 / -1; padding: 60px 20px; text-align: center; background: #FFFFFF; border-radius: 14px; border: 1px dashed #CBD5E1;">
            <p style="font-size: 18px; font-weight: 700; color: var(--text-primary); margin-bottom: 8px;">No competitors match your filter</p>
            <p style="font-size: 14px; color: var(--text-muted); margin-bottom: 16px;">Try clearing search keywords or selecting 'All Benchmarks'.</p>
            <button class="tab-btn" onclick="resetFilters()">Reset All Filters</button>
          </div>
        \`;
        return;
      }

      grid.innerHTML = filtered.map(c => {
        const isEmerging = c.category === 'emerging';
        const tagClass = isEmerging ? 'tag-emerging' : 'tag-global';
        const screenshotPath = \`screenshots/\${c.slug}.png\`;

        return \`
          <article class="comp-card" data-id="\${c.id}">
            <!-- Media Preview with Auto-Scroll on Hover -->
            <div class="card-media-wrapper" onclick="openModalById('\${c.id}')">
              <span class="media-overlay-badge">\${c.flag} \${c.country}</span>
              <span class="media-overlay-speed">\${c.speedTier}</span>
              <div class="card-media-scroll">
                <img src="\${screenshotPath}" alt="\${c.name} website preview" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&auto=format&fit=crop&q=80';">
              </div>
              <div class="media-hover-hint">Hover to scroll page &bull; Click to inspect</div>
            </div>

            <!-- Card Body -->
            <div class="card-body">
              <div class="card-header-line">
                <div class="card-title-group">
                  <h3>\${c.name}</h3>
                </div>
                <span class="category-tag \${tagClass}">\${isEmerging ? 'Emerging Market' : 'Global Leader'}</span>
              </div>

              <div class="card-pricing-model">\${c.pricingModel}</div>

              <div class="card-takeaway">
                <strong>Strategic Takeaway:</strong> \${c.strategicTakeaway}
              </div>

              <ul class="card-features-list">
                \${c.keyFeatures.slice(0, 3).map(f => \`<li>\${f}</li>\`).join('')}
              </ul>

              <div class="card-tags">
                \${c.tags.map(t => \`<span class="card-tag-pill">\${t}</span>\`).join('')}
              </div>

              <!-- Footer Actions -->
              <div class="card-footer-actions">
                <button class="btn-inspect" onclick="openModalById('\${c.id}')">
                  🔍 Inspect Full Page
                </button>
                <a href="\${c.url}" target="_blank" rel="noopener" class="btn-external">
                  Live Site ↗
                </a>
              </div>
            </div>
          </article>
        \`;
      }).join('');
    }

    // Reset filters
    function resetFilters() {
      currentFilter = 'all';
      currentTag = null;
      searchQuery = '';
      searchInput.value = '';
      updateTabUI();
      updateTagUI();
      renderCards();
    }

    function updateTabUI() {
      document.querySelectorAll('#categoryTabs .tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === currentFilter);
      });
    }

    function updateTagUI() {
      document.querySelectorAll('#tagFilters .tag-chip').forEach(chip => {
        chip.classList.toggle('active', chip.dataset.tag === currentTag);
      });
    }

    // Search Input Listener
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      renderCards();
    });

    // Category Tabs Listener
    categoryTabs.addEventListener('click', (e) => {
      const btn = e.target.closest('.tab-btn');
      if (!btn) return;
      currentFilter = btn.dataset.filter;
      updateTabUI();
      renderCards();
    });

    // Tag Filters Listener
    tagFilters.addEventListener('click', (e) => {
      const chip = e.target.closest('.tag-chip');
      if (!chip) return;
      const tag = chip.dataset.tag;
      currentTag = currentTag === tag ? null : tag;
      updateTagUI();
      renderCards();
    });

    // Lightbox Modal Logic
    const modal = document.getElementById('imageModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalMeta = document.getElementById('modalMeta');
    const modalImg = document.getElementById('modalImg');
    const modalCounter = document.getElementById('modalCounter');
    const modalVisitLink = document.getElementById('modalVisitLink');
    const modalImageWrapper = document.getElementById('modalImageWrapper');
    const modalScrollArea = document.getElementById('modalScrollArea');

    function openModalById(id) {
      const idx = competitors.findIndex(c => c.id === id);
      if (idx !== -1) {
        currentModalIndex = idx;
        loadModalData();
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    }

    function loadModalData() {
      const c = competitors[currentModalIndex];
      modalTitle.innerHTML = \`\${c.flag} \${c.name} <span style="font-size:12px; font-weight:600; color:var(--text-muted);">(\${c.country})</span>\`;
      modalMeta.textContent = \`Speed: \${c.speedTier} | Model: \${c.pricingModel} | Population: \${c.population}\`;
      modalImg.src = \`screenshots/\${c.slug}.png\`;
      modalCounter.textContent = \`\${currentModalIndex + 1} of \${competitors.length}\`;
      modalVisitLink.href = c.url;
      modalScrollArea.scrollTop = 0;
    }

    function closeModal() {
      modal.classList.remove('open');
      document.body.style.overflow = 'auto';
    }

    function navigateCompetitor(delta) {
      currentModalIndex = (currentModalIndex + delta + competitors.length) % competitors.length;
      loadModalData();
    }

    function setZoom(widthPx) {
      modalImageWrapper.style.maxWidth = widthPx + 'px';
    }

    // Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
      if (!modal.classList.contains('open')) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') navigateCompetitor(1);
      if (e.key === 'ArrowLeft') navigateCompetitor(-1);
    });

    // Close on backdrop click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    // Initial Render
    renderCards();
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, '02_competitor_visual_moodboard.html'), html);
console.log('Successfully generated research/06-moodboards/02_competitor_visual_moodboard.html');
