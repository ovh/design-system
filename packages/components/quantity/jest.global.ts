/**
 * global function executed first and outside the environment test
 * @see https://jestjs.io/fr/docs/configuration#globalsetup-string
 * @param _globalConfig - global configuration
 * @param _projectConfig - project configuration
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const global = (_globalConfig: never, _projectConfig: never): void => {
  return;
};

export default global;
