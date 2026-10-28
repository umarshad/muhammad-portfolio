import { profile } from "@/data/profile";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppFab() {
  return (
    <a className="wa-fab" href={profile.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
      <WhatsAppIcon size={30} />
    </a>
  );
}
