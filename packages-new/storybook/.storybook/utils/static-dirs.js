const getDocsApiDirectories = require('./get-docs-api-directories');
const directoriesArgs = getDocsApiDirectories();

if (directoriesArgs.length) {
  const args = directoriesArgs.join(',');
  process.stdout.write('--static-dir ' + args);
}
