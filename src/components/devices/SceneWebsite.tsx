import { Gauge, Lock, Rocket, Star } from "lucide-react";

const feats = [
  { Icon: Gauge, label: "Fast" },
  { Icon: Lock, label: "Secure" },
  { Icon: Rocket, label: "Scalable" },
];

// A marketing site that scrolls itself: hero, features, reviews, call to action.
export function SceneWebsite() {
  return (
    <div className="web">
      <div className="web__bar">
        <span className="web__dots"><i /><i /><i /></span>
        <span className="web__url">yourbrand.com</span>
      </div>
      <div className="web__view">
        <div className="web__nav">
          <span className="web__logo" />
          <span className="web__links"><i /><i /><i /></span>
          <span className="web__cta">Contact</span>
        </div>
        <div className="web__scroll">
          <section className="web__sec web__sec--hero">
            <div className="web__copy">
              <h4 className="web__h"><span>Your brand,</span><span className="serif">online.</span></h4>
              <div className="web__p"><i /><i /></div>
              <div className="web__btns"><span className="web__go">Get started</span><span className="web__ghost">Learn more</span></div>
            </div>
            <div className="web__art">
              <i className="web__orb" /><i className="web__orb web__orb--b" />
              <span className="web__chip">+ 42% traffic</span>
            </div>
          </section>

          <section className="web__sec web__sec--feats">
            <h5>Everything you need</h5>
            <div className="web__cards">
              {feats.map(({ Icon, label }, i) => (
                <div key={label} className="web__card" style={{ ["--i" as string]: i }}>
                  <span><Icon size="2.2em" /></span>
                  <b>{label}</b>
                  <i /><i />
                </div>
              ))}
            </div>
          </section>

          <section className="web__sec web__sec--quote">
            <div className="web__stars">{[0, 1, 2, 3, 4].map((s) => <Star key={s} size="2.4em" fill="currentColor" />)}</div>
            <div className="web__q"><i /><i /><i /></div>
            <div className="web__who"><span /><i /></div>
          </section>

          <section className="web__sec web__sec--cta">
            <h5>Ready to start?</h5>
            <div className="web__form"><span>you@email.com</span><b>Send</b></div>
          </section>
        </div>
        <span className="web__track"><i /></span>
      </div>
    </div>
  );
}
