import { caseStudy, landingBySlug, landingPages, regionPages } from "@/data/landing";
import { education, skillGroups } from "@/data/skills";
import { faq } from "@/data/faq";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { metaFor } from "./meta";

const site = profile.site;
const home = `${site}/`;
const ref = (frag: string) => ({ "@id": `${home}#${frag}` });
const abs = (path: string) => `${site}${path}`;

const country = (name: string) => ({ "@type": "Country", name });
// Markets the work is aimed at; the developer is based in Pakistan and works remotely.
const markets = [
  country("United Kingdom"), country("United States"), country("Ireland"), country("Germany"), country("France"),
  country("Netherlands"), country("Spain"), country("Italy"), country("Sweden"), country("United Arab Emirates"),
  { "@type": "AdministrativeArea", name: "Europe" },
];
const regionAreas: Record<string, object[]> = {
  uk: [country("United Kingdom")],
  usa: [country("United States")],
  eu: [country("Germany"), country("France"), country("Netherlands"), country("Spain"), country("Italy"), country("Sweden"), country("Ireland"), { "@type": "AdministrativeArea", name: "Europe" }],
};
const contactPoint = () => ({
  "@type": "ContactPoint",
  contactType: "sales",
  email: profile.email,
  telephone: profile.phone,
  availableLanguage: ["English", "Urdu"],
  areaServed: ["GB", "US", "DE", "FR", "NL", "IE", "ES", "IT", "SE", "AE"],
});

const person = () => ({
  "@type": "Person",
  "@id": `${home}#person`,
  name: profile.name,
  jobTitle: profile.title,
  description: profile.tagline,
  url: home,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  image: abs("/og-image.jpg"),
  address: { "@type": "PostalAddress", addressLocality: "Lahore", addressRegion: "Punjab", addressCountry: "PK" },
  sameAs: [profile.linkedin, profile.github],
  knowsAbout: skillGroups.flatMap((g) => g.items.filter((i) => !i.includes("("))),
  knowsLanguage: ["English", "Urdu"],
  contactPoint: contactPoint(),
  alumniOf: { "@type": "CollegeOrUniversity", name: education.school },
  worksFor: { "@type": "Organization", name: "DM Worx LLC" },
});

const website = () => ({
  "@type": "WebSite",
  "@id": `${home}#website`,
  url: home,
  name: `${profile.name} | ${profile.title} Portfolio`,
  inLanguage: "en",
  publisher: ref("person"),
});

const professionalService = () => ({
  "@type": "ProfessionalService",
  "@id": `${home}#service`,
  name: `${profile.name}: Flutter and full-stack development`,
  url: home,
  description: profile.tagline,
  image: abs("/og-image.jpg"),
  provider: ref("person"),
  founder: ref("person"),
  areaServed: [...markets, { "@type": "Place", name: "Remote, worldwide" }, country("Pakistan")],
  availableLanguage: ["English", "Urdu"],
  contactPoint: contactPoint(),
  address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Development services",
    itemListElement: landingPages.map((p) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: p.serviceName, description: p.description, url: abs(`/${p.slug}`), provider: ref("person") },
    })),
  },
});

const faqNode = (id: string, items: { q: string; a: string }[]) => ({
  "@type": "FAQPage",
  "@id": id,
  mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

const breadcrumb = (id: string, trail: { name: string; url: string }[]) => ({
  "@type": "BreadcrumbList",
  "@id": id,
  itemListElement: trail.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.name, item: t.url })),
});

export function buildJsonLd(path = "/", modified = new Date().toISOString().slice(0, 10)) {
  const m = metaFor(path);
  const graph: object[] = [];

  if (path === "/") {
    graph.push(
      person(),
      website(),
      professionalService(),
      {
        "@type": "ProfilePage",
        "@id": `${home}#profilepage`,
        url: home,
        name: `${profile.name} - ${profile.title}, ${profile.headline}`,
        dateModified: modified,
        isPartOf: ref("website"),
        mainEntity: ref("person"),
      },
      {
        "@type": "ItemList",
        "@id": `${home}#projects`,
        name: `Projects by ${profile.name}`,
        itemListElement: projects.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "CreativeWork",
            name: p.title,
            description: p.description,
            keywords: p.technologies.join(", "),
            author: ref("person"),
            ...(p.title === "My Invoice" ? { url: abs(`/${caseStudy.slug}`) } : p.url.startsWith("http") ? { url: p.url } : {}),
          },
        })),
      },
      faqNode(`${home}#faq`, faq),
    );
    return { "@context": "https://schema.org", "@graph": graph };
  }

  const pageUrl = m?.canonical ?? abs(path);
  const pageId = `${pageUrl}#webpage`;
  const homeCrumb = { name: "Home", url: home };

  if (path === `/${caseStudy.slug}`) {
    const mi = projects.find((p) => p.title === "My Invoice")!;
    graph.push(
      { ...person(), "@type": "Person" },
      website(),
      {
        "@type": "WebPage",
        "@id": pageId,
        url: pageUrl,
        name: caseStudy.title,
        description: caseStudy.description,
        dateModified: modified,
        isPartOf: ref("website"),
        about: { "@id": `${pageUrl}#app` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      },
      breadcrumb(`${pageUrl}#breadcrumb`, [homeCrumb, { name: "Projects", url: `${home}#projects` }, { name: "My Invoice", url: pageUrl }]),
      {
        "@type": "SoftwareApplication",
        "@id": `${pageUrl}#app`,
        name: "My Invoice",
        description: mi.description,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Android, iOS, Web",
        url: mi.url,
        ...(mi.playUrl ? { downloadUrl: mi.playUrl } : {}),
        author: ref("person"),
        creator: ref("person"),
        featureList: mi.features,
        screenshot: (mi.shots ?? []).map((s) => ({ "@type": "ImageObject", contentUrl: abs(s.src), caption: s.label })),
      },
    );
    return { "@context": "https://schema.org", "@graph": graph };
  }

  const page = landingBySlug(path.slice(1));
  if (!page) return { "@context": "https://schema.org", "@graph": [person(), website()] };
  graph.push(
    person(),
    website(),
    {
      "@type": "WebPage",
      "@id": pageId,
      url: pageUrl,
      name: page.title,
      description: page.description,
      dateModified: modified,
      inLanguage: "en",
      isPartOf: ref("website"),
      about: { "@id": `${pageUrl}#service` },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    },
    breadcrumb(`${pageUrl}#breadcrumb`, [homeCrumb, { name: "Services", url: `${home}#services` }, { name: page.serviceName, url: pageUrl }]),
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: page.serviceName,
      description: page.lead,
      url: pageUrl,
      serviceType: page.serviceName,
      provider: ref("person"),
      areaServed: regionPages.find((r) => r.slug === page.slug) ? regionAreas[regionPages.find((r) => r.slug === page.slug)!.region] : [...markets, { "@type": "Place", name: "Remote, worldwide" }],
    },
    faqNode(`${pageUrl}#faq`, page.faq),
  );
  return { "@context": "https://schema.org", "@graph": graph };
}
