// Compiles index.css with the Tailwind v4 compiler and checks the utilities it gives: every covered
// ODS semantic token has its utility, each utility reads its ODS variable, and the ODS layers sit
// between the Tailwind components and utilities. Usage: node tests/run.mjs (after build:prod).
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { compile } from 'tailwindcss';

const PKG = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
const { themeVariables } = require('../scripts/generate-theme.js');

const results = [];
const check = (label, ok, detail = '') => {
  results.push(`${ok ? 'OK ' : 'KO '} ${label}${ok ? '' : ` — ${detail}`}`);
};

// The CSS imports of index.css, resolved as a bundler would.
async function loadStylesheet(id, base) {
  const path = id === 'tailwindcss' ? require.resolve('tailwindcss/index.css') : resolve(base, id);
  return { base: dirname(path), content: readFileSync(path, 'utf8'), path };
}

const { root: tokens } = JSON.parse(readFileSync(require.resolve('@ovhcloud/ods-themes/default/tokens'), 'utf8'));
const compiler = await compile(readFileSync(resolve(PKG, 'index.css'), 'utf8'), { base: PKG, loadStylesheet });
const rule = (css, className) => new RegExp(`\\.${className} \\{([^}]*)\\}`).exec(css)?.[1].replace(/\s+/g, ' ').trim();

// One utility per namespace, with the declaration it must give.
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

// Coverage: every semantic token of a mapped family gives a utility that reads it.
const lines = themeVariables(tokens);
const mapped = lines.map((line) => /var\((--ods-semantic-[a-z0-9-]+)\)/.exec(line)[1]);
const families = /^--ods-semantic-(color-(?!shadow-)|size-radius-|shadow-|font-family-|font-weight-|size-space-|size-block-size-|size-inline-size-|motion-easing)/;
const expected = Object.keys(tokens).filter((name) => families.test(name));
const missing = expected.filter((name) => !mapped.includes(name));
check(`every mapped ODS token has its utility (${expected.length})`, missing.length === 0, missing.join(', '));
const colors = lines.filter((line) => line.startsWith('  --color-ods-')).map((line) => line.trim().split(':')[0].replace('--color-', ''));
const unbuilt = colors.filter((name) => !rule(compiler.build([`bg-${name}`]), `bg-${name}`));
check(`every color token gives a working bg- utility (${colors.length})`, unbuilt.length === 0, unbuilt.slice(0, 5).join(', '));

// The generated file is up to date with the tokens of the themes it was built against.
const themeCss = readFileSync(resolve(PKG, 'theme.css'), 'utf8');
check('theme.css is up to date (run build:prod)', lines.every((line) => themeCss.includes(line)) && themeCss.split('\n').filter((line) => line.startsWith('  --')).length === lines.length);

// The ODS layers, between the Tailwind components and utilities, declared before Tailwind's own order.
const css = compiler.build([]);
const order = /@layer ([a-z, -]+);/.exec(css.replace('@layer properties;', ''))?.[1];
check('the ODS layers sit between components and utilities', order === 'theme, base, components, ods-quarks, ods-atoms, ods-molecules, ods-organisms, utilities', order ?? '(none)');

// Opt-in: the package does not bring ods-react, nor Tailwind as a runtime dependency.
const pkg = JSON.parse(readFileSync(resolve(PKG, 'package.json'), 'utf8'));
check('no dependency on ods-react', !JSON.stringify(pkg.dependencies ?? {}).includes('ods-react'));
check('Tailwind is a peer dependency', !!pkg.peerDependencies?.tailwindcss && !pkg.dependencies?.tailwindcss);

for (const line of results) {
  console.log(line);
}
const failed = results.filter((line) => line.startsWith('KO')).length;
console.log(failed === 0 ? '\nAll green.' : `\n${failed} failure(s).`);
process.exit(failed ? 1 : 0);
