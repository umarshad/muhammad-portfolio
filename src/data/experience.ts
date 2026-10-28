export type Role = {
  role: string;
  company: string;
  place: string;
  period: string;
  note?: string;
  points: string[];
};

export const experience: Role[] = [
  {
    role: "Flutter Developer",
    company: "DM Worx LLC",
    place: "Remote",
    period: "Apr 2025 - Present",
    points: [
      "Building My Invoice, a multi-platform business product made of a Flutter mobile app, a React web portal and a separate admin dashboard, all on a shared Firebase backend.",
      "Implemented subscriptions through App Store and Google Play in-app purchases, and client payments through Stripe, with FCM push notifications for payment reminders.",
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
    note: "Concurrent with DM Worx LLC",
    points: [
      "Delivered full-stack features with React, TypeScript, Node.js and PostgreSQL in a production codebase, completing all deliverables on schedule.",
      "Designed and managed relational database schemas on Supabase and Neon to support scalable backend operations.",
      "Built admin panels and reporting interfaces that consolidated internal workflows and reduced manual oversight for operators.",
    ],
  },
  {
    role: "Flutter Developer",
    company: "Solution Soul",
    place: "Lahore, Pakistan",
    period: "Jun 2024 - Feb 2025",
    points: [
      "Developed and released multiple cross-platform Flutter apps to the App Store and Google Play, each delivered within agreed client deadlines.",
      "Implemented Firebase Authentication and Firestore across client projects for secure multi-user access and real-time data sync.",
      "Built adaptive UI components tested across screen sizes to keep the experience consistent on Android and iOS.",
      "Delivered admin panels and client-facing apps end to end, from design handoff to store submission.",
    ],
  },
  {
    role: "Flutter Developer Intern",
    company: "Orbilon Technology",
    place: "Lahore, Pakistan",
    period: "Mar 2024 - Jun 2024",
    points: [
      "Built Flutter screens and reusable UI components for client-facing products, reviewed and approved by senior developers.",
      "Implemented Firebase Authentication and Firestore features and managed state with Provider and Riverpod, resolving performance bottlenecks before client delivery.",
    ],
  },
];
