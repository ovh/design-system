// Offline check (milliseconds) of the component outline reader the llms build uses to verify the
// outline of every component page (componentOutline.ts): only the headings a page renders count.
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const ts = require('typescript');

// A data: module resolves no bare specifier: @mdx-js/mdx is pointed at its file.
async function loadTsModule(path) {
  const src = readFileSync(path, 'utf8');
  const js = ts.transpileModule(src, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText
    .replace("from '@mdx-js/mdx'", `from '${pathToFileURL(require.resolve('@mdx-js/mdx')).href}'`);
  return import(`data:text/javascript,${encodeURIComponent(js)}`);
}

const USAGE = '<Heading label="Usage" level={ 2 } />';

async function suite() {
  const { componentOutline } = await loadTsModule(resolve(here, '../src/doc/componentOutline.ts'));
  const labels = (mdx) => componentOutline(mdx).headings.map(({ label, level }) => `${label}/${level}`).join(', ');

  const results = [];
  const ok = (label, pass, detail = '') => results.push(`${pass ? 'OK ' : 'KO '} ${label}${pass ? '' : ` — ${detail}`}`);
  const expect = (label, mdx, want) => {
    const got = labels(mdx);
    ok(label, got === want, `got [${got}], want [${want}]`);
  };

  expect('headings are read with their level', `<Heading label="Overview" level={ 2 } />\n\n<Heading label="Dos & Don'ts" level={ 3 } />`, "Overview/2, Dos & Don'ts/3");
  expect('a heading in a code block does not count', `\`\`\`mdx\n<Heading label="Navigation" level={ 2 } />\n\`\`\`\n\n${USAGE}`, 'Usage/2');
  expect('a heading in a tilde fence does not count', `~~~~\n<Heading label="Navigation" level={ 2 } />\n~~~\n~~~~\n\n${USAGE}`, 'Usage/2');
  expect('a heading in a quoted code block does not count', `> \`\`\`tsx\n> <Heading label="Navigation" level={ 2 } />\n> \`\`\`\n\n${USAGE}`, 'Usage/2');
  expect('a heading in a code block nested in a list does not count, and the next heading does',
    `- ~~~mdx\n  <Heading label="Navigation" level={ 2 } />\n  ~~~\n\n${USAGE}`, 'Usage/2');
  expect('a quoted code block left open ends with its blockquote', `> \`\`\`tsx\n> <Heading label="Navigation" level={ 2 } />\n\n${USAGE}`, 'Usage/2');
  expect('a heading in an MDX comment does not count', `{/* <Heading label="Navigation" level={ 2 } /> */}\n\n${USAGE}`, 'Usage/2');
  expect('a code fence opened in an MDX comment does not hide the next heading', `{/*\n\`\`\`\n*/}\n\n${USAGE}`, 'Usage/2');
  ok('the identity card is found', componentOutline('<IdentityCard name="Button" />').hasIdentityCard);
  ok('an identity card in a code block does not count', !componentOutline('```mdx\n<IdentityCard name="Button" />\n```').hasIdentityCard);

  return results;
}

export { suite };
