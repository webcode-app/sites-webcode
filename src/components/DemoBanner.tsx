import { agency } from "@/agency";
import type { ClientConfig } from "@/lib/types";

/** Faixa fina no topo que só aparece nas prévias (some quando o site é publicado no domínio do cliente). */
export function DemoBanner({ client }: { client: ClientConfig }) {
  return (
    <div className="relative z-50 bg-neutral-950 px-4 py-2 text-center text-xs text-white/80 sm:text-sm">
      ✨ Prévia exclusiva criada para <strong className="text-white">{client.business.name}</strong> por{" "}
      <a href={agency.site} className="underline underline-offset-2 hover:text-white">
        {agency.name}
      </a>
    </div>
  );
}
