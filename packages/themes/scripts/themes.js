/*
 * The themes, read from the exports of package.json: every `./<theme>/css` export with a
 * `./<theme>/tokens` export next to it is a theme. The export paths are the public API, not the
 * dist layout they point at.
 */
const path = require('path');
const packageExports = require('../package.json').exports;

function themes() {
  return Object.keys(packageExports)
    .map((key) => key.match(/^\.\/(.+)\/css$/)?.[1])
    .filter((theme) => theme && packageExports[`./${theme}/tokens`])
    .map((theme) => ({
      css: path.resolve(__dirname, '..', packageExports[`./${theme}/css`].default),
      name: theme,
      tokens: path.resolve(__dirname, '..', packageExports[`./${theme}/tokens`].default),
    }));
}

module.exports = { themes };
