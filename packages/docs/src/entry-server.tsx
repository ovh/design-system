import { prerender } from 'react-dom/static';
import { StaticRouterProvider, createStaticHandler, createStaticRouter } from 'react-router-dom';
import { PRERENDER_BASE } from './appBase';
import { FewHeadingsContext, hasFewHeadings } from './doc/DocArticle';
import { createUniqueSlugs } from './doc/slug';
import { flattenPages } from './nav/model';
import { titleOf } from './nav/pages';
import { componentTabs } from './pages/ComponentDoc';
import { routes } from './routes';
import { THEME_FILES, themeBootScript } from './shell/themeBoot';

const handler = createStaticHandler(routes, { basename: PRERENDER_BASE });

/* The HTML of one route, rendered under PRERENDER_BASE: the shell, the navigation and the page
   text, the demos and the tools as their skeleton (they only render in the browser). A page that
   failed to render fails the build, where it would publish a skeleton or an error page. */
async function render(path: string): Promise<{ html: string, title: string }> {
  const html = await renderHtml(path, false);
  // An article with too few headings for a table of contents: rendered again knowing it, as the
  // browser does from the HTML (FewHeadingsContext).
  const article = html.slice(html.indexOf('<article'), html.indexOf('</article>'));
  const levels = [...article.matchAll(/<h([23])\b[^>]*\sid="/g)].map((match) => Number(match[1]));
  return { html: uniqueHeadingIds(article && hasFewHeadings(levels) ? await renderHtml(path, true) : html), title: titleOf(path) };
}

/* A page repeating a heading label ("Related Sources" under each section) renders the same id
   for each: the browser renames the repeats once hydrated (DocArticle's dedupeHeadingIds), the
   HTML gets the same ids before, so that a shared #related-sources-2 lands without the scripts.
   Same rule, same order: the headings of the article by their data-slug, each with its anchor. */
function uniqueHeadingIds(html: string): string {
  const start = html.indexOf('<article');
  const end = html.indexOf('</article>');
  if (start < 0 || end < 0) {
    return html;
  }
  const unique = createUniqueSlugs();
  const article = html.slice(start, end).replace(
    /(<h[2-6]\b[^>]*\sdata-slug="([^"]+)"[^>]*\sid=")[^"]*("[^>]*>[\s\S]*?<\/h[2-6]><a\b[^>]*\shref="#)[^"]*(")/g,
    (_match, heading: string, slug: string, between: string, close: string) => {
      const id = unique(slug);
      return `${heading}${id}${between}${id}${close}`;
    },
  );
  return `${html.slice(0, start)}${article}${html.slice(end)}`;
}

async function renderHtml(path: string, fewHeadings: boolean): Promise<string> {
  const context = await handler.query(new Request(`http://prerender${PRERENDER_BASE}${path}`));
  if (context instanceof Response) {
    throw new Error(`${path}: the route answered ${context.status}`);
  }
  const errors: unknown[] = [];
  const { prelude } = await prerender(
    <FewHeadingsContext.Provider value={ fewHeadings }>
      { /* No data to hand over to the browser router (hydrate): it starts from the URL. */ }
      <StaticRouterProvider context={ context } hydrate={ false } router={ createStaticRouter(handler.dataRoutes, context) } />
    </FewHeadingsContext.Provider>,
    {
      // A boundary rendered on the server, and failed there, would show its skeleton in the HTML.
      onError: (error) => {
        errors.push(error);
      },
      // prerender() waits for every Suspense boundary; past progressiveChunkSize (12,800 bytes by
      // default) it would still write a boundary out of place, its skeleton inline and its content
      // in a hidden node a script swaps in. No limit: every boundary is written in place.
      progressiveChunkSize: Number.POSITIVE_INFINITY,
    },
  );
  const html = await new Response(prelude).text();
  if (errors.length || context.errors) {
    throw new Error(`${path}: ${String(errors[0] ?? Object.values(context.errors ?? {})[0])}`);
  }
  if (/class="shell__error"|class="doc__not-found"/.test(html)) {
    throw new Error(`${path}: rendered an error or not found page`);
  }
  return html;
}

/* Every page of the app: each page of the navigation, and each tab of a component page past its
   first (the first one is the page path itself). */
function paths(): string[] {
  return ['/', ...flattenPages().flatMap((page) => [
    page.path,
    ...(page.kind === 'component' && page.stories
      ? componentTabs(page.id.replace('components/', '')).slice(1).map((tab) => `${page.path}/${tab.value}`)
      : []),
  // '/' is also the hidden Welcome page of the navigation: the filter drops the repeat.
  ])].filter((path, index, all) => all.indexOf(path) === index);
}

export { PRERENDER_BASE, THEME_FILES, paths, render, themeBootScript };
