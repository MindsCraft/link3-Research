# Visual Design & Theming Rules for Link3 Web Experience

## ☀️ STRICT SYSTEM DIRECTIVE: 100% LIGHT MODE ONLY

1. **NO DARK MODE ANYWHERE:**
   - Dark mode is strictly prohibited across all documents, prototypes, HTML files, and components in this project.
   - Do not generate dark backgrounds (`#000000`, `#070A11`, `#0F172A`, `#121214`, etc.).

2. **NO THEME / MODE SWITCHERS:**
   - Do not add Dark/Light mode toggle buttons, theme switchers, or mode selection pills.
   - All experiences must be permanently and exclusively rendered in modern Light Mode.

3. **LIGHT MODE DESIGN TOKENS:**
   - **Page Canvas:** `#F8FAFC` (Clean slate white) or `#FFFFFF` (Crisp white).
   - **Card & Component Surfaces:** `#FFFFFF` (Pure white) with `#E2E8F0` borders.
   - **Elevated Hover States:** `#F1F5F9`.
   - **Primary Typography:** `#0F172A` (Deep Slate Navy - high WCAG AAA contrast).
   - **Secondary / Body Text:** `#475569` or `#334155`.
   - **Primary Brand Accents:** `#0284C7` (Electric Telco Blue), `#2563EB` (Royal Blue), `#059669` (Success Emerald).
   - **Shadows:** Soft, diffused ambient drop shadows (`0 10px 25px -5px rgba(15, 23, 42, 0.08)`).

## 🔤 STRICT SYSTEM DIRECTIVE: TYPOGRAPHY RULES

1. **RESEARCH FOLDER (`research/`):**
   - Use 'Inter', sans-serif exclusively across all moodboards, wireframes, HTML visualizers, markdown documents, and prototypes in `research/`.
   - Strictly no other fonts in `research/` (zero Syne, zero Plus Jakarta Sans, zero JetBrains Mono, zero Outfit).

2. **MAIN APPLICATION SITE (`apps/web`):**
   - **Display & Headlines:** Use 'Figtree' (`--font-display: 'Figtree'`).
   - **Body, Interface & Details:** Use 'Inter' (`--font-body: 'Inter'`).
   - Strictly no other fonts (zero Syne, zero Plus Jakarta Sans, zero JetBrains Mono, zero Outfit).
