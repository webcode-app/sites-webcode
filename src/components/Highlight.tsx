import { splitHighlight } from "@/lib/utils";

export function Highlight({ text, className = "text-primary" }: { text: string; className?: string }) {
  return (
    <>
      {splitHighlight(text).map((p, i) =>
        p.highlight ? (
          <span key={i} className={className}>
            {p.text}
          </span>
        ) : (
          <span key={i}>{p.text}</span>
        ),
      )}
    </>
  );
}
