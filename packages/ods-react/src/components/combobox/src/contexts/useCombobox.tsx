import { type ComboboxInputValueChangeDetails, type ComboboxValueChangeDetails } from '@ark-ui/react/combobox';
import { type ComponentPropsWithRef, type KeyboardEvent, type ReactNode, type RefObject, createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import {
  calculateNewFocusIndex,
  isKeyboardEventAtInputStart,
  removeValueFromArray,
  shouldResetTagFocus,
} from '../controller/combobox';

type ComboboxItem = {
  disabled?: boolean;
  group?: string;
  isNewElement?: boolean;
  label: string;
  value: string;
};

type ComboboxGroup = {
  disabled?: boolean;
  label: string;
  options: ComboboxItem[];
};

type ComboboxItemOrGroup = ComboboxItem | ComboboxGroup;

type ComboboxProp = Omit<ComponentPropsWithRef<'div'>, 'onSelect'> & {
  allowCustomValue?: boolean,
  customOptionRenderer?: (item: ComboboxItemOrGroup) => JSX.Element,
  defaultValue?: string[],
  disabled?: boolean,
  highlightResults?: boolean,
  items: ComboboxItemOrGroup[],
  multiple?: boolean,
  name?: string,
  newElementLabel?: string,
  noResultLabel?: string,
  onValueChange?: (value: ComboboxValueChangeDetails) => void,
  readOnly?: boolean,
  value?: string[]
};

type TagFocusState = {
  focusLastTag: (tagCount: number) => void;
  focusedIndex: number | null;
  resetTagFocus: () => void;
  setTagIndex: (index: number | null) => void;
};

type ComboboxContextType = ComboboxProp & {
  filteredItems?: ComboboxItemOrGroup[];
  handleTagRemove: (tagValue: string) => void,
  handleTagsKeyDown: (e: KeyboardEvent<HTMLInputElement>, inputRef: RefObject<HTMLInputElement>) => void,
  isOpen?: boolean,
  setIsOpen?: (open: boolean) => void,
  tagFocus: TagFocusState,
};

interface ComboboxProviderProp extends ComboboxProp {
  children: ReactNode;
  filteredItems?: ComboboxItemOrGroup[];
}

interface ComboboxItemProp extends ComponentPropsWithRef<'div'> {
  item: ComboboxItemOrGroup;
}

interface ComboboxItemGroupProp extends ComponentPropsWithRef<'div'> {
  children: ReactNode;
  className?: string;
}

interface ComboboxControlProp extends ComponentPropsWithRef<'button'> {
  className?: string;
  clearable?: boolean;
  loading?: boolean;
  placeholder?: string;
}

interface ComboboxContentProp extends ComponentPropsWithRef<'div'> {
  className?: string;
  createPortal?: boolean;
}

const ComboboxContext = createContext<ComboboxContextType | undefined>(undefined);

function useCombobox(): ComboboxContextType {
  const context = useContext(ComboboxContext);
  if (!context) {
    throw new Error('useCombobox must be used within a ComboboxProvider');
  }
  return context;
}

const ComboboxProvider = ({
  children,
  multiple,
  value,
  onValueChange,
  filteredItems,
  ...props
}: ComboboxProviderProp): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedTagIndex, setFocusedTagIndex] = useState<number | null>(null);
  const currentValue = value || [];

  useEffect(() => {
    if (!isOpen) {
      setFocusedTagIndex(null);
    }
  }, [isOpen]);

  const tagFocus: TagFocusState = useMemo((): TagFocusState => ({
    focusLastTag: (tagCount: number): void => {
      if (tagCount > 0) {
        setFocusedTagIndex(tagCount - 1);
      }
    },
    focusedIndex: focusedTagIndex,
    resetTagFocus: (): void => {
      setFocusedTagIndex(null);
    },
    setTagIndex: (index: number | null): void => {
      setFocusedTagIndex(index);
    },
  }), [focusedTagIndex]);

  const handleTagRemove = useCallback((tagValue: string) => {
    if (!multiple) {
      return;
    }

    const newValue = removeValueFromArray(currentValue, tagValue);
    onValueChange?.({ value: newValue } as ComboboxValueChangeDetails);
  }, [currentValue, multiple, onValueChange]);

  const handleTagsKeyDown = useCallback((
    e: React.KeyboardEvent<HTMLInputElement>,
    inputRef: React.RefObject<HTMLInputElement>,
  ) => {
    if (!multiple || !currentValue.length) {
      return;
    }

    const isBackspaceAtStart = isKeyboardEventAtInputStart(e, inputRef, 'Backspace');
    const isArrowLeftAtStart = isKeyboardEventAtInputStart(e, inputRef, 'ArrowLeft');

    if (isBackspaceAtStart && currentValue.length > 0) {
      if (focusedTagIndex === null) {
        setFocusedTagIndex(currentValue.length - 1);
        e.preventDefault();
      } else {
        const indexToRemove = focusedTagIndex;
        const tagToRemove = currentValue[indexToRemove];

        const newFocusIndex = calculateNewFocusIndex(indexToRemove, currentValue.length);
        setFocusedTagIndex(newFocusIndex);
        handleTagRemove(tagToRemove);
        e.preventDefault();
      }
    } else if (isArrowLeftAtStart && currentValue.length > 0 && focusedTagIndex === null) {
      setFocusedTagIndex(currentValue.length - 1);
      e.preventDefault();
    } else if (shouldResetTagFocus(e.key)) {
      setFocusedTagIndex(null);
    }

    if (focusedTagIndex !== null && currentValue.length > 0) {
      if (e.key === 'ArrowLeft' && focusedTagIndex > 0) {
        setFocusedTagIndex(focusedTagIndex - 1);
        e.preventDefault();
      } else if (e.key === 'ArrowRight' && focusedTagIndex < currentValue.length - 1) {
        setFocusedTagIndex(focusedTagIndex + 1);
        e.preventDefault();
      } else if (e.key === 'Escape') {
        setFocusedTagIndex(null);
        e.preventDefault();
      }
    }
  }, [currentValue, multiple, focusedTagIndex, handleTagRemove]);

  return (
    <ComboboxContext.Provider
      value={ {
        ...props,
        filteredItems,
        handleTagRemove,
        handleTagsKeyDown,
        isOpen,
        multiple,
        onValueChange,
        setIsOpen,
        tagFocus,
        value,
      } }
    >
      { children }
    </ComboboxContext.Provider>
  );
};

export {
  ComboboxProvider,
  type ComboboxContentProp,
  type ComboboxControlProp,
  type ComboboxGroup,
  type ComboboxInputValueChangeDetails,
  type ComboboxItem,
  type ComboboxItemGroupProp,
  type ComboboxItemOrGroup,
  type ComboboxItemProp,
  type ComboboxProp,
  type ComboboxValueChangeDetails,
  type TagFocusState,
  useCombobox,
};
