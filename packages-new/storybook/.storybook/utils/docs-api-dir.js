const getDocsApiDirectories = require('./get-docs-api-directories');

getDocsApiDirectories()
  .forEach(dir => console.log(dir));
