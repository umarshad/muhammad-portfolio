import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import { heroSkills } from "@/data/profile";

export function HeroSkillCard() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % heroSkills.length), 3200);
    return () => clearInterval(id);
  }, []);
  const s = heroSkills[i];
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="skillcard" aria-hidden="true">
      <div className="skillcard__ico"><Sparkles size={18} /></div>
      <div className="skillcard__body" key={s.label}>
        <b>{s.label}</b>
        <span>{s.note}</span>
      </div>
      <div className="skillcard__count">
        {pad(i + 1)}<small>/{pad(heroSkills.length)}</small>
      </div>
    </div>
  );
}
