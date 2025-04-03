import React, { createRoot } from 'react-dom/client';
import { StrictMode, Suspense, lazy } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { componentNames } from './components';
import '@ovhcloud/ods-themes/default';

const root = createRoot(document.getElementById('root')!);

function renderApp() {
  root.render(
    <StrictMode>
      <BrowserRouter>
        <Suspense>
          <Routes>
            {
              componentNames.map((componentName, idx) => {
                const Component = lazy(() =>
                  import(/* @vite-ignore */
                    `./components/ods-${componentName}`).then(comp => comp)
                );

                return (
                  <Route key={ idx }
                         path={ `/ods-${componentName}` }
                         element={ <Component /> } />
                )
              })
            }

            <Route path="*" element={
              <ul>
                {
                  componentNames.map((componentName, idx) => (
                    <li key={ idx }>
                      <Link id={ `ods-${componentName}` }
                            to={ `/ods-${componentName}` }>ods-{ componentName }</Link>
                    </li>
                  ))
                }
              </ul>
            } />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </StrictMode>
  );
}

renderApp();
