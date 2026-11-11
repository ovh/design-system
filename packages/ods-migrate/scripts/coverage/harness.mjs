/*
 * The coverage harness: measures what ods-migrate does on a v19 corpus, with detectors that do not
 * read its mappings (the v20 type checker and the token names declared by the ODS sources).
 */
import { spawnSync } from 'node:child_process';
import { cpSync, existsSync, lstatSync, mkdirSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { basename, dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { diffLines } from 'diff';
import { classify, summarize } from './classify.mjs';
import { digestDir } from './corpora/common.mjs';
import { lineOf, lineStarts } from './linemap.mjs';
import { loadProject, prematureRewrites } from './project.mjs';
import { compilerOptions, loadTypeScript, pinnedSpecifiers, prepareSurface, probeSurface } from './surfaces.mjs';
import { collectTokenSites, declaredNames, extractSnippets, isSiteContext, removedNames, scanText, SCANNED, siteKind, SNAPSHOT, walkFiles } from './token-sites.mjs';
import { apiDiff, buildApi, compareTruth } from './truth.mjs';
import { checkProgram, groupSites, JS_FILES, odsSymbols, TS_FILES, unionDiagnostics } from './ts-sites.mjs';
import { jsxUsages, visualChanges } from './visual.mjs';

const PACKAGE = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const IGNORED_DIRS = new Set(['.cache', '.docusaurus', '.git', '.next', '.nx', '.output', '.turbo', '.vite', 'build', 'coverage', 'dist', 'node_modules', 'out', 'storybook-static']);

function gitPath(dir, option) {
  const r = spawnSync('git', ['-C', dir, 'rev-parse', '--path-format=absolute', option], { encoding: 'utf8' });
  return r.status === 0 ? r.stdout.trim() : null;
}

/* The devDependencies of this package, then the folder of the main checkout. */
function installed(name, repo) {
  try {
    return dirname(createRequire(import.meta.url).resolve(`${name}/package.json`));
  } catch {
    return repo && join(repo, 'node_modules', name);
  }
}

/* The installed folder of the worktree this package runs in, or of the main checkout. */
function firstInstalled(...dirs) {
  return dirs.find((dir) => dir && existsSync(dir)) ?? dirs.at(-1);
}

export function defaults() {
  const commonDir = gitPath(PACKAGE, '--git-common-dir');
  const repo = commonDir && dirname(commonDir);
  const worktree = gitPath(PACKAGE, '--show-toplevel');
  const inRepo = (path) => [worktree, repo].map((root) => root && join(root, path));
  return {
    repo,
    v19: 'v19.7.3',
    v20: 'origin/master',
    deps19: firstInstalled(...inRepo('node_modules')),
    deps20: firstInstalled(...inRepo('packages/ods-react/node_modules')),
    typescript: installed('typescript', repo),
    reactTypes: installed('@types/react', repo),
    reactDomTypes: installed('@types/react-dom', repo),
    cli: join(PACKAGE, 'src/cli.mjs'),
    treatAsOds: [],
    strict: false,
    checkJs: false,
  };
}

/* Copies a corpus without its dependencies, build output, git folder and symlinks. */
export function copyCorpus(from, to) {
  rmSync(to, { force: true, recursive: true });
  mkdirSync(dirname(to), { recursive: true });
  cpSync(from, to, {
    recursive: true,
    filter: (src) => src === from || (!lstatSync(src).isSymbolicLink() && !IGNORED_DIRS.has(basename(src))),
  });
}

function readTexts(root, files) {
  const map = new Map();
  for (const file of files) map.set(relative(root, file), readFileSync(file, 'utf8'));
  return map;
}

/*
 * The snippets (Markdown code blocks, template strings) of `rels` that import ODS, written as files
 * under `dir`. → Map(snippet path relative to `dir` → { file, start, starts }) to map a diagnostic back
 * to its host file.
 */
function writeSnippets(hostRoot, rels, dir, ts, importPattern) {
  rmSync(dir, { force: true, recursive: true });
  const table = new Map();
  for (const rel of rels) {
    const host = join(hostRoot, rel);
    if (!existsSync(host)) continue;
    const text = readFileSync(host, 'utf8');
    extractSnippets(rel, text, ts, importPattern).forEach((s, i) => {
      const name = `${rel}.snippet-${i}.${s.lang}`;
      mkdirSync(dirname(join(dir, name)), { recursive: true });
      writeFileSync(join(dir, name), s.code);
      table.set(name, { file: rel, start: s.start, starts: lineStarts(text) });
    });
  }
  return table;
}

/*
 * The diagnostics of snippet files, moved to their host file (line, offset), tagged `snippet`. The
 * anchor keeps the snippet name, so that two snippets of one host never share an API usage.
 */
function hostDiagnostics(diagnostics, table) {
  return diagnostics.filter((d) => table.has(d.file)).map((d) => {
    const s = table.get(d.file);
    const start = s.start + d.start;
    return { ...d, file: s.file, line: lineOf(s.starts, start) + 1, start, kind: 'snippet', ...(d.anchor ? { anchor: `${d.file}#${d.anchor}` } : {}), ...(d.span ? { span: d.span.map((x) => x + s.start) } : {}) };
  });
}

function countBy(list, key) {
  const out = {};
  for (const item of list) out[key(item)] = (out[key(item)] ?? 0) + 1;
  return out;
}

/*
 * opts: { corpus, truth?, config?, work, label?, cache?, treatAsOds[], v19, v20, repo, deps19, deps20,
 *         typescript, reactTypes, reactDomTypes, cli, strict, checkJs, log? }
 */
export function runCoverage(input) {
  const opts = { ...defaults(), ...Object.fromEntries(Object.entries(input).filter(([, v]) => v !== undefined)) };
  const log = opts.log ?? (() => {});
  const corpus = resolve(opts.corpus);
  if (!existsSync(corpus)) throw new Error(`corpus not found: ${corpus}`);
  const label = opts.label ?? basename(corpus);
  const work = resolve(opts.work, label);
  const cache = resolve(opts.cache ?? join(opts.work, '.surfaces'));
  const treatAsOds = opts.treatAsOds ?? [];
  const timings = {};
  const time = (name, fn) => {
    const t = Date.now();
    const r = fn();
    timings[name] = Date.now() - t;
    return r;
  };

  // 1. Type surfaces.
  const ts = loadTypeScript(opts.typescript);
  mkdirSync(cache, { recursive: true });
  const surfaces = time('surfaces', () => ({
    v19: prepareSurface({ cache, repo: opts.repo, ref: opts.v19, deps: opts.deps19 }),
    v20: prepareSurface({ cache, repo: opts.repo, ref: opts.v20, deps: opts.deps19, packageDeps: opts.deps20 }),
  }));
  const tsOptions = {};
  const probes = {};
  for (const key of ['v19', 'v20']) {
    tsOptions[key] = compilerOptions(ts, surfaces[key], opts);
    probes[key] = time(`probe-${key}`, () => probeSurface(ts, surfaces[key], tsOptions[key], cache));
    if (!probes[key].ok) throw new Error(`the ${key} surface does not compile its probe: ${JSON.stringify(probes[key])}`);
  }
  log(`surfaces: v19 ${surfaces.v19.sha.slice(0, 9)}, v20 ${surfaces.v20.sha.slice(0, 9)} (probes ok)`);

  // 2. Two copies of the corpus; its own dependencies resolve from deps19 (React types are pinned).
  const base = join(work, 'base');
  const migrated = join(work, 'migrated');
  copyCorpus(corpus, base);
  copyCorpus(corpus, migrated);
  const modules = join(work, 'node_modules');
  if (!existsSync(modules)) symlinkSync(opts.deps19, modules, 'dir');

  const codeTest = opts.checkJs ? new RegExp(`${TS_FILES.source}|${JS_FILES.source}`) : TS_FILES;
  const codeFiles = (root) => walkFiles(root, codeTest);

  // The corpus as the harness reads it on its own (never through the ods-migrate sources): its packages
  // (scope: only those on ODS 19 contribute sites) and the tsconfig of each file (paths, baseUrl, extends,
  // references), with the workspace packages, for the module resolution of both copies.
  const project = time('project', () => loadProject(ts, base, { pinned: pinnedSpecifiers(tsOptions.v20) }));
  const projectSummary = project.summary();
  const inScope = (file) => project.scopeOf(file).inScope;
  log(`project: ${projectSummary.packages} package.json (${Object.entries(projectSummary.byStatus).map(([k, v]) => `${k} ${v}`).join(', ') || 'none'}), ${projectSummary.tsconfigsRead} tsconfigs read (${projectSummary.withPaths} with paths/baseUrl)`);
  const check = (key, root, { files = codeFiles(root), attribute } = {}) => checkProgram(ts, { files, options: tsOptions[key], surface: surfaces[key], root, project, attribute });

  // 3. Detection on the unmigrated corpus. The v19 checker says which v20 errors sit on ODS code and
  // which API usage each belongs to (it still resolves the names v20 removed).
  const v20BaseRun = time('tsc-v20', () => check('v20', base));
  const v20Base = v20BaseRun.diagnostics;
  const v19BaseRun = time('tsc-v19', () => check('v19', base, { attribute: { diagnostics: v20Base, treatAsOds } }));
  const v19Base = v19BaseRun.diagnostics;
  const analysis = v19BaseRun.analysis;
  analysis.addExportNames(v20BaseRun.exportNames);
  const roots = [base, migrated];
  const packages = (fileName) => {
    const root = roots.find((dir) => !relative(dir, fileName).startsWith('..'));
    return analysis.packagesFor(root ? relative(root, fileName) : null);
  };
  const noise = new Set(v19Base.map((d) => `${d.file}:${d.line}:${d.code}`));
  const v20Only = v20Base.filter((d) => !noise.has(`${d.file}:${d.line}:${d.code}`));
  const odsErrors = v20Only.filter((d) => d.ods);
  const tsAll = groupSites(odsErrors);

  const declared = { v19: declaredNames([surfaces.v19.src, surfaces.v19.themes]), v20: declaredNames([surfaces.v20.src, surfaces.v20.themes]) };
  // The v20 API as the type checker reads it from both surfaces (exports, constants, props of each component).
  const api = time('api', () => apiDiff(buildApi(ts, surfaces.v19, tsOptions.v19, cache), buildApi(ts, surfaces.v20, tsOptions.v20, cache)));
  const removedProps = new Map();
  for (const [component, props] of Object.entries(api.v19.components)) {
    const gone = Object.keys(props).filter((p) => !api.isProp20(component, p) && api.isComponent19(component) && Object.hasOwn(api.v20.components, component));
    if (gone.length) removedProps.set(component, new Set(gone));
  }
  const removed = removedNames(declared.v19, declared.v20, { v19: v19BaseRun.exportNames, v20: v20BaseRun.exportNames }, removedProps);
  const scanned = (root) => walkFiles(root, SCANNED).filter((f) => !/\.d\.(c|m)?ts$/.test(f));
  // Token sites in code only; comments, JSX / HTML text, prose strings, Markdown prose and changelogs are mentions.
  const scannedRels = scanned(base).map((f) => relative(base, f));
  const occurrences = collectTokenSites(scannedRels, (rel) => readFileSync(join(base, rel), 'utf8'), removed, declared.v20, { ts });
  const tokAll = occurrences.sites;

  // Snippets: the code blocks of Markdown and the strings that import ODS, type-checked as files (v20,
  // then v19 to subtract its errors and attribute the v20 ones to ODS, as for the corpus code).
  const odsImport = new RegExp(`\\bfrom\\s*['"](?:@ovhcloud/ods-${treatAsOds.map((p) => `|${p.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&')}`).join('')})`);
  const snippetRels = scannedRels.filter((rel) => !SNAPSHOT.test(rel));
  const snippetsBase = join(work, 'snippets', 'base');
  const snippetTable = writeSnippets(base, snippetRels, snippetsBase, ts, odsImport);
  const snippetFiles = [...snippetTable.keys()].map((name) => join(snippetsBase, name));
  let snippetV20 = [];
  let snippetV19 = [];
  if (snippetFiles.length) {
    const raw20 = time('tsc-v20-snippets', () => check('v20', snippetsBase, { files: snippetFiles }).diagnostics);
    const raw19 = time('tsc-v19-snippets', () => check('v19', snippetsBase, { files: snippetFiles, attribute: { diagnostics: raw20, treatAsOds } }).diagnostics);
    snippetV20 = hostDiagnostics(raw20, snippetTable);
    snippetV19 = hostDiagnostics(raw19, snippetTable);
  }
  const snippetNoise = new Set(snippetV19.map((d) => `${d.file}:${d.line}:${d.code}`));
  const snippetAll = groupSites(snippetV20.filter((d) => d.ods && !snippetNoise.has(`${d.file}:${d.line}:${d.code}`))).map((s) => ({ ...s, kind: 'snippet' }));

  // A removed export named on a snippet line is that snippet site already (the snippet is type-checked).
  const snippetLines = new Set(snippetAll.map((s) => `${s.file}:${s.line}`));
  const tokKept = tokAll.filter((s) => (s.detail !== 'export' && s.detail !== 'prop') || !snippetLines.has(`${s.file}:${s.line}`));
  const tsSites = tsAll.filter((s) => inScope(s.file));
  const tokSites = tokKept.filter((s) => inScope(s.file));
  const snippetSites = snippetAll.filter((s) => inScope(s.file));
  const outOfScope = [...tsAll, ...tokKept, ...snippetAll].filter((s) => !inScope(s.file));
  log(`detected: ${tsSites.length} type sites (${odsErrors.length} errors), ${tokSites.length} token sites (${occurrences.mentions.length} mentions not counted), ${snippetSites.length} snippet sites in ${snippetFiles.length} snippets; ${outOfScope.length} out of scope`);

  // 4. ods-migrate on the second copy, from an empty folder (no ods-migrate.config.json picked up by accident).
  const runDir = join(work, 'run');
  rmSync(runDir, { force: true, recursive: true });
  mkdirSync(runDir, { recursive: true });
  const report = join(work, 'ods-migrate.json');
  const args = [opts.cli, migrated, '--write', '--json', report, ...treatAsOds.flatMap((p) => ['--built-on-ods', p])];
  if (opts.config) args.push('--config', resolve(opts.config));
  if (!existsSync(opts.cli)) throw new Error(`ods-migrate CLI not found: ${opts.cli}`);
  const migrate = time('ods-migrate', () => spawnSync(process.execPath, args, { cwd: runDir, encoding: 'utf8', maxBuffer: 1 << 28 }));
  if (migrate.status !== 0 && migrate.status !== 2) throw new Error(`ods-migrate failed (exit ${migrate.status}): ${migrate.stderr}`);
  log(`ods-migrate: exit ${migrate.status}`);

  // 5. The same detectors on the result.
  const v20After = time('tsc-v20-migrated', () => check('v20', migrated).diagnostics);
  const snippetsMigrated = join(work, 'snippets', 'migrated');
  const migratedTable = writeSnippets(migrated, snippetRels, snippetsMigrated, ts, odsImport);
  const migratedSnippetFiles = [...migratedTable.keys()].map((name) => join(snippetsMigrated, name));
  const snippetAfter = migratedSnippetFiles.length ? hostDiagnostics(time('tsc-v20-snippets-migrated', () => check('v20', snippetsMigrated, { files: migratedSnippetFiles }).diagnostics), migratedTable) : [];
  const allFiles = [...new Set([...scanned(base), ...codeFiles(base)])];
  const baseTexts = readTexts(base, allFiles);
  const texts = new Map();
  for (const [file, text] of baseTexts) {
    const m = join(migrated, file);
    texts.set(file, { base: text, migrated: existsSync(m) ? readFileSync(m, 'utf8') : text });
  }
  // What is still there after the migration is counted in code only, by the same scanner.
  const scan = (file, text) => scanText(text, removed, declared.v20, { file, ts }).filter((o) => isSiteContext(o.context)).map((o) => ({ ...o, kind: siteKind(o.kind, file) }));
  // Regressions: errors of the migrated code that the unmigrated code had neither against v20 nor against v19.
  const classified = classify({
    texts,
    sites: [...tsSites, ...tokSites, ...snippetSites, ...outOfScope],
    after: [...v20After, ...snippetAfter],
    before: [...unionDiagnostics(v20Base, v19Base), ...unionDiagnostics(snippetV20, snippetV19)],
    ts,
    scan,
  });
  const { regressions } = classified;
  const inScopeSites = classified.sites.filter((s) => inScope(s.file));
  // Snapshots are reported apart, never in the totals.
  const sites = inScopeSites.filter((s) => s.bucket !== 'snap');
  const snapshotSites = inScopeSites.filter((s) => s.bucket === 'snap');
  // Premature: what ods-migrate changed in packages that are not on ODS 19.
  const premature = prematureRewrites({ scopeOf: project.scopeOf, base, migrated, diffLines });
  premature.sites = classified.sites.filter((s) => !inScope(s.file) && s.outcome !== 'missed').length;

  // 6. Truth: item by item (truth.mjs), with the former line regions kept for reference (`truth.legacy`).
  let truth = null;
  if (opts.truth) {
    const config = opts.config ? JSON.parse(readFileSync(resolve(opts.config), 'utf8')) : {};
    // The look ids of the measured tool's configurator (a data file, not its code), to flag a look id the truth rules do not know.
    const choicesFile = join(dirname(dirname(resolve(opts.cli))), 'configurator/choices.json');
    const choiceIds = existsSync(choicesFile) ? JSON.parse(readFileSync(choicesFile, 'utf8')).choices.map((c) => c.id) : null;
    truth = time('truth', () => compareTruth({ ts, truthRoot: resolve(opts.truth), base, migrated, texts, sites, regressions, packages, api, removed, look: config.look ?? {}, choiceIds }));
  }

  // 7. Not detectable: the rendering of the components the corpus uses.
  const parsed = codeFiles(base).map((f) => ts.createSourceFile(f, readFileSync(f, 'utf8'), ts.ScriptTarget.Latest, true));
  const visual = visualChanges(jsxUsages(ts, parsed, odsSymbols, packages), surfaces.v19, surfaces.v20);

  let migrateReport = null;
  try {
    migrateReport = JSON.parse(readFileSync(report, 'utf8')).summary;
  } catch {}

  const kinds = {};
  for (const s of sites) {
    const k = (kinds[s.kind] ??= { sites: 0, auto: 0, marked: 0, missed: 0 });
    k.sites += 1;
    k[s.outcome] += 1;
  }
  return {
    version: 1,
    corpus,
    label,
    work,
    refs: { v19: { ref: opts.v19, sha: surfaces.v19.sha }, v20: { ref: opts.v20, sha: surfaces.v20.sha } },
    // The input, as scripts/coverage/corpora digests it: a baseline is comparable only on the same input.
    digests: { corpus: digestDir(base).sha256, truth: opts.truth ? digestDir(resolve(opts.truth)).sha256 : null },
    options: { treatAsOds, config: opts.config ? resolve(opts.config) : null, strict: opts.strict, checkJs: opts.checkJs, reactTypes: opts.reactTypes, cli: resolve(opts.cli) },
    probes,
    removedNames: { css: removed.css.size, scss: removed.scss.size, mixin: removed.mixin.size, module: removed.module.size, font: removed.font.size, export: removed.export.size, prop: [...removed.prop.values()].reduce((n, set) => n + set.size, 0) },
    files: { typeChecked: codeFiles(base).length, scanned: scanned(base).length, snippets: snippetFiles.length },
    noise: {
      v19Errors: v19Base.length,
      v20Errors: v20Base.length,
      v20OnlyErrors: v20Only.length,
      v20OdsErrors: odsErrors.length,
      v20OnlyNotOds: v20Only.length - odsErrors.length,
      tsSitesBeforeScope: tsAll.length,
      snippetErrorsV20: snippetV20.length,
    },
    project: { ...projectSummary, ods: analysis.stats() },
    scope: {
      excludedSites: outOfScope.length,
      excludedByStatus: Object.fromEntries(Object.entries(Object.groupBy(outOfScope, (s) => project.scopeOf(s.file).status)).map(([k, v]) => [k, v.length])),
      premature: { files: premature.files, hunks: premature.hunks, sites: premature.sites, byPackage: premature.byPackage },
    },
    migrate: { exit: migrate.status, summary: migrateReport, stderr: migrate.stderr.trim().split('\n').filter(Boolean).slice(0, 20) },
    summary: {
      ...summarize(sites, regressions),
      // Files and hunks ods-migrate changed in packages not on ODS 19 (sites touched there: scope.premature).
      prematureFiles: premature.files,
      prematureHunks: premature.hunks,
      byKind: kinds,
      // The same counters without the code shipped as text (Markdown code, snippets): comparable with the runs before they were scanned.
      withoutDocs: summarize(sites.filter((s) => s.kind !== 'doc' && s.kind !== 'snippet'), regressions.filter((r) => r.kind !== 'snippet')),
      ...(truth ? {
        agree: truth.agree,
        differ: truth.differ,
        toolWrong: truth.byClass['tool-wrong'],
        decision: truth.byClass.decision,
        unrelatedChange: truth.byClass['unrelated-change'],
        styleOnly: truth.byClass['style-only'],
      } : {}),
    },
    sites,
    regressions,
    snapshots: { summary: summarize(snapshotSites, []), sites: snapshotSites },
    mentions: {
      total: occurrences.mentions.length,
      byContext: countBy(occurrences.mentions, (m) => m.context),
      byKind: countBy(occurrences.mentions, (m) => m.detail),
      list: occurrences.mentions,
    },
    // v20-only errors of the unmigrated code that are not counted as sites: neither ODS (by the v19 checker) nor in scope.
    unattributed: v20Only.filter((d) => !d.ods).map(({ file, line, code, message }) => ({ file, line, code, message })),
    truth,
    visual,
    timings,
  };
}
