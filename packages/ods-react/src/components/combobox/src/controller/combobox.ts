import { getElementText } from '../../../../utils/element';
import { type ComboboxItemOrGroup } from '../contexts/useCombobox';

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
}: FilterItemsProps): ComboboxItemOrGroup[] {
  if (!inputValue) {
    return items;
  }

  const filtered = items.flatMap((item): ComboboxItemOrGroup[] => {
    if ('options' in item) {
      const filteredOptions = item.options.filter((option) =>
        matchesSearch(getItemText(option, customOptionRenderer), inputValue),
      );
      return filteredOptions.length ? [{ ...item, options: filteredOptions }] : [];
    }
    return matchesSearch(getItemText(item, customOptionRenderer), inputValue) ? [item] : [];
  });

  if (allowCustomValue && !hasExactMatch && !isValueAlreadySelected) {
    return [{
      disabled: false,
      isNewElement: true,
      label: inputValue,
      value: inputValue,
    }, ...filtered];
  }

  return filtered;
}

function findLabelForValue(items: ComboboxItemOrGroup[], value: string): string {
  for (const item of items) {
    if ('options' in item) {
      for (const option of item.options) {
        if (!('options' in option) && option.value === value) {
          return option.label;
        }
      }
    } else if (item.value === value) {
      return item.label;
    }
  }
  return value;
}

function flattenItems(filteredItems: ComboboxItemOrGroup[]): (ComboboxItemOrGroup & { group?: string })[] {
  return filteredItems.flatMap((item) => {
    if ('options' in item) {
      return item.options.map((option) => ({
        ...option,
        group: item.label,
      }));
    }
    return item;
  });
}

function getFilteredItems({
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

function splitTextBySearchTerm(text: string, searchText: string): string[] {
  if (!searchText) {
    return [text];
  }
  const escapedSearchText = escapeRegExp(searchText.toLowerCase());
  return text.split(new RegExp(`(${escapedSearchText})`, 'gi'));
}

export {
  escapeRegExp,
  filterItems,
  findLabelForValue,
  flattenItems,
  getFilteredItems,
  getItemText,
  hasExactMatch,
  isValueAlreadySelected,
  matchesSearch,
  splitTextBySearchTerm,
  type ComboboxProps,
};
