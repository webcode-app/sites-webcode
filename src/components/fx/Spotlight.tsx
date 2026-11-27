"use client";

import type { HTMLAttributes, PointerEvent } from "react";

/** Card com uma luz suave que acompanha o mouse (efeito "spotlight"). */
export function Spotlight({ className = "", children, ...rest }: HTMLAttributes<HTMLDivElement>) {
  const move = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div onPointerMove={move} className={`fx-spot ${className}`} {...rest}>
      {children}
    </div>
  );
}
