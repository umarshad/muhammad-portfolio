import { processSteps } from "@/data/services";

export function Process() {
  return (
    <section id="process" className="proc" aria-labelledby="process-title">
      <div className="container">
        <p className="eyebrow reveal">How I work</p>
        <h2 id="process-title" className="work__title reveal" style={{ ["--d" as string]: "0.1s" }}>
          From idea to <span className="serif">launch</span>
        </h2>
        <ol className="proc__steps">
          <span className="proc__comet" aria-hidden="true" />
          {processSteps.map((s, i) => (
            <li key={s.title} className="proc__step reveal" style={{ ["--d" as string]: `${i * 0.12}s` }}>
              <span className="proc__num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
