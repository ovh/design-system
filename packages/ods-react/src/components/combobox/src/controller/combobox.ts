import { type ComboboxGroupItem, type ComboboxItem, type ComboboxOptionItem, type ComboboxRootProp } from '../contexts/useCombobox';

type FilterOption = Pick<ComboboxRootProp, 'allowCustomValue' | 'multiple' | 'newElementLabel'> & {
  filterFn: (label: string, query: string) => boolean,
};

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

  const matchingItem = findItemByValue(items, defaultValue[0]);

  return matchingItem ? matchingItem.label : '';
}

function getDefaultSelection(items: ComboboxItem[], defaultValue?: string[]): ComboboxOptionItem[] {
  if (!defaultValue?.length) {
    return [];
  }

  return items.reduce<ComboboxOptionItem[]>((res, item) => {
    if (isGroup(item)) {
      const validOptions = item.options.filter((option) => defaultValue.indexOf(option.value) >= 0);

      if (validOptions.length) {
        res = res.concat(validOptions);
      }
      return res;
    }

    if (defaultValue.indexOf(item.value) >= 0) {
      res.push(item);
    }
    return res;
  }, []);
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

export {
  filterItems,
  findItemByValue,
  getDefaultInputValue,
  getDefaultSelection,
  isAtInputStart,
  isGroup,
};
