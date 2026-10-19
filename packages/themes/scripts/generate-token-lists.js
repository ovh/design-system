#! /usr/bin/env node

/*
 * postcss, not cssjson: cssjson drops the declaration that directly follows a comment, folding it
 * into the comment node instead. That was survivable while the theme carried almost no comments -
 * it silently lost a handful - but the semantic layer documents its deduced tokens and its
 * contrast deviations inline, and the same bug then swallowed 41 of 248 tokens. tokens.json is a
 * published export, so the loss reached consumers.
 */
const postcss = require('postcss');
const fs = require('fs').promises;
const path = require('path');

async function getTokens(theme) {
  try {
    const indexCSS = await fs.readFile(path.resolve(process.cwd(), 'dist', theme, 'index.css'), { encoding: 'utf-8' });
    const root = {};

    postcss.parse(indexCSS).walkRules(':root', (rule) => {
      rule.walkDecls(/^--/, (decl) => {
        /* Declared twice in one scope means the last one wins, exactly as the cascade would. */
        root[decl.prop] = decl.value;
      });
    });

    return { root };
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
    console.error(`${path.resolve(process.cwd(), 'dist')} does not exists, please run "pnpm build:prod" command.`);
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
