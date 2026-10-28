import { siAndroid, siApple, siGithub, siJavascript, siMeta } from "simple-icons";
import type { SimpleIcon } from "simple-icons";
import {
  Bot, Boxes, GitBranch, GitPullRequest, Globe, Image, KeyRound, MessageSquareText, MonitorSmartphone,
  Cpu, ShieldCheck, Sparkles, TabletSmartphone, Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { projects } from "@/data/projects";
import { findTech } from "@/data/tech";
import type { Tech } from "@/data/tech";

export type SkillMeta = {
  name: string; // short display name
  detail?: string; // text from parentheses, e.g. "Auth, Firestore, FCM"
  tech?: Tech;
  brand?: SimpleIcon;
  Icon?: LucideIcon;
  color: string;
  usedIn: string[]; // project names that list this tool
};

// Skills with no entry in the tech list still get a proper icon.
const extras: { match: RegExp; brand?: SimpleIcon; Icon?: LucideIcon; color: string }[] = [
  { match: /^ios/i, brand: siApple, color: "#000000" },
  { match: /^android/i, brand: siAndroid, color: "#3ddc84" },
  { match: /^javascript/i, brand: siJavascript, color: "#c9a800" },
  { match: /^meta pixel/i, brand: siMeta, color: "#0467df" },
  { match: /^github/i, brand: siGithub, color: "#181717" },
  { match: /^progressive web/i, Icon: Globe, color: "#0b5a55" },
  { match: /^responsive/i, Icon: MonitorSmartphone, color: "#0b5a55" },
  { match: /^llm/i, Icon: Cpu, color: "#f55036" },
  { match: /^ai-assisted/i, Icon: Sparkles, color: "#c25a00" },
  { match: /^prompt/i, Icon: MessageSquareText, color: "#10a37f" },
  { match: /^ai image/i, Icon: Image, color: "#8e75b2" },
  { match: /^server-side token/i, Icon: ShieldCheck, color: "#0b5a55" },
  { match: /^bot and abuse/i, Icon: Bot, color: "#c25a00" },
  { match: /^ci\/cd/i, Icon: GitBranch, color: "#0b5a55" },
  { match: /^feature-first/i, Icon: Boxes, color: "#0b5a55" },
  { match: /^role-based/i, Icon: KeyRound, color: "#c25a00" },
  { match: /^code review/i, Icon: GitPullRequest, color: "#0b5a55" },
  { match: /^cross-device/i, Icon: TabletSmartphone, color: "#0b5a55" },
  { match: /workflow automation/i, Icon: Workflow, color: "#ea4b71" },
];

function usedIn(tech?: Tech): string[] {
  if (!tech) return [];
  const n = tech.name.toLowerCase();
  return projects
    .filter((p) => p.technologies.some((x) => { const y = x.toLowerCase(); return y === n || y.includes(n) || n.includes(y); }))
    .map((p) => p.title);
}

export function skillMeta(text: string): SkillMeta {
  const paren = text.match(/^(.*?)\s*\((.*)\)\s*$/);
  const name = paren ? paren[1] : text;
  const detail = paren ? paren[2] : undefined;
  const tech = findTech(text);
  // "LLM API integration (OpenAI, Gemini, Groq)" covers several providers: projects that list any of them.
  const llm = /^llm/i.test(text)
    ? projects.filter((p) => p.technologies.some((x) => /openai|gemini|groq/i.test(x))).map((p) => p.title)
    : undefined;
  if (tech) return { name, detail, tech, brand: tech.brand, Icon: tech.Icon, color: tech.brand ? `#${tech.brand.hex}` : tech.color ?? "#0b5a55", usedIn: llm ?? usedIn(tech) };
  const ex = extras.find((e) => e.match.test(text));
  return { name, detail, brand: ex?.brand, Icon: ex?.Icon ?? Sparkles, color: ex?.color ?? "#0b5a55", usedIn: llm ?? [] };
}
