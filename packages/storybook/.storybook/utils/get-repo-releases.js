/**
 * execution from directory: `npm list:releases`
 * execution from directory: `yarn list:releases`
 * execution from monorepo with lerna `lerna run list:releases`
 */
const fetch = require('node-fetch');
const fs = require('fs');
const file = './public/releases.js';

(async () => {
  const data = await fetch(`https://registry.npmjs.org/@ovhcloud/ods-storybook`).then(r => r.json());

  const availableVersions = {};
  let withErrors = false;

  if (!data || data.errors || data.error || !data.versions) {
    console.error(`something went wrong with the response`, {response: data});
    // fallback the error in order to avoid side effects
    availableVersions.latest = 'latest';
    withErrors = true;
  } else {
    const versions = Object.keys(data.versions);
    versions.sort().reverse().map((version, key) => {
      const last = !key;
      availableVersions[version + (last ? ' (latest)' : '')] = last ? 'latest' : version;
    });
  }

  fs.writeFile(file, `export const releases = ${JSON.stringify(availableVersions, 1, 2)}`, (err) => {
    if (err) {
      console.error(`file write error.`, {availableVersions});
      throw err;
    }

    if (withErrors) {
      console.error(`some errors happened. only latest will be available in ${file}`, {availableVersions});
      process.exit(1);
    } else {
      console.log(`${file} written with success`, {availableVersions});
    }
  });


})();
