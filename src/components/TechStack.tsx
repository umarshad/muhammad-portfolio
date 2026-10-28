import { useState } from "react";
import { techCategories, techs } from "@/data/tech";
import type { Tech } from "@/data/tech";
import { TechIcon, techColor } from "./TechIcon";

function Tile({ tech, hidden }: { tech: Tech; hidden?: boolean }) {
  return (
    <div className="ttile" aria-hidden={hidden || undefined} style={{ ["--c" as string]: techColor(tech) }}>
      <TechIcon tech={tech} />
      <span className="ttile__txt"><b>{tech.name}</b><small>{tech.note}</small></span>
    </div>
  );
}

function Row({ items, reverse }: { items: Tech[]; reverse?: boolean }) {
  return (
    <div className={`tech__row${reverse ? " tech__row--r" : ""}`}>
      <div className="tech__track">
        {[...items, ...items].map((t, i) => <Tile key={`${t.name}-${i}`} tech={t} hidden={i >= items.length} />)}
      </div>
    </div>
  );
}

export function TechStack() {
  const [cat, setCat] = useState("all");
  const active = techCategories.find((c) => c.id === cat)!;
  const list = cat === "all" ? techs : techs.filter((t) => t.cat === cat);
  // Interleave so each marquee row mixes categories.
  const rowA = techs.filter((_, i) => i % 2 === 0);
  const rowB = techs.filter((_, i) => i % 2 === 1);

  return (
    <section className="tech" aria-labelledby="tech-title">
      <div className="container">
        <div className="tech__head">
          <div>
            <p className="eyebrow">Flutter, React and Firebase tech stack</p>
            <h2 id="tech-title" className="tech__title">Tools I <span className="serif">build</span> with</h2>
          </div>
          <div className="tech__filters" role="group" aria-label="Filter technologies">
            {techCategories.map((c) => (
              <button key={c.id} type="button" aria-pressed={c.id === cat} onClick={() => setCat(c.id)}>
                {c.label}
              </button>
            ))}
          </div>
        </div>
        <p className="tech__blurb" key={cat}>
          {active.blurb} <span>{list.length} technologies</span>
        </p>
      </div>

      {cat === "all" ? (
        <div className="tech__marquee" key="all">
          <Row items={rowA} />
          <Row items={rowB} reverse />
        </div>
      ) : (
        <div className="container">
          <div className="tech__grid" key={cat}>
            {list.map((t, i) => (
              <div key={t.name} className="tcard" style={{ ["--i" as string]: i, ["--c" as string]: techColor(t) }}>
                <TechIcon tech={t} />
                <span className="ttile__txt"><b>{t.name}</b><small>{t.note}</small></span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
