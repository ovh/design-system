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
const { themes } = require('./themes');

async function getTokens(file) {
  const indexCSS = await fs.readFile(file, { encoding: 'utf-8' });
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
      throw new Error(`${path.relative(process.cwd(), file)}: ${name} does not resolve (${root[name]})`);
    }
    if (value.includes('var(')) {
      refs[name] = value;
    }
  }

  return { root, refs };
}

/* Every theme declares the same semantic tokens: one added to a single theme would ship unnoticed. The palette may differ. */
function assertSameSemanticTokens(tokensByTheme) {
  const semantic = (tokens) => Object.keys(tokens.root).filter((name) => name.startsWith('--ods-semantic-'));
  const [reference, ...others] = tokensByTheme;
  const expected = new Set(semantic(reference.tokens));

  for (const { name, tokens } of others) {
    const actual = new Set(semantic(tokens));
    const missing = [...expected].filter((token) => !actual.has(token));
    const extra = [...actual].filter((token) => !expected.has(token));

    if (missing.length || extra.length) {
      throw new Error(`${name} does not declare the semantic tokens of ${reference.name}:\n${[
        ...missing.map((token) => `  missing ${token}`),
        ...extra.map((token) => `  extra   ${token}`),
      ].join('\n')}`);
    }
  }
}

(async function main() {
  try {
    const tokensByTheme = await Promise.all(themes().map(async (theme) => ({
      file: theme.tokens,
      name: theme.name,
      tokens: await getTokens(theme.css),
    })));

    assertSameSemanticTokens(tokensByTheme);

    await Promise.all(tokensByTheme.map(({ file, tokens }) => fs.writeFile(file, JSON.stringify(tokens), 'utf8')));
  } catch(error) {
    console.error('Could not generate the tokens.json files.', error);
    process.exitCode = 1;
  }
})();
