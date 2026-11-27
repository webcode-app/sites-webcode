import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Highlight } from "@/components/Highlight";
import { Logo } from "@/components/Logo";
import { MapEmbed } from "@/components/MapEmbed";
import { Reviews } from "@/components/Reviews";
import { Stars } from "@/components/Stars";
import { Faq } from "@/components/Faq";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import type { ClientConfig } from "@/lib/types";
import { instagramUrl, photoBg, whatsappLink } from "@/lib/utils";

/** Template 2: arquitetos e designers de interiores. Visual: editorial, claro, serifado, muita foto. */
export function ArquiteturaTemplate({ client: c }: { client: ClientConfig }) {
  const wa = whatsappLink(c);

  return (
    <div className="bg-[#f6f3ee] text-stone-900">
      {/* Hero em tela cheia */}
      <section
        className="relative flex min-h-[92svh] flex-col text-white"
        style={photoBg(
          c.hero.image,
          "linear-gradient(160deg,#57534e,#292524)",
          "linear-gradient(180deg,rgba(0,0,0,.45),rgba(0,0,0,.1) 40%,rgba(0,0,0,.65))",
        )}
      >
        <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
          <Logo client={c} textClassName="font-serif text-2xl font-medium tracking-wide text-white" />
          <nav className="hidden gap-8 text-sm tracking-widest uppercase md:flex">
            <a href="#sobre" className="hover:opacity-70">Sobre</a>
            <a href="#projetos" className="hover:opacity-70">Projetos</a>
            <a href="#servicos" className="hover:opacity-70">Serviços</a>
            <a href="#contato" className="hover:opacity-70">Contato</a>
          </nav>
          <a href={wa} target="_blank" rel="noreferrer" className="border border-white/70 px-4 py-2 text-xs tracking-widest uppercase hover:bg-white hover:text-stone-900">
            Contato
          </a>
        </header>

        <div className="mx-auto mt-auto w-full max-w-7xl px-6 pb-16 md:pb-24">
          <p className="text-sm tracking-[0.3em] uppercase opacity-80">
            {c.business.category} · {c.business.city}
          </p>
          <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[1.02] font-medium sm:text-6xl md:text-8xl">
            <Highlight text={c.hero.title} className="italic" />
          </h1>
          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-lg text-lg text-white/85">{c.hero.subtitle}</p>
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-3 bg-white px-7 py-4 text-sm font-semibold tracking-widest text-stone-900 uppercase hover:bg-primary hover:text-on-primary"
            >
              {c.hero.ctaLabel ?? "Agendar conversa"} <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Sobre */}
      {c.about && (
        <section id="sobre" className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-5">
            <div className="aspect-[3/4]" style={photoBg(c.about.image, "linear-gradient(160deg,#d6d3d1,#78716c)")} />
          </div>
          <div className="md:col-span-6 md:col-start-7 md:pt-12">
            <Eyebrow>Sobre</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">{c.about.title ?? c.business.name}</h2>
            <p className="mt-8 text-lg leading-relaxed whitespace-pre-line text-stone-600">{c.about.text}</p>
            {c.stats && (
              <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-stone-300 pt-8">
                {c.stats.slice(0, 3).map((s) => (
                  <div key={s.label}>
                    <dt className="font-serif text-4xl text-primary md:text-5xl">{s.value}</dt>
                    <dd className="mt-1 text-sm text-stone-500">{s.label}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </section>
      )}

      {/* Portfólio */}
      {c.gallery && (
        <section id="projetos" className="bg-stone-900 py-24 text-white md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-end justify-between gap-6">
              <div>
                <Eyebrow light>Portfólio</Eyebrow>
                <h2 className="mt-4 font-serif text-4xl md:text-6xl">Projetos selecionados</h2>
              </div>
              {c.contact.instagram && (
                <a href={instagramUrl(c.contact.instagram)} target="_blank" rel="noreferrer" className="hidden items-center gap-2 text-sm tracking-widest uppercase hover:opacity-70 md:flex">
                  Ver mais no Instagram <ArrowUpRight size={16} />
                </a>
              )}
            </div>
            <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
              {c.gallery.map((g, i) => {
                // Mosaico: alterna peças largas e estreitas
                const span = ["md:col-span-4 md:row-span-2", "md:col-span-2", "md:col-span-2", "md:col-span-3", "md:col-span-3", "md:col-span-2"][i % 6];
                return (
                  <figure
                    key={i}
                    className={`group relative min-h-48 overflow-hidden md:min-h-64 ${i === 0 ? "col-span-2" : ""} ${span}`}
                    style={photoBg(g.image, `linear-gradient(${120 + i * 40}deg,#44403c,#a8a29e)`)}
                  >
                    {g.caption && (
                      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5 font-serif text-xl">
                        {g.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Serviços */}
      <section id="servicos" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow>Serviços</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">Como posso ajudar no seu projeto</h2>
          </div>
          <ol className="md:col-span-7 md:col-start-6">
            {c.services.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-stone-300 py-8 last:border-b">
                <span className="font-serif text-2xl text-primary">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-stone-600">{s.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Processo */}
      {c.steps && (
        <section className="bg-[#ebe6de] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <Eyebrow>Processo</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">Do primeiro café à entrega das chaves</h2>
            <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {c.steps.map((s, i) => (
                <li key={s.title}>
                  <span className="block h-px w-full bg-stone-400" />
                  <span className="mt-5 block text-xs tracking-[0.3em] text-stone-500 uppercase">Etapa {i + 1}</span>
                  <h3 className="mt-2 font-serif text-2xl">{s.title}</h3>
                  <p className="mt-2 text-stone-600">{s.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Avaliações */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <Reviews client={c} title="Clientes que confiaram o lar a nós" titleClassName="font-serif font-medium md:text-5xl" />
      </section>

      {c.faq && (
        <section className="mx-auto max-w-3xl px-6 pb-24">
          <h2 className="font-serif text-4xl">Perguntas frequentes</h2>
          <div className="mt-8">
            <Faq items={c.faq} />
          </div>
        </section>
      )}

      {/* Contato */}
      <section id="contato" className="bg-stone-900 text-white">
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">
          <div className="px-6 py-20 md:py-28 md:pr-16">
            <Eyebrow light>Contato</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">Vamos tirar o seu projeto do papel?</h2>
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-3 bg-primary px-7 py-4 text-sm font-semibold tracking-widest text-on-primary uppercase hover:brightness-110"
            >
              <WhatsAppIcon size={18} /> Conversar no WhatsApp
            </a>
            <div className="mt-12 space-y-4 text-white/75">
              <p className="flex gap-3"><MapPin size={20} className="shrink-0" /> {c.contact.address}</p>
              {c.contact.phone && <p className="flex gap-3"><Phone size={20} /> {c.contact.phone}</p>}
              {c.contact.email && <p className="flex gap-3"><Mail size={20} /> {c.contact.email}</p>}
              <p className="flex items-center gap-3">
                <Stars rating={c.reviews.rating} size={16} /> {c.reviews.rating.toFixed(1).replace(".", ",")} · {c.reviews.count} avaliações no Google
              </p>
            </div>
          </div>
          <MapEmbed client={c} className="min-h-96 grayscale" />
        </div>
      </section>

      <footer className="border-t border-white/10 bg-stone-950 py-8 text-sm text-white/50">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-6 md:flex-row">
          <span>© {new Date().getFullYear()} {c.business.name} · {c.business.tagline}</span>
          {c.contact.instagram && (
            <a href={instagramUrl(c.contact.instagram)} className="hover:text-white">@{c.contact.instagram}</a>
          )}
        </div>
      </footer>
    </div>
  );
}

function Eyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-xs tracking-[0.3em] uppercase ${light ? "text-white/60" : "text-stone-500"}`}>
      <span className="h-px w-8 bg-primary" /> {children}
    </p>
  );
}
