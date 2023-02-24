/**
 * execution from directory: `npm list:releases username token`
 * execution from directory: `yarn list:releases -- username token`
 * execution from monorepo with lerna `lerna run list:releases -- -- username token`
 */
const fetch = require('node-fetch');
const fs = require('fs');
const args = process.argv.slice(2);
const username = args[0];
const token = args[1];
const file = './public/releases.js';

if (!username || !token) {
  console.error(`you must call the script with credentials like: npx zx ${process.argv[1]} user@domain <token>`);
  process.exit(1);
}

(async () => {

  const data = await fetch(``).then(r => r.json());
  // console.log(JSON.stringify(data, undefined ,2));

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
