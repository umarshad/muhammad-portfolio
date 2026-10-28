import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectCover } from "./ProjectCover";

const LIVE = new Set(["Live"]);

export function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: (p: Project) => void }) {
  return (
    <article className="pcard" style={{ ["--i" as string]: index }}>
      <button type="button" className="pcard__media" onClick={() => onOpen(project)}>
        <ProjectCover project={project} />
        <span className="pcard__peek"><span className="sr-only">{project.title}: </span>View details <ArrowUpRight size={16} /></span>
      </button>
      <div className="pcard__body">
        <div className="pcard__top">
          <span className="pcard__kinds">{project.kinds.join(" · ")}</span>
          <span className={`pcard__status${LIVE.has(project.status) ? " is-live" : ""}`}><i /> {project.status}</span>
        </div>
        <h3>
          {project.logo && <img className="pcard__logo" src={project.logo} alt="" width={32} height={32} loading="lazy" decoding="async" />}
          {project.title}
        </h3>
        <p>{project.description}</p>
        <div className="tags">{project.technologies.slice(0, 4).map((t) => <span key={t}>{t}</span>)}</div>
      </div>
    </article>
  );
}
