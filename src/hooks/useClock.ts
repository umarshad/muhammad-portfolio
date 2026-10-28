import { useEffect, useState } from "react";

const LAHORE_OFFSET_MIN = 5 * 60; // PKT, UTC+5, no daylight saving

// Lahore local time plus how far ahead of or behind the visitor it is. Empty until mounted
// so the prerendered HTML and the first client render match.
export function useLahoreClock() {
  const [state, setState] = useState({ time: "", diff: "" });
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const time = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Asia/Karachi" }).format(now);
      const visitorMin = -now.getTimezoneOffset();
      const h = (LAHORE_OFFSET_MIN - visitorMin) / 60;
      const n = Math.abs(h);
      const fmt = Number.isInteger(n) ? String(n) : n.toFixed(1);
      setState({ time, diff: h === 0 ? "Same time as you" : `${fmt}h ${h > 0 ? "ahead of" : "behind"} you` });
    };
    tick();
    const id = setInterval(tick, 20000);
    return () => clearInterval(id);
  }, []);
  return state;
}
