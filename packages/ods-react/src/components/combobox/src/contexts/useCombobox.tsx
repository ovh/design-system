import { useFilter } from '@ark-ui/react/locale';
import { type ComponentPropsWithRef, type JSX, type ReactNode, type RefObject, type SetStateAction, createContext, useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import { useContext } from '../../../../utils/context';
import { type Locale } from '../../../../utils/locales';
import { type INPUT_I18N } from '../../../input/src';
import { type PopoverPosition } from '../../../popover/src';
import { filterItems, findItemByValue, getDefaultInputValue, getDefaultSelection, isGroup } from '../controller/combobox';

interface ComboboxInputValueChangeDetails {
  inputValue: string;
}

interface ComboboxValueChangeDetails {
  value: string[];
}

type CustomData = Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any

type ComboboxOptionItem<T extends CustomData = CustomData> = {
  customRendererData?: T,
  disabled?: boolean;
  group?: string;
  /** @internal */
  isNewElement?: boolean;
  label: string;
  value: string;
};

type ComboboxGroupItem<T extends CustomData = CustomData> = {
  customRendererData?: T,
  disabled?: boolean;
  label: string;
  options: ComboboxOptionItem[];
};

type ComboboxItem<T extends CustomData = CustomData> = ComboboxGroupItem<T> | ComboboxOptionItem<T>;

type ComboboxRootProp = Omit<ComponentPropsWithRef<'div'>, 'defaultValue' | 'onSelect'> & {
  /**
   * Whether to allow adding a value which is not part of the items.
   */
  allowCustomValue?: boolean,
  /**
   * Custom filter logic to apply to each item.
   */
  customFilter?: (label: string, query: string) => boolean,
  /**
   * Custom render for each option item.
   */
  customOptionRenderer?: (item: ComboboxItem) => JSX.Element,
  /**
   * The initial selected value(s). Use when you don't need to control the selected value(s) of the combobox.
   */
  defaultValue?: string[],
  /**
   * Whether the component is disabled.
   */
  disabled?: boolean,
  /**
   * Whether to highlight the matching part of filtered items.
   */
  highlightResults?: boolean,
  /**
   * Internal translations override (see Input i18n keys).
   */
  i18n?: Partial<Record<INPUT_I18N.clearButton, string>>,
  /**
   * Whether the component is in error state.
   */
  invalid?: boolean,
  /**
   * The list of items
   */
  items: ComboboxItem[],
  /**
   * The locale used for the translation of the internal elements.
   */
  locale?: Locale,
  /**
   * Whether the multiple selection is allowed.
   */
  multiple?: boolean,
  /**
   * The name of the form element. Useful for form submission.
   */
  name?: string,
  /**
   * Label displayed in front of a custom new value to add.
   */
  newElementLabel?: string,
  /**
   * Label displayed when no values match the current input value.
   */
  noResultLabel?: string,
  /**
   * Callback fired when the input value changes.
   */
  onInputValueChange?: (value: ComboboxInputValueChangeDetails) => void,
  /**
   * Callback fired when the value(s) changes.
   */
  onValueChange?: (value: ComboboxValueChangeDetails) => void,
  /**
   * Whether the component is readonly.
   */
  readOnly?: boolean,
  /**
   * Whether the component is required.
   * /!\ Only work for single selection mode for now.
   */
  required?: boolean,
  /**
   * The controlled selected value(s).
   */
  value?: string[]
};

interface ComboboxProviderProp extends ComboboxRootProp {
  children: ReactNode;
}

type ComboboxContextType = Omit<ComboboxProviderProp, 'children'> & {
  contentId: string,
  contentPosition?: PopoverPosition,
  controlId: string,
  deselectItem: (item: ComboboxOptionItem) => void;
  filteredItems: ComboboxItem[];
  highlightedOptionValue: string,
  highlightNextOption: () => void,
  highlightOption: (item: ComboboxOptionItem) => void,
  highlightPreviousOption: () => void,
  inputRef: RefObject<HTMLInputElement>,
  inputValue: string,
  isOpen: boolean,
  selection: ComboboxOptionItem[],
  selectHighlightedItem: () => void,
  selectItem: (item: ComboboxOptionItem) => void;
  setContentId: (value: string) => void;
  setContentPosition: (value: PopoverPosition) => void;
  setInputValue: (value: string) => void;
  setIsOpen: (value: boolean) => void;
  setSelection: (values: ComboboxOptionItem[]) => void;
};

const ComboboxContext = createContext<ComboboxContextType | undefined>(undefined);

const ComboboxProvider = ({
  allowCustomValue,
  children,
  customFilter,
  defaultValue,
  disabled,
  items,
  multiple = false,
  newElementLabel,
  onInputValueChange,
  onValueChange,
  readOnly,
  value,
  ...props
}: ComboboxProviderProp): JSX.Element => {
  // Initial values computation should be done only once, hence no dependencies set
  const defaultInputValue = useMemo(() => getDefaultInputValue(items, multiple, defaultValue || value), []); // eslint-disable-line react-hooks/exhaustive-deps
  const defaultSelection = useMemo(() => getDefaultSelection(items, defaultValue || value), []); // eslint-disable-line react-hooks/exhaustive-deps

  const { contains } = useFilter({ sensitivity: 'base' });
  // useFilter seems to update on each render, so we memoize it to avoid useEffect issue.
  const filterFn = useCallback((label: string, query: string) => {
    return customFilter ? customFilter(label, query) : contains(label, query);
  }, [customFilter]); // eslint-disable-line react-hooks/exhaustive-deps

  const controlId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [contentId, setContentId] = useState('');
  const [contentPosition, setContentPosition] = useState<PopoverPosition | undefined>();
  const [filteredItems, setFilteredItems] = useState(items);
  const [highlightedOptionValue, setHighlightedOptionValue] = useState('');
  const [inputValue, _setInputValue] = useState(defaultInputValue);
  const [isOpen, _setIsOpen] = useState(false);
  const [selection, _setSelection] = useState<ComboboxOptionItem[]>(defaultSelection);

  const optionValues = useMemo(() => {
    return filteredItems.reduce<string[]>((values, item) => {
      if (isGroup(item)) {
        return values.concat(item.options.map((option) => option.value));
      }
      values.push(item.value);
      return values;
    }, []);
  }, [filteredItems]);

  useEffect(() => {
    setHighlightedOptionValue('');

    setFilteredItems(() => {
      if (!multiple && inputValue.trim() === '') {
        return items;
      }

      return filterItems(
        items,
        selection,
        inputValue,
        {
          allowCustomValue,
          filterFn: filterFn,
          multiple,
          newElementLabel,
        },
      );
    });
  }, [allowCustomValue, filterFn, inputValue, items, multiple, newElementLabel, selection]);

  useEffect(() => {
    if (!isOpen) {
      setHighlightedOptionValue('');
    }
  }, [isOpen]);

  useEffect(() => {
    const matchingItems = getDefaultSelection(items, value);

    if (matchingItems.length) {
      if (!multiple) {
        setInputValue(matchingItems[0].label);
        _setSelection([matchingItems[0]]);
      } else {
        setInputValue('');
        _setSelection(matchingItems);
      }
    }
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

  function deselectItem(item: ComboboxOptionItem): void {
    if (disabled || readOnly || !multiple) {
      return;
    }

    setSelection((s) => s.filter((i) => i.value !== item.value));
    focusInput();
  }

  function focusInput(): void {
    inputRef.current?.focus();
  }

  function highlightNextOption(): void {
    if (!isOpen) {
      setIsOpen(true);
    }

    if (highlightedOptionValue === '' && filteredItems.length) {
      setHighlightedOptionValue(optionValues[0]);
    } else {
      const currentIndex = optionValues.findIndex((v) => v === highlightedOptionValue);
      setHighlightedOptionValue(optionValues[currentIndex < (optionValues.length - 1) ? currentIndex + 1 : 0]);
    }
  }

  function highlightOption(item: ComboboxOptionItem): void {
    if (!isOpen) {
      return;
    }

    setHighlightedOptionValue(item.value);
  }

  function highlightPreviousOption(): void {
    if (!isOpen) {
      return;
    }

    if (highlightedOptionValue === '' && filteredItems.length) {
      setHighlightedOptionValue(optionValues[optionValues.length - 1]);
    } else {
      const currentIndex = optionValues.findIndex((v) => v === highlightedOptionValue);
      setHighlightedOptionValue(optionValues[currentIndex > 0 ? currentIndex - 1 : (optionValues.length - 1)]);
    }
  }

  function selectHighlightedItem(): void {
    if (!highlightedOptionValue) {
      return;
    }

    const itemToSelect = findItemByValue(filteredItems, highlightedOptionValue);

    if (itemToSelect) {
      selectItem(itemToSelect);
    }
  }

  function selectItem(item: ComboboxOptionItem): void {
    if (disabled || readOnly) {
      return;
    }

    if (!multiple) {
      setInputValue(item.isNewElement ? item.value : item.label);
      setSelection([item]);
      setIsOpen(false);
    } else {
      setInputValue('');
      setSelection((s) => {
        if (item.isNewElement) {
          const { isNewElement, ...rest } = item;
          return s.concat([{ ...rest, label: item.value }]);
        }
        return s.concat([item]);
      });
    }

    focusInput();
  }

  function setInputValue(state: SetStateAction<string>): void {
    const newState = typeof state === 'function' ? state(inputValue) : state;

    _setInputValue(newState);

    if (onInputValueChange && newState !== inputValue) {
      onInputValueChange({ inputValue: newState });
    }
  }

  function setIsOpen(state: SetStateAction<boolean>): void {
    if (disabled || readOnly) {
      _setIsOpen(false);
    } else {
      _setIsOpen(state);
    }
  }

  function setSelection(state: SetStateAction<ComboboxOptionItem[]>): void {
    const newState = typeof state === 'function' ? state(selection) : state;

    _setSelection(newState);

    if (onValueChange) {
      const formattedValues = newState.length ? newState.map((s) => s.value) : [];

      onValueChange({ value: formattedValues });
    }
  }

  return (
    <ComboboxContext.Provider value={{
      ...props,
      allowCustomValue,
      contentId,
      contentPosition,
      controlId,
      defaultValue,
      deselectItem,
      disabled,
      filteredItems,
      highlightNextOption,
      highlightOption,
      highlightPreviousOption,
      highlightedOptionValue,
      inputRef,
      inputValue,
      isOpen,
      items,
      multiple,
      newElementLabel,
      onInputValueChange,
      onValueChange,
      readOnly,
      selectHighlightedItem,
      selectItem,
      selection,
      setContentId,
      setContentPosition,
      setInputValue,
      setIsOpen,
      setSelection,
      value,
    }}>
      { children }
    </ComboboxContext.Provider>
  );
};

function useCombobox(): ComboboxContextType {
  return useContext(ComboboxContext);
}

export {
  type ComboboxGroupItem,
  type ComboboxInputValueChangeDetails,
  type ComboboxItem,
  type ComboboxOptionItem,
  ComboboxProvider,
  type ComboboxRootProp,
  type ComboboxValueChangeDetails,
  useCombobox,
};
