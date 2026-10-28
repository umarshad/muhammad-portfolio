import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import type { RegionKey } from "@/data/regions";
import { AnalogClock } from "./AnalogClock";

type City = { key: RegionKey; name: string; tz: string };

const HOME_TZ = "Asia/Karachi";
const cities: City[] = [
  { key: "uk", name: "London", tz: "Europe/London" },
  { key: "eu", name: "Berlin", tz: "Europe/Berlin" },
  { key: "usa", name: "New York", tz: "America/New_York" },
  { key: "usa", name: "Los Angeles", tz: "America/Los_Angeles" },
  { key: "uae", name: "Dubai", tz: "Asia/Dubai" },
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

// Hour, minute and second on the wall clock in a zone.
function hms(tz: string, at: Date) {
  const p = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", { timeZone: tz, hourCycle: "h23", hour: "numeric", minute: "numeric", second: "numeric" })
      .formatToParts(at)
      .map((x) => [x.type, Number(x.value)]),
  );
  return { h: p.hour % 24, m: p.minute, s: p.second };
}
const isNight = (h: number) => h < 6 || h >= 19;

const clock = (tz: string, at: Date) => new Intl.DateTimeFormat("en-GB", { timeZone: tz, hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).format(at);
const hh = (n: number) => `${String(((Math.round(n) % 24) + 24) % 24).padStart(2, "0")}:00`;

// One block per hour of the Lahore workday (09 to 18). A block is lit when the other city is also in office hours.
function Overlap({ city, ahead, lahoreHour, ready }: { city: string; ahead: number; lahoreHour: number | null; ready: boolean }) {
  const hours = Array.from({ length: 9 }, (_, i) => 9 + i);
  const cityHour = (h: number) => (((h - ahead) % 24) + 24) % 24;
  const lit = hours.map((h) => ready && cityHour(h) >= 9 && cityHour(h) < 18);
  const first = lit.indexOf(true);
  const count = lit.filter(Boolean).length;
  const last = first >= 0 ? first + count - 1 : -1;
  const from = 9 + first;
  const to = 9 + last + 1;
  return (
    <div className="tb__over">
      <p className="tb__line">
        {!ready ? (
          <span>Shared working hours are worked out from the current time.</span>
        ) : count > 0 ? (
          <>
            <b>{count} {count === 1 ? "hour" : "hours"} shared</b>
            <span>{hh(from)} to {hh(to)} in Lahore, which is {hh(cityHour(from))} to {hh(cityHour(from) + (to - from))} in {city}.</span>
          </>
        ) : (
          <>
            <b>Evening calls</b>
            <span>No shared office hours. Your 09:00 to 12:00 is {hh(9 + ahead)} to {hh(12 + ahead)} in Lahore.</span>
          </>
        )}
      </p>
      <div className="tb__hours" aria-hidden="true">
        {hours.map((h, i) => (
          <i key={h} className={`tb__hr${lit[i] ? " is-on" : ""}${lahoreHour !== null && lahoreHour >= h && lahoreHour < h + 1 ? " is-now" : ""}`} />
        ))}
      </div>
      <div className="tb__labs" aria-hidden="true"><span>09</span><span>12</span><span>15</span><span>18</span></div>
    </div>
  );
}

// Live clocks for the places clients are in, next to Lahore, with a suggested call window for each.
export function TimeBridge({ focus, compact }: { focus?: RegionKey; compact?: boolean }) {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const shown = focus ? cities.filter((c) => c.key === focus) : cities;
  const home = now ? offsetHours(HOME_TZ, now) : 5;

  return (
    <div className={`tb${compact ? " tb--compact" : ""}`}>
      <div className="tb__home">
        <AnalogClock {...(now ? hms(HOME_TZ, now) : { h: 12, m: 0, s: 0 })} night={now ? isNight(hms(HOME_TZ, now).h) : false} size={64} label={now ? `Lahore time ${clock(HOME_TZ, now)}` : "Lahore time"} />
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
          return (
            <li key={c.name} className="tb__city">
              <div className="tb__row">
                <AnalogClock {...(now ? hms(c.tz, now) : { h: 12, m: 0, s: 0 })} night={now ? isNight(hms(c.tz, now).h) : false} size={60} label={now ? `${c.name} time ${clock(c.tz, now)}` : `${c.name} time`} />
                <div className="tb__who">
                  <small>{c.name}{now && (isNight(hms(c.tz, now).h) ? <Moon size={12} aria-label="night" /> : <Sun size={12} aria-label="day" />)}</small>
                  <b>{now ? clock(c.tz, now) : "--:--"}</b>
                  <span className="tb__diff">{now ? `${Math.abs(ahead)} h behind Lahore` : "behind Lahore"}</span>
                </div>
              </div>
              <Overlap city={c.name} ahead={ahead} lahoreHour={now ? hms(HOME_TZ, now).h + hms(HOME_TZ, now).m / 60 : null} ready={!!now} />
            </li>
          );
        })}
      </ul>
      <p className="tb__key">Lit blocks are the hours of the Lahore workday (09:00 to 18:00) when the other city is also at work (09:00 to 18:00).</p>
    </div>
  );
}
