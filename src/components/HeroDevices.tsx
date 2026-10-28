import { useCallback, useEffect, useRef, useState } from "react";
import { Code2, CreditCard, Database, Globe, Layers, LayoutDashboard, Rocket, Smartphone, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { usePointerTilt } from "@/hooks/usePointerTilt";
import { BrowserAdmin } from "./devices/BrowserAdmin";
import { PhonePaywall } from "./devices/PhonePaywall";
import { SceneApp } from "./devices/SceneApp";
import { SceneHub } from "./devices/SceneHub";
import { SceneRelease } from "./devices/SceneRelease";
import { SceneWebsite } from "./devices/SceneWebsite";

type Scene = { key: string; shape: string; label: string; caption: string; Icon: LucideIcon; View: () => JSX.Element };

const scenes: Scene[] = [
  { key: "app", shape: "app", label: "Mobile app", Icon: Smartphone, View: SceneApp, caption: "Flutter apps for iOS and Android, from first screen to store release." },
  { key: "web", shape: "web", label: "Website", Icon: Globe, View: SceneWebsite, caption: "Fast, responsive websites and web apps that search engines can find." },
  { key: "admin", shape: "web", label: "Admin panel", Icon: LayoutDashboard, View: BrowserAdmin, caption: "Role-based dashboards to run users, payments, content and analytics." },
  { key: "saas", shape: "hub", label: "SaaS product", Icon: Layers, View: SceneHub, caption: "Mobile, web and admin on one shared backend, ready for subscriptions." },
  { key: "iap", shape: "app", label: "In-app purchases", Icon: CreditCard, View: PhonePaywall, caption: "App Store and Google Play subscriptions with Stripe and PayPal payments." },
  { key: "store", shape: "store", label: "Store release", Icon: Rocket, View: SceneRelease, caption: "Build, sign, upload and publish to App Store and Google Play." },
];

// Small satellites on the inner ring; they hide behind the centre device when it grows.
const inner = [
  { Icon: Database, a: 20, label: "Firebase" },
  { Icon: Code2, a: 140, label: "TypeScript" },
  { Icon: Sparkles, a: 260, label: "AI" },
];

const AUTOPLAY_MS = 5200;
const IDLE_RESUME_MS = 12000; // after a manual pick, give the visitor time before moving on

export function HeroDevices() {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [hover, setHover] = useState(false);
  const [delay, setDelay] = useState(AUTOPLAY_MS);
  const clearPrev = useRef<ReturnType<typeof setTimeout>>();
  const tabsRef = useRef<HTMLDivElement>(null);
  const tilt = usePointerTilt<HTMLDivElement>(5);

  const select = useCallback(
    (i: number) => {
      if (i === active) return;
      setPrev(active);
      setActive(i);
      clearTimeout(clearPrev.current);
      clearPrev.current = setTimeout(() => setPrev(null), 800);
    },
    [active],
  );

  // Autoplay: restarts on every change, pauses while a mouse hovers, off for reduced motion.
  // A manual pick only delays the next move; it never switches autoplay off for good.
  useEffect(() => {
    if (hover) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => {
      setDelay(AUTOPLAY_MS);
      select((active + 1) % scenes.length);
    }, delay);
    return () => clearTimeout(id);
  }, [active, delay, hover, select]);

  useEffect(() => () => clearTimeout(clearPrev.current), []);

  // On narrow screens the tab row scrolls; keep the active tab visible without moving the page.
  useEffect(() => {
    const row = tabsRef.current;
    const tab = row?.children[active] as HTMLElement | undefined;
    if (row && tab && row.scrollWidth > row.clientWidth) row.scrollTo({ left: tab.offsetLeft - 16, behavior: "smooth" });
  }, [active]);

  const pick = (i: number) => {
    setDelay(IDLE_RESUME_MS);
    select(i);
  };
  const current = scenes[active];

  return (
    <div
      className="horbit hero__visual"
      style={{ ["--d" as string]: "0.35s" }}
      onPointerEnter={(e) => e.pointerType === "mouse" && setHover(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setHover(false)}
    >
      <div className="horbit__tilt" ref={tilt}>
        <div className="hstage">
          <div className="hscene">
            <div className="orbit-ring orbit-ring--2">
              {scenes.map(({ key, Icon, label }, i) => (
                <div key={key} className="orbit__node" style={{ ["--a" as string]: `${i * 60 + 15}deg` }}>
                  <div className="orbit__counter">
                    <button
                      type="button"
                      tabIndex={-1}
                      aria-hidden="true"
                      title={label}
                      className={`orbit__icon orbit__btn${i === active ? " is-active" : ""}`}
                      style={{ ["--a" as string]: `${i * 60 + 15}deg`, ["--fd" as string]: `${i * 0.5}s` }}
                      onClick={() => pick(i)}
                    >
                      <Icon size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="orbit-ring orbit-ring--1">
              {inner.map(({ Icon, a, label }, k) => (
                <div key={label} className="orbit__node" style={{ ["--a" as string]: `${a}deg` }}>
                  <div className="orbit__counter">
                    <span className="orbit__icon" title={label} style={{ ["--a" as string]: `${a}deg`, ["--fd" as string]: `${k * 0.7}s` }}>
                      <Icon size={16} />
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="morph" data-shape={current.shape} aria-hidden="true">
              {scenes.map(({ key, shape, View }, i) =>
                i === active || i === prev ? (
                  <div key={key} className={`sc sc--${shape}${i === active ? " is-on" : " is-off"}`}>
                    <View />
                  </div>
                ) : null,
              )}
            </div>
          </div>
        </div>
      </div>

      <div ref={tabsRef} className={`htabs${hover ? " is-paused" : ""}`} role="tablist" aria-label="What I can build">
        {scenes.map(({ key, label, Icon }, i) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={i === active}
            className="htab"
            style={{ ["--dur" as string]: `${delay}ms` }}
            onClick={() => pick(i)}
          >
            <Icon size={15} /> {label}
          </button>
        ))}
      </div>
      <p className="hcap" key={current.key} aria-live="polite">{current.caption}</p>
    </div>
  );
}
