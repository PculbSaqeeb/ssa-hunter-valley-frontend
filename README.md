# SSA Hunter Valley | Signature Slam Academy

A modern marketing website for **Signature Slam Academy Hunter Valley** — the world's first multi-surface court tennis academy in the Asia Pacific region, located in Hunter Valley, NSW, Australia.

---

## Table of Contents

- [About The Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [How To Run](#how-to-run)
- [Project Structure](#project-structure)
- [Pages & Routes](#pages--routes)
- [Components Breakdown](#components-breakdown)
- [Configuration](#configuration)
- [Performance Optimizations](#performance-optimizations)

---

## About The Project

SSA Hunter Valley is a landing page website showcasing the Signature Slam Academy — a world-class tennis academy with plans for 60 multi-surface courts (20 clay, 30 hard, 10 natural grass). The site highlights:

- Academy programs (Academy, Camps, Performance)
- World-first achievements and key features
- Professional coaches and staff
- Facilities (Tennis, Accommodation, Fitness, Recovery)
- Events and launch details
- Location connectivity and nearby landmarks

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 14.2.5 | React framework (App Router) |
| React | 18 | UI library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3 | Utility-first styling |
| PostCSS | 8 | CSS processing |
| Autoprefixer | 10 | CSS vendor prefixing |

---

## How To Run

```bash
# 1. Navigate to project directory
cd ssa-hunter-valley-nextjs

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
# → Available at http://localhost:3000

# 4. Build for production
npm run build

# 5. Start production server
npm start

# 6. Run linting
npm run lint
```

### Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `next dev` | Start development server |
| `build` | `next build` | Create production build |
| `start` | `next start` | Start production server |
| `lint` | `next lint` | Run ESLint |

---

## Project Structure

```
ssa-hunter-valley-nextjs/
│
├── app/                              # Next.js App Router
│   ├── layout.tsx                    # Root layout (font, metadata, iframe detection)
│   ├── globals.css                   # Global styles (Tailwind directives)
│   ├── page.tsx                      # Homepage (main landing page)
│   └── mockup/
│       └── page.tsx                  # Device mockup showcase page
│
├── components/                       # Reusable React components (14 total)
│   ├── Header.tsx                    # Sticky navigation header
│   ├── Hero.tsx                      # Full-screen hero section
│   ├── AboutSection.tsx              # About us with tabs and statistics
│   ├── QuoteSection.tsx              # Chairman quote with parallax
│   ├── KeyFeatures.tsx               # Key features + image gallery
│   ├── Programs.tsx                  # Three program cards
│   ├── Marquee.tsx                   # Infinite scrolling text banner
│   ├── SignatureAcademy.tsx          # Launch announcement + location map
│   ├── Professionals.tsx             # Team/staff introductions
│   ├── Facilities.tsx                # Facilities grid showcase
│   ├── CoachesEvents.tsx             # Coaches and events split section
│   ├── Glimpse.tsx                   # Legacy component (unused)
│   └── Footer.tsx                    # Site footer with links and contact
│
├── public/                           # Static assets
│   ├── icon/                         # SVG icons
│   │   ├── double-left-arrow.svg
│   │   ├── flag.svg
│   │   └── right-arrow.svg
│   └── images/                       # Images (33 files)
│       ├── banner.gif                # Hero background (animated)
│       ├── header-logo.svg           # Header logo
│       ├── footer-logo.svg           # Footer logo
│       ├── about-img-1..4.jpg        # About section images
│       ├── program-img-1..3.*        # Program section images
│       ├── fac-img-1..4.jpg          # Facility images
│       ├── professional-img-1..3.jpg # Staff headshots
│       ├── event-image-1..2.png      # Event images
│       └── ... (more images)
│
├── next.config.mjs                   # Next.js configuration
├── tailwind.config.ts                # Tailwind CSS configuration
├── postcss.config.mjs                # PostCSS configuration
├── tsconfig.json                     # TypeScript configuration
├── package.json                      # Dependencies and scripts
└── package-lock.json                 # Dependency lockfile
```

---

## Pages & Routes

### `/` — Homepage
**File:** `app/page.tsx`

The main landing page that composes all 12 section components:

```
Header → Hero → AboutSection → QuoteSection → KeyFeatures → Programs
→ Marquee → SignatureAcademy → Professionals → Facilities
→ CoachesEvents → Footer
```

**Optimization:** 10 of 12 components are loaded via `next/dynamic` for code-splitting. Only `Header` and `Hero` are statically imported (critical above-the-fold content).

### `/mockup` — Device Mockup Showcase
**File:** `app/mockup/page.tsx`

A specialized page that displays the live website inside CSS-constructed device frames:

| Device | Size | Details |
|--------|------|---------|
| Desktop (MacBook Pro) | 1280x800 | Keyboard deck, camera notch, "MACBOOK PRO" branding |
| Tablet (iPad Pro) | 768x1024 | Side buttons, camera, edge-to-edge screen |
| Mobile (iPhone) | 375x812 | Dynamic Island, side buttons, physical controls |

- Each frame contains a live `<iframe src="/">` of the homepage
- Uses CSS `transform: scale()` to fit devices into viewport
- Includes iframe detection to hide UI elements inside frames

---

## Components Breakdown

### Header.tsx (Client Component)
Sticky navigation bar that:
- Starts transparent, transitions to white on scroll
- Shows 8 navigation links on desktop (xl+)
- Includes hamburger menu on mobile
- Logo swaps based on scroll state
- "Mockup View" button linking to `/mockup`

### Hero.tsx (Server Component)
Full-viewport hero section with:
- Animated GIF background (`banner.gif`)
- Main heading: "SSA HUNTER VALLEY / GROW YOUR GAME WITH THE PROFESSIONALS"
- Tagline bar: "ADOPT / NURTURE / DELIVER"
- "Register Now" CTA button
- Animated scroll-down arrow
- Weather widget and match score sidebar

### AboutSection.tsx (Client Component)
About section featuring:
- Tabbed navigation: About Us, Coaches, Vision, Mission
- Statistics grid: 20 courts, 12 coaches, 17 years, 10 clubs
- 4-image grid layout
- "Read More" CTA button

### QuoteSection.tsx (Server Component)
Inspirational quote section with:
- Parallax background image
- Quote from John Doe, Chairman
- Full-width design

### KeyFeatures.tsx (Server Component)
Highlights world-first achievements:
- 6 key features in two-column layout
- First venue with 60 multi-surface courts
- First facility for WTA & ATP events on any surface
- "Register Now" CTA
- "A Glimpse of Excellence" image gallery

### Programs.tsx (Server Component)
Three program cards:
- **Academy** — "Live and train with us"
- **Camps** — "Fun-filled training weeks"
- **Performance** — "Elevate your game with us"

### Marquee.tsx (Client Component)
Infinite scrolling text banner:
- Repeats "ADOPT / NURTURE / DELIVER" 12 times
- Alternating solid and outlined text
- CSS keyframe animation (15s linear infinite)

### SignatureAcademy.tsx (Server Component)
Launch announcement section:
- Split layout (45%/55%)
- Left: Launch announcement with gradient background
- Right: Aerial render image
- SSA Connectivity table with 7 nearby locations and distances

### Professionals.tsx (Server Component)
Team introductions:
- Three-column grid
- Craig Tiley — CEO Tennis Australia
- Stephen Farrow — Director of Tournament
- Cameron Pearson — Head Major Events

### Facilities.tsx (Server Component)
Facilities showcase:
- 4 facility cards in staggered grid
- **Tennis** — 9 Clay Courts, 4 Hard Courts
- **Accommodation** — 5 Star Hotel
- **Fitness** — Gym, Fitness Room
- **Recovery** — Spa, Pool, Massage

### CoachesEvents.tsx (Server Component)
Split section:
- **Left:** "Our Coaches" with dark overlay
- **Right:** "Events" with green background

### Footer.tsx (Server Component)
Site footer with:
- Logo and navigation links
- Contact information (address, phone, email)
- Social media icons (Facebook, X, Instagram, YouTube)
- Copyright and legal links

---

## Configuration

### Tailwind CSS (`tailwind.config.ts`)
- Custom breakpoints: `xs: 375px` to `4xl: 1536px`
- Custom lime color palette:
  - `lime-400: #a3d900`
  - `lime-500: #8fc400`
  - `lime-600: #79a800`
- Content scanning: `./app/**` and `./components/**`

### Next.js (`next.config.mjs`)
- Remote image patterns allowed from `placehold.co`

### TypeScript (`tsconfig.json`)
- Target: ES2017
- Strict mode enabled
- Path alias: `@/*` → project root

### Root Layout (`app/layout.tsx`)
- **Font:** Outfit (Google Fonts) via `next/font/google`
- **Metadata:** Title, description, keywords, OpenGraph tags
- **Iframe Detection:** Detects if running inside iframe and hides UI elements

---

## Performance Optimizations

### 1. Dynamic Code-Splitting
10 of 12 components loaded via `next/dynamic` to reduce initial JS bundle size. Below-the-fold components are fetched asynchronously only when needed.

### 2. Image Optimization
All images use Next.js `<Image />` with:
- `fill` and `object-cover` for responsive delivery
- `priority` flag for LCP assets (hero banner)
- Native lazy loading for off-screen images

### 3. Font Optimization
`next/font/google` injects the Outfit font server-side, eliminating:
- Flash of Unstyled Text (FOUT)
- Cumulative Layout Shift (CLS)

### 4. Layout Stability
- `scroll-mt` classes compensate for sticky header offset
- `overflow-x-hidden` prevents horizontal scroll leaks
- Responsive sizing via Tailwind utilities

---

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Green | `#99B81B` | Accent, CTAs, highlights |
| Navy Blue | `#003A5D` | Gradients, dark backgrounds |
| Light Lime | `#a3d900` | Custom Tailwind lime-400 |
| Medium Lime | `#8fc400` | Custom Tailwind lime-500 |
| Dark Lime | `#79a800` | Custom Tailwind lime-600 |

---

## License

© 2025 SSA Group. All Rights Reserved.

Website: [www.signatureslamacademy.com](https://www.signatureslamacademy.com)
