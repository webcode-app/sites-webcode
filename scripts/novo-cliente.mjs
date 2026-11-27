// Uso: npm run novo-cliente -- <template> <slug>
// Ex.:  npm run novo-cliente -- solar sol-forte-energia
// Copia o exemplo do template escolhido para src/clients/<slug>.ts e registra na lista.
import { existsSync, readFileSync, writeFileSync } from "node:fs";

const [template, slug] = process.argv.slice(2);
const templates = ["solar", "arquitetura", "personal"];

if (!templates.includes(template) || !/^[a-z0-9-]+$/.test(slug ?? "")) {
  console.error("Uso: npm run novo-cliente -- <solar|arquitetura|personal> <slug-em-minusculas-com-hifen>");
  process.exit(1);
}

const dest = `src/clients/${slug}.ts`;
if (existsSync(dest)) {
  console.error(`Já existe: ${dest}`);
  process.exit(1);
}

const base = readFileSync(`src/clients/modelo-${template}.ts`, "utf8").replace(/slug: "[^"]+"/, `slug: "${slug}"`);
writeFileSync(dest, base);

const varName = slug.replace(/-([a-z0-9])/g, (_, ch) => ch.toUpperCase()).replace(/^(\d)/, "c$1");
const indexPath = "src/clients/index.ts";
const index = readFileSync(indexPath, "utf8")
  .replace("// @imports", `import ${varName} from "./${slug}";\n// @imports`)
  .replace("  // @lista", `  ${varName},\n  // @lista`);
writeFileSync(indexPath, index);

console.log(`\n✔ Criado ${dest}`);
console.log(`  Edite esse arquivo com os dados do cliente e rode "npm run dev".`);
console.log(`  Prévia: http://localhost:3000/${slug}\n`);
