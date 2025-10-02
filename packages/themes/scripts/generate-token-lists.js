#! /usr/bin/env node

const { toJSON } = require('cssjson');
const fs = require('fs').promises;
const path = require('path');

async function getTokens(theme) {
  try {
    const indexCSS = await fs.readFile(path.resolve(process.cwd(), 'dist', theme, 'index.css'), { encoding: 'utf-8' });
    const indexJSON = toJSON(indexCSS);

    return {
      root: indexJSON.children[':root'].attributes,
    };
  } catch(error) {
    console.error('Something went wrong while getting design tokens', error);
  }
}

async function writeOutput(tokens, outputFile) {
  try {
    await fs.writeFile(outputFile, JSON.stringify(tokens), 'utf8');
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
    const { ODS_THEMES } = require(path.resolve(process.cwd(), 'dist', 'index'));

    await Promise.all(ODS_THEMES.map(async (theme) => {
      const tokens = await getTokens(theme);
      return writeOutput(tokens, path.resolve(process.cwd(), 'dist', theme, 'tokens.json'));
    }));
  } catch(error) {
    console.error(error);
    process.exitCode = 1;
  }
})();
