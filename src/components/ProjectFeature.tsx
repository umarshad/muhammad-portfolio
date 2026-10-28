import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

const STATUS_LIVE = new Set(["Live"]);

// The flagship project: real app screens in a rotating phone fan, plus the key facts.
export function ProjectFeature({ project }: { project: Project }) {
  const shots = project.shots ?? [];
  const [i, setI] = useState(0);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (hover || shots.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => setI((v) => (v + 1) % shots.length), 3200);
    return () => clearTimeout(id);
  }, [i, hover, shots.length]);

  const pos = (n: number) => {
    const d = (((n - i) % shots.length) + shots.length) % shots.length;
    return d === 0 ? 0 : d === 1 ? 1 : d === shots.length - 1 ? -1 : 2;
  };

  return (
    <article className="feat" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="feat__text">
        <p className="feat__kicker">
          <span>Featured project</span>
          <span className={`pcard__status${STATUS_LIVE.has(project.status) ? " is-live" : ""}`}><i /> {project.status}</span>
        </p>
        <div className="feat__title">
          {project.logo && <img src={project.logo} alt={`${project.title} logo`} width={56} height={56} loading="lazy" />}
          <h3>{project.title}</h3>
        </div>
        <p className="feat__desc">{project.description}</p>
        <ul className="feat__list">{project.features.map((f) => <li key={f}>{f}</li>)}</ul>
        <div className="tags">{project.technologies.map((t) => <span key={t}>{t}</span>)}</div>
        <div className="feat__cta">
          {project.playUrl && (
            <a className="pcard__badge" href={project.playUrl} target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt={`Get ${project.title} on Google Play`} loading="lazy" />
            </a>
          )}
          <a className="btn btn--dark btn--sm" href={project.url} target="_blank" rel="noopener noreferrer">
            Visit myinvoice.us <ExternalLink size={15} />
          </a>
        </div>
      </div>

      <div className="feat__stage" aria-label={`${project.title} app screens`}>
        <div className="feat__glow" aria-hidden="true" />
        {shots.map(({ src, label }, n) => (
          <button
            key={src}
            type="button"
            className="feat__phone"
            data-pos={pos(n)}
            aria-label={`Show screen ${n + 1} of ${shots.length}: ${label}`}
            aria-current={n === i}
            onClick={() => setI(n)}
          >
            <img src={src} alt={`${project.title}: ${label}`} width={480} height={1067} loading="lazy" decoding="async" />
          </button>
        ))}
        <div className="feat__dots" aria-hidden="true">
          {shots.map((_, n) => <i key={n} className={n === i ? "is-on" : ""} />)}
        </div>
      </div>
    </article>
  );
}
