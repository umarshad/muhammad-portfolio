import { Plus, Search } from "lucide-react";

const people = [
  { n: "Ava Morgan", p: "Pro", a: "2 min ago", c: "#f67f00" },
  { n: "Liam Carter", p: "Free", a: "1 hr ago", c: "#3178c6" },
  { n: "Noah Bennett", p: "Pro", a: "Today", c: "#3fcf8e" },
  { n: "Mia Foster", p: "Team", a: "Yesterday", c: "#8e75b2" },
  { n: "Ethan Brooks", p: "Free", a: "3 days ago", c: "#ea4b71" },
  { n: "Zoe Hayes", p: "Pro", a: "5 min ago", c: "#0b5a55" },
];

// Customers: searchable people grid with plan badges.
export function AdminCustomers() {
  return (
    <div className="adm adm--people">
      <div className="adm__tools">
        <span className="adm__search adm__search--wide"><Search size="1.5em" /> Search customers</span>
        <span className="adm__btn"><Plus size="1.5em" strokeWidth={3} /> Invite</span>
      </div>
      <div className="adm__cards">
        {people.map((p, i) => (
          <div key={p.n} className={`adm__person${i === 0 ? " is-hot" : ""}`} style={{ ["--i" as string]: i, ["--c" as string]: p.c }}>
            <span className="adm__avatar">{p.n.split(" ").map((w) => w[0]).join("")}</span>
            <b>{p.n}</b>
            <small>Active {p.a}</small>
            <i className={`plan plan--${p.p.toLowerCase()}`}>{p.p}</i>
          </div>
        ))}
      </div>
    </div>
  );
}
