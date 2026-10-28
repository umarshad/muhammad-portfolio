import { Check } from "lucide-react";

const toggles = [
  { l: "Email alerts", on: true },
  { l: "Two-factor sign-in", on: true },
  { l: "Weekly reports", on: false, turnsOn: true },
  { l: "Public API access", on: false },
];
const perms = ["View", "Edit", "Billing"];
const roles = [
  { r: "Admin", p: [1, 1, 1] },
  { r: "Editor", p: [1, 1, 0] },
  { r: "Viewer", p: [1, 0, 0] },
];

// Settings: preference toggles (one flips on by itself) and a roles and permissions grid.
export function AdminSettings() {
  return (
    <div className="adm adm--settings">
      <div className="adm__panel">
        <p><b>Preferences</b></p>
        <ul className="adm__toggles">
          {toggles.map((t, i) => (
            <li key={t.l} style={{ ["--i" as string]: i }}>
              <span>{t.l}</span>
              <i className={`tg${t.on ? " is-on" : ""}${t.turnsOn ? " tg--auto" : ""}`}><b /></i>
            </li>
          ))}
        </ul>
      </div>
      <div className="adm__panel">
        <p><b>Roles and permissions</b></p>
        <div className="adm__perm">
          <div className="adm__perm-h"><span />{perms.map((x) => <span key={x}>{x}</span>)}</div>
          {roles.map((row, i) => (
            <div key={row.r} className="adm__perm-r" style={{ ["--i" as string]: i }}>
              <span>{row.r}</span>
              {row.p.map((v, k) => (
                <span key={k}>{v ? <i className="ok"><Check size="1.3em" strokeWidth={3.4} /></i> : <i className="no" />}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
