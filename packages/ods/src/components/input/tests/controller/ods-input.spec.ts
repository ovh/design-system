jest.mock('../../../../utils/dom');

import { setInternalsValidityFromHtmlElement } from '../../../../utils/dom';
import { getInitialValue, handleKeySpaceEnter, isPassword, updateInternals } from '../../src/controller/ods-input';

describe('ods-input controller', () => {
  beforeEach(jest.clearAllMocks);

  describe('getInitialValue', () => {
    it('should return null if value is null and no default value', () => {
      expect(getInitialValue(null)).toBe(null);
    });

    it('should return string or number if value is set regarding of default value', () => {
      expect(getInitialValue('')).toBe('');
      expect(getInitialValue(0)).toBe(0);
      expect(getInitialValue('value')).toBe('value');
      expect(getInitialValue(42)).toBe(42);
      expect(getInitialValue('value', 'default')).toBe('value');
      expect(getInitialValue(42, 33)).toBe(42);
      // @ts-ignore for test purpose
      expect(getInitialValue('value', null)).toBe('value');
      // @ts-ignore for test purpose
      expect(getInitialValue(42, null)).toBe(42);
    });

    it('should return default value if value is null', () => {
      expect(getInitialValue(null, '')).toBe('');
      expect(getInitialValue(null, 0)).toBe(0);
      expect(getInitialValue(null, 'default')).toBe('default');
      expect(getInitialValue(null, 33)).toBe(33);
    });
  });

  describe('isPassword', () => {
    it('should return true if not undefined', async() => {
      expect(isPassword(undefined)).toBe(false);
      expect(isPassword(false)).toBe(true);
      expect(isPassword(true)).toBe(true);
    });
  });

  describe('handleKeySpaceEnter', () => {
    it('should do nothing if disabled', async() => {
      const callback = jest.fn();
      const event = {
        key: ' ',
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
      } as unknown as KeyboardEvent;
      handleKeySpaceEnter(event, true, callback);
      expect(callback).not.toHaveBeenCalled();
    });

    it('should call callback if space', async() => {
      const callback = jest.fn();
      const event = {
        key: ' ',
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
      } as unknown as KeyboardEvent;
      handleKeySpaceEnter(event, false, callback);
      expect(callback).toHaveBeenCalledTimes(1);
    });

    it('should call callback if Enter', async() => {
      const callback = jest.fn();
      const event = {
        key: 'Enter',
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
      } as unknown as KeyboardEvent;
      handleKeySpaceEnter(event, false, callback);
      expect(callback).toHaveBeenCalledTimes(1);
    });

    it('should do nothing if not space', async() => {
      const callback = jest.fn();
      const event = {
        key: 'Escape',
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
      } as unknown as KeyboardEvent;
      handleKeySpaceEnter(event, false, callback);
      expect(callback).not.toHaveBeenCalled();
    });
  });

  describe('updateInternals', () => {
    const dummyInput = { dummy: 'input' };
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
      const dummyValue = 'dummy value';

      updateInternals(dummyInternal, dummyValue, {} as HTMLInputElement);

      expect(dummyInternal.setFormValue).toHaveBeenCalledWith(dummyValue);
    });

    it('should not set internal validity if no input element is defined', () => {
      updateInternals(dummyInternal, 'dummyValue');

      expect(setInternalsValidityFromHtmlElement).not.toHaveBeenCalled();
    });

    it('should set internal validity if input element is defined', () => {
      updateInternals(dummyInternal, 'dummyValue', dummyInput as unknown as HTMLInputElement);

      expect(setInternalsValidityFromHtmlElement).toHaveBeenCalledWith(dummyInput, dummyInternal);
    });
  });
});
