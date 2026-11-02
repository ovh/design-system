import guidesInventory from '../content/guides/guides.json';
import helpersInventory from '../content/helpers/helpers.json';
import { flattenPages } from '../nav/model';

// Component tab → llms filename suffix (no tab: the documentation page).
const COMPONENT_TAB_SUFFIX: Record<string, string> = {
  examples: '--examples',
  technical: '--technical-information',
};

/* Route → llms filename, for the topbar "View as Markdown" link. The filenames
   follow the emission conventions of vite-plugin-llms.ts; guides carry their
   editorial legacy slug, read from the same guides.json the plugin uses, and
   helpers theirs from helpers.json.
   Recipes have one aggregate document (recipes-components.txt) for their
   single page. Returns null when the page has no llms document (gallery,
   tools, llms-excluded guides, unknown components) — the link simply hides. */
function llmsFileFor(route: string): string | null {
  // A trailing slash is ignored, as the router does.
  const pathname = route.length > 1 ? route.replace(/\/+$/, '') : route;
  if (pathname === '/') {
    return 'ovhcloud-design-system-welcome.txt';
  }

  const component = pathname.match(/^\/components\/([^/]+)(?:\/(technical|examples))?$/);
  if (component) {
    const [, key, tab] = component;
    if (!flattenPages().some((page) => page.path === `/components/${key}`)) {
      return null;
    }
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
    const entry = helpersInventory.find((candidate) => candidate.mdx === helper[1]);
    return entry ? `${entry.slug}--documentation.txt` : null;
  }

  return null;
}

export { llmsFileFor };
