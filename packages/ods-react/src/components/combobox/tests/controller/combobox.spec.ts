import { type ReactElement, createElement } from 'react';
import { type ComboboxCustomOptionRendererArg, type ComboboxGroupItem, type ComboboxItem, type ComboboxOptionItem } from '../../src/context/useCombobox';
import { doesOptionMatch, flattenGroupWithDisabled, flattenItemsWithDisabled, getFlatItemsWithDisabled, highlightInElement, isGroup, shouldAddNewElement, shouldOptionBeDisabled } from '../../src/controller/combobox';

describe('Combobox controller', () => {
  describe('isGroup', () => {
    it('should return true for group items', () => {
      const groupItem: ComboboxItem = {
        label: 'Group 1',
        options: [
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
        ],
      };
      expect(isGroup(groupItem)).toBe(true);
    });

    it('should return false for option items', () => {
      const optionItem: ComboboxItem = {
        label: 'Option 1',
        value: '1',
      };
      expect(isGroup(optionItem)).toBe(false);
    });
  });

  describe('doesOptionMatch', () => {
    const option: ComboboxOptionItem = {
      label: 'Test Option',
      value: 'test',
    };

    it('should match when input is part of the label', () => {
      expect(doesOptionMatch(option, 'test')).toBe(true);
      expect(doesOptionMatch(option, 'Test')).toBe(true);
      expect(doesOptionMatch(option, 'option')).toBe(true);
    });

    it('should not match when input is not part of the label', () => {
      expect(doesOptionMatch(option, 'xyz')).toBe(false);
    });

    it('should handle custom renderer', () => {
      const customOption: ComboboxOptionItem = {
        customRendererData: { info: 'Custom Info' },
        label: 'Test Option',
        value: 'test',
      };

      const customRenderer = (arg: ComboboxCustomOptionRendererArg): ReactElement => {
        return createElement('div', null, `${arg.label} - ${arg.customData?.info || ''}`);
      };

      expect(doesOptionMatch(customOption, 'test', customRenderer)).toBe(true);
      expect(doesOptionMatch(customOption, 'custom', customRenderer)).toBe(true);
      expect(doesOptionMatch(customOption, 'xyz', customRenderer)).toBe(false);
    });
  });

  describe('shouldAddNewElement', () => {
    const flatItems: (ComboboxOptionItem & { group?: string })[] = [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ];

    it('should return true when conditions are met', () => {
      expect(shouldAddNewElement(true, 'New Option', flatItems, [])).toBe(true);
    });

    it('should return false when allowNewElement is false', () => {
      expect(shouldAddNewElement(false, 'New Option', flatItems, [])).toBe(false);
    });

    it('should return false when input is empty', () => {
      expect(shouldAddNewElement(true, '', flatItems, [])).toBe(false);
      expect(shouldAddNewElement(true, '   ', flatItems, [])).toBe(false);
    });

    it('should return false when input matches existing option', () => {
      expect(shouldAddNewElement(true, 'Option 1', flatItems, [])).toBe(false);
    });

    it('should return false when input matches selected value', () => {
      expect(shouldAddNewElement(true, 'Selected Option', flatItems, ['Selected Option'])).toBe(false);
    });
  });

  describe('getFlatItemsWithDisabled', () => {
    const items: ComboboxItem[] = [
      {
        label: 'Group 1',
        options: [
          { label: 'Option 1', value: '1' },
          { disabled: true, label: 'Option 2', value: '2' },
        ],
      },
      { label: 'Option 3', value: '3' },
    ];

    it('should flatten items and handle disabled state', () => {
      const result = getFlatItemsWithDisabled(items, '', {
        allowNewElement: false,
        selectedValues: [],
      });

      expect(result).toHaveLength(3);
      expect(result[0].label).toBe('Option 1');
      expect(result[1].label).toBe('Option 2');
      expect(result[1].disabled).toBe(true);
      expect(result[2].label).toBe('Option 3');
    });

    it('should filter items based on input value', () => {
      const result = getFlatItemsWithDisabled(items, 'Option 1', {
        allowNewElement: false,
        selectedValues: [],
      });

      expect(result).toHaveLength(3);
      expect(result[0].label).toBe('Option 1');
      expect(result[0].disabled).toBe(false);
      expect(result[1].label).toBe('Option 2');
      expect(result[1].disabled).toBe(true);
      expect(result[2].label).toBe('Option 3');
      expect(result[2].disabled).toBe(true);
    });

    it('should add new element when conditions are met', () => {
      const result = getFlatItemsWithDisabled(items, 'New Option', {
        allowNewElement: true,
        selectedValues: [],
      });

      expect(result).toHaveLength(2);
      expect(result[0].label).toBe('New Option');
      expect(result[0].isNew).toBe(true);
      expect(result[0].disabled).toBe(false);
      expect(result[1].label).toBe('Option 3');
      expect(result[1].disabled).toBe(true);
    });
  });

  describe('shouldOptionBeDisabled', () => {
    const option: ComboboxOptionItem = {
      label: 'Test Option',
      value: 'test',
    };

    it('should return true when option does not match input', () => {
      expect(shouldOptionBeDisabled(option, 'xyz')).toBe(true);
    });

    it('should return true when option is explicitly disabled', () => {
      const disabledOption = { ...option, disabled: true };
      expect(shouldOptionBeDisabled(disabledOption, 'test')).toBe(true);
    });

    it('should return false when option matches input and is not disabled', () => {
      expect(shouldOptionBeDisabled(option, 'test')).toBe(false);
    });

    it('should handle custom renderer', () => {
      const customOption: ComboboxOptionItem = {
        customRendererData: { info: 'Custom Info' },
        label: 'Test Option',
        value: 'test',
      };

      const customRenderer = (arg: ComboboxCustomOptionRendererArg): ReactElement => {
        return createElement('div', null, `${arg.label} - ${arg.customData?.info || ''}`);
      };

      expect(shouldOptionBeDisabled(customOption, 'test', customRenderer)).toBe(false);
      expect(shouldOptionBeDisabled(customOption, 'xyz', customRenderer)).toBe(true);
    });
  });

  describe('flattenGroupWithDisabled', () => {
    const group: ComboboxGroupItem = {
      label: 'Group 1',
      options: [
        { label: 'Option 1', value: '1' },
        { disabled: true, label: 'Option 2', value: '2' },
      ],
    };

    it('should return all options when group has valid options', () => {
      const result = flattenGroupWithDisabled(group, '');
      expect(result).toHaveLength(2);
      expect(result[0].disabled).toBe(false);
      expect(result[1].disabled).toBe(true);
      expect(result[0].group).toBe('Group 1');
      expect(result[1].group).toBe('Group 1');
    });

    it('should return empty array when all options are disabled', () => {
      const allDisabledGroup = {
        ...group,
        options: group.options.map((opt) => ({ ...opt, disabled: true })),
      };
      const result = flattenGroupWithDisabled(allDisabledGroup, '');
      expect(result).toHaveLength(0);
    });

    it('should handle input value filtering', () => {
      const result = flattenGroupWithDisabled(group, 'Option 1');
      expect(result).toHaveLength(2);
      expect(result[0].disabled).toBe(false);
      expect(result[1].disabled).toBe(true);
    });
  });

  describe('flattenItemsWithDisabled', () => {
    const items: ComboboxItem[] = [
      {
        label: 'Group 1',
        options: [
          { label: 'Option 1', value: '1' },
          { disabled: true, label: 'Option 2', value: '2' },
        ],
      },
      { label: 'Option 3', value: '3' },
    ];

    it('should flatten items and handle disabled state', () => {
      const result = flattenItemsWithDisabled(items, '');
      expect(result).toHaveLength(3);
      expect(result[0].label).toBe('Option 1');
      expect(result[1].label).toBe('Option 2');
      expect(result[1].disabled).toBe(true);
      expect(result[2].label).toBe('Option 3');
    });

    it('should handle input value filtering', () => {
      const result = flattenItemsWithDisabled(items, 'Option 1');
      expect(result).toHaveLength(3);
      expect(result[0].label).toBe('Option 1');
      expect(result[0].disabled).toBe(false);
      expect(result[1].label).toBe('Option 2');
      expect(result[1].disabled).toBe(true);
      expect(result[2].label).toBe('Option 3');
      expect(result[2].disabled).toBe(true);
    });

    it('should handle empty items array', () => {
      const result = flattenItemsWithDisabled([], '');
      expect(result).toHaveLength(0);
    });
  });

  describe('highlightInElement', () => {
    it('should highlight matching text in element', () => {
      const element = createElement('div', null, 'Test Option');
      const result = highlightInElement(element, 'test') as ReactElement;
      const children = result.props.children;
      expect(Array.isArray(children)).toBe(true);
      expect(children).toHaveLength(3);
      expect(children[0]).toBe('');
      expect(children[1].props.children).toBe('Test');
      expect(children[2]).toBe(' Option');
    });

    it('should handle case insensitive matching', () => {
      const element = createElement('div', null, 'Test Option');
      const result = highlightInElement(element, 'TEST') as ReactElement;
      const children = result.props.children;
      expect(Array.isArray(children)).toBe(true);
      expect(children[1].props.children).toBe('Test');
    });

    it('should handle no match', () => {
      const element = createElement('div', null, 'Test Option');
      const result = highlightInElement(element, 'xyz') as ReactElement;
      expect(result.props.children).toStrictEqual(['Test Option']);
    });

    it('should handle empty input', () => {
      const element = createElement('div', null, 'Test Option');
      const result = highlightInElement(element, '') as ReactElement;
      expect(result.props.children).toBe('Test Option');
    });
  });
});
