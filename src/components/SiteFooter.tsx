import { ArrowUp, Github, Globe, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { caseStudy, landingPages } from "@/data/landing";
import { profile } from "@/data/profile";
import { WhatsAppIcon } from "./WhatsAppIcon";

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
  const year = new Date().getFullYear();
  const lines = [
    { Icon: MapPin, text: profile.location, href: undefined },
    { Icon: Phone, text: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { Icon: Mail, text: profile.email, href: `mailto:${profile.email}` },
    { Icon: Globe, text: profile.site.replace("https://", ""), href: profile.site },
  ];
  const buttons = [
    { label: "WhatsApp", href: profile.whatsapp, node: <WhatsAppIcon size={20} />, ext: true },
    { label: "Email", href: `mailto:${profile.email}`, node: <Mail size={20} aria-hidden="true" /> },
    { label: "Call", href: `tel:${profile.phone.replace(/\s/g, "")}`, node: <Phone size={20} aria-hidden="true" /> },
    { label: "LinkedIn", href: profile.linkedin, node: <Linkedin size={20} aria-hidden="true" />, ext: true },
    { label: "GitHub", href: profile.github, node: <Github size={20} aria-hidden="true" />, ext: true },
  ];

  return (
    <footer className="sfoot">
      <div className="sfoot__card">
        <div className="sfoot__grid">
          <div className="sfoot__about">
            <a href="/" className="sfoot__logo" aria-label={`${profile.name}, home`}>
              <span className="brand__mark">MU</span>
              <span>
                <b>{profile.name}</b>
                <small>{profile.title}</small>
              </span>
            </a>
            <p className="sfoot__text">{profile.title} and full-stack developer based in Lahore, open to remote work. Apps, websites and SaaS, from first screen to store release.</p>
            <ul className="sfoot__lines">
              {lines.map(({ Icon, text, href }) => (
                <li key={text}>
                  <Icon size={18} aria-hidden="true" />
                  {href ? <a href={href}>{text}</a> : <span>{text}</span>}
                </li>
              ))}
            </ul>
            <div className="sfoot__btns">
              {buttons.map((b) => (
                <a key={b.label} href={b.href} aria-label={b.label} title={b.label} {...(b.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{b.node}</a>
              ))}
            </div>
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
              <li><a href="/#about">About</a></li>
              <li><a href="/#projects">Projects</a></li>
              <li><a href={`/${caseStudy.slug}`}>My Invoice case study</a></li>
              <li><a href="/#experience">Experience</a></li>
              <li><a href="/#skills">Skills</a></li>
              <li><a href="/#faq">FAQ</a></li>
              <li><a href={profile.resume} download>Resume (PDF)</a></li>
              <li><a href="/llms.txt">llms.txt</a></li>
            </ul>
          </nav>
        </div>
      </div>

      <Wordmark />
      <div className="sfoot__legal">
        <span>© {year} <b>{profile.name}</b> · {profile.location}</span>
        <a href="#top">Back to top <ArrowUp size={14} aria-hidden="true" /></a>
      </div>
    </footer>
  );
}
