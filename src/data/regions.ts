import type { LandingPage } from "./landing";

// Pages for clients in the UK, the USA and Europe. Facts only: where I work from, how the time zones line up,
// what I have shipped. Nothing here claims an office, a client or a certification I do not have.
export type RegionKey = "uk" | "usa" | "eu";

export const regionPages: (LandingPage & { region: RegionKey })[] = [
  {
    region: "uk",
    slug: "flutter-developer-for-hire-uk",
    title: "Hire a Flutter Developer for UK Projects | Muhammad Umar",
    description:
      "Remote Flutter and full-stack developer for UK startups and businesses: iOS and Android apps, SaaS, admin panels and App Store release, in English.",
    eyebrow: "Flutter developer for UK clients",
    h1: "Flutter developer for UK startups and businesses",
    serviceName: "Flutter development for UK clients",
    lead:
      "I am a remote Flutter and full-stack developer who builds iOS and Android apps, SaaS products and admin panels for clients in the United Kingdom. I work from Lahore, four to five hours ahead of London, so the UK working day overlaps my afternoon and evening and calls are easy to book. Everything is in English, from the first brief to the release notes.",
    includes: [
      { title: "Hours that overlap with yours", text: "London is four hours behind Lahore in summer and five in winter. Your morning stand-up, review call or demo fits into the end of my working day, and written updates cover the rest." },
      { title: "Apps built for UK users", text: "Flutter apps for iOS and Android with a clean, accessible interface, tested across screen sizes, on Firebase or Supabase backends that handle sign-in, data and push notifications." },
      { title: "GDPR-aware features", text: "Consent screens, data export and deletion flows, minimal data collection and role-based access are designed in from the start when your product handles personal data. Legal review stays with your adviser." },
      { title: "Payments your customers expect", text: "Stripe for card payments and App Store or Google Play subscriptions, wired into the app and tested in sandbox mode before any live key is used." },
      { title: "Admin tools for your team", text: "A role-based admin panel to manage users, payments and content, so your operations team does not need a developer for daily tasks." },
      { title: "Store release handled", text: "Signing, store listings, review follow-up and later updates for the App Store and Google Play, published from your own developer accounts." },
    ],
    steps: [
      { title: "Brief", text: "A short call or written brief to agree users, scope and what the first release must do." },
      { title: "Design", text: "Screens and flows are drawn and approved before building starts." },
      { title: "Build", text: "Feature by feature with working builds and a short demo each week." },
      { title: "Release", text: "Testing across devices, store submission and a plan for updates." },
    ],
    tech: ["Flutter", "Dart", "Firebase", "Supabase", "Stripe", "In-App Purchases", "React", "TypeScript", "App Store", "Google Play"],
    projects: ["My Invoice", "Clika App", "Hudson Tasks"],
    faq: [
      { q: "Can you work UK hours?", a: "Lahore is four to five hours ahead of London, so the UK morning overlaps my afternoon and the UK afternoon my evening. I schedule calls in that window and send written updates so nothing waits on a time zone." },
      { q: "Do you build GDPR-aware apps?", a: "I build the technical parts: consent flows, data export and deletion, minimal data collection and role-based access. A solicitor or data protection adviser should still review your policies and contracts." },
      { q: "Do you work with UK startups and agencies?", a: "Yes. I take on remote projects from founders, startups and agencies, in English: new apps, SaaS builds, admin panels, or new features for an existing Flutter app." },
      { q: "How do we stay in touch during the project?", a: "Email and WhatsApp for quick questions, scheduled video calls for planning and demos, and a written update every week so you always know what is done and what is next." },
      { q: "Can the app be published under my company's store accounts?", a: "Yes. Apps are published from your own App Store and Google Play developer accounts, so you own the listing and the customer relationship, and I am added as a team member for the release." },
    ],
    related: ["flutter-app-development", "saas-app-development", "app-store-and-google-play-deployment"],
  },
  {
    region: "usa",
    slug: "flutter-developer-for-hire-usa",
    title: "Hire a Flutter Developer for US Projects | Muhammad Umar",
    description:
      "Remote Flutter and full-stack developer for US startups and businesses: iOS and Android apps, SaaS, Stripe payments, admin panels and store release.",
    eyebrow: "Flutter developer for US clients",
    h1: "Flutter developer for US startups and businesses",
    serviceName: "Flutter development for US clients",
    lead:
      "I am a remote Flutter and full-stack developer who builds iOS and Android apps, SaaS products and admin dashboards for clients in the United States. My own main product, My Invoice, is built for the US market, and I have built a lead platform for US real estate agents. I work from Lahore, so I run projects asynchronously first, with clear written updates and calls booked in the overlap of your morning and my evening.",
    includes: [
      { title: "Async-first, call-friendly", text: "US East morning is Lahore evening, so planning and demo calls fit into a short window each week. Written updates, recorded demos and a shared task list keep work moving while you sleep." },
      { title: "Built for the US market", text: "My Invoice, my main product, is a US-focused invoicing SaaS with a Flutter app, React web portal, admin dashboard, Stripe payments and App Store and Google Play subscriptions." },
      { title: "Payments and subscriptions", text: "Stripe for client payments and billing, plus App Store and Google Play in-app purchases for digital subscriptions, with test-mode QA before any live key is used." },
      { title: "Lead and CRM platforms", text: "I built Realtors Lead, a lead generation platform for US real estate agents with PayPal subscriptions and automated email delivery." },
      { title: "Admin dashboards that run the business", text: "Role-based dashboards for users, transactions, invoices and analytics, with activity logging so your team can see what changed and when." },
      { title: "Release and updates", text: "Signing, store listings, review follow-up and versioned updates for the App Store and Google Play, from your own developer accounts." },
    ],
    steps: [
      { title: "Brief", text: "A short call or written brief to agree users, scope and the first release." },
      { title: "Design", text: "Screens and flows approved before building starts." },
      { title: "Build", text: "Weekly working builds with a recorded demo, so you can review on your own schedule." },
      { title: "Release", text: "Testing across devices, store submission and a plan for updates." },
    ],
    tech: ["Flutter", "Dart", "Firebase", "Stripe", "PayPal", "In-App Purchases", "React", "TypeScript", "Cloudflare Turnstile", "App Store", "Google Play"],
    projects: ["My Invoice", "Realtors Lead", "Hudson Tasks"],
    faq: [
      { q: "How do you handle the time difference with the US?", a: "Lahore is nine to ten hours ahead of New York. I work asynchronously first: written updates, recorded demos and a shared task list, with a call booked in the overlap of your morning and my evening when a decision needs talking through." },
      { q: "Have you built products for US users?", a: "Yes. My Invoice, my main product, is built for the US market, and Realtors Lead is a lead generation platform for US real estate agents with PayPal subscriptions." },
      { q: "Can you add Stripe payments or in-app subscriptions?", a: "Yes. I have built Stripe client payments and App Store and Google Play subscriptions into My Invoice, tested in sandbox mode before going live." },
      { q: "Can you take a project from idea to the App Store?", a: "Yes. I cover design, development, backend, payments and store release, so one person owns the result from first screen to public launch." },
      { q: "Do you work with agencies and founders?", a: "Yes. I take on remote projects from founders, startups and agencies, in English, and can work as an extension of your team." },
    ],
    related: ["saas-app-development", "in-app-purchases-and-payments", "web-app-and-admin-panel-development"],
  },
  {
    region: "eu",
    slug: "flutter-developer-for-hire-europe",
    title: "Hire a Flutter Developer for European Teams | Muhammad Umar",
    description:
      "Remote Flutter and full-stack developer for European startups and agencies: iOS and Android apps, SaaS, admin panels and store release, working in English.",
    eyebrow: "Flutter developer for European clients",
    h1: "Flutter developer for European startups and agencies",
    serviceName: "Flutter development for European clients",
    lead:
      "I am a remote Flutter and full-stack developer who builds iOS and Android apps, SaaS products and admin panels for teams across Europe. Lahore is three to four hours ahead of Central Europe, so most of your working day overlaps mine. I work in English, plan with you in a short call, and ship in small steps you can review every week.",
    includes: [
      { title: "A large shared working day", text: "Central Europe is three hours behind Lahore in summer and four in winter, so stand-ups, reviews and demos fit comfortably into the same day." },
      { title: "One codebase, two stores", text: "Flutter apps for iOS and Android from a single codebase, with adaptive layouts, Firebase or Supabase backends and push notifications." },
      { title: "GDPR-aware features", text: "Consent flows, data export and deletion, minimal data collection and role-based access are designed in when your product handles personal data. Compliance review stays with your legal adviser." },
      { title: "Web and admin as well", text: "React and Next.js websites, portals and role-based admin panels on the same backend, so the whole product ships together." },
      { title: "Payments for your market", text: "Stripe and PayPal for payments, plus App Store and Google Play subscriptions, tested in sandbox mode before any live key is used." },
      { title: "Store release handled", text: "Signing, store listings, review follow-up and later updates, published from your own developer accounts." },
    ],
    steps: [
      { title: "Brief", text: "A short call or written brief to agree users, scope and the first release." },
      { title: "Design", text: "Screens and flows approved before building starts." },
      { title: "Build", text: "Feature by feature with a working build and short demo each week." },
      { title: "Release", text: "Testing across devices, store submission and a plan for updates." },
    ],
    tech: ["Flutter", "Dart", "Firebase", "Supabase", "Stripe", "PayPal", "React", "Next.js", "TypeScript", "App Store", "Google Play"],
    projects: ["My Invoice", "Clika App", "Junoon Herbals"],
    faq: [
      { q: "How much of the working day do we share?", a: "Lahore is three hours ahead of Central European Summer Time and four hours ahead in winter, so the European morning and afternoon both overlap my working day." },
      { q: "Do you build GDPR-aware apps?", a: "I build the technical parts: consent flows, data export and deletion, minimal data collection and role-based access. Your legal adviser should still review policies and data-processing agreements." },
      { q: "Do you work with agencies and startups in Europe?", a: "Yes. I take on remote projects from founders, startups and agencies across Europe, in English: new apps, SaaS builds, admin panels, or features for an existing Flutter app." },
      { q: "Can you build web and mobile together?", a: "Yes. Flutter for iOS and Android, React or Next.js for the website and portal, and an admin panel, all on one shared backend." },
      { q: "Can the apps be published under our company's accounts?", a: "Yes. Apps are published from your own App Store and Google Play developer accounts so you own the listings." },
    ],
    related: ["flutter-app-development", "web-app-and-admin-panel-development", "saas-app-development"],
  },
];
