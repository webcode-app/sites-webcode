/** Animação numérica mínima (sem biblioteca): chama onUpdate a cada quadro até chegar no valor. */
export function tween(from: number, to: number, duration: number, onUpdate: (n: number) => void) {
  const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || from === to) {
    onUpdate(to);
    return () => {};
  }
  const start = performance.now();
  const ease = (t: number) => 1 - Math.pow(1 - t, 4);
  let raf = requestAnimationFrame(function step(now) {
    const t = Math.min(1, (now - start) / (duration * 1000));
    onUpdate(from + (to - from) * ease(t));
    if (t < 1) raf = requestAnimationFrame(step);
  });
  return () => cancelAnimationFrame(raf);
}
