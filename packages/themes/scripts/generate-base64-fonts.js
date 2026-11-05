#! /usr/bin/env node

/*
 * Writes the base64 partials read by src/fonts-base64.scss from the font files, so that a font or
 * icon update cannot ship stale glyphs in the base64 stylesheet.
 *
 * Usage: node scripts/generate-base64-fonts.js [--check]
 *   --check  fails instead of writing when a committed partial does not match its font file.
 */
const fs = require('fs');
const path = require('path');

const FONTS = path.resolve(__dirname, '../assets/fonts');

const PARTIALS = [
  { font: 'ods-icon/icomoon/icomoon.woff', partial: 'ods-icon/icomoon/_icomoon.scss' },
  { font: 'source-code-pro/woff2/source-code-pro.woff2', partial: 'source-code-pro/base64/_source-code-pro-variable.scss' },
  { font: 'source-code-pro/woff2/source-code-pro-italic.woff2', partial: 'source-code-pro/base64/_source-code-pro-variable-italic.scss' },
  { comment: 'Source Sans3 Variable font with custom line-height', font: 'source-sans-3/woff2/source-sans3-variable-custom.woff2', partial: 'source-sans-3/base64/_source-sans3-variable-custom.scss' },
  { comment: 'Source Sans3 Variable Italic font with custom line-height', font: 'source-sans-3/woff2/source-sans3-variable-custom-italic.woff2', partial: 'source-sans-3/base64/_source-sans3-variable-custom-italic.scss' },
];

const check = process.argv.includes('--check');
const stale = [];

for (const { comment, font, partial } of PARTIALS) {
  const base64 = fs.readFileSync(path.join(FONTS, font)).toString('base64');
  const content = `${comment ? `// ${comment}\n` : ''}$base64: url(data:application/octet-stream;base64,${base64});\n`;
  const file = path.join(FONTS, partial);

  if (fs.existsSync(file) && fs.readFileSync(file, 'utf8') === content) {
    continue;
  }
  if (check) {
    stale.push(partial);
  } else {
    fs.writeFileSync(file, content);
  }
}

if (stale.length) {
  console.error(`These base64 partials do not match their font file: run \`pnpm generate:base64-fonts\` in packages/themes and commit them.\n${stale.map((partial) => `  assets/fonts/${partial}`).join('\n')}`);
  process.exitCode = 1;
}
