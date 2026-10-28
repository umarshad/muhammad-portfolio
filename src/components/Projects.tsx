import { useState } from "react";
import { projectFilters, projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectDialog } from "./ProjectDialog";
import { ProjectFeature } from "./ProjectFeature";

export function Projects() {
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState<Project | null>(null);

  const [featured, ...rest] = projects;
  const match = (p: Project) => filter === "all" || p.kinds.includes(filter);
  const showFeatured = match(featured);
  const list = rest.filter(match);

  return (
    <section id="projects" className="work" aria-labelledby="work-title">
      <div className="container">
        <div className="work__head">
          <p className="eyebrow reveal">Flutter and web app portfolio</p>
          <h2 id="work-title" className="work__title reveal" style={{ ["--d" as string]: "0.1s" }}>
            Products I&apos;ve <span className="serif">shipped</span>
          </h2>
          <p className="work__sub reveal" style={{ ["--d" as string]: "0.2s" }}>
            Store-ready apps, SaaS platforms and websites, from first screen to live release.
          </p>
        </div>

        <div className="work__filters" role="group" aria-label="Filter projects">
          {projectFilters.map((f) => (
            <button key={f.id} type="button" aria-pressed={f.id === filter} onClick={() => setFilter(f.id)}>{f.label}</button>
          ))}
        </div>

        {showFeatured && <ProjectFeature project={featured} />}

        <div className="work__grid" key={filter}>
          {list.map((p, i) => <ProjectCard key={p.title} project={p} index={i} onOpen={setOpen} />)}
        </div>
        {!showFeatured && list.length === 0 && <p className="work__empty">No projects in this group yet.</p>}
      </div>
      {open && <ProjectDialog project={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
