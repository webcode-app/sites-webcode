import type { ClientConfig } from "@/lib/types";

const client: ClientConfig = {
  slug: "modelo-arquitetura",
  template: "arquitetura",

  business: {
    name: "Helena Prado Arquitetura",
    tagline: "Arquitetura e interiores",
    description: "Escritório de arquitetura e design de interiores em Belo Horizonte. Projetos residenciais e comerciais com acompanhamento de obra.",
    logoUrl: "",
    city: "Belo Horizonte",
    state: "MG",
    category: "Arquitetura e Interiores",
  },

  colors: { primary: "#a0643c" },

  contact: {
    whatsapp: "31999990000",
    whatsappMessage: "Olá, Helena! Vi seu site e gostaria de conversar sobre um projeto.",
    phone: "(31) 99999-0000",
    email: "contato@helenaprado.arq.br",
    instagram: "helenaprado.arq",
    address: "Rua Antônio de Albuquerque, 330 - Savassi, Belo Horizonte - MG",
  },

  hero: {
    title: "Espaços que contam *a sua* história",
    subtitle: "Projetos residenciais e de interiores pensados do conceito ao último detalhe, com acompanhamento de obra.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2000&q=70",
    ctaLabel: "Agendar conversa",
  },

  about: {
    title: "Arquitetura com afeto, técnica e prazo",
    text: "Sou a Helena, arquiteta formada pela UFMG, com 10 anos de experiência em projetos residenciais e comerciais.\n\nAcredito que cada projeto começa ouvindo: como você vive, o que você ama e o que precisa mudar. A partir daí, desenho espaços funcionais, bonitos e que cabem no seu orçamento.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=70",
  },

  stats: [
    { value: "120+", label: "projetos entregues" },
    { value: "10", label: "anos de experiência" },
    { value: "5,0", label: "nota no Google" },
  ],

  services: [
    { title: "Projeto arquitetônico", description: "Casas e edificações do estudo preliminar ao projeto executivo e aprovação na prefeitura." },
    { title: "Design de interiores", description: "Ambientes completos com layout, marcenaria, iluminação e especificação de acabamentos." },
    { title: "Reforma de apartamentos", description: "Integração de ambientes e modernização com o mínimo de transtorno." },
    { title: "Acompanhamento de obra", description: "Visitas técnicas e gestão de fornecedores para garantir que o projeto saia do papel como foi desenhado." },
    { title: "Consultoria on-line", description: "Para quem quer orientação profissional em um ambiente específico, de qualquer lugar do Brasil." },
  ],

  steps: [
    { title: "Briefing", description: "Uma conversa para entender sua rotina, gostos e orçamento." },
    { title: "Estudo e 3D", description: "Apresento o conceito com imagens realistas para você aprovar." },
    { title: "Executivo", description: "Detalhamento técnico completo para fornecedores e obra." },
    { title: "Obra e entrega", description: "Acompanho a execução até o último quadro na parede." },
  ],

  gallery: [
    { image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=70", caption: "Casa Lagoa · 380 m²" },
    { image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=70", caption: "Apartamento Lourdes" },
    { image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=70", caption: "Cozinha integrada" },
    { image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1100&q=70", caption: "Living Sion" },
    { image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1100&q=70", caption: "Suíte master" },
  ],

  reviews: {
    rating: 5.0,
    count: 64,
    googleUrl: "https://maps.google.com",
    items: [
      { author: "Juliana Ferraz", rating: 5, date: "há 2 meses", text: "A Helena entendeu exatamente o que a gente queria. O apartamento ficou mais bonito do que imaginávamos e dentro do prazo." },
      { author: "Carlos Menezes", rating: 5, date: "há 4 meses", text: "Profissional atenciosa e muito organizada. O acompanhamento da obra fez toda a diferença." },
      { author: "Ana Beatriz Rocha", rating: 5, date: "há 6 meses", text: "Fiz a consultoria on-line para minha sala e foi incrível. Recomendo demais!" },
    ],
  },

  faq: [
    { q: "Quanto custa um projeto?", a: "Depende do tamanho e do escopo. Depois da primeira conversa envio uma proposta detalhada, sem compromisso." },
    { q: "Atende fora de Belo Horizonte?", a: "Sim. Projetos de interiores e consultorias podem ser feitos 100% on-line para todo o Brasil." },
  ],
};

export default client;
