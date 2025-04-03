import { isDate, isNumeric } from '../../src/utils/type';

describe('utils type', () => {
  describe('isDate', () => {
    it('should return false if the value is not a date', () => {
      // @ts-ignore for test purpose
      expect(isDate()).toBe(false);
      // @ts-ignore for test purpose
      expect(isDate(null)).toBe(false);
      // @ts-ignore for test purpose
      expect(isDate(NaN)).toBe(false);
      // @ts-ignore for test purpose
      expect(isDate('str')).toBe(false);
      // @ts-ignore for test purpose
      expect(isDate(false)).toBe(false);
      // @ts-ignore for test purpose
      expect(isDate(true)).toBe(false);
      // @ts-ignore for test purpose
      expect(isDate({ dummy: 'object' })).toBe(false);
    });

    it('should return true if the value is a date', () => {
      expect(isDate(new Date())).toBe(true);
      expect(isDate(new Date(0))).toBe(true);
    });
  });

  describe('isNumeric', () => {
    it('should return false if the value is not a number', () => {
      expect(isNumeric()).toBe(false);
      expect(isNumeric(null)).toBe(false);
      expect(isNumeric(NaN)).toBe(false);
      expect(isNumeric('str')).toBe(false);
      // @ts-ignore for test purpose
      expect(isNumeric(false)).toBe(false);
      // @ts-ignore for test purpose
      expect(isNumeric(true)).toBe(false);
      // @ts-ignore for test purpose
      expect(isNumeric({ dummy: 'object' })).toBe(false);
    });

    it('should return true if the value is a number', () => {
      expect(isNumeric(0)).toBe(true);
      expect(isNumeric(42)).toBe(true);
      expect(isNumeric(-33)).toBe(true);
      expect(isNumeric(123.45)).toBe(true);
      expect(isNumeric(-98.76)).toBe(true);
    });
  });
});
