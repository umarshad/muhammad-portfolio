import { ChevronRight } from "lucide-react";

export function Breadcrumbs({ trail }: { trail: { name: string; href?: string }[] }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <ol>
        {trail.map((t, i) => (
          <li key={t.name}>
            {t.href ? <a href={t.href}>{t.name}</a> : <span aria-current="page">{t.name}</span>}
            {i < trail.length - 1 && <ChevronRight size={14} aria-hidden="true" />}
          </li>
        ))}
      </ol>
    </nav>
  );
}
