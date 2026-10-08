import { type McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { configuredSource, getIndex, readBundledJson, readDoc, sourceKind, sourceLabel } from './content.js';

const SECTIONS = ['overview', 'documentation', 'technical-information', 'examples'] as const;
const SEARCH_LIMIT_DEFAULT = 8;
const SEARCH_LIMIT_MAX = 20;
const MAX_INPUT = 200;

type Index = Awaited<ReturnType<typeof getIndex>>;
type Component = Index['components'][number];
type ToolResult = { content: { text: string, type: 'text' }[], isError?: boolean };

interface IconEntry {
  name: string,
  tags: string[],
}

interface RecipeEntry {
  name: string,
  odsComponents: string[],
  reactTag: string,
  source: Record<string, unknown>,
  tags: string[],
}

interface SearchHit {
  fetch: string,
  key: string,
  score: number,
  section: string,
  snippet: string,
  title: string,
}

function text(body: string): ToolResult {
  return { content: [{ text: body, type: 'text' }] };
}

/* Business errors (unknown slug, no match…) are tool results flagged isError,
   so the assistant sees them and can correct itself; protocol errors stay for
   malformed requests. */
function fail(message: string): ToolResult {
  return { content: [{ text: message, type: 'text' }], isError: true };
}

/* Every tool only reads documentation. openWorld only when it may reach the
   network, i.e. documentation tools under ODS_DOCS_VERSION. */
function annotations(network: boolean): { destructiveHint: boolean, idempotentHint: boolean, openWorldHint: boolean, readOnlyHint: boolean } {
  return { destructiveHint: false, idempotentHint: true, openWorldHint: network, readOnlyHint: true };
}

/* A broken install (index missing) must not surface a raw ENOENT with a local
   path: the details are in the server log (see index.ts). */
async function withIndex(run: (index: Index) => Promise<ToolResult> | ToolResult): Promise<ToolResult> {
  const index = await getIndex().catch(() => undefined);
  return index ? run(index) : fail('The ODS documentation index cannot be loaded (broken install?): reinstall @ovhcloud/ods-mcp. Details are in the server log.');
}

/* Guides are identified by their page file: two pages may share a slug (the
   helpers have an overview and a documentation page). */
function guideId(guide: { url: string }): string {
  return guide.url.replace(/^\.\/|\.txt$/g, '');
}

function normalizeSlug(input: string): string {
  // Split camelCase BEFORE lowercasing (the boundary no longer exists after).
  return input.trim().replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase().replace(/\s+/g, '-');
}

/* Dash-insensitive form: "datagrid" and "data-grid" collapse to the same key. */
function compact(slug: string): string {
  return slug.replace(/-/g, '');
}

function editDistance(a: string, b: string): number {
  const row = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i += 1) {
    let previous = row[0];
    row[0] = i;
    for (let j = 1; j <= b.length; j += 1) {
      const current = row[j];
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, previous + (a[i - 1] === b[j - 1] ? 0 : 1));
      previous = current;
    }
  }
  return row[b.length];
}

function commonPrefixLength(a: string, b: string): number {
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) {
    i += 1;
  }
  return i;
}

/* Suggestion rank: substring either way, close spelling (edit distance), or a
   shared stem ("datagrid" → "data-table" through the "data" prefix). */
function suggestionScore(target: string, candidate: string): number {
  if (candidate.includes(target) || target.includes(candidate)) {
    return 0;
  }
  if (editDistance(target, candidate) <= 2) {
    return 1;
  }
  if (commonPrefixLength(target, candidate) >= 4) {
    return 2;
  }
  return Infinity;
}

function findComponent(index: Index, slug: string): { component?: Component, error?: string } {
  const wanted = normalizeSlug(slug);
  if (!wanted) {
    return { error: 'Missing component slug. Use list_components to see every slug.' };
  }
  const component = index.components.find((c) => c.slug === wanted)
    // Dash-insensitive rescue: "formfield" or "datatable" resolve directly.
    ?? index.components.find((c) => compact(c.slug) === compact(wanted));
  if (component) {
    return { component };
  }

  const target = compact(wanted);
  const close = index.components
    .map((c) => ({ score: suggestionScore(target, compact(c.slug)), slug: c.slug }))
    .filter((entry) => entry.score !== Infinity)
    .sort((a, b) => a.score - b.score)
    .slice(0, 5)
    .map((entry) => entry.slug);
  return { error: `Unknown component "${slug}".${close.length ? ` Did you mean: ${close.join(', ')}?` : ''} Use list_components to see every slug.` };
}

/* Reads a page and prefixes its provenance (never a local path, see content.ts). */
async function pageAnswer(url: string, notice = ''): Promise<ToolResult> {
  try {
    const body = await readDoc(url);
    return text(`_source: ${sourceLabel()}_\n${notice ? `_note: ${notice}_\n` : ''}\n${body}`);
  } catch {
    return fail(`Cannot read the documentation page ${url.replace(/^\.\//, '')} from the ${sourceKind()} documentation set. Failures are not retried: restart the server once the cause is fixed.`);
  }
}

/* Page files start with a `---` metadata block: search and snippets skip it. */
function stripFrontMatter(body: string): string {
  const match = /^---\r?\n[\s\S]*?\r?\n---\r?\n/.exec(body);
  return match ? body.slice(match[0].length) : body;
}

function scoreEntry(terms: string[], title: string, body: string): { at: number, score: number } {
  const lowerTitle = title.toLowerCase();
  const lowerBody = body.toLowerCase();
  let score = terms.reduce((res, t) => res + (lowerTitle.includes(t) ? 5 : 0), 0);
  score += terms.reduce((res, t) => res + Math.min(lowerBody.split(t).length - 1, 10), 0);
  const first = terms.find((t) => lowerBody.includes(t));
  return { at: first ? lowerBody.indexOf(first) : 0, score };
}

async function registerTools(server: McpServer): Promise<void> {
  const docsNetwork = configuredSource.kind === 'pinned';

  server.registerTool('list_components', {
    annotations: annotations(docsNetwork),
    description: 'List every component of the OVHcloud Design System (ODS) with its documentation sections. Call this first when unsure of a component slug.',
    inputSchema: z.object({}).strict(),
    title: 'List ODS components',
  }, () => withIndex((index) => {
    const lines = index.components.map((c) => `- ${c.slug} (${c.title}) — sections: ${Object.keys(c.pages).join(', ')}`);
    return text(`ODS ${index.version} — ${index.components.length} components:\n${lines.join('\n')}`);
  }));

  server.registerTool('get_component', {
    annotations: annotations(docsNetwork),
    description: 'Get the documentation of an ODS component. Sections: overview (default, short), documentation (usage, props overview, best practices), technical-information (full props/types/CSS variables), examples (code snippets for every variant).',
    inputSchema: z.object({
      section: z.enum(SECTIONS).optional().describe('Documentation section, defaults to overview'),
      slug: z.string().max(MAX_INPUT).describe('Component slug, e.g. "button", "form-field", "datepicker"'),
    }).strict(),
    title: 'Get ODS component documentation',
  }, ({ section, slug }) => withIndex((index) => {
    const { component, error } = findComponent(index, slug);
    if (!component) {
      return fail(error!);
    }
    const requested = section ?? 'overview';
    if (component.pages[requested]) {
      return pageAnswer(component.pages[requested].url);
    }
    if (requested !== 'overview' && component.pages['overview']) {
      return pageAnswer(
        component.pages['overview'].url,
        `${component.slug} has no "${requested}" section, showing overview instead (available: ${Object.keys(component.pages).join(', ')})`,
      );
    }
    return fail(`${component.slug} has no "${requested}" documentation page. Available sections: ${Object.keys(component.pages).join(', ') || 'none'}.`);
  }));

  server.registerTool('get_component_api', {
    annotations: annotations(docsNetwork),
    description: 'Get the full API of an ODS component: props (name, type, required, default), exported types/enums and CSS customization variables. Shortcut for get_component with section technical-information.',
    inputSchema: z.object({
      slug: z.string().max(MAX_INPUT).describe('Component slug, e.g. "select"'),
    }).strict(),
    title: 'Get ODS component API',
  }, ({ slug }) => withIndex((index) => {
    const { component, error } = findComponent(index, slug);
    if (!component) {
      return fail(error!);
    }
    if (component.pages['technical-information']) {
      return pageAnswer(component.pages['technical-information'].url);
    }
    if (component.pages['overview']) {
      return pageAnswer(component.pages['overview'].url, `${component.slug} has no technical-information section, showing overview instead`);
    }
    return fail(`${component.slug} has no API documentation page.`);
  }));

  server.registerTool('search_docs', {
    annotations: annotations(docsNetwork),
    description: 'Full-text search across the whole ODS documentation (components and guides). Returns the best matching page per component with a snippet; then fetch the full page with get_component or get_guide.',
    inputSchema: z.object({
      limit: z.number().int().min(1).max(SEARCH_LIMIT_MAX).optional().describe(`Maximum number of results, defaults to ${SEARCH_LIMIT_DEFAULT}`),
      query: z.string().max(MAX_INPUT).describe('Free-text query, e.g. "form validation error message"'),
      section: z.enum([...SECTIONS, 'guide']).optional().describe('Restrict the search to one section type ("guide" for guides)'),
    }).strict(),
    title: 'Search ODS documentation',
  }, ({ limit, query, section }) => withIndex(async(index) => {
    // Unicode-aware split: "élément" stays one term instead of "ment".
    const terms = query.toLowerCase().split(/[^\p{L}\p{N}]+/u).filter((t) => t.length > 2);
    if (terms.length === 0) {
      return fail('Query too short: use at least one word of 3 characters or more.');
    }

    const entries = [
      ...index.components.flatMap((c) => Object.entries(c.pages).map(([sectionName, page]) => ({
        fetch: `get_component slug=${c.slug} section=${sectionName}`, key: c.slug, section: sectionName, title: c.title, url: page.url,
      }))),
      ...index.generic.map((g) => ({ fetch: `get_guide slug=${guideId(g)}`, key: guideId(g), section: 'guide', title: g.title, url: g.url })),
    ].filter((entry) => !section || entry.section === section);

    // Remote source: scoring every page would mean hundreds of fetches — fall
    // back to title matching, which still routes the agent to the right page.
    const titleOnly = sourceKind() === 'pinned';
    let unreadable = 0;
    const hits = await Promise.all(entries.map(async(entry): Promise<SearchHit | null> => {
      let body = '';
      if (!titleOnly) {
        try {
          body = stripFrontMatter(await readDoc(entry.url));
        } catch {
          // One missing page must not take the whole search down.
          unreadable += 1;
        }
      }
      const { at, score } = scoreEntry(terms, entry.title, body);
      if (score === 0) {
        return null;
      }
      const snippet = body ? body.slice(Math.max(0, at - 80), at + 180).replace(/\s+/g, ' ').trim() : '';
      return { fetch: entry.fetch, key: entry.key, score, section: entry.section, snippet, title: entry.title };
    }));

    // One result per component (or guide): its best-scoring section.
    const best = new Map<string, SearchHit>();
    for (const hit of hits) {
      if (hit && (best.get(hit.key)?.score ?? -1) < hit.score) {
        best.set(hit.key, hit);
      }
    }
    const top = [...best.values()].sort((a, b) => b.score - a.score).slice(0, limit ?? SEARCH_LIMIT_DEFAULT);

    const notes = [
      titleOnly ? '_note: title-only search (ODS_DOCS_VERSION serves remote documentation, page bodies are not scanned)._' : '',
      unreadable ? `_note: ${unreadable} page(s) could not be read and were skipped._` : '',
    ].filter(Boolean);
    if (top.length === 0) {
      return fail([...notes, `No match for "${query}". Try list_components or get_guide.`].join('\n'));
    }
    const results = top.map((r) => `## ${r.title} (${r.section}) — fetch with: ${r.fetch}${r.snippet ? `\n…${r.snippet}…` : ''}`);
    return text([...notes, ...results].join('\n\n'));
  }));

  server.registerTool('get_guide', {
    annotations: annotations(docsNetwork),
    description: 'Get an ODS guide (get started, forms, accessibility, migrations, design tokens…). Call without slug to list every available guide.',
    inputSchema: z.object({
      slug: z.string().max(MAX_INPUT).optional().describe('Guide slug or a distinctive part of it (3+ characters), e.g. "get-started", "migration-19-x-to-20-x"'),
    }).strict(),
    title: 'Get ODS guide',
  }, ({ slug }) => withIndex((index) => {
    const wanted = normalizeSlug(slug ?? '');
    if (!wanted) {
      return text(`${index.generic.length} guides:\n${index.generic.map((g) => `- ${guideId(g)} (${g.title}${g.type === 'overview' ? '' : `, ${g.type}`})`).join('\n')}`);
    }
    const partial = wanted.length >= 3;
    const guide = index.generic.find((g) => guideId(g) === wanted)
      ?? index.generic.find((g) => g.slug === wanted)
      ?? index.generic.find((g) => compact(g.slug) === compact(wanted))
      ?? (partial ? index.generic.find((g) => g.slug.endsWith(`-${wanted}`)) : undefined)
      ?? (partial ? index.generic.find((g) => g.slug.includes(wanted)) : undefined);
    if (!guide) {
      return fail(`Unknown guide "${slug}". Call get_guide without argument to list them.`);
    }
    return pageAnswer(guide.url);
  }));

  const iconCount = await readBundledJson<IconEntry[]>('icons.json').then((icons) => icons.length, () => 0);
  server.registerTool('list_icons', {
    annotations: annotations(false),
    description: `Search the ODS icon set${iconCount ? ` (${iconCount} icons)` : ''} by name or meaning (aliases like "settings", "delete", "warning" are indexed). Returns icon names usable as <Icon name="…">.`,
    inputSchema: z.object({
      filter: z.string().max(MAX_INPUT).optional().describe('Substring matched against icon names and search aliases; omit to list everything'),
    }).strict(),
    title: 'Search ODS icons',
  }, async({ filter }) => {
    const icons = await readBundledJson<IconEntry[]>('icons.json');
    const needle = filter?.toLowerCase().trim();
    const matches = needle
      ? icons.filter((i) => i.name.includes(needle) || i.tags.some((t) => t.includes(needle)))
      : icons;
    if (matches.length === 0) {
      return fail(`No icon matching "${filter}".`);
    }
    return text(`${matches.length} icon(s):\n${matches.map((i) => `- ${i.name}${i.tags.length ? ` (aliases: ${i.tags.join(', ')})` : ''}`).join('\n')}`);
  });

  server.registerTool('get_tokens', {
    annotations: annotations(false),
    description: 'Get the ODS design tokens (CSS custom properties of the default theme): colors, spacing, fonts, radii… Filter by substring, e.g. "color-critical", "spacing", "font".',
    inputSchema: z.object({
      filter: z.string().max(MAX_INPUT).optional().describe('Substring matched against token names; omit to list everything'),
    }).strict(),
    title: 'Get ODS design tokens',
  }, async({ filter }) => {
    const tokens = await readBundledJson<Record<string, Record<string, string>>>('tokens.json');
    const needle = filter?.toLowerCase().trim();
    const lines: string[] = [];
    for (const [group, values] of Object.entries(tokens)) {
      for (const [name, value] of Object.entries(values)) {
        if (!needle || name.toLowerCase().includes(needle)) {
          lines.push(`${name}: ${value};${group === 'root' ? '' : ` /* ${group} */`}`);
        }
      }
    }
    if (lines.length === 0) {
      return fail(`No token matching "${filter}".`);
    }
    return text(`${lines.length} token(s):\n${lines.join('\n')}`);
  });

  server.registerTool('get_recipe', {
    annotations: annotations(false),
    description: 'Get an ODS recipe: a ready-made UI pattern combining several components (chat, status modal…), with its full source code. Call without name to list every recipe.',
    inputSchema: z.object({
      name: z.string().max(MAX_INPUT).optional().describe('Recipe key, e.g. "chat"'),
    }).strict(),
    title: 'Get ODS recipe',
  }, async({ name }) => {
    const data = await readBundledJson<{ component: Record<string, RecipeEntry> }>('recipes.json');
    const wanted = normalizeSlug(name ?? '');
    if (!wanted) {
      // odsComponents comes from parsing the recipes' import statements, so it
      // mixes in SCREAMING_CASE enums and type imports: keep the components only.
      const lines = Object.entries(data.component).map(([key, r]) => `- ${key} (${r.name}) — tags: ${r.tags.join(', ')} — uses: ${r.odsComponents.filter((c) => !c.includes('_') && !c.startsWith('type ')).join(', ')}`);
      return text(`${lines.length} recipes:\n${lines.join('\n')}`);
    }
    // Same normalization as component and guide slugs: "data grid", "DataGrid"
    // and "datagrid" all reach the data-grid recipe.
    const entry = Object.entries(data.component).find(([key]) => normalizeSlug(key) === wanted)
      ?? Object.entries(data.component).find(([key]) => compact(normalizeSlug(key)) === compact(wanted));
    if (!entry) {
      return fail(`Unknown recipe "${name}". Available: ${Object.keys(data.component).join(', ')}.`);
    }
    const [, recipe] = entry;
    const sources = Object.entries(recipe.source).map(([variant, files]) => {
      const parts = typeof files === 'string'
        ? files
        : Object.entries(files as Record<string, string>).map(([file, code]) => `### ${file}\n\`\`\`\n${code}\n\`\`\``).join('\n\n');
      return `## ${variant}\n${parts}`;
    });
    return text(`# Recipe: ${recipe.name} (<${recipe.reactTag}>)\nODS components used: ${recipe.odsComponents.join(', ')}\n\n${sources.join('\n\n')}`);
  });
}

export { registerTools };
