"use client";

import { useEffect, useState, type ReactNode } from "react";

/** Cabeçalho flutuante que fica mais compacto e "vidro" quando a página rola. */
export function ScrollHeader({ children, className = "" }: { children: ReactNode; className?: string }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header data-scrolled={scrolled} className={`group/header ${className}`}>
      {children}
    </header>
  );
}
