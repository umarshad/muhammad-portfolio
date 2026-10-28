import { Check, Crown, MessageCircle, ScanFace, Zap } from "lucide-react";
import { usePhases } from "@/hooks/usePhases";

const PHASES = [4200, 2400, 2800] as const; // plans, confirm sheet, success
const perks = [
  { Icon: Zap, text: "Unlimited access" },
  { Icon: MessageCircle, text: "Priority support" },
  { Icon: Crown, text: "Pro features" },
];

// A full in-app subscription: pick a plan, confirm with Face ID, see it succeed.
export function PhonePaywall() {
  const phase = usePhases(PHASES);
  return (
    <div className="ph__screen pw">
      <span className="ph__notch" />
      <div className="pw__hero">
        <span className="pw__glow" />
        <span className="pw__badge"><Crown size="2.4em" /></span>
        <b className="pw__title">Go Pro</b>
        <small>Everything unlocked, cancel anytime</small>
      </div>

      <ul className="pw__perks" key={phase === 0 ? "p" : "p0"}>
        {perks.map(({ Icon, text }, i) => (
          <li key={text} style={{ ["--i" as string]: i }}>
            <span><Icon size="1.7em" /></span>{text}<Check size="1.6em" strokeWidth={3} />
          </li>
        ))}
      </ul>

      <div className="pw__sp" key={phase === 0 ? "s" : "s0"}>
        <div className="pw__switch"><i /><span>Monthly</span><span>Yearly</span></div>
        <div className="pw__price">
          <span className="pw__p1"><b>$9</b>/month</span>
          <span className="pw__p2"><b>$79</b>/year <em>Save 27%</em></span>
        </div>
      </div>
      <span className="pw__cta">Subscribe</span>
      <small className="pw__foot">Billed via App Store or Google Play</small>

      <div className={`pw__dim${phase === 1 ? " is-on" : ""}`} />
      <div className={`pw__sheet${phase === 1 ? " is-on" : ""}`}>
        <span className="pw__grab" />
        <b>Confirm subscription</b>
        <small>Pro · Yearly · $79.00</small>
        <span className="pw__face"><ScanFace size="3.4em" strokeWidth={1.6} /><i /></span>
        <small>Confirm with Face ID</small>
      </div>

      <div className={`pw__done${phase === 2 ? " is-on" : ""}`}>
        <span className="pw__tick"><Check size="4.4em" strokeWidth={3.4} /></span>
        <b>You&apos;re Pro!</b>
        <small>Receipt sent to your email</small>
        <span className="pw__burst">{Array.from({ length: 10 }, (_, i) => <i key={i} style={{ ["--a" as string]: `${i * 36}deg` }} />)}</span>
      </div>
    </div>
  );
}
