import type { ClientConfig } from "@/lib/types";
import { initials } from "@/lib/utils";

export function Logo({
  client,
  className = "",
  textClassName = "",
}: {
  client: ClientConfig;
  className?: string;
  textClassName?: string;
}) {
  const { name, logoUrl } = client.business;
  if (logoUrl) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={logoUrl} alt={name} className={`h-10 w-auto ${className}`} />;
  }
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary text-sm font-bold text-on-primary">
        {initials(name)}
      </span>
      <span className={`text-lg leading-tight font-bold ${textClassName}`}>{name}</span>
    </span>
  );
}
