#! /usr/bin/env node

const fs = require('fs').promises;
const fetch = require('node-fetch');

async function getVersions() {
  try {
    const data = await fetch(`https://registry.npmjs.org/@ovhcloud/ods-storybook`).then(r => r.json());

    if (!data || !data.versions) {
      return [];
    }

    return (Object.keys(data.versions) || []).sort().reverse();
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
