import guidesInventory from '../content/guides/guides.json';

/* Route → llms filename, for the topbar "View as Markdown" link. The filenames
   follow the emission conventions of vite-plugin-llms.ts; guides carry their
   editorial legacy slug, read from the same guides.json the plugin uses.
   Returns null when the page has no llms document (gallery, tools, recipes,
   llms-excluded guides) — the link simply hides. */
function llmsFileFor(pathname: string): string | null {
  if (pathname === '/') {
    return 'ovhcloud-design-system-welcome.txt';
  }

  const component = pathname.match(/^\/components\/([^/]+)(?:\/(technical|examples))?$/);
  if (component) {
    const [, key, tab] = component;
    const suffix = tab === 'technical' ? '--technical-information' : tab === 'examples' ? '--examples' : '--documentation';
    return `react-components-${key}${suffix}.txt`;
  }

  const guide = pathname.match(/^\/guides\/([^/]+)$/);
  if (guide) {
    const entry = guidesInventory.guides.find((candidate) => candidate.mdx === guide[1]);
    return entry ? `${entry.slug}.txt` : null;
  }

  const helper = pathname.match(/^\/helpers\/([^/]+)$/);
  if (helper) {
    return `helpers-${helper[1].replace(/-/g, '').toLowerCase()}--documentation.txt`;
  }

  return null;
}

export { llmsFileFor };
