import { ArrowRight, Briefcase, Languages, MapPin, Radio } from "lucide-react";
import { quickFacts } from "@/data/services";
import { useLahoreClock } from "@/hooks/useClock";

const factIcons = [MapPin, Languages, Briefcase];
// Availability is the live chip above, so it is left out of the list.
const facts = quickFacts.filter((f) => f.label !== "Availability");

// What a client wants to know before reaching out: availability and the local time.
export function AboutStatus() {
  const { time, diff } = useLahoreClock();
  return (
    <aside className="status reveal" style={{ ["--d" as string]: "0.15s" }} aria-label="Availability and local time">
      <p className="status__live"><i /> <Radio size={14} /> Open to remote work</p>
      <div className="status__clock">
        <b aria-label={time ? `Local time in Lahore ${time}` : "Local time in Lahore"}>{time || "--:--"}</b>
        <span>Lahore · PKT<small>{diff || "UTC+5"}</small></span>
      </div>
      <ul className="status__facts">
        {facts.map(({ label, value }, i) => {
          const Icon = factIcons[i];
          return (
          <li key={label}>
            <span><Icon size={16} /></span>
            <div><small>{label}</small><b>{value}</b></div>
          </li>
          );
        })}
      </ul>
      <a className="btn btn--sm" href="#contact">Start a project <ArrowRight size={16} /></a>
    </aside>
  );
}
