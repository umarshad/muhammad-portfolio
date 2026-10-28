import { skillMeta } from "@/lib/skillMeta";
import { SkillIcon } from "./SkillIcon";

// One skill: brand icon, name and where it was actually used.
export function SkillCard({ text, index }: { text: string; index: number }) {
  const m = skillMeta(text);
  const line = m.detail ?? (m.usedIn.length ? `Used in ${m.usedIn.slice(0, 2).join(", ")}` : m.tech?.note);
  return (
    <div className="sk" style={{ ["--i" as string]: index, ["--c" as string]: m.color }}>
      <SkillIcon meta={m} />
      <span className="sk__txt">
        <b>{m.name}</b>
        {line && <small>{line}</small>}
      </span>
    </div>
  );
}
