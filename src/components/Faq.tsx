import { faq } from "@/data/faq";

export function Faq() {
  return (
    <section id="faq" className="faq" aria-labelledby="faq-title">
      <div className="container faq__wrap">
        <div>
          <p className="eyebrow reveal">FAQ</p>
          <h2 id="faq-title" className="work__title reveal" style={{ ["--d" as string]: "0.1s" }}>
            Good to <span className="serif">know</span>
          </h2>
        </div>
        <div className="faq__list">
          {faq.map((f, i) => (
            <details key={f.q} className="faq__item reveal" style={{ ["--d" as string]: `${i * 0.06}s` }}>
              <summary>
                <span>{f.q}</span>
                <i aria-hidden="true" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
