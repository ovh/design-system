#!/usr/bin/env zx
import { resolve } from 'path';
import { tmpdir } from 'os';

const currentVersion = require('../lerna.json').version;
console.log('currentVersion=', currentVersion);

(async () => {

  await $`rm -rf dist`;
  await $`mkdir -p dist`;

  let versions = await $`npm view @ovhcloud/ods-storybook versions --json`;
    // eslint-disable-next-line
    console.info(
        '%c[fe] versions', 'background:#fff;color:#000',
        versions);
  versions = JSON.parse(versions);
    // eslint-disable-next-line
    console.info(
        '%c[fe] versions', 'background:#fff;color:#000',
        versions);

    for (const version in versions) {
        const dir = resolve(tmpdir(), versions[version]);
        console.log({dir});
        await $`mkdir -p ${dir}`;
        await $`npm install`;
        const command = `npm install @ovhcloud/ods-storybook@${versions[version]}`;
        await $([command]);
        await $`mv ${dir}/node_modules/@ovhcloud/ods-storybook/package/dist dist/v${versions[version]}`;
    }
    try {
        // add the current build (released just done)
        await $`mv storybook dist/v${currentVersion}`;
        await $`ln -s ${'v' + currentVersion} dist/latest`;
    } catch (e) {
        console.error(`cannot add the current storybook build. ignore it`);
  }
})();
