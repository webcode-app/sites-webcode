import type { ClientConfig } from "@/lib/types";

// Lead SOL-PVH-002 do CRM (Porto Velho - RO).
// FOTOS PROVISÓRIAS (Unsplash): trocar por 6 das 36 fotos da ficha do Google.
// Cor provisória: conferir o logo ou a fachada e trocar colors.primary.
const client: ClientConfig = {
  slug: "js-energia-solar",
  template: "solar",

  design: { theme: "noite", hero: "lado", font: "grotesk", corners: "reto" },

  business: {
    name: "JS Energia Solar",
    tagline: "Energia solar em Porto Velho",
    description: "Energia solar em Porto Velho - RO. Nota 4,9 no Google com 79 avaliações.",
    logoUrl: "",
    city: "Porto Velho",
    state: "RO",
    category: "Energia solar",
  },

  colors: { primary: "#22c55e" },

  contact: {
    whatsapp: "69999452932",
    whatsappMessage: "Olá, Jhonata! Vi o site e quero um orçamento de energia solar.",
    phone: "(69) 99945-2932",
    address: "R. Duque de Caxias, 2104 - São Cristóvão, Porto Velho - RO, 76804-184",
    mapsQuery: "JS Energia Solar Porto Velho",
  },

  hero: {
    title: "Sua conta de luz de *R$\u00a0800 para R$\u00a069*: energia solar em Porto Velho",
    subtitle: "Projeto, instalação, ajuda no financiamento com a menor taxa e suporte do começo ao fim. Nota 4,9 no Google.",
    image: "https://images.unsplash.com/photo-1694327671725-e2a81cda3436?w=1600&q=70",
    ctaLabel: "Quero meu orçamento",
    badges: ["Nota 4,9 no Google", "Atendimento local", "Financiamento facilitado", "Suporte do pré ao pós-venda"],
  },

  solarCalculator: { tariff: 0.98, sunHours: 4.8 },

  stats: [
    { value: "4,9★", label: "nota no Google" },
    { value: "79", label: "avaliações de clientes" },
    { value: "-91%", label: "na conta de um cliente" },
    { value: "R$ 69", label: "conta que era de R$ 800" },
  ],

  services: [
    { icon: "House", title: "Residencial", description: "Sistemas sob medida para casas, para reduzir a conta de luz." },
    { icon: "Store", title: "Comercial", description: "Menos custo fixo de energia para o seu negócio." },
    { icon: "Tractor", title: "Rural", description: "Energia para propriedades rurais, irrigação e granjas." },
    { icon: "Landmark", title: "Financiamento", description: "Indicamos o banco com a menor taxa, para a parcela caber na economia da conta." },
    { icon: "Wrench", title: "Manutenção", description: "Limpeza e manutenção para o sistema gerar 100%." },
  ],

  steps: [
    { title: "Simulação", description: "Você manda sua conta de luz e calculamos a economia." },
    { title: "Projeto", description: "Apresentamos o sistema ideal e as formas de pagamento." },
    { title: "Instalação", description: "Equipe instala e deixa tudo funcionando." },
    { title: "Homologação", description: "Cuidamos da burocracia com a concessionária." },
  ],

  about: {
    title: "Uma empresa de Porto Velho, com clientes que recomendam",
    text: "A JS Energia Solar instala sistemas fotovoltaicos em Porto Velho com atendimento próximo do Jhonata e equipe, da pré-venda ao pós-venda. Ajudamos a escolher o banco com a menor taxa e cuidamos de tudo para o sistema funcionar.",
    image: "https://images.unsplash.com/photo-1660330589257-813305a4a383?w=1600&q=70",
  },

  gallery: [
    { image: "https://images.unsplash.com/photo-1780445392628-d6f5b9e5609b?w=1600&q=70" },
    { image: "https://images.unsplash.com/photo-1768839722298-0491a671634d?w=1600&q=70" },
    { image: "https://images.unsplash.com/photo-1763114613273-ec505136d03a?w=1600&q=70" },
    { image: "https://images.unsplash.com/photo-1630608354129-6a7704150401?w=1600&q=70" },
    { image: "https://images.unsplash.com/photo-1583345237708-add35a664d77?w=1600&q=70" },
    { image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1600&q=70" },
  ],

  reviews: {
    rating: 4.9,
    count: 79,
    googleUrl: "https://www.google.com/maps/place/?q=place_id:ChIJ95LtXFDdMogR25cP_sOgkio",
    items: [
      { author: "Maurivam Souza", rating: 5, date: "há 8 meses", text: "Cumpriram o prazo de entrega e instalação, fizeram todos os trâmites financeiros, me indicaram o melhor banco com menor taxa, minha conta reduziu de 800 pra 69 reais." },
      { author: "Samirg Cordeiro", rating: 5, date: "há um ano", text: "Profissionalismo, perfeição e segurança definem a JS. Desde a pré-venda tive um suporte integral e absoluto. O Jhonata e sua equipe são extremamente acessíveis, pacientes e gentis." },
      { author: "Gilma José da Silva", rating: 5, date: "há um ano", text: "Eu não tinha conhecimento sobre energia solar, fiquei preocupada no início, mas não tive nenhum problema com minha instalação. Fui muito bem atendida e estou muito satisfeita com o resultado." },
    ],
  },

  faq: [
    { q: "Em quanto tempo o sistema se paga?", a: "Depende do consumo e da tarifa, mas em casas costuma ficar entre 3 e 5 anos. Fazemos a conta para o seu caso." },
    { q: "Funciona em dia nublado?", a: "Sim. A geração diminui, mas não para. O sistema é dimensionado pela média de sol do ano." },
    { q: "Vocês ajudam no financiamento?", a: "Sim, ajudamos a encontrar uma parcela que caiba na economia da conta." },
  ],
};

export default client;
