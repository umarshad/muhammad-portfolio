import { Check, Sparkles } from "lucide-react";

const perks = ["Unlimited access", "Secure payments", "Priority support"];

// Decorative in-app-purchase paywall screen. Prices are illustrative.
export function PhonePaywall() {
  return (
    <div className="ph__screen pw">
      <span className="ph__notch" />
      <span className="pw__badge"><Sparkles size="1.8em" /></span>
      <b className="pw__title">Go Pro</b>
      <ul className="pw__perks">
        {perks.map((p) => (
          <li key={p}><Check size="1.4em" strokeWidth={3} />{p}</li>
        ))}
      </ul>
      <div className="pw__plans">
        <div className="pw__plan pw__plan--a"><small>Monthly</small><b>$9</b></div>
        <div className="pw__plan pw__plan--b"><em>Best value</em><small>Yearly</small><b>$79</b></div>
      </div>
      <span className="pw__cta">Continue</span>
      <small className="pw__foot">Billed via App Store or Google Play</small>
    </div>
  );
}
