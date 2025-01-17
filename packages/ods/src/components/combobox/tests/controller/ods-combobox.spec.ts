import { type OdsComboboxItem } from '../../src/components/ods-combobox-item/ods-combobox-item';
import { getInitialValue, inlineSelection, inlineValue, isANewItem, splitValue, updateInternals, updateItemsFocus } from '../../src/controller/ods-combobox';

describe('ods-combobox controller', () => {
  beforeEach(jest.clearAllMocks);

  describe('getInitialValue', () => {
    it('should return null if value is null and no default value', () => {
      expect(getInitialValue(null)).toBe(null);
    });

    it('should return string or number if value is set regarding of default value', () => {
      expect(getInitialValue('')).toBe('');
      expect(getInitialValue('value')).toBe('value');
      expect(getInitialValue('value', 'default')).toBe('value');
      // @ts-ignore for test purpose
      expect(getInitialValue('value', null)).toBe('value');
      // @ts-ignore for test purpose
      expect(getInitialValue(42, null)).toBe(42);
    });

    it('should return default value if value is null', () => {
      expect(getInitialValue(null, '')).toBe('');
      expect(getInitialValue(null, 'default')).toBe('default');
    });
  });

  describe('inlineSelection', () => {
    it('should return values as one string', () => {
      expect(inlineSelection([])).toBe('');
      // @ts-ignore for test purpose
      expect(inlineSelection([{ value: 'dummy' }])).toBe('dummy');
      // @ts-ignore for test purpose
      expect(inlineSelection([{ value: 'dummy1' }, { value: 'dummy2' }])).toBe('dummy1,dummy2');
    });
  });

  describe('inlineValue', () => {
    it('should return empty string if no value', () => {
      // @ts-ignore for test purpose
      expect(inlineValue()).toBe('');
      // @ts-ignore for test purpose
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

  describe('isANewItem', () => {
    const dummyValue = 'dummy';

    it('should return false if no value', () => {
      expect(isANewItem()).toBe(false);
    });

    it('should return false if value is in the item list', () => {
      expect(isANewItem(dummyValue, [
        // @ts-ignore for test purpose
        { textContent: 'other value' },
        // @ts-ignore for test purpose
        { textContent: dummyValue },
      ], [])).toBe(false);

      expect(isANewItem(dummyValue, [
        // @ts-ignore for test purpose
        { searchLabel: 'other value' },
        // @ts-ignore for test purpose
        { searchLabel: dummyValue },
      ], [])).toBe(false);
    });

    it('should return false if value is in the selection list', () => {
      expect(isANewItem(dummyValue, [], [
        { text: 'other value', value: 'other-value' },
        { text: dummyValue, value: 'dummy-value' },
      ])).toBe(false);
    });

    it('should return true if no value or no lists', () => {
      expect(isANewItem(dummyValue)).toBe(true);
    });

    it('should return true if value is not in the item list nor the selection list', () => {
      expect(isANewItem(dummyValue, [
        // @ts-ignore for test purpose
        { textContent: 'other value' },
        // @ts-ignore for test purpose
        { textContent: 'random value' },
      ], [
        { text: 'other value', value: 'other-value' },
        { text: 'random value', value: 'random-value' },
      ])).toBe(true);
    });
  });

  describe('splitValue', () => {
    it('should return empty array if no value', () => {
      // @ts-ignore for test purpose
      expect(splitValue()).toEqual([]);
      // @ts-ignore for test purpose
      expect(splitValue(undefined)).toEqual([]);
      expect(splitValue(null)).toEqual([]);
      expect(splitValue('')).toEqual([]);
    });

    it('should return same array if value is an array', () => {
      const dummyValues = ['dummy', 'value'];

      expect(splitValue(dummyValues)).toEqual(dummyValues);
    });

    it('should return values as an array if it is a string', () => {
      expect(splitValue('dummy value 1,dummy value 2')).toEqual([
        'dummy value 1',
        'dummy value 2',
      ]);
    });
  });

  describe('updateInternals', () => {
    const dummyInternal = {
      setFormValue: jest.fn(),
      setValidity: jest.fn(),
    } as unknown as ElementInternals;

    it('should set internal value with empty string', async() => {
      // @ts-ignore for test purpose
      await updateInternals(dummyInternal);
      expect(dummyInternal.setFormValue).toHaveBeenCalledWith('');

      // @ts-ignore for test purpose
      await updateInternals(dummyInternal, undefined, false);
      expect(dummyInternal.setFormValue).toHaveBeenCalledWith('');

      // @ts-ignore for test purpose
      await updateInternals(dummyInternal, null, false);
      expect(dummyInternal.setFormValue).toHaveBeenCalledWith('');
    });

    it('should set internal value with string value', async() => {
      const dummyValue = 'dummy value';

      await updateInternals(dummyInternal, dummyValue, false);

      expect(dummyInternal.setFormValue).toHaveBeenCalledWith(dummyValue);
    });

    it('should reset internal validity if no value', async() => {
      await updateInternals(dummyInternal, '', false);

      expect(dummyInternal.setValidity).toHaveBeenCalledWith({});
    });

    it('should reset internal validity if not required', async() => {
      await updateInternals(dummyInternal, 'dummy value', false);

      expect(dummyInternal.setValidity).toHaveBeenCalledWith({});
    });

    it('should set internal validity error if there is no value and it is required', async() => {
      await updateInternals(dummyInternal, '', true);

      expect(dummyInternal.setValidity).toHaveBeenCalledWith({ valueMissing: true }, undefined);
    });
  });

  describe('updateItemsFocus', () => {
    describe('down', () => {
      it('should remove current focus, focus next one and return its index', () => {
        const dummyElements = [
          { isFocused: true, isSelected: false, isVisible: true },
          { isFocused: false, isSelected: false, isVisible: true },
          { isFocused: false, isSelected: false, isVisible: true },
        ] as (HTMLElement & OdsComboboxItem)[];

        expect(updateItemsFocus(dummyElements, 0, 'down')).toBe(1);
        expect(dummyElements[0].isFocused).toBe(false);
        expect(dummyElements[1].isFocused).toBe(true);
        expect(dummyElements[2].isFocused).toBe(false);
      });

      it('should remove current focus, focus next visible one and return its index', () => {
        const dummyElements = [
          { isFocused: false, isSelected: false, isVisible: true },
          { isFocused: true, isSelected: false, isVisible: true },
          { isFocused: false, isSelected: false, isVisible: false },
          { isFocused: false, isSelected: true, isVisible: true },
          { isFocused: false, isSelected: false, isVisible: true },
        ] as (HTMLElement & OdsComboboxItem)[];

        expect(updateItemsFocus(dummyElements, 1, 'down')).toBe(4);
        expect(dummyElements[0].isFocused).toBe(false);
        expect(dummyElements[1].isFocused).toBe(false);
        expect(dummyElements[2].isFocused).toBe(false);
        expect(dummyElements[3].isFocused).toBe(false);
        expect(dummyElements[4].isFocused).toBe(true);
      });
    });

    describe('reset', () => {
      it('should return -1 and remove focus on all items', () => {
        const dummyElements = [
          { isFocused: true, isSelected: false, isVisible: true },
          { isFocused: false, isSelected: false, isVisible: true },
          { isFocused: true, isSelected: false, isVisible: true },
        ] as (HTMLElement & OdsComboboxItem)[];

        expect(updateItemsFocus(dummyElements, 42, 'reset')).toBe(-1);
        dummyElements.forEach((el) => {
          expect(el.isFocused).toBe(false);
        });
      });
    });

    describe('up', () => {
      it('should remove current focus, focus previous one and return its index', () => {
        const dummyElements = [
          { isFocused: false, isSelected: false, isVisible: true },
          { isFocused: true, isSelected: false, isVisible: true },
          { isFocused: false, isSelected: false, isVisible: true },
        ] as (HTMLElement & OdsComboboxItem)[];

        expect(updateItemsFocus(dummyElements, 1, 'up')).toBe(0);
        expect(dummyElements[0].isFocused).toBe(true);
        expect(dummyElements[1].isFocused).toBe(false);
        expect(dummyElements[2].isFocused).toBe(false);
      });

      it('should remove current focus, focus previous visible one and return its index', () => {
        const dummyElements = [
          { isFocused: false, isSelected: false, isVisible: true },
          { isFocused: false, isSelected: false, isVisible: true },
          { isFocused: false, isSelected: false, isVisible: false },
          { isFocused: false, isSelected: true, isVisible: true },
          { isFocused: true, isSelected: false, isVisible: true },
        ] as (HTMLElement & OdsComboboxItem)[];

        expect(updateItemsFocus(dummyElements, 4, 'up')).toBe(1);
        expect(dummyElements[0].isFocused).toBe(false);
        expect(dummyElements[1].isFocused).toBe(true);
        expect(dummyElements[2].isFocused).toBe(false);
        expect(dummyElements[3].isFocused).toBe(false);
        expect(dummyElements[4].isFocused).toBe(false);
      });
    });
  });
});
