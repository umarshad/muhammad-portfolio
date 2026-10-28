import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { WhatsAppIcon } from "../WhatsAppIcon";
import { Breadcrumbs } from "./Breadcrumbs";

type Props = {
  trail: { name: string; href?: string }[];
  eyebrow: string;
  title: string;
  lead: string;
  topic: string; // used in the WhatsApp message
  visual: ReactNode;
  actions?: ReactNode; // replaces the default buttons
  byline?: ReactNode;
  logo?: { src: string; alt: string }; // project mark shown above the title
};

// Shared hero for every inner page: staged entrance, live-status chips, call to action, and a visual on the right.
export function PageHero({ trail, eyebrow, title, lead, topic, visual, actions, byline, logo }: Props) {
  return (
    <section className="lp-hero">
      <div className="lp-hero__frame">
        <div className="hero__grid" aria-hidden="true" />
        <div className="lp-hero__inner">
          <div className="lp-hero__text">
            <Breadcrumbs trail={trail} />
            {logo && <img className="lp-logo lp-in" src={logo.src} alt={logo.alt} width={64} height={64} style={{ ["--d" as string]: "0s" }} />}
            <div className="hero__chips lp-in" style={{ ["--d" as string]: "0.05s" }}>
              <span className="hero__badge hero__badge--live"><i /> Open to remote work</span>
              <span className="hero__badge"><i /> {eyebrow}</span>
            </div>
            <h1 className="lp-in" style={{ ["--d" as string]: "0.15s" }}>{title}</h1>
            <p className="lp-lead lp-in" style={{ ["--d" as string]: "0.3s" }}>{lead}</p>
            <div className="lp-ctas lp-in" style={{ ["--d" as string]: "0.45s" }}>
              {actions ?? (
                <>
                  <a className="btn" href="/#contact">Start a project <ArrowRight size={18} /></a>
                  <a className="btn btn--ghost" href={`${profile.whatsapp}?text=${encodeURIComponent(`Hi Muhammad, I'd like to talk about ${topic}.`)}`} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon size={18} /> WhatsApp
                  </a>
                </>
              )}
            </div>
            <div className="hero__stats lp-in" style={{ ["--d" as string]: "0.6s" }}>
              <div><b>{profile.years}+</b><span>Years</span></div>
              <div><b>{projects.length}</b><span>Projects</span></div>
              <div><b>3</b><span>iOS · Android · Web</span></div>
            </div>
            <p className="lp-byline lp-in" style={{ ["--d" as string]: "0.7s" }}>{byline ?? <>By <a href="/">{profile.name}</a>, {profile.title}, Lahore · remote for the UK, Europe, the USA and the UAE</>}</p>
          </div>
          <div className="lp-hero__visual lp-in" style={{ ["--d" as string]: "0.35s" }}>{visual}</div>
        </div>
      </div>
    </section>
  );
}
