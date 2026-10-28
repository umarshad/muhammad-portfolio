import { useEffect, useState } from "react";
import type { RegionKey } from "@/data/regions";

type City = { key: RegionKey; name: string; tz: string };

const HOME_TZ = "Asia/Karachi";
const cities: City[] = [
  { key: "uk", name: "London", tz: "Europe/London" },
  { key: "eu", name: "Berlin", tz: "Europe/Berlin" },
  { key: "usa", name: "New York", tz: "America/New_York" },
  { key: "usa", name: "Los Angeles", tz: "America/Los_Angeles" },
];

// Offset of a zone from UTC in hours at the given moment, daylight saving included.
function offsetHours(tz: string, at: Date) {
  const p = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", { timeZone: tz, hourCycle: "h23", year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric" })
      .formatToParts(at)
      .map((x) => [x.type, Number(x.value)]),
  );
  return (Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute) - Math.floor(at.getTime() / 60000) * 60000) / 3600000;
}

const clock = (tz: string, at: Date) => new Intl.DateTimeFormat("en-GB", { timeZone: tz, hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).format(at);
const hh = (n: number) => `${String(((Math.round(n) % 24) + 24) % 24).padStart(2, "0")}:00`;

// A 24-hour strip in Lahore time. Returns the part of a window [start, start+len) that falls on each side of midnight.
function segments(start: number, len: number) {
  const s = ((start % 24) + 24) % 24;
  const first = Math.min(len, 24 - s);
  const out = [{ left: s, width: first }];
  if (len > first) out.push({ left: 0, width: len - first });
  return out;
}

// Live clocks for the places clients are in, next to Lahore, with a suggested call window for each.
export function TimeBridge({ focus, compact }: { focus?: RegionKey; compact?: boolean }) {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(id);
  }, []);

  const shown = focus ? cities.filter((c) => c.key === focus) : cities;
  const home = now ? offsetHours(HOME_TZ, now) : 5;

  return (
    <div className={`tb${compact ? " tb--compact" : ""}`}>
      <div className="tb__home">
        <span className="tb__pin" aria-hidden="true" />
        <div>
          <small>Lahore, Pakistan</small>
          <b>{now ? clock(HOME_TZ, now) : "--:--"}</b>
        </div>
        <span className="tb__tag">UTC+5</span>
      </div>

      <ul className="tb__list">
        {shown.map((c) => {
          const off = now ? offsetHours(c.tz, now) : 0;
          const ahead = home - off; // hours Lahore is ahead of the city
          const callStart = 9 + ahead; // a 09:00 start in the city, expressed in Lahore time
          return (
            <li key={c.name} className="tb__city">
              <div className="tb__row">
                <div>
                  <small>{c.name}</small>
                  <b>{now ? clock(c.tz, now) : "--:--"}</b>
                </div>
                <span className="tb__diff">{now ? `${Math.abs(ahead)} h behind` : "behind Lahore"}</span>
              </div>
              <div className="tb__track" aria-hidden="true">
                {segments(9, 9).map((s, i) => <i key={`h${i}`} className="tb__seg tb__seg--home" style={{ left: `${(s.left / 24) * 100}%`, width: `${(s.width / 24) * 100}%` }} />)}
                {segments(callStart, 9).map((s, i) => <i key={`c${i}`} className="tb__seg tb__seg--city" style={{ left: `${(s.left / 24) * 100}%`, width: `${(s.width / 24) * 100}%` }} />)}
                {now && <i className="tb__now" style={{ left: `${((((new Date(now.getTime() + 5 * 3600000).getUTCHours()) * 60 + now.getUTCMinutes()) / 1440) * 100)}%` }} />}
              </div>
              <p className="tb__call">
                Your 09:00 to 12:00 is <b>{now ? `${hh(callStart)} to ${hh(callStart + 3)}` : "in the Lahore afternoon or evening"}</b> in Lahore.
              </p>
            </li>
          );
        })}
      </ul>
      <p className="tb__key" aria-hidden="true"><i className="tb__k tb__k--home" /> Lahore 09:00 to 18:00 <i className="tb__k tb__k--city" /> Their 09:00 to 18:00</p>
    </div>
  );
}
