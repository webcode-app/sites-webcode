import { ChevronDown } from "lucide-react";

export function Faq({ items, variant = "light" }: { items: { q: string; a: string }[]; variant?: "light" | "dark" }) {
  const dark = variant === "dark";
  return (
    <div className={`divide-y ${dark ? "divide-white/10" : "divide-black/10"}`}>
      {items.map((f, i) => (
        <details key={i} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold">
            {f.q}
            <ChevronDown className="shrink-0 transition group-open:rotate-180" size={20} />
          </summary>
          <p className={`mt-3 leading-relaxed ${dark ? "text-white/70" : "text-gray-600"}`}>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
