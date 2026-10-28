import { Database, Globe, LayoutDashboard, Plus, Smartphone } from "lucide-react";
import { usePhases } from "@/hooks/usePhases";

// idle, tap on phone, packet to backend, backend fans out to web and admin
const STEPS = [900, 1000, 1000, 1700] as const;

// One backend keeping every platform in sync: an item added on the phone shows up everywhere.
export function SceneHub() {
  const step = usePhases(STEPS);
  return (
    <div className={`hub s${step}`}>
      <p className="hub__tag">ONE BACKEND · EVERY PLATFORM</p>
      <svg className="hub__lines" viewBox="0 0 62 56" aria-hidden="true">
        <path d="M11 20 L31 30" /><path d="M51 17 L31 30" /><path d="M31 47 L31 30" />
      </svg>

      <div className="hub__dev hub__phone">
        <small><Smartphone size="1.6em" /> Mobile</small>
        <div className="hub__list">
          <i /><i />
          <i className="hub__new" />
        </div>
        <span className="hub__add"><Plus size="1.6em" strokeWidth={3} /></span>
      </div>

      <div className="hub__dev hub__web">
        <small><Globe size="1.6em" /> Web portal</small>
        <div className="hub__list">
          <i /><i />
          <i className="hub__new" />
        </div>
      </div>

      <div className="hub__dev hub__admin">
        <small><LayoutDashboard size="1.6em" /> Admin</small>
        <b>Items <em key={step >= 3 ? "b" : "a"}>{step >= 3 ? 129 : 128}</em></b>
      </div>

      <div className="hub__core">
        <span><Database size="3em" /></span>
        <small>Shared backend</small>
      </div>

      <i className="pk pk--a" />
      <i className="pk pk--b" />
      <i className="pk pk--c" />
    </div>
  );
}
