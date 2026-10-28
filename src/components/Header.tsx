import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { ArrowRight, Download, Mail, Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/profile";
import { useHeaderScroll } from "@/hooks/useHeaderScroll";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { WhatsAppIcon } from "./WhatsAppIcon";

// Layout effect in the browser, plain effect during prerender.
const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;
const ids = navLinks.map((l) => l.href.replace("/#", ""));

export function Header() {
  const [open, setOpen] = useState(false);
  const { ref, scrolled, hidden, hold } = useHeaderScroll(open);
  const active = useScrollSpy(ids);
  const pill = useRef<HTMLElement>(null);
  const [mark, setMark] = useState<{ x: number; w: number } | null>(null);

  // A sliding marker sits behind the link of the section being read.
  useIsoLayoutEffect(() => {
    const link = active ? pill.current?.querySelector<HTMLElement>(`a[href="/#${active}"]`) : null;
    setMark(link ? { x: link.offsetLeft, w: link.offsetWidth } : null);
  }, [active]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Already on the home page: scroll up smoothly instead of reloading it.
  const toTop = (e: MouseEvent) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header ref={ref} className={`site-header${scrolled ? " is-scrolled" : ""}${hidden ? " is-hidden" : ""}`}>
      <div className="site-header__bar">
        <a href="/" className="brand" onClick={toTop} aria-label={`${profile.name}, back to top`}>
          <span className="brand__mark">MU</span>
          <span>
            <span className="brand__name">{profile.name}</span>
            <span className="brand__role">{profile.title}</span>
          </span>
        </a>

        <nav className="nav-pill" aria-label="Primary" ref={pill}>
          <i className="nav-pill__mark" aria-hidden="true" style={mark ? { transform: `translateX(${mark.x}px)`, width: mark.w, opacity: 1 } : undefined} />
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => hold()} aria-current={active === l.href.replace("/#", "") ? "location" : undefined}>{l.label}</a>
          ))}
        </nav>

        <div className="site-header__actions">
          <a href={profile.resume} className="hdr-resume" download title="Download resume (PDF)">
            <Download size={16} aria-hidden="true" /> <span>Resume</span>
          </a>
          <a href="/#contact" className="btn btn--sm" onClick={() => hold()}>
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
        <i className="site-header__progress" aria-hidden="true" />
      </div>

      {open && <button type="button" className="mobile-scrim" aria-label="Close menu" onClick={() => setOpen(false)} />}
      <div className={`mobile-menu${open ? " is-open" : ""}`}>
        {navLinks.map((l, i) => (
          <a key={l.href} href={l.href} onClick={() => { setOpen(false); hold(); }} aria-current={active === l.href.replace("/#", "") ? "location" : undefined}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            {l.label}
          </a>
        ))}
        <a href="/#contact" className="btn" onClick={() => setOpen(false)}>
          Let&apos;s Talk <ArrowRight size={16} />
        </a>
        <div className="mobile-menu__quick">
          <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={18} /> WhatsApp</a>
          <a href={`mailto:${profile.email}`}><Mail size={18} aria-hidden="true" /> Email</a>
          <a href={profile.resume} download><Download size={18} aria-hidden="true" /> Resume</a>
        </div>
      </div>
    </header>
  );
}
