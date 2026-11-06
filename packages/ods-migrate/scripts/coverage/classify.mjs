/*
 * Outcome of each site after ods-migrate, and the errors the migration introduced.
 *   AUTO        the error (same code) or the name is gone, in code, from the lines the site became, and no
 *               new v20 error sits where the usage went (else MARKED or MISSED as that error, `brokenBy`)
 *   MARKED      still there, and a TODO(ods-v20) marker is attached to the construct that holds it
 *   MISSED      still there, no marker
 *   REGRESSION  a v20 error of the migrated code that the unmigrated code did not have
 *               (`underMarker` when a marker is attached to the construct that holds it)
 * Lines are matched through a line diff of the two versions; repeated errors (or names) in one hunk
 * are matched by count.
 *
 * Marker attribution (with `ts`), from the position of what is still there in the migrated code:
 *   - the constructs that hold it, innermost first, up to the enclosing statement: a JSX attribute,
 *     the JSX element it belongs to, an object property, an array element or a call argument, a
 *     declaration, an import declaration or specifier, the statement; in a stylesheet the
 *     declaration (or the selector) and the rules around it;
 *   - for the innermost one, and for any JSX opening tag, attribute, property, array element, call
 *     argument or import specifier of the chain: any marker inside it, leading it (a `{/* … *\/}`
 *     child right before a JSX element included) or trailing on the line where it ends;
 *   - around a larger construct (a declaration, a statement, a JSX element, a rule block) that is not
 *     the innermost one, a leading or trailing marker counts when it names what the site is about (the
 *     token, the identifier, the attribute) or names nothing at all; a marker inside it only when it
 *     names what the site is about and is not attached to a small construct in another branch (a
 *     marker leading a property of another object is about that property; one on a sibling counts);
 *   - for a token site (token, bare key, module class, doc), a marker that names tokens counts only
 *     when it names this one: one marker for `--ods-a` does not cover `--ods-b` in the same value;
 *   - a marker attached to an import declaration counts for the usages of the names it explicitly
 *     names (an import marker that names none of its names counts for the import only);
 *   - Markdown prose, HTML text, snapshots: the marker is on the same line or in the comment lines
 *     right above it.
 * Without `ts` the legacy rule applies: a marker within `window` lines.
 */
import { diffChars } from 'diff';
import { alignLines, lineStarts, lineOf, newToOldRange, oldToNewRange, splitLines } from './linemap.mjs';
import { countName, lexicalMap, maskCss } from './token-sites.mjs';

const MARKER_COMMENT = /\{?\/\*\s*TODO\(ods-v20\)[\s\S]*?\*\/\}?|\/\/[ \t]*TODO\(ods-v20\)[^\n]*/g;
const MARKER = 'TODO(ods-v20)';

/* A TODO(ods-v20) marker on the lines [b0, b1) or within `window` lines of them (0-based). */
function nearMarker(lines, b0, b1, window) {
  const lo = Math.max(0, b0 - window);
  const hi = Math.min(lines.length, Math.max(b1, b0 + 1) + window);
  return lines.slice(lo, hi).some((l) => l.includes(MARKER));
}

function byFile(list) {
  const map = new Map();
  for (const item of list) {
    if (!map.has(item.file)) map.set(item.file, []);
    map.get(item.file).push(item);
  }
  return map;
}

function groupBy(list, key) {
  const map = new Map();
  for (const item of list) {
    const k = key(item);
    if (!map.has(k)) map.set(k, []);
    map.get(k).push(item);
  }
  return map;
}

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&');
const kindOf = (d) => d.kind ?? 'ts';
const TYPE_KINDS = new Set(['ts', 'snippet']);

/* A marker that names nothing (no token, constant, component, code span or `key:`) is about its whole construct. */
function generic(text) {
  return !/--ods-|\$ods-|<[A-Z]|\b[A-Z][A-Z0-9]*_[A-Z0-9_]+\b|\b[A-Z][a-z0-9]+[A-Z]\w*\b|`[^`]+`|TODO\(ods-v20\):?\s*[\w.-]+\s*:/.test(text);
}

/* A marker that names a token (`--ods-…`, `$ods-…`) is about the tokens it names only. */
const TOKEN_NAMED = /(?:--|\$)ods-[\w-]+/;
function acceptFor(about, strict) {
  return strict ? (m) => names(m.text, about) || !TOKEN_NAMED.test(m.text) : () => true;
}

function names(text, list) {
  return list.filter(Boolean).some((n) => new RegExp(`(?<![A-Za-z0-9$])${escape(n)}(?![\\w-])`).test(text));
}

/* ---------------------------------------------------------------------------------------------- */
/* Marker index of one migrated file.                                                             */

export function markerIndex(file, text, ts) {
  const map = lexicalMap(file, text, ts);
  const markers = map.comments.filter((c) => text.slice(c.start, c.end).includes(MARKER)).map((c) => ({ ...c, text: text.slice(c.start, c.end) }));
  const starts = lineStarts(text);
  const lines = text.split('\n');
  const segments = map.segments.filter((s) => s.sf || ['css', 'scss', 'less'].includes(s.lang));
  const cache = new Map();
  const segmentAt = (p) => segments.find((s) => s.start <= p && p < s.end);
  return {
    markers,
    /*
     * Is a marker attached to what holds `offset`? `about`: the names the site is about. `strict` (token
     * sites): a marker that names tokens counts only when it names this one.
     */
    markedAt(offset, about = [], strict = false) {
      if (!markers.length) return false;
      const seg = segmentAt(offset);
      if (seg?.sf) {
        if (!cache.has(seg)) cache.set(seg, scriptIndex(ts, seg, text, markers));
        return cache.get(seg).markedAt(offset, about, strict);
      }
      if (seg) {
        if (!cache.has(seg)) cache.set(seg, styleIndex(seg, text, markers));
        return cache.get(seg).markedAt(offset, about, strict);
      }
      return lineMarked(lines, lineOf(starts, offset), acceptFor(about, strict));
    },
    /* What a TypeScript site at `offset` is about: the identifier there, its attribute or property, its root. */
    aboutAt(offset) {
      const seg = segmentAt(offset);
      if (!seg?.sf) return [];
      if (!cache.has(seg)) cache.set(seg, scriptIndex(ts, seg, text, markers));
      return cache.get(seg).aboutAt(offset);
    },
  };
}

/* The comment lines right above `line` (and `line` itself) hold a marker. */
function lineMarked(lines, line, accept) {
  const marks = (l) => l.includes(MARKER) && accept({ text: l.slice(l.indexOf(MARKER)) });
  if (lines[line] !== undefined && marks(lines[line])) return true;
  for (let k = line - 1; k >= 0; k -= 1) {
    const t = lines[k].trim();
    if (!/^(\/\/|\/\*|\*|\{\/\*|<!--)/.test(t) && !/(\*\/\}?|-->)$/.test(t)) return false;
    if (marks(t)) return true;
  }
  return false;
}

/* --- Scripts ---------------------------------------------------------------------------------- */

const SMALL = new Set(['JsxAttribute', 'JsxSpreadAttribute', 'JsxOpeningElement', 'JsxSelfClosingElement', 'PropertyAssignment', 'ShorthandPropertyAssignment',
  'SpreadAssignment', 'PropertySignature', 'EnumMember', 'ImportSpecifier', 'ExportSpecifier', 'BindingElement', 'Parameter', 'Element']);
const LARGE = new Set(['JsxElement', 'JsxFragment', 'VariableDeclaration', 'PropertyDeclaration', 'MethodDeclaration', 'TypeAliasDeclaration',
  'InterfaceDeclaration', 'ExportAssignment', 'ImportDeclaration', 'Statement']);

function scriptIndex(ts, seg, text, allMarkers) {
  const sf = seg.sf;
  const at = seg.start;
  const code = sf.text;
  const S = ts.SyntaxKind;
  const markers = allMarkers.filter((m) => m.start >= seg.start && m.end <= seg.end).map((m) => ({ ...m, start: m.start - at, end: m.end - at }));
  const kind = (node) => {
    const p = node.parent;
    if (p && (p.statements?.includes?.(node))) return ts.isImportDeclaration(node) ? 'ImportDeclaration' : 'Statement';
    if (p && ts.isArrayLiteralExpression(p)) return 'Element';
    if (p && (ts.isCallExpression(p) || ts.isNewExpression(p)) && p.arguments?.includes(node)) return 'Element';
    const name = S[node.kind];
    if (SMALL.has(name) || LARGE.has(name)) return name;
    return null;
  };
  const deepest = (q) => {
    let node = sf;
    for (;;) {
      let next;
      ts.forEachChild(node, (child) => {
        if (!next && child.pos <= q && q < child.end) next = child;
      });
      if (!next) return node;
      node = next;
    }
  };
  const chainAt = (q) => {
    const chain = [];
    let jsxElements = 0;
    for (let node = deepest(q); node && node.kind !== S.SourceFile; node = node.parent) {
      const k = kind(node);
      if (!k) continue;
      if (k === 'JsxElement' || k === 'JsxSelfClosingElement' || k === 'JsxFragment') {
        jsxElements += 1;
        if (jsxElements > 1) continue; // only the element that holds the site
      }
      chain.push({ node, kind: k });
      if (k === 'Statement' || k === 'ImportDeclaration') break;
    }
    return chain;
  };
  const leading = (node) => {
    const out = [];
    const ranges = [...(ts.getTrailingCommentRanges(code, node.pos) ?? []), ...(ts.getLeadingCommentRanges(code, node.pos) ?? [])];
    for (const r of ranges) out.push(...markers.filter((m) => m.start === r.pos));
    // A `{/* … */}` child right before a JSX element.
    const p = node.parent;
    if (p && (ts.isJsxElement(p) || ts.isJsxFragment(p)) && (ts.isJsxElement(node) || ts.isJsxSelfClosingElement(node) || ts.isJsxFragment(node))) {
      const i = p.children.indexOf(node);
      for (let k = i - 1; k >= 0; k -= 1) {
        const c = p.children[k];
        if (c.kind === S.JsxText && !/\S/.test(c.text)) continue;
        if (ts.isJsxExpression(c) && !c.expression) out.push(...markers.filter((m) => m.start >= c.pos && m.end <= c.end));
        break;
      }
    }
    // A trailing comment on the line where the construct ends.
    const rest = /^[ \t]*[,;]?[ \t]*/.exec(code.slice(node.end, node.end + 200))[0].length;
    out.push(...markers.filter((m) => m.start === node.end + rest));
    return out;
  };
  const inside = (node) => markers.filter((m) => m.start >= node.getStart(sf) && m.end <= node.end);
  // The small construct (property, attribute, element, argument, specifier…) a marker leads, or trails on
  // the line where that construct ends: inside a larger construct, the marker is about that one.
  const ownerOf = (m) => {
    const next = m.end + /^\s*/.exec(code.slice(m.end))[0].length;
    for (let node = deepest(next); node && node.kind !== S.SourceFile; node = node.parent) {
      if (node.getStart(sf) !== next) break;
      if (SMALL.has(kind(node) ?? '')) return node;
    }
    const before = code.slice(0, m.start).replace(/[ \t,;]*$/, '').length;
    if (before > 0 && !code.slice(before, m.start).includes('\n')) {
      for (let node = deepest(before - 1); node && node.kind !== S.SourceFile; node = node.parent) {
        if (node.end !== before) break;
        if (SMALL.has(kind(node) ?? '')) return node;
      }
    }
    return null;
  };
  // A marker owned by a construct that neither holds the site nor is a sibling of the site's own small
  // construct (same object, element, array or argument list) is about something else.
  const foreign = (m, q, chain) => {
    const owner = ownerOf(m);
    if (!owner || (owner.getStart(sf) <= q && q < owner.end)) return false;
    const mine = chain.find((c) => SMALL.has(c.kind))?.node;
    return !(mine && mine.parent === owner.parent);
  };
  const specifierNames = (decl) => {
    const clause = decl.importClause;
    const list = [];
    if (clause?.name) list.push(clause.name.text);
    if (clause?.namedBindings && ts.isNamespaceImport(clause.namedBindings)) list.push(clause.namedBindings.name.text);
    if (clause?.namedBindings && ts.isNamedImports(clause.namedBindings)) for (const e of clause.namedBindings.elements) list.push(e.name.text);
    return list;
  };
  // Import markers: the names each one explicitly names.
  const importNamed = new Set();
  const importInfo = new Map();
  for (const statement of sf.statements) {
    if (!ts.isImportDeclaration(statement)) continue;
    const own = [...leading(statement), ...inside(statement)];
    if (!own.length) continue;
    const list = specifierNames(statement);
    const named = list.filter((n) => own.some((m) => names(m.text, [n])));
    for (const n of named) importNamed.add(n);
    importInfo.set(statement, { named, generic: own.some((m) => !list.some((n) => names(m.text, [n]))) });
  }
  const importUsage = importNamed.size ? new RegExp(`(?<![\\w$.])(${[...importNamed].map(escape).join('|')})(?![\\w$])`) : null;

  const aboutAt = (q) => {
    const out = [];
    const node = deepest(q);
    if (ts.isIdentifier(node) || ts.isStringLiteral(node) || ts.isPrivateIdentifier?.(node)) out.push(node.text);
    for (let n = node; n && n.kind !== S.SourceFile; n = n.parent) {
      if ((ts.isJsxAttribute(n) || ts.isPropertyAssignment(n)) && n.name) out.push(n.name.getText(sf));
      if (ts.isPropertyAccessExpression(n)) {
        let e = n;
        while (ts.isPropertyAccessExpression(e) || ts.isElementAccessExpression(e)) e = e.expression;
        if (ts.isIdentifier(e)) out.push(e.text);
      }
      if (ts.isStatement?.(n) || n.parent?.statements?.includes?.(n)) break;
    }
    return [...new Set(out)];
  };

  return {
    aboutAt: (offset) => aboutAt(offset - at),
    markedAt(offset, about, strict) {
      const ok = acceptFor(about, strict);
      const q = offset - at;
      const chain = chainAt(q);
      for (let i = 0; i < chain.length; i += 1) {
        const { node, kind: k } = chain[i];
        if (k === 'ImportDeclaration') {
          const info = importInfo.get(node);
          if (info && (info.generic || info.named.some((n) => about.includes(n)))) return true;
          continue;
        }
        const attached = leading(node).filter(ok);
        const own = inside(node).filter(ok);
        if (i === 0 || SMALL.has(k)) {
          if (attached.length || own.length) return true;
          continue;
        }
        if (attached.some((m) => generic(m.text) || names(m.text, about))) return true;
        if (own.some((m) => names(m.text, about) && !foreign(m, q, chain))) return true;
      }
      if (importUsage && chain.length) {
        const holder = chain[0].node;
        const span = code.slice(holder.getStart(sf), holder.end).replace(MARKER_COMMENT, '');
        if (importUsage.test(span)) return true;
      }
      return false;
    },
  };
}

/* --- Stylesheets ------------------------------------------------------------------------------ */

function styleIndex(seg, text, allMarkers) {
  const markers = allMarkers.filter((m) => m.start >= seg.start && m.end <= seg.end);
  const mask = maskCss(text.slice(seg.start, seg.end), seg.lang !== 'css');
  const at = seg.start;
  const isDelim = (i) => mask[i] === ';' || mask[i] === '{' || mask[i] === '}';
  const insideSpan = (s, e) => markers.filter((m) => m.start >= at + s && m.end <= at + e);
  const trailing = (e) => {
    const rest = /^[ \t]*/.exec(text.slice(at + e, at + e + 200))[0].length;
    return markers.filter((m) => m.start === at + e + rest);
  };
  // The `{` that opens the block holding local offset q, or -1.
  const enclosingOpen = (q) => {
    let depth = 0;
    for (let i = q - 1; i >= 0; i -= 1) {
      if (mask[i] === '}') depth += 1;
      else if (mask[i] === '{') {
        if (depth === 0) return i;
        depth -= 1;
      }
    }
    return -1;
  };
  const prevDelim = (q) => {
    let i = q - 1;
    while (i >= 0 && !isDelim(i)) i -= 1;
    return i;
  };
  return {
    markedAt(offset, about, strict) {
      const ok = acceptFor(about, strict);
      const q = offset - at;
      const start = prevDelim(q) + 1;
      let end = q;
      while (end < mask.length && !isDelim(end)) end += 1;
      const spanEnd = mask[end] === ';' ? end + 1 : end;
      // The declaration (or selector) that holds the site: any marker in it, or trailing on its line.
      if (insideSpan(start, spanEnd).some(ok)) return true;
      if (mask[end] === ';' && trailing(spanEnd).some(ok)) return true;
      // The rules around it: a marker on their selector (or right before it) that names the site or nothing;
      // inside their block only if it names the site.
      for (let open = enclosingOpen(start); open >= 0; open = enclosingOpen(prevDelim(open) + 1)) {
        const preludeStart = prevDelim(open) + 1;
        if (insideSpan(preludeStart, open).filter(ok).some((m) => generic(m.text) || names(m.text, about))) return true;
        let close = open + 1;
        for (let depth = 1; close < mask.length && depth > 0; close += 1) {
          if (mask[close] === '{') depth += 1;
          else if (mask[close] === '}') depth -= 1;
        }
        if (insideSpan(open, close).some((m) => names(m.text, about))) return true;
      }
      return false;
    },
  };
}

/* ---------------------------------------------------------------------------------------------- */

/*
 * `texts`: Map(file → { base, migrated }); `sites`: [{ file, line, kind, rule }];
 * `after` / `before`: the v20 diagnostics of the migrated / unmigrated code ({ file, line, code, start?, kind? }).
 * `ts`: the TypeScript module, for the marker attribution by construct; `scan(file, text)`: the code
 * occurrences of removed names in a text ([{ offset, line, name, kind }], `kind` as the site's).
 * → { sites (with outcome, migratedLines, replacedBy?), regressions }
 */
export function classify({ texts, sites, after, before, window = 3, ts = null, scan = null }) {
  const aligns = new Map();
  const alignOf = (file) => {
    if (!aligns.has(file)) {
      const t = texts.get(file);
      const base = splitLines(t.base);
      const migratedText = t.migrated ?? t.base;
      const migrated = splitLines(migratedText);
      aligns.set(file, { align: alignLines(base, migrated), base, migrated, migratedText, starts: lineStarts(migratedText) });
    }
    return aligns.get(file);
  };
  const indexes = new Map();
  const indexOf = (file) => {
    if (!indexes.has(file)) indexes.set(file, markerIndex(file, alignOf(file).migratedText, ts));
    return indexes.get(file);
  };
  const occurrences = new Map();
  const occurrencesOf = (file) => {
    if (!occurrences.has(file)) occurrences.set(file, scan(file, alignOf(file).migratedText));
    return occurrences.get(file);
  };
  const offsetOf = (file, d) => d.start ?? alignOf(file).starts[d.line - 1] ?? 0;
  // The span [start, end) of the unmigrated text, in the migrated text: through the hunk of its lines and a
  // character diff of that hunk (a replaced part maps to its replacement).
  const spanAfter = (file, [start, end]) => {
    const { align, migratedText } = alignOf(file);
    const baseText = texts.get(file).base;
    const baseStarts = lineStarts(baseText);
    const l0 = lineOf(baseStarts, start);
    const l1 = lineOf(baseStarts, Math.max(start, end - 1));
    const [m0] = oldToNewRange(align, l0);
    const [, m1] = oldToNewRange(align, l1);
    const [o0] = newToOldRange(align, m0);
    const o1 = m1 > m0 ? newToOldRange(align, m1 - 1)[1] : l1 + 1;
    const a0 = baseStarts[Math.min(o0, l0)];
    const a1 = baseStarts[Math.max(o1, l1 + 1)] ?? baseText.length;
    const { starts } = alignOf(file);
    const n0 = starts[m0] ?? migratedText.length;
    const n1 = starts[m1] ?? migratedText.length;
    // Markers are blanked (same length) so that the text they quote (`BUTTON_COLOR.information has no…`) is not aligned with the code.
    const parts = diffChars(baseText.slice(a0, a1), migratedText.slice(n0, n1).replace(MARKER_COMMENT, (m) => '\u0000'.repeat(m.length)));
    const map = (offset, isEnd) => {
      let o = a0;
      let n = n0;
      for (let i = 0; i < parts.length; i += 1) {
        const part = parts[i];
        const len = part.value.length;
        if (part.added) {
          n += len;
          continue;
        }
        if (!part.removed && offset >= o && (offset < o + len || (isEnd && offset === o + len))) return n + (offset - o);
        if (part.removed && offset >= o && offset <= o + len) {
          const next = parts[i + 1];
          return isEnd || offset > o ? n + (next?.added ? next.value.length : 0) : n;
        }
        o += len;
        if (!part.removed) n += len;
      }
      return n;
    };
    return [map(start, false), map(end, true)];
  };
  const markedDiagnostic = (file, d) => {
    if (!ts) return nearMarker(alignOf(file).migrated, d.line - 1, d.line, window);
    const index = indexOf(file);
    const offset = offsetOf(file, d);
    return index.markedAt(offset, index.aboutAt(offset));
  };

  const afterByFile = byFile(after);
  const beforeByFile = byFile(before);

  // Regressions: an error of the migrated code with no error of the same code (and kind) in the lines it comes from.
  const regressions = [];
  for (const [file, diagnostics] of afterByFile) {
    if (!texts.has(file)) continue;
    const { align } = alignOf(file);
    const old = beforeByFile.get(file) ?? [];
    const groups = groupBy(diagnostics, (d) => `${newToOldRange(align, d.line - 1).join('-')}:${d.code}:${kindOf(d)}`);
    for (const [key, group] of groups) {
      const [range, code, kind] = key.split(':');
      const [a0, a1] = range.split('-').map(Number);
      const existing = old.filter((d) => d.code === code && kindOf(d) === kind && d.line - 1 >= a0 && d.line - 1 < a1).length;
      for (const d of group.slice(existing)) regressions.push({ ...d, underMarker: markedDiagnostic(file, d) });
    }
  }
  const regressionAt = byFile(regressions);

  const out = [];
  for (const [file, fileSites] of byFile(sites)) {
    const { align, migrated, starts } = alignOf(file);
    const groups = groupBy(fileSites, (s) => `${oldToNewRange(align, s.line - 1).join('-')}\u0000${s.kind}\u0000${s.rule}`);
    for (const [key, group] of groups) {
      const [b0, b1] = key.split('\u0000')[0].split('-').map(Number);
      const typeSite = TYPE_KINDS.has(group[0].kind);
      let still;
      if (typeSite) {
        // A site groups the errors of one API usage (`codes`): it remains while any of its codes does.
        // The sites of one group (same lines, same first code) take the errors that remain one each: first
        // an error with the code and message of one of the site's own (two removed names imported on one
        // line are told apart by the name in the message), then any error with one of its codes.
        const inRange = (afterByFile.get(file) ?? []).filter((d) => kindOf(d) === group[0].kind && d.line - 1 >= b0 && d.line - 1 < b1);
        const used = new Set();
        const assigned = group.map(() => null);
        const take = (index, accept) => {
          const site = group[index];
          const codes = site.codes ?? [site.rule];
          const hit = inRange.find((d) => !used.has(d) && codes.includes(d.code) && accept(site, d));
          if (hit) {
            used.add(hit);
            assigned[index] = hit;
          }
        };
        const sameMessage = (site, d) => (site.errors ?? [{ code: site.rule, message: site.message }]).some((e) => e.code === d.code && e.message === d.message);
        group.forEach((_, index) => take(index, sameMessage));
        group.forEach((_, index) => assigned[index] || take(index, () => true));
        still = assigned.map((d) => (d ? { offset: offsetOf(file, d) } : null));
      } else if (scan) {
        still = occurrencesOf(file).filter((o) => o.name === group[0].rule && o.kind === group[0].kind && o.line - 1 >= b0 && o.line - 1 < b1);
      } else {
        const region = migrated.slice(b0, b1).join('\n').replace(MARKER_COMMENT, '');
        still = Array.from({ length: countName(region, group[0].rule) }, () => ({ offset: starts[b0] ?? 0 }));
      }
      if (!typeSite) still.sort((a, b) => a.offset - b.offset);
      const legacyMarked = ts ? null : nearMarker(migrated, b0, b1, window);
      group.forEach((site, index) => {
        const present = typeSite ? Boolean(still[index]) : index < still.length;
        let marked = false;
        if (present) {
          if (!ts) marked = legacyMarked;
          else {
            const idx = indexOf(file);
            const about = typeSite ? idx.aboutAt(still[index].offset) : [site.rule, site.rule.replace(/\$\{…\}$/, '')];
            marked = idx.markedAt(still[index].offset, about, !typeSite);
          }
        }
        const result = { ...site, outcome: present ? (marked ? 'marked' : 'missed') : 'auto', migratedLines: b1 > b0 ? [b0 + 1, b1] : [] };
        if (!present && typeSite) {
          const inRange = (regressionAt.get(file) ?? []).filter((d) => d.line - 1 >= b0 && d.line - 1 < b1);
          // A new error where the usage went (its span, followed through a character diff) means the
          // rewrite broke it: not AUTO, but MARKED or MISSED as that error is.
          const span = site.span && ts ? spanAfter(file, site.span) : null;
          const own = span ? inRange.filter((d) => d.start !== undefined && d.start >= span[0] && d.start < span[1]) : [];
          if (inRange.length) result.replacedBy = [...new Set(inRange.map((d) => d.code))];
          if (own.length) {
            result.outcome = own.some((d) => d.underMarker) ? 'marked' : 'missed';
            result.brokenBy = own.map((d) => ({ line: d.line, code: d.code, message: d.message }));
          }
        }
        out.push(result);
      });
    }
  }
  out.sort((a, b) => a.file.localeCompare(b.file) || a.line - b.line || (a.column ?? 0) - (b.column ?? 0));
  return { sites: out, regressions };
}

/* The summary counters. */
export function summarize(sites, regressions) {
  const count = (outcome) => sites.filter((s) => s.outcome === outcome).length;
  const total = sites.length;
  const auto = count('auto');
  const marked = count('marked');
  const missed = count('missed');
  const pct = (n) => (total ? Math.round((1000 * n) / total) / 10 : null);
  return {
    sites: total,
    auto,
    marked,
    missed,
    regressions: regressions.length,
    regressionsUnderMarker: regressions.filter((r) => r.underMarker).length,
    autoPct: pct(auto),
    assistedPct: pct(auto + marked),
  };
}
