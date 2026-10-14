import '@ovhcloud/ods-react/normalize-css';
import '@ovhcloud/ods-themes/default/css';
import '@ovhcloud/ods-themes/default/fonts';
import { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { Navigate, RouterProvider, createBrowserRouter, useOutletContext, useParams, useSearchParams } from 'react-router-dom';
import { BASENAME } from './appBase';
import { Skeleton } from '../../ods-react/src/components/skeleton/src';
import guidesInventory from './content/guides/guides.json';
import { Homepage } from './doc/ports/homepage/Homepage';
import { flattenPages } from './nav/model';
import { ComponentDoc } from './pages/ComponentDoc';
import { GuideDoc } from './pages/GuideDoc';
import { HelperDoc } from './pages/HelperDoc';
import { RecipesDoc } from './pages/RecipesDoc';
import { decodeSnippet } from './sandbox/shareCode';
import { ErrorPage } from './shell/ErrorPage';
import { Shell, type ShellContext } from './shell/Shell';

const Sandbox = lazy(() => import('./sandbox/Sandbox').then((m) => ({ default: m.Sandbox })));
const ChangelogPage = lazy(() => import('./pages/ChangelogPage'));
const ThemeGenerator = lazy(() => import('./themeGenerator/ThemeGenerator').then((m) => ({ default: m.ThemeGenerator })));

const ComponentRoute = () => {
  const { key } = useParams();
  const { tokens } = useOutletContext<ShellContext>();
  const page = flattenPages().find((p) => p.id === `components/${key}`);

  if (!page || !page.stories) {
    return <Navigate replace to="/" />;
  }
  return <ComponentDoc key={ page.id } page={ page } tokens={ tokens } />;
};

const SandboxRoute = () => {
  const { tokens } = useOutletContext<ShellContext>();
  const [params] = useSearchParams();
  const initialCode = decodeSnippet(params.get('code'));
  return (
    <Suspense fallback={
      <div style={{ display: 'grid', gap: '16px' }}>
        <Skeleton style={{ height: '280px', width: '100%' }} />
        <Skeleton style={{ borderRadius: '4px', height: '74px', width: '100%' }} />
      </div>
    }>
      <Sandbox dark={ false } initialCode={ initialCode } tokens={ tokens } />
    </Suspense>
  );
};

const GuideRoute = () => {
  const { key } = useParams();
  const page = flattenPages().find((p) => p.id === `guides/${key}`);

  if (!page) {
    return <Navigate replace to="/" />;
  }
  return <GuideDoc key={ page.id } page={ page } />;
};

const HelperRoute = () => {
  const { key } = useParams();
  const page = flattenPages().find((p) => p.id === `helpers/${key}`);

  if (!page) {
    return <Navigate replace to="/" />;
  }
  return <HelperDoc key={ page.id } page={ page } />;
};

const RecipesRoute = () => {
  const { key } = useParams();
  const page = flattenPages().find((p) => p.id === `recipes/${key}`);

  if (!page) {
    return <Navigate replace to="/" />;
  }
  return <RecipesDoc key={ page.id } page={ page } />;
};

const ChangelogRoute = () => (
  <Suspense fallback={ <Skeleton style={{ height: '320px', width: '100%' }} /> }>
    <ChangelogPage />
  </Suspense>
);

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
        : page.kind === 'recipe' ? [`Recipes/${page.title}`]
        : [`OVHcloud Design System/${page.section ?? ''}/${page.title}`];
      return legacyTitles.some((title) => sanitize(title) === slug);
    });
  const path = full === 'react-components-icon--gallery' ? '/components/icon/gallery' : target?.path ?? '/';
  bounced.delete('path');
  const rest = bounced.toString();
  history.replaceState(null, '', `${BASENAME}${path}${rest ? `?${rest}` : ''}${window.location.hash}`);
}

const router = createBrowserRouter([
  {
    element: <Shell />,
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
        element: (
          <Suspense fallback={ <Skeleton style={{ height: '480px', width: '100%' }} /> }>
            <ThemeGenerator />
          </Suspense>
        ),
        path: '/tools/theme-generator',
      },
      { element: <Navigate replace to="/" />, path: '*' },
    ],
  },
], { basename: BASENAME });

createRoot(document.getElementById('root')!).render(<RouterProvider router={ router } />);
