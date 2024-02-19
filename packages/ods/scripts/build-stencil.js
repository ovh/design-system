#! /usr/bin/env node

/**----------------------------------------------------------------------------
 * There is a weird issue with Stencil v4 where the dist/types directory is not present after the first build.
 * This occurs only on components that have multiple sub-components (ex: select)
 * (see: https://github.com/ionic-team/stencil/issues/4834)
 * (should be fixed by: https://github.com/ionic-team/stencil/issues/5091, wait for the release and test)
 *
 * To avoid the issue we check the result of the first build and run another one in case the types are not present.
 * --------------------------------------------------------------------------*/

const { execSync } = require('child_process');
const fs = require('fs');
const replace = require('replace-in-file');

try {
  execSync('npm run build:stencil', { stdio: 'inherit' });

  if (!fs.existsSync('dist/types')) {
    console.warn('Directory dist types does not exists, rerun build');
    execSync('npm run build:stencil', { stdio: 'inherit' });
  }

  const reactGeneratedFilePath = 'react/src/components/stencil-generated/index.ts';
  const vueGeneratedFilePath = 'vue/src/components/stencil-generated/index.ts';

  // The stencil build does not generate a correct path for the JSX interface
  // (see https://github.com/ionic-team/stencil-ds-output-targets/issues/404)
  // So we need to manually fix it
  if (!fs.existsSync(reactGeneratedFilePath) || !fs.existsSync(vueGeneratedFilePath)) {
    throw new Error(`Cannot find either ${reactGeneratedFilePath} or ${vueGeneratedFilePath}`);
  }

  replace.sync({
    files: [reactGeneratedFilePath, vueGeneratedFilePath],
    from: 'import type { JSX } from \'@ovhcloud/ods-components/dist/components\';',
    to: 'import type { JSX } from \'@ovhcloud/ods-components\';',
  });

  // Those could be run in parallel, but it causes CI issue for now, to investigate
  execSync('npm run build:react', { stdio: 'inherit' });
  execSync('npm run build:vue', { stdio: 'inherit' });
  execSync('npm run build:style', { stdio: 'inherit' });
} catch(e) {
  console.error('Error while building component');
  console.error(e);
}
