import { isMinusButtonDisabled, isPlusButtonDisabled } from '../../src/controller/ods-quantity';

describe('ods-input controller', () => {

  beforeEach(jest.clearAllMocks);

  describe('isPlusButtonDisabled', () => {
    it('should return true', async() => {
      // disabled
      expect(isPlusButtonDisabled(true, false, 0, 10)).toBe(true);

      // readonly
      expect(isPlusButtonDisabled(false, true, 0, 10)).toBe(true);

      // max === value
      expect(isPlusButtonDisabled(false, false, 10, 10)).toBe(true);

      // max < value
      expect(isPlusButtonDisabled(false, false, 11, 10)).toBe(true);
    });

    it('should return false', async() => {
      // not disabled & not readonly
      expect(isPlusButtonDisabled(false, false, 0, 10)).toBe(false);

      // max === undefined
      expect(isPlusButtonDisabled(false, false, 10, undefined)).toBe(false);
    });
  });

  describe('isMinusButtonDisabled', () => {
    it('should return true', async() => {
      // disabled
      expect(isMinusButtonDisabled(true, false, 0, 10)).toBe(true);

      // disabled
      expect(isMinusButtonDisabled(false, true, 0, 10)).toBe(true);

      // min === value
      expect(isMinusButtonDisabled(false, false, 0, 0)).toBe(true);

      // min > value
      expect(isMinusButtonDisabled(false, false, 0, 1)).toBe(true);
    });

    it('should return false', async() => {
      // not disabled & not readonly
      expect(isMinusButtonDisabled(false, false, 10, 0)).toBe(false);

      // min === undefined
      expect(isMinusButtonDisabled(false, false, 0, undefined)).toBe(false);
    });
  });
});
