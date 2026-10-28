export type Project = {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  url: string;
  playUrl?: string;
  status: string;
  kinds: string[]; // filter groups
  cover?: string; // screenshot of the live product
  logo?: string;
  shots?: { src: string; label: string }[]; // app screens for the phone gallery
  gallery?: { src: string; label: string }[]; // wide screenshots of a web product, shown in the details window
};

export const projectFilters = [
  { id: "all", label: "All" },
  { id: "Mobile", label: "Mobile apps" },
  { id: "Web", label: "Websites" },
  { id: "SaaS", label: "SaaS" },
  { id: "E-commerce", label: "E-commerce" },
  { id: "AI", label: "AI & Automation" },
];

export const projects: Project[] = [
  {
    title: "My Invoice",
    kinds: ["Mobile", "SaaS", "Web"],
    logo: "/projects/my-invoice-logo.webp",
    shots: [
      { src: "/projects/my-invoice-dashboard.webp", label: "Dashboard with quick actions and payment schedule" },
      { src: "/projects/my-invoice-payments.webp", label: "Payments overview with collected and pending amounts" },
      { src: "/projects/my-invoice-client.webp", label: "Client profile with balance and due payments" },
      { src: "/projects/my-invoice-project-details.webp", label: "Project details with progress and actions" },
      { src: "/projects/my-invoice-ai-draft.webp", label: "AI assistant drafting an estimate" },
      { src: "/projects/my-invoice-calendar.webp", label: "Calendar and projects" },
      { src: "/projects/my-invoice-projects.webp", label: "Projects list with status filters" },
      { src: "/projects/my-invoice-schedule.webp", label: "Payment schedule with installments" },
      { src: "/projects/my-invoice-ai-clarify.webp", label: "AI clarity step asking about job scope" },
      { src: "/projects/my-invoice-dashboard-calendar.webp", label: "Dashboard calendar and upcoming projects" },
      { src: "/projects/my-invoice-project-overview.webp", label: "Project progress overview" },
      { src: "/projects/my-invoice-ai-assistant.webp", label: "AI project assistant" },
    ],
    description: "An AI invoice and estimate app for contractors, with a Flutter mobile app, a React web app and a separate admin dashboard on a shared Firebase backend, plus Stripe payments and subscriptions.",
    technologies: ["Flutter", "Firebase", "Cloud Functions", "FCM", "In-App Purchases", "Stripe", "OpenAI API", "Gemini", "Google Maps", "Cloudflare Turnstile", "reCAPTCHA", "React", "TypeScript"],
    features: [
      "End-to-end business workflow: create estimates, get client approval, and auto-convert them into tracked projects with progress management",
      "Separate admin dashboard giving operators control over users, transactions, invoices and analytics, with integrated support chat",
      "Subscriptions through App Store and Google Play in-app purchases, and client payments through Stripe",
      "FCM push notifications for payment reminders and an in-app assistant powered by the OpenAI API",
      "Bot and abuse protection: Cloudflare Turnstile verified server-side, plus reCAPTCHA-backed Firebase App Check",
    ],
    url: "https://myinvoice.us",
    playUrl: "https://play.google.com/store/apps/details?id=com.my_invoice.app",
    status: "In Development",
  },
  {
    title: "Hudson Tasks",
    kinds: ["Web", "SaaS"],
    cover: "/projects/hudsontasks-dashboard.webp",
    description: "A workforce management platform where employers manage field employees, work hours, tasks and finances.",
    technologies: ["React", "Supabase", "SMTP"],
    features: [
      "Role-based access and work-hour tracking for employers and field employees",
      "Task assignment for on-field employees, plus finance management and client follow-up tracking",
      "Automated email notifications sent through SMTP for tasks, updates and follow-ups",
    ],
    gallery: [
      { src: "/projects/hudsontasks-dashboard.webp", label: "Owner dashboard with overdue tasks, live shifts and work calendar" },
      { src: "/projects/hudsontasks.webp", label: "Sign-in page" },
    ],
    url: "https://hudsontasks.com",
    status: "Live",
  },
  {
    title: "Junoon Herbals",
    kinds: ["Web", "E-commerce"],
    cover: "/projects/junoonherbals.webp",
    description: "A complete e-commerce platform for a Pakistani brand, where products, orders and site content are managed through a custom admin panel. Freelance project.",
    technologies: ["Next.js", "Supabase", "Meta Pixel"],
    features: [
      "Custom admin panel for products, orders and site content, built with AI-assisted development to accelerate delivery",
      "Meta Pixel configurable from the admin panel, so the client can connect and update ad tracking without code changes",
      "Live visitor analytics dashboard showing active users, traffic source (Meta ads, search or direct), visitor city and pages visited",
    ],
    url: "https://junoonherbals.com",
    status: "Live",
  },
  {
    title: "Clika App",
    kinds: ["Mobile"],
    description: "A tower management system with role-based access for super admins, companies and field employees.",
    technologies: ["Flutter", "Firebase", "GetStream Chat API"],
    features: [
      "Role-based access for super admins, companies and field employees",
      "Real-time chat, event management and discount management",
    ],
    url: "#",
    playUrl: "https://play.google.com/store/apps/details?id=com.clikahub",
    status: "Completed",
    logo: "/projects/clika-logo.webp",
    shots: [
      { src: "/projects/clika-1.webp", label: "Home with the tower services grid" },
      { src: "/projects/clika-2.webp", label: "Community hub with announcements and chat" },
      { src: "/projects/clika-3.webp", label: "Office dashboard" },
      { src: "/projects/clika-4.webp", label: "Building listings and events" },
      { src: "/projects/clika-5.webp", label: "People and companies in the tower" },
    ],
  },
  {
    title: "Everpure Organics",
    kinds: ["Web", "E-commerce"],
    cover: "/projects/everpure.webp",
    description: "An e-commerce web app for organic products with a full admin dashboard.",
    technologies: ["React", "TypeScript", "Supabase", "REST APIs"],
    features: [
      "Dynamic product filtering and a multi-tier pricing cart",
      "User authentication and a full admin dashboard",
    ],
    url: "https://everpureorganics.com",
    status: "Live",
  },
  {
    title: "Realtors Lead",
    kinds: ["Web"],
    cover: "/projects/realtorslead.webp",
    description: "A lead generation platform for US real estate agents with payment processing and automated email delivery.",
    technologies: ["React", "TypeScript", "PayPal API"],
    features: [
      "PayPal payment processing for agent subscriptions",
      "Automated email delivery of leads and contact requests",
    ],
    url: "https://realtorslead.com",
    status: "Live",
  },
  {
    title: "My Madina",
    kinds: ["Web"],
    cover: "/projects/mymadina.webp",
    description: "A navigation platform for pilgrims with coordinate-based interactive maps and offline capability.",
    technologies: ["React", "TypeScript", "Supabase", "PWA", "AWS EC2"],
    features: [
      "Coordinate-based interactive maps for prayer areas and amenities",
      "Bilingual English and Arabic support",
      "Offline Progressive Web App capability",
    ],
    url: "https://mymadina.site",
    status: "Live",
  },
  {
    title: "Olizon",
    kinds: ["Mobile", "E-commerce"],
    description: "A Flutter e-commerce app for an olive oil seller, built for clients in Spain: browse products, check out and track orders.",
    technologies: ["Flutter", "Riverpod", "Firebase Auth"],
    features: [
      "Onboarding, sign-up and sign-in with Firebase Authentication",
      "Explore screen with promotions, olive and oil types and popular products",
      "Product details with image gallery, cart, and a checkout flow for address, contact details and payment method",
      "Order list and order details with delivery status, plus notifications and profile settings",
    ],
    url: "https://github.com/umarshad/Olizon_app",
    status: "Completed",
    shots: [
      { src: "/projects/olizon-1.webp", label: "Splash screen" },
      { src: "/projects/olizon-2.webp", label: "Explore with promotions, olive types and popular products" },
      { src: "/projects/olizon-3.webp", label: "Product details with gallery and add to cart" },
      { src: "/projects/olizon-4.webp", label: "Order details with delivery status" },
      { src: "/projects/olizon-5.webp", label: "Order confirmation" },
    ],
  },
  {
    title: "Al Tayyab Recovery",
    kinds: ["Web"],
    description: "A bilingual English and Arabic website for a 24/7 car recovery company in Dubai, built to turn local searches into calls and WhatsApp messages.",
    technologies: ["JavaScript", "HTML", "CSS", "Node.js", "PHP", "Vercel"],
    features: [
      "Bilingual English and Arabic landing page for emergency, flatbed, roadside and vehicle recovery services",
      "One-tap call and WhatsApp buttons with a prefilled message, for customers who need a tow truck right now",
      "Contact form with live validation and UAE phone number formatting, backed by a serverless endpoint",
      "Local business structured data and search metadata for Dubai searches, with an animated, fully responsive layout",
    ],
    url: "#",
    status: "Completed",
  },
  {
    title: "Emotions Controller App",
    kinds: ["Mobile", "AI"],
    description: "Real-time on-device emotion detection with deep cloud analysis routed to a Python backend.",
    technologies: ["Flutter", "Google ML Kit", "Python", "AWS Elastic Beanstalk"],
    features: [
      "Real-time on-device emotion detection using Google ML Kit",
      "Deep cloud analysis routed to a Python backend on AWS Elastic Beanstalk",
    ],
    url: "#",
    status: "AI Project",
  },
  {
    title: "LinkedIn Content Automation",
    kinds: ["AI"],
    description: "An end-to-end automated pipeline that finds trending topics, generates AI posts with images and publishes them to LinkedIn.",
    technologies: ["n8n", "Groq API", "Pollinations AI", "LinkedIn API", "Google Sheets"],
    features: [
      "Finds trending topics automatically",
      "Generates AI posts with images and publishes directly to LinkedIn",
    ],
    url: "#",
    status: "Automation",
  },
];
