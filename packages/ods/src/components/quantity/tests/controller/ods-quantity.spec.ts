import { isAddButtonDisabled, isMinusButtonDisabled } from '../../src/controller/ods-quantity';

describe('ods-input controller', () => {

  beforeEach(jest.clearAllMocks);

  describe('isAddButtonDisabled', () => {
    it('should return true', async() => {
      // disabled
      expect(isAddButtonDisabled(true, 0, 10)).toBe(true);

      // max === value
      expect(isAddButtonDisabled(false, 10, 10)).toBe(true);

      // max < value
      expect(isAddButtonDisabled(false, 11, 10)).toBe(true);
    });

    it('should return false', async() => {
      // not disabled
      expect(isAddButtonDisabled(false, 0, 10)).toBe(false);

      // max === undefined
      expect(isAddButtonDisabled(false, 10, undefined)).toBe(false);
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
