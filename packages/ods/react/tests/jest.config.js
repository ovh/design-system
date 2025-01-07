module.exports = {
  preset: 'jest-puppeteer',
  testRegex: "./e2e/.*\\.e2e\\.ts$",
  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
  },
};
