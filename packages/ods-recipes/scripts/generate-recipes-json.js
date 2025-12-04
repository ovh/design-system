#! /usr/bin/env node

// import * as Recipe from '@ovhcloud/ods-recipes';
import fs from 'fs/promises';
import { glob } from 'glob';
import path from 'path';

async function getComponentData(src, name) {
  // const myModule = await import(`${src}/index.ts`);
  const myModule = await import(`@ovhcloud/ods-recipes/dist/components/${name}/index.ts`);
  console.log('IMPORT?')
  console.log(myModule)
  // const recipe = Recipe[toPascalCase(name)]
  // console.log(recipe)

  return Promise.resolve({});
}

async function listComponents(src) {
  return (await fs.readdir(src, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
}

function toPascalCase(text) {
  function clearAndUpper(text) {
    return text.replace(/-/, "").toUpperCase();
  }

  return text.replace(/(^\w|-\w)/g, clearAndUpper);
}

async function writeOutput(content, outputFile) {
  try {
    await fs.writeFile(outputFile, JSON.stringify(content), 'utf8');
  } catch(error) {
    console.error('Something went wrong while writing the versions file', error);
  }
}

(async function main() {
  const componentsPath = path.resolve(process.cwd(), 'src', 'components');
  const finalData = {
    component: {},
    list: [],
  };
  let componentNames = [];

  try {
    componentNames = await listComponents(componentsPath);
    finalData.list = componentNames;
  } catch(error) {
    console.error('Error while trying to list all components.');
    console.error(error);
    process.exitCode = 1;
    return;
  }

  try {
    const componentData = componentNames.reduce(async (res, name) => {
      res[name] = await getComponentData(path.resolve(componentsPath, name, 'src'), name);
    }, {});
    finalData.component = componentData
  } catch(error) {
    console.error('Error while trying to fetch components data.');
    console.error(error);
    process.exitCode = 1;
    return;
  }


  try {
    return writeOutput(finalData, path.resolve(process.cwd(), 'dist', 'ods-recipes.json'));
  } catch(error) {
    console.error('Error while writing output file.');
    console.error(error);
    process.exitCode = 1;
  }
})();
