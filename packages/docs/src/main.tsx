import '@ovhcloud/ods-react/normalize-css';
import '@ovhcloud/ods-themes/default/css';
import '@ovhcloud/ods-themes/default/fonts';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { APP_ROOT, BASENAME } from './appBase';
import guidesInventory from './content/guides/guides.json';
import { FewHeadingsContext, hasFewHeadings, tocHeadings } from './doc/DocArticle';
import { flattenPages } from './nav/model';
import { preloadRoute, routes } from './routes';

const container = document.getElementById('root')!;

/* A pre-rendered page (scripts/prerender.mjs) holds URLs relative to its folder, so that one build
   serves under every prefix. They break as soon as the URL changes (the trailing slash dropped
   below, then each navigation): they are made absolute first, against the URL the page was served
   at, or the folder its <base> names when served without its trailing slash. A link of the app
   becomes the path the router renders: React 19 does not patch a mismatched attribute on
   hydration, the server href would stay. Any other URL (a stylesheet, an image) becomes the full
   one a Vite import gives. */
document.querySelectorAll<HTMLElement>('[href^="./"], [href^="../"], [src^="./"], [src^="../"]').forEach((element) => {
  const attribute = element.hasAttribute('src') ? 'src' : 'href';
  const url = new URL(element.getAttribute(attribute)!, document.baseURI);
  const isPage = element instanceof HTMLAnchorElement && container.contains(element) && !url.pathname.startsWith(new URL('assets/', APP_ROOT).pathname);
  element.setAttribute(attribute, isPage ? `${url.pathname.length > 1 ? url.pathname.replace(/\/+$/, '') : url.pathname}${url.search}${url.hash}` : url.href);
});
// Resolved: a base would also resolve the heading anchors (#section) against the folder.
document.querySelector('head > base')?.remove();

/* The router does not know <route>/index.html and would end on NotFound: back to the folder, which the
   rule below turns into the route. The query and hash are kept for the ?p= and legacy ?path= rewrites
   below. */
if (window.location.pathname.endsWith('/index.html')) {
  history.replaceState(null, '', `${window.location.pathname.slice(0, -'index.html'.length)}${window.location.search}${window.location.hash}`);
}

/* A pre-rendered page is a folder: the host serves …/components/button as …/components/button/.
   The app's own URLs have no trailing slash, the one a reader shares keeps that form. Not the root:
   it keeps its slash, the form of the links to it (the version menu, the 404 bounce). */
if (window.location.pathname.length > BASENAME.length + 1 && window.location.pathname.endsWith('/')) {
  history.replaceState(history.state, '', `${window.location.pathname.replace(/\/+$/, '')}${window.location.search}${window.location.hash}`);
}

/* Static hosts (gh-pages, the CI preview) have no server rewrites: deep links
   to a path without its page bounce off the root 404.html as
   <root>/?p=/route&other=params, the form older shared links have too.
   Restore the real URL before the router mounts so the route resolves and
   stays shareable. */
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

const routePath = window.location.pathname.slice(BASENAME.length).replace(/\/+$/, '') || '/';

/* The root page hides its homepage HTML for a bounced link (?p=, ?path=, scripts/prerender.mjs),
   until the app has rendered the page of the link over it, its skeleton first. A link to the
   homepage shows its HTML at once. */
const bounceStyle = document.getElementById('ods-doc-bounce');
if (bounceStyle) {
  const reveal = () => {
    if (routePath === '/' || !container.querySelector('[data-page="homepage"]')) {
      observer.disconnect();
      bounceStyle.remove();
    }
  };
  const observer = new MutationObserver(reveal);
  observer.observe(container, { childList: true, subtree: true });
  reveal();
}

/* The pre-rendered HTML is hydrated where it is the page of the URL, once the chunks its first render
   reads have loaded (preloadRoute); the root page a deep link bounced off (?p=) holds the homepage,
   which the app renders over. */
if (container.dataset.path === routePath) {
  const article = container.querySelector('article.doc');
  const fewHeadings = !!article && hasFewHeadings(tocHeadings(article).map((heading) => (heading.tagName === 'H2' ? 2 : 3)));
  // A chunk that fails to load is the page's error to show: hydrate all the same.
  preloadRoute(routePath).catch(() => {}).finally(() => hydrateRoot(container, (
    <FewHeadingsContext.Provider value={ fewHeadings }>
      <RouterProvider router={ router } />
    </FewHeadingsContext.Provider>
  )));
} else {
  createRoot(container).render(<RouterProvider router={ router } />);
}
