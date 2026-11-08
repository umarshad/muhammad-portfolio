import { allServicePages, caseStudies } from "@/data/landing";
import { profile } from "@/data/profile";

export const HOME_TITLE = "Muhammad Umar | Flutter Developer for Hire (UK, EU, USA)";
export const HOME_DESCRIPTION =
  "Muhammad Umar, remote Flutter developer in Lahore: Flutter, React, Firebase and Stripe apps for UK, EU and US clients. Built the My Invoice app.";

export type PageMeta = { path: string; title: string; description: string; canonical: string; kind: "home" | "service" | "case" };

const abs = (path: string) => (path === "/" ? `${profile.site}/` : `${profile.site}${path}`);

export const pageMetas: PageMeta[] = [
  { path: "/", title: HOME_TITLE, description: HOME_DESCRIPTION, canonical: abs("/"), kind: "home" },
  ...allServicePages.map((p) => ({ path: `/${p.slug}`, title: p.title, description: p.description, canonical: abs(`/${p.slug}`), kind: "service" as const })),
  ...caseStudies.map((c) => ({ path: `/${c.slug}`, title: c.title, description: c.description, canonical: abs(`/${c.slug}`), kind: "case" as const })),
];

export const metaFor = (path: string) => pageMetas.find((m) => m.path === path);
