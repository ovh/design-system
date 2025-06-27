import { type JSX, type KeyboardEvent, type RefObject } from 'react';
import { getElementText } from '../../../../utils/element';
import { type ComboboxItem, type ComboboxOptionItem } from '../contexts/useCombobox';

interface ComboboxProps {
  allowCustomValue?: boolean;
  customOptionRenderer?: (item: ComboboxItem) => JSX.Element;
  inputValue: string;
  items: ComboboxItem[];
  multiple?: boolean;
  newElementLabel?: string;
  value?: string[];
}

interface FilterItemsProps extends ComboboxProps {
  hasExactMatch: boolean;
  isValueAlreadySelected: boolean;
}

function calculateNewFocusIndex(
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
}: FilterItemsProps): ComboboxItem[] {
  if (!inputValue && !value?.length) {
    return items;
  }

  const filtered = items.reduce<ComboboxItem[]>((acc, item) => {
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

function findLabelForValue(items: ComboboxItem[] = [], value: string): string {
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

function flattenItems(items: ComboboxItem[] = [], groupLabel?: string): ComboboxOptionItem[] {
  const result: ComboboxOptionItem[] = [];
  for (const item of items) {
    if ('options' in item) {
      result.push(...flattenItems(item.options, item.label));
    } else {
      result.push(groupLabel ? { ...item, group: groupLabel } : item);
    }
  }
  return result;
}

function getFilteredItems({
  allowCustomValue,
  customOptionRenderer,
  inputValue,
  items,
  multiple,
  value = [],
}: ComboboxProps): ComboboxItem[] {
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

function getItemText(
  item: ComboboxItem,
  customOptionRenderer?: (item: ComboboxItem) => JSX.Element,
): string {
  if ('options' in item) {
    return item.label;
  }
  return customOptionRenderer ? getElementText(customOptionRenderer(item)) : item.label;
}

function hasExactMatch(
  items: ComboboxItem[],
  inputValue: string,
  customOptionRenderer?: (item: ComboboxItem) => JSX.Element,
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

function isKeyboardEventAtInputStart(
  e: KeyboardEvent<HTMLInputElement>,
  inputRef: RefObject<HTMLInputElement>,
  key: string,
): boolean {
  return e.key === key &&
    inputRef.current !== null &&
    inputRef.current.selectionStart === 0 &&
    inputRef.current.selectionEnd === 0;
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

function removeValueFromArray(values: string[], valueToRemove: string): string[] {
  return values.filter((val) => val !== valueToRemove);
}

function shouldResetTagFocus(key: string): boolean {
  return key !== 'Backspace' && key !== 'ArrowLeft';
}

function splitTextBySearchTerm(text: string, searchTerm: string): string[] {
  if (!text || !searchTerm) {
    return [text];
  }

  const escapedValue = searchTerm.toLowerCase().replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  const regex = new RegExp(`(${escapedValue})`, 'gi');
  return text.split(regex);
}

export {
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
};
