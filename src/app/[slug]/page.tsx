import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { clients, getClient, productionClient } from "@/clients";
import { ClientSite, clientMetadata } from "@/lib/render";

export const dynamicParams = false;

export function generateStaticParams() {
  // No modo "site do cliente" (variável CLIENT definida), só a home existe.
  if (productionClient) return [{ slug: "_" }];
  return clients.map((c) => ({ slug: c.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const client = getClient((await params).slug);
  return client ? clientMetadata(client, true) : {};
}

export default async function Page({ params }: Props) {
  const client = productionClient ? undefined : getClient((await params).slug);
  if (!client) notFound();
  return <ClientSite client={client} demo />;
}
