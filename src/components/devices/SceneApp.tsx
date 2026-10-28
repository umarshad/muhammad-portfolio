import { useState } from "react";
import { MessageCircle, Phone, Search, Share2, Truck } from "lucide-react";
import { useInterval } from "@/hooks/useInterval";

const ROUTE = "M22 128 L22 100 L48 100 L48 66 L74 66 L74 36";
const etas = ["8 min", "7 min", "6 min", "5 min", "4 min", "3 min"];

// Live delivery-tracking app: route draws, courier moves, ETA counts down.
export function SceneApp() {
  const [i, setI] = useState(0);
  useInterval(() => setI((v) => (v + 1) % etas.length), 1000);

  return (
    <div className="ph__screen map">
      <span className="ph__notch" />
      <svg className="map__bg" viewBox="0 0 100 160" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <rect width="100" height="160" fill="#eef2ec" />
        <rect x="26" y="70" width="19" height="27" rx="2" fill="#d8ebd8" />
        <rect x="52" y="104" width="19" height="22" rx="2" fill="#d8ebd8" />
        <path d="M0 52 C20 44 34 60 56 48 S88 38 100 44" fill="none" stroke="#cfe4ea" strokeWidth="9" />
        {[22, 48, 74].map((x) => <path key={x} d={`M${x} 0 V160`} stroke="#fff" strokeWidth="5" />)}
        {[36, 66, 100, 128].map((y) => <path key={y} d={`M0 ${y} H100`} stroke="#fff" strokeWidth="5" />)}
        <path d={ROUTE} fill="none" stroke="#f6bf80" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        <path className="map__route" d={ROUTE} fill="none" stroke="#f67f00" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        <g className="map__pin">
          <circle className="map__ping" cx="74" cy="36" r="4" fill="#f67f00" />
          <circle cx="74" cy="36" r="3.4" fill="#f67f00" />
          <circle cx="74" cy="36" r="1.2" fill="#fff" />
        </g>
        <g>
          <circle r="5.5" fill="#004543" opacity="0.18">
            <animateMotion dur="6s" repeatCount="indefinite" path={ROUTE} />
          </circle>
          <circle r="3" fill="#004543" stroke="#fff" strokeWidth="1">
            <animateMotion dur="6s" repeatCount="indefinite" path={ROUTE} />
          </circle>
        </g>
      </svg>

      <div className="map__search">
        <Search size="1.5em" />
        <span>Track your delivery</span>
        <i className="map__avatar" />
      </div>

      <div className="map__sheet">
        <span className="map__handle" />
        <div className="map__row">
          <span className="map__courier"><Truck size="2.2em" /></span>
          <span className="map__who"><b>Alex is on the way</b><small>Order #2481 · 3 items</small></span>
          <span className="map__eta"><b key={i}>{etas[i]}</b><small>ETA</small></span>
        </div>
        <div className="map__prog"><i /></div>
        <div className="map__acts">
          <span><Phone size="1.9em" /></span>
          <span><MessageCircle size="1.9em" /></span>
          <span><Share2 size="1.9em" /></span>
        </div>
      </div>
    </div>
  );
}
