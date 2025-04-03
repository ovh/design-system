jest.mock('../../../../utils/dom');

import { setInternalsValidityFromOdsComponent } from '../../../../utils/dom';
import { type OdsInput } from '../../../input/src';
import { getInitialValue, updateInternals } from '../../src/controller/ods-password';

describe('ods-password controller', () => {
  beforeEach(jest.clearAllMocks);

  describe('getInitialValue', () => {
    it('should return null if value is null and no default value', () => {
      expect(getInitialValue(null)).toBe(null);
    });

    it('should return string if value is set regarding of default value', () => {
      expect(getInitialValue('')).toBe('');
      expect(getInitialValue('value')).toBe('value');
      expect(getInitialValue('value', 'default')).toBe('value');
      // @ts-ignore for test purpose
      expect(getInitialValue('value', null)).toBe('value');
    });

    it('should return default value if value is null', () => {
      expect(getInitialValue(null, '')).toBe('');
      expect(getInitialValue(null, 'default')).toBe('default');
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
      const dummyValue = 'dummy value';

      await updateInternals(dummyInternal, dummyValue, {} as HTMLElement & OdsInput);

      expect(dummyInternal.setFormValue).toHaveBeenCalledWith(dummyValue);
    });

    it('should not set internal validity if no input element is defined', async() => {
      await updateInternals(dummyInternal, 'dummyValue');

      expect(setInternalsValidityFromOdsComponent).not.toHaveBeenCalled();
    });

    it('should set internal validity if input element is defined', async() => {
      await updateInternals(dummyInternal, 'dummyValue', dummyInput as unknown as HTMLElement & OdsInput);

      expect(setInternalsValidityFromOdsComponent).toHaveBeenCalledWith(dummyInput, dummyInternal);
    });
  });
});
