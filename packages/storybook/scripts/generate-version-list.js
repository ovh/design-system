#! /usr/bin/env node

const fs = require('fs').promises;
const fetch = require('node-fetch');
const currentVersion = require('../package.json').version;

const EXCLUDED_VERSIONS = ['16.0.0'];

async function getVersions() {
  try {
    const data = await fetch(`https://registry.npmjs.org/@ovhcloud/ods-storybook`).then(r => r.json());

    if (!data || !data.versions) {
      return [];
    }

    // In case of new release, new version is not yet in the registry list, so we add it manually
    const versions = (Object.keys(data.versions) || []).concat([currentVersion]);

    return versions
      .filter((version) => EXCLUDED_VERSIONS.indexOf(version) < 0)
      // But when starting locally, this could end up with current version being added twice, so we ensure uniqueness
      .filter((version, index, array) => array.indexOf(version) === index)
      .sort()
      .reverse()
      .filter((version) => version === currentVersion || !/-alpha\.\d+$/gi.test(version));
  } catch(error) {
    console.error('Something went wrong while fetching release version on npm', error);
  }
}

async function writeOutput(versions, outputFile) {
  try {
    await fs.writeFile(outputFile, JSON.stringify(versions), 'utf8');
  } catch(error) {
    console.error('Something went wrong while writing the versions file', error);
  }
}

(async function main() {
  try {
    const outputFile = process.argv[2];
    const versions = await getVersions();

    await writeOutput(versions, outputFile);
  } catch {
    process.exitCode = 1;
  }
})();
