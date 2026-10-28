import { Database, Globe, LayoutDashboard, Smartphone } from "lucide-react";

const nodes = [
  { Icon: Smartphone, label: "Mobile app", x: 13, y: 15, from: "M13 15 L31 30", begin: "0s" },
  { Icon: Globe, label: "Web portal", x: 49, y: 15, from: "M49 15 L31 30", begin: "0.8s" },
  { Icon: LayoutDashboard, label: "Admin panel", x: 31, y: 49, from: "M31 49 L31 30", begin: "1.6s" },
];

// One shared backend feeding every platform.
export function SceneHub() {
  return (
    <div className="hub">
      <p className="hub__tag">ONE BACKEND · EVERY PLATFORM</p>
      <svg className="hub__lines" viewBox="0 0 62 56">
        {nodes.map((n) => (
          <g key={n.label}>
            <path d={n.from} />
            <circle r="0.9" fill="#ff9a2e">
              <animateMotion dur="2.4s" begin={n.begin} repeatCount="indefinite" path={n.from} />
            </circle>
          </g>
        ))}
      </svg>
      {nodes.map(({ Icon, label, x, y }) => (
        <div key={label} className="hub__node" style={{ left: `${x}em`, top: `${y}em` }}>
          <span><Icon size="2.4em" /></span>
          <small>{label}</small>
        </div>
      ))}
      <div className="hub__node hub__node--core" style={{ left: "31em", top: "30em" }}>
        <span><Database size="3em" /></span>
        <small>Shared backend</small>
      </div>
    </div>
  );
}
