import { profile } from "@/data/profile";
import { ProjectBrief } from "./ProjectBrief";

export function Contact() {
  const cards = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "Phone / WhatsApp", value: profile.phone, href: profile.whatsapp },
    { label: "LinkedIn", value: "muhammad-umar", href: profile.linkedin },
    { label: "GitHub", value: "umarshad", href: profile.github },
  ];
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="contact__frame">
        <div className="contact__grid">
          <div>
            <p className="eyebrow eyebrow--dark reveal">Let&apos;s work together</p>
            <h2 id="contact-title" className="contact__title reveal" style={{ ["--d" as string]: "0.1s" }}>
              Have an app in <span className="serif">mind?</span>
            </h2>
            <p className="contact__lead reveal" style={{ ["--d" as string]: "0.2s" }}>
              Tell me what you want to build and I will reply with the right approach and next step. Based in Lahore (PKT, UTC+5), open to remote work.
            </p>
            <div className="contact__cards">
              {cards.map((c, i) => (
                <a
                  key={c.label}
                  className="ccard reveal"
                  href={c.href}
                  style={{ ["--d" as string]: `${0.08 * i}s` }}
                  {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <span>{c.label}</span>
                  <b>{c.value}</b>
                </a>
              ))}
            </div>
          </div>
          <ProjectBrief />
        </div>
      </div>
      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.name} · {profile.title}</span>
        <span>{profile.location}</span>
      </footer>
    </section>
  );
}
