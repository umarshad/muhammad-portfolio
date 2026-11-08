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
    title: "Flutter App Developer for Hire | Muhammad Umar",
    description:
      "Flutter app development services for iOS and Android: Firebase backend, in-app purchases, push notifications and App Store and Google Play release.",
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
    related: ["saas-app-development", "firebase-developer-for-hire", "ai-app-development"],
  },
  {
    slug: "saas-app-development",
    title: "SaaS App Developer: Mobile, Web, Admin | Muhammad Umar",
    description:
      "Hire a SaaS developer for the whole product: Flutter mobile app, React web portal and admin dashboard on one Firebase backend, with subscriptions.",
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
    related: ["flutter-app-development", "firebase-developer-for-hire", "in-app-purchases-and-payments"],
  },
  {
    slug: "in-app-purchases-and-payments",
    title: "In-App Purchase and Stripe Developer | Muhammad Umar",
    description:
      "In-app purchase, subscription and Stripe payment integration for Flutter and web apps: App Store, Google Play and PayPal, tested before going live.",
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
    title: "React and Next.js Developer for Hire | Muhammad Umar",
    description:
      "Hire a React and Next.js developer for websites, web apps, admin panels and e-commerce, with role-based access and live analytics on Supabase or Firebase.",
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
    related: ["ecommerce-website-development", "saas-app-development", "flutter-app-development"],
  },
  {
    slug: "app-store-and-google-play-deployment",
    title: "App Store and Google Play Deployment | Muhammad Umar",
    description:
      "Publish your Flutter app to the App Store and Google Play: build signing, store listings, submission, testing tracks, review follow-up and updates.",
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
  {
    slug: "firebase-developer-for-hire",
    title: "Firebase Developer for Hire: Auth, Cloud Functions",
    description:
      "Hire a Firebase developer for Flutter and web apps: Authentication, Firestore, Cloud Functions, push notifications, App Check and security rules.",
    eyebrow: "Firebase development",
    h1: "Firebase developer for Flutter and web apps",
    serviceName: "Firebase backend development",
    lead:
      "I design and build Firebase backends for Flutter and React products: sign-in, Firestore data, Cloud Functions for the rules that must run on a server, push notifications and abuse protection. My Invoice runs its mobile app, web app and admin dashboard on one Firebase project, so this is the stack I know best from real use.",
    includes: [
      { title: "Authentication", text: "Email and password sign-in, recovery flows and role-based access, with the checks that matter run on the server and not in the app." },
      { title: "Firestore data design", text: "Collections, indexes and security rules planned around how the app reads data, so screens load quickly and users only see their own records." },
      { title: "Cloud Functions", text: "Server code for payments, reminders, emails, signed PDF generation, subscriptions and AI requests, so business rules cannot be bypassed from a client." },
      { title: "Push notifications", text: "Firebase Cloud Messaging for payment reminders and follow-ups, paired with email through SMTP where a message must reach people outside the app." },
      { title: "Abuse protection", text: "Cloudflare Turnstile verified inside Cloud Functions and reCAPTCHA-backed Firebase App Check on sign-in and recovery, as used in My Invoice." },
      { title: "One backend for every platform", text: "The Flutter app, the React web app and the admin dashboard read the same data, so web and mobile always agree." },
    ],
    steps: [
      { title: "Model", text: "Data, roles and rules drawn up before any screen is built." },
      { title: "Build", text: "Authentication, Firestore and Cloud Functions built together with the app." },
      { title: "Secure", text: "Security rules, App Check and server-side verification added and tested." },
      { title: "Operate", text: "Monitoring, reminders and an admin view so the team can run it day to day." },
    ],
    tech: ["Firebase", "Cloud Functions", "Firebase App Check", "Cloudflare Turnstile", "reCAPTCHA", "Flutter", "React", "TypeScript", "Stripe", "SMTP"],
    projects: ["My Invoice", "Olizon"],
    faq: [
      { q: "Can you build the whole Firebase backend for my app?", a: "Yes. I design the data model, security rules and Cloud Functions together with the Flutter or React front end, so the backend fits the product instead of being added later." },
      { q: "Do you use Firebase or Supabase?", a: "Both. Firebase suits real-time mobile products and My Invoice uses it for Authentication, Firestore, Storage, Cloud Messaging and Cloud Functions. Supabase and PostgreSQL suit data that is more relational, as on Hudson Tasks and Junoon Herbals." },
      { q: "How do you keep a Firebase app secure?", a: "With Firestore security rules, role-based access, Cloudflare Turnstile checked on the server and reCAPTCHA-backed Firebase App Check, so sign-ups, logins and payments are protected from abuse." },
      { q: "Can you add Firebase to an existing Flutter app?", a: "Yes, once I have looked at how the app is structured. I can add sign-in, a database, push notifications or server functions without rewriting the screens." },
    ],
    related: ["flutter-app-development", "saas-app-development", "ai-app-development"],
  },
  {
    slug: "ai-app-development",
    title: "AI App Developer: OpenAI and Gemini | Muhammad Umar",
    description:
      "Add AI to your Flutter or web app: OpenAI and Gemini assistants, receipt scanning, on-device face detection and AI content automation, built and checked.",
    eyebrow: "AI features and automation",
    h1: "AI app development with OpenAI and Gemini for Flutter and web apps",
    serviceName: "AI app development",
    lead:
      "I add AI where it solves a real problem for users: an assistant that drafts an estimate from a plain-language job description, receipt scanning, mood detection from a face and a chat, and an automated pipeline that writes and publishes posts. These are features I have built and shipped in My Invoice, Emotions Controller and LinkedIn Content Automation.",
    includes: [
      { title: "In-app assistants", text: "OpenAI and Google Gemini assistants that ask about the scope and draft the result for the user to edit before saving, as in My Invoice." },
      { title: "Receipt and document scanning", text: "AI-assisted receipt scanning that fills in the details, with a preview step so the user stays in control of what is saved." },
      { title: "On-device vision", text: "Face detection on the phone with Google ML Kit, as in Emotions Controller, so images do not have to leave the device for the first step." },
      { title: "Server-side checks", text: "AI requests go through Cloud Functions with validation and moderation, so keys stay off the device and output is checked before use." },
      { title: "Automation pipelines", text: "End-to-end workflows that find topics, generate text and images and publish them, as in LinkedIn Content Automation." },
      { title: "Honest scope", text: "AI is added where it helps and is clear to the user. It is not a replacement for review on anything that carries legal or financial weight." },
    ],
    steps: [
      { title: "Find the use", text: "Pick the one job where AI saves your users real time." },
      { title: "Prototype", text: "A working version on real examples, to see where it fails." },
      { title: "Build in", text: "Add it to the app with server-side checks and an edit step." },
      { title: "Measure", text: "Watch real usage and tune prompts, limits and costs." },
    ],
    tech: ["OpenAI API", "Gemini", "Google ML Kit", "Groq", "Flutter", "Firebase", "Cloud Functions", "n8n"],
    projects: ["My Invoice", "Emotions Controller App", "LinkedIn Content Automation"],
    faq: [
      { q: "Can you add an AI assistant to my Flutter app?", a: "Yes. I connect OpenAI or Gemini through server-side functions, design the conversation around one useful task and add a preview so users can correct the result before it is saved." },
      { q: "Which AI providers do you work with?", a: "The OpenAI API and Google Gemini, plus Groq in automation work, and Google ML Kit for on-device vision." },
      { q: "Is the AI running on the phone or on a server?", a: "Both, depending on the job. Face detection in Emotions Controller runs on the device. Language features run through a server so keys are protected and output can be checked." },
      { q: "Can you automate content or reporting with AI?", a: "Yes. LinkedIn Content Automation is an end-to-end pipeline that finds trending topics, generates posts with images and publishes them. I can build similar workflows for your own process." },
    ],
    related: ["flutter-app-development", "firebase-developer-for-hire", "saas-app-development"],
  },
  {
    slug: "ecommerce-website-development",
    title: "E-commerce Website Developer for Hire | Muhammad Umar",
    description:
      "Hire an e-commerce developer for custom online stores and shopping apps: product catalogue, checkout, orders and a full admin panel, in React or Flutter.",
    eyebrow: "E-commerce development",
    h1: "E-commerce website and shopping app development",
    serviceName: "E-commerce website development",
    lead:
      "I build custom online stores and shopping apps where the owner can manage products, orders and content without a developer. Junoon Herbals and Everpure Organics are web stores with their own admin panels, and Olizon is a Flutter shopping app for an olive oil seller in Spain. Each is built to be fast, clear for the shopper and simple for the shop owner to run.",
    includes: [
      { title: "Product catalogue and cart", text: "Product pages, carts with multiple pricing tiers and clear checkout steps, as on Junoon Herbals and Everpure Organics." },
      { title: "A full admin panel", text: "Products, orders, customers and site content managed through a custom role-based admin, so day-to-day changes need no code." },
      { title: "Live visitor analytics", text: "A dashboard showing active visitors, traffic source, city and pages visited, built for Junoon Herbals." },
      { title: "Tracking and payments", text: "Meta Pixel set from the admin panel, SMTP order emails and PayPal payments where the project needs them." },
      { title: "Shopping apps", text: "Flutter apps for iOS and Android with sign-in, product browsing, cart, checkout and order tracking, as in Olizon." },
      { title: "Fast and findable", text: "Responsive layouts, quick loading and the page structure search engines need, so the store can be found." },
    ],
    steps: [
      { title: "Plan", text: "Products, pricing, delivery and what the owner needs to control." },
      { title: "Design", text: "Shop and admin layouts for desktop and mobile agreed before build." },
      { title: "Build", text: "Storefront, admin and database built together." },
      { title: "Launch", text: "Deployment, tracking set up and a simple way to update the shop." },
    ],
    tech: ["Next.js", "React", "TypeScript", "Supabase", "PayPal", "SMTP", "Flutter", "Firebase", "Vercel"],
    projects: ["Junoon Herbals", "Everpure Organics", "Olizon"],
    faq: [
      { q: "Can you build a custom online store instead of using a template?", a: "Yes. I build the storefront and the admin together in React or Next.js, so the shop fits the products and the owner manages everything from one panel." },
      { q: "Do you build shopping apps as well as websites?", a: "Yes. Olizon is a Flutter e-commerce app for iOS and Android with sign-in, product browsing, cart, checkout and orders, built for a client in Spain." },
      { q: "Can I update products and orders myself?", a: "Yes. The admin panel is built around the products, orders and content you need to change, so updates do not need a developer." },
      { q: "Which payments and tracking do you set up?", a: "PayPal checkout, SMTP order emails and Meta Pixel configured from the admin panel, depending on what the project needs." },
    ],
    related: ["web-app-and-admin-panel-development", "flutter-app-development", "in-app-purchases-and-payments"],
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
