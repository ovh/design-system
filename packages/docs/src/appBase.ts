/* Where the app is deployed. gh-pages serves each version under
   /design-system/vX.Y.Z/ (or /latest/) and the CI branch previews under their
   own prefix, so nothing may assume the site root. The build uses base './',
   which puts every chunk in <deploy-root>/assets/: the root is one level up
   from this very module. In dev Vite serves modules under /@fs/<abs-path>
   URLs, which would derive garbage — the dev server root is simply '/'. */
export const APP_ROOT = import.meta.env.DEV
  ? new URL('/', window.location.href)
  : new URL('..', import.meta.url);

/* Router basename: the deploy-root pathname, without trailing slash ('' at
   the site root — what createBrowserRouter expects). */
export const BASENAME = APP_ROOT.pathname.replace(/\/$/, '');
