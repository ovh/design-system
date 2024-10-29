jest.mock('../../../../utils/dom');

import { setInternalsValidityFromOdsComponent } from '../../../../utils/dom';
import { type OdsInput } from '../../../input/src';
import { getInitialValue, isMinusButtonDisabled, isPlusButtonDisabled, updateInternals } from '../../src/controller/ods-quantity';

describe('ods-input controller', () => {
  beforeEach(jest.clearAllMocks);

  describe('getInitialValue', () => {
    it('should return null if value is null and no default value', () => {
      expect(getInitialValue(null)).toBe(null);
    });

    it('should return null if value is set but not a number', () => {
      // @ts-ignore for test purpose
      expect(getInitialValue('str')).toBe(null);
      // @ts-ignore for test purpose
      expect(getInitialValue(false)).toBe(null);
      // @ts-ignore for test purpose
      expect(getInitialValue({ dummy: 'obj' })).toBe(null);
    });

    it('should return null if value is not set and default value is not a number', () => {
      // @ts-ignore for test purpose
      expect(getInitialValue(null, 'str')).toBe(null);
      // @ts-ignore for test purpose
      expect(getInitialValue(null, false)).toBe(null);
      // @ts-ignore for test purpose
      expect(getInitialValue(null, { dummy: 'obj' })).toBe(null);
    });

    it('should return string or number if value is set regarding of default value', () => {
      expect(getInitialValue(0)).toBe(0);
      expect(getInitialValue(42)).toBe(42);
      expect(getInitialValue(42, 33)).toBe(42);
      // @ts-ignore for test purpose
      expect(getInitialValue(42, null)).toBe(42);
    });

    it('should return default value if value is null', () => {
      expect(getInitialValue(null, 0)).toBe(0);
      expect(getInitialValue(null, 33)).toBe(33);
    });
  });

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

  describe('updateInternals', () => {
    const dummyInput = { dummy: 'input' };
    const dummyInternal = {
      setFormValue: jest.fn(),
    } as unknown as ElementInternals;

    it('should set internal value with empty string', async() => {
      // @ts-ignore for test purpose
      await updateInternals(dummyInternal);
      expect(dummyInternal.setFormValue).toHaveBeenCalledWith('');

      // @ts-ignore for test purpose
      await updateInternals(dummyInternal, undefined, {} as HTMLElement & OdsInput);
      expect(dummyInternal.setFormValue).toHaveBeenCalledWith('');

      await updateInternals(dummyInternal, null, {} as HTMLElement & OdsInput);
      expect(dummyInternal.setFormValue).toHaveBeenCalledWith('');
    });

    it('should set internal value with string value', async() => {
      const dummyValue = 33;

      await updateInternals(dummyInternal, dummyValue, {} as HTMLElement & OdsInput);

      expect(dummyInternal.setFormValue).toHaveBeenCalledWith(`${dummyValue}`);
    });

    it('should not set internal validity if no input element is defined', async() => {
      await updateInternals(dummyInternal, 33);

      expect(setInternalsValidityFromOdsComponent).not.toHaveBeenCalled();
    });

    it('should set internal validity if input element is defined', async() => {
      await updateInternals(dummyInternal, 33, dummyInput as unknown as HTMLElement & OdsInput);

      expect(setInternalsValidityFromOdsComponent).toHaveBeenCalledWith(dummyInput, dummyInternal);
    });
  });
});
