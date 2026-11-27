import type { ClientConfig } from "@/lib/types";

const client: ClientConfig = {
  slug: "modelo-solar",
  template: "solar",

  business: {
    name: "SolarMax Energia",
    tagline: "Energia limpa, conta leve.",
    description: "Projeto, instalação e homologação de energia solar em Campinas e região. Economize até 90% na conta de luz.",
    logoUrl: "",
    city: "Campinas",
    state: "SP",
    category: "Energia Solar",
  },

  colors: { primary: "#f59e0b" },

  contact: {
    whatsapp: "19999990000",
    whatsappMessage: "Olá! Vi o site e quero um orçamento de energia solar.",
    phone: "(19) 99999-0000",
    email: "contato@solarmax.com.br",
    instagram: "solarmaxenergia",
    address: "Av. Norte-Sul, 1500 - Cambuí, Campinas - SP",
    hours: ["Seg a Sex: 8h às 18h", "Sábado: 8h às 12h"],
  },

  hero: {
    title: "Reduza até *90%* da sua conta de luz com energia solar",
    subtitle: "Projeto completo, instalação em poucos dias e homologação com a concessionária. Você só aproveita a economia.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1800&q=70",
    ctaLabel: "Quero meu orçamento",
    badges: ["Visita técnica gratuita", "Financiamento em até 72x", "Garantia de 25 anos nas placas", "Homologação inclusa"],
  },

  solarCalculator: { tariff: 0.92, sunHours: 5 },

  stats: [
    { value: "+850", label: "sistemas instalados" },
    { value: "12 anos", label: "de experiência" },
    { value: "R$ 4 mi", label: "economizados por clientes" },
    { value: "4,9★", label: "nota no Google" },
  ],

  services: [
    { icon: "House", title: "Residencial", description: "Sistemas sob medida para casas, com payback médio de 3 a 4 anos." },
    { icon: "Store", title: "Comercial", description: "Reduza o custo fixo da sua empresa e ganhe previsibilidade." },
    { icon: "Tractor", title: "Rural e agronegócio", description: "Energia para irrigação, granjas e propriedades rurais." },
    { icon: "Wrench", title: "Manutenção e limpeza", description: "Mantenha seu sistema gerando 100% com manutenção preventiva." },
    { icon: "BatteryCharging", title: "Baterias e híbridos", description: "Energia mesmo quando a rede cai, com sistemas de armazenamento." },
    { icon: "Landmark", title: "Financiamento", description: "Parcelas que cabem no valor que você já paga de conta de luz." },
  ],

  steps: [
    { title: "Simulação", description: "Você manda sua conta de luz e a gente calcula a economia." },
    { title: "Visita técnica", description: "Avaliamos o telhado e fechamos o projeto ideal." },
    { title: "Instalação", description: "Equipe própria instala em 1 a 3 dias, com segurança." },
    { title: "Homologação", description: "Cuidamos de toda a burocracia com a concessionária." },
  ],

  about: {
    title: "Uma empresa de Campinas, para Campinas",
    text: "Somos uma equipe local de engenheiros e instaladores certificados. Desde 2014 ajudamos famílias e empresas da região a gerar a própria energia com equipamentos de primeira linha.",
    image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1200&q=70",
    highlights: ["Engenheiro responsável em todas as obras", "Equipe própria, sem terceirizados", "Monitoramento pelo aplicativo"],
  },

  gallery: [
    { image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=900&q=70", caption: "Residência · 6,6 kWp" },
    { image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=900&q=70", caption: "Casa em Valinhos · 4,4 kWp" },
    { image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=900&q=70", caption: "Comércio · 22 kWp" },
    { image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=900&q=70", caption: "Instalação em telhado cerâmico" },
    { image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&q=70", caption: "Fazenda · 75 kWp" },
    { image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=900&q=70", caption: "Galpão industrial · 110 kWp" },
  ],

  reviews: {
    rating: 4.9,
    count: 187,
    googleUrl: "https://maps.google.com",
    items: [
      { author: "Marcos Oliveira", rating: 5, date: "há 1 mês", text: "Minha conta veio de R$ 780 para R$ 62. Equipe pontual, organizada e explicou tudo direitinho." },
      { author: "Patrícia Lemos", rating: 5, date: "há 3 meses", text: "Do orçamento à homologação foram 25 dias. Atendimento excelente pelo WhatsApp." },
      { author: "Roberto Santana", rating: 5, date: "há 5 meses", text: "Instalaram na minha loja e já sinto a diferença no caixa. Recomendo de olhos fechados." },
    ],
  },

  faq: [
    { q: "Em quanto tempo o sistema se paga?", a: "Na maioria dos casos residenciais, entre 3 e 4 anos. Depois disso, a economia é praticamente lucro por mais de 20 anos." },
    { q: "Funciona em dia nublado?", a: "Sim. A geração diminui, mas não para. O sistema é dimensionado pela média anual de sol da sua região." },
    { q: "Preciso trocar meu telhado?", a: "Não. Instalamos em telhado cerâmico, metálico, fibrocimento e laje. Na visita técnica avaliamos a estrutura." },
    { q: "Vocês financiam?", a: "Sim, trabalhamos com os principais bancos e financeiras, com parcelas em até 72x." },
  ],
};

export default client;
