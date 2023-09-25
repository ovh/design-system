/**
 * Script to generate the file spec.md for one specifique component
 * The file is create in <component>/documentation/specifications
 * The script need a json typedoc file in <component>/docs-api/typedoc.json
 */

const fs = require('fs');
const path = require('path');
// CARE this is the path where the script was exec
const typedocJson = require(path.resolve('docs-api/typedoc.json'));
const packageJson = require(path.resolve('package.json'));

const { convertJsonToMarkdown } = require('@ovhcloud/ods-common-core');

const component = packageJson.name.replace('@ovhcloud/ods-component-', '');
const regex = new RegExp(component, 'gmi');
const dir = path.resolve('../../components', component, 'documentation/specifications');
fs.mkdirSync(dir, { recursive: true });

if(typedocJson.children) {
  fs.writeFileSync(path.resolve(dir, 'spec.md'), convertJsonToMarkdown(typedocJson.children, regex), (err) => {
    if (err) {
      console.error(`file write error.`);
      throw err;
    }
  });
}
