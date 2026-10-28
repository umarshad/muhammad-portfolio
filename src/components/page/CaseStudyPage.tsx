import { useState } from "react";
import { ArrowRight, ExternalLink, Github, Maximize2 } from "lucide-react";
import type { CaseStudy } from "@/data/caseStudies";
import { landingBySlug } from "@/data/landing";
import type { LandingPage } from "@/data/landing";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { techs } from "@/data/tech";
import { BrowserFrame } from "../BrowserFrame";
import { Lightbox } from "../Lightbox";
import { PhoneFrame } from "../PhoneFrame";
import { ProjectCover } from "../ProjectCover";
import { RegionStrip } from "../RegionStrip";
import { TechIcon, techColor } from "../TechIcon";
import { CtaBand } from "./CtaBand";
import { FaqAccordion } from "./FaqAccordion";
import { IncludeCards } from "./IncludeCards";
import { PageHero } from "./PageHero";
import { PageShell } from "./PageShell";

export function CaseStudyPage({ study }: { study: CaseStudy }) {
  const p = projects.find((x) => x.title === study.project)!;
  const [view, setView] = useState<number | null>(null);
  const [gview, setGview] = useState<{ g: number; i: number } | null>(null);
  const shots = p.shots ?? [];
  const used = study.stack.map((n) => techs.find((t) => t.name === n)).filter((t): t is NonNullable<typeof t> => !!t);
  const related = study.related.map((s) => landingBySlug(s)).filter((x): x is LandingPage => !!x);
  const isRepo = p.url.includes("github.com");

  return (
    <PageShell>
      <PageHero
        trail={[{ name: "Home", href: "/" }, { name: "Projects", href: "/#projects" }, { name: p.title }]}
        eyebrow={`${study.eyebrow} · ${p.status}`}
        title={study.h1}
        lead={study.lead}
        topic={`a product like ${p.title}`}
        visual={<div className="lp-fan"><ProjectCover project={p} eager /></div>}
        actions={
          <>
            {p.playUrl && (
              <a className="pcard__badge" href={p.playUrl} target="_blank" rel="noopener noreferrer">
                <img src="/badges/google-play-badge.svg" alt={`Get ${p.title} on Google Play`} height={52} />
              </a>
            )}
            {p.url.startsWith("http") && (
              <a className="btn" href={p.url} target="_blank" rel="noopener noreferrer">
                {isRepo ? <>View the code <Github size={16} /></> : <>Visit {p.url.replace("https://", "")} <ExternalLink size={16} /></>}
              </a>
            )}
            <a className="btn btn--ghost" href="/#contact">Start a project <ArrowRight size={16} /></a>
          </>
        }
        byline={<>{study.role.replace("Muhammad Umar", "")}<a href="/">{profile.name}</a></>}
      />

      <section className="lp-sec" aria-labelledby="glance">
        <div className="container">
          <p className="eyebrow reveal">At a glance</p>
          <h2 id="glance" className="work__title reveal">The project in <span className="serif">numbers</span></h2>
          <dl className="cs-facts">
            <div className="reveal"><dt>Role</dt><dd>Design, development and release</dd></div>
            <div className="reveal" style={{ ["--d" as string]: "0.06s" }}><dt>Platforms</dt><dd>{study.os.replace("Android, iOS, Web", "iOS, Android and web").replace("Android, iOS", "iOS and Android")}</dd></div>
            <div className="reveal" style={{ ["--d" as string]: "0.12s" }}><dt>Core stack</dt><dd>{p.technologies.slice(0, 4).join(", ")}</dd></div>
            <div className="reveal" style={{ ["--d" as string]: "0.18s" }}><dt>Status</dt><dd>{p.status}</dd></div>
          </dl>
        </div>
      </section>

      <section className="lp-sec lp-sec--alt" aria-labelledby="plat">
        <div className="container">
          <p className="eyebrow reveal">{study.archEyebrow}</p>
          <h2 id="plat" className="work__title reveal">{study.archTitle[0]} <span className="serif">{study.archTitle[1]}</span></h2>
          <IncludeCards items={study.platforms} />
        </div>
      </section>

      <section className="lp-sec" aria-labelledby="feat">
        <div className="container lp-faq">
          <div>
            <p className="eyebrow reveal">Features</p>
            <h2 id="feat" className="work__title reveal">What it <span className="serif">does</span></h2>
          </div>
          <ul className="lp-list">
            {study.features.map((f) => <li key={f} className="reveal">{f}</li>)}
          </ul>
        </div>
      </section>

      {(study.galleries ?? []).map((g, gi) => (
        <section key={g.id} className={`lp-sec${gi % 2 === 0 ? " lp-sec--alt" : ""}`} aria-labelledby={`gal-${g.id}`}>
          <div className="container">
            <p className="eyebrow reveal">{g.eyebrow}</p>
            <h2 id={`gal-${g.id}`} className="work__title reveal">{g.title[0]} <span className="serif">{g.title[1]}</span></h2>
            <p className="cs-intro reveal">{g.intro}</p>
            <div className="cs-gal">
              {g.images.map((im, i) => (
                <figure key={im.src} className={`cs-gal__item reveal${i === 0 ? " cs-gal__item--lead" : ""}`} style={{ ["--d" as string]: `${i * 0.08}s` }}>
                  <button type="button" className="cs-gal__btn" onClick={() => setGview({ g: gi, i })} aria-label={`Enlarge: ${im.label}`}>
                    <BrowserFrame src={im.src} alt={`${p.title} ${g.eyebrow.toLowerCase()}: ${im.label}`} url={g.url} />
                    <span className="lp-shot__zoom"><Maximize2 size={16} aria-hidden="true" /></span>
                  </button>
                  <figcaption>{im.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ))}

      {shots.length > 0 && (
        <section className="lp-sec lp-sec--alt" aria-labelledby="shots">
          <div className="container">
            <p className="eyebrow reveal">Screens</p>
            <h2 id="shots" className="work__title reveal">The app <span className="serif">in use</span></h2>
            <div className="lp-shots">
              {shots.map((s, i) => (
                <figure key={s.src} className="lp-shot reveal" style={{ ["--d" as string]: `${(i % 4) * 0.06}s` }}>
                  <button type="button" className="lp-shot__btn" onClick={() => setView(i)} aria-label={`Enlarge: ${s.label}`}>
                    <PhoneFrame src={s.src} alt={`${p.title}: ${s.label}`} />
                    <span className="lp-shot__zoom"><Maximize2 size={16} aria-hidden="true" /></span>
                  </button>
                  <figcaption>{s.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="lp-sec" aria-labelledby="dec">
        <div className="container">
          <p className="eyebrow reveal">Under the hood</p>
          <h2 id="dec" className="work__title reveal">{study.decisionsTitle[0]} <span className="serif">{study.decisionsTitle[1]}</span></h2>
          <IncludeCards items={study.decisions} />
        </div>
      </section>

      <section className="lp-sec lp-sec--alt" aria-labelledby="stack">
        <div className="container">
          <p className="eyebrow reveal">Stack</p>
          <h2 id="stack" className="work__title reveal">Built <span className="serif">with</span></h2>
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

      <section className="lp-sec" aria-labelledby="qa">
        <div className="container lp-faq">
          <div>
            <p className="eyebrow reveal">Questions</p>
            <h2 id="qa" className="work__title reveal">About this <span className="serif">project</span></h2>
          </div>
          <FaqAccordion items={study.faq} />
        </div>
      </section>

      <section className="lp-sec lp-sec--alt" aria-labelledby="svc">
        <div className="container">
          <p className="eyebrow reveal">Services behind this build</p>
          <h2 id="svc" className="work__title reveal">Need something <span className="serif">similar?</span></h2>
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
      <CtaBand topic={study.ctaTopic} />
      {gview !== null && study.galleries && (
        <Lightbox images={study.galleries[gview.g].images} index={gview.i} onIndex={(i) => setGview({ g: gview.g, i })} onClose={() => setGview(null)} />
      )}
      {view !== null && <Lightbox images={shots} index={view} onIndex={setView} onClose={() => setView(null)} device />}
    </PageShell>
  );
}
