import { getElementText } from '../../../../utils/element';
import { type ComboboxItem, type ComboboxItemOrGroup } from '../contexts/useCombobox';

interface ComboboxProps {
  allowCustomValue?: boolean;
  customOptionRenderer?: (item: ComboboxItemOrGroup) => JSX.Element;
  inputValue: string;
  items: ComboboxItemOrGroup[];
  multiple?: boolean;
  newElementLabel?: string;
  value?: string[];
}

interface FilterItemsProps extends ComboboxProps {
  hasExactMatch: boolean;
  isValueAlreadySelected: boolean;
}

function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function filterItems({
  items,
  inputValue,
  allowCustomValue,
  hasExactMatch,
  isValueAlreadySelected,
  customOptionRenderer,
  value,
  multiple,
}: FilterItemsProps): ComboboxItemOrGroup[] {
  if (!inputValue && !value?.length) {
    return items;
  }

  const filtered = items.reduce<ComboboxItemOrGroup[]>((acc, item) => {
    if ('options' in item) {
      const filteredOptions = item.options.filter((option) => {
        if ('options' in option) {
          return true;
        }

        if (value?.includes(option.value) && (multiple || inputValue)) {
          return false;
        }

        return !inputValue || matchesSearch(getItemText(option, customOptionRenderer), inputValue);
      });

      if (filteredOptions.length > 0) {
        acc.push({
          ...item,
          options: filteredOptions,
        });
      }
    } else if (!value?.includes(item.value) || (!multiple && !inputValue)) {
      if (!inputValue || matchesSearch(getItemText(item, customOptionRenderer), inputValue)) {
        acc.push(item);
      }
    }
    return acc;
  }, []);

  if (allowCustomValue && inputValue && !hasExactMatch && !isValueAlreadySelected) {
    return [{
      disabled: false,
      isNewElement: true,
      label: inputValue,
      value: inputValue,
    }, ...filtered];
  }

  return filtered;
}

function getItemText(
  item: ComboboxItemOrGroup,
  customOptionRenderer?: (item: ComboboxItemOrGroup) => JSX.Element,
): string {
  if ('options' in item) {
    return item.label;
  }
  return customOptionRenderer ? getElementText(customOptionRenderer(item)) : item.label;
}

function hasExactMatch(
  items: ComboboxItemOrGroup[],
  inputValue: string,
  customOptionRenderer?: (item: ComboboxItemOrGroup) => JSX.Element,
): boolean {
  if (!inputValue) {
    return false;
  }
  return items.some((item) => {
    if ('options' in item) {
      return item.options.some((option) =>
        getItemText(option, customOptionRenderer).toLowerCase() === inputValue.toLowerCase(),
      );
    }
    return getItemText(item, customOptionRenderer).toLowerCase() === inputValue.toLowerCase();
  });
}

function isValueAlreadySelected(value: string[], inputValue: string): boolean {
  if (!inputValue) {
    return false;
  }
  return value.some((selectedValue) =>
    selectedValue.toLowerCase() === inputValue.toLowerCase(),
  );
}

function matchesSearch(text: string, inputValue: string): boolean {
  return text.toLowerCase().includes(inputValue.toLowerCase());
}

export function splitTextBySearchTerm(text: string, searchTerm: string): string[] {
  if (!text || !searchTerm) {
    return [text];
  }

  const escapedValue = searchTerm.toLowerCase().replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  const regex = new RegExp(`(${escapedValue})`, 'gi');
  return text.split(regex);
}

export function findLabelForValue(items: ComboboxItemOrGroup[] = [], value: string): string {
  for (const item of items) {
    if ('options' in item) {
      const foundInGroup = findLabelForValue(item.options, value);
      if (foundInGroup !== value) {
        return foundInGroup;
      }
    } else if (item.value === value) {
      return String(item.label);
    }
  }
  return value;
}

export function flattenItems(items: ComboboxItemOrGroup[] = [], groupLabel?: string): ComboboxItem[] {
  const result: ComboboxItem[] = [];
  for (const item of items) {
    if ('options' in item) {
      result.push(...flattenItems(item.options, item.label));
    } else {
      result.push(groupLabel ? { ...item, group: groupLabel } : item);
    }
  }
  return result;
}

export function getFilteredItems({
  allowCustomValue,
  customOptionRenderer,
  inputValue,
  items,
  multiple,
  value = [],
}: ComboboxProps): ComboboxItemOrGroup[] {
  const exactMatch = hasExactMatch(items, inputValue, customOptionRenderer);
  const valueSelected = isValueAlreadySelected(value, inputValue);
  return filterItems({
    allowCustomValue,
    customOptionRenderer,
    hasExactMatch: exactMatch,
    inputValue,
    isValueAlreadySelected: valueSelected,
    items,
    multiple,
    value,
  });
}

export function isKeyboardEventAtInputStart(
  e: React.KeyboardEvent<HTMLInputElement>,
  inputRef: React.RefObject<HTMLInputElement>,
  key: string,
): boolean {
  return e.key === key &&
    inputRef.current !== null &&
    inputRef.current.selectionStart === 0 &&
    inputRef.current.selectionEnd === 0;
}

export function calculateNewFocusIndex(
  indexToRemove: number,
  totalLength: number,
): number | null {
  const newLength = totalLength - 1;

  if (indexToRemove > 0 && newLength > 0) {
    return indexToRemove - 1;
  } else if (newLength > 0) {
    return 0;
  }

  return null;
}

export function shouldResetTagFocus(key: string): boolean {
  return key !== 'Backspace' && key !== 'ArrowLeft';
}

export function removeValueFromArray(values: string[], valueToRemove: string): string[] {
  return values.filter((val) => val !== valueToRemove);
}

export {
  escapeRegExp,
  filterItems,
  getItemText,
  hasExactMatch,
  isValueAlreadySelected,
  matchesSearch,
};
