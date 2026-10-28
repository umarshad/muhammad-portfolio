import { techStack } from "@/data/profile";

function Row({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const loop = [...items, ...items];
  return (
    <div className={`clients__row${reverse ? " clients__row--r" : ""}`}>
      <div className="clients__track">
        {loop.map((t, i) => (
          <span key={`${t}-${i}`} className="chip" aria-hidden={i >= items.length}>{t}</span>
        ))}
      </div>
    </div>
  );
}

export function TechMarquee() {
  const half = Math.ceil(techStack.length / 2);
  return (
    <section className="clients" aria-label="Technologies">
      <p className="eyebrow clients__title">Technologies I work with</p>
      <Row items={techStack.slice(0, half)} />
      <Row items={techStack.slice(half)} reverse />
    </section>
  );
}
