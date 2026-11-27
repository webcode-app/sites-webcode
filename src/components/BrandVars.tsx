import type { ReactNode } from "react";
import type { ClientConfig } from "@/lib/types";

/** Texto legível (preto ou branco) sobre a cor da marca. */
function onColor(hex: string) {
  const h = hex.replace("#", "");
  const n = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return (r * 299 + g * 587 + b * 114) / 1000 > 150 ? "#0b0b0b" : "#ffffff";
}

/** Aplica as cores do cliente como variáveis CSS para todo o site. */
export function BrandVars({ client, children, className = "" }: { client: ClientConfig; children: ReactNode; className?: string }) {
  const { primary, secondary } = client.colors;
  const style = {
    "--primary": primary,
    "--on-primary": onColor(primary),
    "--secondary": secondary ?? primary,
  } as React.CSSProperties;
  return (
    <div style={style} className={className}>
      {children}
    </div>
  );
}
