/**
 * Script to generate the file spec.md for one specific component
 * The file is created in <component>/documentation/specifications
 * The script need a json typedoc file in <component>/docs-api/typedoc.json
 *
 * You can pass an optional --prefix <value> to manage components that are not
 * in the default "components" package, ex:
 *   --prefix ovh # for "components-ovh"
 */
const fs = require('fs');
const path = require('path');

const { convertJsonToMarkdown } = require('@ovhcloud/ods-common-core');
const isMultiple = process.argv[2]?.includes('multiple');
// Carefull, this is the path where the script was executed
const packageJson = require(path.resolve('package.json'));
const pathPrefixIdx = process.argv.indexOf('--prefix');

function getRootComponent() {
  if (!pathPrefix) {
    return packageJson.name.replace('@ovhcloud/ods-component-', '');
  }
  return packageJson.name.replace(`@ovhcloud/ods-${pathPrefix}-component-`, '');
}

function createSpecMd(component = '') {
  const typedocJson = require(path.resolve('docs-api', component, 'typedoc.json'));
  // TODO test for prefixed project (like -ovh)
  const dir = path.resolve('documentation', 'specifications', component);

  fs.mkdirSync(dir, { recursive: true });

  if(typedocJson.children) {
    fs.writeFileSync(path.resolve(dir, 'spec.md'), convertJsonToMarkdown(typedocJson.children), (err) => {
      if (err) {
        console.error('file write error.');
        throw err;
      }
    });
  }
}

let pathPrefix = '';
if (pathPrefixIdx > -1) {
  pathPrefix = process.argv[pathPrefixIdx + 1];
}
const rootComponent = getRootComponent();

if (!isMultiple) {
  return createSpecMd();
}

// See Radio or Accordion for example multiple
const componentFolders = fs.readdirSync('./src/components', {});
componentFolders.forEach((osdsComponent) => {
  const component = osdsComponent.replace(`osds${pathPrefix ? `-${pathPrefix}` : ''}-`, '');
  return createSpecMd(component);
});
