import { experience } from "@/data/experience";
import { faq } from "@/data/faq";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

const home = `${profile.site}/`;

export function buildSitemap(date = new Date().toISOString().slice(0, 10)) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${home}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;
}

export function buildLlmsTxt() {
  return `# ${profile.name}

> ${profile.name} is a ${profile.title} and ${profile.headline.toLowerCase()} based in Lahore, Pakistan, open to remote work. ${profile.tagline}

Canonical site: ${home}

## Pages
- [About](${home}#about): summary and years of experience
- [Experience](${home}#experience): roles at DM Worx LLC, Cygnus Ventures, Solution Soul and Orbilon Technology
- [Projects](${home}#projects): ${projects.map((p) => p.title).join(", ")}
- [Skills](${home}#skills): mobile, web, backend, payments, AI, automation and cloud
- [FAQ](${home}#faq): common questions answered
- [Contact](${home}#contact): email, phone and WhatsApp

## Contact
- Email: ${profile.email}
- Phone / WhatsApp: ${profile.phone}
- LinkedIn: ${profile.linkedin}
- GitHub: ${profile.github}

## Optional
- [Full profile for language models](${profile.site}/llms-full.txt)
`;
}

export function buildLlmsFullTxt() {
  return `# ${profile.name} - ${profile.title}

${profile.summary}

Location: ${profile.location}
Email: ${profile.email}
Phone / WhatsApp: ${profile.phone}
LinkedIn: ${profile.linkedin}
GitHub: ${profile.github}
Website: ${home}

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

## Skills
${skillGroups.map((g) => `- ${g.title}: ${g.items.join(", ")}`).join("\n")}

## FAQ
${faq.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}
`;
}
