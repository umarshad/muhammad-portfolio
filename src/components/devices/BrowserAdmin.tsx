import { BarChart3, FileText, LayoutDashboard, Settings, Users } from "lucide-react";

const nav = [LayoutDashboard, Users, FileText, BarChart3, Settings];
const kpis = [
  { label: "REVENUE", value: "$48.2k", delta: "+12%" },
  { label: "USERS", value: "3,420", delta: "+8%" },
  { label: "SUBSCRIBERS", value: "1,186", delta: "+21%" },
];

// Decorative admin-panel mockup. Numbers are illustrative.
export function BrowserAdmin() {
  return (
    <div className="bw">
      <div className="bw__bar">
        <span className="bw__dots"><i /><i /><i /></span>
        <span className="bw__url">admin.yourproduct.com</span>
      </div>
      <div className="bw__body">
        <div className="bw__side">
          {nav.map((Icon, i) => (
            <span key={i} className={i === 0 ? "is-on" : ""}><Icon size="1.9em" strokeWidth={1.8} /></span>
          ))}
        </div>
        <div className="bw__main">
          <div className="bw__head">
            <b>Overview</b>
            <span>Last 30 days</span>
          </div>
          <div className="bw__kpis">
            {kpis.map((k, i) => (
              <div key={k.label} style={{ ["--i" as string]: i }}>
                <small>{k.label}</small>
                <b>{k.value}</b>
                <em>{k.delta}</em>
              </div>
            ))}
          </div>
          <div className="bw__chart">
            <svg viewBox="0 0 200 64" preserveAspectRatio="none">
              <defs>
                <linearGradient id="hg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#f67f00" stopOpacity=".38" />
                  <stop offset="1" stopColor="#f67f00" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path className="bw__area" d="M0 52 C18 48 30 22 54 28 S92 50 114 30 S158 6 200 12 V64 H0Z" fill="url(#hg)" />
              <path className="bw__line" d="M0 52 C18 48 30 22 54 28 S92 50 114 30 S158 6 200 12" fill="none" stroke="#ff9a2e" strokeWidth="1.6" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>
          <div className="bw__rows">
            {[78, 62, 70].map((w, i) => (
              <div key={i} style={{ ["--i" as string]: i }}>
                <i />
                <span style={{ width: `${w}%` }} />
                <em className={i === 1 ? "is-pending" : ""} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
