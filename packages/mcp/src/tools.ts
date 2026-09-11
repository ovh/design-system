import { type McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { getIndex, readBundledJson, readDoc, source } from './content.js';

const SECTIONS = ['overview', 'documentation', 'technical-information', 'examples'] as const;

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

function text(body: string): { content: { text: string, type: 'text' }[] } {
  return { content: [{ text: body, type: 'text' }] };
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

async function findComponent(slug: string): Promise<{ error?: string, component?: Awaited<ReturnType<typeof getIndex>>['components'][number] }> {
  const index = await getIndex();
  const wanted = normalizeSlug(slug);
  const component = index.components.find((c) => c.slug === wanted)
    // Dash-insensitive rescue: "formfield" or "datatable" resolve directly.
    ?? index.components.find((c) => compact(c.slug) === compact(wanted));
  if (component) {
    return { component };
  }

  /* Suggestions: substring either way, close spelling (edit distance), or a
     shared stem ("datagrid" → "data-table" through the "data" prefix). */
  const target = compact(wanted);
  const close = index.components
    .map((c) => {
      const candidate = compact(c.slug);
      const score = candidate.includes(target) || target.includes(candidate) ? 0
        : editDistance(target, candidate) <= 2 ? 1
          : commonPrefixLength(target, candidate) >= 4 ? 2
            : Infinity;
      return { score, slug: c.slug };
    })
    .filter((entry) => entry.score !== Infinity)
    .sort((a, b) => a.score - b.score)
    .slice(0, 5)
    .map((entry) => entry.slug);
  return { error: `Unknown component "${slug}".${close.length ? ` Did you mean: ${close.join(', ')}?` : ''} Use list_components to see every slug.` };
}

function registerTools(server: McpServer): void {
  server.registerTool('list_components', {
    description: 'List every component of the OVHcloud Design System (ODS) with its documentation sections. Call this first when unsure of a component slug.',
  }, async () => {
    const index = await getIndex();
    const lines = index.components.map((c) => `- ${c.slug} (${c.title}) — sections: ${Object.keys(c.pages).join(', ')}`);
    return text(`ODS ${index.version} — ${index.components.length} components:\n${lines.join('\n')}`);
  });

  server.registerTool('get_component', {
    description: 'Get the documentation of an ODS component. Sections: overview (default, short), documentation (usage, props overview, best practices), technical-information (full props/types/CSS variables), examples (code snippets for every variant).',
    inputSchema: {
      section: z.enum(SECTIONS).optional().describe('Documentation section, defaults to overview'),
      slug: z.string().describe('Component slug, e.g. "button", "form-field", "datepicker"'),
    },
  }, async ({ section, slug }) => {
    const { component, error } = await findComponent(slug);
    if (!component) {
      return text(error!);
    }
    const page = component.pages[section ?? 'overview'] ?? component.pages['overview'];
    const body = await readDoc(page.url);
    return text(`_source: ${source.label}_\n\n${body}`);
  });

  server.registerTool('get_component_api', {
    description: 'Get the full API of an ODS component: props (name, type, required, default), exported types/enums and CSS customization variables. Shortcut for get_component with section technical-information.',
    inputSchema: {
      slug: z.string().describe('Component slug, e.g. "select"'),
    },
  }, async ({ slug }) => {
    const { component, error } = await findComponent(slug);
    if (!component) {
      return text(error!);
    }
    const page = component.pages['technical-information'] ?? component.pages['overview'];
    return text(`_source: ${source.label}_\n\n${await readDoc(page.url)}`);
  });

  server.registerTool('search_docs', {
    description: 'Full-text search across the whole ODS documentation (components and guides). Returns the best matching pages with a snippet; then fetch the full page with get_component or get_guide.',
    inputSchema: {
      query: z.string().describe('Free-text query, e.g. "form validation error message"'),
    },
  }, async ({ query }) => {
    const index = await getIndex();
    const terms = query.toLowerCase().split(/\W+/).filter((t) => t.length > 2);
    if (terms.length === 0) {
      return text('Query too short.');
    }

    const entries = [
      ...index.components.flatMap((c) => Object.entries(c.pages).map(([sectionName, page]) => ({
        fetch: `get_component slug=${c.slug} section=${sectionName}`, section: sectionName, title: c.title, url: page.url,
      }))),
      ...index.generic.map((g) => ({ fetch: `get_guide slug=${g.slug}`, section: 'guide', title: g.title, url: g.url })),
    ];

    // Remote source: scoring every page would mean hundreds of fetches — fall
    // back to title matching, which still routes the agent to the right page.
    const fullText = source.kind !== 'pinned';
    const scored = [];
    for (const entry of entries) {
      const title = entry.title.toLowerCase();
      let score = terms.reduce((res, t) => res + (title.includes(t) ? 5 : 0), 0);
      let body = '';
      if (fullText) {
        body = (await readDoc(entry.url)).toLowerCase();
        score += terms.reduce((res, t) => res + Math.min(body.split(t).length - 1, 10), 0);
      }
      if (score > 0) {
        const at = body ? Math.max(0, body.indexOf(terms.find((t) => body.includes(t)) ?? '')) : 0;
        scored.push({ ...entry, score, snippet: body ? body.slice(Math.max(0, at - 80), at + 180).replace(/\s+/g, ' ') : '' });
      }
    }
    scored.sort((a, b) => b.score - a.score);
    const top = scored.slice(0, 8);
    if (top.length === 0) {
      return text(`No match for "${query}". Try list_components or get_guide.`);
    }
    return text(top.map((r) => `## ${r.title} (${r.section}) — fetch with: ${r.fetch}\n…${r.snippet}…`).join('\n\n'));
  });

  server.registerTool('get_guide', {
    description: 'Get an ODS guide (get started, forms, accessibility, migrations, design tokens…). Call without slug to list every available guide.',
    inputSchema: {
      slug: z.string().optional().describe('Guide slug or a distinctive part of it, e.g. "get-started", "migration-19-x-to-20-x"'),
    },
  }, async ({ slug }) => {
    const index = await getIndex();
    if (!slug) {
      return text(`${index.generic.length} guides:\n${index.generic.map((g) => `- ${g.slug} (${g.title})`).join('\n')}`);
    }
    const wanted = normalizeSlug(slug);
    const guide = index.generic.find((g) => g.slug === wanted)
      ?? index.generic.find((g) => g.slug.endsWith(wanted) || g.slug.includes(wanted));
    if (!guide) {
      return text(`Unknown guide "${slug}". Call get_guide without argument to list them.`);
    }
    return text(`_source: ${source.label}_\n\n${await readDoc(guide.url)}`);
  });

  server.registerTool('list_icons', {
    description: 'Search the ODS icon set (500+ icons) by name or meaning (aliases like "settings", "delete", "warning" are indexed). Returns icon names usable as <Icon name="…">.',
    inputSchema: {
      filter: z.string().optional().describe('Substring matched against icon names and search aliases; omit to list everything'),
    },
  }, async ({ filter }) => {
    const icons = await readBundledJson<IconEntry[]>('icons.json');
    const needle = filter?.toLowerCase().trim();
    const matches = needle
      ? icons.filter((i) => i.name.includes(needle) || i.tags.some((t) => t.includes(needle)))
      : icons;
    if (matches.length === 0) {
      return text(`No icon matching "${filter}".`);
    }
    return text(`${matches.length} icon(s):\n${matches.map((i) => `- ${i.name}${i.tags.length ? ` (aliases: ${i.tags.join(', ')})` : ''}`).join('\n')}`);
  });

  server.registerTool('get_tokens', {
    description: 'Get the ODS design tokens (CSS custom properties of the default theme): colors, spacing, fonts, radii… Filter by substring, e.g. "color-critical", "spacing", "font".',
    inputSchema: {
      filter: z.string().optional().describe('Substring matched against token names; omit to list everything'),
    },
  }, async ({ filter }) => {
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
      return text(`No token matching "${filter}".`);
    }
    return text(`${lines.length} token(s):\n${lines.join('\n')}`);
  });

  server.registerTool('get_recipe', {
    description: 'Get an ODS recipe: a ready-made UI pattern combining several components (chat, confirmation modal…), with its full source code. Call without name to list every recipe.',
    inputSchema: {
      name: z.string().optional().describe('Recipe key, e.g. "chat"'),
    },
  }, async ({ name }) => {
    const data = await readBundledJson<{ component: Record<string, RecipeEntry> }>('recipes.json');
    if (!name) {
      const lines = Object.entries(data.component).map(([key, r]) => `- ${key} (${r.name}) — tags: ${r.tags.join(', ')} — uses: ${r.odsComponents.filter((c) => !c.includes('_') && !c.startsWith('type ')).join(', ')}`);
      return text(`${lines.length} recipes:\n${lines.join('\n')}`);
    }
    const key = name.trim().toLowerCase();
    const recipe = data.component[key];
    if (!recipe) {
      return text(`Unknown recipe "${name}". Available: ${Object.keys(data.component).join(', ')}.`);
    }
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
