import '@ovhcloud/ods-react/normalize-css';
import '@ovhcloud/ods-themes/default/css';
import '@ovhcloud/ods-themes/default/fonts';
import { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { Navigate, RouterProvider, createBrowserRouter, useOutletContext, useParams } from 'react-router-dom';
import { Skeleton } from '../../ods-react/src/components/skeleton/src';
import { Homepage } from './doc/ports/homepage/Homepage';
import { flattenPages } from './nav/model';
import { ComponentDoc } from './pages/ComponentDoc';
import { GuideDoc } from './pages/GuideDoc';
import { HelperDoc } from './pages/HelperDoc';
import { ErrorPage } from './shell/ErrorPage';
import { Shell, type ShellContext } from './shell/Shell';

const Sandbox = lazy(() => import('./sandbox/Sandbox').then((m) => ({ default: m.Sandbox })));
const ChangelogPage = lazy(() => import('./pages/ChangelogPage'));

const ComponentRoute = () => {
  const { key } = useParams();
  const { tokens } = useOutletContext<ShellContext>();
  const page = flattenPages().find((p) => p.id === `components/${key}`);

  if (!page || !page.storiesModule || !page.raw) {
    return <Navigate replace to="/" />;
  }
  return <ComponentDoc key={ page.id } page={ page } tokens={ tokens } />;
};

const SandboxRoute = () => {
  const { tokens } = useOutletContext<ShellContext>();
  return (
    <Suspense fallback={
      <div style={{ display: 'grid', gap: '16px' }}>
        <Skeleton style={{ height: '280px', width: '100%' }} />
        <Skeleton style={{ borderRadius: '4px', height: '74px', width: '100%' }} />
      </div>
    }>
      <Sandbox dark={ false } tokens={ tokens } />
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

const ChangelogRoute = () => (
  <Suspense fallback={ <Skeleton style={{ height: '320px', width: '100%' }} /> }>
    <ChangelogPage />
  </Suspense>
);

const router = createBrowserRouter([
  {
    element: <Shell />,
    errorElement: <ErrorPage />,
    children: [
      { element: <Homepage />, path: '/' },
      { element: <ChangelogRoute />, path: '/guides/changelog' },
      { element: <GuideRoute />, path: '/guides/:key' },
      { element: <HelperRoute />, path: '/helpers/:key' },
      { element: <ComponentRoute />, path: '/components/:key/:tab?' },
      { element: <SandboxRoute />, path: '/tools/sandbox' },
      { element: <Navigate replace to="/" />, path: '*' },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(<RouterProvider router={ router } />);
