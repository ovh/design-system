import { clearItems, focusFirstSwitchItem, getInitialValueState, getValidationMessageFromChildren, getValidityStateFromChildren, getWillValidateFromChildren, propagateInputId, propagateIsDisabled, propagateIsRequired, propagateName, reportValidityFromOneChild, resetItems } from '../../src/controller/ods-switch';

type TestItem = {
  'input-id'?: string,
  'is-disabled'?: boolean,
  'is-required'?: boolean,
  clear?: jest.Mock,
  focusItem?: jest.Mock,
  getValidationMessage?: jest.Mock,
  getValidity?: jest.Mock,
  hasAttribute?: jest.Mock,
  name?: string,
  removeAttribute?: jest.Mock,
  reportValidity?: jest.Mock,
  reset?: jest.Mock,
  setAttribute?: jest.Mock,
  tagName: string,
  value?: string | null,
  willValidate?: jest.Mock,
}

describe('ods-switch controller', () => {
  const setAttributeSpy = jest.fn()
    .mockImplementation(function(attr, value) {
      // @ts-ignore "this" is the actual item
      this[attr] = value;
    });

  const removeAttributeSpy = jest.fn()
    .mockImplementation(function(attr) {
      // @ts-ignore "this" is the actual item
      this[attr] = undefined;
    });

  beforeEach(jest.clearAllMocks);

  describe('clearItems', () => {
    it('should call clear on each switchItem', async() => {
      const clearSpy = jest.fn();
      const items = [{
        clear: clearSpy,
        tagName: 'ODS-SWITCH-ITEM',
      }, {
        tagName: 'BUTTON',
      }];

      // @ts-ignore for test purpose
      await clearItems(items);

      expect(clearSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('focusFirstSwitchItem', () => {
    it('should do nothing if no switch items found', () => {
      const focusSpy = jest.fn();
      const items: TestItem[] = [{
        focusItem: focusSpy,
        tagName: 'ODS-TAG',
      }, {
        focusItem: focusSpy,
        tagName: 'BUTTON',
      }];

      // @ts-ignore for test purpose
      focusFirstSwitchItem(items);

      expect(focusSpy).toHaveBeenCalledTimes(0);
    });

    it('should do focus the first switch item', () => {
      const focusSpy1 = jest.fn();
      const focusSpy2 = jest.fn();
      const items: TestItem[] = [{
        focusItem: focusSpy1,
        tagName: 'ODS-SWITCH-ITEM',
      }, {
        focusItem: focusSpy2,
        tagName: 'ODS-SWITCH-ITEM',
      }];

      // @ts-ignore for test purpose
      focusFirstSwitchItem(items);

      expect(focusSpy1).toHaveBeenCalledTimes(1);
      expect(focusSpy2).toHaveBeenCalledTimes(0);
    });
  });

  describe('getInitialValueState', () => {
    it('should return an error validity state if required and no checked items', () => {
      const hasAttributeSpy = jest.fn().mockReturnValue(false);
      const items = [{
        hasAttribute: hasAttributeSpy,
        tagName: 'ODS-SWITCH-ITEM',
      }, {
        hasAttribute: hasAttributeSpy,
        tagName: 'ODS-SWITCH-ITEM',
      }];

      // @ts-ignore for test purpose
      const state = getInitialValueState(items, true);

      expect(hasAttributeSpy).toHaveBeenCalledTimes(2);
      expect(state).toEqual({
        validity: {
          badInput: false,
          customError: false,
          patternMismatch: false,
          rangeOverflow: false,
          rangeUnderflow: false,
          stepMismatch: false,
          tooLong: false,
          tooShort: false,
          typeMismatch: false,
          valid: false,
          valueMissing: true,
        },
        value: null,
      });
    });

    it('should return a valid validity state if not required and no checked items', () => {
      const hasAttributeSpy = jest.fn().mockReturnValue(false);
      const items = [{
        hasAttribute: hasAttributeSpy,
        tagName: 'ODS-SWITCH-ITEM',
      }, {
        hasAttribute: hasAttributeSpy,
        tagName: 'ODS-SWITCH-ITEM',
      }];

      // @ts-ignore for test purpose
      const state = getInitialValueState(items, false);

      expect(hasAttributeSpy).toHaveBeenCalledTimes(2);
      expect(state).toEqual({
        validity: {
          badInput: false,
          customError: false,
          patternMismatch: false,
          rangeOverflow: false,
          rangeUnderflow: false,
          stepMismatch: false,
          tooLong: false,
          tooShort: false,
          typeMismatch: false,
          valid: true,
          valueMissing: false,
        },
        value: null,
      });
    });

    it('should return a valid validity state if there is one checked item', () => {
      const hasAttributeSpy = jest.fn();
      const items = [{
        hasAttribute: hasAttributeSpy.mockReturnValueOnce(true),
        tagName: 'ODS-SWITCH-ITEM',
        value: '1',
      }, {
        hasAttribute: hasAttributeSpy.mockReturnValueOnce(false),
        tagName: 'ODS-SWITCH-ITEM',
        value: '2',
      }];

      // @ts-ignore for test purpose
      const state = getInitialValueState(items, true);

      expect(hasAttributeSpy).toHaveBeenCalledTimes(1);
      expect(state).toEqual({
        validity: {
          badInput: false,
          customError: false,
          patternMismatch: false,
          rangeOverflow: false,
          rangeUnderflow: false,
          stepMismatch: false,
          tooLong: false,
          tooShort: false,
          typeMismatch: false,
          valid: true,
          valueMissing: false,
        },
        value: '1',
      });
    });
  });

  describe('getValidationMessageFromChildren', () => {
    it('should return empty string if no validation message found amongst children', async() => {
      const getValidationMessageSpy = jest.fn().mockResolvedValue(null);
      const items: TestItem[] = [{
        getValidationMessage: getValidationMessageSpy,
        tagName: 'ODS-SWITCH-ITEM',
      }, {
        getValidationMessage: getValidationMessageSpy,
        tagName: 'ODS-SWITCH-ITEM',
      }];

      // @ts-ignore for test purpose
      const message = await getValidationMessageFromChildren(items);

      expect(getValidationMessageSpy).toHaveBeenCalledTimes(2);
      expect(message).toBe('');
    });

    it('should return child validation message', async() => {
      const dummyMessage = 'dummy message';
      const getValidationMessageSpy = jest.fn().mockResolvedValue(dummyMessage);
      const items: TestItem[] = [{
        getValidationMessage: getValidationMessageSpy,
        tagName: 'ODS-SWITCH-ITEM',
      }, {
        getValidationMessage: getValidationMessageSpy,
        tagName: 'ODS-SWITCH-ITEM',
      }];

      // @ts-ignore for test purpose
      const message = await getValidationMessageFromChildren(items);

      expect(getValidationMessageSpy).toHaveBeenCalledTimes(2);
      expect(message).toBe(dummyMessage);
    });
  });

  describe('getValidityStateFromChildren', () => {
    it('should return default validity state if all children are valid', async() => {
      const getValiditySpy = jest.fn().mockResolvedValue({ valid: true });
      const items: TestItem[] = [{
        getValidity: getValiditySpy,
        tagName: 'ODS-SWITCH-ITEM',
      }, {
        getValidity: getValiditySpy,
        tagName: 'ODS-SWITCH-ITEM',
      }];

      // @ts-ignore for test purpose
      const state = await getValidityStateFromChildren(items);

      expect(getValiditySpy).toHaveBeenCalledTimes(2);
      expect(state).toEqual({
        badInput: false,
        customError: false,
        patternMismatch: false,
        rangeOverflow: false,
        rangeUnderflow: false,
        stepMismatch: false,
        tooLong: false,
        tooShort: false,
        typeMismatch: false,
        valid: true,
        valueMissing: false,
      });
    });

    it('should return the validity state of an invalid child if any', async() => {
      const expectedInvalidState = { dummy: 'state', valid: false };
      const getValiditySpy = jest.fn();
      const items: TestItem[] = [{
        getValidity: getValiditySpy.mockResolvedValueOnce({ valid: true }),
        tagName: 'ODS-SWITCH-ITEM',
      }, {
        getValidity: getValiditySpy.mockResolvedValueOnce(expectedInvalidState),
        tagName: 'ODS-SWITCH-ITEM',
      }];

      // @ts-ignore for test purpose
      const state = await getValidityStateFromChildren(items);

      expect(getValiditySpy).toHaveBeenCalledTimes(2);
      expect(state).toEqual(expectedInvalidState);
    });
  });

  describe('getWillValidateFromChildren', () => {
    it('should return false if no children return true', async() => {
      const willValidateSpy = jest.fn().mockResolvedValue(false);
      const items: TestItem[] = [{
        tagName: 'ODS-SWITCH-ITEM',
        willValidate: willValidateSpy,
      }, {
        tagName: 'ODS-SWITCH-ITEM',
        willValidate: willValidateSpy,
      }];

      // @ts-ignore for test purpose
      const result = await getWillValidateFromChildren(items);

      expect(willValidateSpy).toHaveBeenCalledTimes(2);
      expect(result).toBe(false);
    });

    it('should return true if at least one child return true', async() => {
      const willValidateSpy = jest.fn().mockResolvedValue(true);
      const items: TestItem[] = [{
        tagName: 'ODS-SWITCH-ITEM',
        willValidate: willValidateSpy,
      }, {
        tagName: 'ODS-SWITCH-ITEM',
        willValidate: willValidateSpy,
      }];

      // @ts-ignore for test purpose
      const result = await getWillValidateFromChildren(items);

      expect(willValidateSpy).toHaveBeenCalledTimes(2);
      expect(result).toBe(true);
    });
  });

  describe('propagateInputId', () => {
    it('should set sequenced input-id to items', () => {
      const items: TestItem[] = [{
        setAttribute: setAttributeSpy,
        tagName: 'ODS-SWITCH-ITEM',
      }, {
        setAttribute: setAttributeSpy,
        tagName: 'ODS-SWITCH-ITEM',
      }, {
        setAttribute: setAttributeSpy,
        tagName: 'BUTTON',
      }];

      // @ts-ignore for test purpose
      propagateInputId('dummy-id', items);

      expect(setAttributeSpy).toHaveBeenCalledTimes(2);
      expect(items[0]['input-id']).toBe('dummy-id-0');
      expect(items[1]['input-id']).toBe('dummy-id-1');
      expect(items[2]['input-id']).toBe(undefined);
    });
  });

  describe('propagateIsDisabled', () => {
    it('should set is-disabled attribute to item', () => {
      const items: TestItem[] = [{
        removeAttribute: removeAttributeSpy,
        setAttribute: setAttributeSpy,
        tagName: 'ODS-SWITCH-ITEM',
      }, {
        removeAttribute: removeAttributeSpy,
        setAttribute: setAttributeSpy,
        tagName: 'BUTTON',
      }];

      // @ts-ignore for test purpose
      propagateIsDisabled(true, items);

      expect(setAttributeSpy).toHaveBeenCalledTimes(1);
      expect(items[0]['is-disabled']).toBe('');
      expect(items[1]['is-disabled']).toBe(undefined);
    });

    it('should remove is-disabled attribute from item', () => {
      const items: TestItem[] = [{
        removeAttribute: removeAttributeSpy,
        setAttribute: setAttributeSpy,
        tagName: 'ODS-SWITCH-ITEM',
      }, {
        removeAttribute: removeAttributeSpy,
        setAttribute: setAttributeSpy,
        tagName: 'BUTTON',
      }];

      // @ts-ignore for test purpose
      propagateIsDisabled(false, items);

      expect(removeAttributeSpy).toHaveBeenCalledTimes(1);
      expect(items[0]['is-disabled']).toBe(undefined);
      expect(items[1]['is-disabled']).toBe(undefined);
    });
  });

  describe('propagateIsRequired', () => {
    it('should set is-required attribute to item', () => {
      const items: TestItem[] = [{
        removeAttribute: removeAttributeSpy,
        setAttribute: setAttributeSpy,
        tagName: 'ODS-SWITCH-ITEM',
      }, {
        removeAttribute: removeAttributeSpy,
        setAttribute: setAttributeSpy,
        tagName: 'BUTTON',
      }];

      // @ts-ignore for test purpose
      propagateIsRequired(true, items);

      expect(setAttributeSpy).toHaveBeenCalledTimes(1);
      expect(items[0]['is-required']).toBe('');
      expect(items[1]['is-required']).toBe(undefined);
    });

    it('should remove is-required attribute from item', () => {
      const items: TestItem[] = [{
        removeAttribute: removeAttributeSpy,
        setAttribute: setAttributeSpy,
        tagName: 'ODS-SWITCH-ITEM',
      }, {
        removeAttribute: removeAttributeSpy,
        setAttribute: setAttributeSpy,
        tagName: 'BUTTON',
      }];

      // @ts-ignore for test purpose
      propagateIsRequired(false, items);

      expect(removeAttributeSpy).toHaveBeenCalledTimes(1);
      expect(items[0]['is-required']).toBe(undefined);
      expect(items[1]['is-required']).toBe(undefined);
    });
  });

  describe('propagateName', () => {
    it('should set name attribute to item', () => {
      const dummyName = 'dummy name';
      const items: TestItem[] = [{
        setAttribute: setAttributeSpy,
        tagName: 'ODS-SWITCH-ITEM',
      }, {
        setAttribute: setAttributeSpy,
        tagName: 'BUTTON',
      }];

      // @ts-ignore for test purpose
      propagateName(dummyName, items);

      expect(setAttributeSpy).toHaveBeenCalledTimes(1);
      expect(items[0]['name']).toBe(dummyName);
      expect(items[1]['name']).toBe(undefined);
    });
  });

  describe('reportValidityFromOneChild', () => {
    it('should return undefined if no switch item children', async() => {
      const items: TestItem[] = [{
        tagName: 'ODS-TAG',
      }, {
        tagName: 'ODS-BUTTON',
      }];

      // @ts-ignore for test purpose
      const state = await reportValidityFromOneChild(items);

      expect(state).toBeUndefined();
    });

    it('should return first child validity if all children are valid', async() => {
      const getValiditySpy = jest.fn().mockResolvedValue({ valid: true });
      const reportValiditySpy1 = jest.fn().mockResolvedValue(true);
      const reportValiditySpy2 = jest.fn().mockResolvedValue(false);
      const items: TestItem[] = [{
        getValidity: getValiditySpy,
        reportValidity: reportValiditySpy1,
        tagName: 'ODS-SWITCH-ITEM',
      }, {
        getValidity: getValiditySpy,
        reportValidity: reportValiditySpy2,
        tagName: 'ODS-SWITCH-ITEM',
      }];

      // @ts-ignore for test purpose
      const validity = await reportValidityFromOneChild(items);

      expect(getValiditySpy).toHaveBeenCalledTimes(2);
      expect(reportValiditySpy1).toHaveBeenCalledTimes(1);
      expect(reportValiditySpy2).toHaveBeenCalledTimes(0);
      expect(validity).toBe(true);
    });

    it('should return first child validity that is valid', async() => {
      const getValiditySpy = jest.fn();
      const reportValiditySpy1 = jest.fn().mockResolvedValue(true);
      const reportValiditySpy2 = jest.fn().mockResolvedValue(false);
      const items: TestItem[] = [{
        getValidity: getValiditySpy.mockResolvedValueOnce({ valid: true }),
        reportValidity: reportValiditySpy1,
        tagName: 'ODS-SWITCH-ITEM',
      }, {
        getValidity: getValiditySpy.mockResolvedValueOnce({ valid: false }),
        reportValidity: reportValiditySpy2,
        tagName: 'ODS-SWITCH-ITEM',
      }];

      // @ts-ignore for test purpose
      const validity = await reportValidityFromOneChild(items);

      expect(getValiditySpy).toHaveBeenCalledTimes(2);
      expect(reportValiditySpy1).toHaveBeenCalledTimes(0);
      expect(reportValiditySpy2).toHaveBeenCalledTimes(1);
      expect(validity).toBe(false);
    });
  });

  describe('resetItems', () => {
    it('should call reset on each switchItem and return null if none are checked', async() => {
      const resetSpy = jest.fn();
      const items: TestItem[] = [{
        reset: resetSpy,
        tagName: 'ODS-SWITCH-ITEM',
      }, {
        tagName: 'BUTTON',
      }];

      // @ts-ignore for test purpose
      const value = await resetItems(items);

      expect(resetSpy).toHaveBeenCalledTimes(1);
      expect(value).toBeNull();
    });

    it('should call reset on each switchItem and return value of checked item', async() => {
      const dummyValue = 'dummy value';
      const resetSpy = jest.fn();
      const items: TestItem[] = [{
        reset: resetSpy.mockReturnValueOnce(null),
        tagName: 'ODS-SWITCH-ITEM',
      }, {
        reset: resetSpy.mockReturnValueOnce(dummyValue),
        tagName: 'ODS-SWITCH-ITEM',
      }];

      // @ts-ignore for test purpose
      const value = await resetItems(items);

      expect(resetSpy).toHaveBeenCalledTimes(2);
      expect(value).toBe(dummyValue);
    });
  });
});
