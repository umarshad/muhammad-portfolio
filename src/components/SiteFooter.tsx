import { caseStudy, landingPages } from "@/data/landing";
import { profile } from "@/data/profile";

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
          </ul>
        </div>
      </div>
      <p className="sfoot__legal">© {new Date().getFullYear()} {profile.name} · {profile.location}</p>
    </footer>
  );
}
