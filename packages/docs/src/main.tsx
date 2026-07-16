import '@ovhcloud/ods-react/normalize-css';
import '@ovhcloud/ods-themes/default/css';
import '@ovhcloud/ods-themes/default/fonts';
import { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { Navigate, RouterProvider, createBrowserRouter, useOutletContext, useParams } from 'react-router-dom';
import { Skeleton } from '../../ods-react/src/components/skeleton/src';
import { flattenPages } from './nav/model';
import { ComponentDoc } from './pages/ComponentDoc';
import { Shell, type ShellContext } from './shell/Shell';

const Sandbox = lazy(() => import('./sandbox/Sandbox').then((m) => ({ default: m.Sandbox })));

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

const router = createBrowserRouter([
  {
    element: <Shell />,
    children: [
      { element: <Navigate replace to="/components/button" />, path: '/' },
      { element: <ComponentRoute />, path: '/components/:key' },
      { element: <SandboxRoute />, path: '/tools/sandbox' },
      { element: <Navigate replace to="/" />, path: '*' },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(<RouterProvider router={ router } />);
