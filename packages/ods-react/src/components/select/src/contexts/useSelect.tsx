import { type JSX, type ReactNode, createContext, useContext } from 'react';

type SelectMultipleMode = boolean | 'merge'

type SelectOptionItem = {
  customRendererData?: Record<string, any>, // eslint-disable-line @typescript-eslint/no-explicit-any
  disabled?: boolean,
  label: string,
  value: string,
}

type SelectGroupItem = {
  customRendererData?: Record<string, any>, // eslint-disable-line @typescript-eslint/no-explicit-any
  disabled?: boolean,
  label: string,
  options: SelectOptionItem[],
}

type SelectItem = SelectGroupItem | SelectOptionItem;

type SelectContextType = {
  items: SelectItem[],
  multiple: SelectMultipleMode,
}

interface SelectProviderProp {
  children: ReactNode,
  items: SelectItem[],
  multiple: SelectMultipleMode,
}

const SelectContext = createContext<SelectContextType>({
  items: [],
  multiple: false,
});

function SelectProvider({ children, items, multiple }: SelectProviderProp): JSX.Element {
  return (
    <SelectContext.Provider value={{ items, multiple }}>
      { children }
    </SelectContext.Provider>
  );
}

function useSelect(): SelectContextType {
  return useContext(SelectContext);
}

export {
  type SelectGroupItem,
  type SelectItem,
  type SelectMultipleMode,
  type SelectOptionItem,
  SelectProvider,
  useSelect,
};
