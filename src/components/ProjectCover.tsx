import { Radio, ScanFace, Smartphone, Truck, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Project } from "@/data/projects";

const icons: Record<string, LucideIcon> = {
  "Clika App": Radio,
  "Al Tayyab Recovery": Truck,
  "Emotions Controller App": ScanFace,
  "LinkedIn Content Automation": Workflow,
};

// A real screenshot when the product has a live site, otherwise a branded cover.
export function ProjectCover({ project, eager }: { project: Project; eager?: boolean }) {
  if (project.cover) {
    return (
      <span className="pcover">
        <img src={project.cover} alt={`${project.title} website screenshot`} width={960} height={600} loading={eager ? "eager" : "lazy"} decoding="async" />
      </span>
    );
  }
  const shots = project.shots;
  if (shots && shots.length >= 3) {
    return (
      <span className="pcover pcover--phones">
        <i className="pcover__grid" aria-hidden="true" />
        {[shots[1], shots[0], shots[2]].map((s, n) => (
          <img key={s.src} className={`pphone pphone--${n}`} src={s.src} alt={n === 1 ? `${project.title} app screens` : ""} width={320} height={692} loading={eager ? "eager" : "lazy"} decoding="async" />
        ))}
      </span>
    );
  }
  const Icon = icons[project.title] ?? Smartphone;
  return (
    <span className="pcover pcover--gen" aria-hidden="true">
      <i className="pcover__grid" />
      <span className="pcover__ico"><Icon size={34} strokeWidth={1.6} /></span>
    </span>
  );
}
