import type { ComboboxItemOrGroup } from '../components/combobox-item/ComboboxItem';
import type { ComboboxValueChangeDetails } from '@ark-ui/react/combobox';
import type { ComponentPropsWithRef } from 'react';
import { type ReactNode, createContext, useContext } from 'react';

export type ComboboxProp = Omit<ComponentPropsWithRef<'div'>, 'onSelect'> & {
  allowCustomValue?: boolean,
  children?: ReactNode,
  className?: string,
  customOptionRenderer?: (item: ComboboxItemOrGroup) => JSX.Element,
  defaultValue?: string[] | undefined,
  disabled?: boolean,
  highlightResults?: boolean,
  items: ComboboxItemOrGroup[],
  newElementLabel?: string,
  noResultLabel?: string,
  onValueChange?: (value: ComboboxValueChangeDetails) => void,
  readOnly?: boolean,
  value?: string[]
}

interface ComboboxContextType {
  allowCustomValue: boolean;
  customOptionRenderer?: (item: ComboboxItemOrGroup) => ReactNode;
  defaultValue: string[] | undefined;
  disabled: boolean;
  highlightResults: boolean;
  items: ComboboxItemOrGroup[];
  newElementLabel: string;
  noResultLabel: string;
  onValueChange: (value: ComboboxValueChangeDetails) => void;
  readOnly: boolean;
  value?: string[];
}

const ComboboxContext = createContext<ComboboxContextType | undefined>(undefined);

export const useCombobox = (): ComboboxContextType => {
  const context = useContext(ComboboxContext);
  if (!context) {
    throw new Error('useCombobox must be used within a ComboboxProvider');
  }
  return context;
};

interface ComboboxProviderProp extends ComboboxContextType {
  children: ReactNode;
}

export const ComboboxProvider = ({
  allowCustomValue,
  children,
  customOptionRenderer,
  defaultValue = [],
  disabled,
  highlightResults,
  items,
  newElementLabel,
  noResultLabel,
  onValueChange,
  readOnly,
  value,
}: ComboboxProviderProp): JSX.Element => {
  return (
    <ComboboxContext.Provider
      value={ {
        allowCustomValue,
        customOptionRenderer,
        defaultValue,
        disabled,
        highlightResults,
        items,
        newElementLabel,
        noResultLabel,
        onValueChange,
        readOnly,
        value,
      } }
    >
      { children }
    </ComboboxContext.Provider>
  );
};
