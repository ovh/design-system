import { type ComboboxInputValueChangeDetails, type ComboboxValueChangeDetails } from '@ark-ui/react/combobox';
import { type ComponentPropsWithRef, type ReactNode, createContext, useContext } from 'react';

type ComboboxProp = Omit<ComponentPropsWithRef<'div'>, 'onSelect'> & {
  allowCustomValue?: boolean,
  customOptionRenderer?: (item: ComboboxItemOrGroup) => JSX.Element,
  defaultValue?: string[],
  disabled?: boolean,
  highlightResults?: boolean,
  items: ComboboxItemOrGroup[],
  newElementLabel?: string,
  noResultLabel?: string,
  onValueChange?: (value: ComboboxValueChangeDetails) => void,
  readOnly?: boolean,
  value?: string[]
}

type ComboboxContextType = ComboboxProp;

const ComboboxContext = createContext<ComboboxContextType | undefined>(undefined);

const useCombobox = (): ComboboxContextType => {
  const context = useContext(ComboboxContext);
  if (!context) {
    throw new Error('useCombobox must be used within a ComboboxProvider');
  }
  return context;
};

interface ComboboxProviderProp extends ComboboxContextType {
  children: ReactNode;
}

const ComboboxProvider = ({
  children,
  defaultValue = [],
  value = [],
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

type HighlightInfo = {
  highlightClass: string;
  searchText: string;
};

type ComboboxItem = {
  disabled?: boolean;
  group?: string;
  highlightInfo?: HighlightInfo;
  isNewElement?: boolean;
  label: string;
  value: string;
};

type ComboboxGroup = {
  disabled?: boolean;
  highlightInfo?: HighlightInfo;
  label: string;
  options: ComboboxItem[];
};

type ComboboxItemOrGroup = ComboboxItem | ComboboxGroup;

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
}

export {
  type ComboboxProp,
  type ComboboxContextType,
  useCombobox,
  ComboboxProvider,
  type HighlightInfo,
  type ComboboxItem,
  type ComboboxGroup,
  type ComboboxItemOrGroup,
  type ComboboxItemProp,
  type ComboboxItemGroupProp,
  type ComboboxControlProp,
  type ComboboxContentProp,
  type ComboboxInputValueChangeDetails,
  type ComboboxValueChangeDetails,
};
