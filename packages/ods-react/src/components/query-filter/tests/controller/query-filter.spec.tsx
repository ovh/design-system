import { type QueryFilterItem, type QueryFilterOption } from '../../src';
import { extractCustomLabel, findItemByValue, generateTagId, getDefaultTags, getMergedLabel, getStepGroup } from '../../src/controller/query-filter';

describe('QueryFilter controller', () => {
  const dummyItems: QueryFilterItem[] = [
    { label: 'item 1', value: 'item-1' },
    { label: 'item 2', value: 'item-2' },
    { label: 'item 3', value: 'item-3' },
  ];

  beforeEach(jest.clearAllMocks);

  describe('extractCustomLabel', () => {
    it('should return item label if no selection', () => {
      expect(extractCustomLabel(dummyItems[0], [])).toBe(dummyItems[0].label);
    });

    it('should return item label if it does not match selection', () => {
      expect(extractCustomLabel(dummyItems[0], [{ label: 'random', value: 'random' }])).toBe(dummyItems[0].label);
    });

    it('should return item label minus selection label', () => {
      expect(extractCustomLabel(
        { label: 'My prop equals dummy value', value: 'value' },
        [
          { label: 'My prop', value: 'prop' },
          { label: 'My prop equals', value: 'eq' },
        ]),
      ).toBe('dummy value');
    });
  });

  describe('findItemByValue', () => {
    it('should return undefined if no items are found', () => {
      expect(findItemByValue([], 'dummy')).toBe(undefined);
      expect(findItemByValue(dummyItems, 'dummy')).toBe(undefined);
    });

    it('should return the item matching the value', () => {
      expect(findItemByValue(dummyItems, 'item-2')).toEqual({ label: 'item 2', value: 'item-2' });
    });
  });

  describe('generateTagId', () => {
    it('should return empty string if no selection', () => {
      expect(generateTagId([])).toBe('');
    });

    it('should return the computed tag id', () => {
      expect(generateTagId(dummyItems)).toBe('item-1-item-2-item-3');
    });
  });

  describe('getDefaultTags', () => {
    const dummyFilterProperty = {
      label: 'Dummy property',
      options: dummyItems,
    };
    const dummyFilterOption: QueryFilterOption = {};
    dummyFilterOption[dummyItems[0].value] = {
      operator: {
        label: 'Dummy operators',
        options: [{ label: 'plus', value: '+' }, { label: 'equal', value: '=' }],
      },
      value: {
        label: 'Dummy values',
        options: [{ label: 'One', value: '1' }, { label: 'Two', value: '2' }],
      },
    };

    it('should return empty array if no default value', () => {
      expect(getDefaultTags(dummyFilterProperty, dummyFilterOption)).toEqual([]);
    });

    it('should return the default tags', () => {
      const defaultValue = [['item-1', '+', '1']];

      expect(getDefaultTags(dummyFilterProperty, dummyFilterOption, defaultValue)).toEqual([{
        filters: [
          { label: 'item 1', value: 'item-1' },
          { label: 'plus', value: '+' },
          { label: 'One', value: '1' },
        ],
        id: 'item-1-+-1',
        label: 'item 1 plus One',
      }]);
    });
  });

  describe('getMergedLabel', () => {
    it('should return empty string if no selection and no label', () => {
      expect(getMergedLabel([])).toBe('');
    });

    it('should return label if no selection', () => {
      expect(getMergedLabel([], 'dummy')).toBe('dummy');
    });

    it('should return last selection label if no label', () => {
      expect(getMergedLabel(dummyItems)).toBe('item 3');
    });

    it('should return merged label', () => {
      expect(getMergedLabel(dummyItems, 'dummy')).toBe('item 3 dummy');
    });
  });

  describe('getStepGroup', () => {
    const dummyFilterProperty = {
      label: 'Dummy property',
      options: dummyItems,
    };
    const dummyFilterOption: QueryFilterOption = {};
    dummyFilterOption[dummyItems[0].value] = {
      operator: {
        label: 'Dummy operators',
        options: [{ label: 'plus', value: '+' }, { label: 'equal', value: '=' }],
      },
      value: {
        label: 'Dummy values',
        options: [{ label: 'One', value: '1' }, { label: 'Two', value: '2' }],
      },
    };

    it('should return undefined if no selection is larger than expected', () => {
      expect(getStepGroup(dummyItems.concat(dummyItems), dummyFilterProperty, dummyFilterOption)).toBe(undefined);
    });

    it('should return property if selection if empty', () => {
      expect(getStepGroup([], dummyFilterProperty, dummyFilterOption)).toBe(dummyFilterProperty);
    });

    it('should return operator if selection has one element', () => {
      expect(getStepGroup([dummyItems[0]], dummyFilterProperty, dummyFilterOption)).toBe(dummyFilterOption[dummyItems[0].value].operator);
    });

    it('should return property if selection has two elements', () => {
      expect(getStepGroup([dummyItems[0], dummyItems[1]], dummyFilterProperty, dummyFilterOption)).toBe(dummyFilterOption[dummyItems[0].value].value);
    });
  });
});
