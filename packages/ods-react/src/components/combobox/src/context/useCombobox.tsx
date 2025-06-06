import { type ReactNode, createContext, useContext } from 'react';

interface ComboboxContextType {
  addNewElementLabel?: string,
  customOptionRenderer?: (arg: ComboboxCustomOptionRendererArg) => JSX.Element;
  getContentProps?: () => Record<string, unknown>;
  highlightResults?: boolean;
  inputValue?: string;
  noResultLabel?: string;
  setInputValue?: (value: string) => void;
  setValue?: (value: string[]) => void;
}

type ComboboxCustomGroupRendererArg = {
  label: string;
  customData?: Record<string, unknown>;
};

type ComboboxCustomOptionRendererArg = {
  label: string;
  customData?: Record<string, unknown>;
};

type ComboboxGroupItem = {
  customRendererData?: Record<string, unknown>;
  disabled?: boolean;
  label: string;
  options: ComboboxOptionItem[];
};

type ComboboxItem = ComboboxOptionItem | ComboboxGroupItem;

type ComboboxOptionItem = {
  label: string;
  value: string;
  customRendererData?: Record<string, unknown>;
  disabled?: boolean;
  /** @internal */
  isInGroup?: boolean;
  /** @internal */
  isNew?: boolean;
};

interface ComboboxProviderProps {
  addNewElementLabel?: string,
  children: ReactNode;
  customOptionRenderer?: (arg: ComboboxCustomOptionRendererArg) => JSX.Element;
  getContentProps?: () => Record<string, unknown>;
  highlightResults?: boolean;
  inputValue?: string;
  noResultLabel?: string;
  setInputValue?: (value: string) => void;
  setValue?: (value: string[]) => void;
}

const ComboboxContext = createContext<ComboboxContextType>({});

function useCombobox(): ComboboxContextType {
  return useContext(ComboboxContext);
}

const ComboboxProvider: React.FC<ComboboxProviderProps> = ({
  addNewElementLabel,
  children,
  customOptionRenderer,
  getContentProps,
  highlightResults,
  inputValue,
  noResultLabel,
  setInputValue,
  setValue,
}) => {
  return (
    <ComboboxContext.Provider value={{
      addNewElementLabel,
      customOptionRenderer,
      getContentProps,
      highlightResults,
      inputValue,
      noResultLabel,
      setInputValue,
      setValue,
    }}>
      { children }
    </ComboboxContext.Provider>
  );
};

export {
  ComboboxProvider,
  type ComboboxCustomGroupRendererArg,
  type ComboboxCustomOptionRendererArg,
  type ComboboxGroupItem,
  type ComboboxItem,
  type ComboboxOptionItem,
  useCombobox,
};
