import { type ComponentPropsWithRef, type JSX, type ReactNode, createContext } from 'react';
import { useContext } from '../../../../utils/context';

interface SelectValueChangeDetail {
  items: SelectItem[],
  value: string[],
}

type CustomData = Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any

type SelectMultipleMode = boolean | 'merge'

type SelectOptionItem<T extends CustomData = CustomData> = {
  customRendererData?: T,
  disabled?: boolean,
  label: string,
  value: string,
}

type SelectGroupItem<T extends CustomData = CustomData> = {
  customRendererData?: T,
  disabled?: boolean,
  label: string,
  options: SelectOptionItem<T>[],
}

type SelectItem<T extends CustomData = CustomData> = SelectGroupItem<T> | SelectOptionItem<T>;

type SelectCustomGroupRendererArg<T extends CustomData = CustomData> = {
  customData?: T,
  label: string,
}

type SelectCustomItemRendererArg<T extends CustomData = CustomData> = {
  selectedItems: SelectOptionItem<T>[],
  text: string,
  values: string[],
}

type SelectCustomOptionRendererArg<T extends CustomData = CustomData> = {
  customData?: T,
  label: string,
}

interface SelectRootProp extends Omit<ComponentPropsWithRef<'div'>, 'onSelect'> {
  /**
   * The initial selected value(s). Use when you don't need to control the selected value(s) of the select.
   */
  defaultValue?: string | string[],
  /**
   * Whether the component is disabled.
   */
  disabled?: boolean,
  /**
   * Whether the dropdown width should stay the same as the input.
   */
  fitControlWidth?: boolean,
  /**
   * Whether the component is in error state.
   */
  invalid?: boolean,
  /**
   * The list of items
   */
  items: SelectItem[],
  /**
   * Allows multiple selection and define how it should be rendered.
   */
  multiple?: SelectMultipleMode,
  /**
   * The name of the form element. Useful for form submission.
   */
  name?: string,
  /**
   * Callback fired when the value(s) changes.
   */
  onValueChange?: (detail: SelectValueChangeDetail) => void,
  /**
   * Whether the component is readonly.
   */
  readOnly?: boolean,
  /**
   * Whether the component is required.
   */
  required?: boolean,
  /**
   * The controlled selected value(s).
   */
  value?: string[],
}

interface SelectProviderProp extends Pick<SelectRootProp, 'invalid' | 'items' | 'multiple' | 'readOnly'> {
  children: ReactNode,
}

type SelectContextType = Omit<SelectProviderProp, 'children'>;

const SelectContext = createContext<SelectContextType | undefined>(undefined);

function SelectProvider({ children, invalid, items, multiple, readOnly }: SelectProviderProp): JSX.Element {
  return (
    <SelectContext.Provider value={{
      invalid,
      items,
      multiple,
      readOnly,
    }}>
      { children }
    </SelectContext.Provider>
  );
}

function useSelect(): SelectContextType {
  return useContext(SelectContext);
}

export {
  type SelectCustomGroupRendererArg,
  type SelectCustomItemRendererArg,
  type SelectCustomOptionRendererArg,
  type SelectGroupItem,
  type SelectItem,
  type SelectMultipleMode,
  type SelectOptionItem,
  SelectProvider,
  type SelectRootProp,
  type SelectValueChangeDetail,
  useSelect,
};
