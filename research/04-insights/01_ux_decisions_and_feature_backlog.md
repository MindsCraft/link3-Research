# Link3 UX Architectural Decisions, Component Specifications & Feature Backlog
## Synthesized Blueprint: Moving from UX Research to Frontend Engineering Execution

**Document Code:** `04-INSIGHTS-BACKLOG-01`  
**Version:** 1.1 (Enhanced with CloudVoice Spec, CyberDefend Architecture, WCAG Compliance, Analytics & SEO Standards)  
**Date:** September 2026  
**Synthesized From:**  
- `01-benchmarks` (50 Competitor Analysis + Strategic Blueprint v1.1)  
- `02-personas` (5 Deep Archetypes + Full 6-Stage Journey Maps)  
- `03-audits` (Current-State Heuristic Evaluation v1.1 & NN/g Gap Analysis)  

---

## 1. Executive Synthesis: From Research to Production Architecture

The preceding three research phases demonstrated a clear imperative: **Link3 must transition from an inward-looking, brochure-style ISP website into an atomic, state-driven Digital Experience Platform.**

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                       THE UX CONVERSION ENGINE                                         │
├────────────────────────────────┬───────────────────────────────────────┬───────────────────────────────┤
│ 1. EMOTIONAL VALUE PROPOSITION │ 2. ZERO-FRICTION SALES FUNNEL         │ 3. PERPETUAL RETENTION & CARE │
├────────────────────────────────┼───────────────────────────────────────┼───────────────────────────────┤
│ • Lifestyle Tiers (Home/Gamer) │ • 3-Step "Build Your Bundle"          │ • Homepage 1-Click Recharge   │
│ • Interactive 3D FTTR Cutaway  │ • Instant Address Pre-Qualification   │ • Live Network Pulse (2ms)    │
│ • Business Shield 4G Failover  │ • Transparent All-In Pricing (15% VAT)│ • WhatsApp-First AI Care      │
│ • CloudVoice IVR Simulator     │ • CyberDefend DDoS Clean-Pipe Demo    │ • NBR VAT Challan Invoicing   │
└────────────────────────────────┴───────────────────────────────────────┴───────────────────────────────┘
```

---

## 2. Design System Tokens & Brand Foundations

To ensure world-class visual distinction while adhering strictly to project design constraints, the Link3 web experience is built on the following tokens:

### 2.1 — Color System (Dark-First Foundation & WCAG 2.1 AA Compliance)

```css
:root {
  /* Surface Foundations */
  --surface-obsidian: #080C14;    /* Primary background foundation */
  --surface-card:     #0F172A;    /* Primary card & container surface */
  --surface-card-hover: #1E293B;  /* Interactive elevated state */
  --surface-border:   rgba(255, 255, 255, 0.08);

  /* Brand Accents */
  --brand-primary:    #0052FF;    /* Link3 Core Electric Blue */
  --brand-cyan:       #00F0FF;    /* Dynamic Tech Accent & Glowing Badges */
  --brand-glow:       rgba(0, 240, 255, 0.15);

  /* Semantic Feedback */
  --status-live:      #10B981;    /* Live BDIX Peering / 99.95% Green */
  --status-warning:   #F59E0B;    /* Maintenance alert / Peak warning */
  --status-error:     #EF4444;    /* Fiber cut / Failover active */
  
  /* Text Contrast Hierarchy (Calibrated for WCAG AA >= 4.5:1 on Dark Surfaces) */
  --text-primary:     #F8FAFC;    /* 17.5:1 ratio on Obsidian (Display & Headings) */
  --text-secondary:   #94A3B8;    /* 6.7:1 ratio on Obsidian (Body & Explanatory copy) */
  --text-muted:       #8FA0B8;    /* 5.2:1 ratio on Obsidian / 4.5:1 on Card (Sub-labels) */
}
```

> [!NOTE]
> **WCAG AA Compliance Rule:** `--text-muted` is calibrated to `#8FA0B8` to maintain strict $\ge 4.5:1$ contrast against both `--surface-obsidian` and `--surface-card`. Essential informational copy, legal terms, and pricing disclaimers must strictly use `--text-secondary` or `--text-primary`.

### 2.2 — Typography Hierarchy

> [!IMPORTANT]
> **Typography Token Rules:** Standard generic fonts (`Inter`, `Roboto`, `Arial`, `Space Grotesk`) are **strictly prohibited** in primary UI components. The system uses a tailored pairing optimized for Bangladeshi high-DPI screens and Bengali Unicode script rendering.

| Role | Font Family | Weight Range | Usage Scenario |
|:-----|:------------|:-------------|:---------------|
| **Display & Editorial** | `Outfit`, sans-serif | SemiBold (600), Bold (700) | Hero headlines, section titles, major value propositions |
| **Interface & Body** | `Plus Jakarta Sans`, sans-serif | Regular (400), Medium (500) | Card copy, form inputs, button labels, navigation links |
| **Telemetry & Numeral Mono** | `JetBrains Mono`, monospace | Medium (500), Bold (700) | Live BDIX ping counters (2ms), pricing odometers, IP configs |

### 2.3 — Motion & Physics System (Framer Motion)

```typescript
export const springTransition = {
  type: "spring",
  stiffness: 400,
  damping: 30,
  mass: 0.8,
};

export const hoverMicroInteraction = {
  scale: 1.02,
  transition: { duration: 0.12, ease: "easeOut" } // 120ms max response
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 }
  }
};
```

---

## 3. The 14 Definitive Architectural UX Decisions

---

### Decision 1: SegmentBar Global Navigation
*   **The Problem:** The current site confuses consumer and enterprise users with cluttered dropdowns and jarring redirects to an external Self-Care portal.
*   **The UX Rule:** Implement a persistent top-level **SegmentBar** (6-item) anchored above the main Navbar on every page:
    ```
    [ Residential ]  |  [ Enterprise ]  |  [ 🟢 Network Status 2ms ]  |  [ 📍 Check Coverage ]  |  [ ⚡ Quick Pay ]  |  [ Self Care ↗ ]
    ```
    *Rationale for ⚡ Quick Pay in SegmentBar:* Surfacing 1-Click Recharge at the very top of every page (not only on the homepage hero) reduces friction for the 60%+ of returning subscribers who visit solely to pay their bill. This is validated by Decision 7 and Story L3-004.
*   **Responsive Collapse Rule:** On `md` breakpoint (768px) and below, `[ 📍 Check Coverage ]`, `[ ⚡ Quick Pay ]`, and `[ Self Care ↗ ]` collapse into the mobile hamburger drawer. The SegmentBar retains only `[ Residential ]`, `[ Enterprise ]`, and the live Network Status chip on mobile viewports.
*   **Engineering Spec:** Switching segments dynamically swaps the navigation taxonomy and hero context without page reloads using Next.js route groups `(residential)` and `(enterprise)`. Active segment uses layout animation (`layoutId="activeSegment"`) with spring damping. Live Network Status pill pulses green (`#10B981`) with a tooltip showing current BDIX throughput.

---

### Decision 2: Zero-Asterisk Transparent Pricing
*   **The Problem:** Local competitors hide 15% VAT, optical installation fees, and router charges, triggering 42% cart abandonment during checkout.
*   **The UX Rule:** Every plan card and bundle calculation displays **all-inclusive, exact-bill pricing**:
    *   *"৳1,000 / month — Includes 15% Govt VAT, High-Speed Optical Drop, and 24/7 Priority Support."*
*   **Engineering Spec:** Plan data models contain `basePrice`, `vatAmount`, and `isAllInclusive: true`. Checkout displays the exact billing amount matching the first bKash invoice.

---

### Decision 3: Lifestyle Speed Tiering & Concurrency Indicators
*   **The Problem:** Raw Mbps numbers (*"25 Mbps vs 40 Mbps"*) create decision deadlock for non-technical buyers.
*   **The UX Rule:** Plans are structured into 5 lifestyle tiers with explicit device concurrency pills:
    *   **Link3 Lite (60 Mbps | ৳650):** Single occupants & students (1–3 devices).
    *   **Link3 Home (100 Mbps | ৳1,000):** 4-person connected families (4–8 devices, 4K streaming).
    *   **Link3 Prime (200 Mbps | ৳1,500):** Symmetrical remote work & power families (8–12 devices).
    *   **Link3 Ultra (500 Mbps | ৳2,500):** Low-latency competitive gamers & creators (12+ devices).
    *   **Link3 Max (1 Gbps | ৳4,000):** Multi-device smart villas & extreme prosumers.

---

### Decision 4: Mobile-First 3-Step Bundle Configurator (`/bundles`)
*   **The Problem:** Bangladesh's traffic is 78% mobile; traditional 5-step desktop plan builders suffer severe drop-off.
*   **The UX Rule:** The core configurator is strictly **3 linear steps**:
    1.  **Step 1:** Select Speed Tier (Horizontal pill selector).
    2.  **Step 2:** Select EasyPay Hardware (Carousel of 0% installment cards: 55" TV, Mesh Kit, PS5).
    3.  **Step 3:** Select Entertainment Pack (Toggle chips: Deshi Culture, Global Streamer).
    *   *Post-Selection Review Drawer:* Protection add-ons (*SmartCam Cloud Vault* ৳160/mo, *Parental Shield* ৳75/mo) are offered in an expandable drawer *after* the core bundle is selected (+34% conversion lift).
*   **Engineering Spec:** Sticky bottom sheet with a live animated pricing odometer (`JetBrains Mono`) and prominent thumb-accessible CTA button.

---

### Decision 5: Interactive 3D FTTR Apartment Visualizer (`/home/fttr`)
*   **The Problem:** FTTR is Link3's strongest physical product differentiator, but currently buried in text descriptions.
*   **The UX Rule:** Create an interactive 3D apartment cutaway showcasing transparent micro-optical fiber routed invisibly along baseboards to dedicated room sub-ONTs.
*   **Graceful Coverage Fallback:** If a user checks their building and FTTR vertical conduit is unserviceable, the UI automatically substitutes the FTTR master unit with an equivalent **Wi-Fi 6 Mesh 2-Pack** without aborting the checkout funnel.

---

### Decision 6: Real-Time Public Network Pulse (`/network`)
*   **The Problem:** Zero ISPs in Bangladesh publish real-time network health, fostering skepticism during submarine cable maintenance cuts.
*   **The UX Rule:** Display live telemetry cards powered by WebSockets / Server-Sent Events (SSE):
    *   National BDIX Latency: **< 2ms**
    *   Singapore AWS (ap-southeast-1): **26ms**
    *   Valve / Steam SG Cluster: **32ms**
    *   Submarine Cable Uplinks (SMW-4 / SMW-5 / ITC): **100% Operational**
*   **Engineering Spec:** Public JSON API endpoint `/api/telemetry/pulse` cached at edge with 10-second revalidation.

---

### Decision 7: Homepage 1-Click Quick Recharge Widget
*   **The Problem:** 60% of existing subscribers forget their portal passwords, forcing them to visit physical retail merchants to pay monthly bills.
*   **The UX Rule:** Embed a frictionless **Quick Recharge Card** directly on the homepage hero:
    *   Input: Subscriber ID or Registered Mobile Number.
    *   Action: Queries account API → displays outstanding balance → triggers 1-click bKash / Nagad / Card payment modal without requiring account login.

---

### Decision 8: WhatsApp-First Self-Care & Diagnostics
*   **The Problem:** Call center telephone queues (16335) reach 8–12 minutes during evening peak hours.
*   **The UX Rule:** Position a persistent, floating **WhatsApp AI Assistant** widget on all pages:
    *   Features: Automated line diagnostics, optical signal level check, 1-click remote ONT reboot, instant PDF tax receipt download, and automated fault ticket generation.

---

### Decision 9: "Business Shield" 4G Failover Simulator (`/business/sme`)
*   **The Problem:** SME merchants (restaurants, retail, cloud kitchens) do not believe backup fiber links survive utility road construction cuts.
*   **The UX Rule:** Interactive simulator on the SME page allowing the user to click *"Simulate Street Fiber Cut"*:
    *   Animation: Fiber line snaps → dual-WAN router detects drop in 12s → 4G LTE kicks in seamlessly → POS terminal transaction succeeds without error.

---

### Decision 10: Spring-Physics GPU-Accelerated Micro-Interactions
*   **The Problem:** Sluggish 300ms CSS transitions create a clunky, outdated corporate feel.
*   **The UX Rule:** All interactive elements (cards, buttons, toggles, drawers) use Framer Motion spring physics (`stiffness: 400, damping: 30`) with strict sub-120ms touch responses and 3D card parallax elevation.

---

### Decision 11: CloudVoice Virtual PBX & Interactive IVR Call Flow Simulator (`/business/sme`)
*   **The Problem:** SME merchants (like Rahim Chowdhury) still rely on chaotic personal mobile numbers or expensive legacy PABX boxes because they cannot visualize how a cloud IPTSP system operates.
*   **The UX Rule:** Embed an interactive **CloudVoice IVR Simulator** on the SME landing page:
    *   Interactive Audio Prompts: Users click dial pad keys to hear authentic bilingual greetings (*"Press 1 for Reservations, Press 2 for Home Delivery, Press 3 for Accounting"*).
    *   Live Extension Visualizer: Animates call transfer from the virtual IVR tree to mobile softphones in real time.
    *   Instant Add-on Customizer: Allows business owners to pick extensions (10, 15, 35) and DIDs with live pricing.

---

### Decision 12: CyberDefend Clean-Pipe DDoS Scrubbing Showcase (`/business/enterprise`)
*   **The Problem:** Corporate CTOs (like Mahbub Alam) need deterministic evidence of volumetric DDoS mitigation before migrating mission-critical ERP/banking infrastructure to Link3 DIA.
*   **The UX Rule:** Interactive **CyberDefend Clean-Pipe Visualizer** on the Enterprise landing page:
    *   Animation: Simulates 100 Gbps SYN flood attack approaching the enterprise edge.
    *   Scrubbing Engine: Link3 scrubbing center intercepts and purges malicious traffic in <1 second.
    *   Outcome: Clean business traffic (ERP/HTTPS) maintains 100% throughput with zero packet drop.

---

### Decision 13: End-to-End Analytics Instrumentation & Conversion Funnel Telemetry
*   **The Problem:** Without granular event tracking, product teams cannot identify exact drop-off steps in the 3-step configurator or measure ROI against the baseline 42/100 heuristic score.
*   **The UX Rule:** Comprehensive Google Analytics 4 (GA4) custom event schema and Microsoft Clarity / Hotjar session recording:
    *   `view_plan_tier`, `select_speed_tier`, `toggle_easypay_hardware`, `toggle_ott_pack`, `open_protection_drawer`, `check_coverage_initiated`, `coverage_result_success`, `coverage_result_failure`, `begin_bundle_checkout`, `quick_recharge_lookup`, `bkash_payment_success`, `bkash_payment_failure`.
*   **A/B Testing Infrastructure:** Built-in cookie/feature-flag support for testing hero copy variants and configurator upsell drawer placement.

---

### Decision 14: Search Engine Optimization (SEO), Metadata & Social Share Architecture
*   **The Problem:** Bangladesh broadband discovery is search-heavy (*"fiber internet Dhaka"*, *"best ISP Uttara"*, *"Link3 packages"*), yet legacy ISP sites have poor crawlability and generic social preview cards.
*   **The UX Rule:**
    *   **Static Site Generation (SSG) with ISR (60s):** High-speed crawlability for all core landing pages (`/home`, `/home/gaming`, `/home/fttr`, `/bundles`, `/business`).
    *   **Server-Side Rendering (SSR):** Dynamic coverage lookups (`/coverage?thana=uttara`).
    *   **Schema.org Structured Data (JSON-LD):** Embed `Product` schema (with exact pricing & availability), `ISPOrganization` schema, and `FAQPage` schema.
    *   **Dynamic Open Graph (OG) Images:** Edge-rendered social cards via Next.js `ImageResponse` showing dynamic package specs when shared on Facebook, Discord, or LinkedIn.

---

## 4. Core Component Interaction Specifications

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                              FRONTEND COMPONENT ATOMIC TREE                            │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ [SegmentBar] ────── Top-level domain switch (Residential | Enterprise | Pulse | Care)   │
│   └── [Navbar] ──── Contextual brand navigation & instant action CTAs                  │
│ [HeroSection] ───── Bold editorial headline + Quick Recharge Tab + Address Search       │
│ [PulseBanner] ───── Real-time live BDIX & gaming latency ticker badge                  │
│ [PlanSelector] ──── 5 Lifestyle plan cards with transparent all-inclusive pricing      │
│ [Configurator] ──── 3-Step interactive "Build Your Bundle" wizard + Odometer           │
│ [FTTRVisualizer] ── 3D room-by-room optical floorplan cutaway with signal dials        │
│ [BusinessDemo] ──── Dual-WAN 4G Failover state simulator for SMEs                      │
│ [CloudVoiceSim] ─── Interactive Virtual PBX IVR audio flow simulator                   │
│ [CyberDefendDemo] ─ Enterprise Clean-Pipe DDoS scrubbing animation                     │
│ [WhatsAppCare] ──── Floating automated self-care diagnostic assistant                  │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### Component 1: `SegmentBar.tsx` (Top-Level Navigation)
*   **File Path:** `apps/web/src/components/ui/SegmentBar.tsx`
*   **State Machine:**
    *   `activeSegment`: `"residential"` | `"enterprise"`
    *   `networkStatus`: `{ status: "healthy" | "maintenance" | "degraded", ping: number }`
*   **Interaction Standard:**
    *   Active pill uses layout animation (`layoutId="activeSegment"`) with spring damping.
    *   Live Network Status pill pulses green (`#10B981`) with a tooltip showing current BDIX throughput.

### Component 2: `HeroSection.tsx` (Dual-Intent Conversion Hub)
*   **State Machine:**
    *   `heroTab`: `"new-connection"` | `"quick-recharge"`
    *   `coverageInput`: `string` (Building/Area autocomplete)
    *   `rechargePhone`: `string` (11-digit BD mobile validation)
*   **Interaction Standard:**
    *   Tab switch triggers smooth crossfade (`opacity: 0 -> 1, y: 8 -> 0`).
    *   Quick recharge instantly queries `/api/billing/lookup` on 11th digit entry and opens bKash Direct Checkout.

### Component 3: `BundleConfigurator.tsx` (The Core Funnel)
*   **State Machine:**
    *   `currentStep`: `1` (Speed) | `2` (Hardware) | `3` (OTT)
    *   `selectedSpeed`: `"lite"` | `"home"` | `"prime"` | `"ultra"` | `"max"`
    *   `selectedHardware`: `string[]` (e.g., `["tv-55", "mesh-2pack"]`)
    *   `selectedOTT`: `string[]` (e.g., `["deshi-pack", "streamer-pack"]`)
    *   `protectionDrawerOpen`: `boolean`
*   **Pricing Engine:**
    $$\text{Total Monthly} = \text{Base Plan} + \sum \text{Hardware EMI} + \sum \text{OTT Packs} - \text{Bundle Discount}$$
*   **Interaction Standard:**
    *   Total sum animates via a tabular numeral rolling odometer (`JetBrains Mono`).
    *   Savings badge calculates and bounces subtly on every toggle (`scale: [1, 1.15, 1]`).

### Component 4: `BusinessShieldDemo.tsx` (SME Failover Simulator)
*   **State Machine:**
    *   `fiberState`: `"active"` | `"cutting"` | `"severed"`
    *   `backupState`: `"standby"` | `"switching"` | `"active-4g"`
    *   `posStatus`: `"online"` | `"offline"`
*   **Interaction Standard:**
    *   Clicking *"Simulate Road Digging / Cable Cut"* triggers a particle animation cutting the fiber line; a countdown timer switches traffic to 4G in **1.2 seconds**, keeping the virtual POS terminal green.

### Component 5: `CloudVoiceSimulator.tsx` (Interactive Virtual PBX)
*   **File Path:** `apps/web/src/components/sme/CloudVoiceSimulator.tsx`
*   **State Machine:**
    *   `activeNode`: `"root"` | `"reservations"` | `"delivery"` | `"accounts"` | `"connected"`
    *   `audioPlaying`: `boolean`
    *   `selectedExtension`: `{ name: string, dept: string, device: "iPhone Softphone" | "Desk IP Phone" }`
*   **Interaction Standard:**
    *   Interactive dial pad with haptic clicks and real audio voice prompts (*"Dhaka Bistro-te shagotom. Table booking-er jonno 1 chapun..."*).
    *   Visual pulse line traces the call routing dynamically into the restaurant staff softphone interface.

### Component 6: `CyberDefendScrubber.tsx` (Enterprise DDoS Mitigation)
*   **File Path:** `apps/web/src/components/enterprise/CyberDefendScrubber.tsx`
*   **State Machine:**
    *   `attackMode`: `"idle"` | `"volumetric-syn"` | `"dns-amplification"`
    *   `scrubbingActive`: `boolean`
    *   `cleanBandwidth`: `number` (Committed 1:1 DIA throughput)
*   **Interaction Standard:**
    *   User toggles a simulated 100 Gbps attack; interface renders high-density red particle streams being scrubbed at the edge, maintaining a steady green 1 Gbps flow into the customer ERP node.

---

## 5. Next.js App Router Architecture & URL Directory Map

```
apps/web/src/app/
├── (residential)/                   ← Residential Consumer Domain
│   ├── page.tsx                     ← Main Homepage (Hero, Pulse, Lifestyle Plans, Quick Pay)
│   ├── bundles/                     ← "Build Your Bundle" Configurator
│   │   └── page.tsx
│   ├── home/
│   │   ├── fttr/page.tsx            ← Interactive 3D FTTR Visualizer
│   │   ├── gaming/page.tsx          ← Gamer Low-Latency Dashboard & Booster Pack
│   │   └── entertainment/page.tsx   ← OTT Bundles & EasyPay TV Catalog
│   └── coverage/page.tsx            ← Interactive Dhaka & Regional Coverage Map
├── (enterprise)/                    ← B2B & Corporate Domain
│   ├── business/
│   │   ├── page.tsx                 ← B2B Enterprise Portal Landing
│   │   ├── sme/page.tsx             ← SME Solutions (Business Shield 4G & CloudVoice Simulator)
│   │   ├── enterprise/page.tsx      ← Dedicated Leased Lines (DIA), CyberDefend & SD-WAN
│   │   └── partners/page.tsx        ← Partner API Developer Marketplace
├── network/page.tsx                 ← Public Real-Time Network Pulse & Latency Graphs
├── support/page.tsx                 ← Self-Care, WhatsApp Hub & Speedtest
└── api/
    ├── billing/lookup/route.ts      ← 1-Click Quick Recharge account query
    ├── coverage/check/route.ts      ← Building-level geo-qualification
    ├── telemetry/pulse/route.ts     ← Live BDIX/AWS ping streaming endpoint
    └── og/route.tsx                 ← Dynamic Open Graph image generation
```

---

## 6. Prioritized Engineering Feature Backlog

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                 ENGINEERING SPRINTS & BACKLOG ROADMAP                                  │
├───────────────────────────────────┬───────────────────────────────────┬────────────────────────────────┤
│ SPRINT 1–2: CORE REDESIGN MVP     │ SPRINT 3–4: ECOSYSTEM EXPANSION   │ SPRINT 5–6: ENTERPRISE & SCALE │
├───────────────────────────────────┼───────────────────────────────────┼────────────────────────────────┤
│ • SegmentBar & Brand Design Tokens│ • 3-Step Bundle Configurator      │ • Enterprise Telemetry Portal  │
│ • Lifestyle Speed Tiers (Home/Pro)│ • 3D FTTR Apartment Visualizer    │ • CyberDefend DDoS Scrubber    │
│ • All-Inclusive Transparent Price │ • Dedicated Gaming Portal & QoS   │ • Partner API Developer Portal │
│ • Live Network Pulse Header Chip  │ • Business Shield 4G Simulator    │ • Multi-Site B2B Quoting Engine│
│ • Homepage 1-Click Quick Recharge │ • CloudVoice IVR Simulator        │ • Automated NBR VAT Challans   │
│ • Analytics & Conversion Tracking │ • WhatsApp-First AI Care Widget   │ • Cloud PBX Self-Provisioning  │
└───────────────────────────────────┴───────────────────────────────────┴────────────────────────────────┘
```

### Sprint 1 & 2: Core Platform Foundations & Quick Wins (MVP)

| Story ID | Epic | User Story & Acceptance Criteria | Target Persona | Priority | Est. Points |
|:---------|:-----|:---------------------------------|:---------------|:---------|:------------|
| **L3-001** | Navigation | **As a** visitor, **I want** a persistent SegmentBar to switch between Residential, Enterprise, and Self-Care, **so that** I never get lost in confusing sub-menus. <br>• *AC1:* Spring layout active indicator.<br>• *AC2:* Live green Network Status chip. | All Personas | **P0** | 5 |
| **L3-002** | Plans | **As a** family shopper (Tanvir & Farhana), **I want** clear lifestyle plan cards with all-inclusive pricing, **so that** I don't face unexpected VAT or installation charges. <br>• *AC1:* 5 lifestyle tiers (Lite to Max).<br>• *AC2:* 15% VAT explicitly included. | Tanvir & Farhana | **P0** | 8 |
| **L3-003** | Telemetry | **As a** competitive gamer (Shakib), **I want** to see live public BDIX and Singapore AWS ping counters on the homepage, **so that** I can trust Link3's low-latency claims. <br>• *AC1:* SSE/WebSocket endpoint `/api/telemetry/pulse`.<br>• *AC2:* JetBrains Mono tabular numeral display. | Shakib | **P0** | 5 |
| **L3-004** | Billing | **As an** existing customer, **I want** to enter my phone number on the homepage and pay my monthly bill via bKash in 2 clicks, **so that** I don't have to log into a forgotten portal. <br>• *AC1:* 11-digit inline validation.<br>• *AC2:* Direct bKash payment gateway modal. | All Subscribers | **P0** | 8 |
| **L3-005** | Coverage | **As a** prospect, **I want** an instant building-level coverage checker, **so that** I know immediately if my apartment is fiber-ready before selecting plans. <br>• *AC1:* Dhaka metro building autocomplete.<br>• *AC2:* Graceful out-of-coverage pre-order capture. | All Prospects | **P0** | 8 |
| **L3-006** | Analytics | **As a** Product Manager, **I want** comprehensive GA4 and session recording event tracking at every step of the funnel, **so that** I can measure conversion drop-offs against the baseline 42/100 score. <br>• *AC1:* Custom event schema (`select_speed_tier`, `toggle_hardware`, `bkash_payment_success`).<br>• *AC2:* Clarity/Hotjar integration. | Growth / Product | **P0** | 5 |

---

### Sprint 3 & 4: Ecosystem Funnels & Visual Differentiators

| Story ID | Epic | User Story & Acceptance Criteria | Target Persona | Priority | Est. Points |
|:---------|:-----|:---------------------------------|:---------------|:---------|:------------|
| **L3-007** | Bundles | **As a** customer, **I want** a mobile-first 3-step configurator to combine speed, EasyPay hardware, and OTT packs, **so that** I see live savings in real time. <br>• *AC1:* 3-step linear flow with sticky bottom bar.<br>• *AC2:* Animated savings odometer.<br>• *AC3:* Post-selection review drawer for SmartCam. | Modern Family, Freelancer | **P1** | 13 |
| **L3-008** | FTTR | **As a** homeowner, **I want** an interactive 3D floorplan showing invisible room-by-room fiber routing, **so that** I understand why FTTR eliminates bedroom dead spots. <br>• *AC1:* Three.js / Framer Motion room cutaway.<br>• *AC2:* Interactive room latency dials.<br>• *AC3:* Intelligent fallback to Wi-Fi 6 Mesh. | Tanvir & Farhana | **P1** | 13 |
| **L3-009** | Gaming | **As a** gamer (Shakib), **I want** a dedicated gaming hub with a 1-click Gaming Booster toggle including a free Static IP, **so that** I get unlocked Open NAT. <br>• *AC1:* Multi-server latency heatmap.<br>• *AC2:* One-click ৳99/mo add-on checkout with Bridge Mode toggle. | Shakib | **P1** | 8 |
| **L3-010** | SME 4G | **As an** SME restaurant owner (Rahim), **I want** an interactive 4G failover simulator, **so that** I can verify that my POS will stay online during street fiber cuts. <br>• *AC1:* Interactive "Cut Fiber" state trigger.<br>• *AC2:* Sub-30s failover animation and downtime cost calculator. | Rahim Chowdhury | **P1** | 8 |
| **L3-011** | CloudVoice | **As an** SME merchant (Rahim), **I want** an interactive CloudVoice IVR simulator with sample audio prompts and extension visualizers, **so that** I can test how cloud PBX routes customer calls. <br>• *AC1:* Bilingual IVR audio playback.<br>• *AC2:* Animated call tree routing to softphone app.<br>• *AC3:* Extension pack pricing selector. | Rahim Chowdhury | **P1** | 8 |
| **L3-012** | Support | **As a** subscriber, **I want** a floating WhatsApp AI widget, **so that** I can diagnose optical faults or reboot my router in under 60 seconds without calling 16335. <br>• *AC1:* Verified WhatsApp Business deep-link.<br>• *AC2:* Automated line test and ticket creation. | All Personas | **P1** | 5 |

---

### Sprint 5 & 6: Enterprise Infrastructure & Platform Scale

| Story ID | Epic | User Story & Acceptance Criteria | Target Persona | Priority | Est. Points |
|:---------|:-----|:---------------------------------|:---------------|:---------|:------------|
| **L3-013** | B2B Portal | **As an** Enterprise CTO (Mahbub Alam), **I want** a dedicated enterprise solution builder with SLA guarantees, **so that** I can generate formal RFP proposals. <br>• *AC1:* Multi-branch DIA & SD-WAN configurator.<br>• *AC2:* Instant PDF RFP proposal generator. | Mahbub Alam | **P2** | 13 |
| **L3-014** | Telemetry & DDoS | **As a** corporate IT manager (Mahbub Alam), **I want** real-time SNMP/MRTG traffic utilization, clean-pipe DDoS mitigation logs, and latency heatmaps across all branch links. <br>• *AC1:* Prometheus/Grafana API bridge.<br>• *AC2:* CyberDefend real-time DDoS scrubbing status.<br>• *AC3:* 1-click Bandwidth-on-Demand burst toggle. | Mahbub Alam | **P2** | 13 |
| **L3-015** | API Portal | **As a** tech company developer, **I want** a self-serve API marketplace to provision SMS gateways and Static IP subnets, **so that** I can integrate telco assets into our app. <br>• *AC1:* Interactive OpenAPI/Swagger documentation.<br>• *AC2:* Sandbox API key generation and usage billing. | Tech Startups | **P2** | 13 |
| **L3-016** | Invoicing | **As a** corporate finance head, **I want** automated monthly BTRC-compliant NBR VAT Challan downloads, **so that** our tax reconciliation is frictionless. <br>• *AC1:* One-click monthly batch invoice download.<br>• *AC2:* Automatic email dispatch to corporate accounts. | Corporate Finance | **P2** | 5 |

---

## 7. Definition of Done (DoD) & Usability Acceptance Criteria (UAC)

To guarantee that the frontend implementation adheres to world-class engineering standards:

### 7.1 — Performance & Core Web Vitals (CWV)
*   **Largest Contentful Paint (LCP):** $\le 1.2\text{s}$ on 4G mobile connections.
*   **First Input Delay (FID) / Interaction to Next Paint (INP):** $\le 50\text{ms}$.
*   **Cumulative Layout Shift (CLS):** $\le 0.02$ (Zero layout jank during dynamic font/asset loads).
*   **GPU Acceleration:** All Framer Motion transitions must strictly animate `transform` and `opacity` (never layout-triggering properties like `width`, `margin`, or `top`).

### 7.2 — Accessibility (WCAG 2.1 AA Compliance)
*   **Color Contrast:** Minimum ratio of **4.5:1** for normal text against Obsidian/Card backgrounds; **3:1** for large display headers and active UI borders.
*   **Keyboard Navigation:** Full focus management (`:focus-visible` with electric cyan focus rings) across all interactive tabs, configurator toggles, and modals.
*   **Screen Reader ARIA:** Complete semantic tagging for live telemetry counters (`aria-live="polite"`), modal dialogs (`role="dialog"`), and expandable drawers.

---

## 8. Summary of Research Progression & Transition to Wireframes

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                   RESEARCH WORKFLOW PROGRESSION                                 │
├───────────────────────────────────┬───────────────────────────────────┬─────────────────────────┤
│ ✅ Phase 1: Benchmarks            │ ✅ Phase 2: Personas              │ ✅ Phase 3: Audits       │
│ • 30 Regional Competitors         │ • 5 Deep Archetypes               │ • 10 NN/g Heuristics    │
│ • 20 Global Disruptors            │ • Empathy Mental Models           │ • ISO 9241-110 Mapping  │
│ • Strategic Blueprint v1.1        │ • End-to-End Journey Maps         │ • P0/P1/P2 Backlog      │
├───────────────────────────────────┼───────────────────────────────────┴─────────────────────────┤
│ ✅ Phase 4: Insights v1.1 (THIS)  │ ⏳ Phase 5: Wireframes & Interaction Specs (`05-wireframes/`) │
│ • 14 Core Architectural UX Rules  │ • Wireframe 1: SegmentBar & Homepage Hero Conversion        │
│ • CloudVoice & DDoS Specs         │ • Wireframe 2: 3-Step "Build Your Bundle" Configurator      │
│ • Sprints 1–6 Engineering Backlog │ • Wireframe 3: Interactive 3D FTTR Apartment Tour           │
│ • Analytics & SEO Architecture    │ • Wireframe 4: Gaming Pulse Dashboard & CloudVoice Simulator│
└───────────────────────────────────┴─────────────────────────────────────────────────────────────┘
```

*Next Step in Serial:* Proceed to **Phase 5 (`05-wireframes/01_core_flow_wireframes.md`)** to produce structural wireframes and responsive layouts for the primary conversion journeys.
