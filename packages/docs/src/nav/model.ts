import { ICON_NAME } from '../../../ods-react/src/components/icon/src';

/* Navigation model of the docs app — the single source the sidebar tree, the
   router and the ⌘K search are all derived from. Mirrors the editorial
   structure decided in the CDC (two roots); populated with the PoC scope for
   now, grows as content is migrated. */

type Badge = 'beta' | 'deprecated' | 'new';

/* Story modules and their raw sources (shown as code blocks) are resolved
   lazily, per page: the entry chunk only ships the nav metadata, a page pulls
   its own stories chunk on navigation. A new story file is picked up by the
   globs without touching any import list. */
const STORY_MODULES = import.meta.glob('../../stories/*/*/*.stories.tsx');
const STORY_RAWS = import.meta.glob('../../stories/*/*/*.stories.tsx', { import: 'default', query: '?raw' });

interface PageStoriesData {
  module: Record<string, unknown>;
  raw: string;
}

type StoriesLoader = () => Promise<PageStoriesData>;

/* Nav id → lazy stories loader ('components/accordion' →
   stories/components/accordion/accordion.stories.tsx). Helper folders are
   camelCase where their nav ids are kebab-case (format-price → formatPrice). */
function storiesOf(id: string): StoriesLoader | undefined {
  const [group, key] = id.split('/');
  const folder = group === 'helpers' ? key.replace(/-([a-z])/g, (_match, letter: string) => letter.toUpperCase()) : key;
  const path = `../../stories/${group}/${folder}/${folder}.stories.tsx`;
  const loadModule = STORY_MODULES[path];
  const loadRaw = STORY_RAWS[path];

  if (!loadModule || !loadRaw) {
    // A nav id without its story file is a wiring bug: say it loudly, since
    // the router silently falls back to the homepage for such pages.
    console.error(`nav: no story file for '${id}' (expected ${path})`);
    return undefined;
  }
  return async () => {
    const [module, raw] = await Promise.all([loadModule(), loadRaw()]);
    return { module: module as Record<string, unknown>, raw: raw as string };
  };
}

interface NavPage {
  badge?: Badge;
  icon?: ICON_NAME;
  id: string;
  kind: 'component' | 'guide' | 'helper' | 'recipe' | 'tool';
  path: string;
  stories?: StoriesLoader;
  title: string;
}

interface NavSection {
  children: (NavSection | NavPage)[];
  icon?: ICON_NAME;
  id: string;
  title: string;
}

/* The nav is split into two trees: the editorial guides, then the API
   reference (components + helpers) as its own tree. Section order mirrors the
   old Storybook storySort; the single "OVHcloud Design System" root was
   dropped (the brand logo already says it). */
const GUIDES_NAV: (NavSection | NavPage)[] = [
  { icon: ICON_NAME.home, id: 'guides/welcome', kind: 'guide', path: '/', title: 'Welcome' },
  { icon: ICON_NAME.arrowRight, id: 'guides/get-started', kind: 'guide', path: '/guides/get-started', title: 'Get Started' },
  {
    icon: ICON_NAME.pen,
    id: 'build',
    title: 'Build',
    children: [
      { icon: ICON_NAME.file, id: 'guides/accessibility', kind: 'guide', path: '/guides/accessibility', title: 'Accessibility' },
      { icon: ICON_NAME.file, id: 'guides/internationalization', kind: 'guide', path: '/guides/internationalization', title: 'Internationalization' },
      { icon: ICON_NAME.file, id: 'guides/forms', kind: 'guide', path: '/guides/forms', title: 'Forms' },
      { icon: ICON_NAME.file, id: 'guides/charts', kind: 'guide', path: '/guides/charts', title: 'Charts' },
    ],
  },
  {
    icon: ICON_NAME.magicWand,
    id: 'customize',
    title: 'Customize',
    children: [
      { icon: ICON_NAME.file, id: 'guides/apply-ods-style', kind: 'guide', path: '/guides/apply-ods-style', title: 'Apply ODS Style' },
      { icon: ICON_NAME.file, id: 'guides/style-customization', kind: 'guide', path: '/guides/style-customization', title: 'Style Customization' },
      { icon: ICON_NAME.file, id: 'guides/design-tokens', kind: 'guide', path: '/guides/design-tokens', title: 'Design Tokens' },
      { icon: ICON_NAME.file, id: 'guides/tailwind', kind: 'guide', path: '/guides/tailwind', title: 'Tailwind CSS Integration' },
    ],
  },
  {
    icon: ICON_NAME.arrowUp,
    id: 'upgrade',
    title: 'Upgrade',
    children: [
      { icon: ICON_NAME.file, id: 'guides/whats-new', kind: 'guide', path: '/guides/whats-new', title: "What's new" },
      { icon: ICON_NAME.list, id: 'guides/changelog', kind: 'guide', path: '/guides/changelog', title: 'Changelog' },
      { icon: ICON_NAME.file, id: 'guides/migration-to-v19', kind: 'guide', path: '/guides/migration-to-v19', title: 'Migration to v19' },
      {
        icon: ICON_NAME.refresh,
        id: 'previous-migrations',
        title: 'Previous Migrations',
        children: [
          { icon: ICON_NAME.file, id: 'guides/migration-12-to-13', kind: 'guide', path: '/guides/migration-12-to-13', title: '12.x to 13.x' },
          { icon: ICON_NAME.file, id: 'guides/migration-13-to-14', kind: 'guide', path: '/guides/migration-13-to-14', title: '13.x to 14.x' },
          { icon: ICON_NAME.file, id: 'guides/migration-14-to-15', kind: 'guide', path: '/guides/migration-14-to-15', title: '14.x to 15.x' },
          { icon: ICON_NAME.file, id: 'guides/migration-15-to-16', kind: 'guide', path: '/guides/migration-15-to-16', title: '15.x to 16.x' },
          { icon: ICON_NAME.file, id: 'guides/migration-16-to-17', kind: 'guide', path: '/guides/migration-16-to-17', title: '16.x to 17.x' },
          { icon: ICON_NAME.file, id: 'guides/migration-17-to-18', kind: 'guide', path: '/guides/migration-17-to-18', title: '17.x to 18.x' },
        ],
      },
    ],
  },
  {
    icon: ICON_NAME.cog,
    id: 'tools',
    title: 'Tools',
    children: [
      { icon: ICON_NAME.chevronLeftUnderscore, id: 'tools/sandbox', kind: 'tool', path: '/tools/sandbox', title: 'Code Sandbox' },
      { badge: 'beta', icon: ICON_NAME.magicWand, id: 'tools/theme-generator', kind: 'tool', path: '/tools/theme-generator', title: 'Theme Generator' },
    ],
  },
  {
    icon: ICON_NAME.robot,
    id: 'ai-agents',
    title: 'AI Agents',
    children: [
      { icon: ICON_NAME.file, id: 'guides/llm-documentation', kind: 'guide', path: '/guides/llm-documentation', title: 'LLM Documentation' },
    ],
  },
  { icon: ICON_NAME.circleQuestion, id: 'guides/faq', kind: 'guide', path: '/guides/faq', title: 'F.A.Q.' },
  { icon: ICON_NAME.list, id: 'guides/roadmap', kind: 'guide', path: '/guides/roadmap', title: 'Roadmap' },
];

/* Component pages, one line per component: [folder key, title, status badge].
   The badges are mirrored statically from the story meta tags
   (module.default.tags, 'new' / 'deprecated' — the same source Storybook
   used) so the sidebar and the search render them without loading a single
   story module. Keep in sync when (un)tagging a story file. */
const COMPONENT_PAGES: [key: string, title: string, badge?: Badge][] = [
  ['accordion', 'Accordion'],
  ['avatar', 'Avatar', 'new'],
  ['badge', 'Badge'],
  ['breadcrumb', 'Breadcrumb'],
  ['button', 'Button'],
  ['button-group', 'Button Group'],
  ['card', 'Card'],
  ['cart', 'Cart', 'new'],
  ['checkbox', 'Checkbox'],
  ['clipboard', 'Clipboard'],
  ['code', 'Code'],
  ['combobox', 'Combobox'],
  ['command', 'Command', 'new'],
  ['data-table', 'Data Table', 'new'],
  ['datepicker', 'Datepicker'],
  ['divider', 'Divider'],
  ['drawer', 'Drawer'],
  ['editable', 'Editable'],
  ['file-thumbnail', 'File Thumbnail', 'new'],
  ['file-upload', 'File Upload'],
  ['form-field', 'Form Field'],
  ['icon', 'Icon'],
  ['input', 'Input'],
  ['kbd', 'Kbd'],
  ['link', 'Link'],
  ['logo', 'Logo'],
  ['markdown', 'Markdown', 'new'],
  ['medium', 'Medium'],
  ['menu', 'Menu', 'new'],
  ['message', 'Message'],
  ['message-bubble', 'Message Bubble', 'new'],
  ['meter', 'Meter'],
  ['modal', 'Modal'],
  ['pagination', 'Pagination'],
  ['password', 'Password'],
  ['phone-number', 'Phone Number'],
  ['popover', 'Popover'],
  ['progress-bar', 'Progress Bar'],
  ['prompt-input', 'Prompt Input', 'new'],
  ['quantity', 'Quantity'],
  ['query-filter', 'Query Filter', 'new'],
  ['radio-group', 'Radio Group'],
  ['range', 'Range'],
  ['select', 'Select'],
  ['skeleton', 'Skeleton'],
  ['spinner', 'Spinner'],
  ['switch', 'Switch', 'deprecated'],
  ['table', 'Table'],
  ['tabs', 'Tabs'],
  ['tag', 'Tag'],
  ['text', 'Text'],
  ['textarea', 'Textarea'],
  ['tile', 'Tile'],
  ['timepicker', 'Timepicker'],
  ['toaster', 'Toaster'],
  ['toggle', 'Toggle'],
  ['tooltip', 'Tooltip'],
  ['tree-view', 'Tree View'],
];

/* API reference — its own tree; Components and Helpers sit at the top level. */
const REFERENCE_NAV: (NavSection | NavPage)[] = [
  {
    icon: ICON_NAME.grid,
    id: 'components',
    title: 'Components',
    children: COMPONENT_PAGES.map(([key, title, badge]): NavPage => ({
      badge,
      icon: ICON_NAME.box,
      id: `components/${key}`,
      kind: 'component',
      path: `/components/${key}`,
      stories: storiesOf(`components/${key}`),
      title,
    })),
  },
  {
    icon: ICON_NAME.lightbulb,
    id: 'recipes',
    title: 'Recipes',
    children: [
      { badge: 'beta', icon: ICON_NAME.file, id: 'recipes/components', kind: 'recipe', path: '/recipes/components', title: 'Components' },
    ],
  },
  {
    icon: ICON_NAME.calculator,
    id: 'helpers',
    title: 'Helpers',
    children: [
      { icon: ICON_NAME.file, id: 'helpers/format-price', kind: 'helper', path: '/helpers/format-price', stories: storiesOf('helpers/format-price'), title: 'formatPrice' },
      { badge: 'new', icon: ICON_NAME.file, id: 'helpers/format-relative-time', kind: 'helper', path: '/helpers/format-relative-time', stories: storiesOf('helpers/format-relative-time'), title: 'formatRelativeTime' },
    ],
  },
];

/* Everything, for routing / search / flatten. */
const NAV: (NavSection | NavPage)[] = [...GUIDES_NAV, ...REFERENCE_NAV];

function isPage(node: NavSection | NavPage): node is NavPage {
  return 'path' in node;
}

/* Flat page list; each page carries the section trail it lives under
   (e.g. "Upgrade / Previous Migrations") — shown as context in the search
   palette. */
function flattenPages(nodes: (NavSection | NavPage)[] = NAV, trail: string[] = []): (NavPage & { section?: string })[] {
  return nodes.flatMap((node) => (isPage(node)
    ? [{ ...node, section: trail.length ? trail.join(' / ') : undefined }]
    : flattenPages(node.children, [...trail, node.title])));
}

/* TreeView items derived from the model; leaf ids = page ids so a tree
   selection maps straight to a route. Icons mark the pages (leaves); the
   sections are already marked by their chevron. */
function toTreeItems(nodes: (NavSection | NavPage)[] = NAV): { children?: unknown[], customRendererData?: { badge?: Badge, icon?: ICON_NAME }, id: string, name: string }[] {
  return nodes.map((node) => (isPage(node)
    ? { customRendererData: { badge: node.badge, icon: node.icon }, id: node.id, name: node.title }
    : { children: toTreeItems(node.children), customRendererData: {}, id: node.id, name: node.title }));
}

export { GUIDES_NAV, NAV, REFERENCE_NAV, flattenPages, isPage, storiesOf, toTreeItems, type NavPage, type NavSection, type PageStoriesData, type StoriesLoader };
