import type { PointerEvent } from "react";
import { BadgeCheck, CreditCard, Database, LayoutDashboard, Rocket, ShieldCheck, Smartphone, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const icons: LucideIcon[] = [Smartphone, Database, CreditCard, LayoutDashboard, ShieldCheck, Rocket, Sparkles, BadgeCheck];

// A soft orange spotlight follows the pointer across each card.
function spotlight(e: PointerEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
}

export function IncludeCards({ items }: { items: { title: string; text: string }[] }) {
  return (
    <div className="lpcards">
      {items.map((c, i) => {
        const Icon = icons[i % icons.length];
        return (
          <article key={c.title} className="lpcard reveal" style={{ ["--d" as string]: `${(i % 3) * 0.08}s` }} onPointerMove={spotlight}>
            <span className="lpcard__n">{String(i + 1).padStart(2, "0")}</span>
            <span className="lpcard__ico"><Icon size={22} /></span>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
          </article>
        );
      })}
    </div>
  );
}
