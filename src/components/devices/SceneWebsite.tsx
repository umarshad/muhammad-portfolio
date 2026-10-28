import { Gauge, Palette, Search } from "lucide-react";

const feats = [
  { Icon: Gauge, label: "Fast" },
  { Icon: Search, label: "Found" },
  { Icon: Palette, label: "Polished" },
];

// Generic marketing website for the hero, with an animated cursor.
export function SceneWebsite() {
  return (
    <div className="web">
      <div className="web__bar">
        <span className="web__dots"><i /><i /><i /></span>
        <span className="web__url">yourbrand.com</span>
      </div>
      <div className="web__page">
        <div className="web__nav">
          <span className="web__logo" />
          <span className="web__links"><i /><i /><i /><i /></span>
          <span className="web__cta">Contact</span>
        </div>
        <div className="web__hero">
          <div className="web__copy">
            <h4 className="web__h"><span>Your brand,</span><span className="serif">online.</span></h4>
            <div className="web__p"><i /><i /></div>
            <div className="web__btns">
              <span className="web__go">Get started</span>
              <span className="web__ghost">Learn more</span>
            </div>
          </div>
          <div className="web__art">
            <i className="web__orb" />
            <i className="web__orb web__orb--b" />
            <span className="web__chip">+ 42% traffic</span>
          </div>
        </div>
        <div className="web__feats">
          {feats.map(({ Icon, label }) => (
            <div key={label} className="web__feat"><span><Icon size="1.8em" /></span><b>{label}</b></div>
          ))}
        </div>
        <svg className="web__cursor" viewBox="0 0 24 24" fill="#171a18" stroke="#fff" strokeWidth="1.4">
          <path d="M5 3l14 7-6 2-2 6z" />
        </svg>
      </div>
    </div>
  );
}
