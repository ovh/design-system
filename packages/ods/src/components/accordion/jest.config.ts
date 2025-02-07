import { getJestOption } from '../../config/jest';

export default getJestOption({
  args: [],
  option: {
    testEnvironment: '@happy-dom/jest-environment',
    testRegex: 'tests\\/.*\\.a11y\\.ts$',
  }
});
