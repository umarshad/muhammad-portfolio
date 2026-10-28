// Case studies. Every fact here comes from the project's own code and README or from the resume.
export type CaseStudy = {
  slug: string;
  project: string; // title in data/projects.ts
  title: string; // <title>, 60 characters or fewer
  description: string; // meta description, 160 characters or fewer
  eyebrow: string;
  h1: string;
  lead: string;
  role: string;
  os: string; // schema.org operatingSystem
  category: string; // schema.org applicationCategory
  archEyebrow: string;
  archTitle: [string, string]; // plain part, serif part
  platforms: { title: string; text: string }[];
  features: string[];
  galleries?: { id: string; eyebrow: string; title: [string, string]; intro: string; url: string; images: { src: string; label: string }[] }[]; // wide browser screenshots
  decisionsTitle: [string, string];
  decisions: { title: string; text: string }[];
  stack: string[]; // names from data/tech.ts
  faq: { q: string; a: string }[];
  related: string[]; // service slugs
  ctaTopic: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "projects/my-invoice",
    project: "My Invoice",
    title: "My Invoice: Flutter SaaS Case Study | Muhammad Umar",
    description:
      "How I built My Invoice, an AI invoice and estimate app for contractors: a Flutter app, React web app and admin dashboard on Firebase, Stripe and AI.",
    eyebrow: "Case study",
    h1: "My Invoice: a multi-platform invoicing SaaS for contractors, built end to end",
    lead:
      "My Invoice (myinvoice.us) is a product I am building at DM Worx LLC for contractors and small service businesses in the United States. It turns a job into an estimate, gets the client's approval, converts it into a tracked project with progress and payments, and keeps clients, follow-ups and reports in one place. It runs as a Flutter app for iOS and Android, a React web app and a separate admin dashboard, all on one Firebase backend.",
    role: "Designed and built by Muhammad Umar at DM Worx LLC",
    os: "Android, iOS, Web",
    category: "BusinessApplication",
    archEyebrow: "Architecture",
    archTitle: ["Four surfaces,", "one backend"],
    platforms: [
      { title: "Flutter mobile app", text: "The main product for iOS and Android. Create estimates and invoices, manage clients and follow-ups, track projects on a calendar, schedule installment payments, scan receipts, read financial reports, import and export data, and talk to the AI assistant, with push notifications and in-app support chat." },
      { title: "React web app", text: "The same account in the browser: dashboard, invoice creation and preview, clients, follow-ups, projects and schedule, a payments dashboard with an installment ledger, the AI assistant, notifications and plan selection. It uses the same Firebase backend, so web and mobile always agree." },
      { title: "Admin dashboard", text: "A separate React dashboard for operators: users and deleted users, subscriptions, analytics, payment and email analytics, audit logs, roles and admin invitations, AI moderation, API management, infrastructure, system settings, reports and support." },
      { title: "Firebase backend", text: "Authentication, Firestore, Storage and FCM push notifications, plus Cloud Functions for AI processing, payments, reminders, emails, signed PDF generation and subscriptions, so business rules run on the server and not in the app." },
      { title: "Payments with Stripe", text: "Client payments through Stripe with installment schedules, saved cards and automatic charging, payment reminders by push and email, reconciliation of payments, and an overview of payouts and disputes." },
      { title: "Website built for search", text: "myinvoice.us is a fast marketing site with invoice template pages for trades such as electricians, HVAC, landscaping and general contractors, so contractors searching for an invoice template can find the product." },
    ],
    features: [
      "End-to-end workflow: create an estimate, get client approval, and auto-convert it into a tracked project with progress management",
      "Invoices with a live preview, signed PDF generation and email delivery to the client",
      "Client profiles with balances and due payments, plus follow-ups with scheduled reminders",
      "Calendar and schedule of projects, and payment schedules split into installments with automatic charging",
      "Stripe client payments with reminders by push notification and email",
      "In-app AI assistant on web and mobile, powered by the OpenAI and Google Gemini APIs: it drafts estimates, asks about the job scope, lets you edit extracted items before saving, and answers revenue questions",
      "Receipt scanning with AI, financial reports, and import and export of business data",
      "Subscriptions through App Store and Google Play in-app purchases and web billing, with in-app support chat",
      "Admin dashboard with user management, activity logging, transactions, invoices, analytics and support",
      "Bot and abuse protection with Cloudflare Turnstile verified on the server, and reCAPTCHA-backed Firebase App Check",
    ],
    galleries: [
      {
        id: "web",
        eyebrow: "Web app",
        title: ["The web app", "in use"],
        intro: "The browser version of the same account: a dashboard for quick actions, overdue work, recent invoices and upcoming installments, a step-by-step invoice builder with a live summary, and business settings. Personal details are blurred.",
        url: "myinvoice.us",
        images: [
          { src: "/projects/my-invoice-web-1.webp", label: "Web dashboard with quick actions, recent activity, payment watch and work calendar" },
          { src: "/projects/my-invoice-web-2.webp", label: "Create invoice with a live summary, optional project, notes and deposit schedule" },
          { src: "/projects/my-invoice-web-3.webp", label: "Business information, payment details, items, scanned receipts, templates and settings" },
        ],
      },
      {
        id: "admin",
        eyebrow: "Admin dashboard",
        title: ["The admin dashboard", "in use"],
        intro: "A separate dashboard for operators with revenue and account metrics, payment analytics by gateway and period, and an infrastructure view of Cloud Functions, scheduled jobs, error logs, storage and billing guardrails. Account details are blurred.",
        url: "myinvoice.us/admin",
        images: [
          { src: "/projects/my-invoice-admin-1.webp", label: "Admin overview with volume, recurring revenue, accounts, fees and recent accounts" },
          { src: "/projects/my-invoice-admin-2.webp", label: "Payment analytics with volume over time, payment methods and settlement health" },
          { src: "/projects/my-invoice-admin-3.webp", label: "Infrastructure view of Cloud Functions, scheduler jobs, error logs and indexes" },
        ],
      },
    ],
    decisionsTitle: ["Engineering", "decisions"],
    decisions: [
      { title: "One data model for every surface", text: "Mobile, web and admin read and write the same Firestore data through shared Cloud Functions, so an invoice or payment can never look different on two screens." },
      { title: "AI with guardrails", text: "The assistant's output is parsed and shown as a preview the user can edit before anything is saved, and server-side checks keep document data out of the chat text. Redis caching and Firebase Remote Config keep it fast and let features roll out gradually." },
      { title: "Payments built to be checked", text: "Installment schedules, saved-card charging and payment reconciliation run in Cloud Functions, and Stripe events are verified and filtered before they touch an account." },
      { title: "Limits enforced on the server", text: "Plan limits, such as how many reminders a user can send, are decided by the server and not by the app, so they cannot be bypassed by a modified client." },
      { title: "Fast dashboards", text: "Client totals are kept in a small per-user summary document instead of scanning every invoice on each load, so lists and dashboards stay quick as accounts grow." },
    ],
    stack: ["Flutter", "Firebase", "Cloud Functions", "Stripe", "In-App Purchases", "Gemini", "OpenAI API", "Google Maps", "Cloudflare Turnstile", "Firebase App Check", "React", "TypeScript"],
    faq: [
      { q: "What is My Invoice?", a: "My Invoice is an AI invoice maker and estimate app for contractors and small service businesses. It creates estimates and invoices, gets client approval, tracks projects and payments, and keeps follow-ups and reports in one place." },
      { q: "Which platforms does My Invoice run on?", a: "It runs as a Flutter app for iOS and Android, as a React web app in the browser, and has a separate admin dashboard for operators, all on one shared Firebase backend." },
      { q: "How does the AI assistant work?", a: "Users describe a job in plain language, the assistant asks about the scope and drafts an estimate, and the user edits the extracted items in a preview before saving. It uses the OpenAI and Google Gemini APIs with server-side checks." },
      { q: "Can you build a product like this for my business?", a: "Yes. I design and build the mobile app, web app, admin dashboard, payments and store release as one project. See the SaaS app development page for how I work." },
    ],
    related: ["saas-app-development", "in-app-purchases-and-payments", "web-app-and-admin-panel-development"],
    ctaTopic: "next product",
  },
  {
    slug: "projects/olizon",
    project: "Olizon",
    title: "Olizon: Flutter E-commerce App Case Study | Muhammad Umar",
    description:
      "How I built Olizon, a Flutter e-commerce app for an olive oil seller in Spain: onboarding, Firebase sign-in, product browsing, cart, checkout and orders.",
    eyebrow: "Case study",
    h1: "Olizon: a Flutter e-commerce app for an olive oil seller in Spain",
    lead:
      "Olizon is a mobile shopping app I built in Flutter for a client in Spain who sells olive oil. Customers sign up, browse olives and oils, open product pages, fill a cart, go through checkout and follow their orders, all in one app for iOS and Android. This page explains what is in it and how it is put together.",
    role: "Designed and built by Muhammad Umar for a client in Spain",
    os: "Android, iOS",
    category: "ShoppingApplication",
    archEyebrow: "How it is built",
    archTitle: ["Six parts of", "one shopping flow"],
    platforms: [
      { title: "Onboarding and accounts", text: "A swipeable introduction, then sign-up and sign-in with Firebase Authentication, password recovery screens, and a remembered session so returning customers go straight to the shop." },
      { title: "Explore", text: "The home screen has a search field, a promotions carousel such as a winter discount, carousels of olive types and oil types, and a popular products carousel, with a bottom navigation bar and a floating cart button." },
      { title: "Product pages", text: "Each product has a large image with a gallery and thumbnails, the name, price and description with a read more link, and an add to cart button." },
      { title: "Cart and checkout", text: "A cart with item controls and a summary, then checkout in clear steps for the delivery address, contact details and payment method, ending in a success screen with a Continue shopping button." },
      { title: "Orders and notifications", text: "A list of orders with their status, an order details screen with tracking number, delivery method, discount and total, a notifications screen, profile editing and settings." },
      { title: "State and structure", text: "Riverpod manages state, and the code is split by screen into reusable widgets, so each part of the shop can change without breaking the rest." },
    ],
    features: [
      "Onboarding slider, sign-up and sign-in with Firebase Authentication",
      "Home with search, promotions, olive and oil type carousels and popular products",
      "Product details with a gallery, price, description and add to cart",
      "Cart summary and a step-by-step checkout for address, contact details and payment method",
      "Order confirmation, order list and order details with delivery status",
      "Notifications, profile editing and settings",
    ],
    decisionsTitle: ["Design and code", "choices"],
    decisions: [
      { title: "Riverpod for predictable state", text: "Cart contents, onboarding progress and user state live in Riverpod providers, so every screen shows the same data and a change in one place updates the rest." },
      { title: "Screens split into small widgets", text: "Carousels, search, bottom navigation, cart items and order rows are separate reusable widgets, which keeps screens short and makes later changes safer." },
      { title: "A calm, brand-led interface", text: "The olive green palette, generous spacing and large product images follow the product's brand, so the shop feels like the seller and not a generic template." },
    ],
    stack: ["Flutter", "Dart", "Riverpod", "Firebase"],
    faq: [
      { q: "What is Olizon?", a: "Olizon is a Flutter shopping app for an olive oil seller in Spain. Customers can browse olives and oils, view product details, add items to a cart, check out and follow their orders." },
      { q: "Which technology does Olizon use?", a: "It is built with Flutter and Dart for iOS and Android, Riverpod for state management and Firebase Authentication for accounts." },
      { q: "Can you build an e-commerce app like this for my store?", a: "Yes. I build Flutter shopping apps with product browsing, cart, checkout, orders and an admin panel to manage products. See the Flutter app development page, or the Europe page if you are in Europe." },
      { q: "Can I see the code?", a: "Yes. The Olizon source code is public on my GitHub profile." },
    ],
    related: ["flutter-app-development", "web-app-and-admin-panel-development", "app-store-and-google-play-deployment"],
    ctaTopic: "shopping app",
  },
];

export const caseStudyBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug);
export const caseStudyForProject = (title: string) => caseStudies.find((c) => c.project === title);
