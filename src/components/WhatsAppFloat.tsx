import type { ClientConfig } from "@/lib/types";
import { whatsappLink } from "@/lib/utils";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppFloat({ client }: { client: ClientConfig }) {
  return (
    <a
      href={whatsappLink(client)}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed right-5 bottom-5 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition hover:scale-105"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <WhatsAppIcon size={30} />
    </a>
  );
}
