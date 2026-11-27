import type { ClientConfig } from "@/lib/types";

// Lead SOL-PVH-001 do CRM (Porto Velho - RO).
// FOTOS PROVISÓRIAS (Unsplash): trocar pelas fotos da ficha do Google / Instagram da Meta Sun.
// Cor provisória: conferir o logo da Meta Sun e trocar colors.primary.
const client: ClientConfig = {
  slug: "meta-sun",
  template: "solar",

  design: { theme: "dia", hero: "centro", font: "jakarta", corners: "redondo" },

  business: {
    name: "Meta Sun",
    tagline: "Energia solar com pós-venda de verdade.",
    description: "Projeto, instalação e acompanhamento de energia solar em Porto Velho. Nota 5,0 no Google, instalação rápida e pós-venda presencial.",
    logoUrl: "",
    city: "Porto Velho",
    state: "RO",
    category: "Energia Solar",
  },

  colors: { primary: "#ea580c" },

  contact: {
    whatsapp: "69993412188",
    whatsappMessage: "Olá, Vitor! Vi o site da Meta Sun e quero um orçamento de energia solar.",
    phone: "(69) 99341-2188",
    address: "Av. Eng. Anysio da Rocha Compasso, 5055 - Rio Madeira, Porto Velho - RO",
    mapsQuery: "Meta Sun Porto Velho",
    hours: ["Seg a Sex: 8h às 18h", "Sábado: 8h às 12h"],
  },

  hero: {
    title: "Energia solar em Porto Velho com *pós-venda* que não te abandona",
    subtitle: "Projeto, instalação e acompanhamento depois que as placas estão funcionando. Nossos clientes contam: instalado em menos de 30 dias após o contrato.",
    image: "https://images.unsplash.com/photo-1780445392792-556e5609c5ab?w=1600&q=70",
    ctaLabel: "Simular minha economia",
    badges: ["Nota 5,0 no Google", "Instalação rápida", "Acompanhamento pós-venda", "Ajuda com financiamento"],
  },

  solarCalculator: { tariff: 0.98, sunHours: 4.8 },

  stats: [
    { value: "5,0★", label: "nota no Google" },
    { value: "< 30 dias", label: "do contrato à instalação" },
    { value: "26", label: "avaliações de clientes" },
  ],

  services: [
    { icon: "House", title: "Residencial", description: "Sistemas sob medida para casas, para reduzir a conta de luz." },
    { icon: "Store", title: "Comercial", description: "Menos custo fixo de energia para o seu negócio." },
    { icon: "Landmark", title: "Financiamento", description: "Ajudamos a encontrar a melhor taxa para você pagar com a economia." },
    { icon: "HeartHandshake", title: "Pós-venda e manutenção", description: "Acompanhamento mensal depois da instalação, para o sistema gerar 100% e você nunca ficar sem resposta." },
  ],

  steps: [
    { title: "Simulação", description: "Você manda sua conta de luz e calculamos a economia." },
    { title: "Projeto e contrato", description: "Apresentamos o sistema ideal e as opções de pagamento." },
    { title: "Instalação", description: "Equipe instala e coloca o sistema para funcionar." },
    { title: "Acompanhamento", description: "Seguimos com você depois da instalação." },
  ],

  about: {
    title: "Uma empresa de Porto Velho que acompanha você",
    text: "A Meta Sun projeta e instala sistemas de energia solar em Porto Velho. O que nossos clientes mais destacam é o atendimento depois da venda: seguimos acompanhando o sistema e tirando dúvidas, mesmo um ano depois.",
    image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=1600&q=70",
    highlights: ["Sócios no atendimento", "Acompanhamento pós-venda mensal e presencial", "Ajuda com financiamento"],
  },

  gallery: [
    { image: "https://images.unsplash.com/photo-1780445392694-c95056ed12e2?w=1600&q=70", caption: "Instalação residencial" },
    { image: "https://images.unsplash.com/photo-1780445392692-a26e723dcf89?w=1600&q=70", caption: "Placas em telhado cerâmico" },
    { image: "https://images.unsplash.com/photo-1668097613572-40b7c11c8727?w=1600&q=70", caption: "Equipe em obra" },
    { image: "https://images.unsplash.com/photo-1637417494521-78b4d1d33029?w=1600&q=70", caption: "Casa com sistema completo" },
    { image: "https://images.unsplash.com/photo-1648135327756-b606e2eb8caa?w=1600&q=70", caption: "Segurança na instalação" },
    { image: "https://images.unsplash.com/photo-1655300256335-beef51a914fe?w=1600&q=70", caption: "Cliente atendido" },
  ],

  reviews: {
    rating: 5,
    count: 26,
    googleUrl: "https://www.google.com/maps/place/Meta+Sun/data=!4m6!3m5!1s0x9232430b2c99ad51:0x77d64cc29be48617!8m2!3d-8.7393622!4d-63.8702812!16s%2Fg%2F11y6d49x5p",
    items: [
      { author: "Vinicius Velozo", rating: 5, date: "há 1 ano", text: "Trabalho sensacional da empresa. Sempre muito atenciosos e dispostos a sanar todas nossas dúvidas. 29 dias após a assinatura do contrato as placas já estavam instaladas e funcionando. Recomendo!" },
      { author: "Jander Barbosa", rating: 5, date: "há 1 ano", text: "Excelente experiência! A minha grande preocupação era o atendimento pós-venda. E após 1 ano, continuo recebendo acompanhamento mensal e presencial." },
      { author: "Brado Invest", rating: 5, date: "há 1 ano", text: "Recomendo demais! Além de oferecerem um atendimento de alta qualidade, a empresa possui um excelente pós-venda. Inclusive, a entrega foi realizada antes do prazo." },
    ],
  },

  faq: [
    { q: "Funciona com o calor e as chuvas de Porto Velho?", a: "Sim. O sistema é dimensionado pela média de sol do ano na região, considerando o período chuvoso." },
    { q: "Vocês ajudam no financiamento?", a: "Sim. Ajudamos a buscar a melhor taxa para a parcela caber na economia da conta de luz." },
    { q: "E depois da instalação?", a: "Continuamos acompanhando o seu sistema e tirando dúvidas, como nossos clientes contam nas avaliações." },
  ],
};

export default client;
