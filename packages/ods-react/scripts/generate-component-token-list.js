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

// A component custom property can also be read only through var() with a fallback, without any declaration
// (an override set on an ancestor or in another layer must win): its fallback is its default value.
function getFallbackVariables(cssContent) {
  const entries = [];
  const reference = /var\((--ods-[\w-]+)\s*,/g;
  let match;

  while ((match = reference.exec(cssContent)) !== null) {
    if (match[1].startsWith('--ods-semantic-') || match[1].startsWith('--ods-palette-')) {
      continue;
    }

    let depth = 1;
    let end = reference.lastIndex;

    while (end < cssContent.length && depth > 0) {
      depth += cssContent[end] === '(' ? 1 : cssContent[end] === ')' ? -1 : 0;
      end++;
    }

    entries.push([match[1], cssContent.slice(reference.lastIndex, end - 1).trim()]);
  }

  return entries;
}

async function getCssVariables(filePath) {
  try {
    // cssjson folds the declaration that follows a comment into the comment node, losing it.
    const cssContent = (await fs.readFile(path.resolve(process.cwd(), filePath), { encoding: 'utf-8' })).replace(/\/\*[\s\S]*?\*\//g, '');
    const jsonContent = cssJson.toJSON(cssContent);

    const declared = getAllEntries(jsonContent).filter((entry) => {
      if (Array.isArray(entry) && entry.length) {
        return entry[0].startsWith('--ods-');
      }
      return false;
    });

    return { declared, fallbacks: getFallbackVariables(cssContent) };
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
    console.error(`${path.resolve(process.cwd(), 'documentation')} does not exists, please run "pnpm doc" command.`);
    return;
  }

  try {
    // glob returns files in a non-deterministic order; sort so the generated
    // JSON (and the committed docs assets derived from it) stays stable across runs
    const cssFiles = (await glob('documentation/**/*.css')).sort();

    const variables = (await Promise.all((cssFiles || [])
      .map((file) => {
        return getCssVariables(file);
      }))).filter(Boolean);

    const cssVariables = variables
      .flatMap(({ declared }) => declared)
      .reduce((res, [key, value]) => {
        res[key] = value;
        return res;
      }, {});

    variables.flatMap(({ fallbacks }) => fallbacks).forEach(([key, value]) => {
      if (!(key in cssVariables)) {
        cssVariables[key] = value;
      }
    });

    return writeOutput(cssVariables, path.resolve(process.cwd(), 'documentation', 'cssVariable.json'));
  } catch(error) {
    console.error(error);
    process.exitCode = 1;
  }
})();
