import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from 'app/App';
import '@ovhcloud/ods-themes/default';

const appElement = document.getElementById('app');
const root = createRoot(appElement!);

function renderApp() {
  root.render(
    <App />,
  );
}

renderApp();
