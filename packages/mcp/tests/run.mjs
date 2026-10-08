// MCP server harness: spawns the built server over stdio with the official
// client and exercises every tool. Usage: node tests/run.mjs
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const PKG = resolve(dirname(fileURLToPath(import.meta.url)), '..');
// The harness tests what is built: it never builds itself (see build:ci).
const { existsSync } = await import('node:fs');
if (!existsSync(resolve(PKG, 'dist/index.js')) || !existsSync(resolve(PKG, 'content/recipes.json'))) {
  console.error('dist/ or content/ missing: run `pnpm --filter @ovhcloud/ods-mcp run build:ci` first.');
  process.exit(1);
}
const results = [];
const check = (label, ok, detail = '') => {
  results.push(`${ok ? 'OK ' : 'KO '} ${label}${ok ? '' : ` — ${detail}`}`);
};

const client = new Client({ name: 'ods-mcp-harness', version: '0.0.0' });
await client.connect(new StdioClientTransport({
  args: [resolve(PKG, 'dist/index.js')],
  command: process.execPath,
  cwd: PKG,
}));

const asText = (res) => res.content?.map((c) => c.text).join('\n') ?? '';
const call = async (name, args = {}) => asText(await client.callTool({ arguments: args, name }));
// Protocol-level failures (schema violations…) may come back as a thrown error
// or an isError result depending on the SDK: normalize both to { isError, text }.
const callRaw = async (params) => {
  try {
    const res = await client.callTool(params);
    return { isError: res.isError === true, text: asText(res) };
  } catch (error) {
    return { isError: true, text: String(error) };
  }
};

// Expected counts come from the data actually served, not from literals that
// move with every new component or recipe.
const { readFileSync } = await import('node:fs');
const servedIndex = JSON.parse(readFileSync(resolve(PKG, 'node_modules/@ovhcloud/ods-react/dist/llms/llms-index.json'), 'utf8'));
const componentCount = servedIndex.components.length;
const recipeCount = Object.keys(JSON.parse(readFileSync(resolve(PKG, 'content/recipes.json'), 'utf8')).component).length;

const { tools } = await client.listTools();
check(`8 tools exposed (${tools.length})`, tools.length === 8, tools.map((t) => t.name).join(','));
const unannotated = tools.filter((t) => !t.title || t.annotations?.readOnlyHint !== true || t.annotations?.destructiveHint !== false);
check('every tool has a title and read-only annotations', unannotated.length === 0, unannotated.map((t) => t.name).join(','));

const list = await call('list_components');
check(`list_components → ${componentCount} components`, new RegExp(`${componentCount} components`).test(list), list.slice(0, 120));

const overview = await call('get_component', { slug: 'button' });
check('get_component button (overview)', /button/i.test(overview) && overview.length > 200, `${overview.length} chars`);

const api = await call('get_component_api', { slug: 'select' });
check('get_component_api select mentions props', /prop/i.test(api), api.slice(0, 120));

const badSlug = await call('get_component', { slug: 'Datepicker' });
check('PascalCase slug tolerated', /datepicker/i.test(badSlug) && !/Unknown component/.test(badSlug), badSlug.slice(0, 120));

const unknown = await callRaw({ arguments: { slug: 'nonexistent-thing' }, name: 'get_component' });
check('unknown slug → helpful error flagged isError', unknown.isError && /Unknown component/.test(unknown.text), unknown.text.slice(0, 120));

const blank = await callRaw({ arguments: { slug: '  ' }, name: 'get_component' });
check('blank slug → isError without suggestions', blank.isError && !/Did you mean/.test(blank.text), blank.text.slice(0, 120));

const extra = await callRaw({ arguments: { bogus: true, slug: 'button' }, name: 'get_component' });
check('unknown argument rejected (strict schema)', extra.isError, extra.text.slice(0, 120));

const camel = await call('get_component', { slug: 'FormField' });
check('camelCase slug resolves (FormField)', !/Unknown component/.test(camel) && /form-field|form field/i.test(camel), camel.slice(0, 120));

const dashless = await call('get_component', { slug: 'datatable' });
check('dash-insensitive slug resolves (datatable)', !/Unknown component/.test(dashless), dashless.slice(0, 120));

const fuzzy = await call('get_component', { slug: 'datagrid' });
check('fuzzy suggestion (datagrid → data-table)', /Did you mean:.*data-table/.test(fuzzy), fuzzy.slice(0, 160));

const search = await call('search_docs', { query: 'form field validation error' });
check('search_docs finds form-field', /form/i.test(search) && /fetch with:/.test(search), search.slice(0, 160));

const accordion = await call('search_docs', { query: 'accordion' });
const accordionSnippet = accordion.split('\n').find((line) => line.startsWith('…')) ?? '';
check('search_docs snippet skips the front-matter', accordionSnippet !== '' && !/^…\s*---/.test(accordionSnippet), accordionSnippet.slice(0, 120));
const accordionHeads = accordion.split('\n').filter((line) => line.startsWith('## Accordion ('));
check('search_docs returns one result per component', accordionHeads.length === 1, `${accordionHeads.length} Accordion results`);

const limited = await call('search_docs', { limit: 2, query: 'button' });
check('search_docs honours limit', limited.split('\n').filter((line) => line.startsWith('## ')).length === 2, limited.slice(0, 120));

// The guide count follows the docs content: compare against the source index
// instead of hardcoding a number that moves with every new guide.
const genericCount = JSON.parse(readFileSync(resolve(PKG, '../docs/assets/llms/llms-index.json'), 'utf8')).generic.length;
const guides = await call('get_guide');
check(`get_guide lists every guide (${genericCount})`, new RegExp(`${genericCount} guides`).test(guides), guides.slice(0, 120));

const guide = await call('get_guide', { slug: 'get-started' });
check('get_guide get-started resolves by suffix', /install|npm|pnpm/i.test(guide), guide.slice(0, 120));

const icons = await call('list_icons', { filter: 'chevron' });
check('list_icons chevron', /chevron-down/.test(icons), icons.slice(0, 160));

const iconAlias = await call('list_icons', { filter: 'expand' });
check('list_icons matches aliases', /chevron/.test(iconAlias), iconAlias.slice(0, 160));

const tokens = await call('get_tokens', { filter: 'color-critical' });
check('get_tokens color-critical', /--ods-color-critical-500/.test(tokens), tokens.slice(0, 160));

const recipes = await call('get_recipe');
check(`get_recipe lists ${recipeCount} recipes`, new RegExp(`${recipeCount} recipes`).test(recipes), recipes.slice(0, 120));

const dataGrid = await callRaw({ arguments: { name: 'data grid' }, name: 'get_recipe' });
check('get_recipe "data grid" resolves', !dataGrid.isError && /Recipe: /.test(dataGrid.text), dataGrid.text.slice(0, 120));

const shortGuide = await callRaw({ arguments: { slug: 'a' }, name: 'get_guide' });
check('get_guide refuses a 1-letter partial match', shortGuide.isError, shortGuide.text.slice(0, 120));

// Clients may omit `arguments` entirely when every parameter is optional.
for (const name of ['list_components', 'get_guide', 'list_icons', 'get_tokens', 'get_recipe']) {
  const res = await callRaw({ name });
  check(`${name} without \`arguments\``, !res.isError && res.text.length > 0, res.text.slice(0, 120));
}

const recipe = await call('get_recipe', { name: 'chat' });
check('get_recipe chat carries source code', /Recipe: Chat/.test(recipe) && /```/.test(recipe), recipe.slice(0, 120));

// Resolution order: from this package (ods-react is a workspace devDependency)
// the docs must come from the project's node_modules…
check('source resolves to project node_modules', /_source: project node_modules/.test(overview), overview.split('\n')[0]);

await client.close();

// …and an installed ods-react WITHOUT dist/llms (every 19.x published before
// the docs platform) must fall through to the bundled snapshot, not crash.
const { mkdtempSync, mkdirSync, writeFileSync } = await import('node:fs');
const { join } = await import('node:path');
const { tmpdir } = await import('node:os');
const legacyDir = mkdtempSync(join(tmpdir(), 'ods-mcp-legacy-'));
mkdirSync(join(legacyDir, 'node_modules/@ovhcloud/ods-react/dist'), { recursive: true });
writeFileSync(join(legacyDir, 'node_modules/@ovhcloud/ods-react/package.json'), '{"name":"@ovhcloud/ods-react","version":"19.7.3"}');
const legacy = new Client({ name: 'ods-mcp-harness-legacy', version: '0.0.0' });
await legacy.connect(new StdioClientTransport({
  args: [resolve(PKG, 'dist/index.js')],
  command: process.execPath,
  cwd: legacyDir,
}));
const legacyDoc = asText(await legacy.callTool({ arguments: { slug: 'button' }, name: 'get_component' }));
check('pre-platform ods-react (no dist/llms) → bundled fallback', /_source: bundled/.test(legacyDoc), legacyDoc.split('\n')[0]);
await legacy.close();

// …and from a directory with no node_modules, from the bundled snapshot.
const bare = new Client({ name: 'ods-mcp-harness-bare', version: '0.0.0' });
await bare.connect(new StdioClientTransport({
  args: [resolve(PKG, 'dist/index.js')],
  command: process.execPath,
  cwd: tmpdir(),
}));
const bareDoc = asText(await bare.callTool({ arguments: { slug: 'button' }, name: 'get_component' }));
check('source falls back to bundled snapshot', /_source: bundled/.test(bareDoc), bareDoc.split('\n')[0]);
await bare.close();

for (const line of results) {
  console.log(line);
}
const failed = results.filter((l) => l.startsWith('KO')).length;
console.log(failed === 0 ? '\nAll green.' : `\n${failed} failure(s).`);
process.exit(failed ? 1 : 0);
