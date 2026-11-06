/*
 * Changes no tool can detect in the code: the rendering. For every ODS component the corpus renders
 * (a JSX tag imported from an ODS package), the stylesheets of its folder are compared between the
 * two refs. Listed, never counted as sites.
 */
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { diffLines } from 'diff';

function kebab(name) {
  return name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

function styles(dir) {
  const out = [];
  const walk = (d) => {
    for (const e of readdirSync(d, { withFileTypes: true })) {
      if (e.isDirectory()) walk(join(d, e.name));
      else if (/\.s?css$/.test(e.name)) out.push(join(d, e.name));
    }
  };
  if (existsSync(dir)) walk(dir);
  return out;
}

/* The folder `components/<root>/src/components/<kebab>` that holds a component, in a surface. */
function componentDir(src, name) {
  const k = kebab(name);
  const components = join(src, 'components');
  if (!existsSync(components)) return null;
  for (const root of readdirSync(components)) {
    const dir = join(components, root, 'src/components', k);
    if (existsSync(dir)) return dir;
  }
  return null;
}

/* `usages`: Map(ODS export name → number of JSX elements in the corpus). */
export function visualChanges(usages, v19, v20) {
  const out = [];
  for (const [name, count] of [...usages].sort((a, b) => a[0].localeCompare(b[0]))) {
    const before = componentDir(v19.src, name);
    if (!before) continue;
    const after = componentDir(v20.src, name) ?? before.replace(v19.src, v20.src);
    let changed = 0;
    const files = [];
    for (const file of styles(before)) {
      const rel = relative(v19.src, file);
      const other = join(v20.src, rel);
      const a = readFileSync(file, 'utf8');
      const b = existsSync(other) ? readFileSync(other, 'utf8') : '';
      const lines = diffLines(a, b).filter((p) => p.added || p.removed).reduce((n, p) => n + p.count, 0);
      if (lines) files.push({ file: rel, lines, removed: !existsSync(other) });
      changed += lines;
    }
    out.push({ component: name, usages: count, styleLinesChanged: changed, files, stillExists: existsSync(after) });
  }
  return out;
}

/* Counts the JSX elements of each imported ODS name, from the type checker's source files. */
export function jsxUsages(ts, sourceFiles, odsSymbols, packages) {
  const usages = new Map();
  for (const sf of sourceFiles) {
    const { names } = odsSymbols(ts, sf, packages);
    if (!names.size) continue;
    const visit = (node) => {
      if ((ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) && ts.isIdentifier(node.tagName)) {
        const imported = names.get(node.tagName.text);
        if (imported && imported !== '*' && imported !== 'default') usages.set(imported, (usages.get(imported) ?? 0) + 1);
      }
      ts.forEachChild(node, visit);
    };
    visit(sf);
  }
  return usages;
}
