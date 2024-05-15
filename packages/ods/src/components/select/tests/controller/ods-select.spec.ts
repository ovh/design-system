import type TomSelect from 'tom-select';
import { getSelectConfig, inlineValue, moveSlottedElements, setFormValue, setSelectValue } from '../../src/controller/ods-select';

describe('ods-select controller', () => {
  beforeEach(jest.clearAllMocks);

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

  describe('inlineValue', () => {
    it('should return empty string if no value', () => {
      // @ts-ignore for test purpose
      expect(inlineValue()).toBe('');
      expect(inlineValue(undefined)).toBe('');
      expect(inlineValue(null)).toBe('');
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
      moveSlottedElements(dummyTarget, dummySlotted);

      expect(dummyTarget.replaceChildren).toHaveBeenCalled();
      expect(dummyTarget.appendChild).toHaveBeenCalledTimes(dummySlotted.length);
    });
  });

  describe('setFormValue', () => {
    const dummyInternal = {
      setFormValue: jest.fn(),
    } as unknown as ElementInternals;

    it('should set internal value with empty string', () => {
      // @ts-ignore for test purpose
      setFormValue(dummyInternal);
      expect(dummyInternal.setFormValue).toHaveBeenCalledWith('');

      setFormValue(dummyInternal, undefined);
      expect(dummyInternal.setFormValue).toHaveBeenCalledWith('');

      setFormValue(dummyInternal, null);
      expect(dummyInternal.setFormValue).toHaveBeenCalledWith('');
    });

    it('should set internal value with string value', () => {
      const dummyValue = 'dummy value';

      setFormValue(dummyInternal, dummyValue);

      expect(dummyInternal.setFormValue).toHaveBeenCalledWith(dummyValue);
    });

    it('should set internal value with strings joined value', () => {
      setFormValue(dummyInternal, [
        'dummy value 1',
        'dummy value 2',
      ]);

      expect(dummyInternal.setFormValue).toHaveBeenCalledWith('dummy value 1,dummy value 2');
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
});
