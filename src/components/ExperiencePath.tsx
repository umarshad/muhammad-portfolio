import type { Role } from "@/data/experience";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const since = (ym: string) => {
  const [y, m] = ym.split("-").map(Number);
  return `${MONTHS[m - 1]} ${y}`;
};

// Four steps in the order they happened. Clicking one jumps to its card below.
export function ExperiencePath({ roles, focus, onPick }: { roles: Role[]; focus: number; onPick: (i: number) => void }) {
  const steps = roles.map((r, i) => ({ r, i })).sort((a, b) => a.r.from.localeCompare(b.r.from));
  return (
    <ol className="path reveal" aria-label="Career path, oldest first">
      {steps.map(({ r, i }) => (
        <li key={r.company + r.period}>
          <button type="button" className={`path__step${i === focus ? " is-on" : ""}`} onClick={() => onPick(i)}>
            <span className="path__dot" aria-hidden="true" />
            <b>{r.company}</b>
            <small>{r.role}</small>
            <em>{since(r.from)}{r.to ? "" : " · now"}</em>
          </button>
        </li>
      ))}
    </ol>
  );
}
