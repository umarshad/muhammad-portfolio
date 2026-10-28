import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="exp">
      <div className="exp__frame">
        <p className="eyebrow eyebrow--dark reveal">Experience</p>
        <h2 className="exp__title reveal" style={{ ["--d" as string]: "0.1s" }}>
          Where I&apos;ve <span className="serif">built</span>
        </h2>
        <ol className="timeline">
          {experience.map((r, i) => (
            <li key={`${r.company}-${r.period}`} className="timeline__item reveal" style={{ ["--d" as string]: `${i * 0.08}s` }}>
              <div className="timeline__meta">
                <span className="timeline__period">{r.period}</span>
                <span className="timeline__place">{r.place}</span>
                {r.note && <span className="timeline__note">{r.note}</span>}
              </div>
              <div className="timeline__card">
                <h3>{r.role}</h3>
                <p className="timeline__company">{r.company}</p>
                <ul>{r.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
