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
