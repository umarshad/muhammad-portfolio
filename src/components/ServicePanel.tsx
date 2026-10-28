import { ArrowRight, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Service } from "@/data/services";

type Props = { service: Service; index: number; Icon: LucideIcon; id: string; tabId: string; active: boolean };

// Detail view for one service. Every panel stays in the page (hidden when inactive) so the text remains crawlable.
export function ServicePanel({ service: s, index, Icon, id, tabId, active }: Props) {
  return (
    <div id={id} role="tabpanel" aria-labelledby={tabId} aria-hidden={!active} data-active={active ? "" : undefined} className="svcpanel">
      <span className="svcpanel__ghost" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
      <span className="svcpanel__ico"><Icon size={26} /></span>
      <h3>{s.title}</h3>
      <p className="svcpanel__text">{s.text}</p>

      <p className="svcpanel__label">What you get</p>
      <ul className="svcpanel__gets">
        {s.gets.map((g, i) => (
          <li key={g} style={{ ["--i" as string]: i }}><Check size={16} aria-hidden="true" />{g}</li>
        ))}
      </ul>

      <div className="svcpanel__meta">
        <div>
          <p className="svcpanel__label">Built with</p>
          <div className="svccard__tags">{s.tags.map((t) => <span key={t}>{t}</span>)}</div>
        </div>
        <div>
          <p className="svcpanel__label">Seen in</p>
          <div className="svcpanel__seen">{s.seen.map((n) => <a key={n} href="#projects">{n}</a>)}</div>
        </div>
      </div>

      <div className="svcpanel__ctas">
        <a className="btn" href="#contact">Discuss this <ArrowRight size={18} /></a>
        <a className="btn btn--ghost" href={s.href}>Read the full service page</a>
      </div>
    </div>
  );
}
