import { type ReactNode, Suspense, lazy } from 'react';
import { Navigate, type RouteObject, useLocation, useOutletContext, useParams, useSearchParams } from 'react-router-dom';
import { Skeleton } from '../../ods-react/src/components/skeleton/src';
import { DocArticle } from './doc/DocArticle';
import { DocSkeleton } from './doc/DocSkeleton';
import { Homepage } from './doc/ports/homepage/Homepage';
import { lazyOnce, loadOnce } from './nav/loadOnce';
import { flattenPages } from './nav/model';
import { pageOf } from './nav/pages';
import { useHydrated } from './nav/useHydrated';
import { ComponentDoc, preloadComponentDoc } from './pages/ComponentDoc';
import { GuideDoc, preloadGuideDoc } from './pages/GuideDoc';
import { HelperDoc, preloadHelperDoc } from './pages/HelperDoc';
import { NotFound } from './pages/NotFound';
import { RecipesDoc, preloadRecipesDoc } from './pages/RecipesDoc';
import { decodeSnippet } from './sandbox/shareCode';
import { ErrorPage } from './shell/ErrorPage';
import { Shell, type ShellContext } from './shell/Shell';

const Sandbox = lazy(() => import('./sandbox/Sandbox').then((m) => ({ default: m.Sandbox })));
const loadChangelog = () => import('./pages/ChangelogPage');
const ChangelogPage = lazyOnce(loadChangelog, loadChangelog);
const ThemeGenerator = lazy(() => import('./themeGenerator/ThemeGenerator').then((m) => ({ default: m.ThemeGenerator })));
const ComponentGallery = lazy(() => import('./componentGallery/ComponentGallery').then((m) => ({ default: m.ComponentGallery })));

const ComponentRoute = () => {
  const { key } = useParams();
  const { tokens } = useOutletContext<ShellContext>();
  const page = flattenPages().find((p) => p.id === `components/${key}`);

  if (!page || !page.stories) {
    return <NotFound />;
  }
  return <ComponentDoc key={ page.id } page={ page } tokens={ tokens } />;
};

const SANDBOX_SKELETON = (
  <div style={{ display: 'grid', gap: '16px' }}>
    <Skeleton style={{ height: '280px', width: '100%' }} />
    <Skeleton style={{ borderRadius: 'var(--ods-semantic-size-radius-control)', height: '74px', width: '100%' }} />
  </div>
);

const TOOL_SKELETON = <Skeleton style={{ height: '480px', width: '100%' }} />;

/* A tool (the sandbox, the generator, the gallery) is an application of its own, built from what the
   browser has: the pre-rendered page holds its skeleton, and the tool renders once hydrated. */
const ToolRoute = ({ children, fallback }: { children: ReactNode, fallback: ReactNode }) => (
  <Suspense fallback={ fallback }>{ useHydrated() ? children : fallback }</Suspense>
);

const SandboxRoute = () => {
  const { tokens } = useOutletContext<ShellContext>();
  const [params] = useSearchParams();
  const initialCode = decodeSnippet(params.get('code'));
  return (
    <ToolRoute fallback={ SANDBOX_SKELETON }>
      <Sandbox dark={ false } initialCode={ initialCode } tokens={ tokens } />
    </ToolRoute>
  );
};

/* Version headings and entries that left their guide keep their old #anchor
   working: the previous majors of What's new got a page each (v12 and earlier
   share the last one, which also holds the undated "February 2022" entry), the
   troubleshooting entries left the F.A.Q. The numbered sub-section anchors of
   What's new, such as #bug-fixes-12, are not mapped: their number changed with
   the split. */
const TROUBLESHOOTING_ANCHORS = new Set([
  'ts2307-cannot-find-module-ovhcloud-ods-react-or-its-corresponding-type-declarations',
  'my-popover-tooltip-is-not-displayed-correctly',
  'overlay-elements-are-not-displayed-correctly-in-a-drawer-modal',
  'icons-are-not-displayed',
  'warning-function-components-cannot-be-given-refs',
]);

function movedGuide(key: string | undefined, hash: string): string | undefined {
  const anchor = hash.slice(1);
  if (key === 'whats-new') {
    const major = anchor === 'february-2022' ? 12 : Number(/^v(\d+)-/.exec(anchor)?.[1]);
    const target = major && flattenPages().find((p) => p.id === `guides/whats-new-v${Math.max(major, 12)}`);
    return target ? target.path : undefined;
  }
  if (key === 'faq' && TROUBLESHOOTING_ANCHORS.has(anchor)) {
    return '/guides/troubleshooting';
  }
  return undefined;
}

const GuideRoute = () => {
  const { key } = useParams();
  const { hash } = useLocation();
  const page = flattenPages().find((p) => p.id === `guides/${key}`);
  const moved = movedGuide(key, hash);

  if (!page) {
    return <NotFound />;
  }
  // The page renders while it redirects: its pre-rendered HTML knows no hash, and hydration expects it.
  return (
    <>
      { moved && <Navigate replace to={ `${moved}${hash}` } /> }
      <GuideDoc key={ page.id } page={ page } />
    </>
  );
};

const HelperRoute = () => {
  const { key } = useParams();
  const page = flattenPages().find((p) => p.id === `helpers/${key}`);

  if (!page) {
    return <NotFound />;
  }
  return <HelperDoc key={ page.id } page={ page } />;
};

const RecipesRoute = () => {
  const { key } = useParams();
  const page = flattenPages().find((p) => p.id === `recipes/${key}`);

  if (!page) {
    return <NotFound />;
  }
  return <RecipesDoc key={ page.id } page={ page } />;
};

const ChangelogRoute = () => (
  <Suspense fallback={ <DocArticle><DocSkeleton variant="guide" /></DocArticle> }>
    <ChangelogPage />
  </Suspense>
);

/* The chunks the first render of a route reads, loaded: hydrated with them, the page renders as
   its HTML is, where a chunk still in flight would let React swap a boundary for its skeleton
   (the component Tabs update their state on hydration, and that update reaches it). The tools and
   the pages without chunks resolve at once. */
const preloadRoute = (path: string): Promise<unknown> => {
  if (path === '/guides/changelog') {
    return loadOnce(loadChangelog, loadChangelog);
  }
  const page = pageOf(path);
  switch (page?.kind) {
    case 'component':
      return page.stories ? preloadComponentDoc(page, path.slice(page.path.length + 1) || undefined) : Promise.resolve();
    case 'guide':
      return preloadGuideDoc(page);
    case 'helper':
      return preloadHelperDoc(page);
    case 'recipe':
      return preloadRecipesDoc(page);
    default:
      return Promise.resolve();
  }
};

/* The routes of the app, shared by the browser router (main.tsx) and the pre-render (entry-server.tsx). */
const routes: RouteObject[] = [
  {
    element: <Shell preload={ preloadRoute } />,
    errorElement: <ErrorPage />,
    children: [
      { element: <Homepage />, path: '/' },
      { element: <ChangelogRoute />, path: '/guides/changelog' },
      { element: <GuideRoute />, path: '/guides/:key' },
      { element: <HelperRoute />, path: '/helpers/:key' },
      { element: <RecipesRoute />, path: '/recipes/:key' },
      { element: <ComponentRoute />, path: '/components/:key/:tab?' },
      { element: <SandboxRoute />, path: '/tools/sandbox' },
      {
        element: <ToolRoute fallback={ TOOL_SKELETON }><ThemeGenerator /></ToolRoute>,
        path: '/tools/theme-generator',
      },
      {
        element: <ToolRoute fallback={ TOOL_SKELETON }><ComponentGallery /></ToolRoute>,
        path: '/tools/component-gallery',
      },
      { element: <NotFound />, path: '*' },
    ],
  },
];

export { preloadRoute, routes };
