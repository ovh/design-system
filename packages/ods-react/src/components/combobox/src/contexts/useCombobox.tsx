import { type ComponentPropsWithRef, type JSX, type ReactNode, createContext, useContext } from 'react';

interface ComboboxInputValueChangeDetails {
  inputValue: string;
}

interface ComboboxValueChangeDetails {
  value: string[];
}

type ComboboxOptionItem = {
  disabled?: boolean;
  group?: string;
  isNewElement?: boolean;
  label: string;
  value: string;
};

type ComboboxGroupItem = {
  disabled?: boolean;
  label: string;
  options: ComboboxOptionItem[];
};

type ComboboxItem = ComboboxGroupItem | ComboboxOptionItem;

type ComboboxRootProp = Omit<ComponentPropsWithRef<'div'>, 'onSelect'> & {
  /**
   * Whether to allow adding a value which is not part of the items.
   */
  allowCustomValue?: boolean,
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
   * Whether the component is in error state.
   */
  invalid?: boolean,
  /**
   * The list of items
   */
  items: ComboboxItem[],
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

type ComboboxContextType = ComboboxRootProp & {
  filteredItems?: ComboboxItem[];
};

interface ComboboxProviderProp extends ComboboxContextType {
  children: ReactNode;
}

const ComboboxContext = createContext<ComboboxContextType | undefined>(undefined);

const ComboboxProvider = ({
  children,
  filteredItems,
  ...props
}: ComboboxProviderProp): JSX.Element => {
  return (
    <ComboboxContext.Provider value={{
      ...props,
      filteredItems,
    }}>
      { children }
    </ComboboxContext.Provider>
  );
};

function useCombobox(): ComboboxContextType {
  const context = useContext(ComboboxContext);
  if (!context) {
    throw new Error('useCombobox must be used within a ComboboxProvider');
  }
  return context;
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
