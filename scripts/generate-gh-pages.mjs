#!/usr/bin/env zx
/**
 * execution from monorepo:
 * `npx zx scripts/generate-gh-pages.mjs`
 */
import { resolve } from 'path';
import { tmpdir } from 'os';

const currentVersion = require('../lerna.json').version;
console.log('currentVersion=', currentVersion);

// todo: replace packageName with: @ovhcloud/ods-storybook
const packageName = 'eslint-config-ovh';
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

    // todo: remove these 3 lines when packages will be ok (simulate we have all dist)
    await $`mkdir -p ${dir}/dist`;
    await $`echo "doc version ${version}" > ${dir}/dist/index.html`;
    await $`cat ${dir}/dist/index.html`;
    //

    await $`mv ${dir}/dist dist/v${version}`;
  }
  try {
    // todo: remove this 2 lines when packages will be ok (simulate we have the current storybook dist)
    await $`mkdir -p packages/tools/storybook/dist`;
    await $`echo "doc version ${currentVersion}" > packages/tools/storybook/dist/index.html`;
    //

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
