import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { ArrowRight, ArrowUpRight, Code2, CreditCard, Globe, LayoutDashboard, Layers, Rocket, Smartphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { services } from "@/data/services";
import { ServicePanel } from "./ServicePanel";

const icons: LucideIcon[] = [Smartphone, Globe, LayoutDashboard, Layers, CreditCard, Rocket, Code2];
const AUTO_MS = 7000;
const pad = (n: number) => String(n).padStart(2, "0");

export function Services() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const intent = useRef<ReturnType<typeof setTimeout>>();

  // Hover opens a service after a short stay, so sweeping down the list does not flicker the panel.
  const hoverOpen = (i: number) => {
    clearTimeout(intent.current);
    intent.current = setTimeout(() => setActive(i), 120);
  };
  useEffect(() => () => clearTimeout(intent.current), []);

  // Moves through the services on its own until the visitor hovers or focuses the list.
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % services.length), AUTO_MS);
    return () => clearTimeout(id);
  }, [active, paused]);

  // When the list scrolls sideways (phones), keep the active service in view without moving the page.
  useEffect(() => {
    const el = tabs.current[active];
    const strip = el?.parentElement;
    if (!el || !strip || strip.scrollWidth <= strip.clientWidth) return;
    strip.scrollTo({ left: el.offsetLeft - 16, behavior: "smooth" });
  }, [active]);

  // Arrow keys move between services, like a standard tab list.
  const onKey = (e: KeyboardEvent) => {
    const next = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
    if (!next) return;
    e.preventDefault();
    const i = (active + next + services.length) % services.length;
    setActive(i);
    tabs.current[i]?.focus();
  };

  return (
    <section id="services" className="svc" aria-labelledby="services-title">
      <div className="svc__frame">
        <p className="eyebrow eyebrow--dark reveal">Flutter app and full-stack development services</p>
        <h2 id="services-title" className="exp__title reveal" style={{ ["--d" as string]: "0.1s" }}>
          Design. Develop. <span className="serif">Deploy.</span>
        </h2>
        <p className="svc__lead reveal" style={{ ["--d" as string]: "0.2s" }}>
          Custom apps, websites and admin panels, specialised in SaaS products with in-app purchases, store deployment and end-to-end product creation.
        </p>

        <div
          className="svcx"
          data-paused={paused ? "" : undefined}
          style={{ ["--auto" as string]: `${AUTO_MS}ms` }}
          onPointerEnter={(e) => e.pointerType === "mouse" && setPaused(true)}
          onPointerLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="svcx__tabs" role="tablist" aria-label="Services" aria-orientation="vertical" onKeyDown={onKey}>
            {services.map((s, i) => {
              const Icon = icons[i];
              return (
                <button
                  key={s.title}
                  ref={(el) => {
                    tabs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`svc-tab-${i}`}
                  aria-selected={i === active}
                  aria-controls={`svc-panel-${i}`}
                  tabIndex={i === active ? 0 : -1}
                  className="svctab"
                  onClick={() => {
                    clearTimeout(intent.current);
                    setActive(i);
                  }}
                  onPointerEnter={(e) => e.pointerType === "mouse" && hoverOpen(i)}
                  onPointerLeave={() => clearTimeout(intent.current)}
                >
                  <span className="svctab__n">{pad(i + 1)}</span>
                  <span className="svctab__ico"><Icon size={20} aria-hidden="true" /></span>
                  <span className="svctab__txt">
                    <span className="svctab__t">{s.title}</span>
                    <span className="svctab__kw">{s.kw}</span>
                  </span>
                  {i === active ? <ArrowRight className="svctab__go" size={18} aria-hidden="true" /> : <ArrowUpRight className="svctab__go" size={18} aria-hidden="true" />}
                  <i className="svctab__bar" aria-hidden="true" />
                </button>
              );
            })}
          </div>
          <div className="svcx__stage">
            <div className="svcx__grid" aria-hidden="true" />
            {services.map((s, i) => (
              <ServicePanel key={s.title} service={s} index={i} Icon={icons[i]} id={`svc-panel-${i}`} tabId={`svc-tab-${i}`} active={i === active} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
