#! /usr/bin/env node

/**----------------------------------------------------------------------------
 * There is a weird issue with Stencil v4 where the dist/types directory is not present after the first build.
 * This occurs only on components that have multiple sub-components (ex: select)
 * (see: https://github.com/ionic-team/stencil/issues/4834)
 *
 * To avoid the issue we check the result of the first build and run another one in case the types are not present.
 * --------------------------------------------------------------------------*/

const { execSync } = require('child_process');
const fs = require('fs');

try {
  const isProd = process.argv[2] === 'prod';

  execSync('npm run build:stencil', { stdio: 'inherit' });

  if (!fs.existsSync('dist/types')) {
    console.warn('Directory dist types does not exists, rerun build');
    execSync('npm run build:stencil', { stdio: 'inherit' });
  }

  if (isProd) {
    // Those two could be run in parallel, but it causes CI issue for now, to investigate
    execSync('npm run build:react', { stdio: 'inherit' });
    execSync('npm run build:vue', { stdio: 'inherit' });
  }
} catch(e) {
  console.error('Error while building component');
  console.error(e);
}
