import '@ovhcloud/ods-react/normalize-css';
import '@ovhcloud/ods-themes/default/css';
import '@ovhcloud/ods-themes/default/fonts';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { APP_ROOT, BASENAME } from './appBase';
import guidesInventory from './content/guides/guides.json';
import { flattenPages } from './nav/model';
import { preloadRoute, routes } from './routes';

const container = document.getElementById('root')!;

/* A pre-rendered page (scripts/prerender.mjs) holds URLs relative to its own folder, so that it
   serves under every prefix. They would break as soon as the URL changes (the trailing slash
   dropped below, then every navigation): back to absolute ones, resolved against the URL the page
   was served at, so before any replaceState. A link of the app is the path the router writes,
   which hydration must find: React 19 does not patch a mismatched attribute, the server href would
   stay. Any other URL (a stylesheet, an image) is the full one a Vite import gives. */
document.querySelectorAll<HTMLElement>('[href^="./"], [href^="../"], [src^="./"], [src^="../"]').forEach((element) => {
  const attribute = element.hasAttribute('src') ? 'src' : 'href';
  const url = new URL(element.getAttribute(attribute)!, window.location.href);
  const isPage = element instanceof HTMLAnchorElement && container.contains(element) && !url.pathname.startsWith(new URL('assets/', APP_ROOT).pathname);
  element.setAttribute(attribute, isPage ? `${url.pathname.length > 1 ? url.pathname.replace(/\/$/, '') : url.pathname}${url.search}${url.hash}` : url.href);
});

/* A pre-rendered page is a folder: the host serves …/components/button as …/components/button/.
   The app's own URLs have no trailing slash, the one a reader shares keeps that form. */
if (window.location.pathname.length > BASENAME.length + 1 && window.location.pathname.endsWith('/')) {
  history.replaceState(history.state, '', `${window.location.pathname.replace(/\/+$/, '')}${window.location.search}${window.location.hash}`);
}

/* The router does not know <root>/index.html and would end on NotFound. The
   query and hash are kept for the ?p= and legacy ?path= rewrites below. */
if (window.location.pathname === `${BASENAME}/index.html`) {
  history.replaceState(null, '', `${BASENAME}/${window.location.search}${window.location.hash}`);
}

/* Static hosts (gh-pages, the CI preview) have no server rewrites: deep links
   bounce off the root 404.html (or are emitted directly by the app for
   new-tab opens) as <root>/?p=/route&other=params. Restore the real URL
   before the router mounts so the route resolves and stays shareable. */
const bounced = new URLSearchParams(window.location.search);
const deepLink = bounced.get('p');
const legacyLink = bounced.get('path');
if (deepLink && deepLink.startsWith('/')) {
  bounced.delete('p');
  const rest = bounced.toString();
  history.replaceState(null, '', `${BASENAME}${deepLink}${rest ? `?${rest}` : ''}${window.location.hash}`);
} else if (legacyLink) {
  /* Legacy Storybook deep links (…/?path=/docs/components-button--documentation)
     hit an existing path, so the 404 bounce never runs: map the story slug back
     onto the matching route. Guides match through their frozen legacy slug
     (guides.json, the llms inventory), immune to title rewording; the icon
     gallery — a sibling doc page in Storybook — maps onto the icon page's
     gallery tab; everything else is recomputed from the nav model the same way
     Storybook sanitized its story titles ('React Components/Button Group' →
     react-components-button-group); unmatched slugs land on the homepage, as
     before. */
  const full = legacyLink.replace(/^\/(?:docs|story)\//, '');
  const slug = full.replace(/--.*$/, '');
  const sanitize = (title: string): string => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const guide = guidesInventory.guides.find((entry) => entry.slug === slug);
  const target = (guide && flattenPages().find((page) => page.id === `guides/${guide.mdx}`))
    || flattenPages().find((page) => {
      const legacyTitles = page.kind === 'component' ? [`React Components/${page.title}`, `Components/${page.title}`]
        : page.kind === 'helper' ? [`Helpers/${page.title}`]
        : page.kind === 'recipe' ? [`Recipes/${page.title}`, ...(page.id === 'recipes/components' ? ['Recipes/Components'] : [])]
        : [`OVHcloud Design System/${page.section ?? ''}/${page.title}`];
      return legacyTitles.some((title) => sanitize(title) === slug);
    });
  // Pages whose place in the tree changed since Storybook: their old slug no longer derives from it.
  const moved: Record<string, string> = {
    'ovhcloud-design-system-tools-component-gallery': '/tools/component-gallery',
    'ovhcloud-design-system-what-s-new-changelog': '/guides/changelog',
    // The "Latest version" link of the changelog entries up to 19.7.3.
    'design-system-changelog': '/guides/changelog',
    'react-components-icon--gallery': '/components/icon/gallery',
  };
  const path = moved[full] ?? moved[slug] ?? target?.path ?? '/';
  bounced.delete('path');
  const rest = bounced.toString();
  history.replaceState(null, '', `${BASENAME}${path}${rest ? `?${rest}` : ''}${window.location.hash}`);
}

const router = createBrowserRouter(routes, { basename: BASENAME });

/* The pre-rendered HTML is hydrated where it is the page of the URL, once the chunks its first render
   reads have loaded (preloadRoute); the root page a deep link bounced off (?p=) holds the homepage,
   which the app renders over. */
const routePath = window.location.pathname.slice(BASENAME.length).replace(/\/+$/, '') || '/';
if (container.dataset.path === routePath) {
  // A chunk that fails to load is the page's error to show: hydrate all the same.
  preloadRoute(routePath).catch(() => {}).finally(() => hydrateRoot(container, <RouterProvider router={ router } />));
} else {
  createRoot(container).render(<RouterProvider router={ router } />);
}
