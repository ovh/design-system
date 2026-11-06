/*
 * Module resolution for the project index (src/project.mjs) and the ESLint rules: where an import
 * specifier of a file points to, the way the integrator's build reads it. Relative paths, tsconfig /
 * jsconfig `paths` and `baseUrl` (nearest config, `extends` and `references` followed), package.json
 * `imports` (`#…`), and the packages of the workspace (a `name` declared by a package.json of the
 * scanned tree, or a node_modules link to sources outside any node_modules).
 *
 * Also reads the modules file the CLI writes (ods-migrate.modules.json) for the ESLint rules, and
 * answers, for an entry of the index, which ODS export a name it exports stands for.
 *
 * No parser here: the ESLint rules load this file at lint time.
 */
import { readFileSync, realpathSync, statSync } from 'node:fs';
import { dirname, isAbsolute, join, relative, resolve, sep } from 'node:path';

const ODS_PACKAGES = ['@ovhcloud/ods-react', '@ovhcloud/ods-themes'];
const MODULES_FILE = 'ods-migrate.modules.json';
const SCRIPT_EXTENSIONS = ['.ts', '.tsx', '.mts', '.cts', '.js', '.jsx', '.mjs', '.cjs'];
/* `./a.js` written for TypeScript ESM names `./a.ts`. */
const JS_TO_TS = { '.cjs': ['.cts'], '.js': ['.ts', '.tsx'], '.jsx': ['.tsx'], '.mjs': ['.mts'] };
/* Build folders a package.json entry points to; the sources sit at the same path without them. */
const BUILD_DIRS = new Set(['build', 'cjs', 'dist', 'es', 'esm', 'lib', 'out', 'types']);
/* Conditions of `exports` / `imports`, sources first. */
const CONDITIONS = ['source', 'development', 'import', 'module', 'browser', 'default', 'types', 'require', 'node'];

/* ------------------------------------------------------------------------- names */

/**
 * The ODS export a name exported by an index entry stands for, or null. `entry` is an entry of the
 * index (`{ star, names, shadow }`), or true for an ODS package itself (every name is ODS).
 */
function odsNameIn(entry, name) {
  if (entry === true) {
    return name;
  }
  if (!entry) {
    return null;
  }
  if (Object.hasOwn(entry.names ?? {}, name)) {
    return entry.names[name];
  }
  return entry.star && !(entry.shadow ?? []).includes(name) ? name : null;
}

/** True when the specifier names an ODS package, or one passed with --treat-as-ods (or a subpath of it). */
function isPackageSource(specifier, packages) {
  return packages.some((name) => specifier === name || specifier.startsWith(`${name}/`));
}

/* ------------------------------------------------------------------------- files */

function createFs() {
  const stats = new Map();
  const kind = (path) => {
    if (!stats.has(path)) {
      let value = null;
      try {
        const stat = statSync(path);
        value = stat.isFile() ? 'file' : stat.isDirectory() ? 'dir' : null;
      } catch {
        // Missing: null.
      }
      stats.set(path, value);
    }
    return stats.get(path);
  };
  const json = new Map();
  const readJson = (path) => {
    if (!json.has(path)) {
      let value = null;
      try {
        value = parseJsonc(readFileSync(path, 'utf8'));
      } catch {
        // Unreadable or not JSON: null.
      }
      json.set(path, value);
    }
    return json.get(path);
  };
  return { isDir: (path) => kind(path) === 'dir', isFile: (path) => kind(path) === 'file', readJson };
}

/** JSON with comments and trailing commas (tsconfig.json). */
function parseJsonc(text) {
  let out = '';
  let inString = false;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (inString) {
      out += char;
      if (char === '\\') {
        out += text[++i] ?? '';
      } else if (char === '"') {
        inString = false;
      }
    } else if (char === '"') {
      inString = true;
      out += char;
    } else if (char === '/' && text[i + 1] === '/') {
      while (i < text.length && text[i] !== '\n') i++;
      out += '\n';
    } else if (char === '/' && text[i + 1] === '*') {
      i = text.indexOf('*/', i + 2);
      if (i === -1) break;
      i++;
    } else {
      out += char;
    }
  }
  return JSON.parse(out.replace(/,(\s*[}\]])/g, '$1'));
}

const isInsideNodeModules = (path) => path.split(sep).includes('node_modules');

/* ------------------------------------------------------------------------- resolver */

/**
 * `resolve(fromFile, specifier)` →
 *   { ods: name }        an ODS package, or one of `packages` (--treat-as-ods)
 *   { file }             a source file
 *   { package, installed } a package of node_modules that is not one of the workspace
 *   { unresolved: true } a path, an alias or a package that leads nowhere
 * `workspace`: Map package name → directory (the package.json of the scanned tree).
 */
function createResolver({ packages = ODS_PACKAGES, workspace = new Map() } = {}) {
  const fs = createFs();
  const workspaceDirs = new Map(workspace);

  const tryFile = (base) => {
    if (fs.isFile(base) && SCRIPT_EXTENSIONS.some((extension) => base.endsWith(extension))) {
      return base;
    }
    for (const extension of SCRIPT_EXTENSIONS) {
      if (fs.isFile(base + extension)) return base + extension;
    }
    const extension = Object.keys(JS_TO_TS).find((ext) => base.endsWith(ext));
    if (extension) {
      for (const replacement of JS_TO_TS[extension]) {
        const candidate = base.slice(0, -extension.length) + replacement;
        if (fs.isFile(candidate)) return candidate;
      }
    }
    if (base.endsWith('.d.ts')) {
      const stem = base.slice(0, -5);
      for (const ext of ['.ts', '.tsx']) if (fs.isFile(stem + ext)) return stem + ext;
    }
    if (fs.isDir(base)) {
      const manifest = fs.readJson(join(base, 'package.json'));
      for (const field of ['source', 'module', 'main', 'types', 'typings']) {
        if (typeof manifest?.[field] === 'string') {
          const found = tryFileOrSource(base, manifest[field]);
          if (found) return found;
        }
      }
      for (const extension of SCRIPT_EXTENSIONS) {
        if (fs.isFile(join(base, `index${extension}`))) return join(base, `index${extension}`);
      }
    }
    return null;
  };

  /** A path of a package.json (`dist/types/src/lib.d.ts`), or the source it was built from (`src/lib.ts`). */
  const tryFileOrSource = (dir, target) => {
    const clean = target.replace(/^\.\//, '');
    const direct = tryFile(join(dir, clean));
    if (direct) return direct;
    const parts = clean.split('/');
    while (parts.length > 1 && BUILD_DIRS.has(parts[0])) {
      parts.shift();
      const stem = parts.join('/').replace(/\.d\.(c|m)?ts$|\.(c|m)?js$/, '');
      const found = tryFile(join(dir, stem)) ?? tryFile(join(dir, 'src', stem));
      if (found) return found;
    }
    return null;
  };

  /* Every target of an `exports` / `imports` value, sources first (a built target may have no source next to it). */
  const pickTargets = (value) => {
    if (typeof value === 'string') return [value];
    if (Array.isArray(value)) return value.flatMap(pickTargets);
    if (value && typeof value === 'object') {
      const keys = [...CONDITIONS.filter((condition) => condition in value), ...Object.keys(value).filter((key) => !CONDITIONS.includes(key))];
      return keys.flatMap((key) => pickTargets(value[key]));
    }
    return [];
  };

  /** The targets of a key of `exports` / `imports` (exact, or a pattern with one `*`) matched against a subpath. */
  const matchMap = (map, key) => {
    if (!map || typeof map !== 'object') return [];
    if (Object.hasOwn(map, key)) return pickTargets(map[key]);
    let best = null;
    for (const pattern of Object.keys(map)) {
      const star = pattern.indexOf('*');
      if (star === -1) continue;
      const prefix = pattern.slice(0, star);
      const suffix = pattern.slice(star + 1);
      if (key.startsWith(prefix) && key.endsWith(suffix) && key.length >= prefix.length + suffix.length && (!best || prefix.length > best.prefix.length)) {
        best = { pattern, prefix, suffix };
      }
    }
    if (!best) return [];
    return pickTargets(map[best.pattern]).map((target) => target.replace('*', key.slice(best.prefix.length, key.length - best.suffix.length)));
  };

  const packageEntry = (dir, subpath) => {
    const manifest = fs.readJson(join(dir, 'package.json')) ?? {};
    const exportsField = manifest.exports;
    const key = subpath ? `./${subpath}` : '.';
    let targets = [];
    if (typeof exportsField === 'string' || Array.isArray(exportsField)) {
      targets = subpath ? [] : pickTargets(exportsField);
    } else if (exportsField && typeof exportsField === 'object') {
      targets = Object.keys(exportsField).some((name) => name.startsWith('.')) ? matchMap(exportsField, key) : (subpath ? [] : pickTargets(exportsField));
    }
    for (const target of targets) {
      const found = tryFileOrSource(dir, target);
      if (found) return found;
    }
    if (subpath) {
      return tryFileOrSource(dir, subpath) ?? tryFile(join(dir, 'src', subpath));
    }
    for (const field of ['source', 'module', 'main', 'types', 'typings']) {
      if (typeof manifest[field] === 'string') {
        const found = tryFileOrSource(dir, manifest[field]);
        if (found) return found;
      }
    }
    return tryFile(join(dir, 'src', 'index')) ?? tryFile(join(dir, 'index'));
  };

  const splitPackage = (specifier) => {
    const parts = specifier.split('/');
    const count = specifier.startsWith('@') ? 2 : 1;
    return { name: parts.slice(0, count).join('/'), subpath: parts.slice(count).join('/') };
  };

  /* --------------------------------------------------------------------- tsconfig */

  const configCache = new Map();
  /** A tsconfig with its `extends` chain merged: { baseUrl, paths, pathsBase, references }. */
  const loadConfig = (path, seen = new Set()) => {
    if (configCache.has(path)) return configCache.get(path);
    if (seen.has(path)) return null;
    seen.add(path);
    const raw = fs.readJson(path);
    if (!raw || typeof raw !== 'object') {
      configCache.set(path, null);
      return null;
    }
    const dir = dirname(path);
    let merged = { baseUrl: null, paths: null, pathsBase: null };
    for (const parent of [raw.extends ?? []].flat()) {
      const parentPath = typeof parent === 'string' ? findExtended(dir, parent) : null;
      const loaded = parentPath && loadConfig(parentPath, seen);
      if (loaded) merged = { baseUrl: loaded.baseUrl ?? merged.baseUrl, paths: loaded.paths ?? merged.paths, pathsBase: loaded.pathsBase ?? merged.pathsBase };
    }
    const options = raw.compilerOptions ?? {};
    if (typeof options.baseUrl === 'string') {
      merged.baseUrl = resolve(dir, options.baseUrl);
    }
    if (options.paths && typeof options.paths === 'object') {
      merged.paths = options.paths;
      merged.pathsBase = dir;
    }
    const references = (Array.isArray(raw.references) ? raw.references : [])
      .map((reference) => typeof reference?.path === 'string' && resolve(dir, reference.path))
      .filter(Boolean)
      .map((reference) => (fs.isDir(reference) ? join(reference, 'tsconfig.json') : reference));
    const result = { ...merged, references };
    configCache.set(path, result);
    return result;
  };

  const findExtended = (dir, specifier) => {
    if (specifier.startsWith('.') || isAbsolute(specifier)) {
      const path = resolve(dir, specifier);
      return fs.isFile(path) ? path : fs.isFile(`${path}.json`) ? `${path}.json` : null;
    }
    for (let current = dir; ; current = dirname(current)) {
      const base = join(current, 'node_modules', specifier);
      for (const candidate of [base, `${base}.json`, join(base, 'tsconfig.json')]) {
        if (fs.isFile(candidate)) return candidate;
      }
      if (dirname(current) === current) return null;
    }
  };

  const nearestCache = new Map();
  /** The options of the nearest tsconfig.json / jsconfig.json that say how to resolve (or null). */
  const nearestConfig = (dir) => {
    if (nearestCache.has(dir)) return nearestCache.get(dir);
    let result = null;
    for (const name of ['tsconfig.json', 'jsconfig.json']) {
      const path = join(dir, name);
      if (fs.isFile(path)) {
        const config = loadConfig(path);
        if (config && !config.paths && !config.baseUrl) {
          // A solution-style tsconfig (`files: [], references: [tsconfig.app.json…]`): the first reference that resolves.
          const referenced = config.references.map((reference) => loadConfig(reference)).find((item) => item?.paths || item?.baseUrl);
          result = referenced ?? config;
        } else {
          result = config;
        }
        break;
      }
    }
    if (!result) {
      result = dirname(dir) === dir ? null : nearestConfig(dirname(dir));
    }
    nearestCache.set(dir, result);
    return result;
  };

  const viaPaths = (config, specifier) => {
    if (!config?.paths) return undefined;
    const base = config.baseUrl ?? config.pathsBase;
    let targets = null;
    if (Object.hasOwn(config.paths, specifier)) {
      targets = config.paths[specifier];
    } else {
      let best = null;
      for (const pattern of Object.keys(config.paths)) {
        const star = pattern.indexOf('*');
        if (star === -1) continue;
        const prefix = pattern.slice(0, star);
        const suffix = pattern.slice(star + 1);
        if (specifier.startsWith(prefix) && specifier.endsWith(suffix) && specifier.length >= prefix.length + suffix.length && (!best || prefix.length > best.prefix.length)) {
          best = { pattern, prefix, suffix };
        }
      }
      if (best) {
        const middle = specifier.slice(best.prefix.length, specifier.length - best.suffix.length);
        targets = [config.paths[best.pattern]].flat().map((target) => String(target).replace('*', middle));
      }
    }
    if (!targets) return undefined;
    for (const target of [targets].flat()) {
      const found = tryFile(resolve(base, String(target)));
      if (found) return found;
    }
    return null;
  };

  /* --------------------------------------------------------------------- package.json imports */

  const importsCache = new Map();
  const nearestImports = (dir) => {
    if (importsCache.has(dir)) return importsCache.get(dir);
    const manifest = fs.readJson(join(dir, 'package.json'));
    const result = manifest?.imports ? { dir, imports: manifest.imports } : dirname(dir) === dir ? null : nearestImports(dirname(dir));
    importsCache.set(dir, result);
    return result;
  };

  /* --------------------------------------------------------------------- node_modules */

  const nodeModulesCache = new Map();
  /** A package of node_modules: a link to sources outside any node_modules is a workspace package. Memoized per folder. */
  const findInNodeModules = (dir, name) => {
    const key = `${dir}\0${name}`;
    if (nodeModulesCache.has(key)) return nodeModulesCache.get(key);
    let result = null;
    const candidate = join(dir, 'node_modules', name);
    if (fs.isDir(join(dir, 'node_modules')) && fs.isFile(join(candidate, 'package.json'))) {
      let real = candidate;
      try {
        real = realpathSync(candidate);
      } catch {
        // Keep the link path.
      }
      result = isInsideNodeModules(real) ? { installed: true } : { dir: real };
    } else if (dirname(dir) !== dir) {
      result = findInNodeModules(dirname(dir), name);
    }
    nodeModulesCache.set(key, result);
    return result;
  };

  /* --------------------------------------------------------------------- resolve */

  const resolveBare = (fromDir, specifier) => {
    const { name, subpath } = splitPackage(specifier);
    let dir = workspaceDirs.get(name);
    if (!dir) {
      const found = findInNodeModules(fromDir, name);
      if (found?.dir) {
        dir = found.dir;
        workspaceDirs.set(name, dir);
      } else if (found?.installed) {
        return { installed: true, package: name };
      }
    }
    if (dir) {
      const file = packageEntry(dir, subpath);
      return file ? { file, workspace: name } : { unresolved: true, workspace: name };
    }
    return { package: name, unresolved: true };
  };

  const cache = new Map();
  const resolveSpecifier = (fromFile, specifier) => {
    if (typeof specifier !== 'string' || !specifier) return { unresolved: true };
    if (isPackageSource(specifier, packages)) {
      return { ods: packages.find((name) => specifier === name || specifier.startsWith(`${name}/`)) };
    }
    const fromDir = dirname(fromFile);
    const key = `${fromDir}\0${specifier}`;
    if (cache.has(key)) return cache.get(key);
    let result;
    if (specifier.startsWith('.') || isAbsolute(specifier)) {
      const file = tryFile(resolve(fromDir, specifier));
      result = file ? { file } : { unresolved: true };
    } else if (specifier.startsWith('#')) {
      const scope = nearestImports(fromDir);
      result = { unresolved: true };
      for (const target of scope ? matchMap(scope.imports, specifier) : []) {
        const found = target.startsWith('.') ? tryFileOrSource(scope.dir, target) : null;
        const next = found ? { file: found } : target.startsWith('.') ? null : resolveSpecifier(join(scope.dir, 'package.json'), target);
        if (next && !next.unresolved) {
          result = next;
          break;
        }
      }
    } else {
      const config = nearestConfig(fromDir);
      const viaPath = viaPaths(config, specifier);
      if (viaPath) {
        result = { file: viaPath };
      } else {
        const viaBase = config?.baseUrl ? tryFile(resolve(config.baseUrl, specifier)) : null;
        result = viaBase ? { file: viaBase } : resolveBare(fromDir, specifier);
        if (viaPath === null && result.unresolved) {
          result = { unresolved: true };
        }
      }
    }
    cache.set(key, result);
    return result;
  };

  /** The `paths` of the tsconfig / jsconfig of a folder (not above it), with absolute targets, or null. */
  const pathsAt = (dir) => {
    const name = ['tsconfig.json', 'jsconfig.json'].find((candidate) => fs.isFile(join(dir, candidate)));
    let config = name ? loadConfig(join(dir, name)) : null;
    if (config && !config.paths) {
      config = config.references.map((reference) => loadConfig(reference)).find((item) => item?.paths) ?? config;
    }
    if (!config?.paths) return null;
    const base = config.baseUrl ?? config.pathsBase;
    return Object.fromEntries(Object.entries(config.paths).map(([pattern, targets]) => [pattern, [targets].flat().map((target) => resolve(base, String(target)))]));
  };

  return { packageEntry, pathsAt, resolve: resolveSpecifier, workspace: workspaceDirs };
}

/* ------------------------------------------------------------------------- packages on an older ODS */

const ODS_DEPENDENCY = /^@ovhcloud\/ods-/;
const DEPENDENCY_BLOCKS = ['dependencies', 'devDependencies', 'peerDependencies', 'optionalDependencies'];

/**
 * The package a file belongs to (its nearest package.json) when that package pins every @ovhcloud/ods-*
 * dependency to a major below 19 (17, 18): its code is not ODS 19 code, and the v20 names do not exist
 * in its theme. `{ dir, major }`, or null when the file is in scope: a package on 19 or 20, a range that
 * names no major (`workspace:*`, `catalog:`, `*`), a package.json without ODS, no package.json at all.
 */
/**
 * The highest major a version range accepts (`^18.6.0-alpha.2` → 18, `>=18 <20` → 19, `^17 || ^18` → 18),
 * Infinity when it has no upper bound (`>=18`), null when it names none (`workspace:*`, `catalog:`, `*`).
 */
function maxMajor(range) {
  if (typeof range !== 'string') {
    return null;
  }
  const text = range.trim().replace(/^npm:(?:@[^/]+\/)?[^@]+@/, '').replace(/^workspace:/, '');
  if (/^[a-z+]+:/i.test(text) || text.includes('/')) {
    return null;
  }
  let max = null;
  for (const part of text.split('||')) {
    const comparators = [...part.matchAll(/(<=|>=|<|>|=|~>|~|\^)?\s*v?(\d+|[xX*])((?:\.(?:\d+|[xX*]))*)(?:-[\w.]+)?/g)];
    const lower = comparators.find(([, operator]) => operator !== '<' && operator !== '<=');
    if (!lower || !/^\d+$/.test(lower[2])) {
      continue;
    }
    const upper = comparators.find(([, operator]) => operator === '<' || operator === '<=');
    let top;
    if (upper && /^\d+$/.test(upper[2])) {
      // `<20` and `<20.0.0` stop at 19; `<19.5` and `<=19` include 19.
      top = Number(upper[2]) - (upper[1] === '<' && /^(\.0)*$/.test(upper[3]) ? 1 : 0);
    } else {
      top = lower[1] === '>=' || lower[1] === '>' ? Infinity : Number(lower[2]);
    }
    max = max === null ? top : Math.max(max, top);
  }
  return max;
}

function createOlderOdsResolver() {
  const cache = new Map();
  const lookup = (dir) => {
    if (cache.has(dir)) {
      return cache.get(dir);
    }
    let result;
    let manifest;
    let text = null;
    try {
      text = readFileSync(join(dir, 'package.json'), 'utf8');
      manifest = JSON.parse(text);
    } catch {
      // No package.json here (look further up), or one that is not JSON (in scope).
      manifest = text === null ? undefined : null;
    }
    if (manifest !== undefined) {
      const ranges = DEPENDENCY_BLOCKS.flatMap((key) => Object.entries(manifest?.[key] ?? {})).filter(([name]) => ODS_DEPENDENCY.test(name)).map(([, range]) => range);
      const majors = ranges.map(maxMajor);
      result = ranges.length && majors.every((major) => major !== null && major < 19) ? { dir, major: Math.max(...majors) } : null;
    } else {
      result = dirname(dir) === dir ? null : lookup(dirname(dir));
    }
    cache.set(dir, result);
    return result;
  };
  return (file) => lookup(dirname(file));
}

/** The same, for the lint rules: one cache per process. */
const olderOdsOf = (() => {
  let resolver = null;
  return (file) => {
    if (typeof file !== 'string' || !isAbsolute(file)) return null;
    resolver ??= createOlderOdsResolver();
    return resolver(file);
  };
})();

/* ------------------------------------------------------------------------- modules file */

/**
 * What the CLI writes for the ESLint rules: the modules that stand for ODS, the workspace packages
 * and the --treat-as-ods packages, with paths relative to the file.
 */
function serializeModules(index, dir) {
  const rel = (path) => relative(dir, path).split(sep).join('/');
  const modules = {};
  for (const [file, entry] of [...index.modules].sort(([a], [b]) => (a < b ? -1 : 1))) {
    modules[rel(file)] = {
      ...(entry.star ? { star: true } : {}),
      names: Object.fromEntries(Object.entries(entry.names).sort(([a], [b]) => (a < b ? -1 : 1))),
      ...(entry.star && entry.shadow.length ? { shadow: [...entry.shadow].sort() } : {}),
      ...(Object.keys(entry.wrappers ?? {}).length ? { wrappers: Object.fromEntries(Object.entries(entry.wrappers).sort(([a], [b]) => (a < b ? -1 : 1))) } : {}),
      ...(Object.keys(entry.typed ?? {}).length ? { typed: Object.fromEntries(Object.entries(entry.typed).sort(([a], [b]) => (a < b ? -1 : 1))) } : {}),
    };
  }
  // The components of each file whose props are typed with ODS types, by local name: the rule migrates their defaults.
  const components = {};
  for (const [file, typed] of [...(index.ownTyped ?? [])].sort(([a], [b]) => (a < b ? -1 : 1))) {
    components[rel(file)] = typed;
  }
  const workspace = Object.fromEntries([...index.workspace].filter(([name]) => index.workspacePackages.includes(name)).sort(([a], [b]) => (a < b ? -1 : 1)).map(([name, path]) => [name, rel(path)]));
  return {
    about: 'Generated by ods-migrate --write: the modules of this project that stand for ODS (re-exports and wrappers of @ovhcloud/ods-react), and its components whose props are typed with ODS types. The ESLint rules read it. Regenerated by every run.',
    version: 1,
    treatAsOds: index.treatAsOds,
    workspace,
    modules,
    ...(Object.keys(components).length ? { components } : {}),
  };
}

const loaded = new Map();
/** The modules file, read once per process (and again when it changes). Null when absent or unreadable. */
function loadModulesFile(path) {
  let mtime;
  try {
    mtime = statSync(path).mtimeMs;
  } catch {
    return null;
  }
  const cached = loaded.get(path);
  if (cached?.mtime === mtime) return cached.value;
  let value = null;
  try {
    const raw = JSON.parse(readFileSync(path, 'utf8'));
    if (raw?.version === 1 && raw.modules && typeof raw.modules === 'object') {
      const dir = dirname(path);
      value = {
        modules: new Map(Object.entries(raw.modules).map(([file, entry]) => [resolve(dir, file), { names: entry.names ?? {}, shadow: entry.shadow ?? [], star: Boolean(entry.star), typed: entry.typed ?? {}, wrappers: entry.wrappers ?? {} }])),
        components: new Map(Object.entries(raw.components ?? {}).map(([file, typed]) => [resolve(dir, file), typed ?? {}])),
        treatAsOds: Array.isArray(raw.treatAsOds) ? raw.treatAsOds.filter((name) => typeof name === 'string') : [],
        workspace: new Map(Object.entries(raw.workspace ?? {}).map(([name, packageDir]) => [name, resolve(dir, packageDir)])),
      };
    }
  } catch {
    // Not ours, or broken: ignored.
  }
  loaded.set(path, { mtime, value });
  return value;
}

const lookups = new Map();
/**
 * For the ESLint rules: `(filename, specifier)` → the entry of the module it imports when the modules
 * file lists it, or null; `.treatAsOds` holds the --treat-as-ods packages of the run that wrote it. `option` is the rule's `modules` option: a path (relative to
 * cwd), false to read none, or undefined for ods-migrate.modules.json in cwd when it exists.
 */
function moduleLookup({ cwd = process.cwd(), option, packages = [] } = {}) {
  const path = option === false ? null : resolve(cwd, typeof option === 'string' ? option : MODULES_FILE);
  const file = path ? loadModulesFile(path) : null;
  const key = `${path}\0${packages.join(',')}`;
  let lookup = lookups.get(key);
  if (!lookup || lookup.file !== file) {
    const all = [...new Set([...ODS_PACKAGES, ...packages, ...(file?.treatAsOds ?? [])])];
    const resolver = file?.modules.size ? createResolver({ packages: all, workspace: file.workspace }) : null;
    lookup = {
      file,
      find(filename, specifier) {
        if (typeof specifier !== 'string' || !resolver || !filename || !isAbsolute(filename)) return null;
        const target = resolver.resolve(filename, specifier);
        return (target.file && file.modules.get(target.file)) ?? null;
      },
    };
    lookups.set(key, lookup);
  }
  const find = (filename, specifier) => lookup.find(filename, specifier);
  find.treatAsOds = file?.treatAsOds ?? [];
  // The components of the linted file whose props are typed with ODS types, by local name (or {}).
  find.components = (filename) => (filename && file?.components.get(resolve(filename))) ?? {};
  return find;
}

export { MODULES_FILE, ODS_PACKAGES, createOlderOdsResolver, createResolver, isPackageSource, loadModulesFile, moduleLookup, odsNameIn, olderOdsOf, parseJsonc, serializeModules };
