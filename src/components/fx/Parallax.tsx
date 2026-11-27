"use client";

import { m, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

/** Conteúdo que se desloca um pouco mais devagar que a página ao rolar. */
export function Parallax({ children, className = "", amount = 60 }: { children: ReactNode; className?: string; amount?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount]);
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <m.div style={{ y }} className="h-[calc(100%+120px)] -translate-y-[60px] will-change-transform">
        {children}
      </m.div>
    </div>
  );
}
