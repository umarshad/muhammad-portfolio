import { useEffect, useRef, useState } from "react";
import { experience } from "@/data/experience";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { ExperienceCard } from "./ExperienceCard";
import { ExperiencePath } from "./ExperiencePath";

export function Experience() {
  const [focus, setFocus] = useState(0);
  const items = useRef<(HTMLLIElement | null)[]>([]);
  const timeline = useScrollProgress<HTMLOListElement>(0.6);

  // The role crossing the middle of the viewport becomes the focused one.
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setFocus(Number((e.target as HTMLElement).dataset.i))),
      { rootMargin: "-45% 0px -45% 0px" },
    );
    items.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const jump = (i: number) => {
    setFocus(i);
    items.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section id="experience" className="exp" aria-labelledby="exp-title">
      <div className="exp__frame">
        <div className="exp__head">
          <div>
            <p className="eyebrow eyebrow--dark reveal">Flutter developer experience</p>
            <h2 id="exp-title" className="exp__title reveal" style={{ ["--d" as string]: "0.1s" }}>
              Where I&apos;ve <span className="serif">built</span>
            </h2>
            <p className="exp__sub reveal" style={{ ["--d" as string]: "0.2s" }}>
              From a Flutter internship to shipping complete products. Pick a step to jump to that role.
            </p>
          </div>
          <ExperiencePath roles={experience} focus={focus} onPick={jump} />
        </div>

        <ol className="timeline" ref={timeline}>
          {experience.map((r, i) => (
            <li
              key={`${r.company}-${r.period}`}
              data-i={i}
              ref={(el) => {
                items.current[i] = el;
              }}
              className="timeline__item reveal"
              data-passed={i <= focus}
              style={{ ["--d" as string]: `${i * 0.06}s` }}
            >
              <div className="timeline__meta">
                <span className="timeline__period">{r.period}</span>
                <span className="timeline__place">{r.place}</span>
                {r.note && <span className="timeline__note">{r.note}</span>}
              </div>
              <span className="timeline__dot" aria-hidden="true" />
              <ExperienceCard role={r} active={i === focus} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
