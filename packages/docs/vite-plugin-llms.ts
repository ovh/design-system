import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { type Plugin } from 'vite';
import guidesInventory from './src/content/guides/guides.json';
import { EXCLUDED_STORIES, extractStorySources } from './src/demo/extractSource';
import { LOCALES } from '../ods-react/src/utils/locales';
import { CHART_SERIES_COLORS } from './src/doc/ports/constants/chartColors';
import { MONO_COLORS, PALETTES, TOKEN_CATEGORY, type Token } from './src/doc/ports/constants/designTokens';
import { categorizeTokens, splitPalettes } from './src/doc/ports/helpers/designTokens';
import { parseHelper, parseTechnicalSpec, type PropRow } from './src/doc/tech/typedoc';

/* The llms invariant (CDC P1): the platform emits its llms output natively at
   build time, from the exact same sources the pages render (MDX content,
   raw CSF stories, typedoc JSON) — no post-build scraping of the DOM.

   The output honors the contract of the previous extractor, spec'd by
   packages/storybook/scripts/verify-llms.sh: same file naming, front-matter
   keys (title/slug/category/type/version/tokens/source), navigation files
   with relative links, absolute versioned front-matter sources, aggregate
   documents and the machine-readable llms-index.json. */

const here = dirname(fileURLToPath(import.meta.url));

const VERSION: string = JSON.parse(readFileSync(resolve(here, '../../lerna.json'), 'utf8')).version;
const BASE_URL = `https://ovh.github.io/design-system/v${VERSION}`;
const LLMS_URL = `${BASE_URL}/llms`;
const SITE_NAME = 'OVHcloud Design System';
const SITE_DESCRIPTION = 'OVHcloud Design System is a collection of assets, guidelines and UI components for building consistent user experiences across OVHcloud products';

// Rough token estimate (~4 characters per token) — same heuristic as the
// previous pipeline, good enough for context budgeting.
const estimateTokens = (text: string): number => Math.ceil(text.length / 4);

/* ------------------------------------------------------------------ *
 * Content inventory. Components and their pages are discovered from the
 * migrated content itself, and so is the guide list (src/content/guides);
 * guides carry their legacy llms slug so consumer URLs survive the platform
 * switch (naming came from Storybook title paths).
 * Excluded, as before: changelog, the llm-documentation meta page, tools.
 * ------------------------------------------------------------------ */

interface GuideEntry {
  mdx: string;
  slug: string;
  stories?: string;
  title: string;
}

/* The guide inventory (per-guide legacy slug/title metadata + the exclusion
   list) lives in src/content/guides/guides.json, next to the content it
   describes: this emitter, verify-llms.sh and the legacy ?path= redirects in
   src/main.tsx all consume that single file. discoverGuides() cross-checks it
   against the filesystem and fails the build loudly on any drift; exclusions
   are validated too — one without an MDX file fails the build. */
const GUIDE_EXCLUSIONS = new Set<string>(guidesInventory.exclusions);
const GUIDES: GuideEntry[] = guidesInventory.guides;

function discoverGuides(): GuideEntry[] {
  const all = readdirSync(resolve(here, 'src', 'content', 'guides'))
    .filter((name) => name.endsWith('.mdx'))
    .map((name) => name.slice(0, -'.mdx'.length));
  const found = all.filter((name) => !GUIDE_EXCLUSIONS.has(name));
  const mapped = GUIDES.map((guide) => guide.mdx);
  const unmapped = found.filter((name) => !mapped.includes(name));
  const stale = mapped.filter((name) => !found.includes(name));
  const duplicated = mapped.filter((name, index) => mapped.indexOf(name) !== index);
  const deadExclusions = [...GUIDE_EXCLUSIONS].filter((name) => !all.includes(name));
  if (unmapped.length || stale.length || duplicated.length || deadExclusions.length) {
    throw new Error(`llms: guide inventory drift — ${[
      ...unmapped.map((name) => `src/content/guides/${name}.mdx has no guides.json entry (add one, or exclude it explicitly)`),
      ...stale.map((name) => `guides.json entry '${name}' has no MDX file left`),
      ...duplicated.map((name) => `guides.json lists '${name}' more than once`),
      ...deadExclusions.map((name) => `guides.json exclusion '${name}' matches no MDX file`),
    ].join('; ')}`);
  }
  return GUIDES;
}

const HELPERS = [
  { mdx: 'format-price', name: 'formatPrice', slug: 'helpers-formatprice', stories: 'helpers/formatPrice' },
  { mdx: 'format-relative-time', name: 'formatRelativeTime', slug: 'helpers-formatrelativetime', stories: 'helpers/formatRelativeTime' },
];

const titleize = (kebab: string): string => kebab.split('-').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
const humanize = (storyName: string): string => storyName.replace(/([a-z0-9])([A-Z])/g, '$1 $2');

/* ------------------------------------------------------------------ *
 * Source readers
 * ------------------------------------------------------------------ */

function readStories(ref: string): Record<string, string> {
  const name = ref.split('/')[1];
  const path = resolve(here, `./stories/${ref}/${name}.stories.tsx`);
  return existsSync(path) ? extractStorySources(readFileSync(path, 'utf8')) : {};
}

function readJson(path: string): unknown | null {
  const abs = resolve(here, path);
  return existsSync(abs) ? JSON.parse(readFileSync(abs, 'utf8')) : null;
}

/* ------------------------------------------------------------------ *
 * Build-time invariants over the component inventory. Two silent-drift
 * traps become hard build failures here:
 * - a renamed/typo'd stories file would drop every example from the llms
 *   output (readStories falls back to {}) and make the app route redirect
 *   to the homepage — every content component must have its stories file;
 * - the 'new'/'deprecated' badges COMPONENT_PAGES hardcodes in the nav
 *   model must mirror each story meta's `tags` (the same source Storybook
 *   displayed), in both directions.
 * ------------------------------------------------------------------ */

function checkComponentInvariants(componentKeys: string[]): void {
  const model = readFileSync(resolve(here, 'src/nav/model.ts'), 'utf8');
  const block = /const COMPONENT_PAGES[^=]*=\s*\[([\s\S]*?)\n\];/.exec(model)?.[1];
  const tuples = block ? [...block.matchAll(/\[\s*'([^']+)'\s*,\s*'[^']*'\s*(?:,\s*'([^']+)'\s*)?\]/g)] : [];
  if (!tuples.length) {
    throw new Error('llms: COMPONENT_PAGES not found in src/nav/model.ts — the badge drift check cannot run, update its parsing in vite-plugin-llms.ts');
  }
  const badges = new Map(tuples.map((tuple) => [tuple[1], tuple[2]]));

  for (const key of componentKeys) {
    const storiesPath = `stories/components/${key}/${key}.stories.tsx`;
    if (!existsSync(resolve(here, storiesPath))) {
      throw new Error(`llms: component 'src/content/components/${key}' has no stories file — expected ${storiesPath}`);
    }
    if (!badges.has(key)) {
      throw new Error(`llms: component '${key}' has no COMPONENT_PAGES entry in src/nav/model.ts`);
    }
    const meta = /^const meta[^=]*=\s*\{[\s\S]*?^\};/m.exec(readFileSync(resolve(here, storiesPath), 'utf8'))?.[0];
    if (!meta) {
      throw new Error(`llms: story meta not found in ${storiesPath} — the badge drift check cannot run, update its parsing in vite-plugin-llms.ts`);
    }
    const tags = [...(/tags:\s*\[([^\]]*)\]/.exec(meta)?.[1] ?? '').matchAll(/['"]([^'"]+)['"]/g)].map((match) => match[1]);
    const tagged = tags.includes('deprecated') ? 'deprecated' : tags.includes('new') ? 'new' : undefined;
    const badge = badges.get(key);
    const mirrored = badge === 'new' || badge === 'deprecated' ? badge : undefined;
    if (mirrored !== tagged) {
      throw new Error(`llms: badge drift on '${key}' — src/nav/model.ts declares ${mirrored ? `badge '${mirrored}'` : 'no status badge'} but ${storiesPath} meta tags declare ${tagged ? `'${tagged}'` : `neither 'new' nor 'deprecated'`}; align COMPONENT_PAGES with the story tags`);
    }
  }
}

/* ------------------------------------------------------------------ *
 * Design tokens, rendered from the same theme data as the page
 * (packages/themes build output + the shared categorize/split helpers).
 * ------------------------------------------------------------------ */

function tokensTable(tokens: Token[]): string {
  return `| Token | Value |\n|---|---|\n${tokens.map((token) => `| \`${token.name}\` | \`${token.value}\` |`).join('\n')}`;
}

function renderDesignTokens(): string | null {
  const theme = readJson('../themes/dist/default/tokens.json') as { root?: Record<string, string> } | null;
  if (!theme?.root) {
    return null;
  }
  const byCategory = categorizeTokens(theme.root);

  // Same mono/palette split as the DesignTokens port.
  const monoColors: Token[] = [];
  const paletteColors: Token[] = [];
  for (const token of byCategory[TOKEN_CATEGORY.palette]) {
    const splits = token.name.split('-');
    if (MONO_COLORS.includes(splits[splits.length - 1])) {
      monoColors.push(token);
    } else if (splits.length > 1 && /\d{3}$/.test(splits[splits.length - 1]) && PALETTES.includes(splits[splits.length - 2])) {
      paletteColors.push(token);
    }
  }
  const palettes = splitPalettes(paletteColors.sort((a, b) => a.name.localeCompare(b.name)));

  const SECTIONS: [string, TOKEN_CATEGORY][] = [
    ['Color', TOKEN_CATEGORY.color],
    ['Outline', TOKEN_CATEGORY.outline],
    ['Overlay', TOKEN_CATEGORY.overlay],
    ['Spacing', TOKEN_CATEGORY.spacing],
    ['Font Family', TOKEN_CATEGORY.fontFamily],
    ['Form Element', TOKEN_CATEGORY.formElement],
  ];
  return [
    '## Theme Variables',
    ...SECTIONS.map(([label, category]) => `### ${label}\n\n${tokensTable(byCategory[category])}`),
    '## Color Palettes',
    ...palettes.map((palette) => tokensTable(palette)),
    tokensTable(monoColors.sort((a, b) => a.name.localeCompare(b.name))),
    '## Previous Tokens (deprecated)',
    'The following tokens are deprecated and will be removed in a future major release. Non-spacing tokens have been renamed with the `--ods-theme` prefix; spacing tokens have been reduced to one base value (e.g. `--my-border-radius-sm: calc(var(--ods-theme-border-radius) / 2);`).',
    tokensTable(byCategory[TOKEN_CATEGORY.deprecated]),
  ].join('\n\n');
}

/* ------------------------------------------------------------------ *
 * MDX → markdown. The content MDX is import-free (contract components
 * only), so a fence-aware transform of the known tags is enough.
 * ------------------------------------------------------------------ */

function parseAttrs(raw: string): Record<string, string> {
  const attrs: Record<string, string> = {};
  const attrRe = /(\w+)=(?:"([^"]*)"|\{\s*'([^']*)'\s*\}|\{\s*"([^"]*)"\s*\}|\{\s*([^{}]*?)\s*\})/g;
  let match: RegExpExecArray | null;
  while ((match = attrRe.exec(raw)) !== null) {
    attrs[match[1]] = match[2] ?? match[3] ?? match[4] ?? match[5] ?? '';
  }
  return attrs;
}

// '- Do this' quoted JS string array items → markdown list lines.
function parseStringArray(raw: string): string[] {
  return [...raw.matchAll(/'((?:[^'\\]|\\.)*)'/g)].map((m) => m[1].replace(/\\'/g, "'"));
}

interface MdxContext {
  pageUrl: string;
  story: (name: string, from?: string) => string | null;
}

function transformProse(text: string, ctx: MdxContext): string {
  let out = text.replace(/\{\/\*[\s\S]*?\*\/\}/g, '');

  out = out.replace(/<Heading([^>]*)\/>/g, (_, raw) => {
    const { label, level } = parseAttrs(raw);
    return `${'#'.repeat(Number(level) || 2)} ${label}`;
  });

  out = out.replace(/<Canvas([^>]*)\/>/g, (_, raw) => {
    const { from, source, story } = parseAttrs(raw);
    if (source === 'none' || !story) {
      return '';
    }
    const code = ctx.story(story, from);
    return code ? `\`\`\`tsx\n${code}\n\`\`\`` : '';
  });

  out = out.replace(/<IdentityCard([^>]*?)>([\s\S]*?)<\/IdentityCard>/g, (_, raw, children) => {
    const { figmaLink, githubUrl, name } = parseAttrs(raw);
    const aliases = parseStringArray(/aliases=\{\s*\[([\s\S]*?)\]\s*\}/.exec(raw)?.[1] ?? '');
    const rows = [
      `| Name | ${name} |`,
      aliases.length ? `| Also known as | ${aliases.join(', ')} |` : '',
      figmaLink ? `| Design | ${figmaLink} |` : '',
      githubUrl ? `| Source | ${githubUrl} |` : '',
    ].filter(Boolean);
    return `${children.trim()}\n\n| | |\n|---|---|\n${rows.join('\n')}`;
  });

  out = out.replace(/<BestPractices([\s\S]*?)\/>/g, (_, raw) => {
    const dos = parseStringArray(/dos=\{\s*\[([\s\S]*?)\]\s*\}/.exec(raw)?.[1] ?? '');
    const donts = parseStringArray(/donts=\{\s*\[([\s\S]*?)\]\s*\}/.exec(raw)?.[1] ?? '');
    return `**Do**\n\n${dos.join('\n')}\n\n**Don't**\n\n${donts.join('\n')}`;
  });

  out = out.replace(/<HelperSpecification([^>]*)\/>/g, (_, raw) => {
    const { name } = parseAttrs(raw);
    const utils = readJson('../ods-react/documentation/utils.json');
    const spec = utils ? parseHelper(utils as never, name) : null;
    if (!spec) {
      return '';
    }
    const args = spec.args.map((arg) => `| \`${arg.name}\` | \`${arg.type}\` | ${arg.default ?? '-'} | ${arg.description.replace(/\n/g, ' ')} |`);
    const links = spec.links.map((link) => `- [${link.label}](${link.href})`);
    return [
      spec.description,
      '',
      '| Argument | Type | Default | Description |',
      '|---|---|---|---|',
      ...args,
      ...(links.length ? ['', ...links] : []),
    ].join('\n');
  });

  out = out.replace(/<DocLink\s+to="([^"]*)"[^>]*>([\s\S]*?)<\/DocLink>/g, (_, to, label) => `[${label.trim()}](${BASE_URL}${to})`);
  out = out.replace(/<ExternalLink\s+href="([^"]*)"[^>]*>([\s\S]*?)<\/ExternalLink>/g,
    (_, href, label) => `[${label.trim()}](${href.startsWith('/') ? BASE_URL + href : href})`);
  out = out.replace(/<Kbd[^>]*>([\s\S]*?)<\/Kbd>/g, (_, key) => `\`${key.trim()}\``);
  out = out.replace(/<MessageBody[^>]*>([\s\S]*?)<\/MessageBody>/g, (_, body) => `\n> ${body.trim().replace(/\n\s*/g, '\n> ')}\n`);
  out = out.replace(/<AccordionTrigger[^>]*>([\s\S]*?)<\/AccordionTrigger>/g, (_, question) => `\n**${question.trim()}**\n`);

  // Data-driven ports render from the same data as the pages.
  out = out.replace(/<DesignTokens\s*\/>/g, () => renderDesignTokens() ?? `_Interactive content — see ${ctx.pageUrl}_`);
  out = out.replace(/<ChartColorCards\s*\/>/g,
    () => `| Series | Color |\n|---|---|\n${CHART_SERIES_COLORS.map((color, i) => `| ${i + 1} | \`${color}\` |`).join('\n')}`);
  out = out.replace(/<OdsLocaleList\s*\/>/g, () => LOCALES.map((locale) => `- ${locale}`).join('\n'));
  out = out.replace(/<TokenPreview[^>]*token=\{\{([^}]*)\}\}[^>]*\/>/g, (_, inner) => {
    const name = /name:\s*'([^']*)'/.exec(inner)?.[1];
    const value = /value:\s*'([^']*)'/.exec(inner)?.[1];
    return name ? `<code>${name}</code>${value ? ` (default: <code>${value}</code>)` : ''}` : '';
  });

  // Live/interactive-only ports (mutable roadmap data, recipe browser,
  // form demos): point at the page instead.
  out = out.replace(/<(Roadmap|Recipes|FormData|Component)\b[^>]*\/>/g,
    `_Interactive content — see ${ctx.pageUrl}_`);

  // Leftover contract/ODS tags: drop the tags from PROSE, keep their text
  // content. Code is quoted verbatim and must survive: fences (the story
  // sources Canvas inserted above, R2) and inline code spans (`<Toggle />`)
  // both pass through untouched.
  const stripTags = (text: string): string => text.replace(/<\/?[A-Z]\w*(?:\s[^>]*?)?\/?>/g, '');
  // Split with capture groups: odd indices are the captures. Index parity is
  // the reliable discriminator — a startsWith('`') check would misfire on
  // unmatched remainders that merely begin with a backtick (``double``,
  // unclosed or newline-spanning spans) and skip stripping the whole segment.
  out = out
    .split(/(```[\s\S]*?```)/)
    .map((part, i) => (i % 2 === 1
      ? part
      : part.split(/(`[^`\n]+`)/).map((segment, j) => (j % 2 === 1 ? segment : stripTags(segment))).join('')))
    .join('');

  return out.replace(/\n{3,}/g, '\n\n');
}

function mdxToMarkdown(source: string, ctx: MdxContext): string {
  // Fences pass through untouched; only prose between them is transformed.
  return source
    .split(/(```[\s\S]*?```)/)
    .map((segment, i) => (i % 2 === 1 ? segment : transformProse(segment, ctx)))
    .join('')
    .trim();
}

/* ------------------------------------------------------------------ *
 * Documents
 * ------------------------------------------------------------------ */

interface Doc {
  body: string;
  category: 'component' | 'generic';
  filename: string;
  slug: string;
  title: string;
  tokens: number;
  type: 'documentation' | 'examples' | 'overview' | 'technical-information';
}

function makeDoc(partial: Omit<Doc, 'tokens'>): Doc {
  return { ...partial, tokens: estimateTokens(partial.body) };
}

function frontMatter(doc: Doc): string {
  return [
    '---',
    `title: "${doc.title}"`,
    `slug: ${doc.slug}`,
    `category: ${doc.category}`,
    `type: ${doc.type}`,
    `version: ${VERSION}`,
    `tokens: ${doc.tokens}`,
    `source: ${LLMS_URL}/${doc.filename}`,
    '---',
  ].join('\n');
}

const render = (doc: Doc): string => `${frontMatter(doc)}\n\n${doc.body}\n`;

function propsTable(props: PropRow[]): string {
  const rows = props.map((prop) =>
    `| \`${prop.name}\` | \`${prop.type}\` | ${prop.optional ? 'No' : 'Yes'} | ${prop.default || '-'} | ${prop.description.replace(/\n/g, ' ')}${prop.deprecated ? ' (deprecated)' : ''} |`);
  return ['| Property | Type | Required | Default | Description |', '|---|---|---|---|---|', ...rows].join('\n');
}

function componentDocs(component: string): { docs: Doc[], pages: Record<string, Doc> } {
  const title = titleize(component);
  const pageUrl = `${BASE_URL}/components/${component}`;
  const stories = readStories(`components/${component}`);
  const ctx: MdxContext = {
    pageUrl,
    story: (name, from) => (from ? readStories(`components/${from}`)[name] : stories[name]) ?? null,
  };

  const mdx = readFileSync(resolve(here, `src/content/components/${component}/documentation.mdx`), 'utf8');
  const documentation = makeDoc({
    body: `# ${title}\n\n${mdxToMarkdown(mdx, ctx)}`,
    category: 'component',
    filename: `react-components-${component}--documentation.txt`,
    slug: component,
    title,
    type: 'documentation',
  });

  const publicStories = Object.entries(stories).filter(([name]) => !EXCLUDED_STORIES.has(name));
  const examples = publicStories.length
    ? makeDoc({
      body: `# ${title}\n\n${publicStories.map(([name, source]) => `## ${humanize(name)}\n\n\`\`\`tsx\n${source}\n\`\`\``).join('\n\n')}`,
      category: 'component',
      filename: `react-components-${component}--examples.txt`,
      slug: component,
      title,
      type: 'examples',
    })
    : null;

  const typedoc = readJson(`../ods-react/src/components/${component}/documentation/${component}.json`);
  const cssVariables = readJson(`../ods-react/src/components/${component}/documentation/cssVariable.json`) as Record<string, string> | null;
  let technical: Doc | null = null;
  let mainProps: PropRow[] = [];
  if (typedoc) {
    const spec = parseTechnicalSpec(typedoc as never, component.replace(/-/g, ''));
    mainProps = spec.components[0]?.props ?? [];
    const sections = [
      ...spec.components.map((comp) => [
        `## ${comp.name}`,
        comp.nativeElement ? `\nThis component extends all the native \`<${comp.nativeElement}>\` attributes.` : '',
        comp.props.length ? `\n${propsTable(comp.props)}` : '\n_No specific property._',
      ].join('\n')),
      ...(spec.enums.length ? [`## Enums\n\n${spec.enums.map((en) => `### ${en.name}${en.deprecated ? ' (deprecated)' : ''}\n\n${en.members.map((m) => `- \`${m.name}\` = \`${m.value}\``).join('\n')}`).join('\n\n')}`] : []),
      ...(spec.unions.length ? [`## Types\n\n${spec.unions.map((u) => `- \`${u.name}\`: \`${u.value}\``).join('\n')}`] : []),
      ...(cssVariables && Object.keys(cssVariables).length
        ? [`## CSS Variables\n\n| Variable | Default value |\n|---|---|\n${Object.entries(cssVariables).map(([name, value]) => `| \`${name}\` | \`${value}\` |`).join('\n')}`]
        : []),
    ];
    technical = makeDoc({
      body: `# ${title}\n\n${sections.join('\n\n')}`,
      category: 'component',
      filename: `react-components-${component}--technical-information.txt`,
      slug: component,
      title,
      type: 'technical-information',
    });
  }

  const intro = mdx.trimStart().startsWith('_') ? mdx.trimStart().split('\n')[0] : '';
  const overview = makeDoc({
    body: [
      `# ${title}`,
      intro,
      mainProps.length ? `## Props\n\n${propsTable(mainProps)}` : '',
      publicStories.length ? `## Examples\n\n${publicStories.map(([name]) => `- ${humanize(name)}`).join('\n')}` : '',
      '## Documentation pages',
      [
        `- [Documentation](./${documentation.filename})`,
        technical ? `- [Technical Information](./${technical.filename})` : '',
        examples ? `- [Examples](./${examples.filename})` : '',
      ].filter(Boolean).join('\n'),
    ].filter(Boolean).join('\n\n'),
    category: 'component',
    filename: `react-components-${component}.txt`,
    slug: component,
    title,
    type: 'overview',
  });

  const pages: Record<string, Doc> = { overview, documentation };
  if (technical) {
    pages['technical-information'] = technical;
  }
  if (examples) {
    pages.examples = examples;
  }
  return { docs: Object.values(pages), pages };
}

function guideDoc(entry: GuideEntry): Doc {
  const mdx = readFileSync(resolve(here, `src/content/guides/${entry.mdx}.mdx`), 'utf8');
  const ctx: MdxContext = {
    pageUrl: `${BASE_URL}/guides/${entry.mdx}`,
    story: (name, from) => readStories(from ? `components/${from}` : entry.stories ?? '')[name] ?? null,
  };
  return makeDoc({
    body: `# ${entry.title}\n\n${mdxToMarkdown(mdx, ctx)}`,
    category: 'generic',
    filename: `${entry.slug}.txt`,
    slug: entry.slug,
    title: entry.title,
    type: 'overview',
  });
}

function helperDocs(helper: typeof HELPERS[number]): Doc[] {
  const stories = readStories(helper.stories);
  const ctx: MdxContext = {
    pageUrl: `${BASE_URL}/helpers/${helper.mdx}`,
    story: (name, from) => (from ? readStories(`components/${from}`)[name] : stories[name]) ?? null,
  };
  const mdx = readFileSync(resolve(here, `src/content/helpers/${helper.mdx}.mdx`), 'utf8');
  const documentation = makeDoc({
    body: `# ${helper.name}\n\n${mdxToMarkdown(mdx, ctx)}`,
    category: 'generic',
    filename: `${helper.slug}--documentation.txt`,
    slug: helper.slug,
    title: helper.name,
    type: 'documentation',
  });
  const utils = readJson('../ods-react/documentation/utils.json');
  const spec = utils ? parseHelper(utils as never, helper.name) : null;
  const overview = makeDoc({
    body: [
      `# ${helper.name}`,
      spec?.description ?? '',
      spec?.args.length ? `## Arguments\n\n| Argument | Type | Default | Description |\n|---|---|---|---|\n${spec.args.map((arg) => `| \`${arg.name}\` | \`${arg.type}\` | ${arg.default ?? '-'} | ${arg.description.replace(/\n/g, ' ')} |`).join('\n')}` : '',
      `## Documentation pages\n\n- [Documentation](./${documentation.filename})`,
    ].filter(Boolean).join('\n\n'),
    category: 'generic',
    filename: `${helper.slug}.txt`,
    slug: helper.slug,
    title: helper.name,
    type: 'overview',
  });
  return [overview, documentation];
}

function recipesDoc(): Doc | null {
  const data = readJson('../ods-recipes/dist/ods-recipes.json') as { component: Record<string, { description?: string, name: string, odsComponents: string[], tags: string[] }> } | null;
  if (!data?.component) {
    return null;
  }
  const sections = Object.values(data.component).map((recipe) => [
    `## ${recipe.name}`,
    recipe.description ?? '',
    recipe.tags?.length ? `Tags: ${recipe.tags.join(', ')}` : '',
    recipe.odsComponents?.length ? `ODS components used: ${recipe.odsComponents.filter((name) => !name.startsWith('type ') && !/^[A-Z0-9_]+$/.test(name)).join(', ')}` : '',
  ].filter(Boolean).join('\n\n'));
  return makeDoc({
    body: `# Components\n\nProven UI patterns (recipes) combining several ODS components. Each recipe ships copyable source code in the online documentation: ${BASE_URL}/recipes/components\n\n${sections.join('\n\n')}`,
    category: 'generic',
    filename: 'recipes-components.txt',
    slug: 'recipes-components',
    title: 'Components',
    type: 'overview',
  });
}

function welcomeDoc(componentTitles: string[]): Doc {
  return makeDoc({
    body: [
      '# Welcome',
      `> ${SITE_DESCRIPTION}`,
      `${SITE_NAME} provides React components, design tokens, helpers and usage guidelines for building OVHcloud products.`,
      `- Online documentation: ${BASE_URL}/`,
      '- Components documented in this set: ' + componentTitles.join(', '),
      `- Get started: ${BASE_URL}/guides/get-started`,
    ].join('\n\n'),
    category: 'generic',
    filename: 'ovhcloud-design-system-welcome.txt',
    slug: 'ovhcloud-design-system-welcome',
    title: 'Welcome',
    type: 'overview',
  });
}

/* ------------------------------------------------------------------ *
 * Aggregates, indexes, summary
 * ------------------------------------------------------------------ */

function componentsIndex(components: { pages: Record<string, Doc>, title: string }[]): string {
  const LABELS: Record<string, string> = { 'documentation': 'Documentation', 'examples': 'Examples', 'overview': 'Overview', 'technical-information': 'Technical Information' };
  const sections = components.map(({ pages, title }) => [
    `## ${title}`,
    '',
    ...['overview', 'documentation', 'technical-information', 'examples']
      .filter((type) => pages[type])
      .map((type) => `- [${LABELS[type]}](./${pages[type].filename}) (~${pages[type].tokens} tokens)`),
  ].join('\n'));
  return [
    `# ${SITE_NAME} - Components Index`,
    '',
    '> Individual component documentation files for targeted LLM context.',
    '> Use these files to provide only the documentation you need, instead of the full documentation.',
    '',
    sections.join('\n\n'),
    '',
  ].join('\n');
}

function genericIndex(docs: Doc[]): string {
  const lines = [...docs]
    .sort((a, b) => a.title.localeCompare(b.title))
    .map((doc) => `- [${doc.title}](./${doc.filename}) (~${doc.tokens} tokens)`);
  return [
    `# ${SITE_NAME} - Generic Documentation Index`,
    '',
    '> Individual documentation files (design tokens, styling, guides, FAQ, ...) for targeted LLM context.',
    '> Use these files to provide only the documentation you need, instead of the full documentation.',
    '',
    ...lines,
    '',
  ].join('\n');
}

function summary(): string {
  return [
    `# ${SITE_NAME} Documentation for LLMs`,
    '',
    `> ${SITE_DESCRIPTION}.`,
    '',
    '## Documentation Sets',
    '',
    '- [Complete documentation](./llms-full.txt): The complete OVHcloud Design System documentation including all components, styling, theming, guides, and tools',
    '- [Machine-readable index](./llms-index.json): JSON index of every documentation file with its type, token estimate and canonical URL',
    '',
    '- [Components](./ods-documentation-components.txt): Documentation for all React components in OVHcloud Design System.',
    '- [Components Index](./ods-components-index.txt): Individual per-component documentation files for targeted context',
    '- [Generic Documentation](./ods-documentation-generic.txt): Documentation for design tokens, styling, theming, guides, tools, and general information about OVHcloud Design System.',
    '- [Generic Documentation Index](./ods-generic-index.txt): Individual per-page documentation files for targeted context',
    '',
    '## Notes',
    '',
    '- The complete documentation includes all content from the official documentation',
    '- Category-specific documentation files contain only the content relevant to that category',
    '- Individual files are available for targeted LLM context (see the Components and Generic Documentation indexes)',
    '- The machine-readable index (JSON) lists every file with a token estimate for context budgeting',
    '- The content is automatically generated from the same source as the official documentation',
    `- This set documents version ${VERSION} and is kept immutably at ${LLMS_URL}/ — the site root llms.txt lists every available version`,
    '- The @ovhcloud/ods-react npm package ships these same files under dist/llms: prefer that local copy, it always matches the installed version',
    '',
  ].join('\n');
}

/* ------------------------------------------------------------------ */

function generate(outDir: string, withRootSummary = true): number {
  mkdirSync(outDir, { recursive: true });

  const componentKeys = readdirSync(resolve(here, 'src', 'content', 'components'), { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
  checkComponentInvariants(componentKeys);

  const components = componentKeys.map((key) => ({ key, title: titleize(key), ...componentDocs(key) }));
  const componentFiles = components.flatMap((comp) => comp.docs);
  const genericFiles = [
    welcomeDoc(components.map((comp) => comp.title)),
    ...discoverGuides().map(guideDoc),
    ...HELPERS.flatMap(helperDocs),
    ...(recipesDoc() ? [recipesDoc() as Doc] : []),
  ];

  for (const doc of [...componentFiles, ...genericFiles]) {
    writeFileSync(resolve(outDir, doc.filename), render(doc), 'utf8');
  }

  const componentsAggregate = [
    `# ${SITE_NAME} - Components`,
    '',
    'Documentation for all React components in OVHcloud Design System.',
    '',
    components.map((comp) => `## ${comp.title}\n\n${comp.docs.map(render).join('\n')}`).join('\n\n'),
  ].join('\n');
  const genericAggregate = [
    `# ${SITE_NAME} - Generic Documentation`,
    '',
    'Documentation for design tokens, styling, theming, guides, tools, and general information about OVHcloud Design System.',
    '',
    genericFiles.map((doc) => `## ${doc.title}\n\n${render(doc)}`).join('\n\n'),
  ].join('\n');
  const full = [
    `# ${SITE_NAME} - Complete Documentation`,
    '',
    `> ${SITE_DESCRIPTION}.`,
    '',
    'This document contains the complete OVHcloud Design System documentation including all components, styling, theming, guides, and tools.',
    '',
    [...componentFiles, ...genericFiles].map((doc) => `## ${doc.title}\n\n${doc.body}`).join('\n\n'),
    '',
  ].join('\n');

  const index = {
    name: SITE_NAME,
    version: VERSION,
    baseUrl: LLMS_URL,
    generatedFrom: 'ods-docs native build emit',
    sets: {
      full: { url: './llms-full.txt' },
      components: { url: './ods-documentation-components.txt', index: './ods-components-index.txt' },
      generic: { url: './ods-documentation-generic.txt', index: './ods-generic-index.txt' },
    },
    components: components.map((comp) => ({
      slug: comp.key,
      title: comp.title,
      pages: Object.fromEntries(Object.entries(comp.pages).map(([type, doc]) => [type, { type: doc.type, tokens: doc.tokens, url: `./${doc.filename}` }])),
    })),
    generic: genericFiles.map((doc) => ({ slug: doc.slug, title: doc.title, type: doc.type, tokens: doc.tokens, url: `./${doc.filename}` })),
  };

  writeFileSync(resolve(outDir, 'llms.txt'), summary(), 'utf8');
  writeFileSync(resolve(outDir, 'llms-full.txt'), full, 'utf8');
  writeFileSync(resolve(outDir, 'ods-documentation-components.txt'), componentsAggregate, 'utf8');
  writeFileSync(resolve(outDir, 'ods-documentation-generic.txt'), genericAggregate, 'utf8');
  writeFileSync(resolve(outDir, 'ods-components-index.txt'), componentsIndex(components), 'utf8');
  writeFileSync(resolve(outDir, 'ods-generic-index.txt'), genericIndex(genericFiles), 'utf8');
  writeFileSync(resolve(outDir, 'llms-index.json'), `${JSON.stringify(index, null, 2)}\n`, 'utf8');
  if (withRootSummary) {
    // The summary is also served at the site root, as before.
    writeFileSync(resolve(outDir, '..', 'llms.txt'), summary(), 'utf8');
  }

  return componentFiles.length + genericFiles.length + 7;
}

function llmsEmit(): Plugin {
  return {
    name: 'ods-docs:llms-emit',
    apply: 'build',
    closeBundle() {
      const count = generate(resolve(here, 'dist', 'llms'));
      // Committed copy: the source ods-react's copy:llms ships in its npm
      // package (dist/llms) — its build runs BEFORE the docs build in a
      // release, so the files must live in git, not only in dist.
      rmSync(resolve(here, 'assets', 'llms'), { force: true, recursive: true });
      generate(resolve(here, 'assets', 'llms'), false);
      this.info(`llms: ${count} files emitted natively (dist + committed assets)`);
    },
  };
}

export { generate, llmsEmit };
