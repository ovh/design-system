import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { type Plugin } from 'vite';
import { extractStorySources } from './src/demo/extractSource';

/* PoC of the llms invariant (CDC P1): the platform emits its llms output
   natively at build time, from the exact same source-extraction the pages
   render — no post-build scraping of the DOM. The real implementation will
   walk the neutral content model; this walks the PoC test components. */

const here = dirname(fileURLToPath(import.meta.url));

const COMPONENTS = ['button', 'command', 'datepicker'];

function llmsEmit(): Plugin {
  return {
    name: 'ods-docs:llms-emit',
    apply: 'build',
    closeBundle() {
      const outDir = resolve(here, 'dist', 'llms');
      mkdirSync(outDir, { recursive: true });
      const index: { component: string, demos: string[], file: string }[] = [];

      for (const component of COMPONENTS) {
        const storiesPath = resolve(here, `../storybook/stories/components/${component}/${component}.stories.tsx`);
        const sources = extractStorySources(readFileSync(storiesPath, 'utf8'));
        const demos = Object.keys(sources);
        const file = `react-components-${component}--demos.txt`;

        const body = [
          '---',
          `component: ${component}`,
          `demos: ${demos.length}`,
          'generated-by: ods-docs (native build emit, no scraping)',
          '---',
          '',
          ...demos.flatMap((name) => [`## ${name}`, '', '```tsx', sources[name], '```', '']),
        ].join('\n');

        writeFileSync(resolve(outDir, file), body, 'utf8');
        index.push({ component, demos, file });
      }

      writeFileSync(resolve(outDir, 'llms-index.json'), `${JSON.stringify(index, null, 2)}\n`, 'utf8');
      this.info(`llms: ${index.length} components emitted natively`);
    },
  };
}

export { llmsEmit };
