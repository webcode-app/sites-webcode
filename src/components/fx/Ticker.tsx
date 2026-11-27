"use client";

import { useEffect, useRef, useState } from "react";
import { tween } from "./tween";

/**
 * Número que sobe até o valor quando aparece na tela.
 * Aceita textos como "+850", "12 anos", "R$ 4 mi", "4,9★", "1.200".
 * O HTML já sai com o valor final (bom para Google e para quem está sem JS).
 */
export function Ticker({ value, className = "" }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setInView(true), io.disconnect()), { rootMargin: "-10% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const m = value.match(/^(\D*?)(\d+(?:[.,]\d+)*)(.*)$/);

  useEffect(() => {
    if (!m || !inView || !ref.current) return;
    const [, prefix, raw, suffix] = m;
    const thousands = /^\d{1,3}(\.\d{3})+$/.test(raw);
    const decimals = !thousands && /[.,]/.test(raw) ? raw.split(/[.,]/)[1].length : 0;
    const target = thousands ? Number(raw.replace(/\./g, "")) : Number(raw.replace(",", "."));
    const el = ref.current;
    const fmt = (n: number) =>
      prefix + n.toLocaleString("pt-BR", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;
    return tween(0, target, 1.8, (n) => (el.textContent = fmt(n)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {value}
    </span>
  );
}
