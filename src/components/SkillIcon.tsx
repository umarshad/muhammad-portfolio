import type { SkillMeta } from "@/lib/skillMeta";

// Brand mark (simple-icons) when there is one, otherwise a matching generic icon.
export function SkillIcon({ meta }: { meta: SkillMeta }) {
  const Fallback = meta.Icon;
  return (
    <span className="sk__ico" style={{ ["--c" as string]: meta.color }} aria-hidden="true">
      {meta.brand ? (
        <svg viewBox="0 0 24 24" fill="currentColor"><path d={meta.brand.path} /></svg>
      ) : Fallback ? (
        <Fallback size={22} strokeWidth={1.8} />
      ) : null}
    </span>
  );
}
