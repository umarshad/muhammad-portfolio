export type Service = { title: string; text: string; tags: string[]; wide?: boolean };

export const services: Service[] = [
  {
    title: "Custom mobile apps",
    text: "Flutter apps for iOS and Android with clean UI, Firebase or Supabase backends, push notifications and real-time data.",
    tags: ["Flutter", "Firebase", "FCM"],
  },
  {
    title: "Websites & web apps",
    text: "Fast, responsive React and Next.js websites and web platforms, built to be found by search engines.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "Admin panels & dashboards",
    text: "Role-based admin panels to manage users, orders, payments, content and analytics without touching code.",
    tags: ["Role-based access", "Analytics", "Reports"],
  },
  {
    title: "SaaS products",
    text: "Multi-platform products: a mobile app, web portal and admin dashboard on one shared backend, ready for subscriptions.",
    tags: ["Mobile + web", "Shared backend", "Subscriptions"],
  },
  {
    title: "In-app purchases & payments",
    text: "App Store and Google Play subscriptions, plus Stripe and PayPal for client payments and billing.",
    tags: ["In-App Purchases", "Stripe", "PayPal"],
  },
  {
    title: "Store deployment",
    text: "App Store and Google Play build, release and updates, plus web hosting on Vercel, AWS and DigitalOcean.",
    tags: ["App Store", "Google Play", "CI/CD"],
  },
  {
    title: "End-to-end product creation",
    text: "From idea to a live product: UI/UX and 3D design, database design, development, deployment and ongoing iteration, all with one developer who owns the result.",
    tags: ["Design", "Develop", "Deploy"],
    wide: true,
  },
];

export const processSteps = [
  { title: "Discover", text: "We agree on goals, users, scope and what success looks like before any code is written." },
  { title: "Design", text: "UI/UX flows and clickable screens, so you see the product and approve it early." },
  { title: "Build", text: "Feature-first modular code with Git-based review, on Flutter or React with a Firebase or Supabase backend." },
  { title: "Deploy", text: "Payments, in-app purchases, hosting and App Store and Google Play release, handled end to end." },
  { title: "Support", text: "Monitoring, fixes and new features after launch, so the product keeps improving." },
];

export const quickFacts = [
  { label: "Based in", value: "Lahore, Pakistan (PKT, UTC+5)" },
  { label: "Availability", value: "Open to remote work" },
  { label: "Languages", value: "English (professional), Urdu (native)" },
  { label: "Currently", value: "DM Worx LLC, plus freelance clients" },
];

export const projectTypes = [
  "Mobile app",
  "Website",
  "Admin panel",
  "SaaS product",
  "In-app purchases",
  "Store deployment",
  "End-to-end product",
];
