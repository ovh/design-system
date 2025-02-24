import { escapeRegExp } from '../../src/utils/regExp';

describe('utils regExp', () => {
  it('should return an empty string if no value passed', () => {
    // @ts-ignore for test purpose
    expect(escapeRegExp()).toBe('');
    // @ts-ignore for test purpose
    expect(escapeRegExp(undefined)).toBe('');
    // @ts-ignore for test purpose
    expect(escapeRegExp(null)).toBe('');
  });

  it('should return same string if nothing to escape', () => {
    expect(escapeRegExp('')).toBe('');
    expect(escapeRegExp('Hello')).toBe('Hello');
  });

  it('should return an escaped value', () => {
    expect(escapeRegExp('^$.*+?()[]{}|\\')).toBe('\\^\\$\\.\\*\\+\\?\\(\\)\\[\\]\\{\\}\\|\\\\');
  });
});
