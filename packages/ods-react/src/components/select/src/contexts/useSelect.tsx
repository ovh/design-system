import { type JSX, type ReactNode, createContext, useContext } from 'react';

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

type SelectContextType = {
  invalid?: boolean,
  items: SelectItem[],
  multiple: SelectMultipleMode,
  readOnly?: boolean,
}

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

interface SelectProviderProp extends SelectContextType {
  children: ReactNode,
}

const SelectContext = createContext<SelectContextType>({
  invalid: false,
  items: [],
  multiple: false,
});

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
  useSelect,
};
