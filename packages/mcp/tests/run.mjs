// MCP server harness: spawns the built server over stdio with the official
// client and exercises every tool. Usage: node tests/run.mjs
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const PKG = resolve(dirname(fileURLToPath(import.meta.url)), '..');
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

const { tools } = await client.listTools();
check(`8 tools exposed (${tools.length})`, tools.length === 8, tools.map((t) => t.name).join(','));

const list = await call('list_components');
check('list_components → 58 components', /58 components/.test(list), list.slice(0, 120));

const overview = await call('get_component', { slug: 'button' });
check('get_component button (overview)', /button/i.test(overview) && overview.length > 200, `${overview.length} chars`);

const api = await call('get_component_api', { slug: 'select' });
check('get_component_api select mentions props', /prop/i.test(api), api.slice(0, 120));

const badSlug = await call('get_component', { slug: 'Datepicker' });
check('PascalCase slug tolerated', /datepicker/i.test(badSlug) && !/Unknown component/.test(badSlug), badSlug.slice(0, 120));

const unknown = await call('get_component', { slug: 'nonexistent-thing' });
check('unknown slug → helpful error', /Unknown component/.test(unknown), unknown.slice(0, 120));

const search = await call('search_docs', { query: 'form field validation error' });
check('search_docs finds form-field', /form/i.test(search) && /fetch with:/.test(search), search.slice(0, 160));

const guides = await call('get_guide');
check('get_guide lists 25 guides', /25 guides/.test(guides), guides.slice(0, 120));

const guide = await call('get_guide', { slug: 'get-started' });
check('get_guide get-started resolves by suffix', /install|npm|pnpm/i.test(guide), guide.slice(0, 120));

const icons = await call('list_icons', { filter: 'chevron' });
check('list_icons chevron', /chevron-down/.test(icons), icons.slice(0, 160));

const iconAlias = await call('list_icons', { filter: 'expand' });
check('list_icons matches aliases', /chevron/.test(iconAlias), iconAlias.slice(0, 160));

const tokens = await call('get_tokens', { filter: 'color-critical' });
check('get_tokens color-critical', /--ods-color-critical-500/.test(tokens), tokens.slice(0, 160));

const recipes = await call('get_recipe');
check('get_recipe lists 13 recipes', /13 recipes/.test(recipes), recipes.slice(0, 120));

const recipe = await call('get_recipe', { name: 'chat' });
check('get_recipe chat carries source code', /Recipe: Chat/.test(recipe) && /```/.test(recipe), recipe.slice(0, 120));

// Resolution order: from this package (ods-react is a workspace devDependency)
// the docs must come from the project's node_modules…
check('source resolves to project node_modules', /_source: project node_modules/.test(overview), overview.split('\n')[0]);

await client.close();

// …and from a directory with no node_modules, from the bundled snapshot.
const { tmpdir } = await import('node:os');
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
