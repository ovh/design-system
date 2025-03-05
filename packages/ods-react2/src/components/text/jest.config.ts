export default {
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  //setupFilesAfterEnv: [ // TODO test
  //     '@testing-library/jest-dom/extend-expect',
  //   ],
  testEnvironment: 'jsdom',
  testRegex: 'tests\\/.*\\.e2e\\.tsx$',
  testPathIgnorePatterns: [
    'node_modules/',
    'dist/',
  ],
  testTimeout: 60000,
  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
    '\\.scss$': 'jest-css-modules-transform',
    // '\\.(ts|tsx)$': 'jest-preview/transforms/file',
    // '\\.scss$': 'jest-preview/transforms/css',
    // "^.+\\.(css|scss|sass|less)$": "jest-preview/transforms/css",
    // "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)": "jest-preview/transforms/file",
  },
  verbose: true,
};

// import { getDefaultConfig } from '../../config/jest';
//
// export default getDefaultConfig();
