import { ArrowRight } from "lucide-react";
import { caseStudyForProject } from "@/data/caseStudies";
import { landingBySlug } from "@/data/landing";
import type { LandingPage } from "@/data/landing";
import { regionPages } from "@/data/regions";
import { projects } from "@/data/projects";
import { techs } from "@/data/tech";
import { ProjectCover } from "../ProjectCover";
import { RegionStrip } from "../RegionStrip";
import { TechIcon, techColor } from "../TechIcon";
import { TimeBridge } from "../TimeBridge";
import { CtaBand } from "./CtaBand";
import { FaqAccordion } from "./FaqAccordion";
import { IncludeCards } from "./IncludeCards";
import { PageHero } from "./PageHero";
import { PageShell } from "./PageShell";
import { ServiceVisual } from "./ServiceVisual";
import { StepsTimeline } from "./StepsTimeline";

export function ServicePage({ page }: { page: LandingPage }) {
  const region = regionPages.find((r) => r.slug === page.slug)?.region;
  const used = page.tech.map((n) => techs.find((t) => t.name === n)).filter((t): t is NonNullable<typeof t> => !!t);
  const proof = page.projects.map((n) => projects.find((p) => p.title === n)).filter((p): p is NonNullable<typeof p> => !!p);
  const related = page.related.map((s) => landingBySlug(s)).filter((p): p is LandingPage => !!p);

  return (
    <PageShell>
      <PageHero
        trail={[{ name: "Home", href: "/" }, { name: region ? "Hire by region" : "Services", href: region ? "/#regions" : "/#services" }, { name: page.serviceName }]}
        eyebrow={page.eyebrow}
        title={page.h1}
        lead={page.lead}
        topic={page.serviceName.toLowerCase()}
        visual={region ? <div className="lp-glass"><TimeBridge focus={region} /></div> : <ServiceVisual slug={page.slug} />}
      />

      <section className="lp-sec" aria-labelledby="inc">
        <div className="container">
          <p className="eyebrow reveal">What you get</p>
          <h2 id="inc" className="work__title reveal">What&apos;s <span className="serif">included</span></h2>
          <IncludeCards items={page.includes} />
        </div>
      </section>

      <section className="lp-sec lp-sec--alt" aria-labelledby="how">
        <div className="container">
          <p className="eyebrow reveal">Process</p>
          <h2 id="how" className="work__title reveal">How it <span className="serif">works</span></h2>
          <StepsTimeline steps={page.steps} />
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
            {proof.map((p, i) => {
              const study = caseStudyForProject(p.title);
              const href = study ? `/${study.slug}` : p.url.startsWith("http") ? p.url : undefined;
              return (
                <article key={p.title} className="pcard reveal" style={{ ["--d" as string]: `${i * 0.1}s` }}>
                  <div className="pcard__media"><ProjectCover project={p} /></div>
                  <div className="pcard__body">
                    <div className="pcard__top"><span className="pcard__kinds">{p.kinds.join(" · ")}</span><span className="pcard__status"><i /> {p.status}</span></div>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    {href && (
                      <a className="lp-link" href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                        {study ? "Read the case study" : "Visit the project"} <ArrowRight size={16} />
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
          <FaqAccordion items={page.faq} />
        </div>
      </section>

      <section className="lp-sec lp-sec--alt" aria-labelledby="more">
        <div className="container">
          <p className="eyebrow reveal">Related services</p>
          <h2 id="more" className="work__title reveal">Often <span className="serif">combined</span></h2>
          <div className="lp-related">
            {related.map((r, i) => (
              <a key={r.slug} className="svccard-lite reveal" href={`/${r.slug}`} style={{ ["--d" as string]: `${i * 0.08}s` }}>
                <b>{r.serviceName}</b>
                <span>{r.description}</span>
                <em>Learn more <ArrowRight size={16} /></em>
              </a>
            ))}
          </div>
        </div>
      </section>

      <RegionStrip light />
      <CtaBand topic={page.serviceName.toLowerCase()} />
    </PageShell>
  );
}
