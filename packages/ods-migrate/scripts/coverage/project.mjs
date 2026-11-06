/*
 * The corpus as its package manager and its TypeScript configs see it, rebuilt by the harness on its own
 * (never through the ods-migrate sources, so that the tool does not grade itself):
 *   - the packages: every package.json of the corpus, its name, version and @ovhcloud/ods-* ranges, and
 *     its ODS major (scope: only the packages on ODS 19 contribute sites; a rewrite elsewhere is premature);
 *   - the TypeScript configs: the nearest tsconfig.json / jsconfig.json of each file, `extends` followed
 *     (relative paths and workspace packages), solution-style `references` picked by `include`, and
 *     `paths` / `baseUrl` turned into absolute `paths`;
 *   - the module resolution of each file: its config's `paths`, then the workspace packages of the corpus
 *     (their sources when the build output is absent from the copy), then the global options.
 * Everything is stored relative to the corpus root, so the same project serves both copies (base and migrated).
 */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, isAbsolute, join, relative, resolve, sep } from 'node:path';

export const IGNORED_DIRS = new Set(['.cache', '.docusaurus', '.git', '.next', '.nx', '.output', '.turbo', '.vite', 'build', 'coverage', 'dist', 'node_modules', 'out', 'storybook-static']);
const ODS_PACKAGE = /^@ovhcloud\/ods-/;
const DEPENDENCY_FIELDS = ['dependencies', 'devDependencies', 'peerDependencies', 'optionalDependencies'];
const CONFIG_NAMES = ['tsconfig.json', 'jsconfig.json'];

/* Files of `root` (absolute paths) whose name passes `test`, without the ignored folders. */
export function listFiles(root, test, out = []) {
  let entries;
  try {
    entries = readdirSync(root, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const entry of entries) {
    const path = join(root, entry.name);
    if (entry.isDirectory()) {
      if (!IGNORED_DIRS.has(entry.name)) listFiles(path, test, out);
    } else if (entry.isFile() && test(entry.name, path)) out.push(path);
  }
  return out;
}

function readJson(file, ts) {
  try {
    const text = readFileSync(file, 'utf8');
    if (ts) return ts.parseConfigFileTextToJson(file, text).config ?? null;
    return JSON.parse(text);
  } catch {
    return null;
  }
}

const isFile = (path) => {
  try {
    return statSync(path).isFile();
  } catch {
    return false;
  }
};

const toPosix = (p) => p.split(sep).join('/');

/* ---------- versions ---------- */

/*
 * The majors a version range allows, as far as the lower bounds say: `^19.0.1`, `~19.5.0`, `19.x`,
 * `>=19 <20`, `^18 || ^19`, `npm:@ovhcloud/ods-react@^19`. → Set of numbers, empty when unknown
 * (`*`, `latest`, `workspace:*` without the workspace package, `catalog:`…).
 */
export function rangeMajors(range) {
  const out = new Set();
  if (typeof range !== 'string') return out;
  let r = range.trim();
  if (r.startsWith('npm:')) r = r.slice(r.lastIndexOf('@') + 1);
  if (/^(workspace|catalog|link|file|portal|git|github|http|https):/.test(r)) return out;
  for (const part of r.split('||')) {
    const comparators = part.trim().split(/\s+/).filter(Boolean);
    for (const c of comparators) {
      const m = /^(\^|~|>=|>|=|v)?\s*v?(\d+)/.exec(c);
      if (!m) continue;
      // `^19`, `~19.5`, `19.x`, `>=19` (its own major; the upper bound is not modelled); a bare `<20` is skipped.
      if (m) out.add(Number(m[2]));
    }
  }
  return out;
}

/* ---------- packages and scope ---------- */

/*
 * status of a package:
 *   'ods19'       a direct @ovhcloud/ods-* dependency allows 19
 *   'ods19-via'   no direct ODS dependency, but a workspace package it depends on is 'ods19'
 *   'unknown'     a direct ODS dependency whose range says no major (workspace:*, catalog:, *)
 *   'other-ods'   direct ODS dependencies, none on 19 (17, 18, or already 20)
 *   'none'        no ODS dependency, direct or through the workspace
 * In scope: ods19, ods19-via, unknown, and files under no package.json at all ('unscoped').
 */
export const IN_SCOPE = new Set(['ods19', 'ods19-via', 'unknown', 'unscoped']);

function readPackages(root) {
  const files = listFiles(root, (name) => name === 'package.json');
  const packages = [];
  for (const file of files) {
    const json = readJson(file);
    if (!json || typeof json !== 'object') continue;
    const deps = {};
    for (const field of DEPENDENCY_FIELDS) Object.assign(deps, json[field] ?? {});
    packages.push({
      dir: toPosix(relative(root, dirname(file))),
      name: typeof json.name === 'string' ? json.name : null,
      version: typeof json.version === 'string' ? json.version : null,
      json,
      deps,
      ods: Object.fromEntries(Object.entries(deps).filter(([name]) => ODS_PACKAGE.test(name))),
    });
  }
  packages.sort((a, b) => a.dir.localeCompare(b.dir));
  return packages;
}

function classifyPackages(packages) {
  const byName = new Map(packages.filter((p) => p.name).map((p) => [p.name, p]));
  for (const p of packages) {
    const odsNames = Object.keys(p.ods);
    if (!odsNames.length) continue;
    const majors = new Set();
    let unknown = false;
    for (const [name, range] of Object.entries(p.ods)) {
      let m = rangeMajors(range);
      if (!m.size && /^workspace:/.test(range) && byName.get(name)?.version) m = rangeMajors(byName.get(name).version);
      if (!m.size) unknown = true;
      for (const x of m) majors.add(x);
    }
    p.odsMajors = [...majors].sort((a, b) => a - b);
    p.status = majors.has(19) ? 'ods19' : unknown ? 'unknown' : 'other-ods';
  }
  // Packages with no direct ODS dependency: 'ods19-via' when a workspace dependency is on ODS 19 (transitively).
  let changed = true;
  while (changed) {
    changed = false;
    for (const p of packages) {
      if (p.status) continue;
      const via = Object.keys(p.deps).map((name) => byName.get(name)).find((q) => q && q !== p && (q.status === 'ods19' || q.status === 'ods19-via'));
      if (via) {
        p.status = 'ods19-via';
        p.via = via.name;
        changed = true;
      }
    }
  }
  for (const p of packages) p.status ??= 'none';
  return byName;
}

/* ---------- tsconfig ---------- */

/* `include` / `exclude` patterns of a tsconfig as a RegExp on absolute posix paths. */
export function globToRegExp(pattern, base) {
  let abs = toPosix(isAbsolute(pattern) ? pattern : join(base, pattern)).replace(/\/+$/, '');
  const last = abs.slice(abs.lastIndexOf('/') + 1);
  if (!/[*?]/.test(last) && !/\.\w+$/.test(last)) abs += '/**/*';
  let re = '';
  for (let i = 0; i < abs.length; i++) {
    const c = abs[i];
    if (c === '*' && abs[i + 1] === '*' && abs[i + 2] === '/') {
      re += '(?:[^/]+/)*';
      i += 2;
    } else if (c === '*' && abs[i + 1] === '*') {
      re += '.*';
      i += 1;
    } else if (c === '*') re += '[^/]*';
    else if (c === '?') re += '[^/]';
    else re += c.replace(/[.+^${}()|[\]\\]/g, '\\$&');
  }
  return new RegExp(`^${re}$`);
}

/*
 * Reads a tsconfig with its `extends` chain. → { file, dir, baseUrl?, paths? (absolute targets),
 * include?, files?, exclude?, references[], unresolvedExtends[] } (paths absolute, posix or native as read).
 */
function readConfig(ts, file, resolveBare, seen = new Set()) {
  if (seen.has(file)) return null;
  seen.add(file);
  const json = readJson(file, ts);
  if (!json) return null;
  const dir = dirname(file);
  const config = { file, dir, references: [], unresolvedExtends: [] };
  const parents = json.extends === undefined ? [] : [].concat(json.extends);
  for (const ext of parents) {
    if (typeof ext !== 'string') continue;
    const target = resolveExtends(ext, dir, resolveBare);
    const parent = target ? readConfig(ts, target, resolveBare, seen) : null;
    if (!parent) {
      config.unresolvedExtends.push(ext);
      continue;
    }
    config.unresolvedExtends.push(...parent.unresolvedExtends);
    for (const key of ['baseUrl', 'paths', 'pathsBase', 'include', 'files', 'exclude']) {
      if (parent[key] !== undefined) config[key] = parent[key];
    }
  }
  const options = json.compilerOptions ?? {};
  if (typeof options.baseUrl === 'string') config.baseUrl = resolve(dir, options.baseUrl);
  if (options.paths && typeof options.paths === 'object') {
    config.paths = options.paths;
    config.pathsBase = dir;
  }
  // include / files / exclude: each replaces the inherited one, relative to the config that declares it.
  for (const key of ['include', 'files', 'exclude']) {
    if (Array.isArray(json[key])) config[key] = { patterns: json[key].filter((x) => typeof x === 'string'), base: dir };
  }
  for (const ref of Array.isArray(json.references) ? json.references : []) {
    if (typeof ref?.path !== 'string') continue;
    let target = resolve(dir, ref.path);
    if (!isFile(target)) target = join(target, 'tsconfig.json');
    if (isFile(target)) config.references.push(target);
  }
  return config;
}

function resolveExtends(ext, dir, resolveBare) {
  if (ext.startsWith('.') || isAbsolute(ext)) {
    const p = resolve(dir, ext);
    for (const candidate of [p, `${p}.json`, join(p, 'tsconfig.json')]) if (isFile(candidate)) return candidate;
    return null;
  }
  return resolveBare(ext);
}

/* The absolute `paths` a config gives (baseUrl as a `*` fallback, the TypeScript 6 way). */
function absolutePaths(config) {
  const out = {};
  if (config.paths) {
    const base = config.baseUrl ?? config.pathsBase;
    for (const [pattern, targets] of Object.entries(config.paths)) {
      if (!Array.isArray(targets)) continue;
      out[pattern] = targets.filter((t) => typeof t === 'string').map((t) => resolve(base, t));
    }
  }
  if (config.baseUrl && !out['*']) out['*'] = [join(config.baseUrl, '*')];
  return out;
}

/* Whether a config's files / include / exclude cover an absolute file (the TypeScript defaults when absent). */
export function includes(config, file) {
  const posix = toPosix(file);
  if (config.files && config.files.patterns.some((f) => toPosix(resolve(config.files.base, f)) === posix)) return true;
  const include = config.include ?? (config.files ? { patterns: [], base: config.dir } : { patterns: ['**/*'], base: config.dir });
  if (!include.patterns.some((p) => globToRegExp(p, include.base).test(posix))) return false;
  const exclude = config.exclude ?? { patterns: [], base: config.dir };
  return !exclude.patterns.some((p) => globToRegExp(p, exclude.base).test(posix));
}

/* ---------- workspace packages ---------- */

/* The source files a workspace package can be imported through, in the copy (build output excluded). */
function packageEntries(root, pkg) {
  const dir = join(root, pkg.dir);
  const json = pkg.json;
  const declared = [];
  const add = (v) => {
    if (typeof v === 'string') declared.push(v);
    else if (v && typeof v === 'object') for (const key of ['types', 'typings', 'import', 'module', 'default', 'require']) add(v[key]);
  };
  add(json.types);
  add(json.typings);
  const dot = json.exports && typeof json.exports === 'object' ? (json.exports['.'] ?? (Object.keys(json.exports).some((k) => k.startsWith('.')) ? null : json.exports)) : json.exports;
  add(dot);
  add(json.source);
  add(json.module);
  add(json.main);
  const out = [];
  const push = (p) => {
    if (!out.includes(p)) out.push(p);
  };
  for (const d of declared) {
    const abs = resolve(dir, d);
    push(abs);
    // Build output that the copy does not have: the same path in the sources.
    const rel = toPosix(relative(dir, abs));
    const stripped = rel.replace(/^(dist|build|lib|out|esm|cjs)\/(types\/|esm\/|cjs\/|lib\/)?/, '').replace(/\.d\.(c|m)?ts$|\.(c|m)?js$/, '');
    if (stripped !== rel) {
      for (const base of [stripped, `src/${stripped}`]) {
        for (const ext of ['.ts', '.tsx', '/index.ts', '/index.tsx']) push(join(dir, base + ext));
      }
    }
  }
  for (const base of ['src/index', 'src/lib', 'src/main', 'index']) for (const ext of ['.ts', '.tsx']) push(join(dir, base + ext));
  return out;
}

/* ---------- the project ---------- */

/*
 * loadProject(ts, root, { pinned }) → project:
 *   packages[]                      { dir, name, version, ods, status, odsMajors?, via? }
 *   packageOf(relFile)              the nearest package (or null)
 *   scopeOf(relFile)                { status, dir, inScope }
 *   configOf(absFile, root)         the tsconfig that governs the file (or null)
 *   moduleResolver(ts, root, options, host) → (specifier, containingFile, mode) → ResolvedModuleWithFailedLookupLocations
 *   summary()                       what was read, for the report
 * `pinned`: specifiers the global options own (ODS, React): never remapped.
 */
export function loadProject(ts, root, { pinned = [] } = {}) {
  root = resolve(root);
  const packages = readPackages(root);
  const byName = classifyPackages(packages);
  const pinnedSet = new Set(pinned);
  const isPinned = (name) => pinnedSet.has(name) || [...pinnedSet].some((p) => p.endsWith('/*') && name.startsWith(p.slice(0, -1)));

  const packageByDir = new Map(packages.map((p) => [p.dir, p]));
  const packageCache = new Map();
  const packageOf = (relFile) => {
    const walked = [];
    let found = null;
    for (let dir = toPosix(dirname(toPosix(relFile))); ; dir = toPosix(dirname(dir))) {
      const key = dir === '.' ? '' : dir;
      if (packageCache.has(key)) {
        found = packageCache.get(key);
        break;
      }
      walked.push(key);
      if (packageByDir.has(key)) {
        found = packageByDir.get(key);
        break;
      }
      if (key === '') break;
    }
    for (const d of walked) packageCache.set(d, found);
    return found;
  };
  const scopeOf = (relFile) => {
    const pkg = packageOf(relFile);
    const status = pkg ? pkg.status : 'unscoped';
    return { status, dir: pkg?.dir ?? null, name: pkg?.name ?? null, inScope: IN_SCOPE.has(status) };
  };

  // A bare `extends` (or reference) to a workspace package: `@scope/kit/tsconfig/react` → <kit>/tsconfig/react(.json).
  const resolveBare = (spec) => {
    const parts = spec.split('/');
    const name = spec.startsWith('@') ? parts.slice(0, 2).join('/') : parts[0];
    const sub = parts.slice(spec.startsWith('@') ? 2 : 1).join('/');
    const pkg = byName.get(name);
    if (!pkg) return null;
    const dir = join(root, pkg.dir);
    const base = sub ? join(dir, sub) : join(dir, 'tsconfig.json');
    for (const candidate of [base, `${base}.json`, join(base, 'tsconfig.json')]) if (isFile(candidate)) return candidate;
    return null;
  };

  const configFiles = listFiles(root, (name) => CONFIG_NAMES.includes(name) || /^tsconfig\..+\.json$/.test(name));
  const configs = new Map();
  const configAt = (file) => {
    if (!configs.has(file)) configs.set(file, readConfig(ts, file, resolveBare));
    return configs.get(file);
  };
  for (const file of configFiles) configAt(file);
  const governing = new Map();
  // The config of a file (absolute, under `root`): the nearest tsconfig.json / jsconfig.json; when it
  // references others (solution style), the first one whose include covers the file.
  const configOfBase = (absFile) => {
    let dir = dirname(absFile);
    while (dir.startsWith(root)) {
      const hit = governing.get(dir);
      if (hit !== undefined) return hit ? pick(hit, absFile) : null;
      const file = CONFIG_NAMES.map((n) => join(dir, n)).find(isFile);
      if (file) {
        const config = configAt(file);
        governing.set(dir, config);
        return config ? pick(config, absFile) : null;
      }
      governing.set(dir, undefined);
      if (dir === root) break;
      dir = dirname(dir);
    }
    return null;
  };
  const pick = (config, absFile) => {
    if (!config.references.length) return config;
    const own = (config.files?.length || config.include?.length) && includes(config, absFile);
    if (own) return config;
    for (const ref of config.references) {
      const c = configAt(ref);
      if (c && includes(c, absFile)) return c;
    }
    return config;
  };

  const workspace = {};
  for (const pkg of packages) {
    if (!pkg.name || isPinned(pkg.name)) continue;
    workspace[pkg.name] = pkg;
  }

  /* Absolute `paths` (under `at`, a copy of the corpus) for one config: workspace, then the config, then pinned. */
  const pathsFor = (config, at, globalPaths) => {
    const rebase = (p) => {
      const rel = relative(root, p);
      return rel.startsWith('..') || isAbsolute(rel) ? p : join(at, rel);
    };
    const out = {};
    for (const [name, pkg] of Object.entries(workspace)) {
      out[name] = packageEntries(at, pkg);
      out[`${name}/*`] = [join(at, pkg.dir, '*'), join(at, pkg.dir, 'src', '*')];
    }
    if (config) for (const [pattern, targets] of Object.entries(absolutePaths(config))) out[pattern] = targets.map(rebase);
    for (const [pattern, targets] of Object.entries(globalPaths ?? {})) out[pattern] = targets;
    return out;
  };

  const moduleResolver = (tsApi, at, options, host) => {
    at = resolve(at);
    const perConfig = new Map();
    const optionsFor = (config) => {
      const key = config?.file ?? '';
      if (!perConfig.has(key)) {
        const opts = { ...options, paths: pathsFor(config, at, options.paths) };
        perConfig.set(key, { options: opts, cache: tsApi.createModuleResolutionCache(at, (x) => x, opts) });
      }
      return perConfig.get(key);
    };
    const globalEntry = { options, cache: tsApi.createModuleResolutionCache(at, (x) => x, options) };
    return (specifier, containingFile, mode) => {
      let entry = globalEntry;
      const rel = relative(at, containingFile);
      if (!isPinned(specifier) && !specifier.startsWith('.') && !rel.startsWith('..')) {
        entry = optionsFor(configOfBase(join(root, rel)));
      }
      return tsApi.resolveModuleName(specifier, containingFile, entry.options, host, entry.cache, undefined, mode);
    };
  };

  const summary = () => {
    const status = {};
    for (const p of packages) status[p.status] = (status[p.status] ?? 0) + 1;
    const read = [...configs.values()].filter(Boolean);
    return {
      packages: packages.length,
      byStatus: status,
      outOfScope: packages.filter((p) => !IN_SCOPE.has(p.status) && Object.keys(p.ods).length).map((p) => ({ dir: p.dir, name: p.name, status: p.status, ods: p.ods })),
      tsconfigs: configFiles.length,
      tsconfigsRead: read.length,
      withPaths: read.filter((c) => c.paths || c.baseUrl).length,
      unresolvedExtends: [...new Set(read.flatMap((c) => c.unresolvedExtends))].sort(),
      workspacePackages: Object.keys(workspace).length,
    };
  };

  return {
    root,
    packages: packages.map(({ json, deps, ...rest }) => rest),
    packageOf,
    scopeOf,
    configOf: (absFile, at = root) => configOfBase(join(root, relative(resolve(at), absFile))),
    moduleResolver,
    summary,
  };
}

/* ---------- premature rewrites ---------- */

/*
 * Every file ods-migrate changed (or created) in a package out of scope, with its changed line hunks.
 * `scopeOf(rel)` from the project; `base` / `migrated` the two copies. Files the tool writes for itself
 * (`ods-migrate.modules.json`) are left out.
 */
export function prematureRewrites({ scopeOf, base, migrated, diffLines }) {
  const files = [];
  const seen = new Set();
  const own = new Set(['ods-migrate.modules.json']);
  for (const file of listFiles(migrated, () => true)) {
    const rel = relative(migrated, file);
    seen.add(rel);
    if (own.has(rel.split(sep).pop())) continue;
    const scope = scopeOf(rel);
    if (scope.inScope) continue;
    const before = existsSync(join(base, rel)) ? readFileSync(join(base, rel), 'utf8') : null;
    const after = readFileSync(file, 'utf8');
    if (before === after) continue;
    const hunks = before === null ? 1 : countHunks(diffLines(before, after));
    files.push({ file: toPosix(rel), package: scope.dir, status: scope.status, hunks, created: before === null });
  }
  for (const file of listFiles(base, () => true)) {
    const rel = relative(base, file);
    if (seen.has(rel)) continue;
    const scope = scopeOf(rel);
    if (!scope.inScope) files.push({ file: toPosix(rel), package: scope.dir, status: scope.status, hunks: 1, deleted: true });
  }
  files.sort((a, b) => a.file.localeCompare(b.file));
  const byPackage = {};
  for (const f of files) {
    const k = f.package ?? '(none)';
    byPackage[k] ??= { status: f.status, files: 0, hunks: 0 };
    byPackage[k].files += 1;
    byPackage[k].hunks += f.hunks;
  }
  return { files: files.length, hunks: files.reduce((n, f) => n + f.hunks, 0), byPackage, list: files };
}

/* Contiguous changed regions of a `diff` diffLines result. */
export function countHunks(parts) {
  let hunks = 0;
  let inHunk = false;
  for (const p of parts) {
    if (p.added || p.removed) {
      if (!inHunk) hunks += 1;
      inHunk = true;
    } else inHunk = false;
  }
  return hunks;
}

