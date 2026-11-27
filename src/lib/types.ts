/**
 * Formato do arquivo de cada cliente (src/clients/<slug>.ts).
 * Tudo que aparece no site sai daqui. Campos com "?" são opcionais:
 * se você não preencher, a seção simplesmente não aparece.
 */

export type TemplateId = "solar" | "arquitetura" | "personal";

/** Nome de um ícone do lucide.dev (ex.: "Sun", "Zap", "Dumbbell"). Veja src/components/Icon.tsx */
export type IconName = string;

export interface Review {
  author: string;
  rating: number; // 1 a 5
  text: string;
  date?: string; // ex.: "há 2 meses"
}

export interface ClientConfig {
  /** Endereço da prévia: seusite.vercel.app/<slug> */
  slug: string;
  /** Qual dos templates usar */
  template: TemplateId;

  business: {
    name: string;
    /** Frase curta embaixo do nome no rodapé/SEO */
    tagline: string;
    /** Descrição usada no Google (SEO) e no compartilhamento do link */
    description: string;
    /** URL ou caminho em /public. Sem logo? Deixe vazio e geramos um com as iniciais. */
    logoUrl?: string;
    city: string;
    state: string;
    /** ex.: "Arquiteta", "Personal Trainer", "Energia Solar" */
    category: string;
  };

  /** Cores em hexadecimal. primary = cor principal da marca. */
  colors: {
    primary: string;
    secondary?: string;
  };

  contact: {
    /** Só números, com DDD. ex.: "11987654321" */
    whatsapp: string;
    /** Mensagem que já vem escrita quando a pessoa clica no WhatsApp */
    whatsappMessage?: string;
    phone?: string;
    email?: string;
    /** Só o @, sem a URL. ex.: "studio.lima" */
    instagram?: string;
    address: string;
    /** O que buscar no Google Maps. Se vazio, usa o nome + endereço. */
    mapsQuery?: string;
    hours?: string[];
  };

  hero: {
    /** Use *asteriscos* para destacar uma palavra com a cor da marca */
    title: string;
    subtitle: string;
    image?: string;
    ctaLabel?: string;
    /** Selos curtos ao lado do botão. ex.: ["Atendimento em 24h", "Garantia de 25 anos"] */
    badges?: string[];
  };

  about?: {
    title?: string;
    text: string;
    image?: string;
    highlights?: string[];
  };

  services: { title: string; description: string; icon?: IconName }[];

  stats?: { value: string; label: string }[];

  steps?: { title: string; description: string }[];

  gallery?: { image: string; caption?: string }[];

  /** Usado pelo template "personal" */
  plans?: {
    name: string;
    price: string;
    period?: string;
    features: string[];
    highlight?: boolean;
  }[];

  /** Usado pelo template "solar": calculadora de economia no topo do site */
  solarCalculator?: {
    /** Tarifa média da distribuidora local em R$/kWh (ex.: 0.95) */
    tariff: number;
    /** Horas de sol pleno por dia na região (Brasil: 4.5 a 5.5) */
    sunHours?: number;
  };

  reviews: {
    rating: number; // nota média no Google, ex.: 4.9
    count: number; // total de avaliações
    googleUrl?: string; // link da ficha no Google Maps
    items: Review[];
  };

  faq?: { q: string; a: string }[];

  /**
   * Variações visuais para cada cliente não ficar com a mesma cara.
   * Tudo opcional: sem preencher, usa o padrão (noite + lado + sora + redondo).
   */
  design?: {
    /** "noite" = fundo escuro premium · "dia" = fundo claro e leve */
    theme?: "noite" | "dia";
    /** "lado" = título e simulador lado a lado · "centro" = título centralizado com foto grande e simulador numa seção própria */
    hero?: "lado" | "centro";
    /** Fonte dos títulos: "sora" (geométrica), "jakarta" (amigável), "grotesk" (técnica) */
    font?: "sora" | "jakarta" | "grotesk";
    /** "redondo" = cantos bem arredondados · "reto" = cantos mais secos, visual mais sóbrio */
    corners?: "redondo" | "reto";
  };
}
