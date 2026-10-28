import { certifications, education, languages, skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <p className="eyebrow reveal">Skills</p>
        <h2 className="work__title reveal" style={{ ["--d" as string]: "0.1s" }}>
          Technical <span className="serif">skills</span>
        </h2>
        <div className="skills__grid">
          {skillGroups.map((g, i) => (
            <div key={g.title} className="skillbox reveal" style={{ ["--d" as string]: `${(i % 4) * 0.08}s` }}>
              <h3>{g.title}</h3>
              <div className="tags">{g.items.map((t) => <span key={t}>{t}</span>)}</div>
            </div>
          ))}
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
