import { type FocusEventHandler, type JSX, type ReactNode, createContext, useContext, useState } from 'react';
import { type Locale } from '../../../../utils/locales';
import { type INPUT_I18N } from '../../../input/src';

type ComboboxPlacement = 'bottom' | 'top';

type ComboboxInputValueChangeDetails = {
  inputValue: string;
}

type ComboboxValueChangeDetails = {
  isNew: boolean,
  label: string,
  value: string,
}

type CustomData = any; // eslint-disable-line @typescript-eslint/no-explicit-any

type ComboboxOptionItem<T extends CustomData = CustomData> = {
  customRendererData?: T,
  disabled?: boolean;
  label: string,
  value: string,
  /** @internal */
  __isNew__?: boolean,
};

type ComboboxGroupItem<T extends CustomData = CustomData> = {
  customRendererData?: T,
  disabled?: boolean;
  label: string,
  options: ComboboxOptionItem[],
};

type ComboboxItem<T extends CustomData = CustomData> = ComboboxGroupItem<T> | ComboboxOptionItem<T>;

interface ComboboxRootProp {
  /**
   * Whether to allow adding a value which is not part of the items.
   */
  allowCustomValue?: boolean,
  /**
   * Whether the clear button is displayed.
   */
  clearable?: boolean,
  /**
   * Whether the component should be rendered in the DOM close to the body tag.
   */
  createPortal?: boolean;
  /**
   * Custom filter logic to apply to each item.
   */
  customFilter?: (item: ComboboxItem, inputValue: string) => boolean,
  /**
   * Custom render for each option item.
   */
  customOptionRenderer?: (item: ComboboxItem) => JSX.Element,
  /**
   * The initial selected value(s). Use when you don't need to control the selected value(s) of the combobox.
   */
  defaultValue?: ComboboxItem[],
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
   * Whether the component is in loading state.
   */
  loading?: boolean,
  /**
   * Label displayed when the component is in loading state.
   */
  loadingLabel?: string
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
   * Callback fired when on input blur.
   */
  onBlur?: FocusEventHandler<HTMLInputElement>,
  /**
   * Callback fired when the input value changes.
   */
  onInputChange?: (detail: ComboboxInputValueChangeDetails) => void,
  /**
   * Callback fired when the value(s) changes.
   */
  onValueChange?: (details: ComboboxValueChangeDetails[]) => void,
  /**
   * The placeholder text to display in the input.
   */
  placeholder?: string,
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
  value?: ComboboxItem[],
}

interface ComboboxProviderProp extends Pick<ComboboxRootProp, 'customOptionRenderer' | 'highlightResults' | 'i18n' | 'invalid' | 'locale' | 'placeholder' | 'readOnly'> {
  children: ReactNode,
}

interface ComboboxContextType extends Omit<ComboboxProviderProp, 'children'> {
  computedPlacement: ComboboxPlacement,
  setComputedPlacement: (placement: ComboboxPlacement) => void,
}

const ComboboxContext = createContext<ComboboxContextType | undefined>(undefined);

const ComboboxProvider = ({
  children,
  customOptionRenderer,
  highlightResults,
  i18n,
  invalid,
  locale,
  placeholder,
  readOnly,
}: ComboboxProviderProp): JSX.Element => {
  const [computedPlacement, setComputedPlacement] = useState<ComboboxPlacement>('bottom');

  return (
    <ComboboxContext.Provider value={{
      computedPlacement,
      customOptionRenderer,
      highlightResults,
      i18n,
      invalid,
      locale,
      placeholder,
      readOnly,
      setComputedPlacement,
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
