import type { ClientConfig } from "@/lib/types";
import { mapsEmbedUrl } from "@/lib/utils";

export function MapEmbed({ client, className = "" }: { client: ClientConfig; className?: string }) {
  return (
    <iframe
      title={`Mapa: ${client.business.name}`}
      src={mapsEmbedUrl(client)}
      className={`h-full min-h-72 w-full border-0 ${className}`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
