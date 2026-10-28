import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { HeroOrbit } from "./HeroOrbit";

export function Hero() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section id="top" className={`hero${ready ? " is-ready" : ""}`}>
      <div className="hero__frame">
        <div className="hero__grid" aria-hidden="true" />
        <div className="hero__glow" aria-hidden="true" />
        <div className="hero__inner">
          <div>
            <span className="hero__badge"><i /> {profile.headline}</span>
            <h1 className="hero__title lines">
              <span className="line" style={{ ["--i" as string]: 0 }}><span>{profile.name}<span className="dot">.</span></span></span>
              <span className="line" style={{ ["--i" as string]: 1 }}><span className="serif">{profile.title}.</span></span>
            </h1>
            <p className="hero__lead" style={{ ["--d" as string]: "0.45s" }}>{profile.tagline}</p>
            <div className="hero__ctas" style={{ ["--d" as string]: "0.6s" }}>
              <a href="#projects" className="btn">View my work <ArrowRight size={18} /></a>
              <a href="#contact" className="btn btn--ghost">Get in touch</a>
            </div>
            <div className="hero__stats" style={{ ["--d" as string]: "0.75s" }}>
              <div><b>{profile.years}+</b><span>Years</span></div>
              <div><b>{projects.length}</b><span>Projects</span></div>
              <div><b>Remote</b><span>Worldwide</span></div>
            </div>
          </div>
          <HeroOrbit />
        </div>
        <div className="hero__scroll" aria-hidden="true">SCROLL<i /></div>
      </div>
    </section>
  );
}
