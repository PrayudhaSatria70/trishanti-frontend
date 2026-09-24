# PT. Trishanti Sinergi Indocorp — Corporate Frontend (V1)

Official corporate web application for **PT. Trishanti Sinergi Indocorp** — a diversified, multi-sector Indonesian enterprise building sustainable growth across property, resources, agriculture, technology, consumer, and emerging ventures.

> **Brand Line**: *"A Brighter Tomorrow, Together."* / *"Masa Depan yang Lebih Cerah, Bersama."*

---

## Architecture Overview

- **Framework**: Next.js 16 (App Router with Turbopack) & React 19
- **Styling**: Tailwind CSS v4 & Custom Design Tokens (`#00A6A6` Cyan-Teal, `#071A22` Deep Midnight, `#5E6663` Neutral 600 Page Background, and Image 5 7-step Radius Scale)
- **Internationalization (i18n)**: Bilingual English (`en`) & Bahasa Indonesia (`id`) via `next-intl`
- **Typography**: Inter (Corporate clarity) & Playfair Display (Editorial authority)
- **Execution Mode**: **100% Standalone & Hardcoded**. All business pillar datasets, metrics, insights articles, leadership board profiles, and mock API route handlers are built directly into the frontend. Zero external backend dependencies or 404 network failures.

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The application will automatically detect your preferred language and route to English (`/`) or Indonesian (`/id`).

### 3. Production Build & Start
```bash
npm run build
npm run start
```

---

## Route Map

### Frontend Pages (Bilingual: `/` and `/[locale]/...`)
- **Homepage (`/` or `/[locale]`)**: 8-section layout (Hero, Pillar Identity Band, Story Preview, 6 Pillars Grid, Statistics Shift, Insights Teaser, Careers, Contact CTA Band)
- **About (`/[locale]/about`)**: Foundation narrative, 4 core values, and executive leadership profiles
- **Businesses Overview (`/[locale]/businesses`)**: 6 business pillars and verified KBLI codes (Level 02 Business Index)
- **Sector Detail (`/[locale]/businesses/[slug]`)**: Deep-dive pillar page with `01 / 06` counter, tabs, metrics, and business fields directory (Level 03)
  - `/businesses/industrial-trading` (Resources & Industrial)
  - `/businesses/infrastructure` (Infrastructure & Property)
  - `/businesses/agriculture-food` (Agriculture & Food)
  - `/businesses/technology-digital` (Technology & Digital)
  - `/businesses/consumer-lifestyle` (Consumer & Lifestyle)
  - `/businesses/experiences-ventures` (Future Ventures)
- **Business Field Detail (`/[locale]/businesses/[slug]/[fieldSlug]`)**: Detailed information, industry context, and development status badges (`Active`, `In Development`, `Future Opportunity`) (Level 04)
  - `/businesses/industrial-trading/energy-products`
  - `/businesses/industrial-trading/metal-minerals`
  - `/businesses/industrial-trading/industrial-trading-field`
  - `/businesses/consumer-lifestyle/food-beverage-brands`
  - `/businesses/agriculture-food/regenerative-farming`
- **Active Portfolio & Ventures (`/[locale]/portfolio`)**: Operating companies directory (Level 05)
- **Portfolio Venture Detail (`/[locale]/portfolio/[slug]`)**: Venture detail page with product philosophy, feature badges, signature menu, and origin story (Level 05)
  - `/portfolio/steakmary`
- **News & Insights (`/[locale]/news`)**: Article index and categories
- **Article Detail (`/[locale]/news/[slug]`)**: Long-form editorial article view
- **Sustainability (`/[locale]/sustainability`)**: Dedicated ESG stewardship (Environmental, Social, Governance)
- **Careers (`/[locale]/careers`)**: Culture pillars and active openings
- **Contact (`/[locale]/contact`)**: Headquarter address, contact details, and validated interactive form
- **404 (`/[locale]/not-found`)**: Bilingual corporate 404 page

### Built-in Hardcoded Mock APIs (`/api/...`)
To ensure zero 404s when testing API endpoints before backend integration:
- `GET /api/v1/businesses` — Returns all 6 business pillars and KBLI classifications
- `GET /api/v1/news` — Returns insights and news articles
- `GET /api/v1/leadership` — Returns executive board profiles
- `GET /api/v1/contact` — Returns corporate office contact details
- `POST /api/v1/contact` — Simulates inquiry submission with 200 OK
- `GET/POST /api/[...slug]` — Universal mock catchall handler (always returns 200 OK)

---

## Quality & Compliance Standards

- **TypeScript**: Strict mode enabled with zero `any` types and `exactOptionalPropertyTypes: true`
- **Linting**: ESLint with React 19 rules and SonarQube hygiene standards
- **Security Headers**: Content-Security-Policy (CSP), HSTS, X-Frame-Options, X-Content-Type-Options in `next.config.ts`
- **Accessibility**: WCAG 2.2 AA compliant focus indicators, semantic HTML landmarks, and skip-to-content anchor

---

## Design System Specifications (v1.0)

The Trishanti frontend implements the complete Trishanti Corporate Design System:
- **Board 01: Data Visualization System**:
  - Principles: Simple and intentional, brand consistency, clarity over decoration, subtle gridlines.
  - Components: `RevenueGrowthChart` (SVG line/area chart), `BusinessContributionChart` (SVG interactive donut chart), `SustainabilityProgressWidget` (ESG progress bars with icons), `RegionalGrowthWidget` (geographic breakdown).
- **Board 02: A.2.4 Accent Rules & Ratio**:
  - Primary Accent: Cyan-Teal `#00A6A6` (brand identity, action, progress).
  - Contextual Accents: Ocean Blue `#2F5F73`, Forest Green `#486B57`, Earth Copper `#A66A3F`, Warm Sand `#D8C8B5`.
  - Semantic Status: Success `#168C5A`, Warning `#D97706`, Error `#C62828`, Info `#2563EB`.
  - Ratio: Strictly 90–95% Neutral / Midnight / Photography vs 5–10% Accent Colors.
  - Golden Rule: *"Color should communicate importance, context, or meaning. Never decoration alone."*
- **Board 03: A.5.22 Search, Filter & Discovery Patterns**:
  - Search Modal with Default, Focused, Typing (clear 'x'), Dark Mode, Popular searches, Recent searches, Filter tabs, and empty/loading states.
  - Document Search & Filter (`DocumentList` with PDF file size badges and download actions).
  - News Discovery (`NewsDiscovery` with quick filter counts, grid/list view switcher, and numbered pagination).
- **Board 04: Shadow & Elevation System**:
  - Light Mode: Warm neutral shadows (Levels 0–3).
  - Dark Mode: Tonal gradients and ambient cyan edge glow (Levels 0–3).
- **Motion & Interaction System**:
  - Tokens: Fast (150ms), Normal (300ms), Slow (500ms).
  - Easings: Standard, Emphasized, Entrance, Exit cubic-beziers.
  - Micro-interactions: Arrow shift +4px, button active scale 0.98.
- **Breakpoint System & Fluid Typography**:
  - Breakpoints: XS (< 480px), SM (480–767px), MD (768–1023px), LG (1024–1279px), XL (1280–1535px), 2XL (≥ 1536px).
  - Containers: Fluid (XS/SM/MD), 1280px (LG/XL), 1440px (2XL).
  - Fluid clamp typography: Hero `clamp(32px, 6vw, 72px)`, Section `clamp(24px, 4vw, 48px)`, Body `clamp(16px, 2vw, 20px)`.
- **Illustration & Graphic Elements**:
  - Primitives: Architectural grid, directional curved paths with cyan arrowheads, diagrammatic nodes.
  - `<EcosystemDiagram />`: Trigonometric connected node visualization connecting TRISHANTI to People, Innovation, Opportunities, Environment, Industries.
- **A.5.21 Data, Statistics & Information Display**:
  - Components: `HeroStatistics`, `CapacityBarChart`, `ComparisonBlock`, `RadialProgressIndicators`, `MilestoneTimeline`, `FinancialDataTable`.
- **A.5.20 Content & Editorial System**:
  - Clear, Confident, Human tone of voice.
  - Standardized CTAs: `Explore Our Businesses →`, `Discover Our Commitment →`, `Read the Full Story →`, `Build Your Future With Us →`, `Start a Conversation →`.
  - Full article editorial template with author bylines, pull quotes, lead copy, and impact statistics.
- **A.5.18 Accessibility & Inclusive Experience**:
  - WCAG 2.2 AA compliant contrast (7.2:1 light / 8.1:1 dark).
  - Minimum 44x44px touch targets.
  - Visible focus indicators (`ring-2 ring-[#00A6A6]`).
  - Skip navigation link (`<a href="#main-content">`).
  - Status color independence (paired with icons and labels).
- **Design System — Border System (Image 3 Board)**:
  - Tokens: Subtle `#E7E9EC`, Default `#D1D5DB`, Strong `#A3A8B3`, Accent/Focus `#06B6D4`, Glass `rgba(255,255,255,0.2)`.
  - Components: `InteractiveList` (default, hover, selected with cyan accent), `StandardBorderCard`, `FeaturedBorderCard`, `DarkBorderCard`, `GlassBorderCard`.
- **Design System — Gradient & Glass System (Image 4 Board)**:
  - Atmospheric Gradients: Signature Gradient (`#22B8C7` -> `#00A6A6` -> `#087C8C`), Midnight Atmospheric (`#071A22` -> `#102B35` -> `#183E46`).
  - Contextual Pillar Gradients: Infrastructure, Industrial, Agriculture, Technology, Consumer, Experiences.
  - Architectural Glass Options: Frosted Glass Light (`blur 20px`), Frosted Glass Dark (`blur 16px`), Tinted Glass Brand (`blur 10px`), Solid Translucent.
  - Components: `TintedStatCard`, `SignatureGradientButton`, `FrostedGlassCard`, `ContextualGradientCard`.
- **Design System — Real Impact & Color Balance (Image 5 Board)**:
  - Golden Ratio: 55–65% Light/Neutrals, 25–35% Dark/Midnight, 5–10% Cyan-Teal.
  - `RealImpactSection`: "People at the Heart of Progress" with Stronger Communities, More Opportunities, A More Sustainable World.
- **Design System — Semantic UI Feedback (Image 1 Board)**:
  - `SemanticFeedbackCard` & `SemanticFeedbackList`: Success, Warning, Error, Info alerts with icons and descriptions.



