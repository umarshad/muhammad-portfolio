import type { Role } from "@/data/experience";

const AXIS_MONTHS = 34; // Mar 2024 to Dec 2026
const monthIndex = (ym: string) => {
  const [y, m] = ym.split("-").map(Number);
  return (y - 2024) * 12 + (m - 3);
};
const ticks = [
  { label: "2024", at: 0 },
  { label: "2025", at: 10 },
  { label: "2026", at: 22 },
];

// Roles on one time axis, so overlaps and the progression are visible at a glance.
export function ExperienceGantt({ roles, focus, onPick }: { roles: Role[]; focus: number; onPick: (i: number) => void }) {
  return (
    <div className="gantt reveal" role="group" aria-label="Career timeline, newest first">
      <div className="gantt__axis" aria-hidden="true">
        {ticks.map((t) => (
          <span key={t.label} style={{ left: `${(t.at / AXIS_MONTHS) * 100}%` }}>{t.label}</span>
        ))}
      </div>
      {roles.map((r, i) => {
        const s = monthIndex(r.from);
        const e = r.to ? monthIndex(r.to) + 1 : AXIS_MONTHS;
        const left = (s / AXIS_MONTHS) * 100;
        const width = ((e - s) / AXIS_MONTHS) * 100;
        return (
          <button
            key={r.company + r.period}
            type="button"
            className={`gantt__row${i === focus ? " is-on" : ""}`}
            onClick={() => onPick(i)}
            aria-label={`${r.role}, ${r.company}, ${r.period}`}
          >
            <span className={`gantt__bar${r.to ? "" : " is-open"}`} style={{ left: `${left}%`, width: `${width}%` }}>
              {!r.to && <em>{r.company}</em>}
            </span>
            {r.to && <span className="gantt__lbl" style={{ left: `calc(${left + width}% + 10px)` }}>{r.company}</span>}
          </button>
        );
      })}
    </div>
  );
}
