#! /usr/bin/env node

/*
 * postcss, not cssjson: cssjson drops the declaration that directly follows a comment, and the
 * theme separates its sections with comments.
 *
 * `root` holds what each token resolves to, so a consumer outside CSS reads a usable value. `refs`
 * holds the declared value of the tokens that point at another one, `var()` included.
 */
const postcss = require('postcss');
const fs = require('fs').promises;
const path = require('path');
const { CYCLE, DANGLING, resolveValue } = require('./resolve-tokens');

async function getTokens(theme) {
  const indexCSS = await fs.readFile(path.resolve(process.cwd(), 'dist', theme, 'index.css'), { encoding: 'utf-8' });
  const declared = new Map();

  postcss.parse(indexCSS).walkRules(':root', (rule) => {
    /* A :root nested in an at-rule (reduced motion) is a conditional override, not the default. */
    if (rule.parent.type !== 'root') {
      return;
    }

    rule.walkDecls(/^--/, (decl) => {
      /* Declared twice in one scope means the last one wins, exactly as the cascade would. */
      declared.set(decl.prop, decl.value.trim());
    });
  });

  const root = {};
  const refs = {};

  for (const [name, value] of declared) {
    root[name] = resolveValue(value, (reference) => declared.get(reference), new Set([name]));

    if (root[name].includes(DANGLING) || root[name].includes(CYCLE)) {
      throw new Error(`${theme}: ${name} does not resolve (${root[name]})`);
    }
    if (value.includes('var(')) {
      refs[name] = value;
    }
  }

  return { root, refs };
}

(async function main() {
  try {
    const { ODS_THEMES } = require(path.resolve(process.cwd(), 'dist', 'index'));

    await Promise.all(ODS_THEMES.map(async (theme) => {
      const tokens = await getTokens(theme);
      await fs.writeFile(path.resolve(process.cwd(), 'dist', theme, 'tokens.json'), JSON.stringify(tokens), 'utf8');
    }));
  } catch(error) {
    console.error('Could not generate the tokens.json files.', error);
    process.exitCode = 1;
  }
})();
