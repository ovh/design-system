module.exports = {
  preset: 'jest-puppeteer',
  testRegex: "./*\\e2e\\.ts$",
  testTimeout: 10000,
  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
  },
};
