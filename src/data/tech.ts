import {
  siAppstore, siDart, siDigitalocean, siFirebase, siFlutter, siGit, siGooglegemini, siGooglemaps,
  siGoogleplay, siN8n, siNeon, siNextdotjs, siNodedotjs, siPaypal, siPostgresql, siReact, siStripe,
  siSupabase, siTailwindcss, siTypescript, siVercel,
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";
import {
  Boxes, Cloud, Cpu, Mail, MessageCircle, Network, ScanFace, ShoppingBag, Sparkles, Webhook, Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Tech = {
  name: string;
  cat: string;
  note: string;
  brand?: SimpleIcon;
  Icon?: LucideIcon;
  color?: string; // used for generic icons
};

export const techCategories = [
  { id: "all", label: "All", blurb: "Everything I use to design, build and ship products." },
  { id: "mobile", label: "Mobile", blurb: "iOS and Android apps built once and released to App Store and Google Play." },
  { id: "web", label: "Web", blurb: "Fast, responsive websites, portals and admin panels." },
  { id: "backend", label: "Backend & Data", blurb: "Auth, databases and server logic that power real-time products." },
  { id: "pay", label: "Payments & APIs", blurb: "Subscriptions, payments and the integrations around them." },
  { id: "ai", label: "AI & Automation", blurb: "LLM features and workflows that save hours of manual work." },
  { id: "cloud", label: "Cloud & Tools", blurb: "Hosting, deployment and the workflow that keeps releases safe." },
];

export const techs: Tech[] = [
  { name: "Flutter", cat: "mobile", note: "Cross-platform apps", brand: siFlutter },
  { name: "Dart", cat: "mobile", note: "Language behind Flutter", brand: siDart },
  { name: "Riverpod", cat: "mobile", note: "State management", Icon: Network, color: "#0b5a55" },
  { name: "Provider", cat: "mobile", note: "State management", Icon: Boxes, color: "#0b5a55" },
  { name: "App Store", cat: "mobile", note: "iOS release", brand: siAppstore },
  { name: "Google Play", cat: "mobile", note: "Android release", brand: siGoogleplay },

  { name: "React", cat: "web", note: "Web apps and portals", brand: siReact },
  { name: "Next.js", cat: "web", note: "SEO-ready websites", brand: siNextdotjs },
  { name: "TypeScript", cat: "web", note: "Safer, scalable code", brand: siTypescript },
  { name: "Node.js", cat: "web", note: "APIs and servers", brand: siNodedotjs },
  { name: "Tailwind CSS", cat: "web", note: "Fast, consistent UI", brand: siTailwindcss },

  { name: "Firebase", cat: "backend", note: "Auth, Firestore, FCM", brand: siFirebase },
  { name: "Cloud Functions", cat: "backend", note: "Server-side logic", Icon: Zap, color: "#f67f00" },
  { name: "Supabase", cat: "backend", note: "Postgres backend", brand: siSupabase },
  { name: "PostgreSQL", cat: "backend", note: "Relational data", brand: siPostgresql },
  { name: "Neon", cat: "backend", note: "Serverless Postgres", brand: siNeon },

  { name: "Stripe", cat: "pay", note: "Payments and billing", brand: siStripe },
  { name: "PayPal", cat: "pay", note: "Checkout and subscriptions", brand: siPaypal },
  { name: "In-App Purchases", cat: "pay", note: "Store subscriptions", Icon: ShoppingBag, color: "#f67f00" },
  { name: "Google Maps", cat: "pay", note: "Maps and location", brand: siGooglemaps },
  { name: "GetStream Chat", cat: "pay", note: "Real-time chat", Icon: MessageCircle, color: "#005fff" },
  { name: "REST APIs", cat: "pay", note: "Integrations", Icon: Webhook, color: "#0b5a55" },
  { name: "SMTP", cat: "pay", note: "Email delivery", Icon: Mail, color: "#0b5a55" },

  { name: "OpenAI API", cat: "ai", note: "In-app assistants", Icon: Sparkles, color: "#10a37f" },
  { name: "Gemini", cat: "ai", note: "Generative AI", brand: siGooglegemini },
  { name: "Groq", cat: "ai", note: "Fast LLM inference", Icon: Cpu, color: "#f55036" },
  { name: "Google ML Kit", cat: "ai", note: "On-device vision", Icon: ScanFace, color: "#4285f4" },
  { name: "n8n", cat: "ai", note: "Workflow automation", brand: siN8n },

  { name: "AWS", cat: "cloud", note: "EC2, Elastic Beanstalk", Icon: Cloud, color: "#ff9900" },
  { name: "Vercel", cat: "cloud", note: "Web hosting", brand: siVercel },
  { name: "DigitalOcean", cat: "cloud", note: "Cloud servers", brand: siDigitalocean },
  { name: "Git", cat: "cloud", note: "Code review and CI/CD", brand: siGit },
];
