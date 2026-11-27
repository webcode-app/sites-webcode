import type { ClientConfig } from "@/lib/types";
import modeloArquitetura from "./modelo-arquitetura";
import modeloPersonal from "./modelo-personal";
import modeloSolar from "./modelo-solar";
import jsEnergiaSolar from "./js-energia-solar";
import metaSun from "./meta-sun";
// @imports (o comando "npm run novo-cliente" adiciona novos clientes aqui)

export const clients: ClientConfig[] = [
  modeloSolar,
  modeloArquitetura,
  modeloPersonal,
  metaSun,
  jsEnergiaSolar,
  // @lista
];

export function getClient(slug: string) {
  return clients.find((c) => c.slug === slug);
}

/**
 * Quando o cliente fecha: no projeto dele na Vercel, crie a variável de ambiente
 * CLIENT=<slug>. A home passa a ser o site dele, sem faixa de prévia, e liberado pro Google.
 */
export const productionClient = process.env.CLIENT ? getClient(process.env.CLIENT) : undefined;
