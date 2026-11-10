/*
 * Token sites, found without the ods-migrate mappings: the names ODS declares are read from the
 * sources of each ref (CSS custom properties, SCSS variables, SCSS mixins and functions, the BEM
 * classes of the CSS modules of the components), and every occurrence in the corpus of a v19 name
 * that v20 no longer declares is found. An occurrence is a *site* when it sits in code, a *mention*
 * when it sits in a comment, JSX or HTML text, a prose string, Markdown prose or a changelog. The text
 * of a `<code>` / `<pre>` element (or a component that displays code) counts as code, like Markdown
 * inline code.
 *
 * Kinds of occurrence:
 *   css        a custom property (`--ods-color-primary-500`)
 *   scss       a SCSS variable (`$ods-button-size-md`)
 *   mixin      a SCSS mixin or function (`@include ods-x`, `mod.ods-x(`)
 *   dynamic    a prefix completed at runtime (`--ods-color-${x}`) that only removed names start with
 *   bare-key   a removed custom property written without its `--`: the Tailwind theme keys of the v19
 *              guide (`'ods-color-primary-500': …` in a config, `bg-ods-color-primary-500` in a class
 *              string) and the same key passed to a token lookup (`getToken('ods-color-primary-500')`)
 *   module     a BEM class of a component CSS module (`button--ghost`) that v20 no longer declares,
 *              in its built form (`_button--ghost`, `_button--ghost_x1y2_3`) or inside a
 *              `[class*="…"]` attribute selector, also as a bare modifier (`button[class*="--ghost"]`:
 *              removed when the component the type selector names, or else every component, no
 *              longer declares it)
 *   font       a font family the v19 themes load (`@font-face`) and v20 no longer does ('Source Sans Pro')
 *   export     a public ods-react export v20 no longer has (`BUTTON_COLOR`), in the code of a Markdown /
 *              MDX file or in a string of a script (code shown to readers); in the code itself the
 *              type checker finds them
 *   prop       an attribute of an ODS component tag that v20 removed (`<Message color=…`), in the same
 *              places (a fragment shown as text is not type-checked)
 * Files: CSS, SCSS, Sass, Less, HTML, Vue, Svelte, scripts, Markdown / MDX (code blocks, inline code,
 * MDX ESM and JSX), Jest snapshots (`.snap`, reported apart by the harness).
 */
import { readdirSync, readFileSync } from 'node:fs';
import { basename, join, relative, sep } from 'node:path';
import { lineStarts, positionOf } from './linemap.mjs';

const DECLARING = /\.(s?css|tsx?)$/;
const MODULE_STYLE = /\.module\.s?css$/;
const CUSTOM_PROPERTY_DECL = /(?<![\w-])['"]?(--ods-[\w-]+)['"]?\s*:/g;
const SCSS_VARIABLE_DECL = /(?<![\w-])\$(ods-[\w-]+)\s*:/g;
const MIXIN_DECL = /@(?:mixin|function)\s+(ods-[\w-]+)/g;
const FONT_FACE = /@font-face\s*\{[^}]*?font-family\s*:\s*(['"]?)([^;'"\n{}]+?)\1\s*[;}]/g;

/* The occurrences in the corpus. A `${` or `#{` right after a name makes it a prefix built at runtime. */
const CUSTOM_PROPERTY_USE = /(?<![\w-])--ods-[\w-]*/g;
const SCSS_VARIABLE_USE = /(?<![\w-])\$ods-[\w-]*/g;
const MIXIN_USE = /@include\s+(?:[\w-]+\.)?(ods-[\w-]+)|(?<![\w$-])(?:[\w-]+\.)(ods-[\w-]+)\(/g;
/* A bare key: after a utility prefix (`bg-`, `rounded-`) or a non-name character; never after `--` or `$`. */
const TAILWIND_USE = /(?:(?<=[A-Za-z0-9\]]-)|(?<![\w$-]))ods-[\w-]*/g;

export const SCANNED = /\.(s?css|sass|less|html?|vue|svelte|(c|m)?[jt]sx?|mdx?|snap)$/;
export const SNAPSHOT = /\.snap$/;
/* History pages: what they name is what was released, never something to migrate. */
const ODS_IMPORT = /\bfrom\s*['"]@ovhcloud\/ods-|\bimport\s*['"]@ovhcloud\/ods-|\brequire\(\s*['"]@ovhcloud\/ods-/;
const CHANGELOG = /^(changelog|whats-?new)([.-].*)?\.mdx?$/i;

function walk(dir, test, skip, out = []) {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (skip(path)) continue;
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.git') walk(path, test, skip, out);
    } else if (entry.isFile() && test.test(entry.name)) out.push(path);
  }
  return out;
}

/*
 * The files the integrator told ods-migrate to leave alone (a `.odsmigrateignore` at the root of the
 * corpus, gitignore lines): not code of the app, so no site there. A reader of its own, as the harness
 * reads nothing of ods-migrate: a folder or file path, `*` and `**`, a leading `/`, no negation.
 */
function ignoredBy(root) {
  let text;
  try {
    text = readFileSync(join(root, '.odsmigrateignore'), 'utf8');
  } catch {
    return () => false;
  }
  const rules = text.split(/\r?\n/).map((line) => line.trim()).filter((line) => line && !line.startsWith('#') && !line.startsWith('!')).map((line) => {
    const anchored = line.replace(/\/+$/, '').includes('/');
    const glob = line.replace(/^\//, '').replace(/\/+$/, '').replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*\*\//g, '(?:.*/)?').replace(/\*\*/g, '.*').replace(/\*/g, '[^/]*').replace(/\?/g, '[^/]');
    return new RegExp(`${anchored ? '^' : '(?:^|/)'}${glob}$`);
  });
  return (path) => {
    const rel = relative(root, path).split(sep).join('/');
    return rules.some((rule) => rule.test(rel));
  };
}

export function walkFiles(dir, test) {
  return walk(dir, test, ignoredBy(dir)).sort();
}

/* → { css, scss, mixin, module, font }: the names a surface declares (sets). */
export function declaredNames(roots) {
  const names = { css: new Set(), scss: new Set(), mixin: new Set(), module: new Set(), font: new Set() };
  for (const root of roots) {
    for (const file of walk(root, DECLARING, () => false)) {
      const text = readFileSync(file, 'utf8');
      for (const m of text.matchAll(CUSTOM_PROPERTY_DECL)) names.css.add(m[1]);
      if (!/\.s?css$/.test(file)) continue;
      for (const m of text.matchAll(SCSS_VARIABLE_DECL)) names.scss.add(`$${m[1]}`);
      for (const m of text.matchAll(MIXIN_DECL)) names.mixin.add(m[1]);
      for (const m of text.matchAll(FONT_FACE)) names.font.add(m[2].trim());
      if (MODULE_STYLE.test(file)) for (const c of moduleClasses(text)) names.module.add(c);
    }
  }
  return names;
}

/*
 * → the v19 names absent from v20, per kind. `exports` (optional): { v19, v20 } the public export names of
 * ods-react at each ref, for the `export` kind.
 */
export function removedNames(v19, v20, exports = null, props = null) {
  const diff = (a = new Set(), b = new Set()) => new Set([...a].filter((n) => !b.has(n)));
  return {
    css: diff(v19.css, v20.css),
    scss: diff(v19.scss, v20.scss),
    mixin: diff(v19.mixin, v20.mixin),
    module: diff(v19.module, v20.module),
    // The v19 module classes, to tell a bare modifier (`--ghost`) v20 dropped from one it kept.
    moduleV19: new Set(v19.module ?? []),
    moduleV20: new Set(v20.module ?? []),
    font: diff(v19.font, v20.font),
    export: exports ? diff(exports.v19, exports.v20) : new Set(),
    // Map(component → Set(prop)): the props of a v19 component that v20 drops or types `never`.
    prop: props ?? new Map(),
  };
}

/* ---------------------------------------------------------------------------------------------- */
/* CSS: comments, and the BEM classes of a CSS module (SCSS nesting resolved).                    */

/* The comments of a stylesheet: [{ start, end }]. `lineComments` for SCSS, Sass and Less. */
export function cssComments(text, lineComments, base = 0, end = text.length) {
  const out = [];
  for (let i = base; i < end; i += 1) {
    const c = text[i];
    if (c === '"' || c === "'") {
      i = skipQuoted(text, i, end);
    } else if (c === '/' && text[i + 1] === '*') {
      const close = text.indexOf('*/', i + 2);
      const stop = close < 0 || close + 2 > end ? end : close + 2;
      out.push({ start: i, end: stop });
      i = stop - 1;
    } else if (lineComments && c === '/' && text[i + 1] === '/' && !inUrl(text, i, base)) {
      let stop = text.indexOf('\n', i);
      if (stop < 0 || stop > end) stop = end;
      out.push({ start: i, end: stop });
      i = stop - 1;
    }
  }
  return out;
}

function skipQuoted(text, i, end) {
  const q = text[i];
  for (let j = i + 1; j < end; j += 1) {
    if (text[j] === '\\') j += 1;
    else if (text[j] === q || text[j] === '\n') return j;
  }
  return end;
}

function inUrl(text, i, base) {
  const open = text.lastIndexOf('url(', i);
  return open >= base && text.indexOf(')', open) > i && !text.slice(open, i).includes('\n');
}

/* The text with comments and strings blanked (newlines kept), so that braces and `;` can be counted. */
export function maskCss(text, lineComments) {
  const chars = text.split('');
  for (const c of cssComments(text, lineComments)) for (let i = c.start; i < c.end; i += 1) if (chars[i] !== '\n') chars[i] = ' ';
  for (let i = 0; i < chars.length; i += 1) {
    if (chars[i] === '"' || chars[i] === "'") {
      const j = skipQuoted(text, i, text.length);
      for (let k = i + 1; k < j; k += 1) if (chars[k] !== '\n') chars[k] = ' ';
      i = j;
    }
  }
  return chars.join('');
}

/* The BEM classes (`block--modifier`, `block__element`) a CSS module declares, `&` nesting resolved. */
export function moduleClasses(text) {
  const out = new Set();
  const code = maskCss(text, true);
  const root = () => ({ selectors: [''], vars: new Map() });
  const stack = [root()];
  const lookup = (name) => {
    for (let k = stack.length - 1; k >= 0; k -= 1) if (stack[k].vars.has(name)) return stack[k].vars.get(name);
    return null;
  };
  let from = 0;
  for (let i = 0; i < code.length; i += 1) {
    const c = code[i];
    if (c === '{' && code[i - 1] === '#') {
      const close = code.indexOf('}', i);
      i = close < 0 ? code.length : close;
    } else if (c === '{') {
      const prelude = code.slice(from, i).trim();
      const parent = stack[stack.length - 1];
      const selectors = prelude.startsWith('@') ? parent.selectors : resolveSelectors(prelude, parent.selectors, lookup);
      stack.push({ selectors, vars: new Map() });
      for (const s of selectors) for (const m of s.matchAll(/\.(-?[_a-zA-Z][\w-]*)/g)) if (/--|__/.test(m[1])) out.add(m[1]);
      from = i + 1;
    } else if (c === '}') {
      stack.pop();
      if (!stack.length) stack.push(root());
      from = i + 1;
    } else if (c === ';') {
      const v = /^\$([\w-]+)\s*:\s*&\s*$/.exec(code.slice(from, i).trim());
      if (v) stack[stack.length - 1].vars.set(v[1], stack[stack.length - 1].selectors);
      from = i + 1;
    }
  }
  return out;
}

function resolveSelectors(prelude, parents, lookup) {
  const parts = prelude.split(',').map((p) => p.trim()).filter(Boolean);
  const out = [];
  for (const parent of parents) {
    for (const part of parts) {
      const expanded = part.replace(/#\{\s*\$([\w-]+)\s*\}/g, (_, name) => lookup(name)?.[0] ?? '');
      out.push(expanded.includes('&') ? expanded.replaceAll('&', parent) : parent ? `${parent} ${expanded}` : expanded);
    }
  }
  return out;
}

/* ---------------------------------------------------------------------------------------------- */
/* Lexical context: where comments, prose and embedded code are.                                  */

/* A string is prose when it reads as a sentence: 3+ plain words, one of them a common word. */
const STOP_WORDS = new Set(('a an and are as be by can could do does for from has have if in instead into is it its may must no not of on or '
  + 'please should so than that the their them then there these this those to use used uses using was we were when which will with you your '
  + 'au aux avec ce ces cette dans de des du elle en est et il ils la le les leur mais ne nous ou par pas pour qui que sa se ses son sont sur un une utiliser utilisez vous').split(' '));
const CODE_LIKE = /\b(?:import|export)\s[\s\S]*?\bfrom\s*['"]|=>|[{};]\s*$|<\/?[A-Za-z][\w.]*[\s>/]|^\s*[\w-]+\s*:\s*[^\n]*;/m;
/* Elements whose text is code: `<code>`, `<pre>`, and the components that display code (`<CodeBlock>`, `<Source>`). */
const CODE_ELEMENTS = /^(pre|kbd|samp)$|code|source/i;
const CODE_ATTRIBUTES = /^(?:class|className|style|css|sx|tw|\w+ClassName|\w+Class|\w+Style)$/;

export function isProse(text) {
  if (ODS_IMPORT.test(text)) return false;
  // A multi-line text (a prompt, a Markdown document in a string) is prose when it has more prose
  // lines than code lines.
  const lines = text.split('\n').filter((l) => l.trim());
  if (lines.length >= 3) {
    const prose = lines.filter((l) => isProseLine(l)).length;
    const code = lines.filter((l) => CODE_LIKE.test(l.replace(/\\?`[^`]*\\?`/g, ' '))).length;
    return prose >= 2 && prose > code;
  }
  return isProseLine(text);
}

function isProseLine(text) {
  if (CODE_LIKE.test(text.replace(/\\?`[^`]*?\\?`/g, ' '))) return false;
  const stripped = text.replace(/var\([^)]*\)/g, ' ').replace(/(?:--|\$)[\w-]+/g, ' ');
  const words = stripped.split(/\s+/).map((w) => w.replace(/^[("'`«]+|[.,:;!?)"'`»]+$/g, '')).filter((w) => /^[A-Za-zÀ-ÿ'’]+$/.test(w));
  return words.length >= 3 && words.some((w) => STOP_WORDS.has(w.toLowerCase()));
}

/* The language of a file, as the lexer reads it. */
export function languageOf(file) {
  const name = basename(file ?? '');
  if (SNAPSHOT.test(name)) return 'snap';
  if (/\.mdx$/.test(name)) return 'mdx';
  if (/\.md$/.test(name)) return 'md';
  if (/\.(html?|vue|svelte)$/.test(name)) return 'html';
  if (/\.(scss|sass)$/.test(name)) return 'scss';
  if (/\.less$/.test(name)) return 'less';
  if (/\.css$/.test(name)) return 'css';
  if (/\.(c|m)?tsx$/.test(name)) return 'tsx';
  if (/\.(c|m)?ts$/.test(name)) return 'ts';
  if (/\.(c|m)?jsx?$/.test(name)) return 'jsx';
  return 'text';
}

function fenceLanguage(info) {
  const lang = info.toLowerCase();
  if (/^(ts|typescript)$/.test(lang)) return 'ts';
  if (/^(tsx|jsx|js|javascript|mjs|cjs|react)$/.test(lang)) return 'tsx';
  if (/^(scss|sass)$/.test(lang)) return 'scss';
  if (lang === 'less') return 'less';
  if (lang === 'css') return 'css';
  if (/^(html|vue|svelte|xml)$/.test(lang)) return 'html';
  return 'text';
}

function scriptKind(ts, lang) {
  if (lang === 'ts') return ts.ScriptKind.TS;
  if (lang === 'jsx') return ts.ScriptKind.JSX;
  return ts.ScriptKind.TSX;
}

/*
 * The lexical map of a text:
 *   comments  [{ start, end }]                         every comment (of the code parts)
 *   mentions  [{ start, end, context }]                comment, jsx-text, html-text, prose, md-prose, changelog
 *   segments  [{ start, end, lang, sf? }]              the code parts (the whole file for a script or a
 *                                                      stylesheet; fences, ESM, scripts, styles for the others)
 * `ts` is needed for scripts; without it a script is all code.
 */
export function lexicalMap(file, text, ts) {
  const lang = languageOf(file);
  const map = { lang, comments: [], mentions: [], segments: [], strings: [] };
  if ((lang === 'md' || lang === 'mdx') && CHANGELOG.test(basename(file))) {
    map.mentions.push({ start: 0, end: text.length, context: 'changelog' });
    return map;
  }
  if (lang === 'md' || lang === 'mdx') markdown(map, text, lang === 'mdx', ts);
  else if (lang === 'html') html(map, text, 0, text.length, ts);
  else if (lang === 'snap' || lang === 'text') map.segments.push({ start: 0, end: text.length, lang });
  else segment(map, text, 0, text.length, lang, ts);
  for (const c of map.comments) map.mentions.push({ ...c, context: 'comment' });
  map.mentions.sort((a, b) => a.start - b.start);
  return map;
}

function segment(map, text, start, end, lang, ts) {
  const seg = { start, end, lang };
  map.segments.push(seg);
  if (lang === 'css') map.comments.push(...cssComments(text, false, start, end));
  else if (lang === 'scss' || lang === 'less') map.comments.push(...cssComments(text, true, start, end));
  else if ((lang === 'ts' || lang === 'tsx' || lang === 'jsx') && ts) script(map, seg, text, ts);
  else if (lang === 'html') html(map, text, start, end, ts);
}

/* Comments, JSX text and prose strings of a script, from the TypeScript AST. */
function script(map, seg, text, ts) {
  const code = text.slice(seg.start, seg.end);
  const sf = ts.createSourceFile('snippet', code, ts.ScriptTarget.Latest, true, scriptKind(ts, seg.lang));
  seg.sf = sf;
  const at = seg.start;
  const seen = new Set();
  const comment = (ranges) => {
    for (const r of ranges ?? []) {
      if (seen.has(r.pos)) continue;
      seen.add(r.pos);
      map.comments.push({ start: at + r.pos, end: at + r.end });
    }
  };
  const S = ts.SyntaxKind;
  const visit = (node) => {
    if (node.kind >= S.FirstJSDocNode && node.kind <= S.LastJSDocNode) return;
    if (node.kind === S.JsxText) {
      // The text of a `<code>` or `<pre>` element is code, as inline code is in Markdown.
      const tag = node.parent && ts.isJsxElement(node.parent) ? node.parent.openingElement.tagName.getText(sf) : null;
      if (/\S/.test(node.text) && !CODE_ELEMENTS.test(tag ?? '')) map.mentions.push({ start: at + node.pos, end: at + node.end, context: 'jsx-text' });
      return;
    }
    if (node.kind === S.StringLiteral || node.kind === S.NoSubstitutionTemplateLiteral || node.kind === S.TemplateExpression) {
      map.strings.push({ start: at + node.getStart(sf), end: at + node.end });
      if (proseLiteral(ts, node, sf)) {
        const parts = node.kind === S.TemplateExpression ? [node.head, ...node.templateSpans.map((s) => s.literal)] : [node];
        for (const p of parts) map.mentions.push({ start: at + p.getStart(sf), end: at + p.end, context: 'prose' });
      }
    }
    // JSDoc nodes hang under the node they document (the end-of-file token too): their comment is
    // read as trivia of the next token, so a node with only JSDoc children is a token.
    const children = node.getChildren(sf).filter((c) => c.kind < S.FirstJSDocNode || c.kind > S.LastJSDocNode);
    if (!children.length) {
      // Before a token: the comments on the line of the previous token ("trailing") and the ones after it.
      comment(ts.getTrailingCommentRanges(code, node.pos));
      comment(ts.getLeadingCommentRanges(code, node.pos));
      return;
    }
    for (const child of children) visit(child);
  };
  visit(sf);
}

function proseLiteral(ts, node, sf) {
  const parent = node.parent;
  if (!parent || ts.isImportDeclaration(parent) || ts.isExportDeclaration(parent) || ts.isExternalModuleReference(parent) || ts.isLiteralTypeNode(parent)) return false;
  if (ts.isCallExpression(parent) && (parent.expression.kind === ts.SyntaxKind.ImportKeyword || (ts.isIdentifier(parent.expression) && parent.expression.text === 'require'))) return false;
  if (ts.isJsxAttribute(parent) && CODE_ATTRIBUTES.test(parent.name.getText(sf))) return false;
  if (ts.isJsxExpression(parent) && ts.isJsxAttribute(parent.parent) && CODE_ATTRIBUTES.test(parent.parent.name.getText(sf))) return false;
  const raw = node.getText(sf).slice(1, -1);
  return isProse(raw.replace(/\$\{[^}]*\}/g, ' x '));
}

/* HTML, Vue, Svelte: comments, text between tags, `<script>` and `<style>` as code segments. */
function html(map, text, start, end, ts) {
  let i = start;
  let codeDepth = 0;
  while (i < end) {
    if (text.startsWith('<!--', i)) {
      const close = text.indexOf('-->', i + 4);
      const stop = close < 0 || close + 3 > end ? end : close + 3;
      map.comments.push({ start: i, end: stop });
      i = stop;
      continue;
    }
    const tag = /^<(script|style)\b([^>]*)>/i.exec(text.slice(i, Math.min(end, i + 400)));
    if (tag) {
      const open = i + tag[0].length;
      const closeTag = text.toLowerCase().indexOf(`</${tag[1].toLowerCase()}`, open);
      const stop = closeTag < 0 || closeTag > end ? end : closeTag;
      const langAttr = /\blang=["']?(\w+)/.exec(tag[2])?.[1];
      const lang = tag[1].toLowerCase() === 'style' ? (langAttr && /s[ac]ss/.test(langAttr) ? 'scss' : langAttr === 'less' ? 'less' : 'css') : langAttr === 'ts' ? 'ts' : 'jsx';
      segment(map, text, open, stop, lang, ts);
      i = stop;
      continue;
    }
    if (text[i] === '<' && /[A-Za-z/!?]/.test(text[i + 1] ?? '')) {
      const element = /^<(\/?)([A-Za-z][\w-]*)/.exec(text.slice(i, i + 40));
      const stop = tagEnd(text, i, end);
      if (element && CODE_ELEMENTS.test(element[2].toLowerCase()) && text[stop - 2] !== '/') codeDepth = Math.max(0, codeDepth + (element[1] ? -1 : 1));
      i = stop;
      continue;
    }
    let stop = text.indexOf('<', i + 1);
    if (stop < 0 || stop > end) stop = end;
    if (!codeDepth) textRun(map, text, i, stop, 'html-text', /\{\{[\s\S]*?\}\}|\{[^{}]*\}/g);
    i = stop;
  }
}

function tagEnd(text, i, end) {
  let quote = null;
  let depth = 0;
  for (let j = i + 1; j < end; j += 1) {
    const c = text[j];
    if (quote) {
      if (c === quote) quote = null;
    } else if (c === '"' || c === "'") quote = c;
    else if (c === '{') depth += 1;
    else if (c === '}') depth = Math.max(0, depth - 1);
    else if (c === '>' && depth === 0) return j + 1;
  }
  return end;
}

/* A run of prose: a mention, except the parts `code` matches (template expressions, inline code). */
function textRun(map, text, start, end, context, code) {
  let from = start;
  const slice = text.slice(start, end);
  for (const m of code ? slice.matchAll(code) : []) {
    const s = start + m.index;
    if (/\S/.test(text.slice(from, s))) map.mentions.push({ start: from, end: s, context });
    from = s + m[0].length;
  }
  if (/\S/.test(text.slice(from, end))) map.mentions.push({ start: from, end, context });
}

/* Markdown and MDX: fenced blocks (by language), inline code, MDX ESM / JSX / expressions are code. */
function markdown(map, text, mdx, ts) {
  const starts = lineStarts(text);
  const lines = text.split('\n');
  let prose = null;
  const flush = (end) => {
    if (prose !== null && end > prose) proseRun(map, text, prose, end, mdx);
    prose = null;
  };
  for (let n = 0; n < lines.length; n += 1) {
    const paragraphStart = n === 0 || lines[n - 1].trim() === '';
    const open = /^ {0,3}(`{3,}|~{3,})\s*([\w+#.-]*)/.exec(lines[n]);
    if (open) {
      flush(starts[n]);
      let close = n + 1;
      const fence = new RegExp(`^ {0,3}${open[1][0] === '`' ? '`' : '~'}{${open[1].length},}\\s*$`);
      while (close < lines.length && !fence.test(lines[close])) close += 1;
      const from = starts[n + 1] ?? text.length;
      const to = close < lines.length ? starts[close] : text.length;
      if (to > from) segment(map, text, from, to, fenceLanguage(open[2]), ts);
      n = close;
      continue;
    }
    if (mdx && paragraphStart && /^(import|export)\s/.test(lines[n])) {
      flush(starts[n]);
      let last = n;
      while (last + 1 < lines.length && lines[last + 1].trim() !== '') last += 1;
      const to = last + 1 < lines.length ? starts[last + 1] : text.length;
      segment(map, text, starts[n], to, 'tsx', ts);
      n = last;
      continue;
    }
    if (prose === null) prose = starts[n];
  }
  flush(text.length);
}

function proseRun(map, text, start, end, mdx) {
  const slice = text.slice(start, end);
  const code = [];
  for (const m of slice.matchAll(/(`+)([\s\S]*?[^`])\1(?!`)/g)) code.push([start + m.index, start + m.index + m[0].length, null]);
  for (const m of slice.matchAll(/<!--[\s\S]*?-->/g)) code.push([start + m.index, start + m.index + m[0].length, 'comment']);
  // A `<code>` / `<pre>` element (or a component that displays code), tags and text, is code: HTML in
  // Markdown, JSX in MDX.
  for (const m of slice.matchAll(/<([A-Za-z][\w.-]*)(?=[\s>])/g)) {
    const s = start + m.index;
    if (!CODE_ELEMENTS.test(m[1]) || code.some(([a, b]) => s >= a && s < b)) continue;
    const open = tagEnd(text, s, end);
    if (text[open - 2] === '/') continue;
    const close = text.indexOf(`</${m[1]}`, open);
    if (close < 0 || close >= end) continue;
    code.push([s, tagEnd(text, close, end), null]);
  }
  if (mdx) {
    for (let i = start; i < end; i += 1) {
      if (code.some(([s, e]) => i >= s && i < e)) continue;
      if (text[i] === '{') {
        const stop = balanced(text, i, end);
        const inner = text.slice(i + 1, stop - 1).trim();
        code.push([i, stop, /^\/\*[\s\S]*\*\/$/.test(inner) ? 'comment' : null]);
        i = stop - 1;
      } else if (text[i] === '<' && /[A-Za-z/]/.test(text[i + 1] ?? '')) {
        const stop = tagEnd(text, i, end);
        code.push([i, stop, null]);
        i = stop - 1;
      }
    }
  }
  code.sort((a, b) => a[0] - b[0]);
  let from = start;
  for (const [s, e, kind] of code) {
    if (s < from) continue;
    if (/\S/.test(text.slice(from, s))) map.mentions.push({ start: from, end: s, context: 'md-prose' });
    if (kind === 'comment') map.comments.push({ start: s, end: e });
    else map.segments.push({ start: s, end: e, lang: 'inline' });
    from = e;
  }
  if (/\S/.test(text.slice(from, end))) map.mentions.push({ start: from, end, context: 'md-prose' });
}

function balanced(text, i, end) {
  let depth = 0;
  for (let j = i; j < end; j += 1) {
    if (text[j] === '{') depth += 1;
    else if (text[j] === '}' && (depth -= 1) === 0) return j + 1;
  }
  return end;
}

/* The context of `offset`: `code` or the context of the mention around it. */
export function contextAt(map, offset) {
  const list = map.mentions;
  let lo = 0;
  let hi = list.length - 1;
  let found = 'code';
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (list[mid].start <= offset) {
      if (offset < list[mid].end) found = list[mid].context;
      lo = mid + 1;
    } else hi = mid - 1;
  }
  if (found !== 'code') return found;
  // Mentions may nest (a comment inside a prose segment is not possible, but a long one may start before a shorter one).
  for (let k = lo - 1; k >= 0 && k >= lo - 8; k -= 1) if (list[k].start <= offset && offset < list[k].end) return list[k].context;
  return 'code';
}

/* ---------------------------------------------------------------------------------------------- */
/* Occurrences.                                                                                   */

function isPrefixOfRemoved(prefix, removed, kept) {
  let hit = false;
  for (const n of removed) if (n.startsWith(prefix)) { hit = true; break; }
  if (!hit) return false;
  for (const n of kept) if (n.startsWith(prefix)) return false;
  return true;
}

const moduleRegexCache = new WeakMap();
function moduleRegex(set) {
  if (!set?.size) return null;
  if (!moduleRegexCache.has(set)) {
    const names = [...set].sort((a, b) => b.length - a.length).map((n) => n.replace(/[-]/g, '\\-'));
    moduleRegexCache.set(set, new RegExp(`(?<![\\w-])(_?)(${names.join('|')})(_[a-z0-9]{1,8}_\\d+)?(?![\\w-])`, 'g'));
  }
  return moduleRegexCache.get(set);
}

/* A module class is the ODS one in its built form (`_x--y`) or inside a `[class…="…"]` selector. */
function inClassSelector(text, index) {
  const open = text.lastIndexOf('[', index);
  if (open < 0 || index - open > 200) return false;
  const close = text.indexOf(']', open);
  return /^\[\s*class\s*[*^~|$]?=/.test(text.slice(open, index)) && close > index;
}

/*
 * The occurrences of removed names in one text: [{ line, column (1-based), offset, name, kind, context }].
 * `file` gives the language (contexts); without it every occurrence is code. `ts` reads scripts.
 * `map` is a lexical map already computed for this text.
 */
export function scanText(text, removed, declared20, { file, ts, map } = {}) {
  const raw = [];
  const dynamicAfter = (end) => text.startsWith('${', end) || text.startsWith('#{', end);
  for (const [regex, kind] of [[CUSTOM_PROPERTY_USE, 'css'], [SCSS_VARIABLE_USE, 'scss']]) {
    for (const m of text.matchAll(regex)) {
      const name = m[0];
      if (dynamicAfter(m.index + name.length)) {
        if (isPrefixOfRemoved(name, removed[kind], declared20[kind] ?? new Set())) raw.push({ offset: m.index, name: `${name}\${…}`, kind: 'dynamic' });
      } else if (removed[kind].has(name)) raw.push({ offset: m.index, name, kind });
    }
  }
  const mixinAt = new Set();
  for (const m of text.matchAll(MIXIN_USE)) {
    const name = m[1] ?? m[2];
    if (removed.mixin.has(name)) {
      const offset = m.index + m[0].lastIndexOf(name);
      mixinAt.add(offset);
      raw.push({ offset, name, kind: 'mixin' });
    }
  }
  if (removed.css.size && text.includes('ods-')) {
    for (const m of text.matchAll(TAILWIND_USE)) {
      const name = m[0];
      if (mixinAt.has(m.index) || text[m.index + name.length] === '(' || dynamicAfter(m.index + name.length)) continue;
      if (/@include\s+(?:[\w-]+\.)?$/.test(text.slice(Math.max(0, m.index - 80), m.index))) continue;
      if (removed.css.has(`--${name}`)) raw.push({ offset: m.index, name, kind: 'bare-key' });
    }
  }
  const modules = moduleRegex(removed.module);
  if (modules && text.includes('--')) {
    for (const m of text.matchAll(modules)) {
      if (m[1] !== '_' && !inClassSelector(text, m.index)) continue;
      raw.push({ offset: m.index + m[1].length, name: m[2], kind: 'module' });
    }
  }
  if (removed.moduleV19?.size && text.includes('class')) {
    for (const m of text.matchAll(BARE_MODIFIER)) {
      const offset = m.index + m[0].indexOf(m[1]);
      const name = removedModifier(text, m.index, m[1], removed);
      if (name) raw.push({ offset, name, kind: 'module' });
    }
  }
  for (const [set, kind] of [[removed.font, 'font'], [removed.export, 'export']]) {
    const regex = wordRegex(set);
    if (!regex) continue;
    for (const m of text.matchAll(regex)) {
      // A font family list that also names a font v20 loads ('Source Sans Pro', 'Source Sans 3') still renders it.
      if (kind === 'font' && keptFont(text, m.index, declared20.font)) continue;
      // Only the family alone: 'Brand Source Sans Pro' or local('Source Sans Pro Light') name another font.
      if (kind === 'font' && partOfAnotherName(text, m.index, m[0].length)) continue;
      raw.push({ offset: m.index, name: m[0], kind });
    }
  }
  if (removed.prop?.size && text.includes('<')) {
    for (const m of text.matchAll(/<([A-Z][\w]*)(?=[\s/>])/g)) {
      const props = removed.prop.get(m[1]);
      if (!props) continue;
      const tag = text.slice(m.index, tagEnd(text, m.index, Math.min(text.length, m.index + 2000)));
      for (const prop of props) {
        const at = new RegExp(`(?<![\\w.-])${prop}\\s*=`).exec(tag);
        if (at) raw.push({ offset: m.index + at.index, name: `${m[1]} ${prop}`, kind: 'prop' });
      }
    }
  }
  if (!raw.length) return [];
  const starts = lineStarts(text);
  const lexical = file ? (map ?? lexicalMap(file, text, ts)) : null;
  const shownAsCode = (offset) => !lexical || lexical.lang === 'md' || lexical.lang === 'mdx' || lexical.strings.some((s) => s.start <= offset && offset < s.end);
  return raw
    // A removed export in a script is the type checker's business, except in a string (code shown to readers).
    .filter((r) => (r.kind !== 'export' && r.kind !== 'prop') || shownAsCode(r.offset))
    .map((r) => ({ ...positionOf(starts, r.offset), ...r, context: lexical ? contextAt(lexical, r.offset) : 'code' }))
    .sort((a, b) => a.offset - b.offset);
}

function keptFont(text, at, fonts) {
  if (!fonts?.size) return false;
  const lineStart = text.lastIndexOf('\n', at) + 1;
  const lineEnd = text.indexOf('\n', at);
  const line = text.slice(lineStart, lineEnd < 0 ? text.length : lineEnd);
  return [...fonts].some((f) => line.includes(f));
}

/* The name sits inside a longer font name: a word before or after it within the same quotes. */
function partOfAnotherName(text, at, length) {
  return /[\w-][ \t]+$/.test(text.slice(Math.max(0, at - 40), at)) || /^[ \t]+[\w-]/.test(text.slice(at + length, at + length + 40));
}

const wordRegexCache = new WeakMap();
function wordRegex(set) {
  if (!set?.size) return null;
  if (!wordRegexCache.has(set)) {
    const names = [...set].sort((a, b) => b.length - a.length).map((n) => n.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&'));
    wordRegexCache.set(set, new RegExp(`(?<![\\w$-])(?:${names.join('|')})(?![\\w$-])`, 'g'));
  }
  return wordRegexCache.get(set);
}

/* `[class*="--ghost"]`: a bare BEM modifier in an attribute selector. */
const BARE_MODIFIER = /\[\s*class\s*[*~|^$]?=\s*['"]?(--[\w-]+)['"]?\s*\]/g;

/*
 * The removed module class a bare modifier stands for: with a type selector naming a component of
 * v19 (`button[class*="--ghost"]`), that component's class when v20 dropped it; without one, the
 * modifier when no v20 component declares it any more. → the name (`button--ghost`, `--ghost`) or null.
 */
function removedModifier(text, at, modifier, removed) {
  const before = text.slice(Math.max(0, at - 200), at);
  const type = /(?:^|[\s>+~,{}(])([a-zA-Z][\w-]*)(?:\[[^\]]*\]|[.#][\w-]+|::?[\w-]+(?:\([^)]*\))?)*$/.exec(before)?.[1]?.toLowerCase();
  if (type && removed.moduleV19.has(`${type}${modifier}`)) return removed.moduleV20.has(`${type}${modifier}`) ? null : `${type}${modifier}`;
  const declaredBy = (set) => [...set].some((n) => n.endsWith(modifier));
  return declaredBy(removed.moduleV19) && !declaredBy(removed.moduleV20) ? modifier : null;
}

/* The occurrences of the harness: a site counts in code; anything else is a mention. */
export function isSiteContext(context) {
  return context === 'code';
}

/*
 * The kind of site the harness reports for an occurrence: `doc` for any name in the code of a
 * Markdown / MDX file (fences, inline code, MDX ESM and JSX) and for a removed export in a string of a
 * script, else by occurrence kind.
 */
export function siteKind(kind, file = '') {
  if (/\.mdx?$/.test(file) || kind === 'export' || kind === 'prop') return 'doc';
  return kind === 'bare-key' ? 'bare-key' : kind === 'module' ? 'module' : 'token';
}

/*
 * Every occurrence of the files, as the harness lists them:
 *   sites     [{ file, line, column, kind (token | bare-key | module | doc), rule, detail, bucket (main | snap) }]
 *   mentions  [{ file, line, column, name, detail, context }]
 * `read(file)` returns the text of a file (relative to `root`).
 */
export function collectTokenSites(files, read, removed, declared20, { ts } = {}) {
  const sites = [];
  const mentions = [];
  for (const file of files) {
    const text = read(file);
    for (const s of scanText(text, removed, declared20, { file, ts })) {
      if (isSiteContext(s.context)) {
        sites.push({ file, line: s.line, column: s.column, kind: siteKind(s.kind, file), rule: s.name, detail: s.kind, bucket: SNAPSHOT.test(file) ? 'snap' : 'main' });
      } else {
        mentions.push({ file, line: s.line, column: s.column, name: s.name, detail: s.kind, context: s.context });
      }
    }
  }
  return { sites, mentions };
}

/* How many times `name` (or the dynamic prefix) occurs in `text`. */
export function countName(text, name) {
  const prefix = name.endsWith('${…}') ? name.slice(0, -4) : null;
  const needle = prefix ?? name;
  let count = 0;
  let from = 0;
  for (;;) {
    const at = text.indexOf(needle, from);
    if (at < 0) return count;
    const before = at === 0 ? '' : text[at - 1];
    const after = text[at + needle.length] ?? '';
    const boundedBefore = !/[\w$-]/.test(before);
    const boundedAfter = prefix ? text.startsWith('${', at + needle.length) || text.startsWith('#{', at + needle.length) : !/[\w-]/.test(after);
    if (boundedBefore && boundedAfter) count += 1;
    from = at + needle.length;
  }
}

/* ---------------------------------------------------------------------------------------------- */
/* Snippets: code that ships as text (Markdown fences, template strings with an ODS import).       */


/*
 * The snippets of a text that import ODS: [{ start, end, lang (ts | tsx), code }]. `code` is the text
 * of [start, end) with template substitutions blanked (same length, newlines kept), so an offset in
 * the snippet plus `start` is the offset in the file.
 */
export function extractSnippets(file, text, ts, importPattern = ODS_IMPORT) {
  if (!importPattern.test(text)) return [];
  // A script holds a snippet only inside a string: skip the parse when no string can hold an import.
  if (['ts', 'tsx', 'jsx'].includes(languageOf(file)) && !/`[^`]*\bimport\b[^`]*`|['"]import\s[^'"\n]*\bfrom\s*\\?['"]/.test(text)) return [];
  const map = lexicalMap(file, text, ts);
  const out = [];
  for (const seg of map.segments) {
    if (seg.lang === 'ts' || seg.lang === 'tsx' || seg.lang === 'jsx') {
      const own = text.slice(seg.start, seg.end);
      if (map.lang === 'md' || map.lang === 'mdx' || map.lang === 'html') {
        if (importPattern.test(own)) out.push({ start: seg.start, end: seg.end, lang: seg.lang === 'ts' ? 'ts' : 'tsx', code: own });
      }
      if (seg.sf) templates(ts, seg, text, importPattern, out);
    }
  }
  return out.sort((a, b) => a.start - b.start);
}

function templates(ts, seg, text, importPattern, out) {
  const S = ts.SyntaxKind;
  const visit = (node) => {
    if (node.kind === S.NoSubstitutionTemplateLiteral || node.kind === S.TemplateExpression || node.kind === S.StringLiteral) {
      const start = seg.start + node.getStart(seg.sf) + 1;
      const end = seg.start + node.end - 1;
      let code = text.slice(start, end);
      if (importPattern.test(code)) {
        if (node.kind === S.TemplateExpression) {
          // Blank each substitution, from its `${` to its `}`.
          const chars = code.split('');
          let open = node.head.end - 2;
          for (const span of node.templateSpans) {
            const close = span.literal.getStart(seg.sf) + 1;
            for (let k = open; k < close; k += 1) if (chars[k - (start - seg.start)] !== '\n') chars[k - (start - seg.start)] = ' ';
            open = span.literal.end - 2;
          }
          code = chars.join('');
        }
        out.push({ start, end, lang: 'tsx', code });
      }
      return;
    }
    ts.forEachChild(node, visit);
  };
  visit(seg.sf);
}
