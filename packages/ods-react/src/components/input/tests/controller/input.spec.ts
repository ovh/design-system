import { isValueDefined } from '../../src/controller/input';

describe('Input controller', () => {
  describe('isValueDefined', () => {
    it('should return false if value is not defined', () => {
      expect(isValueDefined()).toBe(false);
      expect(isValueDefined(undefined)).toBe(false);
      expect(isValueDefined(null)).toBe(false);
      expect(isValueDefined('')).toBe(false);
      expect(isValueDefined([])).toBe(false);
    });

    it('should return true if value is defined', () => {
      expect(isValueDefined('value')).toBe(true);
      expect(isValueDefined(0)).toBe(true);
      expect(isValueDefined(12)).toBe(true);
      expect(isValueDefined(-4)).toBe(true);
      expect(isValueDefined(['dummy', 'value'])).toBe(true);
    });
  });
});
