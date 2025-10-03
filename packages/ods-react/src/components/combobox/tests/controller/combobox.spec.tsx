import { renderToString } from 'react-dom/server';
import { type ComboboxItem } from '../../src';
import { filterItems, findItemByValue, getDefaultInputValue, getDefaultSelection, highlightNode, isAtInputStart, isGroup } from '../../src/controller/combobox';

describe('Combobox controller', () => {
  const dummyItems: ComboboxItem[] = [
    { label: 'item 1', value: 'item-1' },
    {
      label: 'group1',
      options: [
        { label: 'child 1', value: 'child-1' },
        { label: 'child 2', value: 'child-2' },
      ],
    },
    { label: 'item 2', value: 'item-2' },
    { label: 'item 3', value: 'item-3' },
  ];

  beforeEach(jest.clearAllMocks);

  describe('filterItems', () => {
    const filterFnMock = jest.fn();

    describe('add new element', () => {
      it('should not return the add new element if allowCustomValue is false', () => {
        expect(filterItems(dummyItems, [], 'dummy', {
          allowCustomValue: false,
          filterFn: filterFnMock,
        })).toEqual([]);
      });

      it('should not return the add new element if input value is empty', () => {
        expect(filterItems(dummyItems, [], '', {
          allowCustomValue: true,
          filterFn: filterFnMock,
        })).toEqual([]);
      });

      it('should not return the add new element if the item already exists', () => {
        expect(filterItems(dummyItems, [{ label: 'item 1', value: 'item-1' }], '', {
          allowCustomValue: true,
          filterFn: filterFnMock,
        })).toEqual([]);
      });

      it('should return the add new element if the item does not already exists', () => {
        const dummyInputValue = 'dummy input value';
        const dummyNewElementLabel = 'New dummy: ';

        expect(filterItems(dummyItems, [], dummyInputValue, {
          allowCustomValue: true,
          filterFn: filterFnMock,
          newElementLabel: dummyNewElementLabel,
        })).toEqual([{
          isNewElement: true,
          label: `${dummyNewElementLabel}${dummyInputValue}`,
          value: dummyInputValue,
        }]);
      });
    });

    it('should return the matching elements', () => {
      filterFnMock.mockImplementation((itemLabel: string) =>
        ['item 1', 'child 2', 'item 3'].indexOf(itemLabel) >= 0,
      );

      expect(filterItems(dummyItems, [], 'dummy', {
        allowCustomValue: false,
        filterFn: filterFnMock,
      })).toEqual([
        { label: 'item 1', value: 'item-1' },
        {
          label: 'group1',
          options: [
            { label: 'child 2', value: 'child-2' },
          ],
        },
        { label: 'item 3', value: 'item-3' },
      ]);
    });
  });

  describe('findItemByValue', () => {
    it('should return undefined if no items are found', () => {
      expect(findItemByValue([], 'dummy')).toBe(undefined);
      expect(findItemByValue(dummyItems, 'dummy')).toBe(undefined);
    });

    it('should return the item matching the value', () => {
      expect(findItemByValue(dummyItems, 'item-2')).toEqual({ label: 'item 2', value: 'item-2' });
      expect(findItemByValue(dummyItems, 'child-1')).toEqual({ label: 'child 1', value: 'child-1' });
    });
  });

  describe('getDefaultInputValue', () => {
    it('should return empty string if multiple or no default value', () => {
      expect(getDefaultInputValue(dummyItems, true)).toBe('');
      expect(getDefaultInputValue(dummyItems, false, [])).toBe('');
    });

    it('should return the label of the item matching default value', () => {
      expect(getDefaultInputValue(dummyItems, false, ['item-1'])).toBe('item 1');
      expect(getDefaultInputValue(dummyItems, false, ['child-2'])).toBe('child 2');
    });
  });

  describe('getDefaultSelection', () => {
    it('should return empty array if no default value', () => {
      expect(getDefaultSelection(dummyItems)).toEqual([]);
      expect(getDefaultSelection(dummyItems, [])).toEqual([]);
    });

    it('should return the items matching the default values', () => {
      expect(getDefaultSelection(dummyItems, ['item-1'])).toEqual([{ label: 'item 1', value: 'item-1' }]);
      expect(getDefaultSelection(dummyItems, ['item-1', 'item-3'])).toEqual([{ label: 'item 1', value: 'item-1' }, { label: 'item 3', value: 'item-3' }]);
      expect(getDefaultSelection(dummyItems, ['child-2'])).toEqual([{ label: 'child 2', value: 'child-2' }]);
      expect(getDefaultSelection(dummyItems, ['child-2', 'item-2'])).toEqual([{ label: 'child 2', value: 'child-2' }, { label: 'item 2', value: 'item-2' }]);
    });
  });

  describe('highlightNode', () => {
    it('should only the string if no match', () => {
      expect(highlightNode('abcdef', 'wxy', ({ part }) => <mark>{ part }</mark>))
        .toEqual(['abcdef']);
    });

    it('should return all the highlighted elements given a string', () => {
      expect(highlightNode('abcdef', 'bc', ({ part }) => <mark>{ part }</mark>))
        .toEqual(['a', <mark>bc</mark>, 'def']); // eslint-disable-line react/jsx-key
    });

    it('should the same node if no match', () => {
      expect(renderToString(highlightNode(<div><span>I am</span><b>bold</b></div>, 'wxy', ({ part }) => <mark>{ part }</mark>)))
        .toBe('<div><span>I am</span><b>bold</b></div>');
    });

    it('should return the highlighted node given a node', () => {
      expect(renderToString(highlightNode(<div><span>I am</span><b>bold</b></div>, 'bo', ({ part }) => <mark>{ part }</mark>)))
        .toBe('<div><span>I am</span><b><mark>bo</mark>ld</b></div>');
    });
  });

  describe('isAtInputStart', () => {
    it('should return false if input is null', () => {
      expect(isAtInputStart(null)).toBe(false);
    });

    it('should return false if input selections are not at 0', () => {
      expect(isAtInputStart({ selectionEnd: 0, selectionStart: 1 } as HTMLInputElement)).toBe(false);
      expect(isAtInputStart({ selectionEnd: 1, selectionStart: 0 } as HTMLInputElement)).toBe(false);
    });

    it('should return true if input selections are at 0', () => {
      expect(isAtInputStart({ selectionEnd: 0, selectionStart: 0 } as HTMLInputElement)).toBe(true);
    });
  });

  describe('isGroup', () => {
    it('should return false if item is not a group', () => {
      expect(isGroup({ label: 'Option 1', value: 'option-1' })).toBe(false);
    });

    it('should return true if item is a group', () => {
      expect(isGroup({ label: 'Group 1', options: [] })).toBe(true);
    });
  });
});
