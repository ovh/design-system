/*
 * Comparison with a hand-migrated truth.
 *
 * `compareTruthFile` compares the original, the ods-migrate output and the truth item by item:
 *   jsx-attribute     one attribute of one JSX element (elements aligned across the three versions,
 *                     attributes by name: their order does not matter, values normalized)
 *   jsx-element       a whole element only one side added or removed
 *   css-declaration   one declaration, keyed by its selector path and property (order-insensitive)
 *   import-specifier  one name of one import (or re-export) declaration
 *   line              what is left (code outside JSX and imports, strings, SCSS directives): the
 *                     normalized lines of a region, as the former line comparison did
 * An item is compared when ods-migrate changed it, or when the truth changed it and it touches ODS.
 * AGREE: ods-migrate wrote what the truth has. Each DIFFER gets one class:
 *   style-only        the same code spelled differently (`X_STATUS.accent` vs `"accent"`, `{"x"}`,
 *                     `import type`, an import left unused)
 *   decision          the truth applies a look DECISIONS.md rejects for the run's config: a v19-look
 *                     addition (look ids of configurator/choices.json, or a new v20 prop set to keep
 *                     the v19 rendering), an explicit default value kept, a z-index rewrite
 *   unrelated-change  the truth changed code the v20 API does not require to change (no site, no
 *                     removed name, prop or value), added or removed content
 *   tool-wrong        everything else: ods-migrate left or wrote code the truth migrated otherwise
 * `excluded` items fall in lines the truth does not cover (a corpus truth built by a merge marks them).
 *
 * `compareFile` is the former line-based comparison, kept for reference runs.
 * `buildApi` / `apiDiff` read the public API of each surface (exports, constant members, the props
 * of each component and their literal values, the v20 defaults) with the type checker, so the
 * classification never reads the ods-migrate mappings.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { diffArrays } from 'diff';
import scss from 'postcss-scss';
import { alignLines, escapeRegExp } from './linemap.mjs';
import { walkFiles } from './token-sites.mjs';
import { odsSymbols, packagePattern } from './ts-sites.mjs';

const MARKER = /\{?\/\*\s*TODO\(ods-v20\)[\s\S]*?\*\/\}?[ \t]*|\/\/[ \t]*TODO\(ods-v20\)[^\n]*/g;
const MARKER_TEXT = 'TODO(ods-v20)';
const IMPORT = /^([ \t]*)import\s+(type\s+)?([^;'"]*?)\s+from\s+(['"])([^'"]+)\4\s*;?/gm;

export const CLASSES = ['tool-wrong', 'decision', 'unrelated-change', 'style-only'];

/* The look ids of configurator/choices.json the classification knows; the harness checks they still exist. */
export const LOOK_IDS = ['button-default-emphasis', 'message-default-emphasis', 'card-default-status', 'badge-accent-filled', 'divider-neutral-grey', 'spinner-neutral-grey', 'page-background'];

/* ------------------------------------------------------------------------------------------------
 * Normalization
 * --------------------------------------------------------------------------------------------- */

function keepNewlines(match) {
  return match.replace(/[^\n]/g, '');
}

/* Code text with markers removed, quotes unified, whitespace dropped around punctuation. */
export function normCode(text) {
  return text
    .replace(MARKER, '')
    .replace(/'/g, '"')
    .replace(/\s+/g, ' ')
    .replace(/\s*([{}()[\],;:<>=?|&/])\s*/g, '$1')
    .replace(/,([}\])])/g, '$1')
    .replace(/[;,]+$/, '')
    .trim();
}

/*
 * The spelling-insensitive form of a value: a constant member `X_Y.member` and a string literal
 * `"member"` are the same, `{"x"}` is `"x"`. Two values with the same form differ only by style.
 */
export function semValue(value) {
  if (value === null || value === undefined) return value;
  return value
    .replace(/(?<![\w$.])[A-Z][A-Z0-9]*(?:_[A-Z0-9]+)+\.([A-Za-z_$][\w$]*)/g, '"$1"')
    .replace(/^\{("[^"]*")\}$/, '$1')
    .replace(/^\{`([^`$]*)`\}$/, '"$1"');
}

function canonicalImport(_all, _indent, typeOnly, clause, _quote, source) {
  let head = clause.trim();
  const braces = head.match(/\{([\s\S]*)\}/);
  if (braces) {
    const names = braces[1].split(',').map((n) => n.trim().replace(/\s+/g, ' ')).filter(Boolean).sort();
    head = head.replace(braces[0], `{${names.join(',')}}`);
  }
  return `import ${typeOnly ? 'type ' : ''}${head.replace(/\s+/g, '')} from "${source}"`;
}

/* → [{ text, line }]: the normalized non-blank lines, with their 1-based line in the input. */
export function normalize(source) {
  let text = source.replace(/\r\n/g, '\n').replace(MARKER, keepNewlines);
  text = text.replace(IMPORT, (all, ...groups) => canonicalImport(all, ...groups) + keepNewlines(all));
  const lines = [];
  text.split('\n').forEach((raw, index) => {
    const t = raw
      .replace(/'/g, '"')
      .replace(/\s+/g, ' ')
      .replace(/\s*([{}()[\],;:<>=?|&/])\s*/g, '$1')
      .replace(/[;,]+$/, '')
      .trim();
    if (t) lines.push({ text: t, line: index + 1 });
  });
  // Consecutive import lines: their order does not matter.
  for (let i = 0; i < lines.length;) {
    let j = i;
    while (j < lines.length && lines[j].text.startsWith('import ')) j += 1;
    if (j - i > 1) {
      const run = lines.slice(i, j).sort((a, b) => a.text.localeCompare(b.text));
      lines.splice(i, j - i, ...run);
    }
    i = Math.max(j, i + 1);
  }
  return lines;
}

/* ------------------------------------------------------------------------------------------------
 * Line regions (the former comparison, and the `line` items)
 * --------------------------------------------------------------------------------------------- */

/*
 * The output lines of `align` per coordinate of the original: line i at 2i+1, the slot before
 * line i at 2i. The added lines of a replace hunk go to its first removed line.
 */
function projection(align, newLines, oldCount) {
  const out = Array.from({ length: 2 * oldCount + 1 }, () => []);
  const intervals = [];
  for (let i = 0; i < oldCount; i += 1) if (align.oldTo[i] >= 0) out[2 * i + 1].push(newLines[align.oldTo[i]]);
  for (const h of align.hunks) {
    const at = h.a1 > h.a0 ? 2 * h.a0 + 1 : 2 * h.a0;
    for (let j = h.b0; j < h.b1; j += 1) out[at].push(newLines[j]);
    intervals.push(h.a1 > h.a0 ? [2 * h.a0 + 1, 2 * h.a1 - 1] : [2 * h.a0, 2 * h.a0]);
  }
  return { out, intervals };
}

function mergeIntervals(intervals) {
  const sorted = intervals.sort((a, b) => a[0] - b[0]);
  const merged = [];
  for (const [s, e] of sorted) {
    const last = merged.at(-1);
    if (last && s <= last[1] + 1) last[1] = Math.max(last[1], e);
    else merged.push([s, e]);
  }
  return merged;
}

/* Every region where the output or the truth differs from the original (normalized lines). */
function lineRegions(original, migrated, truth) {
  const o = normalize(original);
  const m = normalize(migrated);
  const t = normalize(truth);
  const text = (lines) => lines.map((l) => l.text);
  const pm = projection(alignLines(text(o), text(m)), text(m), o.length);
  const pt = projection(alignLines(text(o), text(t)), text(t), o.length);
  const regions = [];
  for (const [s, e] of mergeIntervals([...pm.intervals, ...pt.intervals])) {
    const slice = (p) => p.out.slice(s, e + 1).flat();
    const lo = Math.ceil((s - 1) / 2);
    const hi = Math.floor((e - 1) / 2);
    const origLines = o.slice(lo, hi + 1);
    // A pure insertion is reported at the line it precedes (or the last line).
    const anchor = (o[lo] ?? o.at(-1))?.line ?? 1;
    const mm = slice(pm);
    const tt = slice(pt);
    // An edit in place on both sides: one region per line, so that one wrong line does not hide its neighbours.
    if (origLines.length > 1 && mm.length === origLines.length && tt.length === origLines.length) {
      origLines.forEach((l, k) => regions.push({ lines: [l.line, l.line], original: l.text, migrated: mm[k], truth: tt[k], originalLines: [l] }));
    } else {
      regions.push({
        lines: origLines.length ? [origLines[0].line, origLines.at(-1).line] : [anchor, anchor],
        original: origLines.map((l) => l.text).join('\n'),
        migrated: mm.join('\n'),
        truth: tt.join('\n'),
        originalLines: origLines,
      });
    }
  }
  return regions;
}

/*
 * The former line-based comparison of one file. `relevant(texts)` says whether a region touches ODS;
 * `siteLines` are the 1-based original lines of the sites of the file.
 * → [{ verdict: 'agree' | 'differ', lines: [first, last] (original, 1-based), original, migrated, truth }]
 */
export function compareFile({ original, migrated, truth, relevant, siteLines = [] }) {
  const sites = new Set(siteLines);
  const out = [];
  for (const { originalLines, ...part } of lineRegions(original, migrated, truth)) {
    const hasSite = sites.has(part.lines[0]) || originalLines.some((l) => l.line >= part.lines[0] && l.line <= part.lines[1] && sites.has(l.line));
    if (!hasSite && !relevant([part.original, part.migrated, part.truth].join('\n'))) continue;
    part.verdict = part.migrated === part.truth ? 'agree' : 'differ';
    out.push(part);
  }
  return out;
}

/* ------------------------------------------------------------------------------------------------
 * Parsing: scripts (TypeScript AST) and stylesheets (postcss-scss)
 * --------------------------------------------------------------------------------------------- */

const SCRIPT = /\.(c|m)?[jt]sx?$/;
const STYLE = /\.(s?css|less)$/;

function lineAt(starts, pos) {
  let lo = 0;
  let hi = starts.length - 1;
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (starts[mid] <= pos) lo = mid;
    else hi = mid - 1;
  }
  return lo + 1;
}

function lineStarts(text) {
  const starts = [0];
  for (let i = 0; i < text.length; i += 1) if (text[i] === '\n') starts.push(i + 1);
  return starts;
}

/* Replaces [start, end) ranges with spaces, newlines kept. */
function maskRanges(text, ranges) {
  if (!ranges.length) return text;
  const chars = text.split('');
  for (const [s, e] of ranges) for (let i = s; i < e && i < chars.length; i += 1) if (chars[i] !== '\n') chars[i] = ' ';
  return chars.join('');
}

function scriptKind(ts, file) {
  if (/\.(c|m)?tsx$/.test(file)) return ts.ScriptKind.TSX;
  if (/\.(c|m)?jsx$/.test(file)) return ts.ScriptKind.JSX;
  if (/\.(c|m)?ts$/.test(file)) return ts.ScriptKind.TS;
  return ts.ScriptKind.JSX; // .js may hold JSX
}

const isJsxLike = (ts, n) => ts.isJsxElement(n) || ts.isJsxSelfClosingElement(n) || ts.isJsxFragment(n);

/* The source text of `node` with the nested JSX elements replaced by `<Tag/>`, normalized. */
function valueText(ts, sf, node) {
  const start = node.getStart(sf);
  const nested = [];
  const visit = (n) => {
    if (isJsxLike(ts, n)) {
      const open = ts.isJsxElement(n) ? n.openingElement : n;
      const tag = ts.isJsxFragment(n) ? '' : open.tagName.getText(sf);
      nested.push([n.getStart(sf) - start, n.end - start, `<${tag}/>`]);
      return;
    }
    ts.forEachChild(n, visit);
  };
  visit(node);
  let text = sf.text.slice(start, node.end);
  for (const [s, e, r] of nested.sort((a, b) => b[0] - a[0])) text = text.slice(0, s) + r + text.slice(e);
  return normCode(text);
}

function attrValue(ts, sf, attr) {
  const init = attr.initializer;
  if (!init) return '{true}';
  if (ts.isStringLiteral(init)) return `"${init.text}"`;
  if (ts.isJsxExpression(init)) {
    const e = init.expression;
    if (!e) return '{}';
    if (ts.isStringLiteral(e) || ts.isNoSubstitutionTemplateLiteral(e)) return `{"${e.text}"}`;
    return `{${valueText(ts, sf, e)}}`;
  }
  return valueText(ts, sf, init);
}

/*
 * → { imports: [{ module, imported, local, typeOnly, reexport, line }], elements: [{ tag, line, endLine,
 *     attrs: Map(name → value), label, text }], masked } (masked: the text with imports and JSX tags blanked)
 */
export function parseScript(ts, file, text) {
  const sf = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true, scriptKind(ts, file));
  const starts = lineStarts(text);
  const line = (pos) => lineAt(starts, pos);
  const imports = [];
  const elements = [];
  const masks = [];
  for (const st of sf.statements) {
    const isImport = ts.isImportDeclaration(st);
    const isReexport = ts.isExportDeclaration(st) && st.moduleSpecifier;
    if ((!isImport && !isReexport) || !ts.isStringLiteral(st.moduleSpecifier)) continue;
    const module = st.moduleSpecifier.text;
    const at = line(st.getStart(sf));
    masks.push([st.getStart(sf), st.end]);
    if (isImport) {
      const clause = st.importClause;
      if (!clause) {
        imports.push({ module, imported: '', local: '', typeOnly: false, reexport: false, line: at });
        continue;
      }
      if (clause.name) imports.push({ module, imported: 'default', local: clause.name.text, typeOnly: clause.isTypeOnly, reexport: false, line: at });
      const b = clause.namedBindings;
      if (b && ts.isNamespaceImport(b)) imports.push({ module, imported: '*', local: b.name.text, typeOnly: clause.isTypeOnly, reexport: false, line: at });
      if (b && ts.isNamedImports(b)) {
        for (const el of b.elements) {
          imports.push({ module, imported: (el.propertyName ?? el.name).text, local: el.name.text, typeOnly: clause.isTypeOnly || el.isTypeOnly, reexport: false, line: line(el.getStart(sf)) });
        }
      }
    } else {
      const c = st.exportClause;
      if (!c) imports.push({ module, imported: '*', local: '*', typeOnly: st.isTypeOnly, reexport: true, line: at });
      else if (ts.isNamespaceExport(c)) imports.push({ module, imported: '*', local: c.name.text, typeOnly: st.isTypeOnly, reexport: true, line: at });
      else for (const el of c.elements) imports.push({ module, imported: (el.propertyName ?? el.name).text, local: el.name.text, typeOnly: st.isTypeOnly || el.isTypeOnly, reexport: true, line: line(el.getStart(sf)) });
    }
  }
  const visit = (node) => {
    if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
      const attrs = new Map();
      const attrLines = new Map();
      for (const a of node.attributes.properties) {
        const name = ts.isJsxSpreadAttribute(a) ? `{...${valueText(ts, sf, a.expression)}}` : a.name.getText(sf);
        attrs.set(name, ts.isJsxSpreadAttribute(a) ? '' : attrValue(ts, sf, a));
        attrLines.set(name, [line(a.getStart(sf)), line(a.end - 1)]);
      }
      let label = '';
      if (ts.isJsxOpeningElement(node)) {
        const first = node.parent.children.find((c) => !(ts.isJsxText(c) && !c.text.trim()));
        if (first && ts.isJsxText(first)) label = first.text.trim().replace(/\s+/g, ' ').slice(0, 40);
      }
      const start = node.getStart(sf);
      elements.push({ tag: node.tagName.getText(sf), line: line(start), endLine: line(node.end - 1), attrs, attrLines, label, start, end: node.end });
      masks.push([start, node.end]);
    } else if (ts.isJsxClosingElement(node)) {
      masks.push([node.getStart(sf), node.end]);
    } else if (ts.isJsxText(node)) {
      // Element content is text, not API: a relabelled demo is not a migration.
      masks.push([node.pos, node.end]);
    }
    ts.forEachChild(node, visit);
  };
  visit(sf);
  return { imports, elements, masked: maskRanges(text, masks) };
}

/* → { declarations: [{ path, prop, value, line }], masked } or null when postcss-scss cannot parse it. */
export function parseStyle(file, text) {
  let root;
  try {
    root = scss.parse(text, { from: file });
  } catch {
    return null;
  }
  const declarations = [];
  const masks = [];
  root.walkDecls((d) => {
    const path = [];
    for (let p = d.parent; p && p.type !== 'root'; p = p.parent) {
      path.unshift(p.type === 'rule' ? p.selector.replace(/\s+/g, ' ').trim() : `@${p.name} ${(p.params ?? '').replace(/\s+/g, ' ').trim()}`);
    }
    const value = normCode(`${d.value}${d.important ? '!important' : ''}`.replace(/\/\*[\s\S]*?\*\//g, ''));
    declarations.push({ path: path.join(' > '), prop: d.prop, value, line: d.source.start.line });
    const s = d.source.start.offset;
    let e = d.source.end?.offset ?? s;
    while (e < text.length && text[e] !== ';' && text[e] !== '\n' && text[e] !== '}') e += 1;
    if (text[e] === ';') e += 1;
    masks.push([s, e]);
  });
  return { declarations, masked: maskRanges(text, masks) };
}

/* JSX written inside strings (documentation snippets): `<Tag attr="x" other={ Y.z }>`. */
export function snippetElements(text) {
  const out = [];
  for (const m of text.matchAll(/<([A-Z][\w.]*)((?:\s+[\w-]+(?:=(?:"[^"]*"|'[^']*'|\{[^{}]*\}))?)*)\s*\/?>/g)) {
    const attrs = new Map();
    for (const a of m[2].matchAll(/([\w-]+)(?:=("[^"]*"|'[^']*'|\{[^{}]*\}))?/g)) {
      const raw = a[2];
      attrs.set(a[1], raw === undefined ? '{true}' : raw.startsWith('{') ? `{${normCode(raw.slice(1, -1))}}` : `"${raw.slice(1, -1)}"`);
    }
    out.push({ tag: m[1], attrs });
  }
  return out;
}

/* ------------------------------------------------------------------------------------------------
 * Alignment of element lists
 * --------------------------------------------------------------------------------------------- */

function signature(el) {
  return `${el.tag} ${[...el.attrs].map(([k, v]) => `${k}=${v}`).sort().join(' ')}`;
}

/* The signature the alignment anchors on: the attributes and the text label (an element without attributes is common). */
function anchor(el) {
  return `${signature(el)} |${el.label ?? ''}`;
}

function tokens(el) {
  const out = new Set();
  for (const [k, v] of el.attrs) {
    out.add(k);
    out.add(`${k}=${semValue(v)}`);
    if (v) out.add(`=${semValue(v)}`);
  }
  if (el.label) out.add(`label:${el.label}`);
  return out;
}

/* Jaccard similarity of two elements of the same tag (-Infinity for two tags). */
export function similarity(a, b) {
  if (a.tag !== b.tag) return -Infinity;
  const x = tokens(a);
  const y = tokens(b);
  let common = 0;
  for (const t of x) if (y.has(t)) common += 1;
  const union = x.size + y.size - common;
  return union ? common / union : 1;
}

/*
 * Pairs two runs of changed elements. First an order-preserving pairing (suffix scores, then a
 * forward walk: on a tie the earliest elements pair first, so a truth that drops some elements of a
 * run keeps the others in order), then the elements left on both sides pair by similarity whatever
 * their order (a demo the truth moved), when they share enough.
 * `score(i, j)` is the evidence that a[i] and b[j] are the same element (-Infinity: never).
 */
function pairWithin(n, m, score) {
  if (n * m > 250_000) {
    const pairs = [];
    let j = 0;
    for (let i = 0; i < n; i += 1) {
      while (j < m && score(i, j) === -Infinity) j += 1;
      if (j < m) pairs.push([i, j++]);
    }
    return pairs;
  }
  const sim = Array.from({ length: n }, (_, i) => Float64Array.from({ length: m }, (_, j) => score(i, j)));
  const best = Array.from({ length: n + 1 }, () => new Float64Array(m + 1));
  for (let i = n - 1; i >= 0; i -= 1) {
    for (let j = m - 1; j >= 0; j -= 1) {
      const s = sim[i][j];
      best[i][j] = Math.max(best[i + 1][j], best[i][j + 1], s === -Infinity ? -Infinity : best[i + 1][j + 1] + 0.5 + s);
    }
  }
  const pairs = [];
  for (let i = 0, j = 0; i < n && j < m;) {
    const s = sim[i][j];
    if (s !== -Infinity && best[i][j] === best[i + 1][j + 1] + 0.5 + s) {
      pairs.push([i, j]);
      i += 1;
      j += 1;
    } else if (best[i][j] === best[i + 1][j]) i += 1;
    else j += 1;
  }
  const usedA = new Set(pairs.map(([i]) => i));
  const usedB = new Set(pairs.map(([, j]) => j));
  const left = [];
  for (let i = 0; i < n; i += 1) if (!usedA.has(i)) for (let j = 0; j < m; j += 1) if (!usedB.has(j) && sim[i][j] >= 0.34) left.push([sim[i][j], i, j]);
  for (const [, i, j] of left.sort((x, y) => y[0] - x[0] || x[1] - y[1] || x[2] - y[2])) {
    if (usedA.has(i) || usedB.has(j)) continue;
    usedA.add(i);
    usedB.add(j);
    pairs.push([i, j]);
  }
  return pairs;
}

/*
 * → Int32Array: for each element of `a`, its index in `b` (-1: none).
 * options: lineOf(bElement) → the line of `a` it sits on (a line alignment of the two texts), and
 *          bridge(i) → another version of a[i] (the ods-migrate output of an original element, to
 *          pair it with the truth element it became).
 */
export function alignElements(a, b, { lineOf = null, bridge = null } = {}) {
  const map = new Int32Array(a.length).fill(-1);
  const score = (i, j) => {
    const x = a[i];
    const y = b[j];
    let s = similarity(x, y);
    if (s === -Infinity) return s;
    const via = bridge?.(i);
    if (via) s = Math.max(s, similarity(via, y));
    if (lineOf && lineOf(y) === x.line) s += 0.2;
    return s;
  };
  let i = 0;
  let j = 0;
  let gapA = [];
  let gapB = [];
  const flush = () => {
    for (const [x, y] of pairWithin(gapA.length, gapB.length, (p, q) => score(gapA[p], gapB[q]))) map[gapA[x]] = gapB[y];
    gapA = [];
    gapB = [];
  };
  // Anchors: the same signature and label, on lines the line diff aligns (two identical `<Spinner />`
  // far apart are not the same element).
  // (jsdiff calls the comparator with the new item first: the sides are tagged, not assumed.)
  const comparator = (x, y) => {
    if (x.key !== y.key) return false;
    if (!lineOf) return true;
    const [ea, eb] = x.side === 'a' ? [x.el, y.el] : [y.el, x.el];
    return lineOf(eb) === ea.line;
  };
  for (const part of diffArrays(a.map((el) => ({ key: anchor(el), el, side: 'a' })), b.map((el) => ({ key: anchor(el), el, side: 'b' })), { comparator })) {
    const n = part.value.length;
    if (part.removed) {
      for (let k = 0; k < n; k += 1) gapA.push(i + k);
      i += n;
    } else if (part.added) {
      for (let k = 0; k < n; k += 1) gapB.push(j + k);
      j += n;
    } else {
      flush();
      for (let k = 0; k < n; k += 1) map[i + k] = j + k;
      i += n;
      j += n;
    }
  }
  flush();
  return map;
}

/* ------------------------------------------------------------------------------------------------
 * Public API of a surface (type checker) and the v19 → v20 differences
 * --------------------------------------------------------------------------------------------- */

function literalValues(ts, type) {
  const parts = type.isUnion() ? type.types : [type];
  const values = [];
  for (const t of parts) {
    if (t.flags & (ts.TypeFlags.Undefined | ts.TypeFlags.Null)) continue;
    if (t.isStringLiteral() || t.isNumberLiteral()) values.push(String(t.value));
    else if (t.flags & ts.TypeFlags.BooleanLiteral) values.push(t.intrinsicName);
    else return null;
  }
  return values;
}

/* The declaration a component value comes from: `const X = Object.assign(Root, {…})` → Root's declaration. */
export function componentDeclaration(ts, checker, decl, depth = 0) {
  if (!decl || depth > 4 || !ts.isVariableDeclaration(decl) || !decl.initializer) return decl;
  let init = decl.initializer;
  while (ts.isAsExpression(init) || ts.isParenthesizedExpression(init)) init = init.expression;
  const target = ts.isIdentifier(init) ? init : ts.isCallExpression(init) && init.arguments[0] && ts.isIdentifier(init.arguments[0]) && !init.arguments.some((a) => ts.isArrowFunction(a) || ts.isFunctionExpression(a)) ? init.arguments[0] : null;
  if (!target) return decl;
  let sym = checker.getSymbolAtLocation(target);
  if (sym && sym.flags & ts.SymbolFlags.Alias) sym = checker.getAliasedSymbol(sym);
  return sym?.valueDeclaration ? componentDeclaration(ts, checker, sym.valueDeclaration, depth + 1) : decl;
}

export function defaultsOf(ts, decl, constants) {
  const out = {};
  if (!decl) return out;
  const fn = (() => {
    let found = null;
    const visit = (n) => {
      if (found) return;
      if ((ts.isArrowFunction(n) || ts.isFunctionExpression(n) || ts.isFunctionDeclaration(n)) && n.parameters[0] && ts.isObjectBindingPattern(n.parameters[0].name)) {
        found = n;
        return;
      }
      ts.forEachChild(n, visit);
    };
    visit(decl);
    return found;
  })();
  if (!fn) return out;
  const value = (e) => {
    if (!e) return undefined;
    if (ts.isStringLiteral(e) || ts.isNumericLiteral(e)) return e.text;
    if (e.kind === ts.SyntaxKind.TrueKeyword) return 'true';
    if (e.kind === ts.SyntaxKind.FalseKeyword) return 'false';
    if (ts.isPropertyAccessExpression(e) && ts.isIdentifier(e.expression)) return constants[e.expression.text]?.[e.name.text] ?? e.name.text;
    return undefined;
  };
  const props = new Set();
  for (const el of fn.parameters[0].name.elements) {
    const name = (el.propertyName ?? el.name).getText();
    props.add(name);
    const v = value(el.initializer);
    if (v !== undefined) out[name] = v;
  }
  // `prop ?? X.y`, and `cond(prop) ? prop as T : X.y`: the fallback is the default.
  const visit = (n) => {
    if (ts.isBinaryExpression(n) && n.operatorToken.kind === ts.SyntaxKind.QuestionQuestionToken && ts.isIdentifier(n.left) && props.has(n.left.text) && out[n.left.text] === undefined) {
      const v = value(n.right);
      if (v !== undefined) out[n.left.text] = v;
    }
    if (ts.isConditionalExpression(n)) {
      let e = n.whenTrue;
      while (ts.isAsExpression(e) || ts.isParenthesizedExpression(e)) e = e.expression;
      if (ts.isIdentifier(e) && props.has(e.text) && out[e.text] === undefined) {
        const v = value(n.whenFalse);
        if (v !== undefined) out[e.text] = v;
      }
    }
    ts.forEachChild(n, visit);
  };
  if (fn.body) visit(fn.body);
  return out;
}

/*
 * The public API of `@ovhcloud/ods-react` on one surface: exports, the members of the constant
 * objects (`BUTTON_STATUS.brand` → 'brand'), the ODS-declared props of each component (literal
 * values when the type is a union of literals, `never` when removed), and the defaults the component
 * code applies. Cached as `<dir>/api-<sha12>.json`.
 */
export function buildApi(ts, surface, options, dir) {
  const cacheFile = join(dir, `api-v1-${surface.sha.slice(0, 12)}.json`);
  if (existsSync(cacheFile)) return JSON.parse(readFileSync(cacheFile, 'utf8'));
  mkdirSync(dir, { recursive: true });
  const file = join(dir, `api-probe-${surface.sha.slice(0, 12)}.ts`);
  writeFileSync(file, "import * as ODS from '@ovhcloud/ods-react';\nexport { ODS };\n");
  const program = ts.createProgram([file, join(surface.root, 'ambient.d.ts')], options);
  const checker = program.getTypeChecker();
  const sf = program.getSourceFile(file);
  const moduleSymbol = checker.getSymbolAtLocation(sf.statements[0].moduleSpecifier);
  if (!moduleSymbol) throw new Error(`cannot read the API of ${surface.ref}`);
  const api = { ref: surface.ref, sha: surface.sha, exports: [], constants: {}, components: {}, defaults: {} };
  const inOds = (decl) => decl.getSourceFile().fileName.startsWith(surface.src);
  const componentDecls = {};
  for (const exp of checker.getExportsOfModule(moduleSymbol)) {
    const name = exp.getName();
    api.exports.push(name);
    const sym = exp.flags & ts.SymbolFlags.Alias ? checker.getAliasedSymbol(exp) : exp;
    if (!(sym.flags & ts.SymbolFlags.Value)) continue;
    const type = checker.getTypeOfSymbolAtLocation(sym, sf);
    if (/^[A-Z][A-Z0-9]*(_[A-Z0-9]+)*$/.test(name)) {
      const members = {};
      let all = true;
      for (const p of type.getProperties()) {
        const t = checker.getTypeOfSymbolAtLocation(p, sf);
        if (t.isStringLiteral() || t.isNumberLiteral()) members[p.getName()] = String(t.value);
        else all = false;
      }
      if (all && Object.keys(members).length) api.constants[name] = members;
      continue;
    }
    if (!/^[A-Z]/.test(name)) continue;
    const sig = type.getCallSignatures()[0];
    const param = sig?.getParameters()[0];
    if (!param) continue;
    const propsType = checker.getTypeOfSymbolAtLocation(param, sf);
    const props = {};
    for (const p of propsType.getProperties()) {
      const decls = p.getDeclarations() ?? [];
      if (!decls.some(inOds)) continue;
      const t = checker.getNonNullableType(checker.getTypeOfSymbolAtLocation(p, sf));
      const never = Boolean(t.flags & ts.TypeFlags.Never);
      props[p.getName()] = { values: never ? [] : literalValues(ts, t), type: checker.typeToString(t), never };
    }
    api.components[name] = props;
    componentDecls[name] = sym.valueDeclaration;
  }
  for (const [name, decl] of Object.entries(componentDecls)) api.defaults[name] = defaultsOf(ts, componentDeclaration(ts, checker, decl), api.constants);
  writeFileSync(cacheFile, `${JSON.stringify(api)}\n`);
  return api;
}

/* The questions the classification asks about the v19 → v20 API. */
export function apiDiff(v19, v20) {
  const exports19 = new Set(v19.exports);
  const exports20 = new Set(v20.exports);
  const literal = (value, constants) => {
    if (value === null || value === undefined) return null;
    let m = value.match(/^\{?"([^"]*)"\}?$/);
    if (m) return m[1];
    m = value.match(/^\{?([A-Z][A-Z0-9_]*)\.([A-Za-z_$][\w$]*)\}?$/);
    if (m) return constants[m[1]]?.[m[2]] ?? null;
    m = value.match(/^\{(true|false|-?\d+(?:\.\d+)?)\}$/);
    return m ? m[1] : null;
  };
  // `isLocal(name)`: a name the file declares itself (a local `BADGE_COLOR`) is not the ODS export.
  const removedRef = (text, isLocal = () => false) => {
    if (!text) return null;
    for (const m of text.matchAll(/(?<![\w$.])([A-Z][A-Za-z0-9_]*)(?:\.([A-Za-z_$][\w$]*))?/g)) {
      if (!exports19.has(m[1]) || isLocal(m[1])) continue;
      if (!exports20.has(m[1])) return `${m[1]} is not exported in v20`;
      if (m[2] && v19.constants[m[1]]?.[m[2]] !== undefined && v20.constants[m[1]]?.[m[2]] === undefined) return `${m[1]}.${m[2]} does not exist in v20`;
    }
    return null;
  };
  return {
    v19,
    v20,
    exports19,
    exports20,
    literal19: (value) => literal(value, v19.constants),
    literal20: (value) => literal(value, v20.constants),
    removedRef,
    isComponent19: (name) => Boolean(v19.components[name]),
    isProp19: (comp, prop) => Boolean(v19.components[comp]?.[prop]),
    isProp20: (comp, prop) => Boolean(v20.components[comp]?.[prop] && !v20.components[comp][prop].never),
    default20: (comp, prop) => v20.defaults[comp]?.[prop],
    /* Why the v19 attribute `prop={value}` of `comp` must change in v20, or null. */
    propChange(comp, prop, value) {
      const p19 = v19.components[comp]?.[prop];
      if (!p19) return null;
      const p20 = v20.components[comp]?.[prop];
      if (!p20 || p20.never) return `${comp} has no ${prop} prop in v20`;
      const ref = removedRef(value);
      if (ref) return ref;
      const lit = literal(value, v19.constants);
      if (lit !== null && p20.values) return p20.values.includes(lit) ? null : `${comp} ${prop}="${lit}" is not a v20 value`;
      if (lit === null && p19.type !== p20.type) return `${comp} ${prop} changed type (${p19.type} → ${p20.type})`;
      return null;
    },
  };
}

/* The removed token names (sets of the harness) found in a text. */
function removedTokenIn(text, removed) {
  if (!text || !removed) return null;
  for (const m of text.matchAll(/--ods-[\w-]+|\$ods-[\w-]+/g)) {
    if (removed.css?.has(m[0]) || removed.scss?.has(m[0])) return `${m[0]} is removed in v20`;
  }
  for (const m of text.matchAll(/(?<![\w$-])(ods-[\w-]+)\(|@include\s+(?:[\w-]+\.)?(ods-[\w-]+)/g)) {
    const name = m[1] ?? m[2];
    if (removed.mixin?.has(name)) return `${name} is removed in v20`;
  }
  return null;
}

/* ------------------------------------------------------------------------------------------------
 * Classification
 * --------------------------------------------------------------------------------------------- */

const SEVERITY = { 'tool-wrong': 0, decision: 1, 'unrelated-change': 2, 'style-only': 3 };

function worst(classes) {
  return classes.sort((a, b) => SEVERITY[a.class] - SEVERITY[b.class])[0];
}

function lookOf(ctx, id) {
  return ctx.look?.[id] === 'v19' ? 'v19' : 'aluminium';
}

/*
 * A DIFFER the DECISIONS explain: the truth keeps a v19 look (or an explicit default) that the run's
 * config does not ask for. → { id, reason } or null.
 */
function attrDecision({ comp, name, o, m, t, oAttrs, mAttrs, tAttrs }, ctx) {
  const api = ctx.api;
  const semT = semValue(t);
  const lit20 = (v) => (api ? api.literal20(v) : (semValue(v)?.match(/^"([^"]*)"$/)?.[1] ?? null));
  const lit19 = (v) => (api ? api.literal19(v) : (semValue(v)?.match(/^"([^"]*)"$/)?.[1] ?? null));
  const lookRule = (id, reason) => (lookOf(ctx, id) === 'aluminium' ? { id, reason } : { id, reason, rejected: true });
  if (m === null && t !== null) {
    const tv = lit20(t);
    if ((comp === 'Button' || comp === 'Message') && name === 'emphasis') {
      const id = `${comp.toLowerCase()}-default-emphasis`;
      if (tv === 'high' && !oAttrs.has('emphasis') && (!oAttrs.has('variant') || lit19(oAttrs.get('variant')) === 'default')) return lookRule(id, `the truth adds emphasis="high" to keep the v19 look of a ${comp} without variant (or variant="default")`);
      if (tv === 'medium') return lookRule(id, `the truth keeps the explicit default emphasis="medium" (dropped by dropDefault)`);
    }
    if (comp === 'Card' && name === 'status' && tv === 'accent' && !oAttrs.has('color') && !oAttrs.has('status')) return lookRule('card-default-status', 'the truth adds status="accent" to keep the v19 Card border');
    if (comp === 'Badge' && name === 'emphasis' && tv === 'high' && lit20(mAttrs.get('status') ?? tAttrs.get('status')) === 'accent') return lookRule('badge-accent-filled', 'the truth adds emphasis="high" to keep the v19 filled primary Badge');
    if ((comp === 'Divider' || comp === 'Spinner') && name === 'style' && lit19(oAttrs.get('color')) === 'neutral') return lookRule(`${comp.toLowerCase()}-neutral-grey`, `the truth paints the v19 grey of a neutral ${comp}`);
    // An explicit default the truth keeps, when ods-migrate migrated the element (no v19-only prop left on it).
    const def = api?.default20(comp, name);
    if (def !== undefined && tv === def && ![...mAttrs].some(([n, v]) => api.propChange(comp, n, v))) return { id: 'drop-default', reason: `the truth writes the v20 default ${name}="${def}" explicitly (DECISIONS: explicit defaults are erased)` };
    // A prop new in v20, set by the truth on an element none of whose v19 props had to change (else it is the counterpart of a rename).
    if (o === null && api && !api.isProp19(comp, name) && api.isProp20(comp, name) && ![...oAttrs].some(([n, v]) => api.propChange(comp, n, v))) return { id: 'v19-look-addition', reason: `the truth sets the new v20 prop ${name} to a non-default value to keep the v19 rendering (DECISIONS: nothing added for the v19 look)` };
  }
  if (m !== null && t !== null && (comp === 'Button' || comp === 'Message') && name === 'emphasis') {
    const inner = m.replace(/^\{|\}$/g, '');
    const tInner = semT.replace(/^\{|\}$/g, '');
    if (tInner === `${inner}??"high"` || tInner === `(${inner})??"high"`) return lookRule(`${comp.toLowerCase()}-default-emphasis`, 'the truth turns a computed emphasis into `v ?? "high"` to keep the v19 look');
  }
  return null;
}

function zIndexDecision(o, m, t) {
  if (!o || m !== o || !t) return null;
  if (!/z-index/i.test(o) || !/calc\(|[+*]/.test(o)) return null;
  if (!/--ods-(semantic-z-index|layer)-/.test(t)) return null;
  return { id: 'z-index', reason: 'the truth rewrites a computed z-index; DECISIONS: no rewrite while the target system is undecided' };
}

function pageBackgroundDecision(o, m, t, ctx) {
  if (!/--ods-theme-background-color(?![\w-])|--ods-color-[a-z]+-000(?![\w-])/.test(o ?? '') || !m || !t) return null;
  if (lookOf(ctx, 'page-background') === 'aluminium' && /surface-page/.test(m) && /surface-raised/.test(t)) return { id: 'page-background', reason: 'the truth keeps the page white (surface-raised); DECISIONS: surface-page on html/body/:root' };
  if (/surface-raised/.test(m) && /surface-page/.test(t)) return { id: 'white-kept', reason: 'the truth turns a white surface into the grey page surface; DECISIONS: white is kept (surface-raised) off html/body/:root' };
  return null;
}

/* The class of one attribute difference. */
function classifyAttr(entry, ctx, siteOnLines) {
  const { comp, name, o, m, t, oAttrs } = entry;
  if (semValue(m) === semValue(t)) return { class: 'style-only', reason: 'same value, spelled differently' };
  if (localRename(semValue(m), semValue(t))) return { class: 'style-only', reason: 'the same value with a local name renamed' };
  const d = comp ? attrDecision(entry, ctx) : null;
  if (d && !d.rejected) return { class: 'decision', reason: d.reason, look: d.id };
  const z = zIndexDecision(o, m, t);
  if (z) return { class: 'decision', reason: z.reason, look: z.id };
  if (d?.rejected) return { class: 'tool-wrong', reason: `the config asks for the v19 look (${d.id}) and ods-migrate did not write it` };
  if (m === o) {
    const why = apiReason(entry, ctx, siteOnLines);
    if (why) return { class: 'tool-wrong', reason: `ods-migrate left it: ${why}` };
    return { class: 'unrelated-change', reason: o === null ? 'the truth adds an attribute the v20 API does not require' : 'the truth changed an attribute the v20 API does not require to change' };
  }
  return { class: 'tool-wrong', reason: 'ods-migrate wrote something else' };
}

/* Why the original attribute (or its element) must change in v20, or null. */
function apiReason({ comp, name, o, oAttrs }, ctx, siteOnLines) {
  if (siteOnLines) return 'a v20 site is on this line';
  const tok = removedTokenIn(o, ctx.removed);
  if (tok) return tok;
  const api = ctx.api;
  if (!api) return null;
  const ref = ctx.removedRef(o);
  if (ref) return ref;
  if (comp && o !== null) return api.propChange(comp, name, o);
  if (comp && o === null) {
    // An attribute only the truth has: the counterpart of a v19 attribute of the element that must change.
    for (const [n, v] of oAttrs) {
      const why = api.propChange(comp, n, v);
      if (why) return `counterpart of ${n}: ${why}`;
    }
  }
  return null;
}

/*
 * Two code texts that differ only by the names of local bindings, renamed one to one (a loop
 * variable `variant` the truth calls `emphasis`): the same code. Constants and components (a capital
 * first letter) and properties after a dot never count as local.
 */
export function localRename(x, y) {
  if (!x || !y || x === y) return false;
  const tok = (s) => {
    // Strings are whole tokens (a different string is never a rename); a template literal keeps its
    // text chunks whole and its `${…}` expressions tokenized; a hyphenated name (CSS) is one token.
    const out = [];
    let i = 0;
    let inTemplate = false;
    let depth = 0;
    while (i < s.length) {
      const c = s[i];
      if (inTemplate && depth === 0) {
        if (c === '`') {
          out.push({ t: '`' });
          inTemplate = false;
          i += 1;
        } else if (s.startsWith('${', i)) {
          out.push({ t: '${' });
          depth = 1;
          i += 2;
        } else {
          let j = i;
          while (j < s.length && s[j] !== '`' && !s.startsWith('${', j)) j += s[j] === '\\' ? 2 : 1;
          out.push({ t: `L:${s.slice(i, j)}` });
          i = j;
        }
        continue;
      }
      if (c === '"') {
        let j = i + 1;
        while (j < s.length && s[j] !== '"') j += s[j] === '\\' ? 2 : 1;
        out.push({ t: s.slice(i, j + 1) });
        i = j + 1;
      } else if (c === '`') {
        out.push({ t: '`' });
        inTemplate = true;
        i += 1;
      } else if (/[A-Za-z_$]/.test(c)) {
        const m = s.slice(i).match(/^[A-Za-z_$][\w$-]*/)[0];
        out.push({ t: m, prev: s[i - 1] });
        i += m.length;
      } else {
        if (inTemplate && c === '{') depth += 1;
        if (inTemplate && c === '}') depth -= 1;
        if (!/\s/.test(c)) out.push({ t: c });
        i += 1;
      }
    }
    return out;
  };
  const a = tok(x);
  const b = tok(y);
  if (a.length !== b.length) return false;
  const ab = new Map();
  const ba = new Map();
  let renamed = 0;
  const local = (w) => /^[a-z_$][\w$]*$/.test(w.t) && w.prev !== '.';
  for (let k = 0; k < a.length; k += 1) {
    if (a[k].t === b[k].t && !local(a[k])) continue;
    if (!local(a[k]) || !local(b[k])) return false;
    if ((ab.get(a[k].t) ?? b[k].t) !== b[k].t || (ba.get(b[k].t) ?? a[k].t) !== a[k].t) return false;
    ab.set(a[k].t, b[k].t);
    ba.set(b[k].t, a[k].t);
    if (a[k].t !== b[k].t) renamed += 1;
  }
  return renamed > 0;
}

/* `padding:a a` is `padding:a`: the box shorthands written with their repeated values left out. */
export function cssShorthand(text) {
  const m = text?.match(/^(padding|margin|inset|border-width|border-style|border-color|border-radius|scroll-margin|scroll-padding):(.*)$/);
  if (!m) return text;
  const parts = [];
  let depth = 0;
  let cur = '';
  for (const ch of m[2]) {
    if (ch === '(') depth += 1;
    if (ch === ')') depth -= 1;
    if (ch === ' ' && depth === 0) {
      if (cur) parts.push(cur);
      cur = '';
    } else cur += ch;
  }
  if (cur) parts.push(cur);
  // normCode drops the space after `)`: split `calc(…)calc(…)` too.
  const values = parts.flatMap((p) => p.split(/(?<=\))(?=[\w-]+\()/));
  if (values.length === 4 && values[3] === values[1]) values.pop();
  if (values.length === 3 && values[2] === values[0]) values.pop();
  if (values.length === 2 && values[1] === values[0]) values.pop();
  return `${m[1]}:${values.join(' ')}`;
}

function classifyText({ o, m, t }, ctx, siteOnLines) {
  if (semValue(m) === semValue(t)) return { class: 'style-only', reason: 'same code, spelled differently' };
  if (localRename(semValue(m), semValue(t))) return { class: 'style-only', reason: 'the same code with a local name renamed' };
  if (m && t && cssShorthand(m) === cssShorthand(t)) return { class: 'style-only', reason: 'the same box shorthand, with or without its repeated values' };
  const z = zIndexDecision(o, m, t) ?? pageBackgroundDecision(o, m, t, ctx);
  if (z) return { class: 'decision', reason: z.reason, look: z.id };
  // Snippets in strings: attribute by attribute when the three sides show the same elements.
  const so = snippetElements(o ?? '');
  const sm = snippetElements(m ?? '');
  const st = snippetElements(t ?? '');
  if (so.length && so.length === sm.length && so.length === st.length && so.every((e, k) => e.tag === sm[k].tag && e.tag === st[k].tag)) {
    const results = [];
    so.forEach((e, k) => {
      const comp = ctx.componentOf?.(e.tag) ?? (ctx.api?.isComponent19(e.tag) ? e.tag : null);
      for (const name of new Set([...e.attrs.keys(), ...sm[k].attrs.keys(), ...st[k].attrs.keys()])) {
        const entry = { comp, name, o: e.attrs.get(name) ?? null, m: sm[k].attrs.get(name) ?? null, t: st[k].attrs.get(name) ?? null, oAttrs: e.attrs, mAttrs: sm[k].attrs, tAttrs: st[k].attrs };
        if (entry.m === entry.o && entry.t === entry.o) continue;
        if (entry.m === entry.t) continue;
        results.push(classifyAttr(entry, ctx, siteOnLines));
      }
    });
    const rest = (s) => normCode((s ?? '').replace(/<([A-Z][\w.]*)((?:\s+[\w-]+(?:=(?:"[^"]*"|'[^']*'|\{[^{}]*\}))?)*)\s*\/?>/g, '<$1>'));
    if (results.length && rest(m) === rest(t)) return worst(results);
  }
  if (m === o) {
    let why = siteOnLines ? 'a v20 site is on these lines' : removedTokenIn(o, ctx.removed) ?? ctx.removedRef(o) ?? null;
    if (!why && ctx.api && o) {
      for (const e of so) {
        const comp = ctx.api.isComponent19(e.tag) ? e.tag : null;
        for (const [n, v] of e.attrs) why ??= comp ? ctx.api.propChange(comp, n, v) : null;
      }
    }
    if (why) return { class: 'tool-wrong', reason: `ods-migrate left it: ${why}` };
    return { class: 'unrelated-change', reason: o ? 'the truth changed code the v20 API does not require to change' : 'the truth adds code' };
  }
  return { class: 'tool-wrong', reason: 'ods-migrate wrote something else' };
}

/* ------------------------------------------------------------------------------------------------
 * One file
 * --------------------------------------------------------------------------------------------- */

const word = (name) => new RegExp(`(?<![\\w$.])${escapeRegExp(name)}(?![\\w$])`);

/* Original line (1-based) of each line of `other` (Int32Array, 0 = none), and the anchor of an insertion. */
function lineMap(original, other) {
  const a = original.split(/\r?\n/).map((l) => l.trim());
  const b = other.split(/\r?\n/).map((l) => l.trim());
  const align = alignLines(a, b);
  return (j) => {
    if (align.newTo[j - 1] >= 0) return align.newTo[j - 1] + 1;
    const h = align.hunks[align.hunkOfNew[j - 1]];
    if (!h) return Math.min(j, a.length);
    return h.inPlace ? h.a0 + (j - 1 - h.b0) + 1 : Math.min(h.a0 + 1, a.length);
  };
}

function hasMarkerNear(text, line, endLine = line, window = 3) {
  if (!text) return false;
  const lines = text.split(/\r?\n/);
  return lines.slice(Math.max(0, line - 1 - window), Math.min(lines.length, endLine + window)).some((l) => l.includes(MARKER_TEXT));
}

/*
 * Compares one file item by item.
 * input: { file, original, migrated, truth, ts, relevant(text), siteLines: number[], odsNames: Map(local → ODS
 *          name, '*' for a namespace), isOdsModule(spec), api (apiDiff), removed ({ css, scss, mixin } sets),
 *          look ({ id: 'aluminium' | 'v19' }), exclude ([[from, to]] original lines without a truth),
 *          regressionLines (lines of the migrated text with a new v20 error) }
 * → { items: [{ kind, key, lines, original, migrated, truth, verdict, class?, reason?, look?, marked? }], ignored }
 */
export function compareTruthFile(input) {
  const { file, original, migrated, truth, relevant = () => true, siteLines = [], odsNames = new Map(), isOdsModule = () => false, exclude = [], regressionLines = [] } = input;
  const ctx = { api: input.api ?? null, removed: input.removed ?? null, look: input.look ?? {} };
  const sites = new Set(siteLines);
  const siteIn = (a, b) => {
    for (let l = a; l <= b; l += 1) if (sites.has(l)) return true;
    return false;
  };
  const excluded = (a, b) => exclude.some(([x, y]) => a <= y && x <= b);
  const componentOf = (tag) => {
    const [root, ...rest] = tag.split('.');
    const ods = odsNames.get(root);
    if (!ods) return null;
    if (ods === '*' || ods === 'default') return rest.length ? rest.at(-1) : null;
    return rest.length ? null : ods;
  };
  ctx.componentOf = componentOf;
  // The capitalized names the original declares itself: not taken for the ODS export, even when the
  // file also imports it (a shadowing local; the comparison has no scope analysis).
  const localDecl = new Set([...original.matchAll(/\b(?:const|let|var|function|class|enum)\s+([A-Z][A-Za-z0-9_]*)/g)].map((m) => m[1]));
  ctx.removedRef = (text) => (ctx.api ? ctx.api.removedRef(text, (n) => localDecl.has(n)) : null);
  const odsWord = odsNames.size ? new RegExp(`(?<![\\w$.])(${[...odsNames.keys()].map(escapeRegExp).join('|')})(?![\\w$])`) : null;
  /*
   * A site on the lines of an original attribute is that attribute's when the attribute has its own
   * lines, or names an ODS symbol; a site on a line other attributes share may be theirs. An
   * attribute only the truth has never takes a line site (the API check finds its counterpart).
   */
  const attrSite = (el, name, value) => {
    if (value === null) return ctx.api ? false : siteIn(el.line, el.endLine);
    const [a, b] = el.attrLines.get(name) ?? [el.line, el.endLine];
    if (!siteIn(a, b)) return false;
    const shared = [...el.attrLines].some(([n, [x, y]]) => n !== name && x <= b && a <= y);
    return !shared || Boolean(odsWord?.test(value)) || Boolean(odsWord?.test(name));
  };
  const items = [];
  let ignored = 0;
  const push = (item, counted) => {
    if (!counted) {
      ignored += 1;
      return;
    }
    if (excluded(item.lines[0], item.lines[1])) Object.assign(item, { verdict: 'excluded', excludedBy: 'uncovered' });
    else item.verdict = item.migrated === item.truth ? 'agree' : 'differ';
    items.push(item);
  };
  const toOrigM = lineMap(original, migrated);
  const toOrigT = lineMap(original, truth);

  let masked = { o: original, m: migrated, t: truth };
  const importItems = [];

  if (SCRIPT.test(file) && input.ts) {
    const po = parseScript(input.ts, file, original);
    const pm = parseScript(input.ts, file, migrated);
    const pt = parseScript(input.ts, file, truth);
    masked = { o: po.masked, m: pm.masked, t: pt.masked };

    // JSX elements.
    const om = alignElements(po.elements, pm.elements, { lineOf: (e) => toOrigM(e.line) });
    const ot = alignElements(po.elements, pt.elements, { lineOf: (e) => toOrigT(e.line), bridge: (i) => (om[i] >= 0 ? pm.elements[om[i]] : null) });
    const show = (name, v) => (v === null ? null : v === '' ? name : `${name}=${v}`);
    po.elements.forEach((eo, i) => {
      const em = om[i] >= 0 ? pm.elements[om[i]] : null;
      const et = ot[i] >= 0 ? pt.elements[ot[i]] : null;
      const comp = componentOf(eo.tag);
      const lines = [eo.line, eo.endLine];
      const base = { kind: 'jsx-attribute', lines, element: eo.tag };
      if (!em || !et) {
        const item = { ...base, kind: 'jsx-element', key: `<${eo.tag}>`, original: signature(eo), migrated: em ? signature(em) : null, truth: et ? signature(et) : null };
        if (item.migrated === item.original && item.truth === item.original) return;
        push(item, Boolean(comp) || relevant(item.original) || item.migrated !== item.original);
        if (item.verdict === 'differ') {
          item.class = em ? 'unrelated-change' : 'tool-wrong';
          item.reason = em ? 'the truth removed this element' : 'ods-migrate removed this element';
          if (em) item.marked = hasMarkerNear(migrated, em.line, em.endLine, 1);
        }
        return;
      }
      for (const name of new Set([...eo.attrs.keys(), ...em.attrs.keys(), ...et.attrs.keys()])) {
        const o = eo.attrs.has(name) ? eo.attrs.get(name) : null;
        const m = em.attrs.has(name) ? em.attrs.get(name) : null;
        const t = et.attrs.has(name) ? et.attrs.get(name) : null;
        if (m === o && t === o) continue;
        const item = { ...base, lines: o !== null ? eo.attrLines.get(name) ?? lines : lines, key: `<${eo.tag}> ${name}`, original: show(name, o), migrated: show(name, m), truth: show(name, t) };
        push(item, Boolean(comp) || m !== o || relevant([o, m, t].filter(Boolean).join(' ')));
        if (item.verdict !== 'differ') continue;
        const entry = { comp, name, o, m, t, oAttrs: eo.attrs, mAttrs: em.attrs, tAttrs: et.attrs };
        Object.assign(item, classifyAttr(entry, ctx, attrSite(eo, name, o)));
        item.marked = hasMarkerNear(migrated, em.line, em.endLine, 1);
      }
    });
    const matchedM = new Set([...om].filter((x) => x >= 0));
    const matchedT = new Set([...ot].filter((x) => x >= 0));
    const addedT = pt.elements.filter((_, j) => !matchedT.has(j));
    const addedM = pm.elements.filter((_, j) => !matchedM.has(j));
    for (const em of addedM) {
      const at = toOrigM(em.line);
      const twin = addedT.findIndex((et) => signature(et) === signature(em) && toOrigT(et.line) === at);
      const et = twin >= 0 ? addedT.splice(twin, 1)[0] : null;
      const item = { kind: 'jsx-element', key: `<${em.tag}>`, lines: [at, at], element: em.tag, original: null, migrated: signature(em), truth: et ? signature(et) : null };
      push(item, true);
      if (item.verdict !== 'differ') continue;
      // The Tabs of a removed Switch (DECISIONS: the Switch becomes Tabs variant="switch"), where the truth wrote something else.
      const fromSwitch = /^Tabs?$|^TabList$/.test(em.tag) && po.elements.some((eo) => /^Switch(Item)?$/.test(eo.tag) && eo.line <= at && at <= eo.endLine);
      Object.assign(item, fromSwitch
        ? { class: 'decision', reason: 'ods-migrate turns the removed Switch into Tabs variant="switch"; the truth wrote something else (DECISIONS: Tabs by default)', look: 'switch-to-tabs' }
        : { class: 'tool-wrong', reason: 'ods-migrate added this element' });
    }
    // Elements only the truth has, grouped by the place they are inserted at: one item per block of new content.
    const blocks = new Map();
    for (const et of addedT) {
      const at = toOrigT(et.line);
      if (!blocks.has(at)) blocks.set(at, []);
      blocks.get(at).push(et);
    }
    for (const [at, list] of blocks) {
      const counted = list.filter((et) => componentOf(et.tag) || relevant(signature(et)));
      if (!counted.length) {
        ignored += 1;
        continue;
      }
      const item = { kind: 'jsx-element', key: list.length > 1 ? `<${list[0].tag}> and ${list.length - 1} more elements` : `<${list[0].tag}>`, lines: [at, at], element: list[0].tag, original: null, migrated: null, truth: list.map(signature).join('\n') };
      push(item, true);
      if (item.verdict === 'differ') Object.assign(item, { class: 'unrelated-change', reason: list.length > 1 ? `the truth adds these ${list.length} elements (new content)` : 'the truth adds this element (new content)' });
    }

    // Import specifiers.
    const key = (s) => `${s.reexport ? 'export' : 'import'}|${s.module}|${s.imported}|${s.local}`;
    const index = (list) => new Map(list.map((s) => [key(s), s]));
    const io = index(po.imports);
    const im = index(pm.imports);
    const it = index(pt.imports);
    const firstLineOf = (module) => po.imports.find((s) => s.module === module)?.line ?? po.imports[0]?.line ?? 1;
    const showSpec = (s) => (s ? `${s.reexport ? 'export' : 'import'} ${s.typeOnly ? 'type ' : ''}${s.imported === s.local ? s.imported : `${s.imported} as ${s.local}`} from "${s.module}"` : null);
    for (const k of new Set([...io.keys(), ...im.keys(), ...it.keys()])) {
      const [so, sm, st] = [io.get(k), im.get(k), it.get(k)];
      const any = so ?? sm ?? st;
      const o = showSpec(so);
      const m = showSpec(sm);
      const t = showSpec(st);
      if (m === o && t === o) continue;
      const line = so?.line ?? (sm ? toOrigM(sm.line) : null) ?? firstLineOf(any.module);
      const item = { kind: 'import-specifier', key: `${any.local || any.module} from "${any.module}"`, lines: [line, line], original: o, migrated: m, truth: t };
      push(item, isOdsModule(any.module) || m !== o);
      if (item.verdict === 'differ') importItems.push({ item, spec: any, so, sm, st });
    }
  } else if (STYLE.test(file)) {
    const so = parseStyle(file, original);
    const sm = so && parseStyle(file, migrated);
    const st = so && parseStyle(file, truth);
    if (so && sm && st) {
      masked = { o: so.masked, m: sm.masked, t: st.masked };
      const pairDecls = (a, b) => {
        const map = new Int32Array(a.length).fill(-1);
        const used = new Set();
        const counts = new Map();
        const keyOf = (d, n) => `${d.path}|${d.prop}|${n}`;
        const bIndex = new Map();
        const bCount = new Map();
        b.forEach((d, j) => {
          const n = bCount.get(`${d.path}|${d.prop}`) ?? 0;
          bCount.set(`${d.path}|${d.prop}`, n + 1);
          bIndex.set(keyOf(d, n), j);
        });
        a.forEach((d, i) => {
          const n = counts.get(`${d.path}|${d.prop}`) ?? 0;
          counts.set(`${d.path}|${d.prop}`, n + 1);
          const j = bIndex.get(keyOf(d, n));
          if (j !== undefined) {
            map[i] = j;
            used.add(j);
          }
        });
        // A renamed property (a custom property or a SCSS variable): by order within the same selector path.
        a.forEach((d, i) => {
          if (map[i] >= 0) return;
          const j = b.findIndex((e, k) => !used.has(k) && e.path === d.path && (e.prop.startsWith('--') || e.prop.startsWith('$')) === (d.prop.startsWith('--') || d.prop.startsWith('$')) && (d.prop.startsWith('--') || d.prop.startsWith('$')));
          if (j >= 0) {
            map[i] = j;
            used.add(j);
          }
        });
        return { map, used };
      };
      const om = pairDecls(so.declarations, sm.declarations);
      const ot = pairDecls(so.declarations, st.declarations);
      const show = (d) => (d ? `${d.prop}:${d.value}` : null);
      so.declarations.forEach((d, i) => {
        const dm = om.map[i] >= 0 ? sm.declarations[om.map[i]] : null;
        const dt = ot.map[i] >= 0 ? st.declarations[ot.map[i]] : null;
        const item = { kind: 'css-declaration', key: `${d.path || '(root)'} { ${d.prop} }`, lines: [d.line, d.line], original: show(d), migrated: show(dm), truth: show(dt) };
        if (item.migrated === item.original && item.truth === item.original) return;
        push(item, item.migrated !== item.original || relevant([item.original, item.migrated, item.truth].filter(Boolean).join(' ')));
        if (item.verdict !== 'differ') return;
        Object.assign(item, classifyText({ o: item.original, m: item.migrated, t: item.truth }, ctx, siteIn(d.line, d.line)));
        if (!dt && item.class === 'tool-wrong' && dm?.value === d.value && dm?.prop === d.prop) {
          const why = siteIn(d.line, d.line) ? 'a v20 site is on this line' : removedTokenIn(item.original, ctx.removed);
          Object.assign(item, why ? { reason: `ods-migrate left it (${why}); the truth removed it` } : { class: 'unrelated-change', reason: 'the truth removed this declaration' });
        }
        item.marked = hasMarkerNear(migrated, dm?.line ?? toOrigM(d.line), dm?.line ?? toOrigM(d.line), 1);
      });
      const addedM = sm.declarations.map((d, j) => (om.used.has(j) ? null : d)).filter(Boolean);
      const addedT = st.declarations.map((d, j) => (ot.used.has(j) ? null : d)).filter(Boolean);
      for (const dm of addedM) {
        const twin = addedT.findIndex((dt) => dt.path === dm.path && dt.prop === dm.prop);
        const dt = twin >= 0 ? addedT.splice(twin, 1)[0] : null;
        const at = toOrigM(dm.line);
        const item = { kind: 'css-declaration', key: `${dm.path || '(root)'} { ${dm.prop} }`, lines: [at, at], original: null, migrated: show(dm), truth: show(dt) };
        push(item, true);
        if (item.verdict === 'differ') Object.assign(item, classifyText({ o: null, m: item.migrated, t: item.truth }, ctx, false));
      }
      for (const dt of addedT) {
        const at = toOrigT(dt.line);
        const item = { kind: 'css-declaration', key: `${dt.path || '(root)'} { ${dt.prop} }`, lines: [at, at], original: null, migrated: null, truth: show(dt) };
        push(item, relevant(item.truth));
        if (item.verdict === 'differ') Object.assign(item, { class: 'unrelated-change', reason: 'the truth adds this declaration' });
      }
    }
  }

  // What is left: line regions of the masked texts. A site on a line an item above already covers is that item's.
  const covered = new Set();
  for (const x of items) for (let l = x.lines[0]; l <= x.lines[1]; l += 1) covered.add(l);
  const freeSiteIn = (a, b) => {
    for (let l = a; l <= b; l += 1) if (sites.has(l) && !covered.has(l)) return true;
    return false;
  };
  for (const { originalLines, ...region } of lineRegions(masked.o, masked.m, masked.t)) {
    const item = { kind: 'line', key: 'lines', ...region };
    const site = originalLines.length > 0 && freeSiteIn(region.lines[0], region.lines[1]);
    const text = [region.original, region.migrated, region.truth].join('\n');
    push(item, site || region.migrated !== region.original || relevant(text));
    if (item.verdict !== 'differ') continue;
    Object.assign(item, classifyText({ o: region.original || null, m: region.migrated || null, t: region.truth || null }, ctx, site));
    if (item.class === 'unrelated-change' && region.original && !region.truth && region.migrated === region.original) item.reason = 'the truth removed these lines';
    item.marked = hasMarkerNear(migrated, region.lines[0], region.lines[1], 1);
  }

  // Import declarations written in strings (a story's `globals.imports`): when the lines differ only
  // by the names listed, each name takes the class of the code that uses it, as an import does.
  const importLists = (text) => {
    const names = new Set();
    const rest = (text ?? '').replace(/import\s*(?:type\s*)?\{([^}]*)\}\s*from\s*"([^"]+)"/g, (_all, list) => {
      for (const n of list.split(',')) if (n.trim()) names.add(n.trim().replace(/^type\s*/, ''));
      return 'import{…}';
    });
    return { rest, names };
  };
  const plain = items.filter((x) => x.verdict === 'differ' && x.kind !== 'import-specifier' && !(x.kind === 'line' && /import\s*(?:type\s*)?\{/.test(`${x.migrated}${x.truth}`)));
  for (const x of items) {
    if (x.verdict !== 'differ' || x.kind !== 'line' || !x.migrated || !x.truth) continue;
    const lm = importLists(x.migrated);
    const lt = importLists(x.truth);
    if (!lm.names.size || lm.rest !== lt.rest) continue;
    const results = [];
    for (const n of new Set([...lm.names, ...lt.names])) {
      if (lm.names.has(n) === lt.names.has(n)) continue;
      const w = word(n);
      const related = plain.filter((y) => [y.original, y.migrated, y.truth].some((t) => t && w.test(t)));
      if (lm.names.has(n) && ctx.api && ctx.api.exports19.has(n) && !ctx.api.exports20.has(n)) results.push({ class: 'tool-wrong', reason: `ods-migrate left ${n} in an import string: not exported in v20` });
      else if (related.length) results.push({ ...worst(related.map((y) => ({ class: y.class, reason: y.reason, look: y.look }))) });
      else results.push({ class: lm.names.has(n) ? 'tool-wrong' : 'unrelated-change', reason: lm.names.has(n) ? `ods-migrate lists ${n} in an import string, the truth does not` : `the truth lists ${n} in an import string for code the comparison counts elsewhere` });
    }
    if (!results.length) continue;
    const w2 = worst(results);
    Object.assign(x, { class: w2.class, reason: `import string: ${w2.reason}`, ...(w2.look ? { look: w2.look } : {}) });
  }

  // Import specifiers: the class of the code that uses the name.
  const differing = items.filter((x) => x.verdict === 'differ' && x.kind !== 'import-specifier');
  const codeOf = (text) => text.replace(MARKER, '');
  for (const { item, spec, so, sm, st } of importItems) {
    if (sm && st && sm.typeOnly !== st.typeOnly) {
      Object.assign(item, { class: 'style-only', reason: 'type-only import or not' });
      continue;
    }
    const w = word(spec.local || spec.imported);
    const related = differing.filter((x) => [x.original, x.migrated, x.truth].some((s) => s && w.test(s)));
    const usedIn = (masked) => w.test(codeOf(masked));
    if (sm && !st && ctx.api && isOdsModule(spec.module) && !spec.reexport && ctx.api.exports19.has(spec.imported) && !ctx.api.exports20.has(spec.imported)) {
      Object.assign(item, { class: 'tool-wrong', reason: `${spec.imported} is not exported in v20` });
    } else if (related.length) {
      const w2 = worst(related.map((x) => ({ class: x.class, reason: x.reason, look: x.look })));
      Object.assign(item, { class: w2.class, reason: `follows its use: ${w2.reason}`, ...(w2.look ? { look: w2.look } : {}) });
    } else if (st && !sm) {
      if (usedIn(masked.m)) Object.assign(item, { class: 'tool-wrong', reason: 'ods-migrate uses the name without importing it' });
      else if (!usedIn(masked.t)) Object.assign(item, { class: 'unrelated-change', reason: 'the truth imports a name it does not use' });
      else if (!so) Object.assign(item, { class: 'unrelated-change', reason: 'the truth imports a name for code the comparison counts elsewhere' });
      else Object.assign(item, { class: 'tool-wrong', reason: 'ods-migrate removed an import the truth keeps' });
    } else if (sm && !st) {
      if (!usedIn(masked.m)) Object.assign(item, { class: 'style-only', reason: 'an import left unused' });
      else Object.assign(item, { class: 'tool-wrong', reason: 'ods-migrate imports a name the truth does not' });
    } else {
      Object.assign(item, { class: 'tool-wrong', reason: 'ods-migrate wrote another import' });
    }
  }
  // The truth left code that v20 breaks (a removed token, export or prop) while ods-migrate changed it:
  // the truth is not a v20 target there (a file the team did not migrate). No truth for the item.
  for (const x of items) {
    if (x.verdict !== 'differ' || x.truth !== x.original || x.migrated === x.original || !x.original) continue;
    const why = removedTokenIn(x.original, ctx.removed) ?? ctx.removedRef(x.original) ?? null;
    if (why) Object.assign(x, { verdict: 'excluded', excludedBy: 'stale-truth', class: undefined, reason: `the truth left code v20 breaks (${why}): no truth for it` });
  }
  for (const x of items) if (x.class === undefined) delete x.class;
  // A new v20 error in the ods-migrate output on an item: the output is wrong whatever the truth did.
  const broken = new Set(regressionLines.map((l) => toOrigM(l)));
  for (const x of items) {
    if (x.verdict !== 'differ' || x.class === 'tool-wrong') continue;
    let hit = false;
    for (let l = x.lines[0]; l <= x.lines[1] && !hit; l += 1) hit = broken.has(l);
    if (hit && x.migrated !== null) Object.assign(x, { class: 'tool-wrong', reason: `${x.reason}; but the ods-migrate output has a new v20 error there (regression)`, look: undefined });
  }
  for (const x of items) if (x.look === undefined) delete x.look;
  items.sort((a, b) => a.lines[0] - b.lines[0]);
  return { items, ignored };
}

/* Counts of a list of compared items. */
export function summarizeTruth(items, ignored = 0) {
  const byClass = Object.fromEntries(CLASSES.map((c) => [c, 0]));
  const byKind = {};
  const byLook = {};
  let marked = 0;
  for (const x of items) {
    const k = (byKind[x.kind] ??= { agree: 0, differ: 0, excluded: 0 });
    k[x.verdict] += 1;
    if (x.verdict !== 'differ') continue;
    byClass[x.class] += 1;
    if (x.class === 'tool-wrong' && x.marked) marked += 1;
    if (x.look) byLook[x.look] = (byLook[x.look] ?? 0) + 1;
  }
  return {
    items: items.length,
    agree: items.filter((x) => x.verdict === 'agree').length,
    differ: items.filter((x) => x.verdict === 'differ').length,
    excluded: items.filter((x) => x.verdict === 'excluded').length,
    excludedBy: { uncovered: items.filter((x) => x.excludedBy === 'uncovered').length, staleTruth: items.filter((x) => x.excludedBy === 'stale-truth').length },
    ignored,
    byClass,
    toolWrongMarked: marked,
    byKind,
    byLook,
  };
}

/* The truth sidecar of a corpus prepared by scripts/coverage/corpora: { files: { <rel>: { exclude: [[a, b]] } } }. */
export const TRUTH_SIDECAR = '.ods-truth.json';

export function readTruthSidecar(truthRoot) {
  const file = join(truthRoot, TRUTH_SIDECAR);
  if (!existsSync(file)) return { files: {} };
  return JSON.parse(readFileSync(file, 'utf8'));
}

/*
 * Step 6 of the harness: compares every file of the truth with the corpus and the ods-migrate output.
 * opts: { ts, truthRoot, base, migrated (the two copies), texts (Map rel → { base, migrated }, optional),
 *         sites (the classified sites: each gets `truth` and, when it differs, `truthClass`), regressions
 *         ([{ file, line }] in the migrated code: an item on one is tool-wrong), packages
 *         (file → { list, entries }), api (apiDiff), removed (token name sets), look (config look),
 *         choiceIds (the look ids of the tool's configurator, or null) }
 * → the `truth` block of the report.
 */
export function compareTruth({ ts, truthRoot, base, migrated, texts = new Map(), sites, regressions = [], packages, api = null, removed = null, look = {}, choiceIds = null }) {
  const sidecar = readTruthSidecar(truthRoot);
  const items = [];
  const legacy = [];
  const unmatched = [];
  let ignored = 0;
  const tokenish = /--ods-|\$ods-|@include\s+(?:[\w-]+\.)?ods-|TODO\(ods-v20\)/;
  const order = (c) => CLASSES.indexOf(c);
  for (const file of walkFiles(truthRoot, /./)) {
    const rel = relative(truthRoot, file);
    if (rel === TRUTH_SIDECAR) continue;
    if (!texts.has(rel) && !existsSync(join(base, rel))) {
      unmatched.push(rel);
      continue;
    }
    const original = texts.get(rel)?.base ?? readFileSync(join(base, rel), 'utf8');
    const output = texts.get(rel)?.migrated ?? (existsSync(join(migrated, rel)) ? readFileSync(join(migrated, rel), 'utf8') : original);
    const expected = readFileSync(file, 'utf8');
    const odsNames = new Map();
    for (const text of [original, output, expected]) {
      const sf = ts.createSourceFile(rel, text, ts.ScriptTarget.Latest, true, /x$/.test(rel) ? ts.ScriptKind.TSX : undefined);
      for (const [local, name] of odsSymbols(ts, sf, () => packages(join(base, rel))).names) odsNames.set(local, name);
    }
    const word = odsNames.size ? new RegExp(`(?<![\\w$.])(${[...odsNames.keys()].map(escapeRegExp).join('|')})(?![\\w$])`) : null;
    const { entries, list } = packages(join(base, rel));
    const pkg = packagePattern(list, entries);
    const relevant = (text) => pkg.test(text) || tokenish.test(text) || (word ? word.test(text) : false);
    const isOdsModule = (spec) => list.some((p) => spec === p || (!entries?.has(p) && spec.startsWith(`${p}/`)));
    const fileSites = sites.filter((s) => s.file === rel);
    const siteLines = fileSites.map((s) => s.line);
    for (const region of compareFile({ original, migrated: output, truth: expected, relevant, siteLines })) legacy.push({ file: rel, ...region });
    const exclude = sidecar.files?.[rel]?.exclude ?? [];
    const regressionLines = regressions.filter((x) => x.file === rel).map((x) => x.line);
    const r = compareTruthFile({ file: rel, original, migrated: output, truth: expected, ts, relevant, siteLines, odsNames, isOdsModule, api, removed, look, exclude, regressionLines });
    ignored += r.ignored;
    for (const item of r.items) items.push({ file: rel, ...item });
    for (const s of fileSites) {
      const on = r.items.filter((x) => s.line >= x.lines[0] && s.line <= x.lines[1]);
      const differ = on.filter((x) => x.verdict === 'differ');
      if (differ.length) {
        s.truth = 'differ';
        s.truthClass = differ.map((x) => x.class).sort((a, b) => order(a) - order(b))[0];
      } else if (on.some((x) => x.verdict === 'agree')) s.truth = 'agree';
      else if (on.length || exclude.some(([a, b]) => s.line >= a && s.line <= b)) s.truth = 'excluded';
      else s.truth = 'agree'; // neither side changed the line
    }
  }
  const summary = summarizeTruth(items, ignored);
  const sitesDifferByClass = {};
  for (const s of sites) if (s.truth === 'differ') sitesDifferByClass[s.truthClass] = (sitesDifferByClass[s.truthClass] ?? 0) + 1;
  const legacyAgree = legacy.filter((r) => r.verdict === 'agree').length;
  return {
    ...summary,
    toolWrong: summary.byClass['tool-wrong'],
    sitesAgree: sites.filter((s) => s.truth === 'agree').length,
    sitesDiffer: sites.filter((s) => s.truth === 'differ').length,
    sitesExcluded: sites.filter((s) => s.truth === 'excluded').length,
    sitesWithoutTruth: sites.filter((s) => s.truth === undefined).length,
    sitesDifferByClass,
    lookIdsMissing: choiceIds ? LOOK_IDS.filter((id) => !choiceIds.includes(id)) : null,
    look,
    items,
    unmatched,
    legacy: { agree: legacyAgree, differ: legacy.length - legacyAgree, regions: legacy },
  };
}
