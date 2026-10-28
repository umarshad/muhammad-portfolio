import { Check, Smartphone } from "lucide-react";

const steps = ["Build", "Sign", "Upload", "Review", "Live"];

// Store-release pipeline for the hero.
export function SceneRelease() {
  return (
    <div className="rel">
      <span className="rel__icon"><Smartphone size="4em" /></span>
      <b className="rel__title">Your app</b>
      <ul className="rel__steps">
        {steps.map((s, i) => (
          <li key={s} style={{ ["--i" as string]: i }} className={i === steps.length - 1 ? "is-live" : ""}>
            <i><Check size="1.4em" strokeWidth={3.2} /></i>{s}
          </li>
        ))}
      </ul>
      <div className="rel__stores">
        <span>App Store</span>
        <span>Google Play</span>
      </div>
    </div>
  );
}
