import { Heart, Home, MapPin, MessageCircle, User, Wallet } from "lucide-react";

const tiles = [
  { Icon: MapPin, label: "Explore" },
  { Icon: MessageCircle, label: "Chat" },
  { Icon: Wallet, label: "Wallet" },
  { Icon: Heart, label: "Saved" },
];

// Generic mobile-app screen for the hero.
export function SceneApp() {
  return (
    <div className="ph__screen">
      <span className="ph__notch" />
      <div className="app__top">
        <span className="app__avatar" />
        <span className="app__hi"><i /><i /></span>
        <span className="app__bell" />
      </div>
      <div className="app__hero">
        <small>WELCOME</small>
        <b>Your idea, as an app.</b>
        <span className="app__btn">Get started</span>
      </div>
      <div className="app__tiles">
        {tiles.map(({ Icon, label }, i) => (
          <div key={label} className="app__tile" style={{ ["--i" as string]: i }}>
            <span><Icon size="1.9em" /></span>
            <b>{label}</b>
          </div>
        ))}
      </div>
      <div className="app__tabs">
        <Home size="1.7em" className="is-on" /><MessageCircle size="1.7em" /><Wallet size="1.7em" /><User size="1.7em" />
      </div>
    </div>
  );
}
