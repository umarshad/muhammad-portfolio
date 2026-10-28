import { caseStudy, landingPages } from "@/data/landing";
import { profile } from "@/data/profile";

export const HOME_TITLE = "Flutter Developer for Hire | Muhammad Umar, Lahore (Remote)";
export const HOME_DESCRIPTION =
  "Hire Muhammad Umar, a Flutter and full-stack developer in Lahore. Custom mobile apps, websites, admin panels and SaaS with in-app purchases and store release.";

export type PageMeta = { path: string; title: string; description: string; canonical: string; kind: "home" | "service" | "case" };

const abs = (path: string) => (path === "/" ? `${profile.site}/` : `${profile.site}${path}`);

export const pageMetas: PageMeta[] = [
  { path: "/", title: HOME_TITLE, description: HOME_DESCRIPTION, canonical: abs("/"), kind: "home" },
  ...landingPages.map((p) => ({ path: `/${p.slug}`, title: p.title, description: p.description, canonical: abs(`/${p.slug}`), kind: "service" as const })),
  { path: `/${caseStudy.slug}`, title: caseStudy.title, description: caseStudy.description, canonical: abs(`/${caseStudy.slug}`), kind: "case" },
];

export const metaFor = (path: string) => pageMetas.find((m) => m.path === path);
