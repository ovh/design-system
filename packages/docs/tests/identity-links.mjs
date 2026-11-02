// Offline audit (milliseconds) of the "Previous major version" link of every
// component identity card, for the previous major of today (the Stencil-era
// v18) and for the one after the v20 release (the React v19), whose storybook
// ids follow the component folder.
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

const idOf = (url) => /[?&]path=\/docs\/([^&]+)--documentation$/.exec(url)?.[1] ?? '';

async function suite() {
  const { previousMajorDocUrl } = await loadTsModule(resolve(here, '../src/doc/previousMajorDocUrl.ts'));
  const contentRoot = resolve(here, '../src/content/components');
  const cards = Object.fromEntries(readdirSync(contentRoot, { withFileTypes: true }).filter((d) => d.isDirectory()).map(({ name: folder }) => {
    const card = /<IdentityCard[\s\S]*?<\/IdentityCard>/.exec(readFileSync(resolve(contentRoot, folder, 'documentation.mdx'), 'utf8'))?.[0] ?? '';
    const startingVersion = /startingVersion=\{ ?(\d+) ?\}/.exec(card)?.[1];
    return [folder, {
      githubUrl: /githubUrl="([^"]+)"/.exec(card)?.[1] ?? '',
      name: /\bname="([^"]+)"/.exec(card)?.[1] ?? '',
      startingVersion: startingVersion ? Number(startingVersion) : undefined,
    }];
  }));
  const linkOf = (version, folder) => idOf(previousMajorDocUrl(version, cards[folder].name, cards[folder].githubUrl, cards[folder].startingVersion));

  const results = [];
  const ok = (label, pass, detail = '') => results.push(`${pass ? 'OK ' : 'KO '} ${label}${pass ? '' : ` — ${detail}`}`);

  const missing = Object.keys(cards).filter((folder) => !cards[folder].name || !cards[folder].githubUrl.endsWith(`/${folder}`));
  ok('every identity card names its component and its own folder in githubUrl', missing.length === 0, missing.join(', '));

  const wrong = Object.keys(cards)
    .map((folder) => [folder, linkOf('19.7.3', folder), (cards[folder].startingVersion ?? 0) > 19 ? '' : `react-components-${folder}`])
    .filter(([, actual, expected]) => actual !== expected);
  ok('v19 as previous major: each component born by v19 links to its folder id, the others to nothing', wrong.length === 0, wrong.map(([folder, actual]) => `${folder} → ${actual || 'no link'}`).join(', '));

  for (const [folder, expected] of [
    ['checkbox', 'ods-components-form-elements-checkbox'],
    ['radio-group', 'ods-components-form-elements-radio'],
    ['button', 'ods-components-button'],
    ['avatar', ''],
    ['command', ''],
  ]) {
    const actual = linkOf('18.6.4', folder);
    ok(`v18 as previous major: ${folder} links to ${expected || 'nothing'}`, actual === expected, actual || 'no link');
  }
  return results;
}

export { suite };
