import { useState } from "react";
import { ArrowRight, ExternalLink, Maximize2 } from "lucide-react";
import { caseStudy, landingPages } from "@/data/landing";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { techs } from "@/data/tech";
import { Lightbox } from "../Lightbox";
import { ProjectCover } from "../ProjectCover";
import { RegionStrip } from "../RegionStrip";
import { TechIcon, techColor } from "../TechIcon";
import { CtaBand } from "./CtaBand";
import { IncludeCards } from "./IncludeCards";
import { PageHero } from "./PageHero";
import { PageShell } from "./PageShell";

const platforms = [
  { title: "Flutter mobile app", text: "The main product for iOS and Android: create estimates and invoices, get client approval, track projects, payments and reminders, and talk to the AI assistant." },
  { title: "React web portal", text: "The browser side of the same product, running on the same Firebase backend so data stays consistent with the mobile app." },
  { title: "Admin dashboard", text: "A separate dashboard for operators: control over users, transactions, invoices and analytics, with integrated support chat." },
];

export function CaseStudyPage() {
  const p = projects.find((x) => x.title === "My Invoice")!;
  const [view, setView] = useState<number | null>(null);
  const shots = p.shots ?? [];
  const used = p.technologies.map((n) => techs.find((t) => t.name === n)).filter((t): t is NonNullable<typeof t> => !!t);

  return (
    <PageShell>
      <PageHero
        trail={[{ name: "Home", href: "/" }, { name: "Projects", href: "/#projects" }, { name: "My Invoice" }]}
        eyebrow={`Case study · ${p.status}`}
        title={caseStudy.h1}
        lead={caseStudy.lead}
        topic="a product like My Invoice"
        visual={<div className="lp-fan"><ProjectCover project={p} eager /></div>}
        actions={
          <>
            {p.playUrl && (
              <a className="pcard__badge" href={p.playUrl} target="_blank" rel="noopener noreferrer">
                <img src="/badges/google-play-badge.svg" alt="Get My Invoice on Google Play" height={52} />
              </a>
            )}
            <a className="btn" href={p.url} target="_blank" rel="noopener noreferrer">Visit myinvoice.us <ExternalLink size={16} /></a>
          </>
        }
        byline={<>Designed and built by <a href="/">{profile.name}</a> at DM Worx LLC</>}
      />

      <section className="lp-sec" aria-labelledby="plat">
        <div className="container">
          <p className="eyebrow reveal">Architecture</p>
          <h2 id="plat" className="work__title reveal">Three platforms, <span className="serif">one backend</span></h2>
          <IncludeCards items={platforms} />
        </div>
      </section>

      <section className="lp-sec lp-sec--alt" aria-labelledby="feat">
        <div className="container lp-faq">
          <div>
            <p className="eyebrow reveal">Features</p>
            <h2 id="feat" className="work__title reveal">What it <span className="serif">does</span></h2>
          </div>
          <ul className="lp-list">
            {p.features.map((f) => <li key={f} className="reveal">{f}</li>)}
          </ul>
        </div>
      </section>

      <section className="lp-sec" aria-labelledby="shots">
        <div className="container">
          <p className="eyebrow reveal">Screens</p>
          <h2 id="shots" className="work__title reveal">The app <span className="serif">in use</span></h2>
          <div className="lp-shots">
            {(p.shots ?? []).map((s, i) => (
              <figure key={s.src} className="lp-shot reveal" style={{ ["--d" as string]: `${(i % 4) * 0.06}s` }}>
                <button type="button" className="lp-shot__btn" onClick={() => setView(i)} aria-label={`Enlarge: ${s.label}`}>
                  <img src={s.src} alt={`My Invoice: ${s.label}`} width={480} height={1067} loading="lazy" decoding="async" />
                  <span className="lp-shot__zoom"><Maximize2 size={16} aria-hidden="true" /></span>
                </button>
                <figcaption>{s.label}</figcaption>
              </figure>
            ))}
          </div>
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

      <section className="lp-sec" aria-labelledby="svc">
        <div className="container">
          <p className="eyebrow reveal">Services behind this build</p>
          <h2 id="svc" className="work__title reveal">Need something <span className="serif">similar?</span></h2>
          <div className="lp-related">
            {landingPages.slice(0, 3).map((r) => (
              <a key={r.slug} className="svccard-lite reveal" href={`/${r.slug}`}>
                <b>{r.serviceName}</b>
                <span>{r.description}</span>
                <em>Learn more <ArrowRight size={16} /></em>
              </a>
            ))}
          </div>
        </div>
      </section>

      <RegionStrip light />
      <CtaBand topic="next product" />
      {view !== null && <Lightbox images={shots} index={view} onIndex={setView} onClose={() => setView(null)} />}
    </PageShell>
  );
}
