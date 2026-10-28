export type LandingPage = {
  slug: string;
  title: string; // <title>, 60 characters or fewer
  description: string; // meta description, 160 characters or fewer
  eyebrow: string;
  h1: string;
  lead: string;
  includes: { title: string; text: string }[];
  steps: { title: string; text: string }[];
  tech: string[]; // names from data/tech.ts
  projects: string[]; // titles from data/projects.ts
  faq: { q: string; a: string }[];
  related: string[]; // other slugs
  serviceName: string; // for Service structured data
};

export const landingPages: LandingPage[] = [
  {
    slug: "flutter-app-development",
    title: "Flutter App Development Services | Muhammad Umar",
    description:
      "Hire a Flutter developer for iOS and Android apps on Firebase, with in-app purchases, push notifications and App Store and Google Play release.",
    eyebrow: "Flutter app development",
    h1: "Flutter app development for iOS and Android",
    serviceName: "Flutter app development",
    lead:
      "I build cross-platform mobile apps in Flutter and Dart, from the first screen to the App Store and Google Play release. One codebase gives you native-feeling apps on iOS and Android, backed by Firebase or Supabase, with the features a paying product needs: sign-in, real-time data, push notifications, subscriptions and payments.",
    includes: [
      { title: "One codebase, two platforms", text: "Flutter and Dart apps for iOS and Android from a single codebase, with adaptive UI tested across screen sizes so the experience stays consistent." },
      { title: "Firebase or Supabase backend", text: "Authentication, Firestore or PostgreSQL, Cloud Functions and FCM push notifications, designed together with the app instead of bolted on later." },
      { title: "In-app purchases and payments", text: "App Store and Google Play subscriptions for digital products, and Stripe for client payments, built into the app flow." },
      { title: "State management that scales", text: "Provider and Riverpod with a feature-first modular structure and Git-based code review, so new features do not break old ones." },
      { title: "AI features when they help", text: "In-app assistants through the OpenAI API and on-device vision with Google ML Kit, added where they solve a real user problem." },
      { title: "Release and updates", text: "Build configuration, signing, store submission and later updates, so the app reaches users and stays current." },
    ],
    steps: [
      { title: "Scope", text: "We agree on users, core flows and what the first release must do." },
      { title: "Design", text: "Screens and flows are drawn and approved before building starts." },
      { title: "Build", text: "Feature by feature in modular code, reviewed in Git, with working builds along the way." },
      { title: "Release", text: "Testing across devices, store submission and a plan for updates." },
    ],
    tech: ["Flutter", "Dart", "Firebase", "Riverpod", "Provider", "Cloud Functions", "Stripe", "OpenAI API", "Google ML Kit", "App Store", "Google Play"],
    projects: ["My Invoice", "Clika App", "Emotions Controller App"],
    faq: [
      { q: "Do you work as a freelance mobile app developer?", a: "Yes. I take on remote freelance projects as a Flutter and mobile app developer for iOS and Android, from a first prototype to the App Store and Google Play release, alongside my role at DM Worx LLC." },
      { q: "Why choose Flutter instead of two native apps?", a: "Flutter lets one codebase serve iOS and Android, which shortens delivery and keeps both apps in step. It suits most business products, and native modules can be added where a platform feature needs them." },
      { q: "Which backends do you use with Flutter?", a: "Firebase (Auth, Firestore, Cloud Functions, FCM, Crashlytics), Supabase, PostgreSQL and REST APIs, chosen to fit the product and the team that will run it." },
      { q: "Can you also publish the app to the stores?", a: "Yes. I handle the build, signing, store listing and submission, and Clika is live on Google Play. See the App Store and Google Play deployment page for what that covers." },
      { q: "Do you build the admin side too?", a: "Yes. Products usually need an admin dashboard for users, payments and content, and I build that on the same backend as the app." },
    ],
    related: ["saas-app-development", "app-store-and-google-play-deployment", "in-app-purchases-and-payments"],
  },
  {
    slug: "saas-app-development",
    title: "SaaS App Development: Mobile, Web, Admin | Muhammad Umar",
    description:
      "SaaS development by one developer: Flutter mobile app, React web portal and admin dashboard on a shared backend, with subscriptions and payments.",
    eyebrow: "SaaS app development",
    h1: "SaaS app development: mobile app, web portal and admin dashboard",
    serviceName: "SaaS app development",
    lead:
      "I build SaaS products end to end: a Flutter mobile app, a React web portal and a separate admin dashboard on one shared backend, with subscriptions, payments and the operations tooling a business needs after launch. My Invoice, my main product, is built exactly this way, so the approach here is proven on my own work.",
    includes: [
      { title: "Multi-platform from day one", text: "Mobile, web and admin are planned together, so features, permissions and data stay consistent across all three." },
      { title: "One shared backend", text: "Firebase (Auth, Firestore, Cloud Functions) or Supabase and PostgreSQL behind every platform, with real-time data where it matters." },
      { title: "Subscriptions and billing", text: "App Store and Google Play subscriptions plus Stripe payments, with reminders sent by push notification and email." },
      { title: "An admin dashboard that runs the business", text: "Operators control users, transactions, invoices and analytics, with integrated support chat, without needing a developer for daily tasks." },
      { title: "Security against abuse", text: "Role-based access control, Cloudflare Turnstile verified on the server, and reCAPTCHA-backed Firebase App Check on sign-in and recovery flows." },
      { title: "Built to grow", text: "Feature-first modular architecture and Git-based review keep releases consistent as the product gets bigger." },
    ],
    steps: [
      { title: "Define", text: "Plans, roles and the single workflow your product must do well." },
      { title: "Model", text: "Data, permissions and billing designed once for all platforms." },
      { title: "Build", text: "Mobile app, web portal and admin dashboard built on the shared backend." },
      { title: "Launch and iterate", text: "Store release, monitoring and the next features, based on real usage." },
    ],
    tech: ["Flutter", "React", "TypeScript", "Firebase", "Supabase", "Stripe", "In-App Purchases", "Cloudflare Turnstile", "reCAPTCHA", "Firebase App Check", "Vercel"],
    projects: ["My Invoice", "Hudson Tasks"],
    faq: [
      { q: "Are you a Firebase developer as well as a Flutter developer?", a: "Yes. SaaS products need a backend, so I design and build on Firebase (Authentication, Firestore, Cloud Functions, FCM) or Supabase and PostgreSQL, together with the Flutter and React front ends. I can also start with a focused MVP and grow it." },
      { q: "What does a SaaS first release include?", a: "Account sign-up, the one core workflow your users pay for, a subscription or payment path, and an admin view to manage users and revenue. More is added after real usage shows what matters." },
      { q: "Can one developer cover mobile, web and admin?", a: "Yes. I design and build all three on one backend, which avoids hand-offs between teams and keeps features consistent across platforms." },
      { q: "How do you protect a SaaS from bots and abuse?", a: "With Cloudflare Turnstile checked on the server, reCAPTCHA-backed Firebase App Check and role-based access control, as used in My Invoice." },
      { q: "Do you support the product after launch?", a: "Yes. Monitoring, fixes and new features are part of how I work, and the admin tooling is built so day-to-day operations do not depend on a developer." },
    ],
    related: ["flutter-app-development", "in-app-purchases-and-payments", "web-app-and-admin-panel-development"],
  },
  {
    slug: "in-app-purchases-and-payments",
    title: "In-App Purchases and Stripe Payments | Muhammad Umar",
    description:
      "Subscriptions and payments done right: App Store and Google Play in-app purchases, Stripe and PayPal for Flutter and web apps, built and tested first.",
    eyebrow: "In-app purchases and payments",
    h1: "In-app purchase and payment integration for Flutter and web apps",
    serviceName: "In-app purchase and payment integration",
    lead:
      "I integrate subscriptions and payments so revenue works from the first release: App Store and Google Play in-app purchases for mobile subscriptions, Stripe for client payments and PayPal for web checkouts and plans. Reminders, renewals and admin reporting are part of the build, not an afterthought.",
    includes: [
      { title: "Store subscriptions", text: "In-app purchases through the App Store and Google Play, set up as part of the app and its release process." },
      { title: "Stripe payments", text: "Client payments through Stripe, as used in My Invoice, with the payment state reflected in the app and the admin dashboard." },
      { title: "PayPal checkout", text: "PayPal for web subscriptions and plan purchases, as used on Realtors Lead for agent subscriptions." },
      { title: "Reminders and receipts", text: "Push notifications through FCM and email through SMTP for payment reminders and confirmations." },
      { title: "Admin visibility", text: "Transactions, invoices and analytics in an admin dashboard so you can see money coming in without opening a payment provider." },
      { title: "Tested before live", text: "Everything is built and tested in sandbox or test mode before live keys are switched on." },
    ],
    steps: [
      { title: "Choose the model", text: "Store subscription, Stripe, PayPal, or a mix, based on what you sell and where." },
      { title: "Configure", text: "Products and plans are set up in the stores and payment providers." },
      { title: "Implement", text: "Purchase, renewal and failure handling in the app and backend." },
      { title: "Test and go live", text: "Sandbox testing first, then live keys and monitoring." },
    ],
    tech: ["In-App Purchases", "Stripe", "PayPal", "Firebase", "Cloud Functions", "App Store", "Google Play", "SMTP"],
    projects: ["My Invoice", "Realtors Lead"],
    faq: [
      { q: "Do I need in-app purchases or Stripe?", a: "Digital features and content sold inside a mobile app generally go through the App Store and Google Play. Stripe suits payments between a business and its clients, such as invoices. Many products need both." },
      { q: "Can you add subscriptions to an existing app?", a: "Yes, as long as I can review how the app and backend are structured first. Then I add products, purchase flows and renewal handling." },
      { q: "Which payment providers do you integrate?", a: "App Store and Google Play in-app purchases, Stripe and PayPal." },
      { q: "How do you keep payments safe while building?", a: "By working in test mode first and only enabling live keys after the full flow has been checked, including failures and refunds." },
    ],
    related: ["saas-app-development", "flutter-app-development", "web-app-and-admin-panel-development"],
  },
  {
    slug: "web-app-and-admin-panel-development",
    title: "Web App and Admin Panel Development | Muhammad Umar",
    description:
      "React and Next.js developer for websites, web apps and admin dashboards with role-based access, e-commerce and live analytics on Supabase or Firebase.",
    eyebrow: "Web apps and admin panels",
    h1: "React and Next.js web apps, websites and admin panels",
    serviceName: "Web app and admin panel development",
    lead:
      "I build fast, responsive websites and web apps in React, Next.js and TypeScript, plus the admin panels that let you run them: products, orders, users, content and analytics, with role-based access. Recent builds include a workforce management platform, Hudson Tasks, and an e-commerce site with a custom admin, Junoon Herbals.",
    includes: [
      { title: "Websites and web apps", text: "React, Next.js and TypeScript builds that are responsive, quick to load and set up to be found by search engines." },
      { title: "Admin panels", text: "Role-based dashboards where staff manage users, orders, payments, content and reports without touching code." },
      { title: "E-commerce", text: "Product catalogues, carts with multiple pricing tiers, orders and a full admin, as on Everpure Organics and Junoon Herbals." },
      { title: "Live analytics", text: "A visitor dashboard showing active users, traffic source, city and pages visited, built for Junoon Herbals." },
      { title: "Integrations", text: "Meta Pixel configurable from the admin panel, SMTP email notifications and PayPal payments." },
      { title: "Hosting and deployment", text: "Vercel, AWS and DigitalOcean setups with Git-based deployment." },
    ],
    steps: [
      { title: "Plan", text: "Pages, roles and the data your admin needs to control." },
      { title: "Design", text: "Layouts for desktop and mobile agreed before build." },
      { title: "Build", text: "Front end, admin and database built together on Supabase or Firebase." },
      { title: "Launch", text: "Deployment, tracking set up and a simple way for you to update content." },
    ],
    tech: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Supabase", "PostgreSQL", "Vercel", "SMTP", "PayPal"],
    projects: ["Hudson Tasks", "Junoon Herbals", "Everpure Organics", "Realtors Lead", "My Madina"],
    faq: [
      { q: "Do you work as a React developer for hire?", a: "Yes. I build websites, web apps and admin panels in React, Next.js and TypeScript, with Supabase or Firebase behind them, as a remote React developer for founders, startups and agencies." },
      { q: "Do you build the website and the admin panel together?", a: "Yes. The public site and the admin share one database, so what your team changes in the admin appears on the site straight away." },
      { q: "Can I update content myself?", a: "Yes. The admin panel is built around the content, products and settings you need to change, so day-to-day updates do not need a developer." },
      { q: "Which stack do you use for the web?", a: "React, Next.js and TypeScript on the front end, with Supabase, Firebase, PostgreSQL or Node.js behind it, depending on the project." },
      { q: "Will the site be set up for search engines?", a: "Yes. That means semantic pages, fast loading, correct metadata and structured data, which this portfolio itself is built to show." },
    ],
    related: ["saas-app-development", "flutter-app-development", "in-app-purchases-and-payments"],
  },
  {
    slug: "app-store-and-google-play-deployment",
    title: "App Store and Google Play Deployment | Muhammad Umar",
    description:
      "Publish your Flutter app: build signing, store listings, submission, testing tracks and updates for the App Store and Google Play, by a developer who ships.",
    eyebrow: "Store deployment",
    h1: "App Store and Google Play deployment for Flutter apps",
    serviceName: "App Store and Google Play deployment",
    lead:
      "Getting an app into the stores is a project of its own. I handle build configuration, signing, store listings, submission and updates for iOS and Android, so your Flutter app goes from a working build to a published release. I have released multiple cross-platform apps to the App Store and Google Play for clients, each delivered within the agreed deadlines.",
    includes: [
      { title: "Build and signing", text: "Release builds, app identifiers and signing set up correctly for both stores." },
      { title: "Store listings", text: "Names, descriptions, screenshots and required details prepared for review." },
      { title: "Submission and review", text: "Submitting to the App Store and Google Play and responding to review feedback." },
      { title: "Testing tracks", text: "Internal testing builds so the app can be checked on real devices before public release." },
      { title: "Subscriptions in the stores", text: "In-app purchase products configured in App Store Connect and Google Play Console." },
      { title: "CI/CD and updates", text: "Git-based builds and versioned updates, so later releases are repeatable." },
    ],
    steps: [
      { title: "Prepare", text: "Developer accounts, identifiers and the assets each store requires." },
      { title: "Configure", text: "Release builds, signing and testing tracks." },
      { title: "Submit", text: "Store submission and review follow-up." },
      { title: "Release and update", text: "Public release, then versioned updates." },
    ],
    tech: ["Flutter", "App Store", "Google Play", "Git", "Firebase", "In-App Purchases"],
    projects: ["My Invoice", "Clika App"],
    faq: [
      { q: "Can you publish an app someone else built?", a: "Often yes, once I have reviewed the project. Send the details and I will say what it needs before it can be released." },
      { q: "How long does store review take?", a: "That depends on the store and the app, and it is outside any developer's control. Planning for review time is part of the release schedule." },
      { q: "Do you set up in-app purchases in the stores?", a: "Yes. Subscription products are configured in App Store Connect and Google Play Console as part of the release." },
      { q: "Do you handle updates after launch?", a: "Yes. Versioning and repeatable builds make later updates straightforward." },
    ],
    related: ["flutter-app-development", "in-app-purchases-and-payments", "saas-app-development"],
  },
];

import { caseStudies } from "./caseStudies";

export { caseStudies };
// Kept for older imports: the My Invoice case study.
export const caseStudy = caseStudies[0];

import { regionPages } from "./regions";

export { regionPages };
// Every page that uses the service-page template: the five services plus the UK, USA and Europe pages.
export const allServicePages: LandingPage[] = [...landingPages, ...regionPages];
export const landingBySlug = (slug: string) => allServicePages.find((p) => p.slug === slug);
