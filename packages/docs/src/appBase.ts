/* Where the app is deployed. gh-pages serves each version under
   /design-system/vX.Y.Z/ (or /latest/) and the CI branch previews under their
   own prefix, so nothing may assume the site root. The build uses base './',
   which puts every chunk in <deploy-root>/assets/: the root is one level up
   from this very module. In dev Vite serves modules under /@fs/<abs-path>
   URLs, which would derive garbage — the dev server root is simply '/'.
   The pre-render has no deploy root: it renders under PRERENDER_BASE, which
   scripts/prerender.mjs turns into a path relative to each page, so that one
   build serves under every prefix. What renders uses APP_ROOT.pathname, never
   its href: that would write http://prerender into the pre-rendered HTML. */
const PRERENDER_BASE = '/__ods_docs_base__';

function appRoot(): URL {
  if (import.meta.env.SSR) {
    return new URL(`${PRERENDER_BASE}/`, 'http://prerender');
  }
  return import.meta.env.DEV ? new URL('/', window.location.href) : new URL('..', import.meta.url);
}

const APP_ROOT = appRoot();

/* Router basename: the deploy-root pathname, without trailing slash ('' at
   the site root — what createBrowserRouter expects). */
const BASENAME = APP_ROOT.pathname.replace(/\/$/, '');

export { APP_ROOT, BASENAME, PRERENDER_BASE };
