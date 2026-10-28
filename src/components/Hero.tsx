import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { HeroDevices } from "./HeroDevices";

export function Hero() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setReady(true), 60);
    return () => clearTimeout(id);
  }, []);

  return (
    <section id="top" className={`hero${ready ? " is-ready" : ""}`}>
      <div className="hero__frame">
        <div className="hero__grid" aria-hidden="true" />
        <div className="hero__glow" aria-hidden="true" />
        <div className="hero__inner">
          <div>
            <span className="hero__badge"><i /> Apps · Websites · SaaS</span>
            <h1 className="hero__title lines">
              <span className="line" style={{ ["--i" as string]: 0 }}><span>{profile.name}<span className="dot">.</span></span></span>
              <span className="line" style={{ ["--i" as string]: 1 }}><span className="serif">{profile.title}.</span></span>
            </h1>
            <p className="hero__lead" style={{ ["--d" as string]: "0.45s" }}>{profile.tagline}</p>
            <div className="hero__ctas" style={{ ["--d" as string]: "0.6s" }}>
              <a href="#contact" className="btn">Start a project <ArrowRight size={18} /></a>
              <a href="#projects" className="btn btn--ghost">View my work</a>
            </div>
            <div className="hero__stats" style={{ ["--d" as string]: "0.75s" }}>
              <div><b>{profile.years}+</b><span>Years</span></div>
              <div><b>{projects.length}</b><span>Projects</span></div>
              <div><b>Remote</b><span>Open to work</span></div>
            </div>
          </div>
          <HeroDevices />
        </div>
        <div className="hero__scroll" aria-hidden="true">SCROLL<i /></div>
      </div>
    </section>
  );
}
