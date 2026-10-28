import { experience } from "@/data/experience";
import { faq } from "@/data/faq";
import { allServicePages, caseStudies, landingPages, regionPages } from "@/data/landing";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { skillGroups } from "@/data/skills";
import { HOME_DESCRIPTION, HOME_TITLE, pageMetas } from "./meta";

const home = `${profile.site}/`;
const abs = (p: string) => `${profile.site}${p}`;

const priority = (kind: string) => (kind === "home" ? "1.0" : kind === "service" ? "0.8" : "0.6");

export function buildSitemap(date = new Date().toISOString().slice(0, 10)) {
  const entries = pageMetas
    .map((m) => {
      const images =
        m.kind === "home"
          ? `\n    <image:image><image:loc>${abs("/og-image.jpg")}</image:loc><image:title>${profile.name}, ${profile.title}</image:title></image:image>`
          : m.kind === "case"
            ? (() => {
                const cs = caseStudies.find((c) => `/${c.slug}` === m.path);
                const pr = projects.find((p) => p.title === cs?.project);
                return [...(pr?.shots ?? []), ...(cs?.galleries ?? []).flatMap((g) => g.images)].map((x) => `\n    <image:image><image:loc>${abs(x.src)}</image:loc><image:caption>${pr?.title}: ${x.label}</image:caption></image:image>`).join("");
              })()
            : "";
      return `  <url>
    <loc>${m.canonical}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>${m.kind === "home" ? "monthly" : "yearly"}</changefreq>
    <priority>${priority(m.kind)}</priority>
    <xhtml:link rel="alternate" hreflang="en-GB" href="${m.canonical}"/>
    <xhtml:link rel="alternate" hreflang="en-US" href="${m.canonical}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${m.canonical}"/>${images}
  </url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries}
</urlset>
`;
}

export function buildLlmsTxt() {
  return `# ${profile.name}

> ${profile.name} is a ${profile.title} and ${profile.headline.toLowerCase()} based in Lahore, Pakistan, open to remote work. ${profile.tagline}

Canonical site: ${home}
Last updated: ${new Date().toISOString().slice(0, 10)}

## Key facts
- Name: ${profile.name}
- Role: ${profile.title}, ${profile.headline}
- Experience: ${profile.years}+ years building cross-platform mobile apps and web platforms
- Location: ${profile.location}
- Currently: Flutter Developer at DM Worx LLC, plus freelance full-stack projects
- Main product: My Invoice (Flutter app, React web portal and admin dashboard on a shared Firebase backend)
- Core stack: Flutter, Dart, React, Next.js, TypeScript, Firebase, Supabase, PostgreSQL, Stripe, PayPal, OpenAI API, Cloudflare Turnstile
- Contact: ${profile.email}, ${profile.phone} (WhatsApp)

## Services
${landingPages.map((p) => `- [${p.serviceName}](${abs(`/${p.slug}`)}): ${p.description}`).join("\n")}

## Clients in the UK, Europe and the USA
${regionPages.map((p) => `- [${p.serviceName}](${abs(`/${p.slug}`)}): ${p.description}`).join("\n")}
- Working pattern: remote from Lahore (UTC+5), English-language projects, calls booked in the overlap of the client's morning and the developer's afternoon or evening.

## Work
${caseStudies.map((c) => `- [${c.project} case study](${abs(`/${c.slug}`)}): ${c.description}`).join("\n")}
- [All projects](${home}#projects): ${projects.map((p) => p.title).join(", ")}

## Profile
- [About](${home}#about): summary and years of experience
- [Experience](${home}#experience): roles at DM Worx LLC, Cygnus Ventures, Solution Soul and Orbilon Technology
- [Skills](${home}#skills): mobile, web, backend, payments, AI, automation, security and cloud
- [FAQ](${home}#faq): common questions answered
- [Contact](${home}#contact): email, phone and WhatsApp

## Links
- LinkedIn: ${profile.linkedin}
- GitHub: ${profile.github}
- Resume (PDF): ${abs(profile.resume)}

## Optional
- [Full profile for language models](${abs("/llms-full.txt")})
`;
}

export function buildLlmsFullTxt() {
  return `# ${profile.name} - ${profile.title}

${HOME_TITLE}
${HOME_DESCRIPTION}

${profile.summary}

Location: ${profile.location}
Email: ${profile.email}
Phone / WhatsApp: ${profile.phone}
LinkedIn: ${profile.linkedin}
GitHub: ${profile.github}
Website: ${home}

## Services
${services.map((x) => `- ${x.title}: ${x.text}`).join("\n")}

## Service pages
${allServicePages
  .map(
    (p) =>
      `### ${p.serviceName} (${abs(`/${p.slug}`)})\n${p.lead}\n${p.includes.map((i) => `- ${i.title}: ${i.text}`).join("\n")}\n${p.faq.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n")}`,
  )
  .join("\n\n")}

## Experience
${experience
  .map(
    (r) =>
      `### ${r.role}, ${r.company} (${r.period}, ${r.place})\n${r.points.map((p) => `- ${p}`).join("\n")}`,
  )
  .join("\n\n")}

## Projects
${projects
  .map(
    (p) =>
      `### ${p.title}${p.url.startsWith("http") ? ` (${p.url})` : ""}\nStatus: ${p.status}\n${p.description}\nTech: ${p.technologies.join(", ")}\n${p.features.map((f) => `- ${f}`).join("\n")}`,
  )
  .join("\n\n")}

## Case studies
${caseStudies
  .map((c) => `### ${c.project} (${abs(`/${c.slug}`)})\n${c.lead}\n${c.platforms.map((x) => `- ${x.title}: ${x.text}`).join("\n")}\n${c.faq.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n")}`)
  .join("\n\n")}

## Skills
${skillGroups.map((g) => `- ${g.title}: ${g.items.join(", ")}`).join("\n")}

## FAQ
${faq.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}
`;
}
