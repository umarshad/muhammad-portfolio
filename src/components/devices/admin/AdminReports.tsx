import { Download } from "lucide-react";

const bars = [38, 52, 44, 68, 59, 82, 74];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const split = [
  { l: "Subscriptions", v: "58%", c: "var(--orange-500)" },
  { l: "One-time", v: "27%", c: "var(--teal-300)" },
  { l: "Other", v: "15%", c: "#fafaf744" },
];

// Reports: weekly revenue bars, a revenue split donut and an export action.
export function AdminReports() {
  return (
    <div className="adm adm--reports">
      <div className="adm__panel">
        <p><b>Weekly revenue</b><span className="adm__btn adm__btn--ghost"><Download size="1.4em" /> Export CSV</span></p>
        <div className="adm__bars">
          {bars.map((h, i) => (
            <div key={days[i]} style={{ ["--h" as string]: `${h}%`, ["--i" as string]: i }}>
              <i /><small>{days[i]}</small>
            </div>
          ))}
        </div>
      </div>
      <div className="adm__panel adm__panel--side">
        <p><b>Revenue split</b></p>
        <div className="adm__donut"><span>$48.9k</span></div>
        <ul>
          {split.map((s) => <li key={s.l}><i style={{ background: s.c }} />{s.l}<b>{s.v}</b></li>)}
        </ul>
      </div>
    </div>
  );
}
