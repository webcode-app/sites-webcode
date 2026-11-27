import type { Metadata } from "next";
import Link from "next/link";
import { agency } from "@/agency";
import { clients, productionClient } from "@/clients";
import { ClientSite, clientMetadata } from "@/lib/render";

const templateLabel = { solar: "Energia solar", arquitetura: "Arquitetura", personal: "Personal trainer" };

export function generateMetadata(): Metadata {
  if (productionClient) return clientMetadata(productionClient, false);
  return { title: `Prévias | ${agency.name}`, robots: { index: false, follow: false } };
}

export default function Home() {
  // Site publicado no domínio do cliente: mostra direto o site dele, sem a faixa de prévia.
  if (productionClient) return <ClientSite client={productionClient} demo={false} />;

  // Senão, página interna com a lista de prévias (não aparece no Google).
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-16">
      <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">{agency.name}</p>
      <h1 className="mt-2 text-4xl font-bold">Prévias de sites</h1>
      <p className="mt-3 text-gray-600">
        Cada cartão é um site pronto para apresentar. O link para mandar ao prospect é o endereço do cartão.
      </p>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {clients.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/${c.slug}`}
              className="block rounded-2xl border border-gray-200 p-5 transition hover:border-gray-400 hover:shadow-md"
            >
              <span
                className="mb-4 block h-2 w-12 rounded-full"
                style={{ background: c.colors.primary }}
              />
              <strong className="block text-lg">{c.business.name}</strong>
              <span className="text-sm text-gray-500">
                {templateLabel[c.template]} · {c.business.city}/{c.business.state}
              </span>
              <span className="mt-3 block font-mono text-xs text-gray-400">/{c.slug}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
