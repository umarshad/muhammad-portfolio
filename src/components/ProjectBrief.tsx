import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";
import { projectTypes } from "@/data/services";
import { WhatsAppIcon } from "./WhatsAppIcon";

// Builds a ready-to-send message; nothing is stored or sent until the visitor taps a button.
export function ProjectBrief() {
  const [types, setTypes] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");

  const toggle = (t: string) => setTypes((cur) => (cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t]));
  const text =
    `Hi Muhammad, ${name ? `I'm ${name}. ` : ""}I'd like to talk about a project.\n` +
    `${types.length ? `Looking for: ${types.join(", ")}.\n` : ""}${about ? `\n${about}` : ""}`;

  return (
    <form className="brief reveal" onSubmit={(e) => e.preventDefault()} aria-label="Project brief">
      <h3>Start a project</h3>
      <p className="brief__hint">Pick what you need, add a few lines, and send it. No account, nothing is stored.</p>

      <fieldset>
        <legend>What do you need?</legend>
        <div className="brief__types">
          {projectTypes.map((t) => (
            <button key={t} type="button" aria-pressed={types.includes(t)} onClick={() => toggle(t)}>{t}</button>
          ))}
        </div>
      </fieldset>

      <label htmlFor="brief-name">Your name</label>
      <input id="brief-name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" placeholder="Jane Doe" />

      <label htmlFor="brief-about">About the project</label>
      <textarea id="brief-about" rows={4} value={about} onChange={(e) => setAbout(e.target.value)} placeholder="What are you building, and who is it for?" />

      <div className="brief__actions">
        <a className="btn" href={`${profile.whatsapp}?text=${encodeURIComponent(text)}`} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon size={20} /> Send on WhatsApp
        </a>
        <a className="btn btn--ghost" href={`mailto:${profile.email}?subject=${encodeURIComponent("Project enquiry")}&body=${encodeURIComponent(text)}`}>
          Send by email <ArrowRight size={18} />
        </a>
      </div>
    </form>
  );
}
