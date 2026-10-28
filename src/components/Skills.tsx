import { useEffect, useRef, useState } from "react";
import { certifications, education, languages, skillGroups } from "@/data/skills";

const pad = (n: number) => String(n).padStart(2, "0");

export function Skills() {
  const [active, setActive] = useState(0);
  const rows = useRef<(HTMLLIElement | null)[]>([]);

  // The row crossing the middle of the viewport becomes the active category.
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i));
        });
      },
      { rootMargin: "-46% 0px -46% 0px" },
    );
    rows.current.forEach((r) => r && io.observe(r));
    return () => io.disconnect();
  }, []);

  const group = skillGroups[active];

  return (
    <section id="skills" className="skills" aria-labelledby="skills-title">
      <div className="container">
        <p className="eyebrow reveal">Skills</p>
        <h2 id="skills-title" className="work__title reveal" style={{ ["--d" as string]: "0.1s" }}>
          Technical <span className="serif">skills</span>
        </h2>

        <div className="skillsx">
          <ol className="skillsx__list">
            {skillGroups.map((g, i) => (
              <li
                key={g.title}
                data-i={i}
                ref={(el) => {
                  rows.current[i] = el;
                }}
                className={`skillrow${i === active ? " is-active" : ""}`}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
              >
                <span className="skillrow__num">{pad(i + 1)}</span>
                <h3>{g.title}</h3>
                <span className="skillrow__count">{g.items.length}</span>
                <div className="skillrow__chips tags">
                  {g.items.map((t) => <span key={t}>{t}</span>)}
                </div>
              </li>
            ))}
          </ol>

          <aside className="skillstage" aria-hidden="true">
            <div className="skillstage__grid" />
            <span className="skillstage__ghost" key={`g${active}`}>{pad(active + 1)}</span>
            <p className="skillstage__eyebrow">{pad(active + 1)} / {pad(skillGroups.length)}</p>
            <h3 className="skillstage__title" key={`t${active}`}>{group.title}</h3>
            <div className="skillstage__chips" key={`c${active}`}>
              {group.items.map((t, i) => (
                <span key={t} style={{ ["--i" as string]: i }}>{t}</span>
              ))}
            </div>
            <div className="skillstage__rail">
              <i style={{ transform: `scaleX(${(active + 1) / skillGroups.length})` }} />
            </div>
          </aside>
        </div>

        <div className="skills__meta">
          <div className="skillbox reveal">
            <h3>Education</h3>
            <p><b>{education.degree}</b></p>
            <p>{education.school}, {education.place}</p>
            <p className="skills__muted">{education.period}</p>
          </div>
          <div className="skillbox reveal" style={{ ["--d" as string]: "0.08s" }}>
            <h3>Certifications &amp; Activities</h3>
            {certifications.map((c) => <p key={c}>{c}</p>)}
          </div>
          <div className="skillbox reveal" style={{ ["--d" as string]: "0.16s" }}>
            <h3>Languages</h3>
            {languages.map((l) => <p key={l}>{l}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
}
