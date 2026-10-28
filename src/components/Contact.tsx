import { ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";

export function Contact() {
  const cards = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { label: "Location", value: profile.location, href: undefined },
  ];
  return (
    <section id="contact" className="contact">
      <div className="contact__frame">
        <p className="eyebrow eyebrow--dark reveal">Let&apos;s work together</p>
        <h2 className="contact__title reveal" style={{ ["--d" as string]: "0.1s" }}>
          Have an app in <span className="serif">mind?</span>
        </h2>
        <p className="contact__lead reveal" style={{ ["--d" as string]: "0.2s" }}>
          Tell me what you want to build and I will reply with the right approach and next step.
        </p>
        <div className="contact__cards">
          {cards.map((c, i) => {
            const inner = (<><span>{c.label}</span><b>{c.value}</b></>);
            const style = { ["--d" as string]: `${0.1 * i}s` };
            return c.href ? (
              <a key={c.label} className="ccard reveal" href={c.href} style={style}>{inner}</a>
            ) : (
              <div key={c.label} className="ccard reveal" style={style}>{inner}</div>
            );
          })}
        </div>
        <div className="contact__ctas reveal">
          <a className="btn" href={`mailto:${profile.email}`}>Send an email <ArrowRight size={18} /></a>
          <a className="btn btn--ghost" href={profile.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </div>
      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.name} · {profile.title}</span>
        <span>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          {" · "}
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </span>
      </footer>
    </section>
  );
}
