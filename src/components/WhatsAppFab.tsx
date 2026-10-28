import { MessageCircle } from "lucide-react";
import { profile } from "@/data/profile";

export function WhatsAppFab() {
  return (
    <a className="wa-fab" href={profile.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
      <MessageCircle size={26} />
    </a>
  );
}
