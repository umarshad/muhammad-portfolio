import { Search } from "lucide-react";

const rows = [
  { id: "#1048", c: "Northwind", s: "Paid", t: "$240.00", isNew: true },
  { id: "#1047", c: "Contoso", s: "Pending", t: "$89.00" },
  { id: "#1046", c: "Fabrikam", s: "Shipped", t: "$1,120.00" },
  { id: "#1045", c: "Tailspin", s: "Paid", t: "$79.00" },
  { id: "#1044", c: "Wingtip", s: "Refunded", t: "$29.00" },
  { id: "#1043", c: "Litware", s: "Paid", t: "$520.00" },
];

// Orders: filterable table with status chips; the newest order flashes in.
export function AdminOrders() {
  return (
    <div className="adm adm--orders">
      <div className="adm__tools">
        <span className="adm__chip is-on">All <b>128</b></span>
        <span className="adm__chip">Paid <b>94</b></span>
        <span className="adm__chip">Pending <b>21</b></span>
        <span className="adm__chip">Shipped <b>13</b></span>
        <span className="adm__search"><Search size="1.5em" /> Search orders</span>
      </div>
      <div className="adm__table">
        <div className="adm__th"><span>Order</span><span>Customer</span><span>Status</span><span>Total</span></div>
        {rows.map((r, i) => (
          <div key={r.id} className={`adm__tr${r.isNew ? " is-new" : ""}`} style={{ ["--i" as string]: i }}>
            <span className="adm__id">{r.id}{r.isNew && <em>New</em>}</span>
            <span>{r.c}</span>
            <span><i className={`st st--${r.s.toLowerCase()}`}>{r.s}</i></span>
            <span className="adm__amt">{r.t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
