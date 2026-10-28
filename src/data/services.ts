export type Service = { title: string; text: string; tags: string[]; wide?: boolean; href: string; kw: string; gets: string[]; seen: string[] };

export const services: Service[] = [
  {
    title: "Custom mobile apps",
    kw: "iOS · Android · Flutter",
    href: "/flutter-app-development",
    text: "Flutter apps for iOS and Android with clean UI, Firebase or Supabase backends, push notifications and real-time data.",
    tags: ["Flutter", "Firebase", "FCM"],
    gets: ["One Flutter codebase for iOS and Android","Auth, database and push notifications set up with the app","Release builds, store submission and later updates"],
    seen: ["My Invoice", "Clika App", "Emotions Controller App"],
  },
  {
    title: "Websites & web apps",
    kw: "React · Next.js · SEO",
    href: "/web-app-and-admin-panel-development",
    text: "Fast, responsive React and Next.js websites and web platforms, built to be found by search engines.",
    tags: ["React", "Next.js", "TypeScript"],
    gets: ["Responsive pages that load fast and can be found in search","Content you can update without a developer","Hosting and deployment on Vercel, AWS or DigitalOcean"],
    seen: ["Junoon Herbals", "Everpure Organics", "My Madina"],
  },
  {
    title: "Admin panels & dashboards",
    kw: "Roles · Analytics",
    href: "/web-app-and-admin-panel-development",
    text: "Role-based admin panels to manage users, orders, payments, content and analytics without touching code.",
    tags: ["Role-based access", "Analytics", "Reports"],
    gets: ["Role-based access for staff and managers","Users, orders, payments and content in one place","Live analytics and reports for decisions"],
    seen: ["Hudson Tasks", "Realtors Lead"],
  },
  {
    title: "SaaS products",
    kw: "Mobile · Web · Admin",
    href: "/saas-app-development",
    text: "Multi-platform products: a mobile app, web portal and admin dashboard on one shared backend, ready for subscriptions.",
    tags: ["Mobile + web", "Shared backend", "Subscriptions"],
    gets: ["Mobile app, web portal and admin planned together","One shared backend for every platform","Subscriptions and billing ready from day one"],
    seen: ["My Invoice", "Hudson Tasks"],
  },
  {
    title: "In-app purchases & payments",
    kw: "Store · Stripe · PayPal",
    href: "/in-app-purchases-and-payments",
    text: "App Store and Google Play subscriptions, plus Stripe and PayPal for client payments and billing.",
    tags: ["In-App Purchases", "Stripe", "PayPal"],
    gets: ["App Store and Google Play subscriptions","Stripe and PayPal checkout for client payments","Tested in sandbox before any live key is used"],
    seen: ["My Invoice", "Realtors Lead"],
  },
  {
    title: "Store deployment",
    kw: "App Store · Google Play",
    href: "/app-store-and-google-play-deployment",
    text: "App Store and Google Play build, release and updates, plus web hosting on Vercel, AWS and DigitalOcean.",
    tags: ["App Store", "Google Play", "CI/CD"],
    gets: ["Release builds, signing and store listings","Submission, review follow-up and testing tracks","Versioned updates and hosting you can rely on"],
    seen: ["My Invoice", "Clika App"],
  },
  {
    title: "End-to-end product creation",
    kw: "Design · Build · Ship",
    href: "/saas-app-development",
    text: "From idea to a live product: UI/UX and 3D design, database design, development, deployment and ongoing iteration, all with one developer who owns the result.",
    tags: ["Design", "Develop", "Deploy"],
    gets: ["UI/UX and 3D design before any code","Database design and development of every part","Deployment, monitoring and ongoing iteration"],
    seen: ["My Invoice", "Hudson Tasks"],
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
