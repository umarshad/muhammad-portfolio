import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="work">
      <div className="container">
        <div className="work__head">
          <p className="eyebrow reveal">Selected work</p>
          <h2 className="work__title reveal" style={{ ["--d" as string]: "0.1s" }}>
            My Recent <span className="serif">Work</span>
          </h2>
          <p className="work__sub reveal" style={{ ["--d" as string]: "0.2s" }}>
            A comprehensive showcase of my mobile and web applications, built with excellence and precision.
          </p>
        </div>
        <div className="work__grid">
          {projects.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
