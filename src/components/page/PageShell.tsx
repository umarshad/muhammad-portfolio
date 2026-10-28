import type { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";
import { Header } from "../Header";
import { SiteFooter } from "../SiteFooter";
import { WhatsAppFab } from "../WhatsAppFab";

// Shared frame for every inner page: header, content, footer and the WhatsApp button.
export function PageShell({ children }: { children: ReactNode }) {
  useReveal();
  return (
    <>
      <Header />
      <main className="lp">{children}</main>
      <div className="lp-foot"><SiteFooter /></div>
      <WhatsAppFab />
    </>
  );
}
