import { useMemo, useState } from "react";
import { ArrowRight, Mail, Search } from "lucide-react";
import { faq, faqCategories } from "@/data/faq";
import { profile } from "@/data/profile";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Faq() {
  const [cat, setCat] = useState("all");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<string | null>(faq[0].q);

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faq.filter((f) => (cat === "all" || f.cat === cat) && (!q || `${f.q} ${f.a}`.toLowerCase().includes(q)));
  }, [cat, query]);

  return (
    <section id="faq" className="faq" aria-labelledby="faq-title">
      <div className="container faq__wrap">
        <aside className="faq__side">
          <p className="eyebrow reveal">FAQ</p>
          <h2 id="faq-title" className="work__title reveal" style={{ ["--d" as string]: "0.1s" }}>
            Good to <span className="serif">know</span>
          </h2>
          <p className="faq__lead reveal" style={{ ["--d" as string]: "0.2s" }}>
            Quick answers about services, working together and the tech behind the work.
          </p>

          <label className="faq__search reveal" style={{ ["--d" as string]: "0.25s" }}>
            <Search size={18} aria-hidden="true" />
            <span className="sr-only">Search questions</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search, e.g. Stripe, remote, App Store"
            />
          </label>

          <div className="faq__cats reveal" style={{ ["--d" as string]: "0.3s" }} role="group" aria-label="Question categories">
            {faqCategories.map((c) => (
              <button key={c.id} type="button" aria-pressed={c.id === cat} onClick={() => setCat(c.id)}>{c.label}</button>
            ))}
          </div>

          <div className="faq__help reveal" style={{ ["--d" as string]: "0.35s" }}>
            <b>Still have a question?</b>
            <p>Ask directly and get a reply with the right next step.</p>
            <div>
              <a className="btn btn--sm" href={`${profile.whatsapp}?text=${encodeURIComponent("Hi Muhammad, I have a question about working together.")}`} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={16} /> WhatsApp
              </a>
              <a className="btn btn--sm btn--ghost" href={`mailto:${profile.email}`}><Mail size={16} /> Email</a>
            </div>
          </div>
        </aside>

        <div className="faq__main">
          <p className="faq__count" aria-live="polite">{list.length} of {faq.length} questions</p>
          <div className="faq__list">
            {list.map((f, i) => {
              const isOpen = open === f.q;
              const id = `qa-${faq.indexOf(f)}`;
              return (
                <div key={f.q} className={`qa${isOpen ? " is-open" : ""}`} style={{ ["--i" as string]: i }}>
                  <h3>
                    <button type="button" aria-expanded={isOpen} aria-controls={id} onClick={() => setOpen(isOpen ? null : f.q)}>
                      <span className="qa__n">{String(i + 1).padStart(2, "0")}</span>
                      <span className="qa__q">{f.q}</span>
                      <i aria-hidden="true" />
                    </button>
                  </h3>
                  <div id={id} className="qa__a" aria-hidden={!isOpen}>
                    <div><p>{f.a}</p></div>
                  </div>
                </div>
              );
            })}
            {list.length === 0 && (
              <div className="faq__empty">
                <b>No match for &ldquo;{query}&rdquo;</b>
                <p>Try another word, or ask directly.</p>
                <a className="btn btn--sm" href="#contact">Ask a question <ArrowRight size={16} /></a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
