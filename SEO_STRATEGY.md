# Portfolio SEO, AI-search and GEO strategy

Site: https://m-umar.vercel.app. Last reviewed 2026-11-08. Markets: UK, Europe, USA, UAE (Dubai).
Rule for this file: a claim is either measured (source named) or marked as a hypothesis. No search-volume numbers are quoted because no keyword tool is connected.

## 1. Evidence (Search Console and Bing, 2026-11-08)

| Source | Result |
|---|---|
| Google Search Console, 3 months | 2 impressions, 0 clicks |
| Queries behind those impressions | "umar client", "site:vercel.app store / admin / dashboard / portfolio / test": these are operator searches, not customers |
| Bing Webmaster, last 7 days | 0 clicks, 0 impressions |
| Google "Generative AI" report | 2 impressions, both on the home page, same day |

Reading: the site has had no real search demand yet. That is normal for a site that is about a month old, sits on a shared `vercel.app` subdomain and has almost no links pointing to it. It is not proof that the pages are broken. Rankings come from three things: pages that match what people type, trust signals from other sites, and time. This file covers the first; section 5 covers the second.

## 2. What the audit found and what was changed

| # | Finding | Fix |
|---|---|---|
| 1 | Home title led with the keyword but not the name, so name searches ("Muhammad Umar Flutter developer") had a weak match | Home title now `Muhammad Umar \| Flutter Developer for Hire (UK, EU, USA)`; description names Lahore, the stack and My Invoice |
| 2 | Home H1 read "Muhammad Umar. Flutter Developer, full-stack and SaaS developer. Flutter Developer." (repeated, awkward) | Screen-reader and crawler text is now one clear sentence: Flutter developer and full-stack engineer in Lahore, remote for UK, EU and US clients |
| 3 | "Muhammad Umar" is a very common name; nothing separated this person from others | Person schema now has `alternateName` (Umar Arshad, the name used on myinvoice.us), a `disambiguatingDescription`, and `worksFor` with the DM Worx URL; llms.txt states the name is not to be confused with others |
| 4 | Every service-page H2 was generic ("What's included", "How it works", "Common questions") | H2s now carry the service name, e.g. "What's included in Flutter app development" |
| 5 | Titles used the same weak pattern and missed the phrases buyers type ("Flutter app developer for hire", "React developer for hire", "SaaS developer") | Titles and descriptions rewritten per page (section 3) |
| 6 | Sitemap `lastmod` was stamped with the build date on every URL, so it changed on every deploy without content changing | `profile.updated` is a fixed date, bumped only when content changes; same value feeds JSON-LD `dateModified` and llms.txt |
| 7 | Sitemap and `<head>` carried en-GB, en-US and en hreflang tags that all pointed at the same URL | Removed. One English page per URL needs no hreflang; geo intent is carried by the region pages |
| 8 | Only five service pages; no page for Firebase, AI features or e-commerce although the work exists | Three new pages with facts taken from real projects (section 3) |
| 9 | The My Invoice page did not answer "who built My Invoice" or separate it from the unrelated MyInvoice login portals | Two new FAQs on the case study (also in FAQPage schema), a title that pairs the app with the builder's name, and a line in llms.txt |

Unchanged on purpose: robots.txt (all major search and AI bots allowed), canonical tags, the Search Console verification tag, JSON-LD graph structure, prerendered HTML for every route.

## 3. Keyword map, page by page

Priority is by intent and fit. "Primary" is what the title and H1 aim at; "secondary" appears in the description, H2s and body.

| Page | Primary | Secondary |
|---|---|---|
| `/` | muhammad umar flutter developer; flutter developer for hire | flutter developer lahore, remote flutter developer, full-stack developer for hire, umar arshad flutter |
| `/flutter-app-development` | flutter app developer for hire | flutter app development services, ios and android app developer, flutter firebase developer |
| `/saas-app-development` | saas app developer | saas development flutter react, mobile app web portal admin dashboard, subscription app developer |
| `/in-app-purchases-and-payments` | in-app purchase developer; stripe developer | flutter in-app purchase, app store google play subscriptions, paypal integration |
| `/web-app-and-admin-panel-development` | react and next.js developer for hire | admin panel development, web app developer, supabase developer |
| `/app-store-and-google-play-deployment` | app store and google play deployment | publish flutter app, app store submission help |
| `/firebase-developer-for-hire` (new) | firebase developer for hire | firebase flutter developer, cloud functions developer, firebase authentication firestore app check |
| `/ai-app-development` (new) | ai app developer; openai gemini app development | add ai assistant to flutter app, receipt scanning ai, ai automation n8n |
| `/ecommerce-website-development` (new) | e-commerce website developer for hire | custom online store developer, shopping app flutter, store admin panel |
| `/flutter-developer-for-hire-uk` | flutter developer for hire uk | remote flutter developer uk, uk hours, gdpr-aware app |
| `/flutter-developer-for-hire-usa` | flutter developer for hire usa | remote flutter developer us, stripe, us startups |
| `/flutter-developer-for-hire-europe` | flutter developer for hire europe | remote flutter developer europe, spain e-commerce app |
| `/web-developer-for-hire-dubai` | website and e-commerce developer dubai | bilingual english arabic website, custom website uae |
| `/projects/my-invoice` | my invoice app; who built my invoice | myinvoice.us developer, invoice estimate app for contractors, flutter saas case study |
| `/projects/olizon` | olizon flutter e-commerce app spain | flutter shopping app, olive oil app |
| `/projects/clika` | clika app | flutter community app case study |
| `/projects/emotion-controller` | emotion controller flutter app | flutter ai mood app, google ml kit face detection |

Rules followed on every page: one H1, titles at 60 characters or fewer, descriptions at 160 or fewer, the page's keyword in title, H1 and first paragraph, FAQ answers written as complete sentences (they feed AI answers), links to two or three related pages, Service or SoftwareApplication plus FAQPage and BreadcrumbList schema.

## 4. My Invoice: how the two sites support each other

The product site (`my_invoice/landing_page`, strategy in its own `SEO_STRATEGY.md`) already targets brand and invoice-template searches in the US. Its llms.txt names "Muhammad Umar (Umar Arshad)" as founder and product architect and links to this portfolio. This portfolio links to myinvoice.us from the case study, the project card and the schema. Gaps found on the product-site side, not changed here because it is a separate production repository:

1. Its Organization or WebSite JSON-LD does not link the founder to the portfolio. Adding a `founder` Person node with `url: https://m-umar.vercel.app` and `sameAs` (LinkedIn, GitHub) would close the loop for search engines.
2. Its footer credits DM Worx LLC but not the developer. A visible "Built by Muhammad Umar" link to the case study gives a real, crawlable backlink.

## 5. What code cannot do (needs you)

Ranking for "Flutter developer for hire" competes with Upwork, Fiverr, Contra and agency sites that have years of links. Realistic targets for the first months are the name, "My Invoice" plus the builder, region pages and long-tail service phrases. To get there:

1. **Backlinks and profiles.** Put https://m-umar.vercel.app on LinkedIn (website and Featured), GitHub profile README and pinned repos, Upwork, Fiverr, Contra, Clutch and the Google Play listing for Clika. Use the same name and role wording everywhere.
2. **Custom domain.** A name-based domain (for example your own name with .dev or .com) ranks more easily than a shared `vercel.app` subdomain, and survives a change of host. Redirect the old URL permanently when you move.
3. **Link from myinvoice.us** to the case study (section 4).
4. **Google Search Console.** Request indexing for the three new pages, the Dubai page and the My Invoice page. Resubmit `sitemap.xml` after deploy. Check the Pages report in a week for "Discovered, not indexed".
5. **Bing.** Resubmit the sitemap; use IndexNow if the form keeps failing.
6. **Content over time.** One real write-up per month (a bug and how it was fixed, a store-release checklist) gives search engines fresh pages and gives people a reason to link.

## 6. Measuring

Check weekly in Search Console: impressions by page and query, then average position for the Section 3 primary phrases. Judge progress by impressions first (is the page being shown), then clicks. Expect weeks, not days, between a change and a visible move.
