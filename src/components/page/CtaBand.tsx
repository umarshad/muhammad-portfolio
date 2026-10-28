import { ArrowRight, Download } from "lucide-react";
import { profile } from "@/data/profile";

export function CtaBand({ topic }: { topic: string }) {
  return (
    <section className="lp-cta">
      <div className="lp-cta__frame">
        <i className="lp-cta__orb" aria-hidden="true" />
        <h2>Let&apos;s talk about your <span className="serif">{topic}</span></h2>
        <p>Tell me what you want to build and I will reply with the right approach and next step.</p>
        <div className="lp-ctas">
          <a className="btn" href="/#contact">Start a project <ArrowRight size={18} /></a>
          <a className="btn btn--ghost" href={`mailto:${profile.email}`}>{profile.email}</a>
          <a className="btn btn--ghost" href={profile.resume} download><Download size={16} aria-hidden="true" /> Resume</a>
        </div>
      </div>
    </section>
  );
}
