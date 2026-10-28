import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/profile";
import { useScrolled } from "@/hooks/useScrolled";

export function Header() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="site-header__bar">
        <a href="#top" className="brand" aria-label={`${profile.name}, home`}>
          <span className="brand__mark">MU</span>
          <span>
            <span className="brand__name">{profile.name}</span>
            <span className="brand__role">{profile.title}</span>
          </span>
        </a>

        <nav className="nav-pill" aria-label="Primary">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="site-header__actions">
          <a href="#contact" className="btn btn--sm">
            Let&apos;s Talk <ArrowRight size={16} />
          </a>
          <button
            className="burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu${open ? " is-open" : ""}`}>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a href="#contact" className="btn" onClick={() => setOpen(false)}>
          Let&apos;s Talk <ArrowRight size={16} />
        </a>
      </div>
    </header>
  );
}
