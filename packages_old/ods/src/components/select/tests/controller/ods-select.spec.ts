jest.mock('../../../../utils/dom');

import type TomSelect from 'tom-select';
import { setInternalsValidityFromHtmlElement } from '../../../../utils/dom';
import { getInitialValue, getSelectConfig, hasNoValueOption, inlineValue, moveSlottedElements, setSelectValue, updateInternals } from '../../src/controller/ods-select';

describe('ods-select controller', () => {
  beforeEach(jest.clearAllMocks);

  describe('getInitialValue', () => {
    it('should return null if value is null and no default value', () => {
      expect(getInitialValue(null)).toBe(null);
    });

    it('should return string or number if value is set regarding of default value', () => {
      expect(getInitialValue('')).toBe('');
      expect(getInitialValue([])).toEqual([]);
      expect(getInitialValue('value')).toBe('value');
      expect(getInitialValue(['dummy', 'value'])).toEqual(['dummy', 'value']);
      expect(getInitialValue('value', 'default')).toBe('value');
      expect(getInitialValue(['dummy', 'value'], ['default', 'value'])).toEqual(['dummy', 'value']);
      // @ts-ignore for test purpose
      expect(getInitialValue('value', null)).toBe('value');
      // @ts-ignore for test purpose
      expect(getInitialValue(['dummy', 'value'], null)).toEqual(['dummy', 'value']);
    });

    it('should return default value if value is null', () => {
      expect(getInitialValue(null, '')).toBe('');
      expect(getInitialValue(null, [])).toEqual([]);
      expect(getInitialValue(null, 'default')).toBe('default');
      expect(getInitialValue(null, ['default', 'value'])).toEqual(['default', 'value']);
    });
  });

  describe('getSelectConfig', () => {
    it('should return single selection config', () => {
      expect(getSelectConfig(false, '')).toEqual({
        plugin: {
          placeholder: {},
        },
        template: {},
      });
    });

    it('should return multiple selection config', () => {
      const dummyLabel = 'dummy label';

      expect(getSelectConfig(true, dummyLabel)).toEqual({
        plugin: {
          checkbox_options: {
            checkedClassNames: ['ts-checked'],
            uncheckedClassNames: ['ts-unchecked'],
          },
          merge_selected_items: {
            label: dummyLabel,
          },
          placeholder: {},
        },
        template: {
          item: expect.any(Function),
        },
      });
    });
  });

  describe('hasNoValueOption', () => {
    it('should return false if no elements have an empty value', () => {
      const dummyElements = [{ value: 'value1' }, { value: 'value2' }] as HTMLOptionElement[];

      expect(hasNoValueOption([])).toBe(false);
      expect(hasNoValueOption(dummyElements)).toBe(false);
    });

    it('should return true if one element have an empty value', () => {
      const dummyElements = [{ value: 'value1' }, { value: '' }] as HTMLOptionElement[];

      expect(hasNoValueOption(dummyElements)).toBe(true);
    });
  });

  describe('inlineValue', () => {
    it('should return null if no value', () => {
      // @ts-ignore for test purpose
      expect(inlineValue()).toBe(null);
      expect(inlineValue(undefined)).toBe(null);
      expect(inlineValue(null)).toBe(null);
    });

    it('should return same string if value is not an array', () => {
      const dummyValue = 'dummy value';

      expect(inlineValue(dummyValue)).toBe(dummyValue);
    });

    it('should return joined string if value is an array', () => {
      expect(inlineValue([
        'dummy value 1',
        'dummy value 2',
      ])).toBe('dummy value 1,dummy value 2');
    });
  });

  describe('moveSlottedElements', () => {
    it('should clean and move nodes', () => {
      const dummySlotted = ['node 1', 'node 2'];
      const dummyTarget = {
        appendChild: jest.fn(),
        replaceChildren: jest.fn(),
      };

      // @ts-ignore for test purpose
      moveSlottedElements(dummyTarget, dummySlotted, true);

      expect(dummyTarget.replaceChildren).toHaveBeenCalled();
      expect(dummyTarget.appendChild).toHaveBeenCalledTimes(dummySlotted.length);
    });

    it('should clean, move nodes and add an empty option', () => {
      const dummySlotted = ['node 1', 'node 2'];
      const dummyTarget = {
        appendChild: jest.fn(),
        replaceChildren: jest.fn(),
      };

      // @ts-ignore for test purpose
      moveSlottedElements(dummyTarget, dummySlotted, false);

      expect(dummyTarget.replaceChildren).toHaveBeenCalled();
      expect(dummyTarget.appendChild).toHaveBeenCalledTimes(dummySlotted.length + 1);
    });
  });

  describe('setSelectValue', () => {
    const dummySelect = {
      clear: jest.fn(),
      setValue: jest.fn(),
    } as unknown as TomSelect;

    it('should clear the select if no value', () => {
      setSelectValue(dummySelect);

      expect(dummySelect.clear).toHaveBeenCalledTimes(1);
      expect(dummySelect.clear).toHaveBeenCalledWith(false);

      setSelectValue(dummySelect, undefined, undefined, true);

      expect(dummySelect.clear).toHaveBeenCalledTimes(2);
      expect(dummySelect.clear).toHaveBeenCalledWith(true);
    });

    it('should set select value with given value if defined', () => {
      const dummyValue = 'dummy value';

      setSelectValue(dummySelect, dummyValue);

      expect(dummySelect.setValue).toHaveBeenCalledTimes(1);
      expect(dummySelect.setValue).toHaveBeenCalledWith(dummyValue, false);

      setSelectValue(dummySelect, dummyValue, undefined, true);

      expect(dummySelect.setValue).toHaveBeenCalledTimes(2);
      expect(dummySelect.setValue).toHaveBeenCalledWith(dummyValue, true);
    });

    it('should set select value with given default value if defined and no value passed', () => {
      const dummyDefaultValue = 'dummy default value';

      setSelectValue(dummySelect, undefined, dummyDefaultValue);

      expect(dummySelect.setValue).toHaveBeenCalledTimes(1);
      expect(dummySelect.setValue).toHaveBeenCalledWith(dummyDefaultValue, false);

      setSelectValue(dummySelect, undefined, dummyDefaultValue, true);

      expect(dummySelect.setValue).toHaveBeenCalledTimes(2);
      expect(dummySelect.setValue).toHaveBeenCalledWith(dummyDefaultValue, true);
    });
  });

  describe('updateInternals', () => {
    const dummySelect = { dummy: 'input' };
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

      await updateInternals(dummyInternal, null, {} as HTMLSelectElement);
      expect(dummyInternal.setFormValue).toHaveBeenCalledWith('');
    });

    it('should set internal value with string value', async() => {
      const dummyValue = 'dummy value';

      await updateInternals(dummyInternal, dummyValue, {} as HTMLSelectElement);

      expect(dummyInternal.setFormValue).toHaveBeenCalledWith(dummyValue);
    });

    it('should not set internal validity if no input element is defined', async() => {
      await updateInternals(dummyInternal, 'dummyValue');

      expect(setInternalsValidityFromHtmlElement).not.toHaveBeenCalled();
    });

    it('should set internal validity if input element is defined', async() => {
      await updateInternals(dummyInternal, 'dummyValue', dummySelect as unknown as HTMLSelectElement);

      expect(setInternalsValidityFromHtmlElement).toHaveBeenCalledWith(dummySelect, dummyInternal);
    });
  });
});
