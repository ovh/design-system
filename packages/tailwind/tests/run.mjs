// Compiles index.css with the Tailwind v4 compiler and checks the committed theme.css: every
// utility reads its ODS variable, every mapped token has its utility, the ODS shadows compose with
// the Tailwind rings, and the ODS layers sit between the Tailwind base and components.
// Usage: node tests/run.mjs. With the themes built (dist/), it also checks that theme.css is up to
// date with their tokens.
import { existsSync, readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { compile } from 'tailwindcss';

const PKG = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
const { LEFT_OUT, NAMESPACES, themeVariables } = require('../scripts/generate-theme.js');

const results = [];
const check = (label, ok, detail = '') => {
  results.push(`${ok ? 'OK ' : 'KO '} ${label}${ok ? '' : ` — ${detail}`}`);
};

// The CSS imports of index.css, resolved as a bundler would.
async function loadStylesheet(id, base) {
  const path = id === 'tailwindcss' ? require.resolve('tailwindcss/index.css') : resolve(base, id);
  return { base: dirname(path), content: readFileSync(path, 'utf8'), path };
}

const themeCss = readFileSync(resolve(PKG, 'theme.css'), 'utf8');
const declared = themeCss.split('\n').filter((line) => line.startsWith('  --'));
const compiler = await compile(readFileSync(resolve(PKG, 'index.css'), 'utf8'), { base: PKG, loadStylesheet });
const rule = (css, className) => new RegExp(`\\.${className.replace(/[!]/g, '\\$&')} \\{([^}]*)\\}`).exec(css)?.[1].replace(/\s+/g, ' ').trim();

// Utilities that set their property directly, with the declaration they must give.
const SAMPLES = [
  ['bg-ods-surface-raised', 'background-color: var(--ods-semantic-color-surface-raised);'],
  ['text-ods-content-heading', 'color: var(--ods-semantic-color-content-heading);'],
  ['border-ods-border-container', 'border-color: var(--ods-semantic-color-border-container);'],
  ['rounded-ods-container', 'border-radius: var(--ods-semantic-size-radius-container);'],
  ['p-ods-inset-inline', 'padding: var(--ods-semantic-size-space-inset-inline);'],
  ['h-ods-block-md', 'height: var(--ods-semantic-size-block-size-md);'],
  ['w-ods-inline-field', 'width: var(--ods-semantic-size-inline-size-field);'],
  ['font-ods-body', 'font-family: var(--ods-semantic-font-family-body);'],
];
const sampled = compiler.build(SAMPLES.map(([className]) => className));
for (const [className, declaration] of SAMPLES) {
  const body = rule(sampled, className);
  check(`${className} reads its ODS token`, body === declaration, body ?? '(no rule)');
}

// Shadows, weights and easings go through Tailwind custom properties: the ODS variable must be in the rule.
for (const [className, token] of [
  ['shadow-ods-overlay', '--ods-semantic-shadow-overlay'],
  ['font-ods-semibold', '--ods-semantic-font-weight-semibold'],
  ['ease-ods-enter', '--ods-semantic-motion-easing-enter'],
]) {
  const body = rule(compiler.build([className]), className);
  check(`${className} reads ${token}`, !!body?.includes(`var(${token})`), body ?? '(no rule)');
}

// Coverage, read from the committed file: every color gives a working bg- utility, and every theme
// variable reads an ODS semantic token or is one of the two page fonts.
const colors = declared.filter((line) => line.startsWith('  --color-ods-')).map((line) => line.trim().split(':')[0].replace('--color-', ''));
const unbuilt = colors.filter((name) => !rule(compiler.build([`bg-${name}`]), `bg-${name}`));
check(`every color token gives a working bg- utility (${colors.length})`, colors.length > 100 && unbuilt.length === 0, unbuilt.slice(0, 5).join(', '));
const strays = declared.filter((line) => !/^ {2}--[a-z-]+-ods-[a-z0-9-]+: var\(--ods-semantic-[a-z0-9-]+\);$/.test(line) && !/^ {2}--default-(mono-)?font-family: /.test(line));
check('every theme variable reads an ODS semantic token', strays.length === 0, strays.slice(0, 3).join(' | '));

// The page fonts: the Tailwind preflight sets them on html, which the ODS components and the
// overlays a portal mounts under body inherit. Tailwind 4.3 inlines --default-font-family there,
// 4.0 reads it from the variable it declares.
const base = compiler.build([]);
const html = /html,\s*:host \{([^}]*)\}/.exec(base)?.[1].replace(/\s+/g, ' ') ?? '';
const pageFont = html.includes('font-family: var(--ods-semantic-font-family-body')
  || (/font-family: var\( ?--default-font-family/.test(html) && base.includes('--default-font-family: var(--ods-semantic-font-family-body)'));
check('the page font is the ODS body font', pageFont, html.slice(0, 120));

// The ODS shadows compose with the Tailwind rings: Tailwind lists every shadow in one box-shadow, and
// a token worth `none` would invalidate the whole list, ring included.
if (existsSync(resolve(PKG, 'node_modules/@ovhcloud/ods-themes/dist/default/index.css'))) {
  const theme = readFileSync(require.resolve('@ovhcloud/ods-themes/default/css'), 'utf8');
  for (const name of ['control', 'raised', 'overlay']) {
    const value = new RegExp(`--ods-semantic-shadow-${name}:\\s*([^;]+);`).exec(theme)?.[1].trim();
    check(`shadow-ods-${name} composes with a ring`, !!value && value !== 'none', `--ods-semantic-shadow-${name}: ${value}`);
  }
}

// The ODS layers, between the Tailwind base and components, declared before Tailwind's own order.
// build() accumulates: after the shadow and weight utilities, Tailwind first emits
// `@layer properties;` (its @property fallbacks).
const order = /@layer ([a-z, -]+);/.exec(compiler.build([]).replace('@layer properties;', ''))?.[1];
check('the ODS layers sit between base and components', order === 'theme, base, ods-quarks, ods-atoms, ods-molecules, ods-organisms, components, utilities', order ?? '(none)');

// With the themes built: theme.css is up to date with the default theme's tokens, every token family
// is mapped or left out on purpose, and the other themes add no semantic token.
const tokensPath = resolve(PKG, 'node_modules/@ovhcloud/ods-themes/dist/default/tokens.json');
if (existsSync(tokensPath)) {
  const { root: tokens } = JSON.parse(readFileSync(tokensPath, 'utf8'));
  let lines = [];
  try {
    lines = themeVariables(tokens);
    check('every token family is mapped or left out', true);
  } catch (error) {
    check('every token family is mapped or left out', false, error.message);
  }
  check('theme.css is up to date (run build:prod)', lines.join('\n') === declared.join('\n'), `${lines.length} expected, ${declared.length} committed`);
  const families = [...NAMESPACES.map(({ family }) => family), ...LEFT_OUT];
  const semantic = Object.keys(tokens).filter((name) => name.startsWith('--ods-semantic-'));
  check(`every semantic token is in a listed family (${semantic.length})`, semantic.every((name) => families.some((family) => name.slice(15).startsWith(family))));
  for (const overlay of ['blue-jeans', 'aluminium-dark', 'blue-jeans-dark']) {
    const css = readFileSync(require.resolve(`@ovhcloud/ods-themes/${overlay}/css`), 'utf8');
    const added = [...new Set(css.match(/--ods-semantic-[a-z0-9-]+(?=\s*:)/g) ?? [])].filter((name) => !(name in tokens));
    check(`${overlay} adds no semantic token`, added.length === 0, added.join(', '));
  }
} else {
  results.push('-- the themes are not built: theme.css is not compared with their tokens (linters checks it)');
}

// Opt-in: the package brings neither ods-react nor Tailwind.
const pkg = JSON.parse(readFileSync(resolve(PKG, 'package.json'), 'utf8'));
check('no runtime dependency', !pkg.dependencies);
check('Tailwind v4 is a peer dependency', pkg.peerDependencies?.tailwindcss === '^4.0.0');

for (const line of results) {
  console.log(line);
}
const failed = results.filter((line) => line.startsWith('KO')).length;
console.log(failed === 0 ? '\nAll green.' : `\n${failed} failure(s).`);
process.exit(failed ? 1 : 0);
