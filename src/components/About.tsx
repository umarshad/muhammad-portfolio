import { Briefcase, CreditCard, Layers, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { aboutHighlights } from "@/data/about";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { AboutStatus } from "./AboutStatus";
import { Counter } from "./Counter";

const icons: LucideIcon[] = [Layers, CreditCard, Sparkles, Briefcase];

const stats = [
  { to: profile.years, suffix: "+", label: "Years building apps" },
  { to: projects.length, suffix: "", label: "Projects delivered" },
  { to: experience.length, suffix: "", label: "Teams worked with" },
  { to: 3, suffix: "", label: "Platforms: iOS, Android, Web" },
];

export function About() {
  return (
    <section id="about" className="intro" aria-labelledby="about-title">
      <div className="container">
        <div className="intro__top">
          <div className="about__head">
            <div>
              <p className="eyebrow reveal">Who I am</p>
              <h2 id="about-title" className="intro__statement reveal" style={{ ["--d" as string]: "0.1s" }}>
                Apps built to <span className="serif">ship</span> and scale.
              </h2>
              <p className="about__lead reveal" style={{ ["--d" as string]: "0.2s" }}>
                {profile.name} is a Flutter and full-stack developer with {profile.years}+ years of experience building cross-platform mobile apps and web platforms.
              </p>
            </div>
            <AboutStatus />
          </div>

          <div className="about__cards">
            {aboutHighlights.map((h, i) => {
              const Icon = icons[i];
              return (
                <article key={h.title} className="acard reveal" style={{ ["--d" as string]: `${i * 0.08}s` }}>
                  <span className="acard__ico"><Icon size={22} /></span>
                  <h3>{h.title}</h3>
                  <p>{h.text}</p>
                </article>
              );
            })}
          </div>

          <dl className="about__stats">
            {stats.map((s, i) => (
              <div key={s.label} className="reveal" style={{ ["--d" as string]: `${i * 0.08}s` }}>
                <dt>{s.label}</dt>
                <dd><Counter to={s.to} suffix={s.suffix} /></dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
