import { useEffect, useRef } from "react";
import { ExternalLink, X } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectCover } from "./ProjectCover";

// Native <dialog>: Esc closes, focus is trapped and restored for free.
export function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    if (d && !d.open) d.showModal();
  }, []);
  const hasLink = project.url && project.url !== "#";

  return (
    <dialog
      ref={ref}
      className="pdlg"
      aria-labelledby="pdlg-title"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && ref.current?.close()}
    >
      <div className="pdlg__box">
        <button type="button" className="pdlg__x" onClick={() => ref.current?.close()} aria-label="Close"><X size={20} /></button>
        <div className="pdlg__media"><ProjectCover project={project} eager /></div>
        <div className="pdlg__body">
          <p className="pcard__kinds">{project.kinds.join(" · ")} · {project.status}</p>
          <h3 id="pdlg-title">{project.title}</h3>
          <p className="pdlg__desc">{project.description}</p>
          <h4>Key features</h4>
          <ul>{project.features.map((f) => <li key={f}>{f}</li>)}</ul>
          <h4>Technologies</h4>
          <div className="tags">{project.technologies.map((t) => <span key={t}>{t}</span>)}</div>
          {hasLink && (
            <a className="btn btn--dark btn--sm" href={project.url} target="_blank" rel="noopener noreferrer">
              Visit project <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>
    </dialog>
  );
}
