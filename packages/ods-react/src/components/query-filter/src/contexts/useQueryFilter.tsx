import { useFilter } from '@ark-ui/react/locale';
import { type ComponentPropsWithRef, type JSX, type ReactNode, type RefObject, type SetStateAction, createContext, useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import { useContext } from '../../../../utils/context';
import { type Locale } from '../../../../utils/locales';
import { type INPUT_I18N } from '../../../input/src';
import { type PopoverPosition } from '../../../popover/src';
import { MAX_STEP, extractCustomLabel, findItemByValue, generateTagId, getDefaultTags, getMergedLabel, getStepGroup } from '../controller/query-filter';

interface QueryFilterInputValueChangeDetails {
  inputValue: string;
}

interface QueryFilterOpenChangeDetail {
  open: boolean,
}

interface QueryFilterValueChangeDetails {
  value: string[][];
}

type QueryFilterItem = {
  label: string;
  value: string;
}

type QueryFilterGroup = {
  label: string;
  options: QueryFilterItem[];
}

type QueryFilterOption = Record<string, {
  operator: QueryFilterGroup;
  value: QueryFilterGroup;
}>

type QueryFilterProperty = QueryFilterGroup;

type QueryFilterTag = {
  filters: QueryFilterItem[];
  id: string;
  label: string;
}

type QueryFilterRootProp = Omit<ComponentPropsWithRef<'div'>, 'defaultValue'> & {
  /**
   * Whether to allow adding a custom filter.
   */
  allowCustomValue?: boolean,
  /**
   * The initial open state of the query filter. Use when you don't need to control the open state of the query filter.
   */
  defaultOpen?: boolean,
  /**
   * The initial selected value(s). Use when you don't need to control the selected value(s) of the query filter.
   */
  defaultValue?: string[][];
  /**
   * Whether the component is disabled.
   */
  disabled?: boolean;
  /**
   * The property filter options (operator and value).
   */
  filterOption: QueryFilterOption;
  /**
   * The properties that may be used as a filter.
   */
  filterProperty: QueryFilterProperty;
  /**
   * Whether to highlight the matching part of filtered items.
   */
  highlightResults?: boolean;
  /**
   * Internal translations override (see Input i18n keys).
   */
  i18n?: Partial<Record<INPUT_I18N.clearButton, string>>;
  /**
   * Whether the component is in error state.
   */
  invalid?: boolean;
  /**
   * The locale used for the translation of the internal elements.
   */
  locale?: Locale;
  /**
   * The name of the form element. Useful for form submission.
   */
  name?: string;
  /**
   * Label displayed in front of a custom filter to add.
   */
  newElementLabel?: string,
  /**
   * Label displayed when no values match the current input value.
   */
  noResultLabel?: string;
  /**
   * Callback fired when the input value changes.
   */
  onInputValueChange?: (value: QueryFilterInputValueChangeDetails) => void;
  /**
   * Callback fired when the query filter open state changes.
   */
  onOpenChange?: (detail: QueryFilterOpenChangeDetail) => void
  /**
   * Callback fired when the value(s) changes.
   */
  onValueChange?: (value: QueryFilterValueChangeDetails) => void;
  /**
   * The controlled open state of the query filter.
   */
  open?: boolean,
  /**
   * The overlay configuration.
   */
  overlayConfig?: {
    /**
     * Whether to flip the position.
     */
    flip?: boolean,
    /**
     * Whether to make the floating element same width as the reference element.
     */
    sameWidth?: boolean,
  },
  /**
   * Whether the component is readonly.
   */
  readOnly?: boolean;
  /**
   * Whether the component is required.
   */
  required?: boolean;
  /**
   * The controlled selected value(s).
   */
  value?: string[][];
};

interface QueryFilterProviderProp extends QueryFilterRootProp {
  children: ReactNode;
}

type QueryFilterContextType = Omit<QueryFilterProviderProp, 'children'> & {
  contentId: string;
  contentPosition?: PopoverPosition;
  controlId: string;
  filteredGroup?: QueryFilterGroup;
  highlightedOptionValue: string;
  highlightNextOption: () => void;
  highlightOption: (item: QueryFilterItem) => void;
  highlightPreviousOption: () => void;
  inputRef: RefObject<HTMLInputElement>;
  inputValue: string;
  isOpen: boolean;
  moveToNextStep: () => void;
  moveToPreviousStep: () => void;
  removeAllTags: () => void;
  removeTag: (tagId: string) => void;
  resetControl: () => void;
  selection: QueryFilterItem[];
  selectHighlightedItem: () => void;
  selectItem: (item: QueryFilterItem, isCustom?: boolean) => void;
  setContentId: (value: string) => void;
  setContentPosition: (value: PopoverPosition) => void;
  setInputValue: (value: string) => void;
  setIsOpen: (value: boolean) => void;
  tags: QueryFilterTag[];
};

const QueryFilterContext = createContext<QueryFilterContextType | undefined>(undefined);

const QueryFilterProvider = ({
  allowCustomValue,
  children,
  defaultOpen,
  defaultValue,
  disabled,
  filterOption,
  filterProperty,
  onInputValueChange,
  onOpenChange,
  onValueChange,
  open,
  readOnly,
  value,
  ...props
}: QueryFilterProviderProp): JSX.Element => {
  // Initial values computation should be done only once, hence no dependencies set
  const defaultTags = useMemo(() => getDefaultTags(filterProperty, filterOption, defaultValue || value), []); // eslint-disable-line react-hooks/exhaustive-deps

  const { contains } = useFilter({ sensitivity: 'base' });
  // useFilter seems to update on each render, so we memoize it to avoid useEffect issue.
  const filterFn = useCallback((label: string, query: string) => {
    return contains(label, query);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const controlId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [contentId, setContentId] = useState('');
  const [contentPosition, setContentPosition] = useState<PopoverPosition | undefined>();
  const [filteredGroup, setFilteredGroup] = useState<QueryFilterGroup | undefined>(undefined);
  const [highlightedOptionValue, setHighlightedOptionValue] = useState('');
  const [inputValue, _setInputValue] = useState('');
  const [isOpen, _setIsOpen] = useState((defaultOpen ?? open) ?? false);
  const [selection, setSelection] = useState<QueryFilterItem[]>([]);
  const [tags, _setTags] = useState<QueryFilterTag[]>(defaultTags);

  const optionValues = useMemo(() => {
    if (filteredGroup) {
      return filteredGroup.options.map((option) => option.value);
    }
    return [];
  }, [filteredGroup]);

  useEffect(() => {
    setHighlightedOptionValue('');

    setFilteredGroup(() => {
      const stepGroup = getStepGroup(selection, filterProperty, filterOption);

      if (!stepGroup) {
        return undefined;
      }

      if (inputValue.trim() === '') {
        return stepGroup;
      }

      return {
        ...stepGroup,
        options: stepGroup.options
          .map((option) => ({
            ...option,
            label: getMergedLabel(selection, option.label),
          }))
          .filter((option) => {
            return filterFn(option.label, inputValue.trim());
          }),
      };
    });
  }, [filterFn, filterProperty, filterOption, inputValue, selection]);

  useEffect(() => {
    if (!isOpen) {
      setHighlightedOptionValue('');
    }
  }, [isOpen]);

  useEffect(() => {
    if (typeof open === 'boolean') {
      _setIsOpen(open);
    }
  }, [open]);

  function focusInput(): void {
    inputRef.current?.focus();
  }

  function highlightNextOption(): void {
    if (!isOpen) {
      setIsOpen(true);
    }

    const values = (allowCustomValue && inputValue)
      ? [inputValue].concat(optionValues)
      : optionValues;

    if (highlightedOptionValue === '' && filteredGroup?.options?.length) {
      setHighlightedOptionValue(values[0]);
    } else {
      const currentIndex = values.findIndex((v) => v === highlightedOptionValue);
      setHighlightedOptionValue(values[currentIndex < (values.length - 1) ? currentIndex + 1 : 0]);
    }
  }

  function highlightOption(item: QueryFilterItem): void {
    if (!isOpen) {
      return;
    }

    setHighlightedOptionValue(item.value);
  }

  function highlightPreviousOption(): void {
    if (!isOpen) {
      return;
    }

    const values = (allowCustomValue && inputValue)
      ? [inputValue].concat(optionValues)
      : optionValues;

    if (highlightedOptionValue === '' && filteredGroup?.options?.length) {
      setHighlightedOptionValue(values[values.length - 1]);
    } else {
      const currentIndex = values.findIndex((v) => v === highlightedOptionValue);
      setHighlightedOptionValue(values[currentIndex > 0 ? currentIndex - 1 : (values.length - 1)]);
    }
  }

  function moveToNextStep(): void {
    if (selection.length < MAX_STEP && filteredGroup?.options?.length) {
      setSelection((selection) => selection.concat(filteredGroup.options[0]));
    }
  }

  function moveToPreviousStep(): void {
    if (selection.length) {
      setSelection((selection) => selection.slice(0, -1));
    }
  }

  function removeAllTags(): void {
    setTags([]);
  }

  function removeTag(tagId: string): void {
    setTags((tags) => tags.filter((tag) => tag.id !== tagId));
  }

  function resetControl(): void {
    setInputValue('');
    setSelection([]);
    setIsOpen(false);
  }

  function selectHighlightedItem(): void {
    if (!highlightedOptionValue) {
      return;
    }

    if (filteredGroup) {
      const itemToSelect = findItemByValue(filteredGroup.options, highlightedOptionValue);

      if (itemToSelect) {
        selectItem(itemToSelect);
      }
    }
  }

  function selectItem(item: QueryFilterItem, isCustom = false): void {
    if (disabled || readOnly) {
      return;
    }

    if (isCustom) {
      setTags((tags) => {
        if (tags.every((tag) => tag.id !== item.value)) {
          const customValue = extractCustomLabel(item, selection);
          return tags.concat({
            filters: selection.concat({ label: customValue, value: customValue }),
            id: item.value,
            label: item.label,
          });
        }
        return tags;
      });

      resetControl();
    } else {
      const newSelection = selection.concat(item);

      if (newSelection.length >= MAX_STEP) {
        const newTagId = generateTagId(newSelection);

        if (tags.every((tag) => tag.id !== newTagId)) {
          const newTags = tags.concat([{
            filters: newSelection,
            id: newTagId,
            label: getMergedLabel(newSelection),
          }]);
          setTags(newTags);
        }

        resetControl();
      } else {
        setInputValue(item.label);
        setSelection(newSelection);
      }
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
    let newState;

    if (disabled || readOnly) {
      newState = false;
    } else {
      newState = typeof state === 'function' ? state(isOpen) : state;
    }

    if (typeof open !== 'boolean') {
      _setIsOpen(newState);
    }

    if (onOpenChange) {
      onOpenChange({ open: newState });
    }
  }

  function setTags(state: SetStateAction<QueryFilterTag[]>): void {
    const newState = typeof state === 'function' ? state(tags) : state;

    _setTags(newState);

    if (onValueChange) {
      onValueChange({
        value: newState.map((tag) => {
          if (tag.filters.length) {
            return tag.filters.map((f) => f.value);
          }
          return [tag.label];
        }),
      });
    }
  }

  return (
    <QueryFilterContext.Provider value={{
      ...props,
      allowCustomValue,
      contentId,
      contentPosition,
      controlId,
      disabled,
      filterOption,
      filterProperty,
      filteredGroup,
      highlightNextOption,
      highlightOption,
      highlightPreviousOption,
      highlightedOptionValue,
      inputRef,
      inputValue,
      isOpen,
      moveToNextStep,
      moveToPreviousStep,
      readOnly,
      removeAllTags,
      removeTag,
      resetControl,
      selectHighlightedItem,
      selectItem,
      selection,
      setContentId,
      setContentPosition,
      setInputValue,
      setIsOpen,
      tags,
    }}>
      { children }
    </QueryFilterContext.Provider>
  );
};

function useQueryFilter(): QueryFilterContextType {
  return useContext(QueryFilterContext);
}

export {
  type QueryFilterGroup,
  type QueryFilterInputValueChangeDetails,
  type QueryFilterItem,
  type QueryFilterOpenChangeDetail,
  type QueryFilterOption,
  type QueryFilterProperty,
  QueryFilterProvider,
  type QueryFilterRootProp,
  type QueryFilterTag,
  type QueryFilterValueChangeDetails,
  useQueryFilter,
};
