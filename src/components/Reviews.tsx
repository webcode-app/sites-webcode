import type { ClientConfig } from "@/lib/types";
import { GoogleG } from "./GoogleG";
import { Stars } from "./Stars";

/** Bloco de avaliações do Google. variant "dark" para templates de fundo escuro. */
export function Reviews({
  client,
  variant = "light",
  title = "O que nossos clientes dizem",
  titleClassName = "",
}: {
  client: ClientConfig;
  variant?: "light" | "dark";
  title?: string;
  titleClassName?: string;
}) {
  const { reviews } = client;
  const dark = variant === "dark";
  const card = dark ? "bg-white/5 ring-1 ring-white/10" : "bg-white ring-1 ring-black/5 shadow-sm";
  const muted = dark ? "text-white/60" : "text-gray-500";

  return (
    <div>
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <h2 className={`max-w-xl text-3xl font-bold md:text-4xl ${titleClassName}`}>{title}</h2>
        <a
          href={reviews.googleUrl ?? "#"}
          target="_blank"
          rel="noreferrer"
          className={`flex items-center gap-4 rounded-2xl px-5 py-4 ${card}`}
        >
          <GoogleG size={32} />
          <span>
            <span className="flex items-center gap-2">
              <strong className="text-2xl">{reviews.rating.toFixed(1).replace(".", ",")}</strong>
              <Stars rating={reviews.rating} size={18} />
            </span>
            <span className={`text-sm ${muted}`}>{reviews.count} avaliações no Google</span>
          </span>
        </a>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {reviews.items.map((r, i) => (
          <figure key={i} className={`flex flex-col rounded-2xl p-6 ${card}`}>
            <div className="flex items-center justify-between">
              <Stars rating={r.rating} />
              <GoogleG size={18} />
            </div>
            <blockquote className={`mt-4 flex-1 leading-relaxed ${dark ? "text-white/85" : "text-gray-700"}`}>
              “{r.text}”
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-primary/15 font-semibold text-primary">
                {r.author[0]}
              </span>
              <span>
                <span className="block font-semibold">{r.author}</span>
                {r.date && <span className={`text-sm ${muted}`}>{r.date}</span>}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
