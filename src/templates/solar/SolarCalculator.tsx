"use client";

import { useState } from "react";
import type { ClientConfig } from "@/lib/types";
import { whatsappLink } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const brl = (n: number) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

export function SolarCalculator({ client }: { client: ClientConfig }) {
  const tariff = client.solarCalculator?.tariff ?? 0.95;
  const sunHours = client.solarCalculator?.sunHours ?? 5;
  const [bill, setBill] = useState(450);

  const kwh = bill / tariff;
  const kwp = kwh / (sunHours * 30 * 0.8);
  const panels = Math.max(1, Math.ceil((kwp * 1000) / 550));
  const monthly = bill * 0.9;
  const yearly = monthly * 12;

  const message = `Olá! Simulei no site: minha conta de luz é de ${brl(bill)} por mês. Quero um orçamento de energia solar.`;

  return (
    <div className="rounded-3xl bg-white p-6 text-slate-900 shadow-2xl shadow-black/30 sm:p-8">
      <p className="text-sm font-semibold tracking-wide text-primary uppercase">Simulador de economia</p>
      <label htmlFor="bill" className="mt-2 block text-xl font-bold">
        Quanto você paga de luz por mês?
      </label>
      <div className="mt-5 flex items-baseline justify-between">
        <span className="text-4xl font-extrabold">{brl(bill)}</span>
        <span className="text-sm text-slate-500">arraste para ajustar</span>
      </div>
      <input
        id="bill"
        type="range"
        min={100}
        max={3000}
        step={10}
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
        className="mt-4 w-full accent-[var(--primary)]"
      />
      <div className="mt-6 grid grid-cols-3 gap-3 text-center">
        <Result label="Economia por ano" value={brl(yearly)} strong />
        <Result label="Sistema" value={`${kwp.toFixed(1).replace(".", ",")} kWp`} />
        <Result label="Placas" value={`${panels}`} />
      </div>
      <a
        href={whatsappLink(client, message)}
        target="_blank"
        rel="noreferrer"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-bold text-on-primary transition hover:brightness-105"
      >
        <WhatsAppIcon size={20} /> Receber orçamento grátis
      </a>
      <p className="mt-3 text-center text-xs text-slate-500">
        Estimativa de até 90% de economia. O valor final depende da visita técnica.
      </p>
    </div>
  );
}

function Result({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className={`rounded-xl p-3 ${strong ? "bg-primary/15" : "bg-slate-100"}`}>
      <div className={`font-extrabold ${strong ? "text-base sm:text-lg" : "text-base"}`}>{value}</div>
      <div className="mt-0.5 text-[11px] leading-tight text-slate-500">{label}</div>
    </div>
  );
}
