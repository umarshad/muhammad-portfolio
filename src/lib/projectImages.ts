import type { Project } from "@/data/projects";

export type ProjectImage = { src: string; label: string };

// Everything worth enlarging for a project, in display order.
export function projectImages(p: Project): ProjectImage[] {
  if (p.gallery?.length) return p.gallery;
  if (p.shots?.length) return p.shots;
  if (p.cover) return [{ src: p.cover, label: `${p.title} website screenshot` }];
  return [];
}
