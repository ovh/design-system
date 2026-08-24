#! /usr/bin/env node

const fs = require('fs').promises;
const currentVersion = require('../../../lerna.json').version;

const EXCLUDED_VERSIONS = ['16.0.0'];

async function getVersions() {
  try {
    const registry = (process.env.npm_config_registry || 'https://registry.npmjs.org').replace(/\/$/, '');
    // Dual lineage: versions <= 19.7.x live in the legacy @ovhcloud/ods-storybook
    // package (frozen Storybook builds), newer ones in @ovhcloud/ods-docs.
    const packages = ['@ovhcloud/ods-storybook', '@ovhcloud/ods-docs'];
    const lists = await Promise.all(packages.map((name) => fetch(`${registry}/${name}`).then(r => r.json()).catch(() => null)));
    const merged = lists.flatMap((data) => (data && data.versions) ? Object.keys(data.versions) : []);

    // In case of new release, new version is not yet in the registry list, so we add it manually
    const versions = merged.concat([currentVersion]);

    return versions
      .filter((version) => EXCLUDED_VERSIONS.indexOf(version) < 0)
      // But when starting locally, this could end up with current version being added twice, so we ensure uniqueness
      .filter((version, index, array) => array.indexOf(version) === index)
      .sort()
      .reverse()
      .filter((version) => version === currentVersion || !/-alpha\.\d+$/gi.test(version));
  } catch(error) {
    console.error('Something went wrong while fetching release version on npm', error);
    return [currentVersion];
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
