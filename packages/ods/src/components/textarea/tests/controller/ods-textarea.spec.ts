jest.mock('../../../../utils/dom');

import { setInternalsValidityFromHtmlElement } from '../../../../utils/dom';
import { getInitialValue, updateInternals } from '../../src/controller/ods-textarea';

describe('ods-textarea controller', () => {
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
    const dummyInternal = {
      setFormValue: jest.fn(),
    } as unknown as ElementInternals;
    const dummyTextarea = { dummy: 'textarea' };

    it('should set internal value with empty string', () => {
      // @ts-ignore for test purpose
      updateInternals(dummyInternal);
      expect(dummyInternal.setFormValue).toHaveBeenCalledWith('');

      // @ts-ignore for test purpose
      updateInternals(dummyInternal, undefined, {} as HTMLTextAreaElement);
      expect(dummyInternal.setFormValue).toHaveBeenCalledWith('');

      updateInternals(dummyInternal, null, {} as HTMLTextAreaElement);
      expect(dummyInternal.setFormValue).toHaveBeenCalledWith('');
    });

    it('should set internal value with string value', () => {
      const dummyValue = 'dummy value';

      updateInternals(dummyInternal, dummyValue, {} as HTMLTextAreaElement);

      expect(dummyInternal.setFormValue).toHaveBeenCalledWith(dummyValue);
    });

    it('should not set internal validity if no textarea element is defined', () => {
      updateInternals(dummyInternal, 'dummyValue');

      expect(setInternalsValidityFromHtmlElement).not.toHaveBeenCalled();
    });

    it('should set internal validity if textarea element is defined', () => {
      updateInternals(dummyInternal, 'dummyValue', dummyTextarea as unknown as HTMLTextAreaElement);

      expect(setInternalsValidityFromHtmlElement).toHaveBeenCalledWith(dummyTextarea, dummyInternal);
    });
  });
});
