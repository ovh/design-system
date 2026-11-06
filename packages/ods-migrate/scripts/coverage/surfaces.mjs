/*
 * The two type surfaces of the coverage harness, built without an install.
 *
 * Each surface is the ods-react (and themes) sources of one git ref, extracted with `git archive`
 * into a cache folder keyed by the commit, plus `node_modules` symlinks to dependencies that are
 * already installed:
 *   <cache>/<sha>/packages/ods-react/src/…        the sources, resolved through tsconfig `paths`
 *   <cache>/<sha>/packages/ods-react/node_modules  → the ods-react deps of that major (optional)
 *   <cache>/<sha>/node_modules                     → the workspace deps (fallback)
 *   <cache>/<sha>/ambient.d.ts                     `*.scss`, `*.css`, assets
 * React and its types are pinned through `paths` for every file of the program (the corpus, the
 * ODS sources and their dependencies' .d.ts), so that the v19 and the v20 runs only differ by ODS.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { join } from 'node:path';

const ARCHIVED = ['packages/ods-react/src', 'packages/ods-react/package.json', 'packages/themes/src', 'packages/themes/package.json'];
const AMBIENT = `declare module '*.css';
declare module '*.scss';
declare module '*.sass';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.gif';
declare module '*.webp';
declare module '*.woff2';
`;

export function loadTypeScript(dir) {
  return createRequire(join(dir, 'package.json'))(dir);
}

export function revParse(repo, ref) {
  return execFileSync('git', ['-C', repo, 'rev-parse', '--verify', `${ref}^{commit}`], { encoding: 'utf8' }).trim();
}

/* Extracts the sources of `ref` once per commit; a later run reuses the folder. */
export function prepareSurface({ cache, repo, ref, deps, packageDeps }) {
  const sha = revParse(repo, ref);
  const root = join(cache, sha.slice(0, 12));
  const done = join(root, '.complete');
  if (!existsSync(done)) {
    rmSync(root, { force: true, recursive: true });
    mkdirSync(root, { recursive: true });
    const tar = execFileSync('git', ['-C', repo, 'archive', '--format=tar', sha, ...ARCHIVED], { maxBuffer: 1 << 30 });
    execFileSync('tar', ['-x', '-C', root], { input: tar });
    writeFileSync(join(root, 'ambient.d.ts'), AMBIENT);
    writeFileSync(done, `${ref} ${sha}\n`);
  }
  link(join(root, 'node_modules'), deps);
  if (packageDeps) link(join(root, 'packages/ods-react/node_modules'), packageDeps);
  return { ref, sha, root, src: join(root, 'packages/ods-react/src'), themes: join(root, 'packages/themes/src') };
}

function link(at, target) {
  if (existsSync(at)) return;
  if (!existsSync(target)) throw new Error(`dependency folder not found: ${target}`);
  symlinkSync(target, at, 'dir');
}

/*
 * The compiler options of a run against `surface`. `reactTypes` is the folder of the @types/react
 * every file reads (the corpus's own, by default the workspace one).
 */
export function compilerOptions(ts, surface, { reactTypes, reactDomTypes, strict = false, checkJs = false }) {
  return {
    allowImportingTsExtensions: true,
    allowJs: checkJs,
    checkJs,
    esModuleInterop: true,
    jsx: ts.JsxEmit.ReactJSX,
    lib: ['lib.es2022.d.ts', 'lib.dom.d.ts', 'lib.dom.iterable.d.ts'],
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    noEmit: true,
    // TypeScript 6 checks `import './x.css'` by default: the apps measured (TypeScript 5) do not, and
    // a stylesheet import the migration splits would read as a new error.
    noUncheckedSideEffectImports: false,
    resolveJsonModule: true,
    resolvePackageJsonImports: true,
    skipLibCheck: true,
    strict,
    target: ts.ScriptTarget.ES2022,
    types: [],
    paths: {
      '@ovhcloud/ods-react': [join(surface.src, 'index.ts')],
      '@ovhcloud/ods-react/*': [join(surface.src, 'components/*/src/index.ts')],
      '@ovhcloud/ods-themes': [join(surface.themes, 'index.ts')],
      react: [join(reactTypes, 'index.d.ts')],
      'react/*': [join(reactTypes, '*')],
      'react-dom': [join(reactDomTypes, 'index.d.ts')],
      'react-dom/*': [join(reactDomTypes, '*')],
    },
  };
}

/* The specifiers the surface owns (ODS, React): a corpus `paths` or workspace package never remaps them. */
export function pinnedSpecifiers(options) {
  return Object.keys(options.paths ?? {});
}

/* Compiles a two-line probe against the surface: proves ODS resolves and is typed (not `any`). */
export function probeSurface(ts, surface, options, workDir) {
  const dir = join(workDir, `probe-${surface.sha.slice(0, 12)}`);
  mkdirSync(dir, { recursive: true });
  const file = join(dir, 'probe.tsx');
  writeFileSync(file, `import { Text } from '@ovhcloud/ods-react';
export const ok = <Text>probe</Text>;
// @ts-expect-error an unknown prop must be an error: the surface is typed
export const ko = <Text odsCoverageProbe />;
`);
  const program = ts.createProgram([file, join(surface.root, 'ambient.d.ts')], options);
  const diagnostics = ts.getPreEmitDiagnostics(program).filter((d) => d.file?.fileName === file);
  const resolved = program.getSourceFiles().some((f) => f.fileName.startsWith(surface.src));
  return { ok: resolved && diagnostics.length === 0, resolved, messages: diagnostics.map((d) => ts.flattenDiagnosticMessageText(d.messageText, ' ')) };
}
