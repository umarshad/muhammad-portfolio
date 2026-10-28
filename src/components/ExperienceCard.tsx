import { useId, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { durationLabel } from "@/data/experience";
import type { Role } from "@/data/experience";

const VISIBLE = 3;

export function ExperienceCard({ role, active }: { role: Role; active: boolean }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const duration = durationLabel(role);
  const head = role.points.slice(0, VISIBLE);
  const rest = role.points.slice(VISIBLE);

  return (
    <div className={`xcard${active ? " is-active" : ""}`}>
      <header className="xcard__head">
        <div>
          <h3>{role.role}</h3>
          <p>{role.company}</p>
        </div>
        {duration ? <span className="xcard__badge">{duration}</span> : <span className="xcard__badge is-live"><i />Current</span>}
      </header>

      <div className="xcard__wins">
        {role.wins.map((w) => (
          <span key={w}><Check size={14} strokeWidth={3} />{w}</span>
        ))}
      </div>

      <ul className="xcard__list">{head.map((p) => <li key={p}>{p}</li>)}</ul>
      {rest.length > 0 && (
        <>
          <div id={id} className={`xcard__more${open ? " is-open" : ""}`}>
            <ul className="xcard__list">{rest.map((p) => <li key={p}>{p}</li>)}</ul>
          </div>
          <button type="button" className="xcard__toggle" aria-expanded={open} aria-controls={id} onClick={() => setOpen((v) => !v)}>
            {open ? "Show less" : `Show ${rest.length} more`} <ChevronDown size={16} />
          </button>
        </>
      )}

      <div className="xcard__tech">{role.tech.map((t) => <span key={t}>{t}</span>)}</div>
    </div>
  );
}
