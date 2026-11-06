/*
 * Shared helpers of the corpus preparation scripts (scripts/coverage/corpora/<corpus>.mjs).
 *
 * Every script writes, under `--out <dir>`, one folder per corpus with `corpus/` (the v19 code,
 * never the original: a git archive or a copy), `truth/` when there is a hand-migrated truth, and a
 * manifest `<dir>/<name>.corpus.json`: where each input came from (repo, ref, sha, path), the digest
 * of each prepared folder (the same digest the coverage harness reports, so a baseline knows its
 * input), and the coverage runs to make (`runs`: label, corpus, truth, options, gated).
 * Nothing is installed and no source is written.
 */
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { cpSync, existsSync, lstatSync, mkdirSync, readdirSync, readFileSync, realpathSync, rmSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { basename, dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import { diffArrays } from 'diff';

export const PACKAGE = resolve(dirname(fileURLToPath(import.meta.url)), '../../..');

/* The folders a corpus copy leaves out (the coverage harness skips the same ones). */
export const IGNORED_DIRS = new Set(['.cache', '.docusaurus', '.git', '.next', '.nx', '.output', '.turbo', '.vite', 'build', 'coverage', 'dist', 'node_modules', 'out', 'storybook-static']);

/* The files a digest reads: regular files, not under an ignored folder, not symlinks; sorted relative paths. */
export function digestFiles(dir) {
  const out = [];
  const walk = (d) => {
    for (const e of readdirSync(d, { withFileTypes: true })) {
      const p = join(d, e.name);
      if (e.isSymbolicLink()) continue;
      if (e.isDirectory()) {
        if (!IGNORED_DIRS.has(e.name)) walk(p);
      } else if (e.isFile()) out.push(relative(dir, p));
    }
  };
  walk(dir);
  return out.sort();
}

/*
 * The digest of a folder: sha256 over `<relative path>\0<bytes>\0` of each file of `digestFiles`
 * (posix separators), skipping `skip` (relative paths). → { sha256, files }
 */
export function digestDir(dir, { skip = [] } = {}) {
  const hash = createHash('sha256');
  let files = 0;
  for (const rel of digestFiles(dir)) {
    const posix = rel.split('\\').join('/');
    if (skip.includes(posix)) continue;
    hash.update(posix).update('\0').update(readFileSync(join(dir, rel))).update('\0');
    files += 1;
  }
  return { sha256: hash.digest('hex'), files };
}

export function git(repo, args, options = {}) {
  return execFileSync('git', ['-C', repo, ...args], { encoding: options.encoding === null ? undefined : 'utf8', maxBuffer: 1 << 30, ...options });
}

export function revParse(repo, ref) {
  return git(repo, ['rev-parse', '--verify', `${ref}^{commit}`]).trim();
}

/* `git archive <ref> <path>` extracted so that `<path>` lands at `dest` (the folder is emptied first). */
export function gitArchive(repo, ref, path, dest) {
  rmSync(dest, { force: true, recursive: true });
  const tmp = `${dest}.extract`;
  rmSync(tmp, { force: true, recursive: true });
  mkdirSync(tmp, { recursive: true });
  // Through a file, not stdin: tar may stop reading at the end-of-archive blocks, before the record
  // padding git writes, and a write into its closed stdin fails with EPIPE (seen under load).
  const archive = `${dest}.tar`;
  git(repo, ['archive', '--format=tar', '-o', archive, ref, path]);
  execFileSync('tar', ['-x', '-f', archive, '-C', tmp], { maxBuffer: 1 << 30 });
  rmSync(archive, { force: true });
  mkdirSync(dirname(dest), { recursive: true });
  execFileSync('mv', [path === '.' ? tmp : join(tmp, path), dest]);
  rmSync(tmp, { force: true, recursive: true });
}

/* The text of `path` at `ref`, or null when it does not exist there. */
export function gitShow(repo, ref, path) {
  try {
    return git(repo, ['show', `${ref}:${path}`], { stdio: ['ignore', 'pipe', 'ignore'] });
  } catch {
    return null;
  }
}

export function gitLsFiles(repo, ref, path) {
  return git(repo, ['ls-tree', '-r', '--name-only', ref, '--', path]).split('\n').filter(Boolean);
}

/* A copy of a folder without its dependencies, build output, git folder and symlinks (`exclude`: more names to skip). */
export function copyTree(from, to, { exclude = [] } = {}) {
  if (!existsSync(from)) throw new Error(`not found: ${from}`);
  rmSync(to, { force: true, recursive: true });
  mkdirSync(dirname(to), { recursive: true });
  const skip = new Set([...IGNORED_DIRS, ...exclude]);
  cpSync(from, to, { recursive: true, filter: (src) => src === from || (!lstatSync(src).isSymbolicLink() && !skip.has(basename(src))) });
}

/* The main worktree of the git repo this package lives in (the design-system checkout), or null. */
export function designSystemRepo() {
  try {
    return dirname(execFileSync('git', ['-C', PACKAGE, 'rev-parse', '--path-format=absolute', '--git-common-dir'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim());
  } catch {
    return null;
  }
}

/*
 * Parses the options of a prepare script. `spec`: { name: { type, default, help } }. `--out` is
 * always there and required. Exits 2 with the usage on a mistake.
 */
export function cli(name, about, spec) {
  const options = { out: { type: 'string' }, help: { type: 'boolean', short: 'h' }, ...Object.fromEntries(Object.entries(spec).map(([k, v]) => [k, { type: v.type ?? 'string', ...(v.multiple ? { multiple: true } : {}) }])) };
  const usage = `Usage: node scripts/coverage/corpora/${name}.mjs --out <dir> ${Object.keys(spec).map((k) => `[--${k} <…>]`).join(' ')}\n${about}\n  --out <dir>  where the prepared corpora go (<dir>/<label>/corpus, …/truth, <dir>/${name}.corpus.json)\n${Object.entries(spec).map(([k, v]) => `  --${k}  ${v.help}${v.default !== undefined ? ` (default: ${v.default})` : ''}`).join('\n')}`;
  let values;
  try {
    ({ values } = parseArgs({ options, allowPositionals: false }));
  } catch (error) {
    console.error(`${error.message}\n${usage}`);
    process.exit(2);
  }
  if (values.help) {
    console.log(usage);
    process.exit(0);
  }
  if (!values.out) {
    console.error(usage);
    process.exit(2);
  }
  for (const [k, v] of Object.entries(spec)) if (values[k] === undefined && v.default !== undefined) values[k] = v.default;
  values.out = resolve(values.out);
  return values;
}

export const home = homedir();

/* Whether the module of `url` is the script node was started with. */
export function isMain(url) {
  try {
    return realpathSync(fileURLToPath(url)) === realpathSync(process.argv[1]);
  } catch {
    return false;
  }
}

/* Writes `<out>/<name>.corpus.json` and prints the coverage commands of its runs. */
export function writeManifest(out, name, manifest) {
  mkdirSync(out, { recursive: true });
  const file = join(out, `${name}.corpus.json`);
  const full = { version: 1, name, preparedAt: new Date().toISOString(), ...manifest };
  writeFileSync(file, `${JSON.stringify(full, null, 2)}\n`);
  console.log(`manifest: ${file}`);
  for (const run of manifest.runs ?? []) console.log(`  ${coverageCommand(run)}`);
  return full;
}

/* The scripts/coverage.mjs command line of one run of a manifest. */
export function coverageCommand(run, { json } = {}) {
  const args = ['node', 'scripts/coverage.mjs', run.corpus];
  if (run.truth) args.push('--truth', run.truth);
  for (const m of run.treatAsOds ?? []) args.push('--treat-as-ods', m);
  if (run.checkJs) args.push('--check-js');
  args.push('--label', run.label);
  if (json) args.push('--json', json);
  return args.join(' ');
}

/*
 * Checks a digest against the pinned one of a script. A mismatch means the input moved since the
 * baseline was recorded: the run is not comparable. → { ok, expected, actual }
 */
export function checkDigest(label, actual, expected, { strict = false } = {}) {
  if (!expected) return { ok: null, actual };
  const ok = actual.sha256 === expected.sha256 && actual.files === expected.files;
  if (!ok) {
    const message = `${label}: the input differs from the pinned one (expected ${expected.files} files ${expected.sha256.slice(0, 12)}, got ${actual.files} files ${actual.sha256.slice(0, 12)}): its numbers are not comparable with the baseline`;
    if (strict) throw new Error(message);
    console.error(`! ${message}`);
  }
  return { ok, expected, actual };
}

/* ------------------------------------------------------------------------------------------------
 * Text helpers for truths built from another tree
 * --------------------------------------------------------------------------------------------- */

/*
 * Rewrites the monorepo-relative imports of ods-react (`../../../../ods-react/src/components/x/src`,
 * `…/ods-react/src/utils/format`) to `@ovhcloud/ods-react`, line by line (the line count is kept).
 * JSON and style files of ods-react are left as they are. → { text, count }
 */
export function rewriteOdsImports(text) {
  let count = 0;
  const out = text.replace(/(['"])((?:\.\.?\/)+)ods-react\/src(\/[\w./-]*)?\1/g, (all, quote, _up, rest = '') => {
    if (/\.(json|s?css)$/.test(rest) || rest.includes('/documentation/')) return all;
    count += 1;
    return `${quote}@ovhcloud/ods-react${quote}`;
  });
  return { text: out, count };
}

const key = (line) => line.trim().replace(/\s+/g, ' ');

/* The hunks of a line diff: [{ b0, b1, o0, o1 }] (base range replaced by other range, 0-based half-open). */
function lineHunks(base, other) {
  const hunks = [];
  let b = 0;
  let o = 0;
  let open = null;
  for (const part of diffArrays(base.map(key), other.map(key))) {
    const n = part.value.length;
    if (!part.added && !part.removed) {
      if (open) {
        hunks.push({ ...open, b1: b, o1: o });
        open = null;
      }
      b += n;
      o += n;
      continue;
    }
    open ??= { b0: b, o0: o };
    if (part.removed) b += n;
    else o += n;
  }
  if (open) hunks.push({ ...open, b1: b, o1: o });
  return hunks;
}

/*
 * A three-way merge that keeps `ours` wherever the truth is not known.
 *   ours    the corpus file (v19)
 *   base    the file the truth was written against, before the migration
 *   theirs  the same file after the migration (the hand-migrated truth)
 * Where only `theirs` changed the base, the merge takes the change (that is the hand migration,
 * applied to the corpus file). Where `ours` differs from the base (content the base never had, so
 * the hand migration never saw it), and where both changed the same lines differently (a conflict),
 * the merge keeps `ours` and reports those corpus lines as `exclude` (1-based, inclusive): no truth.
 * → { text, exclude: [[from, to]], conflicts, oursOnly, theirsOnly }
 */
export function mergeKeepOurs(oursText, baseText, theirsText) {
  const eol = oursText.includes('\r\n') ? '\r\n' : '\n';
  const ours = oursText.split(/\r?\n/);
  const base = baseText.split(/\r?\n/);
  const theirs = theirsText.split(/\r?\n/);
  const a = lineHunks(base, ours).map((h) => ({ ...h, side: 'ours' }));
  const b = lineHunks(base, theirs).map((h) => ({ ...h, side: 'theirs' }));
  const all = [...a, ...b].sort((x, y) => x.b0 - y.b0 || x.b1 - y.b1);
  // Chunks: hunks of both sides that overlap or touch on the base.
  const chunks = [];
  for (const h of all) {
    const last = chunks.at(-1);
    if (last && h.b0 <= last.b1) {
      last.b1 = Math.max(last.b1, h.b1);
      last.hunks.push(h);
    } else chunks.push({ b0: h.b0, b1: h.b1, hunks: [h] });
  }
  const out = [];
  const exclude = [];
  let conflicts = 0;
  let oursOnly = 0;
  let theirsOnly = 0;
  let bp = 0;
  let op = 0;
  let tp = 0;
  const exclude1 = (o0, o1) => {
    if (o1 > o0) exclude.push([o0 + 1, o1]);
    else exclude.push([Math.max(1, o0), Math.min(ours.length, o0 + 1)]); // a deletion: its two neighbours
  };
  for (const c of chunks) {
    // The equal stretch before the chunk.
    const n = c.b0 - bp;
    for (let k = 0; k < n; k += 1) out.push(ours[op + k]);
    bp += n;
    op += n;
    tp += n;
    const span = (side) => c.hunks.filter((h) => h.side === side).reduce((s, h) => s + (h.o1 - h.o0) - (h.b1 - h.b0), 0);
    const oLen = c.b1 - c.b0 + span('ours');
    const tLen = c.b1 - c.b0 + span('theirs');
    const oSeg = ours.slice(op, op + oLen);
    const tSeg = theirs.slice(tp, tp + tLen);
    const sides = new Set(c.hunks.map((h) => h.side));
    if (sides.size === 1 && sides.has('theirs')) {
      out.push(...tSeg);
      theirsOnly += 1;
    } else if (sides.size === 1) {
      out.push(...oSeg);
      exclude1(op, op + oLen);
      oursOnly += 1;
    } else if (oSeg.map(key).join('\n') === tSeg.map(key).join('\n')) {
      out.push(...oSeg);
    } else {
      out.push(...oSeg);
      exclude1(op, op + oLen);
      conflicts += 1;
    }
    bp = c.b1;
    op += oLen;
    tp += tLen;
  }
  for (let k = op; k < ours.length; k += 1) out.push(ours[k]);
  return { text: out.join(eol), exclude: mergeRanges(exclude), conflicts, oursOnly, theirsOnly };
}

export function mergeRanges(ranges) {
  const sorted = [...ranges].sort((x, y) => x[0] - y[0]);
  const merged = [];
  for (const [s, e] of sorted) {
    const last = merged.at(-1);
    if (last && s <= last[1] + 1) last[1] = Math.max(last[1], e);
    else merged.push([s, e]);
  }
  return merged;
}

/* Jaccard similarity of the non-blank trimmed lines of two texts. */
export function lineSimilarity(x, y) {
  const set = (t) => new Set(t.split(/\r?\n/).map(key).filter(Boolean));
  const a = set(x);
  const b = set(y);
  let common = 0;
  for (const l of a) if (b.has(l)) common += 1;
  const union = a.size + b.size - common;
  return union ? common / union : 1;
}
