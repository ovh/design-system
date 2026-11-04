// Fails the build when the bundled CSS orders the layers wrongly: the ODS styles must sit after the
// Tailwind preflight (base) and before the app's components and the utilities. It goes wrong
// silently when the ODS theme or components are imported before the stylesheet that declares the
// order (see src/index.tsx).
import { readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const EXPECTED = ['theme', 'base', 'ods-quarks', 'ods-atoms', 'ods-molecules', 'ods-organisms', 'components', 'utilities'];
const assets = resolve(import.meta.dirname, '../dist/assets');
const css = readdirSync(assets).filter((file) => file.endsWith('.css')).map((file) => readFileSync(resolve(assets, file), 'utf8')).join('\n');

// The order a layer gets is that of its first appearance, in a statement or a block.
const order = [];
for (const [, names] of css.matchAll(/@layer ([a-z0-9,\s-]+?)\s*[;{]/g)) {
  for (const name of names.split(',').map((layer) => layer.trim())) {
    if (EXPECTED.includes(name) && !order.includes(name)) {
      order.push(name);
    }
  }
}

if (order.join() !== EXPECTED.join()) {
  console.error(`✗ CSS layer order: ${order.join(' > ')}\n  expected: ${EXPECTED.join(' > ')}`);
  process.exit(1);
}
console.log(`✓ CSS layer order: ${order.join(' > ')}`);
