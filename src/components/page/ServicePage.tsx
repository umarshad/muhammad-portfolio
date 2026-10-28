import { ArrowRight } from "lucide-react";
import { caseStudy, landingBySlug } from "@/data/landing";
import type { LandingPage } from "@/data/landing";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { techs } from "@/data/tech";
import { ProjectCover } from "../ProjectCover";
import { TechIcon, techColor } from "../TechIcon";
import { WhatsAppIcon } from "../WhatsAppIcon";
import { Breadcrumbs } from "./Breadcrumbs";
import { PageShell } from "./PageShell";

export function ServicePage({ page }: { page: LandingPage }) {
  const used = page.tech.map((n) => techs.find((t) => t.name === n)).filter((t): t is NonNullable<typeof t> => !!t);
  const proof = page.projects.map((n) => projects.find((p) => p.title === n)).filter((p): p is NonNullable<typeof p> => !!p);
  const related = page.related.map((s) => landingBySlug(s)).filter((p): p is LandingPage => !!p);

  return (
    <PageShell>
      <section className="lp-hero">
        <div className="lp-hero__frame">
          <div className="hero__grid" aria-hidden="true" />
          <div className="lp-hero__inner">
            <Breadcrumbs trail={[{ name: "Home", href: "/" }, { name: "Services", href: "/#services" }, { name: page.serviceName }]} />
            <p className="eyebrow eyebrow--dark">{page.eyebrow}</p>
            <h1>{page.h1}</h1>
            <p className="lp-lead">{page.lead}</p>
            <div className="lp-ctas">
              <a className="btn" href="/#contact">Start a project <ArrowRight size={18} /></a>
              <a className="btn btn--ghost" href={`${profile.whatsapp}?text=${encodeURIComponent(`Hi Muhammad, I'd like to talk about ${page.serviceName.toLowerCase()}.`)}`} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={18} /> WhatsApp
              </a>
            </div>
            <p className="lp-byline">By <a href="/">{profile.name}</a>, {profile.title}, Lahore · open to remote work</p>
          </div>
        </div>
      </section>

      <section className="lp-sec" aria-labelledby="inc">
        <div className="container">
          <p className="eyebrow reveal">What you get</p>
          <h2 id="inc" className="work__title reveal">What&apos;s <span className="serif">included</span></h2>
          <div className="about__cards lp-cards">
            {page.includes.map((c, i) => (
              <article key={c.title} className="acard reveal" style={{ ["--d" as string]: `${(i % 3) * 0.08}s` }}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lp-sec lp-sec--alt" aria-labelledby="how">
        <div className="container">
          <p className="eyebrow reveal">Process</p>
          <h2 id="how" className="work__title reveal">How it <span className="serif">works</span></h2>
          <ol className="proc__steps proc__steps--4">
            {page.steps.map((s, i) => (
              <li key={s.title} className="proc__step reveal" style={{ ["--d" as string]: `${i * 0.1}s` }}>
                <span className="proc__num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="lp-sec" aria-labelledby="tech">
        <div className="container">
          <p className="eyebrow reveal">Technology</p>
          <h2 id="tech" className="work__title reveal">Tools used for <span className="serif">this</span></h2>
          <div className="tech__grid lp-tech">
            {used.map((t, i) => (
              <div key={t.name} className="tcard" style={{ ["--i" as string]: i, ["--c" as string]: techColor(t) }}>
                <TechIcon tech={t} />
                <span className="ttile__txt"><b>{t.name}</b><small>{t.note}</small></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lp-sec lp-sec--alt" aria-labelledby="proof">
        <div className="container">
          <p className="eyebrow reveal">Proof</p>
          <h2 id="proof" className="work__title reveal">Related <span className="serif">work</span></h2>
          <div className="lp-proj">
            {proof.map((p) => {
              const href = p.title === "My Invoice" ? `/${caseStudy.slug}` : p.url.startsWith("http") ? p.url : undefined;
              return (
                <article key={p.title} className="pcard">
                  <div className="pcard__media"><ProjectCover project={p} /></div>
                  <div className="pcard__body">
                    <div className="pcard__top"><span className="pcard__kinds">{p.kinds.join(" · ")}</span><span className="pcard__status"><i /> {p.status}</span></div>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    {href && (
                      <a className="lp-link" href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                        {p.title === "My Invoice" ? "Read the case study" : "Visit the project"} <ArrowRight size={16} />
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="lp-sec" aria-labelledby="qa">
        <div className="container lp-faq">
          <div>
            <p className="eyebrow reveal">Questions</p>
            <h2 id="qa" className="work__title reveal">Common <span className="serif">questions</span></h2>
          </div>
          <div>
            {page.faq.map((f) => (
              <article key={f.q} className="lp-qa reveal">
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lp-sec lp-sec--alt" aria-labelledby="more">
        <div className="container">
          <p className="eyebrow reveal">Related services</p>
          <h2 id="more" className="work__title reveal">Often <span className="serif">combined</span></h2>
          <div className="lp-related">
            {related.map((r) => (
              <a key={r.slug} className="svccard-lite reveal" href={`/${r.slug}`}>
                <b>{r.serviceName}</b>
                <span>{r.description}</span>
                <em>Learn more <ArrowRight size={16} /></em>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="lp-cta">
        <div className="lp-cta__frame">
          <h2>Let&apos;s talk about your <span className="serif">{page.serviceName.toLowerCase()}</span></h2>
          <p>Tell me what you want to build and I will reply with the right approach and next step.</p>
          <div className="lp-ctas">
            <a className="btn" href="/#contact">Start a project <ArrowRight size={18} /></a>
            <a className="btn btn--ghost" href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
