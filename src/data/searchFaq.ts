// Questions buyers actually type into search and into AI assistants, answered plainly.
// Added to the service pages (and so to their FAQPage schema). No prices or turnaround promises: both depend on scope.
type Q = { q: string; a: string };

const hireFromPakistan: Q = {
  q: "Is it safe to hire a Flutter developer from Pakistan?",
  a: "Yes, with the same safeguards you would use with any freelancer: a written scope, milestones, regular demos, and the code kept in a Git repository and app store accounts that you control. I send a written update every week and can share my work history and live projects so you can check them yourself.",
};

export const searchFaq: Record<string, Q[]> = {
  "flutter-app-development": [
    { q: "How much does it cost to build a Flutter app?", a: "It depends on the number of screens, the backend, payments and whether you need an admin panel. A simple app with sign-in and a few screens costs far less than a SaaS product with subscriptions and an admin dashboard. Send a short brief and I will reply with the scope, a price and a timeline before any work starts." },
    { q: "How long does it take to build a Flutter app?", a: "A focused first release with a handful of screens and a simple backend is usually a matter of weeks. A product with payments, an admin dashboard and store release takes longer. I give a timeline after scoping so you can plan the launch." },
    { q: "Flutter or React Native: which is better for my app?", a: "Both build iOS and Android apps from one codebase. I work in Flutter because it gives a consistent interface on both platforms with fast development, and I use React for the web side. Which fits you depends on your product and team, and I will say so if something else suits you better." },
    { q: "Can you fix or take over an existing Flutter app?", a: "Often yes, once I have reviewed the code. I can add features, fix bugs, add payments or push notifications and prepare the app for store release without rewriting everything." },
    { q: "Do you maintain the app after launch?", a: "Yes. Fixes, updates for new iOS and Android versions and new features can continue after release, so the app stays current." },
  ],
  "saas-app-development": [
    { q: "How much does it cost to build a SaaS app?", a: "The cost follows the scope: how many roles and plans there are, whether you need a mobile app, a web app and an admin dashboard, and how much billing logic is involved. A focused first version costs much less than a full multi-platform product. Send a short brief and I will reply with a scope, a price and a timeline." },
    { q: "Can you build an MVP for my startup?", a: "Yes. I start with the one workflow your users will pay for, build it end to end, and add the rest after real usage. See the MVP app development page for how that works." },
    { q: "Can you build a SaaS like an invoicing or booking app?", a: "Yes. My Invoice is an invoicing and estimating SaaS with a mobile app, a web app and an admin dashboard, built by me end to end. A booking, workforce or client portal product follows the same pattern." },
  ],
  "in-app-purchases-and-payments": [
    { q: "How do I add subscriptions to a Flutter app?", a: "Create the subscription products in App Store Connect and Google Play Console, connect them to the app with in-app purchase code, verify purchases on the server, and unlock features based on the verified state. I build and test that flow, including renewals and failures." },
    { q: "Why does my in-app purchase get rejected or not show up?", a: "The usual causes are products that are not approved or active in the store console, a missing agreement or tax setup, test accounts that are not configured, or purchases that are not verified on the server. Send me the details and I will tell you which it is." },
  ],
  "web-app-and-admin-panel-development": [
    { q: "How much does a custom website or web app cost?", a: "It depends on the pages, the admin panel, the data and any payments or integrations. A brochure site costs far less than a store or web app with an admin dashboard. Send a short brief and I will reply with the scope, a price and a timeline." },
    { q: "Can you build an admin dashboard for my existing app?", a: "Yes. If your app already has a backend, I can build a role-based admin panel on top of it for users, orders, payments and content, or add the backend pieces it needs." },
  ],
  "app-store-and-google-play-deployment": [
    { q: "Why was my app rejected by the App Store or Google Play?", a: "Common reasons are missing privacy policy or data-safety details, login screens without a demo account for the reviewer, in-app purchases that are not set up correctly, crashes during review and incomplete store listings. Share the rejection message and I will tell you what to fix." },
    { q: "How do I publish a Flutter app to the App Store and Google Play?", a: "You create developer accounts, set the app identifiers and signing, build release versions, prepare the store listings and screenshots, upload to a testing track, then submit for review. I can do all of those steps, publishing from your own accounts." },
  ],
  "firebase-developer-for-hire": [
    { q: "Is Firebase good for a production app?", a: "Yes, for many products. Authentication, Firestore, Cloud Functions and push notifications are used in production by apps of all sizes. It needs careful data design and security rules to keep reads and costs under control, which is part of what I plan for." },
    { q: "How do I keep Firebase costs under control?", a: "By designing the data around how screens read it, avoiding unnecessary reads and listeners, using indexes and server functions sensibly and watching usage as the app grows." },
  ],
  "ai-app-development": [
    { q: "How much does it cost to add an AI chatbot to an app?", a: "It depends on what the assistant must do, which data it can see and how much checking the output needs. A simple assistant is a small job. One that drafts business documents with server-side checks, like the My Invoice assistant, is larger. Send a short brief and I will give a scope and price." },
    { q: "Can AI be added to an app that is already built?", a: "Yes. The AI features run through server functions that your existing app calls, so most of the work is the function, the prompt design and a screen for the result." },
  ],
  "ecommerce-website-development": [
    { q: "Should I use Shopify or build a custom store?", a: "Shopify or a similar platform is the faster, cheaper choice for a standard store. A custom store makes sense when you need your own admin workflow, special pricing tiers, live analytics or integrations a template cannot give. I will say which suits you after hearing what you sell." },
    { q: "Can you make my store available in more than one language?", a: "Yes. Al Tayyab Recovery is a bilingual English and Arabic website, and the same approach works for other language pairs." },
  ],
  "flutter-developer-for-hire-uk": [hireFromPakistan, { q: "Do you work with UK freelance and contract arrangements?", a: "I take remote projects from UK founders, startups and agencies on a project or ongoing basis. Scope, price and timeline are agreed in writing after a short brief." }],
  "flutter-developer-for-hire-usa": [hireFromPakistan, { q: "Can you work in US time zones?", a: "Lahore is nine to thirteen hours ahead of US cities depending on the season and the city, so calls happen in your morning and my evening, and written updates cover the rest. A New York morning fits the end of my working day and a Los Angeles morning falls in my evening." }],
  "flutter-developer-for-hire-europe": [hireFromPakistan, { q: "Do you build apps for European customers in other languages?", a: "Yes. Olizon was built for a client in Spain and an app can be translated into the languages your customers use." }],
  "web-developer-for-hire-dubai": [{ q: "Can you build a website for a Dubai business that gets calls and WhatsApp enquiries?", a: "Yes. Al Tayyab Recovery is a bilingual English and Arabic website for a 24/7 car recovery company in Dubai, built to turn local searches into calls and WhatsApp messages." }],
};
