/**
 * Script to generate the file spec.md for one specifique component
 * The file is create in <component>/documentation/specifications
 * The script need a json typedoc file in <component>/docs-api/typedoc.json
 */

const fs = require('fs');
const path = require('path');
// CARE this is the path where the script was exec
const packageJson = require(path.resolve('package.json'));
const rootComponent = packageJson.name.replace('@ovhcloud/ods-component-', '');

const { convertJsonToMarkdown } = require('@ovhcloud/ods-common-core');
const isMultiple = process.argv[2]?.includes('multiple');

if (!isMultiple) {
  const typedocJson = require(path.resolve('docs-api/typedoc.json'));
  const dir = path.resolve('../../components', rootComponent, 'documentation/specifications');
  return createSpecMd(typedocJson, dir);
}

/** See Radio or Accordion for example multiple */
const componentFolders = fs.readdirSync('./src/components', {});
componentFolders.forEach((osdsComponent) => {
  const component = osdsComponent.replace('osds-', '');
  const typedocJson = require(path.resolve(`docs-api/${component}/typedoc.json`));
  const dir = path.resolve('../../components', rootComponent, 'documentation/specifications', component);
  createSpecMd(typedocJson, dir);
});

function createSpecMd(typedocJson, dir) {
  fs.mkdirSync(dir, { recursive: true });
  
  if(typedocJson.children) {
    fs.writeFileSync(path.resolve(dir, 'spec.md'), convertJsonToMarkdown(typedocJson.children), (err) => {
      if (err) {
        console.error(`file write error.`);
        throw err;
      }
    });
  }
}