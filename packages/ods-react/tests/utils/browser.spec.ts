import { cssSupports } from '../../src/utils/browser';

describe('cssSupports', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- we need to manipulate undeclared globals (CSS) between tests
  const globalAny = global as any;
  let originalCSS: unknown;

  beforeEach(() => {
    originalCSS = global.CSS;
  });

  afterEach(() => {
    if (originalCSS === undefined) {
      delete globalAny.CSS;
    } else {
      globalAny.CSS = originalCSS;
    }
  });

  it('should return false when CSS is not defined', () => {
    delete globalAny.CSS;
    expect(cssSupports('property', 'value')).toBe(false);
  });

  it('should return false when CSS.supports is not a function', () => {
    globalAny.CSS = {};
    expect(cssSupports('property', 'value')).toBe(false);
  });

  it('should return false when CSS.supports returns false', () => {
    globalAny.CSS = { supports: () : boolean => false };
    expect(cssSupports('property', 'value')).toBe(false);
  });

  it('should return true when CSS.supports returns true', () => {
    globalAny.CSS = { supports: () : boolean => true };
    expect(cssSupports('property', 'value')).toBe(true);
  });
});
