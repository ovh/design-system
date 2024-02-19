import React, { createRoot } from 'react-dom/client';
import { StrictMode, Suspense, lazy } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// TODO automate
const Spinner = lazy(() => import('./ods-spinner'));
const Text = lazy(() => import('./ods-text'));

const root = createRoot(document.getElementById('root')!);

function renderApp() {
  root.render(
    <StrictMode>
      <BrowserRouter>
        <Suspense>
          <Routes>
            <Route path="/ods-spinner" element={ <Spinner /> } />
            <Route path="/ods-text" element={ <Text /> } />
            <Route path="*" element={
              <ul>
                <li>
                  <Link id="ods-spinner" to="/ods-spinner">ods-spinner</Link>
                </li>
                <li>
                  <Link id="ods-text" to="/ods-text">ods-text</Link>
                </li>
              </ul>
            } />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </StrictMode>
  );
}

renderApp();
