import { getInitialValue, getTicks, isDualRange, toPercentage } from '../../src/controller/ods-range';

describe('ods-range controller', () => {

  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  describe('getInitialValue', () => {
    it('returns the provided defaultValue if specified', () => {
      expect(getInitialValue(null, 0, 10, 5)).toBe(5);
      expect(getInitialValue(null, 0, 10, [3, 7])).toEqual([3, 7]);
    });

    it('calculates the midpoint if no defaultValue is provided', () => {
      expect(getInitialValue(null, 0, 10)).toBe(5);
      expect(getInitialValue(null, 0, 0)).toBe(0);
    });

    it('handles cases where max < min by returning min', () => {
      expect(getInitialValue(null, 10, 5)).toBe(10);
      expect(getInitialValue(null, -5, -10)).toBe(-5);
    });
  });

  describe('getTicks', () => {
    it('returns ticks parsed', () => {
      expect(getTicks([25, 50, 75], 0 , 100)).toEqual([25, 50, 75]);
      expect(getTicks([0, 100], 0 , 100)).toEqual([0, 100]);
      expect(getTicks(JSON.stringify([25, 50, 75]), 0 , 100)).toEqual([25, 50, 75]);
      expect(getTicks('[25, 50, 75]', 0 , 100)).toEqual([25, 50, 75]);
    });

    it('should return an empty array and warn if the string cannot be parsed', () => {
      expect(getTicks(undefined, 0 , 100)).toEqual([]);
      expect(getTicks('', 0 , 100)).toEqual([]);
      expect(getTicks('dummy', 0 , 100)).toEqual([]);
      expect(console.warn).toHaveBeenCalledTimes(1);
    });

    it('returns remove ticks out of the range', () => {
      expect(getTicks([-10, 25, 50, 75, 110], 0 , 100)).toEqual([25, 50, 75]);
    });

    it('returns sort ticks', () => {
      expect(getTicks([100, 25, 50, 15, 75], 0 , 100)).toEqual([15, 25, 50, 75, 100]);
    });
  });

  describe('isDualRange', () => {
    it('should return true for valid dual range', () => {
      expect(isDualRange([1, 2])).toBe(true);
    });

    it('should return false for single number', () => {
      expect(isDualRange(5)).toBe(false);
    });

    it('should return false for null', () => {
      expect(isDualRange(null)).toBe(false);
    });

    it('should return false for array with more than two numbers', () => {
      // @ts-ignore test purpose
      expect(isDualRange([1, 2, 3])).toBe(false);
    });

    it('should return false for array with non-number elements', () => {
      // @ts-ignore test purpose
      expect(isDualRange([1, '2'])).toBe(false);
    });

    it('should return false for empty array', () => {
      // @ts-ignore test purpose
      expect(isDualRange([])).toBe(false);
    });

    it('should return false for string', () => {
      // @ts-ignore test purpose
      expect(isDualRange('1,2')).toBe(false);
    });
  });

  describe('toPercentage', () => {
    it('should return correct percentage for valid numbers', () => {
      expect(toPercentage(100, 0, 50)).toBe(50);
    });

    it('should return 0 when value is undefined', () => {
      expect(toPercentage(100, 0)).toBe(0);
    });

    it('should return 0 when value is equal to min', () => {
      expect(toPercentage(100, 0, 0)).toBe(0);
    });

    it('should return 100 when value is equal to max', () => {
      expect(toPercentage(100, 0, 100)).toBe(100);
    });

    it('should return negative percentage when value is less than min', () => {
      expect(toPercentage(100, 0, -10)).toBe(-10);
    });

    it('should return correct percentage for floating point numbers', () => {
      expect(toPercentage(1.0, 0.0, 0.5)).toBeCloseTo(50);
    });
  });
});
