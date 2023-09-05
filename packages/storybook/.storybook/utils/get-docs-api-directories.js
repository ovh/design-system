/**
 * get the list of current docs-api directories in each components and libraries,
 * list them all, comma separated and output them
 * @returns {string[]}
 */
module.exports = function getDocsApiDirectories() {
  const fs = require("fs");
  const PATH_BASE = "../../";
  const DOC_API_DIR_NAME = "docs-api";
  const DIRECTORIES= [
    "../docs/migration/assets",
    "contributing/assets",
    "design/assets",
    "libraries/cdk/doc/assets",
    "specifications/assets",
    "stencil/components/*",
    "stencil/libraries/*",
    "libraries/*",
    "stencil/components/flag/dist/flags",
    "tools/storybook/public",
  ]

  try {
    return DIRECTORIES.flatMap((directory) => {
      const foundWildcard = directory.match(/^([^\*]+)[\*]/);
      if (foundWildcard) {
        return fs.readdirSync(`../../${foundWildcard[1]}`)
          .filter((n) => !n.match(/^[\._]/))
          .flatMap((n) => [
            PATH_BASE+foundWildcard[1]+n+'/'+DOC_API_DIR_NAME
          ]);
      } else {
        return `../../${directory}`;
      }

      })
      .filter(d => {
        try {
          return fs.lstatSync(d).isDirectory()
        } catch (e) {
          return false;
        }
      });
  } catch (e) {
    return [];
  }
}
