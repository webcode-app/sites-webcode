import type { ClientConfig } from "@/lib/types";

const client: ClientConfig = {
  slug: "modelo-personal",
  template: "personal",

  business: {
    name: "Lucas Rocha Personal",
    tagline: "Treino personalizado com resultado",
    description: "Personal trainer em Curitiba. Treino individual, em dupla e consultoria on-line para emagrecimento, hipertrofia e saúde.",
    logoUrl: "",
    city: "Curitiba",
    state: "PR",
    category: "Personal Trainer",
  },

  colors: { primary: "#c6f432" },

  contact: {
    whatsapp: "41999990000",
    whatsappMessage: "Fala, Lucas! Vi seu site e quero agendar uma aula experimental.",
    phone: "(41) 99999-0000",
    instagram: "lucasrocha.personal",
    address: "Rua Padre Anchieta, 2000 - Bigorrilho, Curitiba - PR",
    hours: ["Seg a Sex: 6h às 21h", "Sábado: 8h às 12h"],
  },

  hero: {
    title: "Seu corpo. Seu ritmo. *Seu resultado.*",
    subtitle: "Treino personalizado com acompanhamento de perto para você emagrecer, ganhar força e ter mais disposição no dia a dia.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1800&q=70",
    ctaLabel: "Agendar aula grátis",
    badges: ["CREF 012345-G/PR", "Avaliação física inclusa", "Presencial ou on-line"],
  },

  stats: [
    { value: "+8", label: "anos de experiência" },
    { value: "+300", label: "alunos atendidos" },
    { value: "-2.500kg", label: "eliminados pelos alunos" },
    { value: "5,0★", label: "no Google" },
  ],

  about: {
    title: "Prazer, Lucas Rocha",
    text: "Sou educador físico formado pela UFPR e especialista em fisiologia do exercício. Já ajudei mais de 300 pessoas a mudarem de vida com treino inteligente, sem dietas malucas e respeitando a rotina de cada um.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=70",
    highlights: ["Especialista em emagrecimento", "Treino para iniciantes e 40+", "Acompanhamento pelo WhatsApp", "Reavaliação a cada 30 dias"],
  },

  services: [
    { icon: "Dumbbell", title: "Personal individual", description: "Treino 100% focado em você, na academia ou no seu condomínio." },
    { icon: "Users", title: "Treino em dupla", description: "Treine com quem você gosta e divida o investimento." },
    { icon: "Smartphone", title: "Consultoria on-line", description: "Planilha personalizada no app, vídeos dos exercícios e suporte." },
    { icon: "Flame", title: "Emagrecimento", description: "Protocolos de treino para queimar gordura com saúde." },
    { icon: "HeartPulse", title: "Saúde e mobilidade", description: "Para quem quer sair do sedentarismo e acabar com as dores." },
    { icon: "Trophy", title: "Performance", description: "Preparação para corrida, provas e esportes." },
  ],

  gallery: [
    { image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=70", caption: "Ricardo · -14kg" },
    { image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=70", caption: "Fernanda · +força" },
    { image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=70", caption: "Treino funcional" },
    { image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=70", caption: "Camila · -9kg" },
  ],

  plans: [
    { name: "On-line", price: "R$ 149", period: "/mês", features: ["Treino no aplicativo", "Vídeos dos exercícios", "Ajustes a cada 30 dias", "Suporte pelo WhatsApp"] },
    { name: "Personal 2x", price: "R$ 690", period: "/mês", highlight: true, features: ["2 treinos presenciais por semana", "Avaliação física mensal", "Plano de treino extra para os outros dias", "Suporte pelo WhatsApp"] },
    { name: "Personal 3x", price: "R$ 950", period: "/mês", features: ["3 treinos presenciais por semana", "Avaliação física mensal", "Orientação de hábitos", "Prioridade de horários"] },
  ],

  reviews: {
    rating: 5.0,
    count: 92,
    googleUrl: "https://maps.google.com",
    items: [
      { author: "Fernanda Castro", rating: 5, date: "há 1 mês", text: "Em 4 meses perdi 9kg e nunca me senti tão disposta. O Lucas é super atencioso e motivador." },
      { author: "Ricardo Alves", rating: 5, date: "há 2 meses", text: "Já tinha tentado de tudo. Com o acompanhamento dele finalmente consegui constância." },
      { author: "Mariana Teixeira", rating: 5, date: "há 3 meses", text: "Faço a consultoria on-line e funciona muito bem. Treinos bem explicados e ele responde rápido." },
    ],
  },

  faq: [
    { q: "Nunca treinei. Posso começar?", a: "Pode e deve! O treino é montado para o seu nível e evolui no seu ritmo." },
    { q: "Onde são os treinos?", a: "Na academia parceira no Bigorrilho, no seu condomínio ou ao ar livre. Também atendo on-line." },
    { q: "A aula experimental é grátis mesmo?", a: "Sim. Você faz uma aula, conhece o método e só depois decide." },
  ],
};

export default client;
