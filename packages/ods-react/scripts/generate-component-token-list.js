#! /usr/bin/env node

import cssJson from 'cssjson';
import fs from 'fs/promises';
import { glob } from 'glob';
import path from 'path';

function getAllEntries(obj) {
  const keys = Object.keys(obj);

  return keys.reduce(
    (res, key) =>
      typeof obj[key] === 'object'
        ? [...res, key, ...getAllEntries(obj[key])]
        : [...res, [key, obj[key]]],
    [],
  );
}

async function getCssVariables(filePath) {
  try {
    const cssContent = await fs.readFile(path.resolve(process.cwd(), filePath), { encoding: 'utf-8' });
    const jsonContent = cssJson.toJSON(cssContent);

    return getAllEntries(jsonContent).filter((entry) => {
      if (Array.isArray(entry) && entry.length) {
        return entry[0].startsWith('--ods-');
      }
      return false;
    });
  } catch(error) {
    console.error('Something went wrong while getting css variables', error);
  }
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
    await fs.access(path.resolve(process.cwd(), 'documentation'));
  } catch(error) {
    console.error(`${path.resolve(process.cwd(), 'documentation')} does not exists, please run "yarn doc" command.`);
    return;
  }

  try {
    const cssFiles = await glob('documentation/**/*.css');

    const cssVariables = (await Promise.all((cssFiles || [])
      .map((file) => {
        return getCssVariables(file);
      })))
      .flat()
      .reduce((res, [key, value]) => {
        res[key] = value;
        return res;
      }, {});

    return writeOutput(cssVariables, path.resolve(process.cwd(), 'documentation', 'cssVariable.json'));
  } catch(error) {
    console.error(error);
    process.exitCode = 1;
  }
})();
