import { allServicePages, caseStudies } from "@/data/landing";
import { profile } from "@/data/profile";

export const HOME_TITLE = "Flutter Developer for Hire (UK, EU, USA) | Muhammad Umar";
export const HOME_DESCRIPTION =
  "Remote Flutter and full-stack developer for UK, EU and US clients: custom mobile apps, websites, admin panels and SaaS with in-app purchases and store release.";

export type PageMeta = { path: string; title: string; description: string; canonical: string; kind: "home" | "service" | "case" };

const abs = (path: string) => (path === "/" ? `${profile.site}/` : `${profile.site}${path}`);

export const pageMetas: PageMeta[] = [
  { path: "/", title: HOME_TITLE, description: HOME_DESCRIPTION, canonical: abs("/"), kind: "home" },
  ...allServicePages.map((p) => ({ path: `/${p.slug}`, title: p.title, description: p.description, canonical: abs(`/${p.slug}`), kind: "service" as const })),
  ...caseStudies.map((c) => ({ path: `/${c.slug}`, title: c.title, description: c.description, canonical: abs(`/${c.slug}`), kind: "case" as const })),
];

export const metaFor = (path: string) => pageMetas.find((m) => m.path === path);
