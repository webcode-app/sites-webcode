"use client";

import { m, useScroll, useSpring } from "motion/react";
import { useRef, type ReactNode } from "react";

/**
 * Linha que vai se preenchendo conforme a pessoa rola a seção
 * (horizontal no computador, vertical no celular).
 */
export function ScrollLine({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 55%"] });
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* trilho */}
      <div aria-hidden className="absolute top-7 bottom-7 left-[27px] w-px bg-white/10 lg:top-[27px] lg:right-[12%] lg:bottom-auto lg:left-[12%] lg:h-px lg:w-auto" />
      <m.div
        aria-hidden
        style={{ scaleY: p }}
        className="absolute top-7 bottom-7 left-[27px] w-px origin-top bg-gradient-to-b from-primary to-primary/30 shadow-[0_0_12px_var(--primary)] lg:hidden"
      />
      <m.div
        aria-hidden
        style={{ scaleX: p }}
        className="absolute top-[27px] right-[12%] left-[12%] hidden h-px origin-left bg-gradient-to-r from-primary to-primary/30 shadow-[0_0_12px_var(--primary)] lg:block"
      />
      {children}
    </div>
  );
}
