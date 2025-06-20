import { getElementText } from '../../../../utils/element';
import { type ComboboxItem, type ComboboxItemOrGroup } from '../contexts/useCombobox';

interface ComboboxProps {
  allowCustomValue?: boolean;
  customOptionRenderer?: (item: ComboboxItemOrGroup) => JSX.Element;
  inputValue: string;
  items: ComboboxItemOrGroup[];
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

        if (value?.includes(option.value)) {
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
    } else if (!value?.includes(item.value) &&
              (!inputValue || matchesSearch(getItemText(item, customOptionRenderer), inputValue))) {
      acc.push(item);
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
  return text.split(regex).filter(Boolean);
}

export function findLabelForValue(items: ComboboxItemOrGroup[] = [], value: string): string {
  for (const item of items) {
    if ('options' in item) {
      const foundInGroup = findLabelForValue(item.options, value);
      if (foundInGroup) {
        return foundInGroup;
      }
    } else if (item.value === value) {
      return String(item.label);
    }
  }
  return value;
}

export function flattenItems(items: ComboboxItemOrGroup[] = []): ComboboxItem[] {
  const result: ComboboxItem[] = [];
  for (const item of items) {
    if ('options' in item) {
      result.push(...flattenItems(item.options));
    } else {
      result.push(item);
    }
  }
  return result;
}

export function getFilteredItems({
  allowCustomValue = false,
  customOptionRenderer,
  inputValue,
  items,
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
    value,
  });
}

export {
  escapeRegExp,
  filterItems,
  getItemText,
  hasExactMatch,
  isValueAlreadySelected,
  matchesSearch,
};
