# Sites para prospecção (Next.js + Vercel)

3 templates prontos para negócios locais. **Cada prospect = 1 arquivo de texto.**
Você preenche nome, cores, serviços, avaliações do Google e WhatsApp, e o site está pronto.

| Template | Para quem | Destaques |
|---|---|---|
| `solar` | Empresas de energia solar | Simulador de economia que já manda a conta de luz no WhatsApp |
| `arquitetura` | Arquitetos e designers de interiores | Visual editorial, portfólio em mosaico, processo em etapas |
| `personal` | Personal trainers e estúdios | Visual forte, planos com preço, resultados de alunos |

Todos têm: avaliações do Google, botão de WhatsApp flutuante, mapa, FAQ, SEO local e layout pensado primeiro para celular.

---

## 1. Rodar no seu computador (uma vez)

Precisa do [Node.js](https://nodejs.org) 20 ou mais novo.

```bash
npm install
npm run dev
```

Abra http://localhost:3000. Aparece a lista de prévias. Os modelos ficam em `/modelo-solar`, `/modelo-arquitetura` e `/modelo-personal`.

## 2. Criar o site de um prospect (uns 20 minutos)

```bash
npm run novo-cliente -- solar sol-forte-energia
```

- Primeiro o template (`solar`, `arquitetura` ou `personal`), depois o "slug" (o nome que vai no link, minúsculo e com hífen).
- Isso cria `src/clients/sol-forte-energia.ts` já preenchido com o modelo do template. Edite esse arquivo.

O que trocar, na ordem:

1. **business**: nome, cidade, categoria, descrição.
2. **colors.primary**: a cor da marca (pegue do logo ou da fachada no Google; use um seletor de cor tipo https://imagecolorpicker.com).
3. **contact**: WhatsApp (só números com DDD), endereço, Instagram, horários.
4. **hero**: título e subtítulo. Coloque uma palavra entre `*asteriscos*` para ela ficar na cor da marca.
5. **reviews**: nota, número de avaliações e 3 depoimentos reais copiados da ficha do Google. É o que mais convence.
6. **gallery** e imagens: fotos da ficha do Google ou do Instagram do prospect.
7. Serviços, números e FAQ: ajuste o que fizer sentido. Seção sem dados some sozinha.

Sem logo? Deixe `logoUrl: ""` e o site gera um com as iniciais na cor da marca.

**Imagens:** pode usar um link direto da imagem, ou salvar o arquivo em `public/clientes/<slug>/` e usar `"/clientes/<slug>/foto.jpg"`. Se alguma foto não carregar, aparece um degradê na cor da marca no lugar, então o site nunca fica quebrado.

**Ícones** (templates solar e personal): nomes de https://lucide.dev/icons em PascalCase, ex.: `"SolarPanel"`, `"Dumbbell"`, `"House"`.

## 3. Publicar as prévias na Vercel

1. Suba esta pasta para um repositório no GitHub.
2. Em https://vercel.com, "Add New Project", escolha o repositório e clique em Deploy (não precisa configurar nada).
3. Cada prévia fica em `https://<seu-projeto>.vercel.app/<slug>`. Esse é o link que você manda para o prospect.

Depois disso, para cada prospect novo: crie o arquivo, faça commit e push. A Vercel publica sozinha em 1 a 2 minutos.

As prévias:
- mostram uma faixa no topo "Prévia exclusiva criada para <nome> por Agência Zau";
- **não aparecem no Google** (marcadas como noindex), para não concorrer com o cliente antes de ele fechar.

## 4. Quando o cliente fechar

1. Na Vercel, crie um **novo projeto** apontando para o mesmo repositório.
2. Em Settings > Environment Variables, adicione `CLIENT` = `<slug do cliente>`.
3. Em Settings > Domains, conecte o domínio dele (ex.: `solforte.com.br`).

Nesse projeto a página inicial vira o site do cliente, sem a faixa de prévia, liberado para o Google e com dados de negócio local (SEO). As outras prévias não aparecem lá.

## Onde mexer

```
src/clients/           um arquivo por cliente (é aqui que você trabalha no dia a dia)
src/clients/index.ts   lista de clientes (o comando novo-cliente atualiza sozinho)
src/agency.ts          nome e link da sua agência (aparece na faixa de prévia)
src/templates/         o visual de cada template
src/components/        peças compartilhadas (avaliações, WhatsApp, mapa, FAQ)
src/lib/types.ts       todos os campos possíveis, com explicação
```
