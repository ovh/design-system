// Offline snippet audit (seconds): regenerates every open-in-sandbox
// snippet with the REAL extractor and builder (transpiled on the fly) and
// parses it with TypeScript. Catches generator syntax regressions without a
// browser; the opt-in `sandbox` suite still covers semantics and runtime.
import { readFileSync, readdirSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const ts = require('typescript');

async function loadTsModule(path) {
  const src = readFileSync(path, 'utf8');
  const js = ts.transpileModule(src, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
  return import(`data:text/javascript,${encodeURIComponent(js)}`);
}

async function suite() {
  const { EXCLUDED_STORIES, extractStorySources } = await loadTsModule(resolve(here, '../src/demo/extractSource.ts'));
  const { buildSandboxSnippet } = await loadTsModule(resolve(here, '../src/demo/sandboxSnippet.ts'));
  const storiesRoot = resolve(here, '../../storybook/stories/components');
  const dirs = readdirSync(storiesRoot, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name).sort();

  let total = 0;
  const failures = [];
  for (const component of dirs) {
    const raw = readFileSync(resolve(storiesRoot, component, `${component}.stories.tsx`), 'utf8');
    for (const [name, source] of Object.entries(extractStorySources(raw))) {
      if (EXCLUDED_STORIES.has(name)) {
        continue;
      }
      total++;
      const importsMatch = new RegExp(`export const ${name}[\\s\\S]{0,600}?imports: \`([^\`]*)\``).exec(raw);
      const snippet = buildSandboxSnippet(source, importsMatch?.[1]);
      const out = ts.transpileModule(snippet, { compilerOptions: { jsx: ts.JsxEmit.React, module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 }, reportDiagnostics: true });
      const errors = (out.diagnostics ?? []).filter((d) => d.category === ts.DiagnosticCategory.Error);
      if (errors.length) {
        failures.push(`KO  ${component}/${name} — ${ts.flattenDiagnosticMessageText(errors[0].messageText, ' ').slice(0, 80)}`);
      }
    }
  }
  failures.push(`${failures.some((l) => l.startsWith('KO')) ? 'KO ' : 'OK '} snippets: ${total - failures.length}/${total} valides syntaxiquement`);
  return failures;
}

export { suite };
