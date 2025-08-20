import { type ListCollection, useListCollection } from '@ark-ui/react/combobox';
import { useFilter } from '@ark-ui/react/locale';
import { type ComponentPropsWithRef, type JSX, type ReactNode, createContext, useContext, useMemo } from 'react';
import { type Locale } from '../../../../utils/locales';
import { type INPUT_I18N } from '../../../input/src';
import { transformToVendorList } from '../controller/combobox';

interface ComboboxInputValueChangeDetails {
  inputValue: string;
}

interface ComboboxValueChangeDetails {
  value: string[];
}

type CustomData = any; // eslint-disable-line @typescript-eslint/no-explicit-any

type ComboboxOptionItem<T extends CustomData = CustomData> = {
  customRendererData?: T,
  disabled?: boolean;
  group?: string;
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

type ComboboxVendorItem = ComboboxOptionItem & {
  groupBy?: string,
}

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

interface ComboboxProviderProp extends Pick<ComboboxRootProp, 'allowCustomValue' | 'customOptionRenderer' | 'highlightResults' | 'i18n' | 'invalid' | 'items' | 'locale' | 'newElementLabel' | 'noResultLabel' | 'readOnly'> {
  children: ReactNode;
}

interface ComboboxContextType extends Omit<ComboboxProviderProp, 'children'> {
  collection: ListCollection<ComboboxVendorItem>,
  filterItems: (inputValue: string) => void,
  removeItem: (item: string | ComboboxVendorItem) => void,
  setItems: (items: ComboboxVendorItem[]) => void,
  updateItem: (value: string, item: ComboboxVendorItem) => void,
  upsertItem: (value: string, item: ComboboxVendorItem, mode?: 'append' | 'prepend') => void,
  vendorItems: ComboboxVendorItem[],
}

const ComboboxContext = createContext<ComboboxContextType | undefined>(undefined);

const ComboboxProvider = ({
  allowCustomValue,
  children,
  customOptionRenderer,
  highlightResults,
  i18n,
  invalid,
  items,
  locale,
  newElementLabel,
  noResultLabel,
  readOnly,
}: ComboboxProviderProp): JSX.Element => {
  const vendorItems = useMemo(() => transformToVendorList(items), [items]);
  const { contains } = useFilter({ sensitivity: 'base' });
  const { collection, filter, remove, set, update, upsert } = useListCollection<ComboboxVendorItem>({
    filter: (searchTerm, inputValue, { customRendererData }) => {
      let searchTerms = [searchTerm];

      if (customRendererData) {
        searchTerms = searchTerms.concat(Object.values(customRendererData));
      }

      return contains(`${searchTerms.join(' ')}`, inputValue);
    },
    groupBy: (item) => {
      return item.groupBy || '';
    },
    initialItems: vendorItems,
  });

  return (
    <ComboboxContext.Provider value={{
      allowCustomValue,
      collection,
      customOptionRenderer,
      filterItems: filter,
      highlightResults,
      i18n,
      invalid,
      items,
      locale,
      newElementLabel,
      noResultLabel,
      readOnly,
      removeItem: remove,
      setItems: set,
      updateItem: update,
      upsertItem: upsert,
      vendorItems,
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
  type ComboboxVendorItem,
  useCombobox,
};
