jest.mock('../../../../utils/dom');

import { setInternalsValidityFromHtmlElement } from '../../../../utils/dom';
import { hasValueChanged, updateInternals } from '../../src/controller/ods-toggle';

describe('ods-toggle controller', () => {
  beforeEach(jest.clearAllMocks);

  describe('hasValueChanged', () => {
    it('should return false if no previous value', () => {
      expect(hasValueChanged(true)).toBe(false);
    });

    it('should return false if value did not change', () => {
      expect(hasValueChanged(false, null)).toBe(false);
      expect(hasValueChanged(false, 'false')).toBe(false);
      expect(hasValueChanged(true, '')).toBe(false);
      expect(hasValueChanged(true, 'true')).toBe(false);
    });

    it('should return true if value did change', () => {
      expect(hasValueChanged(false, '')).toBe(true);
      expect(hasValueChanged(false, 'true')).toBe(true);
      expect(hasValueChanged(true, null)).toBe(true);
      expect(hasValueChanged(true, 'false')).toBe(true);
    });
  });

  describe('updateInternals', () => {
    const dummyToggle = { dummy: 'input' };
    const dummyInternal = {
      setFormValue: jest.fn(),
    } as unknown as ElementInternals;

    it('should set internal value with empty string', () => {
      // @ts-ignore for test purpose
      updateInternals(dummyInternal);
      expect(dummyInternal.setFormValue).toHaveBeenCalledWith('');

      // @ts-ignore for test purpose
      updateInternals(dummyInternal, undefined, {} as HTMLInputElement);
      expect(dummyInternal.setFormValue).toHaveBeenCalledWith('');

      updateInternals(dummyInternal, null, {} as HTMLInputElement);
      expect(dummyInternal.setFormValue).toHaveBeenCalledWith('');
    });

    it('should set internal value with string value', () => {
      updateInternals(dummyInternal, true, {} as HTMLInputElement);

      expect(dummyInternal.setFormValue).toHaveBeenCalledWith('true');
    });

    it('should not set internal validity if no input element is defined', () => {
      updateInternals(dummyInternal, true);

      expect(setInternalsValidityFromHtmlElement).not.toHaveBeenCalled();
    });

    it('should set internal validity if input element is defined', async() => {
      updateInternals(dummyInternal, true, dummyToggle as unknown as HTMLInputElement);

      expect(setInternalsValidityFromHtmlElement).toHaveBeenCalledWith(dummyToggle, dummyInternal);
    });
  });
});
