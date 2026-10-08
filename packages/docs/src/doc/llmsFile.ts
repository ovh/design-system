import guidesInventory from '../content/guides/guides.json';

// Component tab → llms filename suffix (no tab: the documentation page).
const COMPONENT_TAB_SUFFIX: Record<string, string> = {
  examples: '--examples',
  technical: '--technical-information',
};

/* Route → llms filename, for the topbar "View as Markdown" link. The filenames
   follow the emission conventions of vite-plugin-llms.ts; guides carry their
   editorial legacy slug, read from the same guides.json the plugin uses.
   Recipes have one aggregate document (recipes-components.txt) for their
   single page. Returns null when the page has no llms document (gallery,
   tools, llms-excluded guides) — the link simply hides. */
function llmsFileFor(pathname: string): string | null {
  if (pathname === '/') {
    return 'ovhcloud-design-system-welcome.txt';
  }

  const component = pathname.match(/^\/components\/([^/]+)(?:\/(technical|examples))?$/);
  if (component) {
    const [, key, tab] = component;
    return `react-components-${key}${COMPONENT_TAB_SUFFIX[tab] ?? '--documentation'}.txt`;
  }

  const guide = pathname.match(/^\/guides\/([^/]+)$/);
  if (guide) {
    const entry = guidesInventory.guides.find((candidate) => candidate.mdx === guide[1]);
    return entry ? `${entry.slug}.txt` : null;
  }

  if (pathname === '/recipes/components') {
    return 'recipes-components.txt';
  }

  const helper = pathname.match(/^\/helpers\/([^/]+)$/);
  if (helper) {
    return `helpers-${helper[1].replace(/-/g, '').toLowerCase()}--documentation.txt`;
  }

  return null;
}

export { llmsFileFor };
