import { Check, Download, Smartphone, Star } from "lucide-react";
import { usePhases } from "@/hooks/usePhases";

const PHASES = [4600, 4600] as const; // pipeline, live store listing
const steps = ["Build app", "Sign & package", "Upload to stores", "Store review"];

// Release story: the pipeline runs, then the app goes live and installs from the store.
export function SceneRelease() {
  const phase = usePhases(PHASES);
  return (
    <div className="rel">
      {phase === 0 ? (
        <div className="rel__pipe" key="pipe">
          <div className="rel__head">
            <span className="rel__icon"><Smartphone size="3.4em" /></span>
            <span><b>Release v1.0.0</b><small>Preparing for the stores</small></span>
          </div>
          <ul className="rel__steps">
            {steps.map((s, i) => (
              <li key={s} style={{ ["--i" as string]: i }}>
                <i className="rel__spin" /><i className="rel__ok"><Check size="1.4em" strokeWidth={3.4} /></i>
                {s}
              </li>
            ))}
          </ul>
          <div className="rel__bar"><i /></div>
          <div className="rel__log">
            <span>$ flutter build appbundle</span>
            <span>$ signing release…</span>
            <span>$ uploading 24.1 MB…</span>
          </div>
        </div>
      ) : (
        <div className="rel__live" key="live">
          <span className="rel__live-tag"><i />LIVE</span>
          <span className="rel__icon rel__icon--lg"><Smartphone size="5em" /></span>
          <b>Your App</b>
          <small>Now available on the stores</small>
          <div className="rel__stars">
            {[0, 1, 2, 3, 4].map((s) => <Star key={s} size="2em" fill="currentColor" style={{ ["--i" as string]: s }} />)}
            <em>4.9</em>
          </div>
          <span className="rel__get"><i /><b className="g1">GET</b><b className="g2"><Download size="1.6em" /></b><b className="g3">OPEN</b></span>
          <div className="rel__stores"><span>App Store</span><span>Google Play</span></div>
        </div>
      )}
    </div>
  );
}
