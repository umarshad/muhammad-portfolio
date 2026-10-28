import type { ComponentType } from "react";
import App from "./App";
import { CaseStudyPage } from "@/components/page/CaseStudyPage";
import { ServicePage } from "@/components/page/ServicePage";
import { caseStudy, landingPages } from "@/data/landing";

const table: Record<string, ComponentType> = {
  "/": App,
  [`/${caseStudy.slug}`]: CaseStudyPage,
  ...Object.fromEntries(landingPages.map((p) => [`/${p.slug}`, () => <ServicePage page={p} />])),
};

export const routePaths = Object.keys(table);

// Normalises a pathname (no trailing slash) and returns its page component, or undefined.
export function resolveRoute(pathname: string): ComponentType | undefined {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return table[clean];
}
