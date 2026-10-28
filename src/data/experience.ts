export type Role = {
  role: string;
  company: string;
  place: string;
  period: string;
  from: string; // YYYY-MM
  to: string | null; // null while current
  note?: string;
  wins: string[];
  tech: string[];
  points: string[];
};

// Inclusive length of a finished role, e.g. "9 mo". Current roles have none.
export function durationLabel(r: Pick<Role, "from" | "to">) {
  if (!r.to) return null;
  const [y1, m1] = r.from.split("-").map(Number);
  const [y2, m2] = r.to.split("-").map(Number);
  const n = (y2 - y1) * 12 + (m2 - m1) + 1;
  return n >= 12 ? `${Math.floor(n / 12)} yr${n % 12 ? ` ${n % 12} mo` : ""}` : `${n} mo`;
}

export const experience: Role[] = [
  {
    role: "Flutter Developer",
    company: "DM Worx LLC",
    place: "Remote",
    period: "Apr 2025 - Present",
    from: "2025-04",
    to: null,
    wins: ["Multi-platform product", "Store subscriptions and Stripe", "Bot and abuse protection"],
    tech: ["Flutter", "Firebase", "Stripe", "In-App Purchases", "OpenAI API", "React", "Supabase", "Cloudflare Turnstile"],
    points: [
      "Building My Invoice, a multi-platform business product made of a Flutter mobile app, a React web portal and a separate admin dashboard, all on a shared Firebase backend.",
      "Implemented subscriptions through App Store and Google Play in-app purchases, and client payments through Stripe, with FCM push notifications for payment reminders.",
      "Added bot and abuse protection to My Invoice with Cloudflare Turnstile verified server-side, reCAPTCHA and Firebase App Check.",
      "Integrated the OpenAI (ChatGPT) API to power an in-app assistant for user support and workflow suggestions.",
      "Built Hudson Tasks (hudsontasks.com), a React and Supabase workforce management platform used by employers to manage field employees, work hours, tasks and finances.",
      "Introduced feature-first modular architecture and Git-based code review to improve release consistency and reduce regressions across features.",
    ],
  },
  {
    role: "Full-Stack Developer (Contract)",
    company: "Cygnus Ventures",
    place: "Remote",
    period: "Oct 2025 - Dec 2025",
    from: "2025-10",
    to: "2025-12",
    wins: ["All deliverables on schedule", "Admin panels and reporting"],
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Supabase"],
    note: "Concurrent with DM Worx LLC",
    points: [
      "Delivered full-stack features with React, TypeScript, Node.js and PostgreSQL in a production codebase, completing all deliverables on schedule.",
      "Designed and managed relational database schemas on Supabase to support scalable backend operations.",
      "Built admin panels and reporting interfaces that consolidated internal workflows and reduced manual oversight for operators.",
    ],
  },
  {
    role: "Flutter Developer",
    company: "Solution Soul",
    place: "Lahore, Pakistan",
    period: "Jun 2024 - Feb 2025",
    from: "2024-06",
    to: "2025-02",
    wins: ["Built app interfaces", "Firebase sign-in"],
    tech: ["Flutter", "Firebase Auth", "UI/UX"],
    points: [
      "Built the user interfaces of client Flutter apps from the design files.",
      "Connected Firebase Authentication so users could sign up and log in.",
      "Made layouts that fit different screen sizes on Android and iOS.",
      "Maintained the UI and UX of the apps, fixing layout problems and making design changes.",
    ],
  },
  {
    role: "Flutter Developer Intern",
    company: "Orbilon Technology",
    place: "Lahore, Pakistan",
    period: "Mar 2024 - Jun 2024",
    from: "2024-03",
    to: "2024-06",
    wins: ["Reusable UI components", "Reviewed by senior developers"],
    tech: ["Flutter", "Firebase", "Provider", "Riverpod"],
    points: [
      "Built Flutter screens and reusable UI components for client-facing products, reviewed and approved by senior developers.",
      "Implemented Firebase Authentication and Firestore features and managed state with Provider and Riverpod, resolving performance bottlenecks before client delivery.",
    ],
  },
];
