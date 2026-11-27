"use client";

import { useEffect, useRef, useState } from "react";
import { tween } from "@/components/fx/tween";
import type { ClientConfig } from "@/lib/types";
import { whatsappLink } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const brl = (n: number) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
const MIN = 100;
const MAX = 3000;

/** Valor em reais que "rola" suavemente até o novo número. */
function Money({ value, className = "" }: { value: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const shown = useRef(value);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return tween(shown.current, value, 0.6, (n) => {
      shown.current = n;
      el.textContent = brl(n);
    });
  }, [value]);
  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {brl(value)}
    </span>
  );
}

export function SolarCalculator({ client }: { client: ClientConfig }) {
  const tariff = client.solarCalculator?.tariff ?? 0.95;
  const sunHours = client.solarCalculator?.sunHours ?? 5;
  const [bill, setBill] = useState(450);

  const kwh = bill / tariff;
  const kwp = kwh / (sunHours * 30 * 0.8);
  const panels = Math.max(1, Math.ceil((kwp * 1000) / 550));
  const monthly = bill * 0.9;
  const yearly = monthly * 12;
  const after = bill - monthly;
  const pct = ((bill - MIN) / (MAX - MIN)) * 100;

  const message = `Olá! Simulei no site: minha conta de luz é de ${brl(bill)} por mês. Quero um orçamento de energia solar.`;

  return (
    <div className="fx-beam fx-in rounded-[28px] [--d:.35s]">
      <div className="relative overflow-hidden rounded-[28px] bg-slate-900/70 p-6 text-white shadow-2xl shadow-black/50 ring-1 ring-white/10 backdrop-blur-xl sm:p-8">
        {/* brilho interno */}
        <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--primary)_45%,transparent),transparent_70%)]" />

        <div className="relative">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[.18em] text-primary uppercase">
            <span className="relative flex size-2">
              <span className="fx-ring absolute inset-0 rounded-full bg-primary" />
              <span className="relative size-2 rounded-full bg-primary" />
            </span>
            Simulador de economia
          </p>
          <label htmlFor="bill" className="mt-3 block text-xl font-semibold text-white/90">
            Quanto você paga de luz por mês?
          </label>

          <div className="mt-4 flex items-end justify-between gap-3">
            <Money value={bill} className="font-display-solar text-5xl font-bold tracking-tight" />
            <span className="pb-2 text-xs text-white/45">arraste ↔</span>
          </div>
          <input
            id="bill"
            type="range"
            min={MIN}
            max={MAX}
            step={10}
            value={bill}
            onChange={(e) => setBill(Number(e.target.value))}
            className="fx-range mt-5 w-full"
            style={{ "--pct": `${pct}%` } as React.CSSProperties}
          />

          {/* antes x depois */}
          <div className="mt-7 space-y-3">
            <Bar label="Conta hoje" value={bill} width={30 + (pct * 0.7)} tone="bg-white/25" />
            <Bar label="Com energia solar" value={after} width={(30 + pct * 0.7) * 0.1} tone="bg-gradient-to-r from-primary to-[color-mix(in_oklab,var(--primary),white_35%)]" />
          </div>

          <div className="mt-6 grid grid-cols-3 gap-2.5 text-center">
            <Result label="Economia por ano" strong>
              <Money value={yearly} />
            </Result>
            <Result label="Sistema">{`${kwp.toFixed(1).replace(".", ",")} kWp`}</Result>
            <Result label="Placas">{panels}</Result>
          </div>

          <a
            href={whatsappLink(client, message)}
            target="_blank"
            rel="noreferrer"
            className="fx-sheen mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 font-bold text-on-primary shadow-[0_10px_40px_-10px_var(--primary)] transition active:scale-[.98]"
          >
            <WhatsAppIcon size={20} /> Receber orçamento grátis
          </a>
          <p className="mt-3 text-center text-xs text-white/45">
            Estimativa de até 90% de economia. O valor final depende da visita técnica.
          </p>
        </div>
      </div>
    </div>
  );
}

function Bar({ label, value, width, tone }: { label: string; value: number; width: number; tone: string }) {
  return (
    <div>
      <div className="flex justify-between text-sm">
        <span className="text-white/60">{label}</span>
        <Money value={value} className="font-semibold" />
      </div>
      <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/5">
        <div className={`h-full rounded-full transition-[width] duration-500 ease-out ${tone}`} style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

function Result({ label, children, strong }: { label: string; children: React.ReactNode; strong?: boolean }) {
  return (
    <div className={`rounded-2xl p-3 ring-1 ${strong ? "bg-primary/15 ring-primary/30" : "bg-white/[.04] ring-white/10"}`}>
      <div className={`text-[15px] font-bold sm:text-lg ${strong ? "text-primary" : ""}`}>{children}</div>
      <div className="mt-0.5 text-[11px] leading-tight text-white/50">{label}</div>
    </div>
  );
}
