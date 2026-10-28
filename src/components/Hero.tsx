import { useEffect, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { useTypewriter } from "@/hooks/useTypewriter";
import { HeroDevices } from "./HeroDevices";

const roles = [profile.title, "Full-Stack Developer", "SaaS App Builder", "iOS & Android Developer", "Admin Panel Developer"];

export function Hero() {
  const { text, typing } = useTypewriter(roles);
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
            <div className="hero__chips">
              <span className="hero__badge hero__badge--live"><i /> Open to remote work</span>
              <span className="hero__badge"><i /> Apps · Websites · SaaS</span>
            </div>
            <h1 className="hero__title lines">
              <span className="line" style={{ ["--i" as string]: 0 }}><span>{profile.name}<span className="dot">.</span></span></span>
              <span className="line" style={{ ["--i" as string]: 1 }}><span className="serif"><span className="sr-only">{profile.title}, full-stack and SaaS developer.</span><span aria-hidden="true" className="typed">{text}<span className={`typed__dot${typing ? " is-typing" : ""}`}>.</span><i className="typed__caret" /></span></span></span>
            </h1>
            <p className="hero__lead" style={{ ["--d" as string]: "0.45s" }}>
              I create <strong>custom apps, websites and admin panels</strong>, specialised in <strong>SaaS products</strong> with
              in-app purchases, store deployment and end-to-end delivery: design, development and release.
            </p>
            <div className="hero__ctas" style={{ ["--d" as string]: "0.6s" }}>
              <a href="#contact" className="btn">Start a project <ArrowRight size={18} /></a>
              <a href="#projects" className="btn btn--ghost">View my work</a>
              <a href={profile.resume} className="btn btn--ghost" download>Resume <Download size={16} aria-hidden="true" /></a>
            </div>
            <p className="hero__note" style={{ ["--d" as string]: "0.68s" }}>Send a short brief by WhatsApp or email and get a reply with the right next step.</p>
            <div className="hero__stats" style={{ ["--d" as string]: "0.75s" }}>
              <div><b>{profile.years}+</b><span>Years</span></div>
              <div><b>{projects.length}</b><span>Projects</span></div>
              <div><b>3</b><span>iOS · Android · Web</span></div>
            </div>
          </div>
          <HeroDevices />
        </div>
        <div className="hero__scroll" aria-hidden="true">SCROLL<i /></div>
      </div>
    </section>
  );
}
