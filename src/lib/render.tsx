import type { Metadata } from "next";
import { BrandVars } from "@/components/BrandVars";
import { DemoBanner } from "@/components/DemoBanner";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ArquiteturaTemplate } from "@/templates/arquitetura/ArquiteturaTemplate";
import { PersonalTemplate } from "@/templates/personal/PersonalTemplate";
import { SolarTemplate } from "@/templates/solar/SolarTemplate";
import type { ClientConfig } from "./types";

const templates = {
  solar: SolarTemplate,
  arquitetura: ArquiteturaTemplate,
  personal: PersonalTemplate,
} as const;

export function ClientSite({ client, demo }: { client: ClientConfig; demo: boolean }) {
  const Template = templates[client.template];
  return (
    <BrandVars client={client}>
      {demo && <DemoBanner client={client} />}
      <Template client={client} />
      <WhatsAppFloat client={client} />
      <JsonLd client={client} />
    </BrandVars>
  );
}

export function clientMetadata(client: ClientConfig, demo: boolean): Metadata {
  const title = `${client.business.name} | ${client.business.category} em ${client.business.city}`;
  return {
    title,
    description: client.business.description,
    openGraph: {
      title,
      description: client.business.description,
      images: client.hero.image ? [client.hero.image] : undefined,
      locale: "pt_BR",
      type: "website",
    },
    // Prévias não aparecem no Google até o cliente fechar.
    robots: demo ? { index: false, follow: false } : undefined,
  };
}
