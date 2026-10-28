# Portfolio Redesign Plan

Reference: https://adoptgrowth.vercel.app/ (design, motion, theme, mobile only; none of its content).
Content source: `~/Downloads/Muhammad_Umar_Resume.pdf` (updated resume). Content stays as-is during Phase 1.

## 1. What is wrong today

| Area | Finding |
|---|---|
| Architecture | One 848-line `src/App.tsx`, all project data inline. Client-rendered SPA: crawlers and AI bots get an empty `<div id="root">`. |
| Theme | Black/grey with red accent (`--primary: 0 72% 50%`), floating icons, blurred blobs, 3 s fake loading splash. Generic, not distinctive. |
| Motion | Framer Motion mouse-parallax on every icon (re-renders the whole app on each `mousemove` via `useState`), typing effect, loading splash. No scroll reveals, no reduced-motion handling. |
| Perf | `vercel.json` sets `Cache-Control: no-cache, no-store` on everything, so no asset is ever cached. Google Fonts blocking stylesheet. 16 unoptimised JPG screenshots in `public/MyInvoice`. |
| Content mismatch | Site says "7 years", resume says "2+ years". Site name is "Muaaz", resume says Muhammad Umar. Footer says 2024. Repo, package name and LinkedIn helper use Muaaz. |
| Domain | `index.html` og:url is `muh-umar.vercel.app`, `vercel.json` alias is `m-umar.vercel.app`, resume says `m-umar.vercel.app`. No canonical. |
| SEO | Title/description only. No canonical, no JSON-LD, no sitemap, no `llms.txt`, favicon and og:image are a Flutter SVG (not a valid OG image), no theme-color. |
| Bug | `api/send-email.js` calls `nodemailer.createTransporter` (the real function is `createTransport`) and mixes `require` with `export default`, so the contact form cannot work on Vercel. |

## 2. Reference site audit (adoptgrowth.vercel.app)

### Stack
Vite + React bundle (292 KB JS, 62 KB CSS). No GSAP, Framer Motion, Lenis or Three.js. All motion is **CSS transitions/keyframes + IntersectionObserver + a little rAF**. This is the key insight: the polish comes from restraint and consistent easing, not a heavy library. We can drop `framer-motion` from most sections (keep it only where layout animation is needed, or remove entirely).

### Design tokens (copy exactly)
```
--teal-950 #001a18   --teal-900 #00221f   --teal-850 #002b28
--teal-800 #00302c   --teal-700 #004543   --teal-600 #0b5a55   --teal-300 #7fb3ad
--orange-500 #f67f00 --orange-400 #ff9a2e --orange-300 #ffbf73
--cream #fafaf7  --cream-200 #f1efe8  --cream-300 #e4e1d6
--charcoal #171a18  --gray-600 #5b625f  --gray-500 #7a817e
--line-dark #fafaf71a  --line-dark-strong #fafaf72e  --line-light #171a181f
--text-on-dark #f4f3ee  --muted-on-dark #f4f3eea8
--radius-sm 10px  --radius-md 16px  --radius-lg 24px  --radius-xl 36px
--container 1280px  --gutter clamp(16px,4vw,48px)
--section-y clamp(72px,8.5vw,124px)  --header-h 84px
--ease-out cubic-bezier(.22,1,.36,1)
```
Pattern: dark teal "frame" sections (hero, process, contact) alternating with cream sections (clients, intro, pricing, FAQ). Orange is used only for CTAs, accents and glows.

### Typography (4 families, variable fonts, self-hosted via fontsource)
- Display: **Bricolage Grotesque** 650, h1 `clamp` ~78px at 1440, letter-spacing -0.035em, line-height ~0.98
- Body: **Inter Variable**
- Accent serif italic: **Instrument Serif** (orange italic phrase inside the h1, "Our Strategy.")
- Eyebrows/labels: **JetBrains Mono**, uppercase, letter-spacing .2-.22em, 11-12px

### Layout and components
- **Floating pill header**: fixed, 24px radius, 1px line border, `color-mix(teal-950 45%)` + `backdrop-filter: blur(10px)`; on scroll becomes 92% opaque, blur 16px + saturate, deep shadow, padding shrinks (.4s). 3-column grid (brand / centred nav pill / CTA). Mobile: brand + burger, full menu with `menuIn` keyframe.
- **Hero frame**: rounded 36px bordered card inside 12px page margin, `min-height: min(980px,100svh)`; layers: radial teal gradient, 72px masked grid lines, orange breathing glow at the bottom (`glowBreath` 9 s), two-column grid (copy / orbit visual).
- **Hero orbit visual**: concentric rings with service icons orbiting (48 s spin), 3D tilt on pointer (`rotateX/Y` from `--rx/--ry`, .7 s ease-out), a rotating "current service" card (`01/09`) with per-service SVG micro-animations (`saDraw`, `saRise`, `saWave`, `saBars`, `saPlayhead`, ...). For us: an orbit of tech logos (Flutter, Firebase, React, Next.js, Supabase, Stripe, AI) around a phone/laptop mock showing My Invoice.
- **Buttons**: pill, 52px min-height, orange fill / ghost / dark variants, arrow icon, `transform .35s var(--ease-out)` lift on hover.
- **Stat row** (100+ / 9 / PK·UAE) under the hero CTAs.
- **Logo marquee**: `clientsLeft/Right` keyframes, two rows, pauses to scrollable on reduced motion.
- **Intro/about**: giant tight-tracked statement (`-0.045em`), 4 numbered mission cards.
- **Services**: one featured panel (`panelIn`, `svcProgress` bar auto-advancing) + list of the rest.
- **Process**: 5 steps with a `comet` light travelling along a connector line.
- **Work**: numbered case studies; media uses a **clip-path reveal** (`inset(12% 6% 12% 6% round 24px)` to `inset(0)`, 1.2 s).
- **Creative gallery**, **pricing tabs**, **FAQ accordion**, **contact card** with `contactSpin`, floating **WhatsApp button** with `waPulse`.

### Motion system (what to reproduce)
1. `.reveal`: `opacity 0 + translateY(26px)` to none, `.9s var(--ease-out)`, per-element delay via `--d` (stagger). Toggled by one shared IntersectionObserver adding `.is-in`.
2. Hero headline: masked **line-by-line rise** (`.lines > .line > span`), then badge, lead, CTAs, stats fade in sequentially.
3. Clip-path image reveals (1.1-1.2 s).
4. Header morph on scroll.
5. Ambient loops only in the hero (glow breath 9 s, orbit spin 48 s, chip float) so the page stays calm.
6. Pointer 3D tilt on the hero visual, disabled on `(hover:none)`.
7. Hover: 0.35-0.45 s lift + shadow + border-colour on cards and buttons.
8. `@media (prefers-reduced-motion: reduce)`: reveals shown instantly, animations to .001 ms, marquee becomes scrollable. We must ship the same.

### Mobile behaviour
Breakpoints: 1180 / 1100 / 1023 / 960 / 900 / 860 / 760 / 720 / 640 / 560 / 520 / 480 / 420. At 375px: no horizontal overflow (verified, `scrollWidth == clientWidth`), h1 49.6px, hero stacks to one column, header collapses to brand + burger, buttons go full width (`flex: 100%`), small button min-height 42px, tilt and hover effects switched off via `(hover:none)`, WhatsApp FAB stays bottom-right. `100svh` used instead of `100vh`.

## 3. Target architecture

Keep Vite + React + Tailwind (no framework migration needed), but split `App.tsx`:

```
src/
  data/        profile.ts  experience.ts  projects.ts  skills.ts  faq.ts   (single source for UI + JSON-LD)
  styles/      tokens.css  motion.css  layout.css
  hooks/       useReveal.ts  useScrolled.ts  usePointerTilt.ts  useReducedMotion.ts
  components/  Header, Hero, HeroOrbit, StatRow, TechMarquee, About, Experience,
               Projects (+ ProjectCard, ProjectModal), Process, Skills, FAQ, Contact, Footer, WhatsAppFab
  seo/         Seo.tsx (head tags), jsonld.ts
```
Rules from memory of this owner's preferences: each extracted widget in its own file, shared widgets only when proven, no prop drilling for screen-level state.

Tokens go in CSS variables (as the reference) and are mapped in `tailwind.config.ts` so utilities and hand-written CSS share one palette. Replace the shadcn HSL red theme.

## 4. Phases

### Phase 1: Design, animation, theme, responsive (this phase, content unchanged)
1. Install fontsource variable fonts (Bricolage Grotesque, Inter, JetBrains Mono, Instrument Serif); remove Google Fonts link.
2. `tokens.css` with the palette above; swap Tailwind theme; remove the loading splash, floating icons, mouse-tracking state, red scrollbar.
3. Build Header (pill, scroll morph, mobile menu), Hero frame (grid, glow, headline line-reveal, badge, stats, CTAs), HeroOrbit with tech icons and tilt.
4. Port existing sections into the teal/cream rhythm: About, Projects as numbered case studies with clip-path media reveal and the existing screenshots/modal, Skills/tech marquee, Contact card, Footer, WhatsApp FAB.
5. Motion layer: `useReveal` (one IntersectionObserver), stagger via `--d`, reduced-motion block, `(hover:none)` guards.
6. Mobile pass at 360, 375, 414, 768, 1024, 1440: no horizontal scroll, 44px tap targets, `svh` heights, stacked hero, full-width CTAs.
7. Fix `vercel.json` cache headers (immutable for `/assets/*`, short for HTML).
8. Verify in browser pane (desktop and 375px), Lighthouse performance/accessibility, reduced-motion emulation.

### Phase 2: Content from the updated resume (after Phase 1 is approved)
- Title: "Flutter Developer | Mobile & Full-Stack Engineer"; summary rewritten from the resume (2+ years, Flutter, React, Next.js, TypeScript, Firebase, Supabase, Stripe, AI).
- New Experience section: DM Worx LLC (Apr 2025-Present), Cygnus Ventures (Oct-Dec 2025), Solution Soul (Jun 2024-Feb 2025), Orbilon (Mar-Jun 2024).
- Projects updated and reordered: My Invoice (myinvoice.us), Hudson Tasks (hudsontasks.com, new), Junoon Herbals (junoonherbals.com, new), Clika, Everpure Organics, Realtors Lead, My Madina, Emotions Controller, LinkedIn Content Automation (new). Drop or fold the older generic Flutter apps (Weather, Fit Max, etc.) that the resume no longer lists.
- Skills grouped as in the resume (Mobile, Web, Backend, Payments, Generative AI, Automation, Cloud).
- Education and certifications; contact: umarshad0309@gmail.com, +92 312 4345138, Lahore (Open to Remote).
- Needs your decision: name shown ("Muhammad Umar" vs "Muaaz") and the years of experience (resume says 2+).

### Phase 3: SEO, AI SEO, GEO
- **Rendering**: prerender static HTML at build (`vite-react-ssg` or a prerender plugin) so crawlers and LLM bots receive real content. This is the largest ranking lever for this SPA.
- **Head**: unique title (<=60 chars) and description (<=160), canonical, `theme-color`, real 1200x630 OG image + Twitter card, PNG favicons/apple-touch-icon, `lang`, `hreflang` not needed (single language).
- **Structured data (JSON-LD)**: `Person` (jobTitle, knowsAbout, sameAs LinkedIn/GitHub, alumniOf, worksFor), `ProfilePage`, `WebSite`, per-project `SoftwareApplication`/`CreativeWork`, `FAQPage`, `BreadcrumbList`.
- **Semantic HTML**: one `h1`, ordered `h2/h3`, `<main>/<section aria-labelledby>`, descriptive alt text, real `<a>` links.
- **Files**: `sitemap.xml`, `robots.txt` (allow Googlebot, Bingbot, GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot as you choose), `llms.txt` (+ optional `llms-full.txt`) summarising profile, services, projects, contact.
- **GEO / entity consistency**: identical name, title, bio and links across site, LinkedIn, GitHub README, resume; a question-style FAQ ("Who is Muhammad Umar?", "Which Flutter developer in Lahore is open to remote work?") answered in plain text.
- **Performance (ranking signal)**: AVIF/WebP images with width/height, lazy loading, self-hosted fonts with `font-display: swap`, no render-blocking CSS, LCP < 2.5 s, CLS < 0.1, INP < 200 ms.
- **Off-site**: single canonical domain (decide between `m-umar.vercel.app` and a custom domain), Search Console + Bing Webmaster verification, link from GitHub profile/LinkedIn/project READMEs.

### Phase 4 (optional): contact form
Fix `api/send-email.js` (`createTransport`, ESM export, input validation, rate limit) or replace with a mailto/WhatsApp flow like the reference.

## 5. Risks and open questions
1. **Brand**: copying the teal/orange identity exactly means the portfolio will resemble Adopt Growth's agency brand. Confirmed as intended; only content, logo and imagery stay ours.
2. Name and experience-years mismatch (see Phase 2).
3. Canonical domain choice affects every SEO file.
4. `framer-motion` can be removed if we stay CSS-only like the reference (smaller bundle); keep it only if the project modal needs layout animation.
