/**
 * Genera public/images/og-default.png (1200×630)
 * Diseño: fondo blanco, logo iclinicas centrado, subtítulo, barra corporativa inferior.
 *
 * Uso: node scripts/generate-og.js
 */

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const W = 1200;
const H = 630;
const PRIMARY = '#0A6B5E';   // --color-primary
const ACCENT  = '#8B6D11';   // --color-accent
const BG      = '#FFFFFF';
const BAR_H   = 18;
const ACCENT_BAR_H = 6;

// Construir SVG en memoria y que sharp lo rasterice
const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,400;0,700&amp;family=Inter:wght@400;500&amp;display=swap');
    </style>
  </defs>

  <!-- Fondo -->
  <rect width="${W}" height="${H}" fill="${BG}"/>

  <!-- Área de contenido centrado verticalmente -->

  <!-- Marca — texto principal "iclinicas" -->
  <text
    x="${W / 2}"
    y="240"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="108"
    font-weight="700"
    fill="${PRIMARY}"
    text-anchor="middle"
    dominant-baseline="middle"
    letter-spacing="-3"
  >iclinicas</text>

  <!-- Separador decorativo -->
  <rect x="${W / 2 - 60}" y="295" width="120" height="3" fill="${ACCENT}" rx="2"/>

  <!-- Subtítulo -->
  <text
    x="${W / 2}"
    y="358"
    font-family="'Helvetica Neue', Arial, sans-serif"
    font-size="28"
    font-weight="400"
    fill="#5A5A5A"
    text-anchor="middle"
    dominant-baseline="middle"
    letter-spacing="1"
  >Agencia de Marketing Sanitario · Sevilla</text>

  <!-- Claim secundario -->
  <text
    x="${W / 2}"
    y="408"
    font-family="'Helvetica Neue', Arial, sans-serif"
    font-size="20"
    font-weight="400"
    fill="#9A9A9A"
    text-anchor="middle"
    dominant-baseline="middle"
    letter-spacing="0.5"
  >Captación de pacientes privados · iclinicas.es</text>

  <!-- Barra corporativa inferior (primary) -->
  <rect x="0" y="${H - BAR_H - ACCENT_BAR_H}" width="${W}" height="${BAR_H}" fill="${PRIMARY}"/>

  <!-- Barra accent -->
  <rect x="0" y="${H - ACCENT_BAR_H}" width="${W}" height="${ACCENT_BAR_H}" fill="${ACCENT}"/>
</svg>
`.trim();

async function main() {
  const outDir = path.join(__dirname, '..', 'public', 'images');
  const outFile = path.join(outDir, 'og-default.png');

  fs.mkdirSync(outDir, { recursive: true });

  await sharp(Buffer.from(svg))
    .png({ compressionLevel: 9 })
    .toFile(outFile);

  const { size } = fs.statSync(outFile);
  console.log(`✓ og-default.png generado (${Math.round(size / 1024)} KB) → ${outFile}`);
}

main().catch((err) => { console.error(err); process.exit(1); });
