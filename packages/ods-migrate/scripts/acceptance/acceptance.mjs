#!/usr/bin/env node
/*
 * Helper of acceptance.sh: measures a run of ods-migrate on a copy of a corpus. Everything is
 * measured on the files themselves (never trusted from the CLI report), so it works the same
 * against the base package and against the work packages.
 *
 *   node acceptance.mjs hash <dir> <out.json>
 *     content hash of every file under <dir> (for the second-run check)
 *   node acceptance.mjs measure <pkg> <base dir> <migrated dir> <run1 report.json> <out.json> [<built-on-ods,…>] [<config.json>]
 *     files changed, markers added, new parse errors, ESLint / stylelint parity; <built-on-ods> is the
 *     comma-separated list of the `--built-on-ods` paths the CLI ran with, <config.json> the `--config` it
 *     read: the lint rules get the same (`builtOnOds`, `look`, `pending`, and the ods-migrate.modules.json
 *     the CLI wrote, copied into <base dir>), so parity compares like with like
 *   node acceptance.mjs rerun <before hashes.json> <migrated dir> <run2 report.json> <out.json>
 *     what a second run changed
 *
 * Imports (eslint, @typescript-eslint/parser, stylelint, @ast-grep/napi, postcss) are resolved from
 * the package under test, so its node_modules are the only ones used.
 */
import { createHash } from 'node:crypto';
import { copyFileSync, existsSync, readFileSync, readdirSync, lstatSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { basename, join, relative } from 'node:path';
import { pathToFileURL } from 'node:url';

const MARKER = /TODO\(ods-v20\)/g;
const SCRIPTS = /\.(c|m)?[jt]sx?$/;
const STYLES = /\.s?css$/;
const SKIP_DIRS = new Set(['.git', 'node_modules']);
const ODS_RELEVANT = '@ovhcloud\\/ods-react|--ods-|\\$ods-|Source Sans Pro|source-sans-pro|@include ods-';
const escape = (text) => text.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&');
/* What makes an unchanged file worth linting: an ODS name, one of the `--built-on-ods` paths, or an import of a module that stands for ODS (the project index). */
const relevant = (paths) => new RegExp([ODS_RELEVANT, ...paths.map(escape)].join('|'));

function* walk(dir, root = dir) {
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry)) continue;
    const path = join(dir, entry);
    const stat = lstatSync(path);
    if (stat.isSymbolicLink()) continue;
    if (stat.isDirectory()) yield* walk(path, root);
    else if (stat.isFile()) yield relative(root, path);
  }
}

const sha = (text) => createHash('sha1').update(text).digest('hex');
const readText = (path) => readFileSync(path, 'utf8');
const countMarkers = (text) => text.match(MARKER)?.length ?? 0;

function hashes(dir) {
  const out = {};
  for (const file of walk(dir)) out[file] = sha(readFileSync(join(dir, file)));
  return out;
}

/*
 * The CLI report, whatever its version: { files: [{ file, changes, error, … }] } with the marker items,
 * the points to check and the values for the type check under their version 3 names (`markers`,
 * `toCheck`, `typeCheck`) or their version 2 ones (`todos`, `notes`, `typed`). The keys of the result
 * keep the version 2 names, so that the recorded runs stay comparable.
 */
function reportTotals(path) {
  if (!existsSync(path)) return { missing: true };
  const report = JSON.parse(readText(path));
  const files = report.files ?? [];
  const sum = (...keys) => files.reduce((total, file) => total + (keys.map((key) => file[key]).find(Array.isArray)?.length ?? 0), 0);
  return {
    changes: sum('changes'),
    errors: files.filter((file) => file.error).map((file) => `${file.file}: ${file.error}`),
    notes: sum('toCheck', 'notes'),
    notOds: sum('notOds'),
    todos: sum('markers', 'todos'),
    typed: sum('typeCheck', 'typed'),
  };
}

/* ------------------------------------------------------------------------- markers */

/*
 * The marker formats of the CONTRACT (§ Markers):
 *   inline script   `/* TODO(ods-v20): … *\/ ` (exactly one trailing space)
 *   JSX child       `{/* TODO(ods-v20): … *\/}` + newline and indent, or one space
 *   stylesheet      `/* TODO(ods-v20): … *\/` on its own line before the node
 */
function stripScriptMarkers(source) {
  return source
    // A marker ends at its own `*/`: `variant={/* TODO… */ X}` must not run to a later `{/* comment */}`.
    .replace(/\{\/\* TODO\(ods-v20\)(?:(?!\*\/)[\s\S])*\*\/\}(?:\r?\n[ \t]*| )?/g, '')
    .replace(/\/\* TODO\(ods-v20\)(?:(?!\*\/)[\s\S])*\*\/ /g, '');
}
function stripStyleMarkers(source) {
  return source
    .replace(/^[ \t]*\/\* TODO\(ods-v20\)[\s\S]*?\*\/\r?\n/gm, '')
    .replace(/\/\* TODO\(ods-v20\)[\s\S]*?\*\/ ?/g, '');
}

const lineAt = (source, index) => source.slice(0, index).split('\n').length;

/* Each marker as [first line, line of the node it is about]: own-line markers point to the next line. */
function markerSpans(source) {
  const spans = [];
  for (const match of source.matchAll(MARKER)) {
    const start = source.lastIndexOf('/*', match.index);
    const close = source.indexOf('*/', match.index);
    if (start < 0 || close < 0) continue;
    let end = close + 2;
    if (source[end] === '}') end++;
    const rest = source.slice(end, source.indexOf('\n', end) < 0 ? source.length : source.indexOf('\n', end));
    const ownLine = rest.trim() === '';
    const first = lineAt(source, start);
    let target = lineAt(source, end);
    if (ownLine) {
      const lines = source.split('\n');
      target++;
      while (target <= lines.length && lines[target - 1].trim() === '') target++;
    }
    spans.push({ first, target });
  }
  return spans;
}

/* Matches lint reports to markers: a report belongs to a marker when it sits on the lines it covers. */
function matchReports(source, reports) {
  const spans = markerSpans(source);
  const hit = new Set();
  let unmarked = 0;
  for (const report of reports) {
    // Two markers can share a line: a report goes to the first of its markers that has none yet.
    const covers = (span) => report.line >= span.first && report.line <= span.target;
    const free = spans.findIndex((span, index) => !hit.has(index) && covers(span));
    const index = free >= 0 ? free : spans.findIndex(covers);
    if (index < 0) unmarked++;
    else hit.add(index);
  }
  return { markers: spans.length, markersWithoutReport: spans.length - hit.size, reportsWithoutMarker: unmarked };
}

/* ------------------------------------------------------------------------- measure */

async function measure(pkg, baseDir, migratedDir, reportPath, outPath, treatList = '', configPath = '') {
  const treatAsOds = treatList.split(',').filter(Boolean);
  const { look, pending } = configPath ? JSON.parse(readText(configPath)) : {};
  const lookOptions = { ...(look && { look }), ...(pending && { pending }) };
  const RELEVANT = relevant(treatAsOds);
  // The modules file the CLI wrote in migrated/ (paths relative to it) serves base/ too: same tree.
  const MODULES = 'ods-migrate.modules.json';
  if (existsSync(join(migratedDir, MODULES))) {
    copyFileSync(join(migratedDir, MODULES), join(baseDir, MODULES));
  }
  const { buildProjectIndex } = await import(pathToFileURL(join(pkg, 'src/project.mjs')).href);
  const projectMapping = JSON.parse(readText(join(pkg, 'mappings/v19-to-v20.json')));
  const index = buildProjectIndex([...walk(baseDir)].filter((file) => SCRIPTS.test(file) || basename(file) === 'package.json').map((file) => join(baseDir, file)), { mapping: projectMapping, treatAsOds });
  const importsOdsModule = (file) => Boolean(index.sourcesFor(join(baseDir, file)));
  const require = createRequire(join(pkg, 'package.json'));
  const load = async (name) => {
    const module = await import(pathToFileURL(require.resolve(name)).href);
    return module.default ?? module;
  };
  const { Linter } = await import(pathToFileURL(require.resolve('eslint')).href);
  const parser = await load('@typescript-eslint/parser');
  const stylelint = await load('stylelint');
  const { Lang, parse } = await import(pathToFileURL(require.resolve('@ast-grep/napi')).href);
  const postcss = await load('postcss');
  const scss = await load('postcss-scss');
  const eslintPlugin = (await import(pathToFileURL(join(pkg, 'src/eslint-plugin.mjs')).href)).default;
  const stylelintModule = (await import(pathToFileURL(join(pkg, 'src/stylelint-plugin.mjs')).href)).default;
  const stylelintPlugins = [stylelintModule].flat();
  const { diffWordsWithSpace } = require('diff');
  /*
   * The attributes the codemod adds to an element without the prop when the config keeps its v19
   * look (`whenAbsent`). ESLint never adds them (ods/v20-default-changed only reports), so a
   * divergence made of these additions only is expected under such a config.
   */
  const mapping = JSON.parse(readText(join(pkg, 'mappings/v19-to-v20.json')));
  const whenAbsentAttributes = Object.values(mapping.components ?? {})
    .flatMap((component) => Object.entries(component.whenAbsent?.add ?? {}))
    .map(([name, value]) => `${name}="${value}"`);
  const onlyWhenAbsent = (fixed, codemod) => {
    const parts = diffWordsWithSpace(fixed, codemod).filter((part) => part.added || part.removed);
    return parts.length > 0 && parts.every((part) => part.added
      && part.value.trim().split(/\s+/).every((attribute) => whenAbsentAttributes.includes(attribute)));
  };

  // The rules resolve imports from the file's real path (relative, tsconfig paths, workspace packages).
  const linters = { base: new Linter({ configType: 'flat', cwd: baseDir }), migrated: new Linter({ configType: 'flat', cwd: migratedDir }) };
  const eslintConfig = (jsx) => [{
    files: ['**/*.{js,jsx,ts,tsx,mjs,cjs,mts,cts}'],
    languageOptions: { parser, parserOptions: { ecmaFeatures: { jsx } } },
    // The corpus' own `eslint-disable` comments name rules that are not loaded here: leave them alone.
    linterOptions: { reportUnusedDisableDirectives: 'off', reportUnusedInlineConfigs: 'off' },
    plugins: { ods: eslintPlugin },
    rules: { 'ods/v20-migration': ['error', { builtOnOds: treatAsOds, ...lookOptions }], 'ods/v20-tokens': ['error', lookOptions] },
  }];
  const stylelintConfig = { plugins: stylelintPlugins, rules: { 'ods/no-removed-token': configPath ? [true, lookOptions] : true } };

  const errorNodes = (source, file) => {
    const lang = /\.(c|m)?ts$/.test(file) ? Lang.TypeScript : Lang.Tsx;
    return parse(lang, source).root().findAll({ rule: { kind: 'ERROR' } }).length;
  };
  const styleParses = (source, file) => {
    try {
      (file.endsWith('.scss') ? scss : postcss).parse(source, { from: file });
      return true;
    } catch {
      return false;
    }
  };

  const result = {
    cli: reportTotals(reportPath),
    eslint: { fatalIntroduced: [], files: 0, fixDivergences: [], fixDivergencesWhenAbsent: [], fixableAfterCodemod: 0, markers: 0, markersWithoutReport: 0, reports: 0, reportsWithoutMarker: 0 },
    filesChanged: 0,
    markersAdded: 0,
    newParseErrors: [],
    stylelint: { files: 0, fixDivergences: [], fixableAfterCodemod: 0, markers: 0, markersWithoutReport: 0, reports: 0, reportsWithoutMarker: 0 },
  };
  const changedByKind = { other: 0, scripts: 0, snapshots: 0, styles: 0 };

  for (const file of walk(baseDir)) {
    const basePath = join(baseDir, file);
    const migratedPath = join(migratedDir, file);
    if (!existsSync(migratedPath)) continue;
    const before = readText(basePath);
    const after = readText(migratedPath);
    const changed = before !== after;
    if (changed) {
      result.filesChanged++;
      changedByKind[SCRIPTS.test(file) ? 'scripts' : STYLES.test(file) ? 'styles' : file.endsWith('.snap') ? 'snapshots' : 'other']++;
      result.markersAdded += countMarkers(after) - countMarkers(before);
      if (SCRIPTS.test(file) && errorNodes(after, file) > errorNodes(before, file)) result.newParseErrors.push(file);
      if (STYLES.test(file) && styleParses(before, file) && !styleParses(after, file)) result.newParseErrors.push(file);
      if (file.endsWith('.json') && (() => { try { JSON.parse(after); return false; } catch { return true; } })()) result.newParseErrors.push(file);
    }
    if (!changed && !RELEVANT.test(before) && !(SCRIPTS.test(file) && importsOdsModule(file))) continue;

    if (SCRIPTS.test(file) && !file.endsWith('.d.ts')) {
      const config = eslintConfig(!/\.(c|m)?ts$/.test(file));
      const fixed = linters.base.verifyAndFix(before, config, basePath);
      const baseFatal = fixed.messages.some((message) => message.fatal);
      result.eslint.files++;
      const codemod = stripScriptMarkers(after);
      if (!baseFatal && fixed.output !== codemod) {
        if (onlyWhenAbsent(fixed.output, codemod)) result.eslint.fixDivergencesWhenAbsent.push(file);
        else result.eslint.fixDivergences.push(file);
      }
      const messages = linters.migrated.verify(after, config, migratedPath);
      if (messages.some((message) => message.fatal)) {
        if (!baseFatal) result.eslint.fatalIntroduced.push(file);
        continue;
      }
      const ods = messages.filter((message) => message.ruleId?.startsWith('ods/'));
      result.eslint.reports += ods.length;
      result.eslint.fixableAfterCodemod += ods.filter((message) => message.fix).length;
      const matched = matchReports(after, ods.filter((message) => !message.fix));
      result.eslint.markers += matched.markers;
      result.eslint.markersWithoutReport += matched.markersWithoutReport;
      result.eslint.reportsWithoutMarker += matched.reportsWithoutMarker;
    } else if (STYLES.test(file)) {
      const syntax = file.endsWith('.scss') ? { customSyntax: 'postcss-scss' } : {};
      result.stylelint.files++;
      try {
        const fixed = await stylelint.lint({ code: before, codeFilename: basePath, config: stylelintConfig, fix: true, ...syntax });
        if (fixed.code !== undefined && fixed.code !== stripStyleMarkers(after)) result.stylelint.fixDivergences.push(file);
        const { results } = await stylelint.lint({ code: after, codeFilename: migratedPath, config: stylelintConfig, ...syntax });
        const warnings = results[0].warnings.filter((warning) => warning.rule?.startsWith('ods/'));
        result.stylelint.reports += warnings.length;
        // stylelint does not expose the fix of a warning: a fixable one left after the codemod shows
        // up as a fix divergence of `--fix` on the migrated output.
        const refixed = await stylelint.lint({ code: after, codeFilename: migratedPath, config: stylelintConfig, fix: true, ...syntax });
        if (refixed.code !== undefined && refixed.code !== after) result.stylelint.fixableAfterCodemod++;
        const matched = matchReports(after, warnings);
        result.stylelint.markers += matched.markers;
        result.stylelint.markersWithoutReport += matched.markersWithoutReport;
        result.stylelint.reportsWithoutMarker += matched.reportsWithoutMarker;
      } catch (error) {
        result.newParseErrors.push(`${file} (stylelint: ${error.message.split('\n')[0]})`);
      }
    }
  }
  result.changedByKind = changedByKind;
  writeFileSync(outPath, JSON.stringify(result, null, 2));
}

function rerun(beforePath, migratedDir, reportPath, outPath) {
  const before = JSON.parse(readText(beforePath));
  const after = hashes(migratedDir);
  // ods-migrate.modules.json is generated on every --write (it names a renamed export under the name the code now uses).
  const changed = Object.keys(after).filter((file) => before[file] !== after[file] && file !== 'ods-migrate.modules.json');
  writeFileSync(outPath, JSON.stringify({ cli: reportTotals(reportPath), filesChanged: changed.length, files: changed.slice(0, 50) }, null, 2));
}

const [command, ...args] = process.argv.slice(2);
if (command === 'hash') {
  writeFileSync(args[1], JSON.stringify(hashes(args[0])));
} else if (command === 'measure') {
  await measure(...args);
} else if (command === 'rerun') {
  rerun(...args);
} else {
  console.error('usage: acceptance.mjs hash|measure|rerun …');
  process.exit(2);
}
