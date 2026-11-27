import { ArrowRight, Check, Clock, MapPin } from "lucide-react";
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

/** Template 3: personal trainers e estúdios. Visual: escuro, tipografia forte, cor neon de destaque. */
export function PersonalTemplate({ client: c }: { client: ClientConfig }) {
  const wa = whatsappLink(c);

  return (
    <div className="bg-neutral-950 text-white">
      <header className="sticky top-0 z-40 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Logo client={c} textClassName="font-display text-xl tracking-wide uppercase" />
          <nav className="hidden gap-7 font-display text-sm tracking-widest text-white/70 uppercase md:flex">
            <a href="#metodo" className="hover:text-primary">Método</a>
            <a href="#planos" className="hover:text-primary">Planos</a>
            <a href="#resultados" className="hover:text-primary">Resultados</a>
            <a href="#contato" className="hover:text-primary">Contato</a>
          </nav>
          <a href={wa} target="_blank" rel="noreferrer" className="rounded-full bg-primary px-4 py-2 font-display text-sm font-semibold tracking-wider text-on-primary uppercase">
            Aula grátis
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={photoBg(
          c.hero.image,
          "radial-gradient(circle at 80% 20%,color-mix(in srgb,var(--primary) 35%,transparent),transparent 55%),linear-gradient(#171717,#0a0a0a)",
          "linear-gradient(90deg,rgba(10,10,10,.95) 25%,rgba(10,10,10,.55) 70%,rgba(10,10,10,.3))",
        )}
      >
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-32">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-sm text-white/80">
            <Stars rating={c.reviews.rating} size={14} /> {c.reviews.count} alunos avaliaram no Google
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.95] font-bold uppercase sm:text-7xl md:text-8xl">
            <Highlight text={c.hero.title} />
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70">{c.hero.subtitle}</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href={wa} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-display text-lg font-semibold tracking-wider text-on-primary uppercase transition hover:scale-[1.02]">
              <WhatsAppIcon size={20} /> {c.hero.ctaLabel ?? "Quero começar"}
            </a>
            <a href="#planos" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-4 font-display text-lg tracking-wider uppercase hover:border-white">
              Ver planos <ArrowRight size={18} />
            </a>
          </div>
          {c.hero.badges && (
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
              {c.hero.badges.map((b) => (
                <li key={b} className="flex items-center gap-2"><Check size={16} className="text-primary" /> {b}</li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Faixa de números */}
      {c.stats && (
        <section className="border-y border-white/10 bg-neutral-900">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-10 md:grid-cols-4">
            {c.stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl font-bold text-primary md:text-5xl">{s.value}</div>
                <div className="mt-1 text-sm text-white/60 uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Sobre */}
      {c.about && (
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-2">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl" style={photoBg(c.about.image, "linear-gradient(160deg,#262626,color-mix(in srgb,var(--primary) 40%,#0a0a0a))")} />
            <div className="absolute -right-3 -bottom-5 rounded-2xl bg-primary px-5 py-4 font-display text-on-primary uppercase shadow-xl md:-right-8">
              <span className="block text-3xl font-bold">{c.stats?.[0]?.value ?? "+10"}</span>
              <span className="text-xs tracking-widest">{c.stats?.[0]?.label ?? "anos"}</span>
            </div>
          </div>
          <div>
            <Eyebrow>Quem vai te treinar</Eyebrow>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase md:text-5xl">{c.about.title ?? c.business.name}</h2>
            <p className="mt-6 text-lg leading-relaxed whitespace-pre-line text-white/70">{c.about.text}</p>
            {c.about.highlights && (
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {c.about.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 rounded-xl bg-white/5 p-3 text-sm">
                    <Check size={18} className="mt-0.5 shrink-0 text-primary" /> {h}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      )}

      {/* Serviços / método */}
      <section id="metodo" className="bg-neutral-900 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Método</Eyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold uppercase md:text-5xl">Treino feito para o seu objetivo</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.services.map((s) => (
              <div key={s.title} className="group rounded-3xl border border-white/10 bg-neutral-950 p-7 transition hover:border-primary">
                <Icon name={s.icon} size={32} className="text-primary" />
                <h3 className="mt-6 font-display text-2xl font-semibold uppercase">{s.title}</h3>
                <p className="mt-2 text-white/60">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados */}
      {c.gallery && (
        <section id="resultados" className="mx-auto max-w-6xl px-5 py-24">
          <Eyebrow>Resultados</Eyebrow>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase md:text-5xl">Alunos reais, resultados reais</h2>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {c.gallery.map((g, i) => (
              <figure key={i} className="relative aspect-[3/4] overflow-hidden rounded-2xl" style={photoBg(g.image, `linear-gradient(${150 + i * 25}deg,#262626,color-mix(in srgb,var(--primary) 30%,#171717))`)}>
                {g.caption && (
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-4 font-display text-lg uppercase">
                    {g.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* Planos */}
      {c.plans && (
        <section id="planos" className="bg-neutral-900 py-24">
          <div className="mx-auto max-w-6xl px-5">
            <div className="text-center">
              <Eyebrow center>Planos</Eyebrow>
              <h2 className="mt-3 font-display text-4xl font-bold uppercase md:text-5xl">Escolha como quer treinar</h2>
            </div>
            <div className="mt-12 grid items-stretch gap-5 md:grid-cols-3">
              {c.plans.map((p) => (
                <div key={p.name} className={`relative flex flex-col rounded-3xl p-8 ${p.highlight ? "bg-primary text-on-primary md:scale-105" : "border border-white/10 bg-neutral-950"}`}>
                  {p.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-xs font-bold tracking-wider text-black uppercase">Mais escolhido</span>
                  )}
                  <h3 className="font-display text-2xl font-semibold uppercase">{p.name}</h3>
                  <p className="mt-4">
                    <span className="font-display text-5xl font-bold">{p.price}</span>
                    {p.period && <span className="opacity-70"> {p.period}</span>}
                  </p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2"><Check size={18} className={`mt-0.5 shrink-0 ${p.highlight ? "" : "text-primary"}`} /> {f}</li>
                    ))}
                  </ul>
                  <a
                    href={whatsappLink(c, `Olá! Tenho interesse no plano ${p.name}. Como funciona?`)}
                    target="_blank"
                    rel="noreferrer"
                    className={`mt-8 block rounded-full py-3.5 text-center font-display font-semibold tracking-wider uppercase ${p.highlight ? "bg-neutral-950 text-white" : "bg-white text-black"}`}
                  >
                    Quero esse plano
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Avaliações */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reviews client={c} variant="dark" title="O que os alunos falam" titleClassName="font-display uppercase md:text-5xl" />
      </section>

      {c.faq && (
        <section className="mx-auto max-w-3xl px-5 pb-24">
          <h2 className="font-display text-4xl font-bold uppercase">Dúvidas frequentes</h2>
          <div className="mt-8"><Faq items={c.faq} variant="dark" /></div>
        </section>
      )}

      {/* CTA + contato */}
      <section id="contato" className="px-5 pb-20">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl bg-primary text-on-primary md:grid-cols-2">
          <div className="p-8 md:p-12">
            <h2 className="font-display text-4xl leading-none font-bold uppercase md:text-6xl">Sua primeira aula é por nossa conta</h2>
            <p className="mt-5 text-lg opacity-80">Chama no WhatsApp, conta seu objetivo e a gente agenda uma aula experimental.</p>
            <a href={wa} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-7 py-4 font-display text-lg tracking-wider text-white uppercase">
              <WhatsAppIcon size={20} /> Agendar aula grátis
            </a>
            <div className="mt-10 space-y-3 opacity-85">
              <p className="flex gap-3"><MapPin size={20} className="shrink-0" /> {c.contact.address}</p>
              {c.contact.hours && <p className="flex gap-3 whitespace-pre-line"><Clock size={20} className="shrink-0" /> {c.contact.hours.join("\n")}</p>}
            </div>
          </div>
          <MapEmbed client={c} className="min-h-80" />
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-sm text-white/50">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-5 md:flex-row">
          <span>© {new Date().getFullYear()} {c.business.name} · {c.business.tagline}</span>
          {c.contact.instagram && <a href={instagramUrl(c.contact.instagram)} className="hover:text-primary">@{c.contact.instagram}</a>}
        </div>
      </footer>
    </div>
  );
}

function Eyebrow({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <p className={`flex items-center gap-2 font-display text-sm tracking-[0.25em] text-primary uppercase ${center ? "justify-center" : ""}`}>
      <span className="h-0.5 w-6 bg-primary" /> {children}
    </p>
  );
}
