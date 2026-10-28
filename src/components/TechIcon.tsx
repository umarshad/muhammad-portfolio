import type { Tech } from "@/data/tech";

export const techColor = (tech: Tech) => (tech.brand ? `#${tech.brand.hex}` : tech.color ?? "#0b5a55");

// Brand mark from simple-icons when we have it, otherwise a matching generic icon.
export function TechIcon({ tech }: { tech: Tech }) {
  return (
    <span className="ttile__ico" aria-hidden="true">
      {tech.brand ? (
        <svg viewBox="0 0 24 24" fill="currentColor"><path d={tech.brand.path} /></svg>
      ) : tech.Icon ? (
        <tech.Icon size={22} strokeWidth={1.8} />
      ) : null}
    </span>
  );
}
