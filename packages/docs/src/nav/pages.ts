import { type NavPage, flattenPages } from './model';

/* The page a route path shows: a page of the navigation, or one of the tab views of a component
   page (/components/x/examples), the only sub-views the router has: any other nested path is a not
   found page, not the page it starts with. A trailing slash is ignored, as the router does. */
const pages = flattenPages();

function pageOf(path: string): NavPage | undefined {
  const pathname = path.length > 1 ? path.replace(/\/+$/, '') : path;
  return pages.find((page) => page.path === pathname)
    ?? pages.find((page) => page.kind === 'component' && pathname.startsWith(`${page.path}/`)
      && !pathname.slice(page.path.length + 1).includes('/'));
}

/* The title of the browser tab on a route: Shell.tsx sets it, the pre-render writes it. */
function titleOf(path: string): string {
  const title = pageOf(path)?.title ?? (path === '/' ? undefined : 'Page not found');
  return title ? `${title} — OVHcloud Design System` : 'OVHcloud Design System';
}

export { pageOf, titleOf };
