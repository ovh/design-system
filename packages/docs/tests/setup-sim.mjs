// Assembles a gh-pages-like tree from the docs build: dist as the current
// version, a latest symlink, the SPA 404 bounce page and the root llms.txt —
// the same shape scripts/generate-gh-pages.mjs deploys (minus the npm
// archive of previous versions, which needs network).
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const VERSION = JSON.parse(readFileSync(resolve(here, '../../../lerna.json'), 'utf8')).version;

function setupSim() {
  const dist = resolve(here, '..', 'dist');
  if (!existsSync(join(dist, 'index.html'))) {
    throw new Error('packages/docs/dist missing — run `pnpm build` first');
  }
  const simRoot = resolve(here, '.sim');
  const site = join(simRoot, 'design-system');
  rmSync(simRoot, { force: true, recursive: true });
  mkdirSync(site, { recursive: true });
  cpSync(dist, join(site, `v${VERSION}`), { recursive: true });
  symlinkSync(`v${VERSION}`, join(site, 'latest'));
  cpSync(resolve(here, '../../../scripts/gh-pages-404.html'), join(site, '404.html'));
  writeFileSync(join(site, 'llms.txt'), [
    '# OVHcloud Design System Documentation for LLMs',
    '',
    `Current version: ${VERSION}`,
    '',
    '- [Entry point](./latest/llms/llms.txt)',
    `- [v${VERSION}](./v${VERSION}/llms/llms.txt)`,
    '',
  ].join('\n'));
  return { simRoot, site, version: VERSION };
}

export { setupSim };
