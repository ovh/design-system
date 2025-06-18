import { type ComboboxInputValueChangeDetails, type ComboboxValueChangeDetails } from '@ark-ui/react/combobox';
import { type ComponentPropsWithRef, type ReactNode, createContext, useContext } from 'react';

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
  newElementLabel?: string,
  noResultLabel?: string,
  onValueChange?: (value: ComboboxValueChangeDetails) => void,
  readOnly?: boolean,
  value?: string[]
}

type ComboboxContextType = ComboboxProp & {
  filteredItems?: ComboboxItemOrGroup[];
};

interface ComboboxProviderProp extends ComboboxContextType {
  children: ReactNode;
}

interface ComboboxItemProp extends ComponentPropsWithRef<'div'> {
  item: ComboboxItemOrGroup;
}

interface ComboboxItemGroupProp extends ComponentPropsWithRef<'div'> {
  className?: string;
  children: ReactNode;
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
  defaultValue,
  value,
  ...props
}: ComboboxProviderProp): JSX.Element => {
  return (
    <ComboboxContext.Provider
      value={ {
        ...props,
        defaultValue,
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
  useCombobox,
};
