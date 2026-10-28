export type Project = {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  url: string;
  playUrl?: string;
  status: string;
};

export const projects: Project[] = [
  {
    title: "My Invoice",
    description: "A multi-platform business product with a Flutter mobile app, a React web portal and a separate admin dashboard on a shared Firebase backend.",
    technologies: ["Flutter", "Firebase", "Cloud Functions", "FCM", "In-App Purchases", "Stripe", "OpenAI API", "Google Maps", "React", "TypeScript"],
    features: [
      "End-to-end business workflow: create estimates, get client approval, and auto-convert them into tracked projects with progress management",
      "Separate admin dashboard giving operators control over users, transactions, invoices and analytics, with integrated support chat",
      "Subscriptions through App Store and Google Play in-app purchases, and client payments through Stripe",
      "FCM push notifications for payment reminders and an in-app assistant powered by the OpenAI API",
    ],
    url: "https://myinvoice.us",
    playUrl: "https://play.google.com/store/apps/details?id=com.my_invoice.app",
    status: "In Development",
  },
  {
    title: "Hudson Tasks",
    description: "A workforce management platform where employers manage field employees, work hours, tasks and finances.",
    technologies: ["React", "Supabase", "SMTP"],
    features: [
      "Role-based access and work-hour tracking for employers and field employees",
      "Task assignment for on-field employees, plus finance management and client follow-up tracking",
      "Automated email notifications sent through SMTP for tasks, updates and follow-ups",
    ],
    url: "https://hudsontasks.com",
    status: "Live",
  },
  {
    title: "Junoon Herbals",
    description: "A complete e-commerce platform where products, orders and site content are managed through a custom admin panel. Freelance project.",
    technologies: ["Next.js", "Supabase"],
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
    description: "A tower management system with role-based access for super admins, companies and field employees.",
    technologies: ["Flutter", "Firebase", "GetStream Chat API"],
    features: [
      "Role-based access for super admins, companies and field employees",
      "Real-time chat, event management and discount management",
    ],
    url: "#",
    status: "Completed",
  },
  {
    title: "Everpure Organics",
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
    title: "Emotions Controller App",
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
