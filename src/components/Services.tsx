import type { PointerEvent } from "react";
import { ArrowUpRight, Code2, CreditCard, Globe, LayoutDashboard, Layers, Rocket, Smartphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { services } from "@/data/services";

const icons: LucideIcon[] = [Smartphone, Globe, LayoutDashboard, Layers, CreditCard, Rocket, Code2];

// Spotlight follows the pointer across each card.
function spotlight(e: PointerEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
}

export function Services() {
  return (
    <section id="services" className="svc" aria-labelledby="services-title">
      <div className="svc__frame">
        <p className="eyebrow eyebrow--dark reveal">What I build</p>
        <h2 id="services-title" className="exp__title reveal" style={{ ["--d" as string]: "0.1s" }}>
          Design. Develop. <span className="serif">Deploy.</span>
        </h2>
        <p className="svc__lead reveal" style={{ ["--d" as string]: "0.2s" }}>
          Custom apps, websites and admin panels, specialised in SaaS products with in-app purchases, store deployment and end-to-end product creation.
        </p>
        <div className="svc__grid">
          {services.map((s, i) => {
            const Icon = icons[i];
            return (
              <article
                key={s.title}
                className={`svccard reveal${s.wide ? " svccard--wide" : ""}`}
                style={{ ["--d" as string]: `${(i % 3) * 0.08}s` }}
                onPointerMove={spotlight}
              >
                <span className="svccard__num">{String(i + 1).padStart(2, "0")}</span>
                <span className="svccard__ico"><Icon size={22} /></span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <div className="svccard__tags">{s.tags.map((t) => <span key={t}>{t}</span>)}</div>
                <ArrowUpRight className="svccard__arrow" size={20} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
