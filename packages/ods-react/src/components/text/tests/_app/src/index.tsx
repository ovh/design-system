import React from 'react';
import ReactDOM from 'react-dom/client';
//import { componentFactories } from './puppeteer-testing';
import { componentFactories } from '../dynamic-renderer';

// require(process.env.REACT_APP_FILE_NAME);

//./tests/rendering/ods-text.e2e.tsx
// @ts-ignore
//await import('../../rendering/ods-text.e2e.tsx');
await import.meta.glob('../../rendering/*.tsx', { eager: true });
// require('../../rendering/ods-text.e2e.tsx');

// const testFile = new URLSearchParams(window.location.search).get('testFile');

// await import(/* @vite-ignore */ testFile!);


const testName = new URLSearchParams(window.location.search).get('testName');
const root = ReactDOM.createRoot(document.getElementById('root')!);

console.log(testName)
const app = testName
  ? componentFactories[testName]()
  : <div id="ready" />;

root.render(
  <React.StrictMode>
    { app }
  </React.StrictMode>
);
