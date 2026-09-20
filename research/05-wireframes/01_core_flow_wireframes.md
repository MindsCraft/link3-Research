# Link3 Structural Wireframes, Layout Blueprints & Responsive Interaction Flows
## Low-to-Mid Fidelity Architectural Blueprints for Desktop & Mobile Web Experience

**Document Code:** `05-WIRE-CORE-01`  
**Date:** September 2026  
**Synthesized From:**  
- `01-benchmarks` (50 Competitor Analysis + Strategic Blueprint v1.1)  
- `02-personas` (5 Deep Archetypes + Full 6-Stage Journey Maps)  
- `03-audits` (Current-State Heuristic Evaluation v1.1 & NN/g Gap Analysis)  
- `04-insights` (14 Core Architectural UX Decisions & Component Specifications v1.1)  

---

## 1. Global Viewport & Responsive Layout Grid

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                 VIEWPORT BREAKPOINT STANDARDS                          │
├───────────────────────┬───────────────────────┬────────────────────────────────────────┤
│ BREAKPOINT            │ CONTAINER WIDTH       │ GRID / LAYOUT ARCHITECTURE             │
├───────────────────────┼───────────────────────┼────────────────────────────────────────┤
│ **Mobile (xs/sm)**    │ 360px – 480px (Fluid) │ Single-column vertical thumb flow      │
│ **Tablet (md)**       │ 768px – 1024px        │ 2-column adaptive layout               │
│ **Desktop (lg/xl)**   │ 1280px (Max Container)│ 12-column CSS Grid (Gap: 24px)         │
│ **Ultra-Wide (2xl)**  │ 1440px+ (Centered)    │ Max container 1280px with dark margins │
└───────────────────────┴───────────────────────┴────────────────────────────────────────┘
```

---

## 2. Wireframe 1: Global Navigation & SegmentBar Architecture

### Desktop Header Layout (1280px Grid)

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ [SEGMENT BAR]                                                                                          │
│  ● Residential   ○ Enterprise   │  🟢 BDIX Pulse: 1.8ms  │  📍 Check Coverage  │  ⚡ Quick Pay  │ Self Care ↗ │
├────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ [MAIN NAVBAR]                                                                                          │
│  [LINK3 LOGO]   Home Plans   FTTR Fibre   Gaming Hub   Bundles   Devices   Support   │  [Get Connected]│
└────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### Mobile Header & Drawer Layout (390px Viewport)

```
┌─────────────────────────────────────────────────┐
│ [LINK3 LOGO]      🟢 1.8ms     [⚡ Pay]  [ ☰ Menu ] │
├─────────────────────────────────────────────────┤
│ [SEGMENT CHIP SWITCHER]                         │
│  [  ● Residential  ]    [  ○ Enterprise  ]      │
└─────────────────────────────────────────────────┘

[MOBILE DRAWER EXPANDED]
┌─────────────────────────────────────────────────┐
│ ✕ Close Drawer                    [LINK3 LOGO]  │
├─────────────────────────────────────────────────┤
│ • Home Broadband Plans                          │
│ • FTTR (Fibre-to-the-Room)                      │
│ • Gaming & Low-Latency Zone                     │
│ • "Build Your Bundle" Configurator              │
│ • EasyPay Hardware Marketplace                  │
│ • Live Network Pulse (/network)                 │
│ • Self-Care Portal & WhatsApp Support           │
├─────────────────────────────────────────────────┤
│ [ ⚡ 1-Click Quick Recharge ]                    │
│ [ 🚀 Check Building Coverage & Order ]          │
└─────────────────────────────────────────────────┘
```

---

## 3. Wireframe 2: Dual-Intent Homepage Hero & Conversion Hub

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ HERO SECTION (Desktop View)                                                                            │
├───────────────────────────────────────────────────┬────────────────────────────────────────────────────┤
│                                                   │ [DUAL-INTENT CONVERSION CARD]                      │
│ ⚡ BANGLADESH'S PURE GLASS NETWORK                │ ┌────────────────────────────────────────────────┐ │
│                                                   │ │ [ Tab 1: Get New Connection ] [ Tab 2: Quick Pay]│ │
│ Gigabit Optical Fibre                             │ ├────────────────────────────────────────────────┤ │
│ Delivered Room-by-Room.                           │ │                                                │ │
│                                                   │ │ 📍 Check Building Fiber Coverage:              │ │
│ Experience zero-dead-zone whole-home FTTR,        │ │ ┌────────────────────────────────────────────┐ │ │
│ 2ms national BDIX gaming, and 0% interest         │ │ │ Search: Road 4, Sector 4, Uttara, Dhaka    │ │ │
│ Smart TV financing on a single monthly bill.      │ │ └────────────────────────────────────────────┘ │ │
│                                                   │ │                                                │ │
│ [ 🚀 Explore Lifestyle Bundles ]  [ ⚡ Test Ping ] │ │ 🟢 Great news! Sector 4 is 100% FTTR Ready.    │ │
│                                                   │ │                                                │ │
│ ┌───────────────────────────────────────────────┐ │ │ Popular in your area:                          │ │
│ │ LIVE NETWORK PULSE:                           │ │ │ • Link3 Home (100 Mbps) — ৳1,000/mo (All-In)   │ │
│ │ BDIX: 1.8ms  │ AWS SG: 26ms │ Riot SG: 31ms   │ │ │ • Link3 Prime (200 Mbps) — ৳1,500/mo           │ │
│ └───────────────────────────────────────────────┘ │ │                                                │ │
│                                                   │ │ [ Check Exact Building Slot & Pricing → ]      │ │
│                                                   │ └────────────────────────────────────────────────┘ │
└───────────────────────────────────────────────────┴────────────────────────────────────────────────────┘
```

### Mobile Layout (390px Viewport — Conversion-First Single Column)

```
┌─────────────────────────────────────────────────┐
│ [DUAL-INTENT CONVERSION CARD — Above the Fold]  │
│ ┌─────────────────────────────────────────────┐ │
│ │ [ Get Connection ] │ [ ⚡ Quick Pay ]        │ │
│ ├─────────────────────────────────────────────┤ │
│ │ 📍 Check Building Fiber Coverage:           │ │
│ │ ┌─────────────────────────────────────────┐ │ │
│ │ │ Search: Road 4, Sector 4, Uttara...   │ │ │
│ │ └─────────────────────────────────────────┘ │ │
│ │ 🟢 Sector 4 is 100% FTTR Ready.            │ │
│ │ • Home (100 Mbps) — ৳1,000/mo              │ │
│ │ • Prime (200 Mbps) — ৳1,500/mo             │ │
│ │ [ Check Exact Slot & Pricing → ]            │ │
│ └─────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────┤
│ ⚡ BANGLADESH'S PURE GLASS NETWORK              │
│ Gigabit Optical Fibre. Room-by-Room.            │
│ [Explore Bundles] [Test Ping]                   │
├─────────────────────────────────────────────────┤
│ LIVE PULSE:  BDIX: 1.8ms │ AWS SG: 26ms        │
└─────────────────────────────────────────────────┘
```

> **Layout rationale:** On mobile, the conversion card (address check / quick pay) is placed *above* the editorial headline. 78% of mobile visitors have purchase intent — the conversion gate must be the first interactive element in the thumb zone.

---

## 4. Wireframe 3: Lifestyle Plan Selector (`/home`)

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ LIFESTYLE BROADBAND PLANS (100% All-Inclusive Transparent Pricing — 15% VAT Included)                  │
├───────────────────┬───────────────────┬───────────────────┬───────────────────┬────────────────────────┤
│ LINK3 LITE        │ LINK3 HOME        │ LINK3 PRIME (Hero)│ LINK3 ULTRA       │ LINK3 MAX              │
│ For Students & 1-2│ Modern 4-Person   │ Symmetrical WFH & │ Esports Gamers &  │ Multi-Device Luxury    │
│ Single Users      │ Family Household  │ Power Creators    │ 4K Streamers      │ Smart Villas           │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┼────────────────────────┤
│ 60 Mbps           │ 100 Mbps          │ 200 Mbps          │ 500 Mbps          │ 1 Gbps (1,000 Mbps)    │
│ Symmetrical Optical│ Symmetrical Optical│ True Symmetrical  │ Tri-Band Wi-Fi 6E │ Wi-Fi 6E+ (Wi-Fi 7 Future-Ready) │
│ 1–3 Devices       │ 4–8 Devices (4K)  │ 8–12 Devices (4K) │ 12+ Devices (UDP) │ Unlimited Concurrency  │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┼────────────────────────┤
│ ৳650 / month      │ ৳1,000 / month    │ ৳1,500 / month    │ ৳2,500 / month    │ ৳4,000 / month         │
│ All-In (Incl. VAT)│ All-In (Incl. VAT)│ All-In (Incl. VAT)│ All-In (Incl. VAT)│ All-In (Incl. VAT)     │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┼────────────────────────┤
│ • Wi-Fi 5/6 Router│ • Gigabit Gateway │ • Wi-Fi 6 Mesh (1)│ • Wi-Fi 6E Gaming │ • Full FTTR Multi-Room │
│ • BDIX 100 Mbps   │ • FTTR Opt: +৳400 │ • Symmetrical Up  │ • Free Static IP  │ • VIP 24/7 Concierge   │
│ • Standard Care   │ • Deshi OTT Ready │ • CloudVault 500GB│ • 26ms SG Routing │ • 0ms Living Room Hub  │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┼────────────────────────┤
│ [ Select Lite ]   │ [ Select Home ]   │ [ 🌟 Choose Prime]│ [ Select Ultra ]  │ [ Select Max ]         │
└───────────────────┴───────────────────┴───────────────────┴───────────────────┴────────────────────────┘
```

### Mobile Layout (390px Viewport — Horizontal Carousel)

```
┌─────────────────────────────────────────────────┐
│ BROADBAND PLANS                                 │
│ (Swipe to explore →)              [2 / 5]       │
├─────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────┐ │
│ │ ★ LINK3 PRIME          [Most Popular]       │ │
│ │ 200 Mbps Symmetrical                        │ │
│ │ Remote Work & Power Families                │ │
│ │ 8–12 Devices (4K Streaming)                 │ │
│ ├─────────────────────────────────────────────┤ │
│ │ ৳1,500 / month (All-In, 15% VAT Incl.)      │ │
│ ├─────────────────────────────────────────────┤ │
│ │ • Wi-Fi 6 Mesh (1 Node)                     │ │
│ │ • True Symmetrical Upload                   │ │
│ │ • CloudVault 500GB Backup                   │ │
│ │ • FTTR Add-on: +৳350/mo                     │ │
│ ├─────────────────────────────────────────────┤ │
│ │ [ 🌟 Choose Prime Plan ]                    │ │
│ └─────────────────────────────────────────────┘ │
│  ◀ [ Lite ৳650 ]  [ Home ৳1,000 ]  [ Ultra ৳2,500 ] ▶ │
└─────────────────────────────────────────────────┘
```

> **Layout rationale:** Five side-by-side plan columns cannot render legibly on 390px. The horizontal swipe carousel presents one card at a time with the adjacent tier pricing visible as a "peek" on the left/right edges, maintaining tier comparison context while enabling full card detail.

---

## 5. Wireframe 4: 3-Step "Build Your Bundle" Configurator (`/bundles`)

### Desktop Layout (1280px Viewport)

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ "BUILD YOUR BUNDLE" INTERACTIVE CONFIGURATOR                                                           │
├───────────────────────────────────────────────────────────────────┬────────────────────────────────────┤
│ CONFIGURATOR FUNNEL (Step 1 of 3)                                 │ LIVE BUNDLE SUMMARY (Sticky Sheet) │
│                                                                   │ ┌────────────────────────────────┐ │
│ STEP 1: CHOOSE SPEED TIER                                         │ │ YOUR CUSTOM BUNDLE             │ │
│ [ 60M - ৳650 ]  [ ● 100M - ৳1,000 ]  [ 200M - ৳1,500 ]  [ 500M ]  │ ├────────────────────────────────┤ │
│                                                                   │ │ • Link3 Home (100 Mbps) ৳1,000 │ │
│ STEP 2: ADD EASYPAY HARDWARE (0% Interest / 24-Mo Installment)    │ │ • 55" 4K Smart TV       +৳850  │ │
│ ┌───────────────┐ ┌───────────────┐ ┌───────────────┐             │ │ • Wi-Fi 6 Mesh (2-Pack) +৳320  │ │
│ │ [x] 55" 4K TV │ │ [x] Mesh Kit  │ │ [ ] PS5 Slim  │             │ │ • Deshi OTT Pack        +৳99   │ │
│ │ Samsung UHD   │ │ TP-Link Deco  │ │ Sony BD Auth  │             │ ├────────────────────────────────┤ │
│ │ +৳850/mo      │ │ +৳320/mo      │ │ +৳2,850/mo    │             │ │ Standalone Price:       ৳2,549 │ │
│ └───────────────┘ └───────────────┘ └───────────────┘             │ │ Bundle Discount:        -৳280  │ │
│                                                                   │ ├────────────────────────────────┤ │
│ STEP 3: SELECT ENTERTAINMENT & OTT PACKS                          │ │ TOTAL MONTHLY:                 │ │
│ [x] Deshi Pack (Chorki + Hoichoi + Toffee) — +৳99/mo              │ │ ৳ 2,269 / mo                   │ │
│ [ ] Global Streamer (SonyLIV + Lionsgate + YouTube) — +৳199/mo    │ │ (Includes 15% Govt VAT)        │ │
│                                                                   │ │                                │ │
│ ┌───────────────────────────────────────────────────────────────┐ │ │ 🟢 YOU SAVE ৳380/MO           │ │
│ │ ➕ POST-SELECTION ADD-ONS (Expandable Drawer)                  │ │ │                                │ │
│ │ [ ] SmartCam Cloud Vault (+৳160/mo)  [ ] Parental Shield (+৳75)│ │ │ [ 🚀 Proceed to Address → ]   │ │
│ └───────────────────────────────────────────────────────────────┘ │ └────────────────────────────────┘ │
└───────────────────────────────────────────────────────────────────┴────────────────────────────────────┘
```

### Mobile Layout (390px Viewport — Thumb Zone Sticky Sheet)

```
┌─────────────────────────────────────────────────┐
│ BUILD YOUR BUNDLE                      Step 2/3 │
├─────────────────────────────────────────────────┤
│ 1. SPEED: [ 60M ] [ ● 100M ৳1,000 ] [ 200M ]   │
├─────────────────────────────────────────────────┤
│ 2. EASYPAY HARDWARE (Swipe Cards →)             │
│ ┌──────────────────────┐ ┌────────────────────┐ │
│ │ [x] 55" 4K Smart TV  │ │ [x] Mesh 2-Pack    │ │
│ │ Samsung UHD          │ │ TP-Link Deco       │ │
│ │ +৳850 / month        │ │ +৳320 / month      │ │
│ └──────────────────────┘ └────────────────────┘ │
├─────────────────────────────────────────────────┤
│ 3. OTT PACKS                                    │
│ [x] Deshi Pack (Chorki + Hoichoi + Toffee)      │
│     +৳99/mo                                     │
│ [ ] Global Streamer (SonyLIV + Lionsgate + YT)  │
│     +৳199/mo                                    │
│ [ ] All-Access Mega Pack (All OTT) +৳249/mo     │
├─────────────────────────────────────────────────┤
│ [➕ Protection Add-ons (SmartCam / Shield) ▼]   │
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│ [STICKY MOBILE BOTTOM BAR]                      │
│ Total: ৳2,269/mo (Save ৳380)                    │
│ [ 🚀 Complete Bundle (2/3) → ]                  │
└─────────────────────────────────────────────────┘
```

---

## 6. Wireframe 5: Interactive 3D FTTR Visualizer (`/home/fttr`)

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ INTERACTIVE 3D FTTR (FIBRE-TO-THE-ROOM) VISUALIZER                                                     │
├────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ [ 3D ISOMETRIC APARTMENT CUTAWAY ]                                                                     │
│                                                                                                        │
│    ┌─────────────────────────┐               ┌─────────────────────────┐                               │
│    │ MASTER BEDROOM          │               │ LIVING ROOM (Hub)       │                               │
│    │ 🟢 940 Mbps Symmetrical │═══════════════│ 🟢 Master Optical ONT   │                               │
│    │ • Sub-ONT Baseboard Unit│ (Micro-Glass) │ • 55" 4K Smart TV (0ms) │                               │
│    └─────────────────────────┘               └───────────┬─────────────┘                               │
│                                                          │ (Invisible Baseboard Fiber)                 │
│                                                          │                                             │
│                                              ┌───────────┴─────────────┐                               │
│                                              │ KIDS' STUDY ROOM        │                               │
│                                              │ 🟢 935 Mbps Sub-ONT     │                               │
│                                              │ • Parental Shield Active│                               │
│                                              └─────────────────────────┘                               │
│                                                                                                        │
│ 🔘 Click rooms to view live speed dials, signal integrity, and micro-fiber routing.                    │
├────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ FTTR COVERAGE & FALLBACK LOGIC:                                                                        │
│ • If building is FTTR Ready: Full Optical Kit (৳400/mo) installed by certified specialist.             │
│ • If building is standard FTTH: Intelligent substitution to Wi-Fi 6 Mesh 2-Pack (+৳320/mo).            │
└────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 7. Wireframe 6: Gamer Low-Latency Hub (`/home/gaming`)

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ LINK3 GAME ZONE — REAL-TIME PEERING TELEMETRY & GAMING ACCELERATION                                    │
├───────────────────────────────────────────────────┬────────────────────────────────────────────────────┤
│ LIVE SERVER LATENCY MATRIX (Updated every 5s)     │ GAMING BOOSTER PACK (৳99 / Month)                  │
│                                                   │ ┌────────────────────────────────────────────────┐ │
│ 🟢 National BDIX Peering:           1.6 ms (0% PL)│ │ [x] Prioritized UDP Gaming Packet Routing      │ │
│ 🟢 Singapore AWS (ap-southeast-1): 25.8 ms        │ │ [x] 1 Free Public Static IPv4 Address Included │ │
│ 🟢 Riot Valorant SG Server:        29.4 ms        │ │ [x] Unlocked Open NAT for PlayStation / PC     │ │
│ 🟢 Valve Steam Singapore:          31.2 ms        │ │ [x] Direct BDIX Game Patching Server (100 Mbps)│ │
│ 🟢 Mumbai AWS / Riot India:        26.1 ms        │ ├────────────────────────────────────────────────┤ │
│ 🟢 Cloudflare DNS:                  1.1 ms        │ │ Add to Plan:                                   │ │
│                                                   │ │ • Link3 Ultra Gamer Plan (500M) — ৳2,500/mo    │ │
│ 📊 Jitter Over Last 24 Hours: 0.4ms Flat          │ │ • Gaming Booster Pack — +৳99/mo                │ │
│ 🛡️ BGP Anti-DDoS Game Shield: ACTIVE             │ ├────────────────────────────────────────────────┤ │
│                                                   │ │ [ 🎮 Activate Gaming Package & Static IP ]      │ │
│                                                   │ └────────────────────────────────────────────────┘ │
└───────────────────────────────────────────────────┴────────────────────────────────────────────────────┘
```

### Mobile Layout (390px Viewport — Shakib's Thumb Zone)

```
┌─────────────────────────────────────────────────┐
│ 🎮 LINK3 GAME ZONE                              │
├─────────────────────────────────────────────────┤
│ LIVE SERVER LATENCY                             │
│ 🟢 National BDIX:        1.6 ms (0% Packet Loss)│
│ 🟢 Singapore AWS:       25.8 ms                 │
│ 🟢 Riot Valorant SG:    29.4 ms                 │
│ 🟢 Valve Steam SG:      31.2 ms                 │
│ 🟢 Mumbai / Riot India: 26.1 ms                 │
│ 🟢 Cloudflare DNS:       1.1 ms                 │
├─────────────────────────────────────────────────┤
│ 📊 Jitter (24h): 0.4ms Flat                     │
│ 🛡️ BGP Anti-DDoS Shield: ACTIVE               │
├─────────────────────────────────────────────────┤
│ GAMING BOOSTER PACK — ৳99/mo                    │
│ [x] UDP QoS Prioritization                      │
│ [x] 1 Free Public Static IPv4                   │
│ [x] Open NAT (PS5 / PC)                         │
│ [x] BDIX Game Patch Server (100 Mbps)           │
├─────────────────────────────────────────────────┤
│ [ 🎮 ACTIVATE GAMING PACKAGE → ]                │
│   Link3 Ultra (500M) ৳2,500 + Booster ৳99      │
└─────────────────────────────────────────────────┘
```

> **Layout rationale:** Shakib (21-year-old gamer) primarily browses between sessions on mobile. The latency matrix becomes a compact vertical list with monospaced ping values (`JetBrains Mono`). The Gaming Booster CTA is a large, full-width thumb-accessible button fixed at the bottom.

---

## 8. Wireframe 7: SME "Business Shield" 4G Failover Simulator (`/business/sme`)

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ LINK3 BUSINESS SHIELD — ZERO-DOWNTIME 4G CELLULAR FAILOVER SIMULATOR                                   │
├────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ [ INTERACTIVE FAILOVER STATE SIMULATOR ]                                                               │
│                                                                                                        │
│  [ PRIMARY FIBRE LINK ] ─── 🟢 100 Mbps Active ───┐                                                    │
│                                                   ├───► [ DUAL-WAN ROUTER ] ───► [ RESTAURANT POS 🟢 ] │
│  [ BACKUP 4G LTE SIM ]  ─── 🟡 Standby Ready  ────┘                               [ GUEST WI-FI   🟢 ] │
│                                                                                                        │
│  [ ⚡ SIMULATE STREET ROAD DIGGING / FIBRE CUT ] (Click to test)                                       │
│                                                                                                        │
│  *AFTER CLICKING CUT:*                                                                                 │
│  [ PRIMARY FIBRE LINK ] ─── ❌ SEVERED (0 Mbps) ──┐                                                    │
│                                                   ├───► [ DUAL-WAN ROUTER ] ───► [ RESTAURANT POS 🟢 ] │
│  [ BACKUP 4G LTE SIM ]  ─── 🟢 ACTIVE (1.2s switch)┘                               (Online via 4G LTE) │
│                                                                                                        │
│  *Financial Impact:* POS transactions never drop. Zero revenue lost during Friday dinner rush.        │
├────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ⚠️  DEMO DISCLAIMER: Animation is accelerated for illustration purposes.                               │
│     Actual failover sequence: 15s primary link detection → ~1s traffic handoff to 4G LTE.             │
│     Total real-world failover: under 30 seconds. Financial SLA guaranteed at 99.95% uptime.           │
└────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 9. Wireframe 8: CloudVoice Virtual PBX & IVR Simulator (`/business/sme/cloudvoice`)

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ LINK3 CLOUDVOICE — VIRTUAL IP-PBX INTERACTIVE CALL FLOW SIMULATOR                                      │
├───────────────────────────────────────────────────┬────────────────────────────────────────────────────┤
│ INTERACTIVE PHONE DIAL PAD                        │ VISUAL EXTENSION ROUTING MAP                       │
│ ┌───────────────────────────────────────────────┐ │                                                    │
│ │ CALLING: 096xx-LINK3 (Dhaka Bistro)           │ │ [ INCOMING CALL ]                                  │
│ ├───────────────────────────────────────────────┤ │         │                                          │
│ │ 🔊 Playing Greeting:                          │ │         ▼                                          │
│ │ "Welcome to Dhaka Bistro.                     │ │ ┌────────────────────────────────────────────────┐ │
│ │  Press 1 for Table Reservations               │ │ │ IVR AUTO ATTENDANT (Bilingual Greeting)       │ │
│ │  Press 2 for Home Delivery / Foodpanda        │ │ └───────┬────────────────────┬───────────────────┘ │
│ │  Press 3 for Corporate Catering & Accounts"   │ │         │ [Key 1]            │ [Key 2]             │
│ ├───────────────────────────────────────────────┤ │         ▼                    ▼                     │
│ │ [ 1 ] [ 2 ] [ 3 ]                             │ │ ┌───────────────┐    ┌───────────────────────────┐ │
│ │ [ 4 ] [ 5 ] [ 6 ]                             │ │ │ Ext 101: Host │    │ Ext 102: Delivery Counter │ │
│ │ [ 7 ] [ 8 ] [ 9 ]                             │ │ │ (Manager App) │    │ (Kitchen Tablet)          │ │
│ └───────────────────────────────────────────────┘ │ └───────────────┘    └───────────────────────────┘ │
│                                                   │                                                    │
│ 💡 Click '1' on dial pad to test live audio route!│ [ 📞 Get CloudVoice: 15 Extensions @ ৳1,800/mo ]   │
└───────────────────────────────────────────────────┴────────────────────────────────────────────────────┘
```

---

## 10. Wireframe 9: Enterprise DIA & Clean-Pipe DDoS Scrubber (`/business/enterprise`)

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ ENTERPRISE DEDICATED INTERNET ACCESS (DIA) & CYBERDEFEND DDOS MITIGATION                              │
├───────────────────────────────────────────────────┬────────────────────────────────────────────────────┤
│ CYBERDEFEND REAL-TIME SCRUBBING DEMO              │ ENTERPRISE SLA & DIA ARCHITECT                     │
│                                                   │ ┌────────────────────────────────────────────────┐ │
│ [ 100 Gbps SYN Attack ] ──► [ SCRUBBING CENTER ]  │ │ Select Dedicated Bandwidth:                    │ │
│ (Malicious Traffic Filtered)         │            │ │ [ 100M ]  [ 250M ]  [ ● 500M ]  [ 1 Gbps+ ]    │ │
│                                      ▼            │ ├────────────────────────────────────────────────┤ │
│                             [ 1 Gbps Clean Pipe ] │ │ Redundancy Topology:                           │ │
│                                      │            │ │ [x] Dual-Ring Optical Path (99.95% SLA)        │ │
│                                      ▼            │ │ [x] Direct AWS / Azure Cloud Connect           │ │
│                         [ Customer ERP Data Center]│ │ [x] 24/7 Dedicated NOC & Key Account Manager   │ │
│                                                   │ ├────────────────────────────────────────────────┤ │
│ 🛡️ 0% Packet Loss during volumetric attack.       │ │ [ 📄 Generate Instant RFP PDF Proposal ]       │ │
└───────────────────────────────────────────────────┴────────────────────────────────────────────────────┘
```

---

## 11. Wireframe 10: WhatsApp-First Floating AI Self-Care Widget

```
┌─────────────────────────────────────────────────┐
│ FLOATING SELF-CARE ASSISTANT (Expanded State)   │
├─────────────────────────────────────────────────┤
│ 🟢 Link3 Verified AI Care Assistant             │
│ "Hello Tanvir! How can we assist your line?"    │
├─────────────────────────────────────────────────┤
│ QUICK ACTIONS:                                  │
│ [ ⚡ Run Instant Line & Optical Signal Test ]    │
│ [ 🔄 Reboot Router / Optical Port Remotely ]    │
│ [ 📄 Download Current Tax / VAT Invoice PDF ]   │
│ [ 💳 Quick Bill Pay via bKash ]                 │
│ [ 👨‍💻 Connect to Human Engineer (< 60s) ]       │
├─────────────────────────────────────────────────┤
│ Type a message...                        [ Send]│
└─────────────────────────────────────────────────┘
```

---

## 11. Wireframe 11: Interactive Coverage Map & Lead Capture (`/coverage`)

> **Priority:** P0 (Story L3-005 — Coverage Qualification Gate)

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ LINK3 COVERAGE CHECKER — FIND YOUR BUILDING'S FIBER STATUS                                             │
├────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 📍 Enter Your Building Address:                                                                        │
│ ┌────────────────────────────────────────────────────────────────────────┐  [ Check Coverage Now → ]  │
│ │ Road 4, House 12, Sector 4, Uttara, Dhaka...  (Autocomplete Active)    │                            │
└─┴────────────────────────────────────────────────────────────────────────┴────────────────────────────┘

[STATE A — FTTR READY 🟢]
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ 🟢 GREAT NEWS! Your building is 100% FTTR Optical Ready.                                               │
├───────────────────────────────────────────────────┬────────────────────────────────────────────────────┤
│ [DHAKA METRO MAP — Building Highlighted Green]    │ RECOMMENDED FOR YOUR AREA:                         │
│                                                   │ • Link3 Home (100 Mbps FTTR) — ৳1,000 + ৳400/mo   │
│  [Sector 4 Uttara — 🟢 Full FTTR Coverage]        │ • Link3 Prime (200 Mbps FTTR) — ৳1,500 + ৳350/mo  │
│                                                   │                                                    │
│                                                   │ [ 🚀 Choose a Plan & Book Installation → ]         │
└───────────────────────────────────────────────────┴────────────────────────────────────────────────────┘

[STATE B — STANDARD FTTH (No FTTR) 🟡]
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ 🟡 Your building has Ultra-Fast Fiber — FTTR micro-conduit arriving soon.                              │
│    We've substituted the FTTR kit with a Wi-Fi 6 Mesh 2-Pack for seamless whole-home coverage today.  │
├───────────────────────────────────────────────────┬────────────────────────────────────────────────────┤
│ [DHAKA METRO MAP — Building Highlighted Yellow]   │ AVAILABLE FOR YOUR AREA:                           │
│                                                   │ • Link3 Home (100 Mbps) — ৳1,000/mo All-In        │
│  [Mirpur 10 — 🟡 Standard FTTH, FTTR Coming Q4]  │ • + Wi-Fi 6 Mesh 2-Pack — +৳320/mo (EasyPay)      │
│                                                   │                                                    │
│                                                   │ [ 🚀 Order Standard Fiber Now → ]                  │
└───────────────────────────────────────────────────┴────────────────────────────────────────────────────┘

[STATE C — OUT OF COVERAGE 🔴]
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ 🔴 Link3 fiber is expanding to your area. Register now to be first in line.                            │
├───────────────────────────────────────────────────┬────────────────────────────────────────────────────┤
│ [DHAKA METRO MAP — Building Highlighted Red]      │ SECURE YOUR SPOT — EARLY REGISTRATION:             │
│                                                   │ ┌────────────────────────────────────────────────┐ │
│  [Keraniganj — 🔴 Expansion Q1 2027]              │ │ Name:    [________________]                    │ │
│                                                   │ │ Mobile:  [________________]                    │ │
│                                                   │ │ Email:   [________________]  (optional)        │ │
│                                                   │ ├────────────────────────────────────────────────┤ │
│                                                   │ │ 🎁 Benefit: Lock 50% off installation fee      │ │
│                                                   │ │    + 1 month free Deshi OTT Pack on launch.    │ │
│                                                   │ │ [ Register for Early Access → ]                │ │
│                                                   │ └────────────────────────────────────────────────┘ │
└───────────────────────────────────────────────────┴────────────────────────────────────────────────────┘
```

---

## 12. Deferred Pages — Wireframe Pending (Next Iteration)

The following 4 pages defined in the Next.js URL architecture (`04-insights`, Section 5) do not yet have wireframes. They are deferred to the next design iteration and should be templated from existing wireframes where noted:

| Page | URL | Deferral Reason | Template Source |
|:-----|:----|:----------------|:----------------|
| **Entertainment Hub** | `/home/entertainment` | Content-forward OTT catalog; can be templated from Plan Selector card grid | WF3 (Plan Selector) |
| **B2B Landing** | `/business` | Simple segment-switch landing page routing to SME or Enterprise; minimal unique layout | WF1 (SegmentBar) |
| **Partner API Portal** | `/business/partners` | Developer documentation portal; standard Swagger/Docusaurus template, no custom UX needed | External template |
| **Network Pulse Full Page** | `/network` | Extended version of the homepage hero pulse + gaming latency matrix | WF6 (Gaming Hub) |

---

## 13. Summary of Research Progression & Transition to Production Code

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                   RESEARCH WORKFLOW PROGRESSION                                 │
├───────────────────────────────────┬───────────────────────────────────┬─────────────────────────┤
│ ✅ Phase 1: Benchmarks            │ ✅ Phase 2: Personas              │ ✅ Phase 3: Audits       │
│ • 30 Regional Competitors         │ • 5 Deep Archetypes               │ • 10 NN/g Heuristics    │
│ • 20 Global Disruptors            │ • Empathy Mental Models           │ • ISO 9241-110 Mapping  │
│ • Strategic Blueprint v1.1        │ • End-to-End Journey Maps         │ • P0/P1/P2 Backlog      │
├───────────────────────────────────┼───────────────────────────────────┼─────────────────────────┤
│ ✅ Phase 4: Insights v1.1         │ ✅ Phase 5: Wireframes (THIS DOC) │ 🚀 Phase 6: Code Dev    │
│ • 14 Core Architectural UX Rules  │ • 10 Detailed Wireframe Layouts   │ • Next.js App Router    │
│ • CloudVoice & DDoS Specs         │ • Desktop (1280px) & Mobile Grids │ • Tailwind + Tokens     │
│ • Sprints 1–6 Engineering Backlog │ • Interaction State Machines      │ • Framer Motion Physics │
│ • Analytics & SEO Architecture    │ • Responsive Touch Zones          │ • Atomic UI Components  │
└───────────────────────────────────┴───────────────────────────────────┴─────────────────────────┘
```

*Complete Research Suite Finalized:* The comprehensive research, benchmarking, persona mapping, heuristic auditing, architectural specification, and wireframing suite is complete and ready for production frontend engineering.
