import React from 'react';
import ReactDOM from 'react-dom/client';
import { componentFactories } from '../dynamic-renderer';

// require(process.env.REACT_APP_FILE_NAME);
console.log(componentFactories)

//./tests/rendering/ods-text.e2e.tsx
// @ts-ignore
// await import('../../rendering/ods-text.e2e.tsx');
// require('../../rendering/ods-text.e2e.tsx');

const testFile = new URLSearchParams(window.location.search).get('testFile');

// await import(/* @vite-ignore */ testFile!);


const testName = new URLSearchParams(window.location.search).get('testName');
const root = ReactDOM.createRoot(document.getElementById('root')!);
console.log(testFile);

// await import(/* @vite-ignore */ testFile!);
const app = <div id="ready">{testName}</div>
// const app = testName
//   ? componentFactories[testName]()
//   : <div id="ready" />;

root.render(
  <React.StrictMode>
    { app }
  </React.StrictMode>
);
