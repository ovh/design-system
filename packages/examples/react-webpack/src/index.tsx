import React from 'react';
import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import { App } from 'app/App';
// import { RouterApp } from 'router-app/RouterApp';
// import '@ovhcloud/ods-themes/dark';
import '@ovhcloud/ods-themes/default';

const appElement = document.getElementById('app');
const root = createRoot(appElement!);

function renderApp() {
  root.render(
    <App />,
  );
}

// function renderRouterApp() {
//   root.render(
//     <BrowserRouter>
//       <RouterApp />
//     </BrowserRouter>
//   );
// }

renderApp();
// renderRouterApp();
