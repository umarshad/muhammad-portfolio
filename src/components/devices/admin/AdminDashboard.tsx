import { useState } from "react";
import { useInterval } from "@/hooks/useInterval";

type Ev = { t: string; v: number; tone: string };
const events: Ev[] = [
  { t: "New order", v: 240, tone: "g" },
  { t: "User signed up", v: 0, tone: "o" },
  { t: "Subscription renewed", v: 79, tone: "g" },
  { t: "Support ticket opened", v: 0, tone: "b" },
  { t: "New order", v: 89, tone: "g" },
  { t: "Refund approved", v: -29, tone: "r" },
];
const seed = [18, 24, 20, 30, 27, 36, 32, 40, 35, 44, 39, 47];

const line = (pts: number[]) =>
  pts.map((p, i) => `${i ? "L" : "M"}${((i / (pts.length - 1)) * 200).toFixed(1)} ${(64 - p).toFixed(1)}`).join(" ");

// Overview: counters tick, the chart streams, new events slide into the feed.
export function AdminDashboard() {
  const [n, setN] = useState(0);
  const [rev, setRev] = useState(48210);
  const [users, setUsers] = useState(3420);
  const [orders, setOrders] = useState(642);
  const [pts, setPts] = useState(seed);
  const [feed, setFeed] = useState<{ id: number; e: Ev }[]>(() => [2, 1, 0].map((k) => ({ id: -k - 1, e: events[k] })));

  useInterval(() => {
    const e = events[n % events.length];
    setN((v) => v + 1);
    setFeed((f) => [{ id: n, e }, ...f].slice(0, 4));
    if (e.t === "New order") setOrders((o) => o + 1);
    if (e.t === "User signed up") setUsers((u) => u + 1);
    setRev((r) => r + e.v);
    setPts((p) => [...p.slice(1), Math.max(12, Math.min(52, p[p.length - 1] + ((n * 7) % 13) - 5))]);
  }, 1500);

  const kpis = [
    { label: "REVENUE", value: `$${rev.toLocaleString("en-US")}` },
    { label: "USERS", value: users.toLocaleString("en-US") },
    { label: "ORDERS", value: orders.toLocaleString("en-US") },
  ];

  return (
    <div className="adm adm--dash">
      <div className="bw__left">
        <div className="bw__kpis">
          {kpis.map((k) => (
            <div key={k.label}>
              <small>{k.label}</small>
              <b key={k.value} className="tick">{k.value}</b>
            </div>
          ))}
        </div>
        <div className="bw__chart">
          <svg viewBox="0 0 200 64" preserveAspectRatio="none">
            <defs>
              <linearGradient id="hg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#f67f00" stopOpacity=".4" />
                <stop offset="1" stopColor="#f67f00" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path className="bw__area" d={`${line(pts)} V64 H0Z`} fill="url(#hg)" />
            <path className="bw__curve" d={line(pts)} fill="none" stroke="#ff9a2e" strokeWidth="1.6" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>
      </div>
      <div className="bw__feed">
        <small>RECENT ACTIVITY</small>
        {feed.map(({ id, e }) => (
          <div key={id} className="bw__ev">
            <i className={`is-${e.tone}`} />
            <span>{e.t}</span>
            {e.v !== 0 && <b>{e.v > 0 ? `+$${e.v}` : `-$${-e.v}`}</b>}
          </div>
        ))}
      </div>
    </div>
  );
}
