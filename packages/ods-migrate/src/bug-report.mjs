/*
 * What an internal error gives the integrator: a bug in ods-migrate, as opposed to an error about one
 * of their files, which has its own message. Without any option, the run writes what the ODS team
 * needs into a file of the system temp folder (never into the project: a dry run writes nothing) and
 * says how to send it, so that nobody has to come back for the stack, the versions or the file.
 *
 * The report goes into a public issue: every text in it is scrubbed of the paths of the machine.
 */
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { arch, homedir, platform, release, tmpdir } from 'node:os';
import { dirname, join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const BUG_REPORT_FILE = 'ods-migrate-bug-report.md';
const ISSUES = 'https://github.com/ovh/design-system/issues/new';
const PACKAGE_DIR = fileURLToPath(new URL('..', import.meta.url));

const toolVersion = () => {
  try {
    return JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8')).version;
  } catch {
    return 'unknown';
  }
};

/* The ODS packages the scanned package.json files declare, each range once. */
function odsVersions(manifests) {
  const found = new Set();
  for (const path of manifests) {
    try {
      const manifest = JSON.parse(readFileSync(path, 'utf8').replace(/^\uFEFF/, ''));
      const all = { ...manifest.dependencies, ...manifest.devDependencies, ...manifest.peerDependencies };
      Object.entries(all).filter(([name]) => /^@ovhcloud\/ods-/.test(name)).forEach(([name, range]) => found.add(`${name} ${range}`));
    } catch {
      // A package.json the run could not read is reported by the run itself.
    }
  }
  return [...found].sort();
}

/*
 * A text with the paths of the machine replaced, the longest first: the package, the project, the
 * temp folder, the home folder (its user name), in their POSIX, Windows and file:// spellings. What
 * is left of an absolute path keeps only its last two segments.
 */
function scrubber(cwd) {
  const roots = [[PACKAGE_DIR, '<ods-migrate>'], [cwd, '<project>'], [tmpdir(), '<tmp>'], [homedir(), '<home>']]
    // A root (`/`, `C:\`, HOME=/ in a container) would be split at every slash.
    .filter(([dir]) => dir && dirname(dir) !== dir)
    .flatMap(([dir, label]) => {
      const bare = dir.replace(/[\\/]+$/, '');
      const posix = bare.replaceAll('\\', '/');
      return [bare, posix, encodeURI(posix), `/private${posix}`].map((spelling) => [spelling, label]);
    })
    .sort(([a], [b]) => b.length - a.length)
    // Whatever the case: Windows and macOS spell a path in any case (`c:\users\jdoe`).
    .map(([spelling, label]) => [new RegExp(spelling.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&'), 'gi'), label]);
  return (text) => {
    let out = String(text ?? '');
    for (const [spelling, label] of roots) {
      out = out.replace(spelling, label);
    }
    // Absolute paths outside those roots (a file read with ../, a dependency installed elsewhere), where
    // a path starts: a relative path keeps its slashes.
    return out.replace(/(?<=^|[\s('"`]|file:\/\/)(?:[A-Za-z]:[\\/]|\/)(?:[^\s:()'"`\\/]+[\\/]){2,}([^\s:()'"`\\/]+[\\/][^\s:()'"`\\/]+)/g, (_, tail) => `…/${tail.replaceAll('\\', '/')}`);
  };
}

/*
 * The frames of a stack with the runs of a repeated pattern collapsed: a stack overflow fills the 10
 * frames V8 keeps with one function, or two that call each other through a callback.
 */
function collapse(lines) {
  const out = [];
  for (let i = 0; i < lines.length;) {
    let best = null;
    for (let period = 1; period <= 4; period++) {
      let repeats = 0;
      while (i + (repeats + 2) * period <= lines.length
        && lines.slice(i, i + period).every((line, k) => line === lines[i + (repeats + 1) * period + k])) {
        repeats++;
      }
      if (repeats > 0 && (!best || repeats * period > best.repeats * best.period)) best = { period, repeats };
    }
    if (best && best.repeats * best.period >= 3) {
      out.push(...lines.slice(i, i + best.period), `    … the ${best.period === 1 ? 'same frame' : `same ${best.period} frames`} ${best.repeats} more times`);
      i += (best.repeats + 1) * best.period;
    } else {
      out.push(lines[i]);
      i++;
    }
  }
  return out;
}

// An argument as a POSIX shell reads it back (sh, bash, zsh): quoted when it holds a space, a glob or a quote.
const quote = (arg) => (/^[\w@%+=:,./\\-]+$/.test(arg) ? arg : `'${String(arg).replaceAll("'", "'\\''")}'`);

/**
 * Writes the bug report into the system temp folder and returns the lines to print.
 * `failures`: [{ error, file, index, scanned }] (`file` null for an error that stopped the run, `index`
 * true for a file the project index failed on, `scanned` true for a file the run migrates);
 * `argv`: the arguments of the run; `manifests`: the package.json files it scanned; `write`: the
 * run had --write (the files that went through were written).
 */
function reportBug(options) {
  // The report must never hide the error it reports, nor stop the run that reports it.
  try {
    return writeReport(options);
  } catch (error) {
    // A file system error names its path: its code says enough; any other message is scrubbed too.
    let reason = error?.code;
    try {
      reason ??= scrubber(options?.cwd)(error?.message ?? error);
    } catch {
      reason = 'unknown error';
    }
    return ['', `This is a bug in ods-migrate ${toolVersion()}, not in your code. The bug report could not be written (${reason}): run again with DEBUG=ods-migrate for the stack, and open an issue at ${ISSUES}.`];
  }
}

function writeReport({ argv, cwd, failures, manifests = [], write = false }) {
  const scrub = scrubber(cwd);
  const version = toolVersion();
  const firstMessage = scrub(failures[0].error?.message ?? failures[0].error).split('\n')[0];
  // An issue title: one line, short enough for the link to fit a terminal line.
  const title = `ods-migrate ${version}: ${firstMessage}`.slice(0, 120);
  const ods = odsVersions(manifests);
  const body = [
    `# ${title}`,
    '',
    'Generated by ods-migrate after an internal error: a bug in ods-migrate, not in your code.',
    'It holds the versions, the command, file names and the stack; no source code of your project.',
    '',
    '## Environment',
    '',
    `- ods-migrate ${version}`,
    `- Node ${process.version}, ${platform()} ${release()} (${arch()})`,
    `- Command: \`ods-migrate ${scrub(argv.map(quote).join(' '))}\``,
    `- ODS in the scanned package.json files: ${ods.join(', ') || 'none'}`,
    '',
    ...failures.flatMap(({ error, file, index }) => [
      `## ${file ? `File \`${scrub(relative(cwd, file).split(sep).join('/') || file)}\`` : 'The run stopped'}`,
      ...(index ? ['', 'Failed while reading this file to find the modules of the project.'] : []),
      '',
      '```',
      collapse(scrub(error?.stack ?? error).split('\n')).join('\n'),
      '```',
      '',
    ]),
  ].join('\n');

  let path = null;
  let unwritten = null;
  try {
    path = join(mkdtempSync(join(tmpdir(), 'ods-migrate-')), BUG_REPORT_FILE);
    writeFileSync(path, body);
  } catch (error) {
    path = null;
    unwritten = error?.code ?? error?.message ?? String(error);
  }
  const issue = `${ISSUES}?${new URLSearchParams({ title }).toString()}`;
  const perFile = failures.filter(({ file, scanned }) => file && scanned);
  const indexed = failures.some(({ index }) => index);
  return [
    '',
    `This is a bug in ods-migrate ${version}, not in your code.`,
    path
      ? 'Open an issue and attach this file (the stack and the versions, no source code):'
      : `The report could not be written into ${scrub(tmpdir())} (${scrub(unwritten)}): open an issue with it below (the stack and the versions, no source code):`,
    ...(path ? [`  ${path}`] : []),
    `  ${issue}`,
    ...(path ? [] : ['', body]),
    // What to do meanwhile: the files that failed, else (a file the run does not migrate) what the others did, else nothing to point at.
    perFile.length
      ? `Meanwhile, migrate ${perFile.length === 1 ? 'that file' : 'those files'} by hand; ${write ? 'the other files were written' : 'the other files went through (run with --write to apply them)'}.`
      : indexed
        ? `Meanwhile, the other files ${write ? 'were written' : 'went through (run with --write to apply them)'}.`
        : 'Meanwhile, run it on one folder at a time (ods-migrate src/a): if every run fails, the error is not in one of your files.',
    // The index failed on a module: what its importers render from it was not migrated.
    ...(indexed ? ['The files that import a file listed in the report were read without it: what they render from it may still be v19 code (your type check shows it).'] : []),
  ];
}

export { BUG_REPORT_FILE, collapse, reportBug, scrubber };
