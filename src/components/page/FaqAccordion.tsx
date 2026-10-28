import { Plus } from "lucide-react";

// Native details/summary: keyboard friendly, and every answer stays in the page for search engines.
export function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="lpfaq">
      {items.map((f, i) => (
        <details key={f.q} className="lpfaq__item reveal" name="page-faq" open={i === 0} style={{ ["--d" as string]: `${i * 0.06}s` }}>
          <summary>
            <span className="lpfaq__n">{String(i + 1).padStart(2, "0")}</span>
            <span className="lpfaq__q">{f.q}</span>
            <Plus size={20} aria-hidden="true" />
          </summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
