/**
 * execution from directory: `yarn list:releases`
 * execution from monorepo with lerna `lerna run list:releases`
 */
const fs = require('fs');
const fetch = require('node-fetch');
const path = require('path');
const { version: currentVersion } = require (path.resolve(process.cwd(), 'package.json'));

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
    const versions = Object.keys(data.versions).sort().reverse();

    // During release, npm registry does not know yet the new version that will get published
    // so we need to add it manually
    if (versions.length && versions[0] !== currentVersion) {
      versions.unshift(currentVersion);
    }

    versions.forEach((version, index) => {
      const latest = index === 0;
      availableVersions[version + (latest ? ' (latest)' : '')] = latest ? 'latest' : version;
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
      console.log(`${file} written with success`);
    }
  });
})();
