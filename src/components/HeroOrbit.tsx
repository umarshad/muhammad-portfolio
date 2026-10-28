import { Cloud, CreditCard, Database, Globe, Smartphone, Sparkles, Code2, Zap, Bell } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { usePointerTilt } from "@/hooks/usePointerTilt";
import { HeroSkillCard } from "./HeroSkillCard";

type Node = { Icon: LucideIcon; a: number; hot?: boolean; label: string };

const inner: Node[] = [
  { Icon: Smartphone, a: 0, hot: true, label: "Flutter" },
  { Icon: Database, a: 120, label: "Firebase" },
  { Icon: Globe, a: 240, label: "React" },
];
const outer: Node[] = [
  { Icon: CreditCard, a: 20, label: "Stripe" },
  { Icon: Sparkles, a: 92, label: "AI" },
  { Icon: Cloud, a: 164, label: "AWS" },
  { Icon: Code2, a: 236, label: "TypeScript" },
  { Icon: Bell, a: 308, label: "Push notifications" },
];

function Ring({ nodes, className }: { nodes: Node[]; className: string }) {
  return (
    <div className={`orbit-ring ${className}`}>
      {nodes.map(({ Icon, a, hot, label }, k) => (
        <div key={label} className="orbit__node" style={{ ["--a" as string]: `${a}deg` }}>
          <div className="orbit__counter">
            <span
              className={`orbit__icon${hot ? " orbit__icon--hot" : ""}`}
              title={label}
              style={{ ["--a" as string]: `${a}deg`, ["--fd" as string]: `${k * 0.6}s` }}
            >
              <Icon size={18} />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function HeroOrbit() {
  const tilt = usePointerTilt<HTMLDivElement>();
  return (
    <div className="horbit hero__visual" style={{ ["--d" as string]: "0.35s" }}>
      <div className="horbit__tilt" ref={tilt}>
        <div className="horbit__field">
          <Ring nodes={outer} className="orbit-ring--2" />
          <Ring nodes={inner} className="orbit-ring--1" />
          <div className="phone">
            <img
              src="/MyInvoice/Screenshot_20250923_001107_com.my_invoice.app.jpg"
              alt="My Invoice mobile app screen, built with Flutter"
              width={1080}
              height={2340}
              decoding="async"
            />
          </div>
          <span className="orbit__icon orbit__icon--hot" style={{ position: "absolute", right: "6%", top: "10%", margin: 0, ["--a" as string]: "0deg" }} aria-hidden="true">
            <Zap size={18} />
          </span>
        </div>
        <HeroSkillCard />
      </div>
    </div>
  );
}
