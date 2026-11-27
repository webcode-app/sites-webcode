import { ArrowRight, CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { Faq } from "@/components/Faq";
import { Highlight } from "@/components/Highlight";
import { Icon } from "@/components/Icon";
import { Logo } from "@/components/Logo";
import { MapEmbed } from "@/components/MapEmbed";
import { Reviews } from "@/components/Reviews";
import { Stars } from "@/components/Stars";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import type { ClientConfig } from "@/lib/types";
import { instagramUrl, photoBg, whatsappLink } from "@/lib/utils";
import { SolarCalculator } from "./SolarCalculator";

/** Template 1: empresas de energia solar. Visual: azul-noite + cor de destaque, calculadora de economia. */
export function SolarTemplate({ client: c }: { client: ClientConfig }) {
  const wa = whatsappLink(c);
  const nav = [
    ["Serviços", "#servicos"],
    ["Como funciona", "#como-funciona"],
    ["Projetos", "#projetos"],
    ["Avaliações", "#avaliacoes"],
    ["Contato", "#contato"],
  ];

  return (
    <div className="bg-slate-50 text-slate-900">
      {/* Cabeçalho */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/85 text-white backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#">
            <Logo client={c} textClassName="text-white" />
          </a>
          <nav className="hidden gap-7 text-sm text-white/75 lg:flex">
            {nav.map(([l, h]) => (
              <a key={h} href={h} className="hover:text-white">
                {l}
              </a>
            ))}
          </nav>
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-on-primary"
          >
            <WhatsAppIcon size={16} /> <span className="hidden sm:inline">Orçamento</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Hero + calculadora */}
      <section
        className="relative overflow-hidden text-white"
        style={photoBg(
          c.hero.image,
          "linear-gradient(135deg,#0f172a,#1e293b 60%,#0f172a)",
          "linear-gradient(100deg,rgba(2,6,23,.95) 20%,rgba(2,6,23,.7) 60%,rgba(2,6,23,.45))",
        )}
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:py-24 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <a
              href="#avaliacoes"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm ring-1 ring-white/15"
            >
              <Stars rating={c.reviews.rating} size={14} />
              <span>
                {c.reviews.rating.toFixed(1).replace(".", ",")} no Google · {c.reviews.count} avaliações
              </span>
            </a>
            <h1 className="mt-6 text-4xl leading-[1.08] font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <Highlight text={c.hero.title} />
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/75">{c.hero.subtitle}</p>
            {c.hero.badges && (
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {c.hero.badges.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-white/90">
                    <CheckCircle2 size={20} className="shrink-0 text-primary" /> {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <SolarCalculator client={c} />
        </div>
      </section>

      {/* Números */}
      {c.stats && (
        <section className="bg-primary text-on-primary">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-10 md:grid-cols-4">
            {c.stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold md:text-4xl">{s.value}</div>
                <div className="mt-1 text-sm opacity-80">{s.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Serviços */}
      <section id="servicos" className="mx-auto max-w-6xl px-5 py-20">
        <SectionTitle eyebrow="Serviços" title="Soluções completas em energia solar" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {c.services.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg">
              <span className="grid size-12 place-items-center rounded-xl bg-primary/15 text-primary">
                <Icon name={s.icon} size={24} />
              </span>
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Como funciona */}
      {c.steps && (
        <section id="como-funciona" className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle eyebrow="Como funciona" title="Do orçamento à conta reduzida, sem dor de cabeça" dark />
            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {c.steps.map((s, i) => (
                <li key={s.title} className="relative rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                  <span className="text-5xl font-extrabold text-primary/80">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-white/65">{s.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Sobre */}
      {c.about && (
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-2">
          <div
            className="aspect-[4/3] rounded-3xl shadow-xl"
            style={photoBg(c.about.image, "linear-gradient(135deg,var(--primary),#0f172a)")}
          />
          <div>
            <SectionTitle eyebrow="Quem somos" title={c.about.title ?? `Sobre a ${c.business.name}`} left />
            <p className="mt-5 text-lg leading-relaxed whitespace-pre-line text-slate-600">{c.about.text}</p>
            {c.about.highlights && (
              <ul className="mt-6 space-y-3">
                {c.about.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-primary" size={20} /> {h}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      )}

      {/* Projetos */}
      {c.gallery && (
        <section id="projetos" className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle eyebrow="Projetos" title="Instalações que já estão gerando economia" />
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
              {c.gallery.map((g, i) => (
                <figure
                  key={i}
                  className="group relative aspect-square overflow-hidden rounded-2xl"
                  style={photoBg(g.image, `linear-gradient(${135 + i * 30}deg,#1e293b,var(--primary))`)}
                >
                  {g.caption && (
                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-sm font-medium text-white">
                      {g.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Avaliações */}
      <section id="avaliacoes" className="mx-auto max-w-6xl px-5 py-20">
        <Reviews client={c} title="Quem instalou, recomenda" />
      </section>

      {/* FAQ */}
      {c.faq && (
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-5">
            <SectionTitle eyebrow="Dúvidas" title="Perguntas frequentes" />
            <div className="mt-10">
              <Faq items={c.faq} />
            </div>
          </div>
        </section>
      )}

      {/* CTA final */}
      <section className="px-5 py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 rounded-3xl bg-slate-950 px-6 py-14 text-center text-white md:px-16">
          <h2 className="max-w-2xl text-3xl font-extrabold md:text-4xl">
            Pare de pagar caro na conta de luz. <span className="text-primary">Fale com a gente hoje.</span>
          </h2>
          <p className="max-w-xl text-white/70">Orçamento sem compromisso, com simulação de economia e opções de financiamento.</p>
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-bold text-on-primary"
          >
            {c.hero.ctaLabel ?? "Quero meu orçamento"} <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="mx-auto grid max-w-6xl gap-8 px-5 pb-20 lg:grid-cols-2">
        <div className="space-y-5">
          <SectionTitle eyebrow="Contato" title="Onde estamos" left />
          <Info icon={<MapPin />} text={c.contact.address} />
          {c.contact.phone && <Info icon={<Phone />} text={c.contact.phone} />}
          {c.contact.email && <Info icon={<Mail />} text={c.contact.email} />}
          {c.contact.hours && <Info icon={<Clock />} text={c.contact.hours.join("\n")} />}
        </div>
        <div className="overflow-hidden rounded-3xl ring-1 ring-black/10">
          <MapEmbed client={c} />
        </div>
      </section>

      <footer className="bg-slate-950 py-10 text-white/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm md:flex-row">
          <Logo client={c} textClassName="text-white" />
          <p>{c.business.tagline}</p>
          <div className="flex gap-4">
            {c.contact.instagram && (
              <a href={instagramUrl(c.contact.instagram)} className="hover:text-white">
                @{c.contact.instagram}
              </a>
            )}
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionTitle({ eyebrow, title, dark, left }: { eyebrow: string; title: string; dark?: boolean; left?: boolean }) {
  return (
    <div className={left ? "" : "mx-auto max-w-2xl text-center"}>
      <p className="text-sm font-bold tracking-widest text-primary uppercase">{eyebrow}</p>
      <h2 className={`mt-2 text-3xl font-extrabold tracking-tight md:text-4xl ${dark ? "text-white" : ""}`}>{title}</h2>
    </div>
  );
}

function Info({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <p className="flex gap-4 text-slate-700">
      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary [&>svg]:size-5">{icon}</span>
      <span className="pt-2.5 whitespace-pre-line">{text}</span>
    </p>
  );
}
