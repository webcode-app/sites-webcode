import type { CSSProperties } from "react";
import type { ClientConfig } from "./types";

export function whatsappLink(c: ClientConfig, message?: string) {
  let digits = c.contact.whatsapp.replace(/\D/g, "");
  if (!digits.startsWith("55")) digits = "55" + digits;
  const text =
    message ??
    c.contact.whatsappMessage ??
    `Olá! Vi o site da ${c.business.name} e gostaria de mais informações.`;
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}

export function mapsEmbedUrl(c: ClientConfig) {
  const q = c.contact.mapsQuery ?? `${c.business.name}, ${c.contact.address}`;
  return `https://www.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;
}

export function mapsLink(c: ClientConfig) {
  const q = c.contact.mapsQuery ?? `${c.business.name}, ${c.contact.address}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}

export function initials(name: string) {
  return name
    .split(/\s+/)
    .filter((w) => w.length > 2 || /^[A-Z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join("");
}

/**
 * Fundo com foto + degradê por baixo. Se a foto não carregar,
 * o degradê aparece no lugar e o site continua bonito.
 */
export function photoBg(url: string | undefined, fallback: string, overlay?: string): CSSProperties {
  const layers = [overlay, url ? `url("${url}")` : undefined, fallback].filter(Boolean);
  return {
    backgroundImage: layers.join(", "),
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
}

/** Transforma "Texto com *destaque*" em partes para colorir a palavra destacada. */
export function splitHighlight(text: string) {
  return text.split(/(\*[^*]+\*)/g).map((part) =>
    part.startsWith("*") && part.endsWith("*")
      ? { text: part.slice(1, -1), highlight: true }
      : { text: part, highlight: false },
  );
}

export function instagramUrl(handle: string) {
  return `https://instagram.com/${handle.replace(/^@/, "")}`;
}

/**
 * Para fotos do Unsplash: gera versões em vários tamanhos (o celular baixa a pequena).
 * Para outras URLs devolve só a original.
 */
export function imgSet(url: string, widths = [640, 960, 1400, 1920]) {
  if (!/images\.unsplash\.com/.test(url)) return { src: url };
  const at = (w: number) => {
    const u = new URL(url);
    u.searchParams.set("w", String(w));
    u.searchParams.set("auto", "format");
    if (!u.searchParams.has("q")) u.searchParams.set("q", "70");
    return u.toString();
  };
  return { src: at(widths[Math.floor(widths.length / 2)]), srcSet: widths.map((w) => `${at(w)} ${w}w`).join(", ") };
}
