import { useId, useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

const LIVE = new Set(["Live"]);

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const hasLink = project.url && project.url !== "#";

  return (
    <article className="pcard reveal" style={{ ["--d" as string]: `${(index % 2) * 0.1}s` }}>
      <div className="pcard__top">
        <span className="pcard__num">{String(index + 1).padStart(2, "0")}</span>
        <span className={`pcard__status${LIVE.has(project.status) ? " is-live" : ""}`}>
          <i /> {project.status}
        </span>
      </div>

      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="pcard__actions">
        {project.playUrl && (
          <a className="pcard__badge" href={project.playUrl} target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt={`Get ${project.title} on Google Play`}
              loading="lazy"
            />
          </a>
        )}
        {hasLink && (
          <a className="btn btn--dark btn--sm" href={project.url} target="_blank" rel="noopener noreferrer">
            View project <ExternalLink size={15} />
          </a>
        )}
        <button
          type="button"
          className="pcard__toggle"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Hide details" : "Show details"} <ChevronDown size={16} />
        </button>
      </div>

      <div id={panelId} className={`pcard__more${open ? " is-open" : ""}`}>
        <div>
          <h4>Key features</h4>
          <ul>{project.features.map((f) => <li key={f}>{f}</li>)}</ul>
          <h4>Technologies</h4>
          <div className="tags">{project.technologies.map((t) => <span key={t}>{t}</span>)}</div>
        </div>
      </div>
    </article>
  );
}
