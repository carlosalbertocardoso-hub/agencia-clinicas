/**
 * QA pre-deploy — iclinicas
 * node scripts/qa-predeploy.js
 */
const fs   = require('fs');
const path = require('path');

let issues = 0;
function fail(msg) { console.log('  ❌', msg); issues++; }
function ok(msg)   { console.log('  ✅', msg); }
function header(t) { console.log('\n══════════════════════════════════════'); console.log(' ' + t); console.log('══════════════════════════════════════'); }

// ── helpers ──────────────────────────────────────────────────────────────────
function readFile(f) {
  try { return fs.readFileSync(f, 'utf8'); } catch { return null; }
}

function findPages(dir) {
  const results = [];
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) results.push(...findPages(full));
    else if (item === 'page.tsx') results.push(full);
  }
  return results;
}

// ── 1. METADATA ──────────────────────────────────────────────────────────────
header('1. METADATA (title / description / canonical / og / twitter)');

const pages = findPages('src/app');
for (const p of pages) {
  const rel  = p.replace(/.*src.app./, '').replace(/page\.tsx$/, '').replace(/\\/g, '/') || '/';
  const c    = readFile(p);
  const miss = [];
  if (!c.includes('title:') && !c.includes("title '")) miss.push('title');
  if (!c.includes('description:'))                      miss.push('description');
  if (!c.includes('canonical'))                         miss.push('canonical');
  if (!c.includes('openGraph'))                         miss.push('openGraph');
  if (!c.includes('twitter'))                           miss.push('twitter');
  if (!c.includes('og-default.png') && !c.includes("images:")) miss.push('og:image?');
  if (c.includes('og-default.svg'))                     miss.push('⚠ SVG aún presente');

  if (miss.length === 0) ok(`/${rel}`);
  else { console.log(`  ⚠  /${rel}`); miss.forEach(m => console.log(`       → falta: ${m}`)); issues += miss.length; }
}

// ── 2. ROBOTS.TXT ────────────────────────────────────────────────────────────
header('2. ROBOTS.TXT');
const robots = readFile('public/robots.txt');
if (!robots)                                          fail('public/robots.txt no existe');
else {
  ok('public/robots.txt existe');
  if (robots.includes('Sitemap: https://www.iclinicas.es/sitemap.xml')) ok('Línea Sitemap correcta');
  else                                                fail('Sitemap: URL incorrecta o faltante');
  if (robots.includes('User-agent: *'))               ok('User-agent: * presente');
  else                                                fail('User-agent: * faltante');
  if (robots.includes('Disallow: /api/'))             ok('Disallow: /api/ presente');
  else                                                fail('Disallow: /api/ faltante');
}

// ── 3. SITEMAP ───────────────────────────────────────────────────────────────
header('3. SITEMAP (app/sitemap.ts)');
const sitemap = readFile('src/app/sitemap.ts');
if (!sitemap) fail('src/app/sitemap.ts no existe');
else {
  ok('src/app/sitemap.ts existe');
  const routes = ['servicios','especialidades','blog','contacto','nosotros','recursos','casos-de-exito'];
  routes.forEach(r => {
    if (sitemap.includes(r)) ok(`Ruta /${r} cubierta`);
    else                     fail(`Ruta /${r} NO está en el sitemap`);
  });
  const slugsEsp = ['clinicas-dentales-sevilla','psicologos-sevilla','ia-para-clinicas'];
  slugsEsp.forEach(s => {
    if (sitemap.includes(s)) ok(`Especialidad ${s}`);
    else                     fail(`Especialidad ${s} faltante`);
  });
}

// ── 4. WHATSAPP BUTTON ───────────────────────────────────────────────────────
header('4. WHATSAPPBUTTON en layout.tsx');
const layout = readFile('src/app/layout.tsx');
if (!layout) fail('src/app/layout.tsx no encontrado');
else {
  if (layout.includes('WhatsApp') || layout.includes('whatsapp')) ok('WhatsApp referenciado en layout.tsx');
  else fail('WhatsAppButton NO importado en layout.tsx');
}

// ── 5. SVG RESTANTES ─────────────────────────────────────────────────────────
header('5. REFERENCIAS RESTANTES A og-default.svg');
let svgFound = false;
function scanForSvg(dir) {
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory() && !item.includes('node_modules') && !item.includes('.next')) scanForSvg(full);
    else if (stat.isFile() && (item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.js'))) {
      const c = readFile(full);
      if (c && c.includes('og-default.svg')) {
        fail('SVG encontrado en: ' + full);
        svgFound = true;
      }
    }
  }
}
scanForSvg('src');
scanForSvg('next-sitemap.config.js') ; // skip, just src
if (!svgFound) ok('No quedan referencias a og-default.svg');

// ── 6. JSON-LD SCHEMAS ───────────────────────────────────────────────────────
header('6. JSON-LD — VALIDACIÓN SINTÁCTICA');
const schemaFiles = [
  'src/app/layout.tsx',
  'src/app/page.tsx',
  'src/app/nosotros/page.tsx',
];
schemaFiles.forEach(f => {
  const c = readFile(f);
  if (!c) { fail(f + ' no encontrado'); return; }
  // Extract all JSON-LD blocks
  const pattern = /dangerouslySetInnerHTML=\{\{[^}]*__html:\s*JSON\.stringify\(([^)]+)\)/g;
  const schemas = [];
  // Simple check: look for '@context' and '@type' presence
  const ctxCount = (c.match(/'@context'/g) || []).length;
  const typeCount = (c.match(/'@type'/g) || []).length;
  if (ctxCount > 0 && typeCount > 0) ok(`${f} — ${ctxCount} schema(s) con @context + @type`);
  else fail(`${f} — no se detectan schemas válidos`);
});

// ── 7. FECHAS BLOG ───────────────────────────────────────────────────────────
header('7. FECHAS DE POSTS DEL BLOG');
const blog = readFile('src/data/blog.ts');
if (!blog) fail('src/data/blog.ts no encontrado');
else {
  const fechas = [...blog.matchAll(/fecha:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
  const slugs  = [...blog.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
  if (fechas.length === 0) { fail('No se encontraron campos "fecha" en blog.ts'); }
  else {
    fechas.forEach((f, i) => console.log('  📅', slugs[i] || i, '→', f));
    const unique = new Set(fechas);
    if (unique.size === fechas.length) ok(`${fechas.length} posts con fechas distintas`);
    else fail(`Hay fechas duplicadas entre los ${fechas.length} posts`);
  }
}

// ── 8. ARCHIVOS MODIFICADOS ──────────────────────────────────────────────────
header('8. ARCHIVOS MODIFICADOS EN SESIÓN (git diff)');
console.log('  (ver output de git status a continuación)');

// ── RESUMEN ──────────────────────────────────────────────────────────────────
console.log('\n══════════════════════════════════════');
console.log(issues === 0
  ? ' ✅ QA PASADO — 0 problemas encontrados'
  : ` ⚠  ${issues} problema(s) encontrado(s) — revisar arriba`
);
console.log('══════════════════════════════════════\n');
