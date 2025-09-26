import { Children, type JSX, type ReactNode, cloneElement, isValidElement } from 'react';
import { type ComboboxGroupItem, type ComboboxItem, type ComboboxOptionItem, type ComboboxRootProp } from '../contexts/useCombobox';

type FilterOption = Pick<ComboboxRootProp, 'allowCustomValue' | 'multiple' | 'newElementLabel'> & {
  filterFn: (label: string, query: string) => boolean,
};
type MarkWrapper = ({ key, part }: { key: string | number, part: string }) => JSX.Element;

function filterItems(items: ComboboxItem[], selection: ComboboxOptionItem[], inputValue: string, {
  allowCustomValue,
  filterFn,
  multiple,
  newElementLabel,
}: FilterOption): ComboboxItem[] {
  const initialList: ComboboxItem[] = allowCustomValue &&
    inputValue.trim() !== '' &&
    !itemAlreadyExists(items.concat(selection), inputValue, multiple) ? [{
      isNewElement: true,
      label: `${newElementLabel}${inputValue}`,
      value: inputValue,
    }] : [];

  function isItemDisplayed(item: ComboboxOptionItem, selection: ComboboxOptionItem[], inputValue: string, multiple?: boolean): boolean {
    if (multiple && selection.some((s) => s.value === item.value)) {
      return false;
    }

    return filterFn(item.label, inputValue.trim());
  }

  return items.reduce<ComboboxItem[]>((res, item) => {
    if (isGroup(item)) {
      const visibleGroupItems = item.options.filter((option) => {
        return isItemDisplayed(option, selection, inputValue, multiple);
      });

      if (visibleGroupItems.length) {
        res.push({
          ...item,
          options: visibleGroupItems,
        });
      }
      return res;
    }

    if (isItemDisplayed(item, selection, inputValue, multiple)) {
      res.push(item);
    }
    return res;
  }, initialList);
}

function findItemByValue(items: ComboboxItem[], value: string): ComboboxOptionItem | undefined {
  let foundItem: ComboboxOptionItem | undefined = undefined;

  items.some((item) => {
    someOptions(item, (option) => {
      if (option.value === value) {
        foundItem = option;
        return true;
      }
      return false;
    });
  });

  return foundItem;
}

function getDefaultInputValue(items: ComboboxItem[], multiple: boolean, defaultValue?: string[]): string {
  if (multiple || !defaultValue?.length) {
    return '';
  }

  const matchingItem = items.find((item) => {
    if (isGroup(item)) {
      return item.options.find((option) => option.value === defaultValue[0]);
    }
    return item.value === defaultValue[0];
  });

  return matchingItem ? matchingItem.label : '';
}

function getDefaultSelection(items: ComboboxItem[], defaultValue?: string[]): ComboboxOptionItem[] {
  if (!defaultValue?.length) {
    return [];
  }

  const matchingItems = items.filter((item) => {
    if (isGroup(item)) {
      return item.options.filter((option) => defaultValue.indexOf(option.value) >= 0);
    }
    return defaultValue.indexOf(item.value) >= 0;
  });

  return matchingItems as ComboboxOptionItem[];
}

function highlightNode(node: ReactNode | string, searchText: string, markWrapper: MarkWrapper): ReactNode {
  if (typeof node === 'string') {
    return highlightText(node, searchText, markWrapper);
  }

  if (isValidElement(node)) {
    const children = Children.map(node.props.children, (n) => highlightNode(n, searchText, markWrapper));
    return cloneElement(node, node.props, children);
  }

  return node;
}

function highlightText(text: string, searchText: string, markWrapper: MarkWrapper): (JSX.Element | string)[] {
  const parts = splitTextBySearchTerm(text, searchText);

  return parts.map((part, idx) =>
    part.toLowerCase() === searchText ? markWrapper({ key: idx, part }) : part);
}

function isAtInputStart(input: HTMLInputElement | null): boolean {
  return !!input &&
    input.selectionStart === 0 &&
    input.selectionEnd === 0;
}

function isGroup(item: ComboboxItem): item is ComboboxGroupItem {
  return 'options' in item;
}

function itemAlreadyExists(items: ComboboxItem[], inputValue: string, multiple?: boolean): boolean {
  const testValue = inputValue.trim().toLocaleLowerCase();

  return items.some((item) => {
    return someOptions(item, (option: ComboboxOptionItem) => {
      if (multiple) {
        return option.label.trim().toLocaleLowerCase() === testValue.toLocaleLowerCase()
          || option.value.trim().toLocaleLowerCase() === testValue.toLocaleLowerCase();
      }

      return option.label.trim().toLocaleLowerCase() === testValue.toLocaleLowerCase();
    });
  });
}

function someOptions(item: ComboboxItem, fn: (option: ComboboxOptionItem) => boolean): boolean {
  if (isGroup(item)) {
    return item.options.some(fn);
  }
  return fn(item);
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
  filterItems,
  findItemByValue,
  getDefaultInputValue,
  getDefaultSelection,
  highlightNode,
  isAtInputStart,
  isGroup,
};
