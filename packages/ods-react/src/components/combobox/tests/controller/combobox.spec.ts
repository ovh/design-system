jest.mock('../../../../utils/element', () => ({
  getElementText: jest.fn().mockImplementation(() => 'Custom Text'),
}));

import { getElementText } from '../../../../utils/element';
import {
  calculateNewFocusIndex,
  escapeRegExp,
  filterItems,
  findLabelForValue,
  flattenItems,
  getFilteredItems,
  getItemText,
  hasExactMatch,
  isKeyboardEventAtInputStart,
  isValueAlreadySelected,
  matchesSearch,
  removeValueFromArray,
  shouldResetTagFocus,
  splitTextBySearchTerm,
} from '../../src/controller/combobox';

type MockReactElement = {
  props: Record<string, unknown>;
  type: string;
};

describe('Combobox controller', () => {
  beforeEach(jest.clearAllMocks);

  describe('escapeRegExp', () => {
    it('should escape special regex characters', () => {
      expect(escapeRegExp('hello.world')).toBe('hello\\.world');
      expect(escapeRegExp('a+b*c?d^e$f|g(h)i[j]k{l}m\\n')).toBe('a\\+b\\*c\\?d\\^e\\$f\\|g\\(h\\)i\\[j\\]k\\{l\\}m\\\\n');
    });

    it('should not modify non-special characters', () => {
      expect(escapeRegExp('hello world')).toBe('hello world');
      expect(escapeRegExp('abc123')).toBe('abc123');
    });

    it('should handle empty strings', () => {
      expect(escapeRegExp('')).toBe('');
    });
  });

  describe('splitTextBySearchTerm', () => {
    it('should split text by search term, case insensitive', () => {
      const result = splitTextBySearchTerm('Hello World', 'world');
      expect(result).toEqual(['Hello ', 'World', '']);
    });

    it('should handle multiple occurrences of search term', () => {
      const result = splitTextBySearchTerm('test test test', 'test');
      expect(result).toEqual(['', 'test', ' ', 'test', ' ', 'test', '']);
    });

    it('should handle search term not found', () => {
      const result = splitTextBySearchTerm('Hello World', 'xyz');
      expect(result).toEqual(['Hello World']);
    });

    it('should handle empty search term', () => {
      const result = splitTextBySearchTerm('Hello World', '');
      expect(result).toEqual(['Hello World']);
    });

    it('should handle special characters in search term', () => {
      const result = splitTextBySearchTerm('Hello (World)', '(world)');
      expect(result).toEqual(['Hello ', '(World)', '']);
    });
  });

  describe('getItemText', () => {
    it('should return label for simple item', () => {
      const item = { label: 'Test', value: 'test' };
      expect(getItemText(item)).toBe('Test');
    });

    it('should return label for group item', () => {
      const item = { label: 'Group', options: [] };
      expect(getItemText(item)).toBe('Group');
    });

    it('should use customOptionRenderer if provided', () => {
      const item = { label: 'Test', value: 'test' };
      const customRenderer = jest.fn().mockImplementation(() => ({ props: {}, type: 'div' } as MockReactElement));

      const result = getItemText(item, customRenderer);

      expect(customRenderer).toHaveBeenCalledWith(item);
      expect(getElementText).toHaveBeenCalled();
      expect(result).toBe('Custom Text');
    });
  });

  describe('matchesSearch', () => {
    it('should match case insensitive', () => {
      expect(matchesSearch('Test Text', 'test')).toBe(true);
      expect(matchesSearch('Test Text', 'TEXT')).toBe(true);
    });

    it('should match partial text', () => {
      expect(matchesSearch('Hello World', 'World')).toBe(true);
      expect(matchesSearch('Hello World', 'lo wo')).toBe(true);
    });

    it('should not match when text is not included', () => {
      expect(matchesSearch('Hello World', 'goodbye')).toBe(false);
    });
  });

  describe('hasExactMatch', () => {
    it('should return false if inputValue is empty', () => {
      const items = [{ label: 'Test', value: 'test' }];
      expect(hasExactMatch(items, '')).toBe(false);
    });

    it('should return true if there is an exact match in simple items', () => {
      const items = [
        { label: 'Test 1', value: 'test1' },
        { label: 'Test 2', value: 'test2' },
      ];
      expect(hasExactMatch(items, 'Test 2')).toBe(true);
    });

    it('should return false if there is no exact match', () => {
      const items = [
        { label: 'Test 1', value: 'test1' },
        { label: 'Test 2', value: 'test2' },
      ];
      expect(hasExactMatch(items, 'Test 3')).toBe(false);
    });

    it('should check items in groups', () => {
      const items = [
        {
          label: 'Group 1',
          options: [
            { label: 'Item 1.1', value: 'item1.1' },
            { label: 'Item 1.2', value: 'item1.2' },
          ],
        },
        { label: 'Item 2', value: 'item2' },
      ];
      expect(hasExactMatch(items, 'Item 1.2')).toBe(true);
      expect(hasExactMatch(items, 'Item 1.3')).toBe(false);
    });

    it('should use customOptionRenderer if provided', () => {
      const items = [{ label: 'Test', value: 'test' }];
      const customRenderer = jest.fn().mockImplementation(() => ({ props: {}, type: 'div' } as MockReactElement));

      const result = hasExactMatch(items, 'Custom Text', customRenderer);

      expect(customRenderer).toHaveBeenCalled();
      expect(result).toBe(true);
    });
  });

  describe('isValueAlreadySelected', () => {
    it('should return false if inputValue is empty', () => {
      const values = ['test1', 'test2'];
      expect(isValueAlreadySelected(values, '')).toBe(false);
    });

    it('should return true if value is already selected', () => {
      const values = ['test1', 'test2'];
      expect(isValueAlreadySelected(values, 'test1')).toBe(true);
      expect(isValueAlreadySelected(values, 'TEST2')).toBe(true);
    });

    it('should return false if value is not selected', () => {
      const values = ['test1', 'test2'];
      expect(isValueAlreadySelected(values, 'test3')).toBe(false);
    });
  });

  describe('filterItems', () => {
    it('should return all items if inputValue is empty', () => {
      const items = [
        { label: 'Test 1', value: 'test1' },
        { label: 'Test 2', value: 'test2' },
      ];
      expect(filterItems({
        allowCustomValue: false,
        hasExactMatch: false,
        inputValue: '',
        isValueAlreadySelected: false,
        items,
      })).toEqual(items);
    });

    it('should filter out non-matching items', () => {
      const items = [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Orange', value: 'orange' },
      ];
      const result = filterItems({
        allowCustomValue: false,
        hasExactMatch: false,
        inputValue: 'an',
        isValueAlreadySelected: false,
        items,
      });
      expect(result).toHaveLength(2);
      expect(result.map((item) => item.label).sort()).toEqual(['Banana', 'Orange']);
    });

    it('should handle groups correctly', () => {
      const items = [
        {
          label: 'Fruits',
          options: [
            { label: 'Apple', value: 'apple' },
            { label: 'Banana', value: 'banana' },
          ],
        },
        {
          label: 'Vegetables',
          options: [
            { label: 'Carrot', value: 'carrot' },
            { label: 'Broccoli', value: 'broccoli' },
          ],
        },
      ];

      const result = filterItems({
        allowCustomValue: false,
        hasExactMatch: false,
        inputValue: 'bro',
        isValueAlreadySelected: false,
        items,
      });
      expect(result).toHaveLength(1);
      expect(result[0].label).toBe('Vegetables');
      if ('options' in result[0]) {
        expect(result[0].options.length).toBe(1);
        expect(result[0].options[0].label).toBe('Broccoli');
      }

      const result2 = filterItems({
        allowCustomValue: false,
        hasExactMatch: false,
        inputValue: 'xyz',
        isValueAlreadySelected: false,
        items,
      });
      expect(result2).toHaveLength(0);
    });

    it('should add new element if allowed and no exact match', () => {
      const items = [
        { label: 'Test 1', value: 'test1' },
        { label: 'Test 2', value: 'test2' },
      ];
      const result = filterItems({
        allowCustomValue: true,
        hasExactMatch: false,
        inputValue: 'New Item',
        isValueAlreadySelected: false,
        items,
      });
      expect(result).toHaveLength(1);
      expect(result[0].label).toBe('New Item');
      if ('isNewElement' in result[0]) {
        expect(result[0].isNewElement).toBe(true);
      }
    });

    it('should not add new element if exact match exists', () => {
      const items = [
        { label: 'Test 1', value: 'test1' },
        { label: 'Test 2', value: 'test2' },
      ];
      const result = filterItems({
        allowCustomValue: true,
        hasExactMatch: true,
        inputValue: 'Test 1',
        isValueAlreadySelected: false,
        items,
      });
      expect(result).toHaveLength(1);
      expect(result[0].label).toBe('Test 1');
    });

    it('should not add new element if value already selected', () => {
      const items = [
        { label: 'Test 1', value: 'test1' },
        { label: 'Test 2', value: 'test2' },
      ];
      const result = filterItems({
        allowCustomValue: true,
        hasExactMatch: false,
        inputValue: 'New Item',
        isValueAlreadySelected: true,
        items,
      });
      expect(result).toHaveLength(0);
    });
  });

  describe('flattenItems', () => {
    it('should flatten simple items array', () => {
      const items = [
        { label: 'Test 1', value: 'test1' },
        { label: 'Test 2', value: 'test2' },
      ];
      const result = flattenItems(items);
      expect(result).toEqual(items);
    });

    it('should flatten grouped items', () => {
      const items = [
        {
          label: 'Group 1',
          options: [
            { label: 'Item 1.1', value: 'item1.1' },
            { label: 'Item 1.2', value: 'item1.2' },
          ],
        },
        { label: 'Item 2', value: 'item2' },
      ];

      const expectedResult = [
        { group: 'Group 1', label: 'Item 1.1', value: 'item1.1' },
        { group: 'Group 1', label: 'Item 1.2', value: 'item1.2' },
        { label: 'Item 2', value: 'item2' },
      ];

      expect(flattenItems(items)).toEqual(expectedResult);
    });
  });

  describe('findLabelForValue', () => {
    it('should find label for simple items', () => {
      const items = [
        { label: 'Test 1', value: 'test1' },
        { label: 'Test 2', value: 'test2' },
      ];
      expect(findLabelForValue(items, 'test2')).toBe('Test 2');
    });

    it('should find label for grouped items', () => {
      const items = [
        {
          label: 'Group 1',
          options: [
            { label: 'Item 1.1', value: 'item1.1' },
            { label: 'Item 1.2', value: 'item1.2' },
          ],
        },
        { label: 'Item 2', value: 'item2' },
      ];
      expect(findLabelForValue(items, 'item1.2')).toBe('Item 1.2');
    });

    it('should return value if label not found', () => {
      const items = [
        { label: 'Test 1', value: 'test1' },
        { label: 'Test 2', value: 'test2' },
      ];
      expect(findLabelForValue(items, 'test3')).toBe('test3');
    });

    it('should find labels for all items in the test story groups (reproducing the bug)', () => {
      const groupedItems = [
        {
          label: 'Fruits',
          options: [
            { label: 'Apple', value: 'apple' },
            { label: 'Banana', value: 'banana' },
          ],
        },
        {
          label: 'Vegetables',
          options: [
            { label: 'Carrot', value: 'carrot' },
            { label: 'Broccoli', value: 'broccoli' },
          ],
        },
      ];

      expect(findLabelForValue(groupedItems, 'apple')).toBe('Apple');
      expect(findLabelForValue(groupedItems, 'banana')).toBe('Banana');
      expect(findLabelForValue(groupedItems, 'carrot')).toBe('Carrot');
      expect(findLabelForValue(groupedItems, 'broccoli')).toBe('Broccoli');
    });
  });

  describe('getFilteredItems', () => {
    it('should return filtered items based on input value', () => {
      const items = [
        { label: 'Test 1', value: 'test1' },
        { label: 'Test 2', value: 'test2' },
        { label: 'Sample', value: 'sample' },
      ];
      const result = getFilteredItems({
        allowCustomValue: false,
        inputValue: 'test',
        items,
      });

      expect(result).toHaveLength(2);
      expect(result[0].label).toBe('Test 1');
      expect(result[1].label).toBe('Test 2');
    });

    it('should handle empty input', () => {
      const items = [
        { label: 'Test 1', value: 'test1' },
        { label: 'Test 2', value: 'test2' },
      ];
      const result = getFilteredItems({
        allowCustomValue: false,
        inputValue: '',
        items,
      });

      expect(result).toEqual(items);
    });

    it('should handle empty items array', () => {
      const result = getFilteredItems({
        allowCustomValue: false,
        inputValue: 'test',
        items: [],
      });

      expect(result).toEqual([]);
    });

    it('should add new element if allowed and no matches', () => {
      const items = [
        { label: 'Test 1', value: 'test1' },
        { label: 'Test 2', value: 'test2' },
      ];
      const result = getFilteredItems({
        allowCustomValue: true,
        inputValue: 'New',
        items,
      });

      expect(result).toHaveLength(1);
      if ('isNewElement' in result[0]) {
        expect(result[0].isNewElement).toBe(true);
      }
      expect(result[0].label).toBe('New');
    });
  });

  describe('isKeyboardEventAtInputStart', () => {
    it('should return true when key matches and cursor is at start', () => {
      const mockEvent = {
        key: 'Backspace',
      } as React.KeyboardEvent<HTMLInputElement>;

      const mockInputRef = {
        current: {
          selectionEnd: 0,
          selectionStart: 0,
        },
      } as React.RefObject<HTMLInputElement>;

      expect(isKeyboardEventAtInputStart(mockEvent, mockInputRef, 'Backspace')).toBe(true);
    });

    it('should return false when key does not match', () => {
      const mockEvent = {
        key: 'Enter',
      } as React.KeyboardEvent<HTMLInputElement>;

      const mockInputRef = {
        current: {
          selectionEnd: 0,
          selectionStart: 0,
        },
      } as React.RefObject<HTMLInputElement>;

      expect(isKeyboardEventAtInputStart(mockEvent, mockInputRef, 'Backspace')).toBe(false);
    });

    it('should return false when cursor is not at start', () => {
      const mockEvent = {
        key: 'Backspace',
      } as React.KeyboardEvent<HTMLInputElement>;

      const mockInputRef = {
        current: {
          selectionEnd: 5,
          selectionStart: 5,
        },
      } as React.RefObject<HTMLInputElement>;

      expect(isKeyboardEventAtInputStart(mockEvent, mockInputRef, 'Backspace')).toBe(false);
    });

    it('should return false when input ref is null', () => {
      const mockEvent = {
        key: 'Backspace',
      } as React.KeyboardEvent<HTMLInputElement>;

      const mockInputRef = {
        current: null,
      } as React.RefObject<HTMLInputElement>;

      expect(isKeyboardEventAtInputStart(mockEvent, mockInputRef, 'Backspace')).toBe(false);
    });

    it('should return false when selection start and end are different', () => {
      const mockEvent = {
        key: 'Backspace',
      } as React.KeyboardEvent<HTMLInputElement>;

      const mockInputRef = {
        current: {
          selectionEnd: 0,
          selectionStart: 5,
        },
      } as React.RefObject<HTMLInputElement>;

      expect(isKeyboardEventAtInputStart(mockEvent, mockInputRef, 'Backspace')).toBe(false);
    });
  });

  describe('calculateNewFocusIndex', () => {
    it('should return previous index when removing item not at beginning', () => {
      expect(calculateNewFocusIndex(2, 5)).toBe(1);
      expect(calculateNewFocusIndex(3, 6)).toBe(2);
    });

    it('should return 0 when removing first item and array has remaining items', () => {
      expect(calculateNewFocusIndex(0, 3)).toBe(0);
      expect(calculateNewFocusIndex(0, 5)).toBe(0);
    });

    it('should return null when removing last remaining item', () => {
      expect(calculateNewFocusIndex(0, 1)).toBe(null);
    });

    it('should handle edge case when removing second to last item', () => {
      expect(calculateNewFocusIndex(1, 2)).toBe(0);
    });

    it('should return null when array becomes empty', () => {
      expect(calculateNewFocusIndex(0, 1)).toBe(null);
    });
  });

  describe('shouldResetTagFocus', () => {
    it('should return false for Backspace key', () => {
      expect(shouldResetTagFocus('Backspace')).toBe(false);
    });

    it('should return false for ArrowLeft key', () => {
      expect(shouldResetTagFocus('ArrowLeft')).toBe(false);
    });

    it('should return true for other keys', () => {
      expect(shouldResetTagFocus('Enter')).toBe(true);
      expect(shouldResetTagFocus('Escape')).toBe(true);
      expect(shouldResetTagFocus('Tab')).toBe(true);
      expect(shouldResetTagFocus('ArrowRight')).toBe(true);
      expect(shouldResetTagFocus('ArrowUp')).toBe(true);
      expect(shouldResetTagFocus('ArrowDown')).toBe(true);
      expect(shouldResetTagFocus('a')).toBe(true);
      expect(shouldResetTagFocus('1')).toBe(true);
    });
  });

  describe('removeValueFromArray', () => {
    it('should remove the specified value from array', () => {
      const values = ['test1', 'test2', 'test3'];
      expect(removeValueFromArray(values, 'test2')).toEqual(['test1', 'test3']);
    });

    it('should return empty array when removing last item', () => {
      const values = ['test1'];
      expect(removeValueFromArray(values, 'test1')).toEqual([]);
    });

    it('should return original array when value not found', () => {
      const values = ['test1', 'test2', 'test3'];
      expect(removeValueFromArray(values, 'test4')).toEqual(['test1', 'test2', 'test3']);
    });

    it('should handle empty array', () => {
      expect(removeValueFromArray([], 'test1')).toEqual([]);
    });

    it('should remove all occurrences of the same value', () => {
      const values = ['test1', 'test2', 'test1', 'test3'];
      expect(removeValueFromArray(values, 'test1')).toEqual(['test2', 'test3']);
    });

    it('should handle array with duplicate values', () => {
      const values = ['test1', 'test1', 'test1'];
      expect(removeValueFromArray(values, 'test1')).toEqual([]);
    });
  });
});
