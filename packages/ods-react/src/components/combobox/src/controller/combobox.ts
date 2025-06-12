import type { ComboboxItemOrGroup } from '../components/combobox-item/ComboboxItem';
import type { ReactNode } from 'react';
import { useMemo } from 'react';
import { getElementText } from '../../../../utils/element';

interface UseComboboxControllerProps {
  allowCustomValue?: boolean;
  customOptionRenderer?: (item: ComboboxItemOrGroup) => ReactNode;
  inputValue: string;
  items: ComboboxItemOrGroup[];
  newElementLabel?: string;
  value?: string[];
}

const combobox = ({
  allowCustomValue = false,
  customOptionRenderer,
  inputValue,
  items,
  value = [],
}: UseComboboxControllerProps): {
  filteredItems: ComboboxItemOrGroup[];
  flattenedItems: (ComboboxItemOrGroup & { group?: string })[];
  getItemText: (item: ComboboxItemOrGroup) => string;
  hasExactMatch: boolean;
  matchesSearch: (text: string) => boolean;
} => {
  const getItemText = (item: ComboboxItemOrGroup): string => {
    if ('options' in item) {
      return item.label;
    }
    return customOptionRenderer ? getElementText(customOptionRenderer(item)) : item.label;
  };

  const matchesSearch = (text: string): boolean =>
    text.toLowerCase().includes(inputValue.toLowerCase());

  const hasExactMatch = useMemo(() => {
    if (!inputValue) {
      return false;
    }
    return items.some((item) => {
      if ('options' in item) {
        return item.options.some((option: ComboboxItemOrGroup) =>
          getItemText(option).toLowerCase() === inputValue.toLowerCase(),
        );
      }
      return getItemText(item).toLowerCase() === inputValue.toLowerCase();
    });
  }, [items, inputValue]);

  const isValueAlreadySelected = useMemo(() => {
    if (!inputValue) {
      return false;
    }
    return value.some((selectedValue) =>
      selectedValue.toLowerCase() === inputValue.toLowerCase(),
    );
  }, [value, inputValue]);

  const filteredItems = useMemo(() => {
    if (!inputValue) {
      return items;
    }

    const filtered = items.flatMap((item): ComboboxItemOrGroup[] => {
      if ('options' in item) {
        const filteredOptions = item.options.filter((option: ComboboxItemOrGroup) =>
          matchesSearch(getItemText(option)),
        );
        return filteredOptions.length ? [{ ...item, options: filteredOptions }] : [];
      }
      return matchesSearch(getItemText(item)) ? [item] : [];
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
  }, [items, inputValue, allowCustomValue, hasExactMatch, isValueAlreadySelected]);

  const flattenedItems = useMemo(() => {
    return filteredItems.flatMap((item) => {
      if ('options' in item) {
        return item.options.map((option) => ({
          ...option,
          group: item.label,
        }));
      }
      return item;
    });
  }, [filteredItems]);

  return {
    filteredItems,
    flattenedItems,
    getItemText,
    hasExactMatch,
    matchesSearch,
  };
};

export { combobox };
