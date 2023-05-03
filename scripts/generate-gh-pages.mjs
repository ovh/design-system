#!/usr/bin/env zx
/**
 * execution from monorepo:
 * `npx zx scripts/generate-gh-pages.mjs`
 */
import { resolve } from 'path';
import { tmpdir } from 'os';

const currentVersion = require('../lerna.json').version;
console.log('currentVersion=', currentVersion);

const packageName = '@ovhcloud/ods-storybook';
const tmpDirName = 'ods-gh-pages';
const outDirName = 'docs';

(async () => {

  await $`rm -rf dist`;
  await $`mkdir -p dist`;
  await $`echo "Documentation generated for version ${currentVersion} at ${new Date().toISOString()}" > dist/status.html`;

  // clean tmp specific dir
  const tmpOdsDir = resolve(tmpdir(), `${tmpDirName}`);
  await $`rm -rf ${tmpOdsDir}/*`;


  let versions = await $`npm view ${packageName} versions --json`;
  // eslint-disable-next-line
  console.info(
    '%c[fe] versions', 'background:#fff;color:#000',
    versions);
  versions = JSON.parse(versions);
  // eslint-disable-next-line
  console.info(
    '%c[fe] versions', 'background:#fff;color:#000',
    versions);


  for (let versionsKey in versions) {
    const version = versions[versionsKey];
    // create a dir for this version
    const dir = resolve(tmpOdsDir, `${version}`);
    console.log('creating directory...', dir);
    await $`mkdir -p ${dir}`;
    await $`ls -l ${dir}`;

    // find the url and download
    let tarball = await $`npm view ${packageName}@${version} dist.tarball`;
    tarball = `${tarball.stdout.trim()}`;
    console.log('downloading... ', tarball);
    const command = `curl -sS "${tarball}" | tar -xzf - -C ${dir} --strip 1`;
    await $([command]);

    await $`mv ${dir}/dist dist/v${version}`;
  }
  try {
    // add the current build (released just done)
    await $`cp -r packages/tools/storybook/dist dist/v${currentVersion}`;
    await $`ln -s v${currentVersion} dist/latest`;
  } catch (e) {
    console.error(`cannot add the current storybook build. ignore it`, e);
  }
  try {
    // move all into out dir
    await $`rm -rf ${outDirName}/v*`;
    await $`mv dist/* ${outDirName}`;
  } catch (e) {
    console.error(`cannot move files into outDir.`, e);
  }
})();
