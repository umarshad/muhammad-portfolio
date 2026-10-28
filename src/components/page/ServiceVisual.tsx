import { CreditCard, Globe, Layers, LayoutDashboard, Rocket, Smartphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { usePointerTilt } from "@/hooks/usePointerTilt";
import { BrowserAdmin } from "../devices/BrowserAdmin";
import { PhonePaywall } from "../devices/PhonePaywall";
import { SceneApp } from "../devices/SceneApp";
import { SceneHub } from "../devices/SceneHub";
import { SceneRelease } from "../devices/SceneRelease";

type Scene = { shape: string; View: () => JSX.Element; icons: LucideIcon[] };

const scenes: Record<string, Scene> = {
  "flutter-app-development": { shape: "app", View: SceneApp, icons: [Globe, LayoutDashboard, CreditCard, Rocket] },
  "saas-app-development": { shape: "hub", View: SceneHub, icons: [Smartphone, Globe, CreditCard, Rocket] },
  "in-app-purchases-and-payments": { shape: "app", View: PhonePaywall, icons: [Smartphone, LayoutDashboard, Layers, Rocket] },
  "web-app-and-admin-panel-development": { shape: "web", View: BrowserAdmin, icons: [Smartphone, CreditCard, Layers, Rocket] },
  "app-store-and-google-play-deployment": { shape: "store", View: SceneRelease, icons: [Smartphone, Globe, CreditCard, LayoutDashboard] },
};

// The same live device scenes as the home page hero, picked to match the service on the page.
export function ServiceVisual({ slug }: { slug: string }) {
  const tilt = usePointerTilt<HTMLDivElement>(5);
  const s = scenes[slug];
  if (!s) return null;
  const { shape, View, icons } = s;
  return (
    <div className="horbit lp-visual" aria-hidden="true">
      <div className="horbit__tilt" ref={tilt}>
        <div className="hstage">
          <div className="hscene">
            <div className="orbit-ring orbit-ring--2">
              {icons.map((Icon, i) => (
                <div key={i} className="orbit__node" style={{ ["--a" as string]: `${i * 90 + 30}deg` }}>
                  <div className="orbit__counter">
                    <span className="orbit__icon" style={{ ["--a" as string]: `${i * 90 + 30}deg`, ["--fd" as string]: `${i * 0.6}s` }}>
                      <Icon size={18} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="morph" data-shape={shape}>
              <div className={`sc sc--${shape} is-on`}>
                <View />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
