// Offline audit (milliseconds) of the package imports the documentation
// quotes, in code or as inline code: each '@ovhcloud/<package>/<subpath>' of a
// current guide or component page must match an export of that package, whose
// files exist once built.
// The release notes and migration guides quote past versions on purpose.
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const packagesRoot = resolve(here, '../..');
const contentRoot = resolve(here, '../src/content');
const PAST_VERSIONS = /^(whats-new|migration-)/;

const PACKAGES = Object.fromEntries(readdirSync(packagesRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && existsSync(resolve(packagesRoot, entry.name, 'package.json')))
  .map((entry) => {
    const json = JSON.parse(readFileSync(resolve(packagesRoot, entry.name, 'package.json'), 'utf8'));
    return [json.name, { dir: resolve(packagesRoot, entry.name), exports: json.exports }];
  }));

/* The files an export points at, '*' filled in, the TypeScript declarations aside. */
function exportTargets(exports, subpath) {
  const key = `.${subpath ? `/${subpath}` : ''}`;
  const pattern = Object.keys(exports).find((candidate) => candidate === key)
    ?? Object.keys(exports).find((candidate) => candidate.includes('*') && key.startsWith(candidate.split('*')[0]) && key.endsWith(candidate.split('*')[1]));
  if (!pattern) {
    return null;
  }
  const star = pattern.includes('*') ? key.slice(pattern.split('*')[0].length, key.length - pattern.split('*')[1].length) : '';
  const target = exports[pattern];
  const values = typeof target === 'string' ? [target] : Object.entries(target).filter(([condition]) => condition !== 'types').map(([, value]) => value);
  return values.map((value) => value.replace('*', star));
}

function pageFiles() {
  const guides = readdirSync(resolve(contentRoot, 'guides'))
    .filter((name) => name.endsWith('.mdx') && !PAST_VERSIONS.test(name))
    .map((name) => resolve(contentRoot, 'guides', name));
  const components = readdirSync(resolve(contentRoot, 'components'), { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => resolve(contentRoot, 'components', entry.name, 'documentation.mdx'))
    .filter((path) => existsSync(path));
  return [...guides, ...components];
}

async function suite() {
  const results = [];
  const ok = (label, pass, detail = '') => results.push(`${pass ? 'OK ' : 'KO '} ${label}${pass ? '' : ` — ${detail}`}`);

  const quoted = new Map();
  for (const path of pageFiles()) {
    for (const [, specifier] of readFileSync(path, 'utf8').matchAll(/['"`](?:pkg:)?(@ovhcloud\/[a-z0-9-]+(?:\/[\w./-]+)?)(?:\?[\w&=]+)?['"`]/g)) {
      quoted.set(specifier, [...(quoted.get(specifier) ?? []), path.slice(contentRoot.length + 1)]);
    }
  }

  const wrong = [];
  for (const [specifier, pages] of quoted) {
    const [scope, name, ...rest] = specifier.split('/');
    const pkg = PACKAGES[`${scope}/${name}`];
    const subpath = rest.join('/');
    const targets = !pkg ? null : pkg.exports ? exportTargets(pkg.exports, subpath) : (subpath ? null : ['package.json']);
    const missing = (targets ?? []).filter((target) => !existsSync(resolve(pkg.dir, target)));
    if (!targets || missing.length) {
      wrong.push(`${specifier} (${pages[0]}) ${!pkg ? 'is no package of the repository' : !targets ? 'is no export' : `points at missing ${missing.join(', ')}`}`);
    }
  }
  ok(`the ${quoted.size} package imports of the current pages resolve to built files`, wrong.length === 0, wrong.join('; '));
  return results;
}

export { suite };
