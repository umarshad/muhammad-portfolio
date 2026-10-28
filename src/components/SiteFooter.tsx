import { ArrowUp } from "lucide-react";
import { caseStudy, landingPages } from "@/data/landing";
import { profile } from "@/data/profile";

const chips = [
  { text: "From idea to store release", tone: "orange" },
  { text: "SaaS and subscriptions", tone: "light" },
  { text: "Flutter, iOS and Android", tone: "light" },
  { text: "Open to remote work", tone: "orange" },
];

// Giant wordmark: every letter reacts to the pointer, and the pills drift around it.
function Wordmark() {
  return (
    <div className="fword" aria-hidden="true">
      {chips.map((c, i) => (
        <span key={c.text} className={`fchip fchip--${i + 1} fchip--${c.tone}`}><i />{c.text}</span>
      ))}
      <p className="fword__text">
        {["MUHAMMAD", "UMAR"].map((w) => (
          <span key={w} className="fword__w">
            {[...w].map((ch, i) => <span key={i} className="fl">{ch}</span>)}
          </span>
        ))}
      </p>
    </div>
  );
}

// Sitewide footer: internal links to every service page and the case study, plus contact details.
export function SiteFooter() {
  return (
    <footer className="sfoot">
      <div className="sfoot__grid">
        <div>
          <p className="sfoot__brand">{profile.name}</p>
          <p className="sfoot__text">{profile.title} and full-stack developer based in Lahore, open to remote work.</p>
        </div>
        <nav aria-label="Services">
          <h2>Services</h2>
          <ul>
            {landingPages.map((p) => (
              <li key={p.slug}><a href={`/${p.slug}`}>{p.serviceName}</a></li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Explore">
          <h2>Explore</h2>
          <ul>
            <li><a href="/#projects">Projects</a></li>
            <li><a href={`/${caseStudy.slug}`}>My Invoice case study</a></li>
            <li><a href="/#experience">Experience</a></li>
            <li><a href="/#faq">FAQ</a></li>
            <li><a href="/llms.txt">llms.txt</a></li>
          </ul>
        </nav>
        <div>
          <h2>Contact</h2>
          <ul>
            <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><a href={profile.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp {profile.phone}</a></li>
            <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href={profile.resume} download>Resume (PDF)</a></li>
          </ul>
        </div>
      </div>
      <Wordmark />
      <div className="sfoot__legal">
        <span>© {new Date().getFullYear()} <b>{profile.name}</b> · {profile.location}</span>
        <a href="#top">Back to top <ArrowUp size={14} aria-hidden="true" /></a>
      </div>
    </footer>
  );
}
