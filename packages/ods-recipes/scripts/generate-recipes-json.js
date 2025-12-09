#! /usr/bin/env node

import fs from 'fs/promises';
import path from 'path';

const SOURCES = ['css-modules', 'tailwind'];

async function getComponentData(src, module) {
  const data = {
    ...module.metadata,
    source: {},
  };

  const sourceDirectories = (await fs.readdir(src, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .filter((dirName) => SOURCES.indexOf(dirName) > -1);

  for (const sourceDirectory of sourceDirectories) {
    data.source[sourceDirectory] = await getComponentSources(path.resolve(src, sourceDirectory));
  }

  return Promise.resolve(data);
}

async function getComponentSources(src) {
  const source = {};

  const files = (await fs.readdir(src, { withFileTypes: true }))
    .filter((dirent) => dirent.isFile());

  for (const file of files) {
    source[file.name] = await fs.readFile(path.resolve(file.path, file.name), 'utf8');
  }

  return source;
}

async function listComponents(src) {
  return (await fs.readdir(src, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
}

function toPascalCase(text) {
  return text.replace(/(^\w|-\w)/g, (t) => t.replace(/-/, "").toUpperCase());
}

async function writeOutput(content, outputFile) {
  try {
    await fs.writeFile(outputFile, JSON.stringify(content), 'utf8');
  } catch(error) {
    console.error('Something went wrong while writing the versions file', error);
  }
}

(async function main() {
  try {
    await fs.access(path.resolve(process.cwd(), 'dist'));
  } catch(error) {
    console.error(`${path.resolve(process.cwd(), 'dist')} does not exists, please run "yarn build:prod" command.`);
    return;
  }

  try {
    await fs.access(path.resolve(process.cwd(), 'scripts', 'dist'));
  } catch(error) {
    console.error(`${path.resolve(process.cwd(), 'scripts', 'dist')} does not exists, please run "yarn build:scripts" command.`);
    return;
  }

  const recipeModule = await import(`./dist/ods-recipes.js`);
  const componentsPath = path.resolve(process.cwd(), 'src', 'components');
  const finalData = {
    component: {},
    list: {
      components: [],
    },
  };
  let componentNames = [];

  try {
    componentNames = await listComponents(componentsPath);
    finalData.list.components = componentNames;
  } catch(error) {
    console.error('Error while trying to list all components.');
    console.error(error);
    process.exitCode = 1;
    return;
  }

  try {
    const componentsData = await Promise.all(componentNames.map((name) => {
      const module = recipeModule[toPascalCase(name)];
      return getComponentData(path.resolve(componentsPath, name, 'src'), module)
    }));

    finalData.component = componentNames.reduce((obj, name, idx) => {
      obj[name] = componentsData[idx];
      return obj;
    }, {});
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
