/*
 * TypeScript sites. The corpus is type-checked against a surface; each diagnostic is located (file, line,
 * code), tagged `ods` when it sits on code that uses ODS, and given an `anchor` (the API usage it belongs
 * to) so that the errors of one usage make one site.
 *
 * What uses ODS is decided by the v19 type checker, never by the ods-migrate sources: an import (or a
 * re-export) is ODS when its symbol, followed through every alias (barrels, `export *`, relative paths,
 * tsconfig aliases, package.json `imports`, workspace packages), lands on a declaration of the ODS
 * surface; a property (a JSX attribute of a wrapper, a key of a typed object, `props.variant`) is ODS
 * when its declaration is in the surface (props of a wrapper that extends or picks `ButtonProp`).
 */
import { join, relative, sep } from 'node:path';

export const TS_FILES = /\.(c|m)?tsx?$/;
export const JS_FILES = /\.(c|m)?jsx?$/;

const ODS_PACKAGES = ['@ovhcloud/ods-react'];

/*
 * Type-checks `files` (absolute) against `surface`. Module specifiers resolve per file through `project`
 * (tsconfig paths / baseUrl of the file's own config, workspace packages) when it is given.
 * `attribute`: { diagnostics, treatAsOds } — v20 diagnostics of the same files (same texts) to tag with
 *   `ods` / `anchor` using this program's checker (pass it on the v19 run of the unmigrated copy).
 * → { diagnostics, analysis (with `attribute`), exportNames }
 */
export function checkProgram(ts, { files, options, surface, root, project, attribute }) {
  const host = ts.createCompilerHost(options, true);
  if (project) {
    const resolveOne = project.moduleResolver(ts, root, options, host);
    host.resolveModuleNameLiterals = (literals, containingFile, _redirected, compilerOptions, containingSourceFile) =>
      literals.map((literal) => resolveOne(literal.text, containingFile, ts.getModeForUsageLocation(containingSourceFile, literal, compilerOptions)));
  }
  const program = ts.createProgram({ rootNames: [...files, join(surface.root, 'ambient.d.ts')], options, host });
  const out = [];
  const checker = program.getTypeChecker();
  for (const file of files) {
    const sf = program.getSourceFile(file);
    if (!sf) continue;
    const rel = relative(root, sf.fileName).split(sep).join('/');
    const own = [];
    for (const d of [...program.getSyntacticDiagnostics(sf), ...program.getSemanticDiagnostics(sf)]) {
      if (!d.file || d.start === undefined || d.file.fileName !== sf.fileName) continue;
      own.push({ code: `TS${d.code}`, start: d.start, length: d.length ?? 0, message: ts.flattenDiagnosticMessageText(d.messageText, ' ') });
    }
    for (const d of [...own, ...hiddenDiagnostics(ts, checker, sf, own)]) {
      out.push({ file: rel, line: sf.getLineAndCharacterOfPosition(d.start).line + 1, ...d });
    }
  }
  out.sort((a, b) => a.file.localeCompare(b.file) || a.line - b.line || a.start - b.start);
  const diagnostics = dedupe(out);
  const exportNames = surfaceExports(ts, program, surface);
  let analysis = null;
  if (attribute) {
    const live = odsAnalysis(ts, program, { surface, root, treatAsOds: attribute.treatAsOds ?? [] });
    for (const d of attribute.diagnostics) {
      const sf = program.getSourceFile(join(root, d.file));
      if (!sf || sf.text.length < d.start) {
        d.ods = false;
        continue;
      }
      d.ods = live.touches(sf, d.start);
      // A broken binding counts where it names the removed ODS export itself (`BADGE_COLOR` from a barrel
      // that re-exported it), not where it names a corpus alias (`COLORS`): fixing the barrel fixes that one.
      if (d.ods && HIDDEN_BINDING.has(d.code)) d.ods = live.odsNameAt(sf, d.via ?? d.start) === d.name;
      d.anchor = anchorOf(ts, sf, d.start);
      d.span = anchorSpan(ts, sf, d.start);
    }
    // A plain snapshot (no checker kept alive): the bindings of every file.
    const byFile = new Map();
    for (const file of files) {
      const sf = program.getSourceFile(file);
      if (sf) byFile.set(relative(root, file).split(sep).join('/'), live.fileInfo(sf));
    }
    analysis = snapshotAnalysis(byFile, live.list, exportNames);
  }
  return { diagnostics, analysis, exportNames };
}

/* The diagnostics of the corpus files, tagged `ods` against the package names only (no checker). */
export function typeCheck(ts, { files, options, surface, root, project }) {
  return checkProgram(ts, { files, options, surface, root, project }).diagnostics;
}

/*
 * The errors the type checker does not report, as diagnostics of the harness's own codes:
 *   unresolved-alias  an import or export specifier with no error whose alias chain ends nowhere: a name
 *                     imported from a module that re-exported a removed ODS export (`BADGE_COLOR` from a
 *                     barrel); the error is on the barrel's line only
 *   unresolved-use    each use of a binding whose import is broken (an error of its own or an
 *                     unresolved-alias): the binding is `any`, so its uses report nothing
 *   masked-attribute  a JSX attribute of an element that has an error, that does not exist on the props or
 *                     whose value is not assignable to its prop: the checker reports one error per element
 *   removed-prop      a JSX attribute, or an indexed access type (`Props["color"]`), on a prop typed `never`
 *                     (how v20 removes a prop) that reports nothing: its value is `undefined` (or `any`)
 * `own`: the diagnostics of `sf` ({ code, start, message }). → [{ code, start, length, message, name?, via? }]
 */
const BROKEN_IMPORT = new Set(['TS2305', 'TS2459', 'TS2460', 'TS2614', 'TS2724']);
export const HIDDEN_BINDING = new Set(['unresolved-alias', 'unresolved-use']);

export function hiddenDiagnostics(ts, checker, sf, own) {
  const out = [];
  const errorIn = (node, codes = null) => own.some((d) => d.start >= node.getStart(sf) && d.start < node.end && (!codes || codes.has(d.code)));
  const safe = (fn) => {
    try {
      return fn();
    } catch {
      return undefined;
    }
  };
  const nowhere = (symbol) => !symbol || (!symbol.declarations?.length && symbol.name === 'unknown');
  // 1. Specifiers whose alias chain is broken.
  const broken = new Map();
  for (const statement of sf.statements) {
    const isImport = ts.isImportDeclaration(statement);
    if (!isImport && !ts.isExportDeclaration(statement)) continue;
    if (statement.moduleSpecifier && errorIn(statement.moduleSpecifier)) continue; // a module not found: not about a name
    const specs = [];
    if (isImport) {
      const clause = statement.importClause;
      if (clause?.name) specs.push([clause.name, clause.name, 'default']);
      if (clause?.namedBindings && ts.isNamedImports(clause.namedBindings)) for (const el of clause.namedBindings.elements) specs.push([el, el.name, (el.propertyName ?? el.name).text]);
    } else if (statement.exportClause && ts.isNamedExports(statement.exportClause)) {
      for (const el of statement.exportClause.elements) specs.push([el, el.name, (el.propertyName ?? el.name).text]);
    }
    for (const [spec, nameNode, name] of specs) {
      const symbol = safe(() => checker.getSymbolAtLocation(nameNode));
      if (!symbol || !(symbol.flags & ts.SymbolFlags.Alias) || !nowhere(safe(() => checker.getAliasedSymbol(symbol)))) continue;
      const start = spec.getStart(sf);
      if (!errorIn(spec, BROKEN_IMPORT)) {
        if (errorIn(spec)) continue;
        out.push({ code: 'unresolved-alias', start, length: spec.end - start, message: `'${name}' resolves to nothing: a module it is re-exported from no longer has it`, name });
      }
      if (isImport) broken.set(symbol, { name, via: start });
    }
  }
  // 2. The uses of the broken bindings.
  if (broken.size) {
    const visit = (node) => {
      if (ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) return;
      if (ts.isIdentifier(node)) {
        const parent = node.parent;
        const symbol = parent && ts.isShorthandPropertyAssignment(parent) && parent.name === node
          ? safe(() => checker.getShorthandAssignmentValueSymbol(parent))
          : safe(() => checker.getSymbolAtLocation(node));
        const binding = symbol && broken.get(symbol);
        if (binding) {
          const start = node.getStart(sf);
          out.push({ code: 'unresolved-use', start, length: node.end - start, message: `'${node.text}' is bound to '${binding.name}', which no longer resolves`, name: binding.name, via: binding.via });
        }
        return;
      }
      ts.forEachChild(node, visit);
    };
    visit(sf);
  }
  // 3. Props: the attributes an error of their element hides, and the props v20 removed by typing them
  // `never` (`color?: never`), which a value typed `undefined` (or `any` through an `undefined`) passes.
  const propertyOf = (type, name) => {
    const direct = safe(() => checker.getPropertyOfType(checker.getApparentType(type), name));
    if (direct) return direct;
    if (type.isUnionOrIntersection?.()) for (const t of type.types) {
      const p = propertyOf(t, name);
      if (p) return p;
    }
    return null;
  };
  const indexed = (type) => (safe(() => checker.getIndexInfosOfType(checker.getApparentType(type)).length) ?? 0) > 0
    || Boolean(type.isUnionOrIntersection?.() && type.types.some(indexed));
  const removedProp = (prop, at) => {
    const type = safe(() => checker.getTypeOfSymbolAtLocation(prop, at));
    const solid = type && safe(() => checker.getNonNullableType(type));
    return Boolean(solid && solid.flags & ts.TypeFlags.Never);
  };
  const visit = (node) => {
    if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
      const hasError = errorIn(node);
      const type = safe(() => checker.getContextualType(node.attributes));
      if (type && !(type.flags & ts.TypeFlags.Any)) {
        // Attributes an error of the element already names.
        const named = new Set();
        for (const d of own) {
          if (d.start < node.getStart(sf) || d.start >= node.end) continue;
          for (const m of d.message.matchAll(/[Pp]roperty '([^']+)'|'([^']+)' does not exist/g)) named.add(m[1] ?? m[2]);
        }
        const tag = node.tagName.getText(sf);
        for (const attr of node.attributes.properties) {
          if (!ts.isJsxAttribute(attr) || !ts.isIdentifier(attr.name)) continue;
          const name = attr.name.text;
          if (name.includes('-') || named.has(name) || errorIn(attr)) continue;
          const start = attr.getStart(sf);
          const prop = propertyOf(type, name);
          if (!prop) {
            if (hasError && !indexed(type)) out.push({ code: 'masked-attribute', start, length: attr.end - start, message: `Property '${name}' does not exist on the props of <${tag}>`, name });
            continue;
          }
          if (removedProp(prop, attr)) {
            out.push({ code: 'removed-prop', start, length: attr.end - start, message: `The prop '${name}' of <${tag}> is removed (typed never)`, name });
            continue;
          }
          const value = attr.initializer && ts.isJsxExpression(attr.initializer) ? attr.initializer.expression : attr.initializer;
          if (!hasError || !value) continue;
          const valueType = safe(() => checker.getTypeAtLocation(value));
          const propType = safe(() => checker.getTypeOfSymbolAtLocation(prop, attr));
          if (valueType && propType && safe(() => checker.isTypeAssignableTo(valueType, propType)) === false) {
            out.push({ code: 'masked-attribute', start, length: attr.end - start, message: `Type '${checker.typeToString(valueType)}' is not assignable to the prop '${name}' of <${tag}> ('${checker.typeToString(propType)}')`, name });
          }
        }
      }
    } else if (ts.isIndexedAccessTypeNode(node) && ts.isLiteralTypeNode(node.indexType) && ts.isStringLiteral(node.indexType.literal) && !errorIn(node)) {
      // `Parameters<typeof Badge>[0]["color"]`: a removed prop read as a type is `never`, with no error.
      const name = node.indexType.literal.text;
      const objectType = safe(() => checker.getTypeFromTypeNode(node.objectType));
      const prop = objectType && propertyOf(objectType, name);
      if (prop && removedProp(prop, node)) {
        const start = node.getStart(sf);
        out.push({ code: 'removed-prop', start, length: node.end - start, message: `The prop '${name}' read by this type is removed (typed never)`, name });
      }
    }
    ts.forEachChild(node, visit);
  };
  visit(sf);
  return out;
}

function dedupe(diagnostics) {
  const seen = new Set();
  return diagnostics.filter((d) => {
    const key = `${d.file}:${d.start}:${d.code}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

/* The public export names of the surface (`@ovhcloud/ods-react` → src/index.ts). */
function surfaceExports(ts, program, surface) {
  const names = new Set();
  const sf = program.getSourceFile(join(surface.src, 'index.ts'));
  if (!sf) return names;
  const checker = program.getTypeChecker();
  const symbol = checker.getSymbolAtLocation(sf);
  if (symbol) for (const e of checker.getExportsOfModule(symbol)) names.add(e.name);
  return names;
}

/*
 * What uses ODS in the files of `program`, from its checker. → {
 *   fileInfo(sf)            { names: Map(local → ODS name or '*'), specifiers: Set, reexports: [[pos, end]] }
 *   touches(sf, position)   the diagnostic at `position` sits on code that uses ODS
 *   list                    the ODS packages (and --treat-as-ods paths)
 * }
 */
export function odsAnalysis(ts, program, { surface, root, treatAsOds = [] }) {
  const checker = program.getTypeChecker();
  const odsDirs = [surface.src, surface.themes].map((d) => `${d}${sep}`.split(sep).join('/'));
  const inOds = (fileName) => odsDirs.some((d) => fileName.startsWith(d));
  const declaredInOds = (symbol) => (symbol?.declarations ?? []).some((d) => inOds(d.getSourceFile().fileName));
  const list = [...ODS_PACKAGES, ...treatAsOds];
  const listed = (spec) => list.some((p) => spec === p || spec.startsWith(`${p}/`));

  // The ODS name a symbol stands for, through every alias: 'Button', '*' (the package or a module re-exporting it), or null.
  const nameCache = new Map();
  const odsNameOf = (symbol) => {
    if (!symbol) return null;
    if (nameCache.has(symbol)) return nameCache.get(symbol);
    nameCache.set(symbol, null);
    let result = null;
    const decls = symbol.declarations ?? [];
    const odsDecl = decls.find((d) => inOds(d.getSourceFile().fileName));
    if (odsDecl) result = ts.isSourceFile(odsDecl) || ts.isModuleDeclaration(odsDecl) ? '*' : symbol.name;
    else if (symbol.flags & ts.SymbolFlags.Alias) {
      let target;
      try {
        target = checker.getImmediateAliasedSymbol(symbol);
      } catch {
        target = undefined;
      }
      result = odsNameOf(target);
    } else if (decls.some((d) => ts.isSourceFile(d))) {
      result = checker.getExportsOfModule(symbol).some((e) => odsNameOf(e)) ? '*' : null;
    }
    nameCache.set(symbol, result);
    return result;
  };
  const symbolIsOds = (symbol) => {
    if (!symbol) return false;
    if (odsNameOf(symbol)) return true;
    let roots = [symbol];
    try {
      roots = checker.getRootSymbols(symbol);
    } catch {}
    return roots.some((r) => declaredInOds(r) || (r !== symbol && odsNameOf(r)));
  };
  const typeIsOds = (type, depth = 0) => {
    if (!type || depth > 3) return false;
    if (symbolIsOds(type.aliasSymbol) || symbolIsOds(type.getSymbol?.())) return true;
    if (type.isUnionOrIntersection?.()) return type.types.some((t) => typeIsOds(t, depth + 1));
    return false;
  };
  const propertyOf = (type, name) => {
    if (!type) return null;
    const direct = checker.getPropertyOfType(checker.getApparentType(type), name);
    if (direct) return direct;
    if (type.isUnionOrIntersection?.()) for (const t of type.types) {
      const p = propertyOf(t, name);
      if (p) return p;
    }
    return null;
  };
  const safe = (fn) => {
    try {
      return fn();
    } catch {
      return false;
    }
  };
  // An identifier that names ODS: an ODS binding, or a property declared by ODS (also through a contextual type).
  const identifierIsOds = (id) => safe(() => {
    const symbol = checker.getSymbolAtLocation(id);
    if (symbolIsOds(symbol)) return true;
    const parent = id.parent;
    if (parent && (ts.isPropertyAssignment(parent) || ts.isShorthandPropertyAssignment(parent)) && parent.name === id && ts.isObjectLiteralExpression(parent.parent)) {
      return symbolIsOds(propertyOf(checker.getContextualType(parent.parent), id.text));
    }
    return false;
  });
  const attributeIsOds = (attr) => safe(() => {
    if (!ts.isJsxAttribute(attr)) return false;
    const name = ts.isIdentifier(attr.name) ? attr.name.text : attr.name.getText();
    return symbolIsOds(propertyOf(checker.getContextualType(attr.parent), name)) || symbolIsOds(checker.getSymbolAtLocation(attr.name));
  });
  const tagIsOds = (tag) => {
    let e = tag;
    while (ts.isPropertyAccessExpression(e)) e = e.expression;
    return ts.isIdentifier(e) && identifierIsOds(e);
  };
  const declarationIsOds = (decl, info) => {
    if (info.reexports.some(([pos, end]) => decl.pos === pos && decl.end === end)) return true;
    const spec = decl.moduleSpecifier && ts.isStringLiteral(decl.moduleSpecifier) ? decl.moduleSpecifier.text : null;
    return spec !== null && (listed(spec) || info.specifiers.has(spec));
  };

  const infoCache = new Map();
  const fileInfo = (sf) => {
    if (infoCache.has(sf)) return infoCache.get(sf);
    const names = new Map();
    const specifiers = new Set();
    const reexports = [];
    for (const statement of sf.statements) {
      if ((!ts.isImportDeclaration(statement) && !ts.isExportDeclaration(statement)) || !statement.moduleSpecifier || !ts.isStringLiteral(statement.moduleSpecifier)) continue;
      const spec = statement.moduleSpecifier.text;
      let any = false;
      const bind = (local, imported, nameNode) => {
        const ods = safe(() => odsNameOf(checker.getSymbolAtLocation(nameNode))) || (listed(spec) ? imported : null);
        if (!ods) return;
        any = true;
        if (local) names.set(local, ods);
      };
      if (ts.isImportDeclaration(statement)) {
        const clause = statement.importClause;
        if (!clause) continue;
        if (clause.name) bind(clause.name.text, 'default', clause.name);
        const bindings = clause.namedBindings;
        if (bindings && ts.isNamespaceImport(bindings)) bind(bindings.name.text, '*', bindings.name);
        if (bindings && ts.isNamedImports(bindings)) for (const el of bindings.elements) bind(el.name.text, (el.propertyName ?? el.name).text, el.name);
      } else {
        const clause = statement.exportClause;
        if (!clause || ts.isNamespaceExport(clause)) {
          const moduleOds = safe(() => odsNameOf(checker.getSymbolAtLocation(statement.moduleSpecifier))) || listed(spec);
          if (moduleOds) any = true;
        } else for (const el of clause.elements) bind(null, (el.propertyName ?? el.name).text, el.name);
        if (any) reexports.push([statement.pos, statement.end]);
      }
      if (any) specifiers.add(spec);
    }
    for (const s of [...specifiers]) if (listed(s)) specifiers.delete(s);
    const info = { names, specifiers, reexports };
    infoCache.set(sf, info);
    return info;
  };

  const touches = (sf, position) => {
    const info = fileInfo(sf);
    const lineInfo = withPatterns(sf, info.names, list, info.specifiers);
    if (touchesOds(ts, sf, position, lineInfo)) return true;
    for (let node = deepestNode(ts, sf, position); node && node !== sf; node = node.parent) {
      if (ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) return declarationIsOds(node, info);
      if (ts.isIdentifier(node) && identifierIsOds(node)) return true;
      if (ts.isPropertyAccessExpression(node) && identifierIsOds(node.name)) return true;
      if (ts.isJsxAttribute(node) && attributeIsOds(node)) return true;
      if ((ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) && (tagIsOds(node.tagName) || node.attributes.properties.some(attributeIsOds))) return true;
      if (ts.isTypeReferenceNode(node) && safe(() => typeIsOds(checker.getTypeFromTypeNode(node)))) return true;
      if (ts.isIndexedAccessTypeNode(node) && safe(() => typeIsOds(checker.getTypeFromTypeNode(node.objectType)))) return true;
      if (ts.isTypeQueryNode(node) && safe(() => identifierIsOds(rightmost(ts, node.exprName)))) return true;
      if (ts.isFunctionLike(node) || ts.isClassLike(node) || ts.isBlock(node)) return false;
    }
    return false;
  };

  // The ODS name the specifier at `position` stands for, in this program (null when none).
  const odsNameAt = (sf, position) => {
    for (let node = deepestNode(ts, sf, position); node && node !== sf; node = node.parent) {
      if (ts.isImportSpecifier(node) || ts.isExportSpecifier(node) || ts.isImportClause(node)) return node.name ? safe(() => odsNameOf(checker.getSymbolAtLocation(node.name))) || null : null;
      if (ts.isStatement(node)) return null;
    }
    return null;
  };

  return { fileInfo, touches, list, odsNameAt };
}

/*
 * The bindings of each file (relative path → fileInfo), with no reference to a program. →
 *   packagesFor(relFile)  { list, entries, names, specifiers, exportNames } for odsSymbols / packagePattern
 *   addExportNames(set)   more public ODS names (the other surface) accepted from a module standing for ODS
 *   stats()               how many files bind ODS, directly or only through modules of the corpus
 */
export function snapshotAnalysis(byFile, list, exportNames = new Set()) {
  const names = new Set(exportNames);
  const empty = { names: new Map(), specifiers: new Set() };
  return {
    packagesFor: (relFile) => {
      const info = (relFile !== null && byFile.get(relFile.split(sep).join('/'))) || empty;
      return { list: [...list, ...info.specifiers], entries: info.specifiers, names: info.names, specifiers: info.specifiers, exportNames: names };
    },
    addExportNames: (set) => {
      for (const n of set) names.add(n);
    },
    stats: () => {
      const all = [...byFile.values()];
      const modules = new Set(all.flatMap((i) => [...i.specifiers]));
      return { files: all.filter((i) => i.names.size || i.reexports.length).length, throughCorpusModules: all.filter((i) => i.specifiers.size).length, corpusModuleSpecifiers: modules.size };
    },
  };
}

function rightmost(ts, name) {
  return ts.isQualifiedName(name) ? name.right : name;
}

function withPatterns(sf, names, list, specifiers) {
  const lines = sf.text.split(/\r?\n/);
  const word = names.size ? new RegExp(`(?<![\\w$.])(${[...names.keys()].map(escape).join('|')})(?![\\w$])`) : null;
  return { names, lines, word, pkg: packagePattern([...list, ...specifiers], specifiers) };
}

/*
 * The local names bound by imports of ODS, and the patterns of the lines that name ODS.
 * `packages`: a list of import paths, or a function of the file name that returns
 *   { list, entries?, names?, specifiers?, exportNames? }:
 *   names        the bindings the checker found for this file (local → ODS name), taken as they are;
 *   specifiers   the modules of the corpus that stand for ODS in this file (quoted on a line);
 *   exportNames  the public ODS names: a name imported from one of `specifiers` that the checker did not
 *                see (a later version of the file) counts when it is one of them.
 */
export function odsSymbols(ts, sf, packages) {
  const p = typeof packages === 'function' ? packages(sf.fileName) : { list: packages };
  const list = p.list ?? [];
  const specifiers = p.specifiers ?? p.entries ?? null;
  const exportNames = p.exportNames ?? null;
  const fromSpecifier = (spec) => specifiers?.has?.(spec);
  const isOds = (spec) => list.some((x) => spec === x || (!fromSpecifier(x) && spec.startsWith(`${x}/`)));
  const names = new Map(p.names ?? []);
  for (const statement of sf.statements) {
    if (!ts.isImportDeclaration(statement) || !ts.isStringLiteral(statement.moduleSpecifier)) continue;
    const spec = statement.moduleSpecifier.text;
    if (!isOds(spec)) continue;
    const viaModule = fromSpecifier(spec);
    const accept = (local, imported) => {
      if (names.has(local)) return;
      if (!viaModule) names.set(local, imported);
      else if (exportNames?.has(imported)) names.set(local, imported);
    };
    const clause = statement.importClause;
    if (!clause) continue;
    if (clause.name && !viaModule) accept(clause.name.text, 'default');
    const bindings = clause.namedBindings;
    if (bindings && ts.isNamespaceImport(bindings) && !viaModule) accept(bindings.name.text, '*');
    if (bindings && ts.isNamedImports(bindings)) {
      for (const element of bindings.elements) accept(element.name.text, (element.propertyName ?? element.name).text);
    }
  }
  const lines = sf.text.split(/\r?\n/);
  const word = names.size ? new RegExp(`(?<![\\w$.])(${[...names.keys()].map(escape).join('|')})(?![\\w$])`) : null;
  return { names, lines, word, pkg: packagePattern(list, specifiers) };
}

/* A package is named on a line by its path; a module of the corpus by its quoted specifier (`'./ods'`, not every `.`). */
export function packagePattern(list, entries = null) {
  if (!list.length) return /(?!)/;
  return new RegExp(list.map((p) => (entries?.has?.(p) ? `['"\`]${escape(p)}['"\`]` : escape(p))).join('|'));
}

function escape(s) {
  return s.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&');
}

export function deepestNode(ts, sf, position) {
  let node = sf;
  for (;;) {
    let next;
    ts.forEachChild(node, (child) => {
      if (!next && child.pos <= position && position < child.end) next = child;
    });
    if (!next) return node;
    node = next;
  }
}

function rootName(ts, expression) {
  let e = expression;
  while (e && (ts.isPropertyAccessExpression(e) || ts.isElementAccessExpression(e) || ts.isCallExpression(e) || ts.isNonNullExpression(e))) e = e.expression;
  if (e && ts.isJsxNamespacedName?.(e)) return null;
  return e && ts.isIdentifier(e) ? e.text : null;
}

/*
 * A diagnostic touches ODS (by names, without the checker) when its line names an ODS binding or package,
 * or when, walking up to the enclosing function, it is inside the attributes of an ODS element, a
 * declaration or an assertion typed with an ODS type, or a call of an ODS function.
 */
export function touchesOds(ts, sf, position, info) {
  if (!info.word && !info.pkg) return false;
  const { line } = sf.getLineAndCharacterOfPosition(position);
  const text = info.lines[line] ?? '';
  if (info.pkg?.test(text) || info.word?.test(text)) return true;
  if (!info.word) return false;
  const typed = (type) => type && info.word.test(type.getText(sf));
  for (let node = deepestNode(ts, sf, position); node && node !== sf; node = node.parent) {
    if (ts.isFunctionLike(node) || ts.isClassLike(node)) return false;
    if ((ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) && info.names.has(rootName(ts, node.tagName))) return true;
    if ((ts.isVariableDeclaration(node) || ts.isParameter(node) || ts.isPropertyDeclaration(node) || ts.isPropertySignature(node)) && typed(node.type)) return true;
    if ((ts.isAsExpression(node) || ts.isSatisfiesExpression(node) || ts.isTypeAssertionExpression(node)) && typed(node.type)) return true;
    if ((ts.isCallExpression(node) || ts.isNewExpression(node)) && info.names.has(rootName(ts, node.expression))) return true;
    if (ts.isTypeAliasDeclaration(node) || ts.isInterfaceDeclaration(node)) return info.word.test(node.getText(sf));
  }
  return false;
}

/*
 * The API usage a diagnostic belongs to: the import / export specifier, the module of an import, the JSX
 * attribute, the JSX element (an error on its tag), or else its own position. Stops at a block or a
 * function, so that an error inside a callback is not merged with the attribute that holds it.
 */
export function anchorOf(ts, sf, position) {
  const { kind, node } = anchorNode(ts, sf, position);
  return `${kind}@${kind === 'position' ? position : node.getStart(sf)}`;
}

function anchorNode(ts, sf, position) {
  for (let node = deepestNode(ts, sf, position); node && node !== sf; node = node.parent) {
    if (ts.isImportSpecifier(node) || ts.isExportSpecifier(node) || ts.isNamespaceImport(node) || ts.isNamespaceExport?.(node) || ts.isImportClause(node)) return { kind: 'specifier', node };
    if (ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) return { kind: 'module', node };
    if (ts.isJsxAttribute(node) || ts.isJsxSpreadAttribute(node)) return { kind: 'attribute', node };
    if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) return { kind: 'element', node };
    if (ts.isBlock(node) || ts.isFunctionLike(node) || ts.isClassLike(node)) break;
  }
  return { kind: 'position', node: null };
}

/*
 * The text span [start, end) of the API usage a diagnostic belongs to (its anchor; for a position, the
 * name there with its property accesses: `BUTTON_COLOR.information`), to tell whether a new error of the
 * migrated code sits where this usage went.
 */
export function anchorSpan(ts, sf, position) {
  const { node } = anchorNode(ts, sf, position);
  if (node) return [node.getStart(sf), node.end];
  let n = deepestNode(ts, sf, position);
  if (n === sf) return [position, position + 1];
  for (;;) {
    const p = n.parent;
    if (p && (((ts.isPropertyAccessExpression(p) || ts.isElementAccessExpression(p)) && (p.expression === n || p.name === n)) || (ts.isQualifiedName(p) && (p.left === n || p.right === n)))) n = p;
    else break;
  }
  return [n.getStart(sf), n.end];
}

/*
 * One site per API usage: the diagnostics of one file with the same anchor are one site, located at the
 * first of them (`line`, `rule`), with every error kept in `errors` and every code in `codes`.
 */
export function groupSites(diagnostics) {
  const groups = new Map();
  for (const d of diagnostics) {
    const key = `${d.file}\u0000${d.anchor ?? `position@${d.start}`}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(d);
  }
  const sites = [];
  for (const group of groups.values()) {
    group.sort((a, b) => a.start - b.start);
    const [first] = group;
    const spans = group.map((d) => d.span).filter(Boolean);
    sites.push({
      file: first.file,
      line: first.line,
      kind: 'ts',
      rule: first.code,
      message: first.message,
      ...(spans.length ? { span: [Math.min(...spans.map((x) => x[0])), Math.max(...spans.map((x) => x[1]))] } : {}),
      codes: [...new Set(group.map((d) => d.code))],
      errors: group.map((d) => ({ line: d.line, code: d.code, message: d.message })),
    });
  }
  sites.sort((a, b) => a.file.localeCompare(b.file) || a.line - b.line);
  return sites;
}

/*
 * The errors of `a` plus those of `b` that `a` does not have, counted per file, line and code (an error
 * of both counts once): the errors the unmigrated code already had against either major.
 */
export function unionDiagnostics(a, b) {
  const count = new Map();
  const key = (d) => `${d.file}:${d.line}:${d.code}`;
  for (const d of a) count.set(key(d), (count.get(key(d)) ?? 0) + 1);
  const out = [...a];
  const extra = new Map();
  for (const d of b) {
    const k = key(d);
    extra.set(k, (extra.get(k) ?? 0) + 1);
    if (extra.get(k) > (count.get(k) ?? 0)) out.push(d);
  }
  return out;
}
