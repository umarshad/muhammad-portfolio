import { education, skillGroups } from "@/data/skills";
import { faq } from "@/data/faq";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

const url = `${profile.site}/`;
const id = (frag: string) => ({ "@id": `${url}#${frag}` });

export function buildJsonLd(modified = new Date().toISOString().slice(0, 10)) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${url}#person`,
        name: profile.name,
        jobTitle: profile.title,
        description: profile.tagline,
        url,
        email: `mailto:${profile.email}`,
        telephone: profile.phone,
        address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
        sameAs: [profile.linkedin, profile.github],
        knowsAbout: skillGroups.flatMap((g) => g.items.filter((i) => !i.includes("("))),
        alumniOf: { "@type": "CollegeOrUniversity", name: education.school },
        worksFor: { "@type": "Organization", name: "DM Worx LLC" },
        makesOffer: services.map((sv) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: sv.title, description: sv.text, provider: id("person") },
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${url}#website`,
        url,
        name: `${profile.name} | ${profile.title} Portfolio`,
        inLanguage: "en",
        publisher: id("person"),
      },
      {
        "@type": "ProfilePage",
        "@id": `${url}#profilepage`,
        url,
        name: `${profile.name} - ${profile.title}, ${profile.headline}`,
        dateModified: modified,
        isPartOf: id("website"),
        mainEntity: id("person"),
      },
      {
        "@type": "ItemList",
        "@id": `${url}#projects`,
        name: `Projects by ${profile.name}`,
        itemListElement: projects.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "CreativeWork",
            name: p.title,
            description: p.description,
            keywords: p.technologies.join(", "),
            author: id("person"),
            ...(p.url.startsWith("http") ? { url: p.url } : {}),
          },
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}
