#!/usr/bin/env zx
/**
 * execution from monorepo
 * `npx zx scripts/generate-ods-doc.mjs username token`
 * OR
 * `npx zx scripts/generate-ods-doc.mjs userToken`
 *
 * where `userToken` can be a docker secret like `/run/secrets/my-secret` or `artitoken`
 */
import { resolve } from 'path';
import { tmpdir } from 'os';
import { Headers } from 'node-fetch';
import btoa from 'btoa';
import fs from 'fs-extra';

const args = process.argv.slice(2);
let userToken;
let username;
let token;

if (args[1] && args[2]) {
  username = args[1];
  token = args[2];
} else {
  userToken = args[1];
}

if (/^\/run\/secrets/.test(userToken) || /^artitoken/.test(userToken)) {
  console.log('using secrets from docker in', userToken);
  userToken = fs.readFileSync(path.resolve('.', '.', userToken), "utf-8").trim();
}

const currentVersion = require('../lerna.json').version;
console.log('currentVersion=', currentVersion);

if (!userToken && (!username || !token)) {
  console.error(`you must call the script with credentials like: npx zx scripts/generate-ods-doc.mjs [userToken] OR xx.mjs [user@domain] [<token>]`);
  process.exit(1);
}

(async () => {

  const headers = new Headers();
  let authorizationHeaderValue;
  let authorizationHeader;
  if (userToken) {
    console.log('Authorization by userToken');
    authorizationHeaderValue = 'Bearer ' + userToken
  } else {
    console.log('Authorization by personal access token');
    authorizationHeaderValue = 'Basic ' + btoa(username + ':' + token);
  }
  authorizationHeader = `Authorization: ${authorizationHeaderValue}`;
  headers.append('Authorization', authorizationHeaderValue);
  const data = await fetch(``, {headers: headers})
    .then(r => {
      return r.json()
    });

  console.log(JSON.stringify({detectedVersions: Object.keys(data.versions)}, undefined, 2));

  await $`rm -rf dist`;
  await $`mkdir -p dist`;

  if (!data || data.error || data.error || !data.versions) {
    console.error(`something went wrong with the response. it will consider only the current storybook build to integrate`, {response: data});
  } else {
    for (const version in data.versions) {
      const versionMeta = data.versions[version];

      const dir = resolve(tmpdir(), version);

      console.log({dir});
      console.log({tarball: versionMeta.dist.tarball});


      await $`mkdir -p ${dir}`;

      // the curl can be in error with `curl -H $"Authorization: Be...` ($ does not have to be here).
      // the solution is https://github.com/google/zx/issues/164#issuecomment-886630046
      // as indicated, we can set up a variable with the command and execute it
      const command = `curl -H "${authorizationHeader}" -sS "${versionMeta.dist.tarball}" | tar -xzf - -C ${dir} --strip 1`;
      await $([command]);

      if (version < "1.0.0-alpha.10" && version !== "1.0.0") {
        await $`mv ${dir}/docs dist/v${version}`;
      } else {
        await $`mv ${dir}/dist dist/v${version}`;
      }

    }
  }


  try {
    // add the current build (released just done)
    await $`mv storybook dist/v${currentVersion}`;
    await $`ln -s ${'v' + currentVersion} dist/latest`;
  } catch (e) {
    console.error(`cannot add the current storybook build. ignore it`);
  }


})();
