const fs = require('fs');
const path = require('path');
const typedocJson = require(path.resolve('typedoc/typedoc.json'));

const { convertJsonToMarkdown } = require(path.resolve('src/utils/typedoc/typedoc-json-to-md'));

const componentTypes = require('../src/components/component-types.json');

const createComponentDetailedList = list =>
  list.map(item => ({
    pathName: item
      .replace(/ods/gim, '')
      .replace(/([a-z])([A-Z])/gm, '$1-$2')
      .toLowerCase(),
    regex: new RegExp(item, 'gmi'),
  }));

createComponentDetailedList(componentTypes).forEach(({ pathName, regex }) => {
  const dir = path.resolve('src/components', pathName, 'docs');
  fs.mkdirSync(dir, { recursive: true });

  if (typedocJson.children) {
    fs.writeFileSync(path.resolve(dir, 'spec.md'), convertJsonToMarkdown(typedocJson.children, regex), err => {
      if (err) {
        console.error(`file write error.`);
        throw err;
      }
    });
  }
});
