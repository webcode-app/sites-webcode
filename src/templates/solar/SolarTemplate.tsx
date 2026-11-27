import { ArrowRight, ArrowUpRight, Check, Clock, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { Sora } from "next/font/google";
import type { CSSProperties, ReactNode } from "react";
import { MotionProvider } from "@/components/fx/MotionProvider";
import { Parallax } from "@/components/fx/Parallax";
import { ScrollHeader } from "@/components/fx/ScrollHeader";
import { ScrollLine } from "@/components/fx/ScrollLine";
import { Spotlight } from "@/components/fx/Spotlight";
import { Ticker } from "@/components/fx/Ticker";
import { GoogleG } from "@/components/GoogleG";
import { Icon } from "@/components/Icon";
import { Logo } from "@/components/Logo";
import { MapEmbed } from "@/components/MapEmbed";
import { Stars } from "@/components/Stars";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import type { ClientConfig } from "@/lib/types";
import { imgSet, instagramUrl, mapsLink, splitHighlight, whatsappLink } from "@/lib/utils";
import { SolarCalculator } from "./SolarCalculator";

const sora = Sora({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-sora" });

const BG = "#060914";
const d = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;
const i = (n: number) => ({ "--i": n }) as CSSProperties;

/**
 * Template 1: empresas de energia solar.
 * Visual escuro "premium tech": brilho de sol na cor da marca, vidro (glass), feixes de luz,
 * números animados, linha do tempo que preenche ao rolar e simulador de economia.
 * Cor, textos, fotos e seções saem todos do arquivo do cliente.
 */
export function SolarTemplate({ client: c }: { client: ClientConfig }) {
  const wa = whatsappLink(c);
  const nav = [
    ["Serviços", "#servicos"],
    ["Como funciona", "#como-funciona"],
    ["Projetos", "#projetos"],
    ["Avaliações", "#avaliacoes"],
    ["Contato", "#contato"],
  ];
  const heroImg = c.hero.image ? imgSet(c.hero.image) : undefined;

  return (
    <MotionProvider>
      <div className={`${sora.variable} overflow-x-clip text-white antialiased`} style={{ background: BG }}>
        {/* Cabeçalho flutuante de vidro */}
        <ScrollHeader className="sticky top-0 z-40 px-3 pt-3">
          <div className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl px-3 pl-4 transition-all duration-500 group-data-[scrolled=true]/header:bg-slate-950/70 group-data-[scrolled=true]/header:shadow-lg group-data-[scrolled=true]/header:shadow-black/30 group-data-[scrolled=true]/header:ring-1 group-data-[scrolled=true]/header:ring-white/10 group-data-[scrolled=true]/header:backdrop-blur-xl">
            <a href="#" className="[&_span]:text-[15px]">
              <Logo client={c} textClassName="text-white" />
            </a>
            <nav className="hidden items-center gap-1 text-sm text-white/70 lg:flex">
              {nav.map(([l, h]) => (
                <a key={h} href={h} className="rounded-full px-3.5 py-2 transition hover:bg-white/10 hover:text-white">
                  {l}
                </a>
              ))}
            </nav>
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="fx-sheen flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-on-primary shadow-[0_8px_30px_-8px_var(--primary)]"
            >
              <WhatsAppIcon size={16} /> <span className="hidden sm:inline">Orçamento grátis</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
          </div>
        </ScrollHeader>

        {/* Hero */}
        <section className="relative -mt-[68px] overflow-hidden pt-[68px]">
          <div aria-hidden className="absolute inset-0">
            {heroImg && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                {...heroImg}
                sizes="100vw"
                alt=""
                fetchPriority="high"
                className="fx-kenburns absolute inset-0 size-full object-cover opacity-40"
              />
            )}
            <div className="absolute inset-0" style={{ background: `linear-gradient(100deg, ${BG} 15%, ${BG}cc 50%, ${BG}66)` }} />
            <div className="fx-grid absolute inset-0" />
            {/* Sol: brilho + raios girando */}
            <div className="absolute -top-40 -right-40 size-[620px] md:-top-56 md:-right-24 md:size-[820px]">
              <div className="fx-float absolute inset-0 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--primary)_55%,transparent)_0%,color-mix(in_oklab,var(--primary)_18%,transparent)_35%,transparent_65%)]" />
              <div
                className="fx-spin absolute inset-0 rounded-full opacity-25 [--t:90s]"
                style={{
                  background: "repeating-conic-gradient(from 0deg, var(--primary) 0deg 2deg, transparent 2deg 12deg)",
                  WebkitMask: "radial-gradient(circle, transparent 18%, #000 22%, transparent 62%)",
                  mask: "radial-gradient(circle, transparent 18%, #000 22%, transparent 62%)",
                }}
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-40" style={{ background: `linear-gradient(to top, ${BG}, transparent)` }} />
          </div>

          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pt-12 pb-24 md:pt-20 md:pb-32 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <a
                href="#avaliacoes"
                className="fx-in inline-flex items-center gap-2.5 rounded-full bg-white/[.06] py-1.5 pr-4 pl-1.5 text-sm ring-1 ring-white/15 backdrop-blur"
              >
                <span className="grid size-7 place-items-center rounded-full bg-white">
                  <GoogleG size={16} />
                </span>
                <Stars rating={c.reviews.rating} size={13} />
                <span className="text-white/80">
                  <strong className="text-white">{c.reviews.rating.toFixed(1).replace(".", ",")}</strong> · {c.reviews.count} avaliações
                </span>
              </a>

              <h1 className="font-display-solar mt-7 text-[2.6rem] leading-[1.04] font-bold tracking-[-0.03em] sm:text-6xl lg:text-[4.1rem]">
                <AnimatedTitle text={c.hero.title} />
              </h1>
              <p className="fx-in mt-6 max-w-xl text-lg leading-relaxed text-white/65" style={d(0.5)}>
                {c.hero.subtitle}
              </p>

              <div className="fx-in mt-8 flex flex-wrap items-center gap-3" style={d(0.6)}>
                <a
                  href={wa}
                  target="_blank"
                  rel="noreferrer"
                  className="fx-sheen group inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-4 font-bold text-on-primary shadow-[0_14px_50px_-12px_var(--primary)]"
                >
                  {c.hero.ctaLabel ?? "Quero meu orçamento"}
                  <ArrowRight size={18} className="transition group-hover:translate-x-1" />
                </a>
                <a href="#como-funciona" className="rounded-2xl px-5 py-4 font-semibold text-white/80 ring-1 ring-white/15 transition hover:bg-white/5 hover:text-white">
                  Como funciona
                </a>
              </div>

              {c.hero.badges && (
                <ul className="mt-9 grid gap-x-6 gap-y-3 text-[15px] text-white/80 sm:grid-cols-2">
                  {c.hero.badges.map((b, n) => (
                    <li key={b} className="fx-in flex items-center gap-2.5" style={d(0.7 + n * 0.08)}>
                      <span className="grid size-5 shrink-0 place-items-center rounded-full bg-primary/20 text-primary ring-1 ring-primary/40">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <SolarCalculator client={c} />
          </div>
        </section>

        {/* Números em faixa de vidro */}
        {c.stats && (
          <section className="relative z-10 mx-auto -mt-12 max-w-6xl px-5">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/10 ring-1 ring-white/10 backdrop-blur-md md:grid-cols-4">
              {c.stats.map((s, n) => (
                <div key={s.label} className="fx-reveal relative bg-[#0a0f1f]/85 px-5 py-7 text-center" style={i(n)}>
                  <div className="font-display-solar bg-gradient-to-b from-white to-white/60 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-[2.6rem]">
                    <Ticker value={s.value} />
                  </div>
                  <div className="mt-1.5 text-sm text-white/55">{s.label}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Serviços em bento grid */}
        <section id="servicos" className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
          <SectionTitle eyebrow="Serviços" title="Soluções completas em energia solar" />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {bento(c.services.length).map((slot, n) =>
              slot.kind === "service" ? (
                <ServiceCard key={n} s={c.services[slot.index]} wide={slot.wide} n={n} />
              ) : (
                <a
                  key="cta"
                  href={wa}
                  target="_blank"
                  rel="noreferrer"
                  className={`fx-reveal group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-primary p-7 text-on-primary ${slot.span}`}
                  style={i(n)}
                >
                  <Sparkles className="opacity-70" />
                  <div>
                    <p className="font-display-solar text-2xl font-bold">Não achou o que precisa?</p>
                    <p className="mt-2 flex items-center gap-1 opacity-80">
                      Fale com um especialista <ArrowUpRight size={18} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </p>
                  </div>
                </a>
              ),
            )}
          </div>
        </section>

        {/* Como funciona: linha do tempo que preenche ao rolar */}
        {c.steps && (
          <section id="como-funciona" className="relative overflow-hidden py-24 md:py-32">
            <Glow className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
            <div className="relative mx-auto max-w-6xl px-5">
              <SectionTitle eyebrow="Como funciona" title="Do orçamento à conta reduzida, sem dor de cabeça" />
              <ScrollLine className="mt-16">
                <ol className={`grid gap-10 lg:gap-6 ${c.steps.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
                    {c.steps.map((s, n) => (
                      <li key={s.title} className="fx-reveal relative flex gap-5 lg:flex-col lg:items-center lg:text-center" style={i(n)}>
                        <span className="font-display-solar relative grid size-14 shrink-0 place-items-center rounded-2xl text-lg font-bold text-primary ring-1 ring-primary/40" style={{ background: BG }}>
                          <span className="absolute inset-0 rounded-2xl bg-primary/10" />
                          <span className="relative">{String(n + 1).padStart(2, "0")}</span>
                        </span>
                        <div>
                          <h3 className="font-display-solar text-lg font-semibold">{s.title}</h3>
                          <p className="mt-2 leading-relaxed text-white/60">{s.description}</p>
                        </div>
                      </li>
                    ))}
                </ol>
              </ScrollLine>
            </div>
          </section>
        )}

        {/* Sobre */}
        {c.about && (
          <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:py-32 lg:grid-cols-2 lg:gap-16">
            <div className="fx-reveal relative">
              <Parallax className="aspect-[4/5] rounded-[32px] ring-1 ring-white/10 sm:aspect-[4/3] lg:aspect-[4/5]" amount={50}>
                <div className="size-full bg-[linear-gradient(135deg,var(--primary),#0f172a)]">
                  {c.about.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img {...imgSet(c.about.image, [640, 960, 1400])} sizes="(min-width:1024px) 560px, 100vw" alt={c.about.title ?? c.business.name} loading="lazy" className="size-full object-cover" />
                  )}
                </div>
              </Parallax>
              {/* selo de vidro sobre a foto */}
              <div className="absolute right-4 bottom-4 left-4 flex items-center gap-4 rounded-2xl bg-slate-950/60 p-4 ring-1 ring-white/15 backdrop-blur-xl sm:right-auto sm:left-6 sm:bottom-6">
                <span className="grid size-12 place-items-center rounded-xl bg-white">
                  <GoogleG size={26} />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <strong className="font-display-solar text-xl">{c.reviews.rating.toFixed(1).replace(".", ",")}</strong>
                    <Stars rating={c.reviews.rating} size={14} />
                  </div>
                  <p className="text-sm text-white/60">{c.reviews.count} clientes avaliaram</p>
                </div>
              </div>
            </div>
            <div>
              <SectionTitle eyebrow="Quem somos" title={c.about.title ?? `Sobre a ${c.business.name}`} left />
              <p className="fx-reveal mt-6 text-lg leading-relaxed whitespace-pre-line text-white/65">{c.about.text}</p>
              {c.about.highlights && (
                <ul className="mt-8 space-y-3">
                  {c.about.highlights.map((h, n) => (
                    <li key={h} className="fx-reveal flex items-center gap-3 rounded-2xl bg-white/[.04] px-4 py-3.5 ring-1 ring-white/10" style={i(n)}>
                      <span className="grid size-7 shrink-0 place-items-center rounded-full bg-primary/20 text-primary">
                        <Check size={15} strokeWidth={3} />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        )}

        {/* Projetos: carrossel no celular, mosaico no computador */}
        {c.gallery && (
          <section id="projetos" className="py-24 md:py-32">
            <div className="mx-auto max-w-6xl px-5">
              <SectionTitle eyebrow="Projetos" title="Instalações que já estão gerando economia" />
            </div>
            <div className="mx-auto mt-14 max-w-6xl">
              <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:grid md:auto-rows-[220px] md:grid-cols-3 md:overflow-visible md:pb-0 lg:auto-rows-[260px]">
                {c.gallery.map((g, n) => (
                  <figure
                    key={n}
                    className={`fx-reveal group relative aspect-[4/5] w-[78%] shrink-0 snap-center overflow-hidden rounded-3xl ring-1 ring-white/10 md:aspect-auto md:w-auto ${galleryShape(n, c.gallery!.length)}`}
                    style={{ ...i(n % 3), background: `linear-gradient(${135 + n * 30}deg,#1e293b,var(--primary))` }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img {...imgSet(g.image, [480, 800, 1200])} sizes="(min-width:768px) 33vw, 80vw" alt={g.caption ?? ""} loading="lazy" className="size-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    {g.caption && (
                      <figcaption className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2 rounded-2xl bg-white/10 px-4 py-3 text-sm font-medium ring-1 ring-white/15 backdrop-blur-md md:translate-y-2 md:opacity-90 md:transition md:group-hover:translate-y-0 md:group-hover:opacity-100">
                        {g.caption}
                        <ArrowUpRight size={16} className="shrink-0 text-primary" />
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Avaliações em faixa rolando */}
        <section id="avaliacoes" className="py-24 md:py-32">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-end">
            <SectionTitle eyebrow="Avaliações" title="Quem instalou, recomenda" left />
            <a
              href={c.reviews.googleUrl ?? "#"}
              target="_blank"
              rel="noreferrer"
              className="fx-reveal flex items-center gap-4 rounded-2xl bg-white/[.05] px-5 py-4 ring-1 ring-white/10 transition hover:bg-white/10"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-white">
                <GoogleG size={24} />
              </span>
              <span>
                <span className="flex items-center gap-2">
                  <strong className="font-display-solar text-2xl">{c.reviews.rating.toFixed(1).replace(".", ",")}</strong>
                  <Stars rating={c.reviews.rating} size={16} />
                </span>
                <span className="text-sm text-white/55">{c.reviews.count} avaliações no Google</span>
              </span>
            </a>
          </div>
          <div className="fx-marquee-wrap fx-fade-x mt-14 overflow-hidden">
            <div className="fx-marquee flex w-max gap-4 px-2 [--t:45s]">
              {[0, 1].map((copy) =>
                repeatTo(c.reviews.items, 6).map((r, n) => (
                  <figure key={`${copy}-${n}`} aria-hidden={copy === 1 || undefined} className="flex w-[300px] shrink-0 flex-col rounded-3xl bg-white/[.04] p-6 ring-1 ring-white/10 sm:w-[360px]">
                    <div className="flex items-center justify-between">
                      <Stars rating={r.rating} size={15} />
                      <GoogleG size={16} />
                    </div>
                    <blockquote className="mt-4 flex-1 leading-relaxed text-white/80">“{r.text}”</blockquote>
                    <figcaption className="mt-5 flex items-center gap-3">
                      <span className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-primary to-primary/40 font-bold text-on-primary">
                        {r.author[0]}
                      </span>
                      <span>
                        <span className="block font-semibold">{r.author}</span>
                        {r.date && <span className="text-sm text-white/45">{r.date}</span>}
                      </span>
                    </figcaption>
                  </figure>
                )),
              )}
            </div>
          </div>
        </section>

        {/* FAQ */}
        {c.faq && (
          <section className="py-24 md:py-32">
            <div className="mx-auto max-w-3xl px-5">
              <SectionTitle eyebrow="Dúvidas" title="Perguntas frequentes" />
              <div className="mt-12 space-y-3">
                {c.faq.map((f, n) => (
                  <details key={n} className="fx-details fx-reveal group rounded-2xl bg-white/[.04] px-6 ring-1 ring-white/10 transition open:bg-white/[.07] open:ring-primary/30" style={i(n)}>
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                      {f.q}
                      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white/10 text-xl leading-none transition duration-300 group-open:rotate-45 group-open:bg-primary group-open:text-on-primary">
                        +
                      </span>
                    </summary>
                    <p className="pb-6 leading-relaxed text-white/65">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA final com sol nascendo */}
        <section className="px-5 py-16">
          <div className="fx-reveal relative mx-auto max-w-6xl overflow-hidden rounded-[36px] px-6 py-20 text-center ring-1 ring-white/10 md:px-16 md:py-24">
            <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-white/[.06] to-transparent" />
            <div aria-hidden className="absolute -bottom-[340px] left-1/2 size-[640px] -translate-x-1/2 md:-bottom-[520px] md:size-[960px]">
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--primary)_70%,transparent)_0%,color-mix(in_oklab,var(--primary)_25%,transparent)_40%,transparent_68%)]" />
              <div className="absolute inset-[30%] rounded-full border border-primary/40 shadow-[0_0_80px_var(--primary)]" />
            </div>
            <div className="fx-grid absolute inset-0 opacity-60" />
            <div className="relative">
              <h2 className="font-display-solar mx-auto max-w-3xl text-3xl leading-tight font-bold tracking-tight md:text-5xl">
                Pare de pagar caro na conta de luz. <span className="fx-shine">Fale com a gente hoje.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-white/65">Orçamento sem compromisso, com simulação de economia e opções de financiamento.</p>
              <a
                href={wa}
                target="_blank"
                rel="noreferrer"
                className="fx-sheen mt-9 inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 text-lg font-bold text-on-primary shadow-[0_14px_60px_-10px_var(--primary)]"
              >
                <WhatsAppIcon size={20} /> {c.hero.ctaLabel ?? "Quero meu orçamento"}
              </a>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionTitle eyebrow="Contato" title="Onde estamos" left />
            <div className="mt-8 space-y-3">
              <Info icon={<MapPin />} href={mapsLink(c)}>{c.contact.address}</Info>
              {c.contact.phone && <Info icon={<Phone />} href={`tel:${c.contact.phone.replace(/\D/g, "")}`}>{c.contact.phone}</Info>}
              {c.contact.email && <Info icon={<Mail />} href={`mailto:${c.contact.email}`}>{c.contact.email}</Info>}
              {c.contact.hours && <Info icon={<Clock />}>{c.contact.hours.join("\n")}</Info>}
            </div>
          </div>
          <div className="fx-reveal min-h-80 overflow-hidden rounded-3xl ring-1 ring-white/10 [&_iframe]:min-h-80 [&_iframe]:[filter:invert(.92)_hue-rotate(180deg)_saturate(.7)]">
            <MapEmbed client={c} />
          </div>
        </section>

        <footer className="border-t border-white/10 py-10 text-white/50">
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
    </MotionProvider>
  );
}

/** Título palavra por palavra (desfoque → nítido). Palavras entre *asteriscos* ganham brilho na cor da marca. */
function AnimatedTitle({ text }: { text: string }) {
  let n = 0;
  return (
    <>
      {splitHighlight(text).flatMap((part, p) =>
        part.text
          .split(/(\s+)/)
          .filter(Boolean)
          .map((w, k) =>
            /^\s+$/.test(w) ? (
              <span key={`${p}-${k}`}> </span>
            ) : (
              <span key={`${p}-${k}`} className="fx-word" style={d(0.08 + n++ * 0.05)}>
                {part.highlight ? <span className="fx-shine">{w}</span> : w}
              </span>
            ),
          ),
      )}
    </>
  );
}

type Slot = { kind: "service"; index: number; wide: boolean } | { kind: "cta"; span: string };

/** Distribui os serviços num mosaico (alguns largos) e completa a última linha com um card de chamada. */
function bento(count: number): Slot[] {
  const slots: Slot[] = [];
  let used = 0;
  for (let k = 0; k < count; k++) {
    const wide = k % 4 === 0 || k % 4 === 3;
    slots.push({ kind: "service", index: k, wide });
    used += wide ? 2 : 1;
  }
  const rest = (3 - (used % 3)) % 3;
  const mdOdd = count % 2 === 1;
  if (rest || mdOdd) {
    const lg = rest === 2 ? "lg:col-span-2" : rest === 1 ? "lg:col-span-1" : "lg:col-span-3";
    slots.push({ kind: "cta", span: `${mdOdd ? "md:col-span-1" : "md:col-span-2"} ${lg} min-h-52` });
  }
  return slots;
}

function ServiceCard({ s, wide, n }: { s: ClientConfig["services"][number]; wide: boolean; n: number }) {
  return (
    <Spotlight
      className={`fx-reveal group overflow-hidden rounded-3xl bg-white/[.035] p-7 ring-1 ring-white/10 transition duration-500 hover:ring-primary/40 ${wide ? "lg:col-span-2" : ""}`}
      style={i(n % 3)}
    >
      {wide && (
        <Icon
          name={s.icon}
          aria-hidden
          strokeWidth={1}
          className="pointer-events-none absolute -right-6 -bottom-8 size-44 text-primary/10 transition duration-700 group-hover:scale-110 group-hover:text-primary/20"
        />
      )}
      <span className="relative grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-primary/30 to-primary/5 text-primary ring-1 ring-primary/30 shadow-[0_0_30px_-8px_var(--primary)]">
        <Icon name={s.icon} size={22} />
      </span>
      <h3 className="font-display-solar relative mt-8 text-xl font-semibold">{s.title}</h3>
      <p className={`relative mt-2 leading-relaxed text-white/60 ${wide ? "max-w-md" : ""}`}>{s.description}</p>
    </Spotlight>
  );
}

function SectionTitle({ eyebrow, title, left }: { eyebrow: string; title: string; left?: boolean }) {
  return (
    <div className={`fx-reveal ${left ? "" : "mx-auto max-w-2xl text-center"}`}>
      <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold tracking-[.16em] text-primary uppercase ring-1 ring-primary/25">
        <span className="size-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]" />
        {eyebrow}
      </p>
      <h2 className="font-display-solar mt-4 bg-gradient-to-b from-white to-white/65 bg-clip-text text-3xl leading-tight font-bold tracking-[-0.02em] text-transparent md:text-5xl">
        {title}
      </h2>
    </div>
  );
}

function Glow({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute size-[700px] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--primary)_25%,transparent),transparent_65%)] ${className}`}
    />
  );
}

function Info({ icon, children, href }: { icon: ReactNode; children: ReactNode; href?: string }) {
  const body = (
    <>
      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/25 [&>svg]:size-5">{icon}</span>
      <span className="pt-2.5 whitespace-pre-line text-white/75">{children}</span>
    </>
  );
  const cls = "fx-reveal flex gap-4 rounded-2xl p-2 transition";
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={`${cls} hover:bg-white/5`}>
      {body}
    </a>
  ) : (
    <p className={cls}>{body}</p>
  );
}

/** Mosaico da galeria: 1ª foto alta, algumas largas, sempre fechando as linhas. */
function galleryShape(n: number, total: number) {
  if (n === 0 && total >= 3) return "md:row-span-2";
  const cells = total + (total >= 3 ? 1 : 0);
  const missing = (3 - (cells % 3)) % 3; // quantas fotos precisam ficar largas para fechar a grade
  const wide = missing === 2 ? n === 3 || n === total - 1 : missing === 1 && n === total - 1;
  return wide ? "md:col-span-2" : "";
}

function repeatTo<T>(items: T[], min: number): T[] {
  if (!items.length) return items;
  const out: T[] = [];
  while (out.length < min) out.push(...items);
  return out;
}
