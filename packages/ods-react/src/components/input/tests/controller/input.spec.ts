import { createElement } from 'react';
import { isSlotDefined, isValueDefined } from '../../src/controller/input';

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

  describe('isSlotDefined', () => {
    it('should return false for content React renders as nothing', () => {
      expect(isSlotDefined(undefined)).toBe(false);
      expect(isSlotDefined(null)).toBe(false);
      expect(isSlotDefined(true)).toBe(false);
      expect(isSlotDefined(false)).toBe(false);
      expect(isSlotDefined('')).toBe(false);
    });

    it('should return true for renderable content', () => {
      expect(isSlotDefined('kg')).toBe(true);
      expect(isSlotDefined(' ')).toBe(true);
      expect(isSlotDefined(42)).toBe(true);
      // Falsy but renderable: `endContent={ 0 }` must still produce a wrapper.
      expect(isSlotDefined(0)).toBe(true);
      expect(isSlotDefined(createElement('span', null, 'kg'))).toBe(true);
    });
  });
});
