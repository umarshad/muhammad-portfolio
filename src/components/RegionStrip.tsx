import { ArrowRight } from "lucide-react";
import { regionPages } from "@/data/regions";
import { TimeBridge } from "./TimeBridge";

const label: Record<string, string> = { uk: "United Kingdom", usa: "United States", eu: "Europe" };

// "Remote across time zones": live clocks plus links to the UK, USA and Europe pages.
export function RegionStrip({ light }: { light?: boolean }) {
  return (
    <section id="regions" className={`regions${light ? " regions--light" : ""}`} aria-labelledby="regions-title">
      <div className="regions__frame">
        <div className="regions__text">
          <p className="eyebrow eyebrow--dark reveal">Clients in the UK, Europe and the USA</p>
          <h2 id="regions-title" className="exp__title reveal" style={{ ["--d" as string]: "0.1s" }}>
            Remote, across <span className="serif">time zones</span>
          </h2>
          <p className="regions__lead reveal" style={{ ["--d" as string]: "0.2s" }}>
            I work from Lahore with founders, startups and agencies in the UK, Europe and the USA. Planning calls are booked in the overlap of your day and mine, and written updates and recorded demos keep work moving in between.
          </p>
          <div className="regions__links reveal" style={{ ["--d" as string]: "0.3s" }}>
            {regionPages.map((r) => (
              <a key={r.slug} href={`/${r.slug}`}>
                <span>{label[r.region]}</span>
                <small>Flutter developer for hire</small>
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
        <div className="regions__clocks reveal" style={{ ["--d" as string]: "0.2s" }}>
          <TimeBridge />
        </div>
      </div>
    </section>
  );
}
