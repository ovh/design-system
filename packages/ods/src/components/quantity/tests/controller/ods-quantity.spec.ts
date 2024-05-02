import { isMinusButtonDisabled, isPlusButtonDisabled } from '../../src/controller/ods-quantity';

describe('ods-input controller', () => {

  beforeEach(jest.clearAllMocks);

  describe('isPlusButtonDisabled', () => {
    it('should return true', async() => {
      // disabled
      expect(isPlusButtonDisabled(true, 0, 10)).toBe(true);

      // max === value
      expect(isPlusButtonDisabled(false, 10, 10)).toBe(true);

      // max < value
      expect(isPlusButtonDisabled(false, 11, 10)).toBe(true);
    });

    it('should return false', async() => {
      // not disabled
      expect(isPlusButtonDisabled(false, 0, 10)).toBe(false);

      // max === undefined
      expect(isPlusButtonDisabled(false, 10, undefined)).toBe(false);
    });
  });

  describe('isMinusButtonDisabled', () => {
    it('should return true', async() => {
      // disabled
      expect(isMinusButtonDisabled(true, 0, 10)).toBe(true);

      // min === value
      expect(isMinusButtonDisabled(false, 0, 0)).toBe(true);

      // min > value
      expect(isMinusButtonDisabled(false, 0, 1)).toBe(true);
    });

    it('should return false', async() => {
      // not disabled
      expect(isMinusButtonDisabled(false, 10, 0)).toBe(false);

      // min === undefined
      expect(isMinusButtonDisabled(false, 0, undefined)).toBe(false);
    });
  });
});
