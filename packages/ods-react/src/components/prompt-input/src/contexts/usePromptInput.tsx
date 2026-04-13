import { type JSX, type ReactNode, createContext, useEffect, useState } from 'react';
import { useContext } from '../../../../utils/context';

interface PromptInputRootProp {
  /**
   * The initial selected value(s). Use when you don't need to control the selected value(s) of the combobox.
   */
  defaultValue?: string,
  /**
   * Whether the component is disabled.
   */
  disabled?: boolean;
  /**
   * Whether the component is in loading state.
   */
  loading?: boolean;
  /**
   * The name of the form element. Useful for form submission.
   */
  name?: string,
  /**
   * Callback fired when the input is submitted.
   */
  onInputSubmit?: (value: string) => void;
  /**
   * Callback fired when the value(s) changes.
   */
  onValueChange?: (value: string) => void;
  /**
   * Callback fired when a file change is triggered.
   */
  onFileChange?: (value: File[]) => void;
  /**
   * Whether the component is readonly.
   */
  readOnly?: boolean;
  /**
   * Whether the component is required.
   */
  required?: boolean,
}

interface PromptInputProviderProp extends PromptInputRootProp {
  children: ReactNode;
}

type PromptInputContextType = Omit<PromptInputProviderProp, 'children'> & {
  inputValue: string;
  fileCollection: File[];
  setInputValue: (value: string) => void;
  setFileCollection: (files: File[]) => void;
};

const PromptInputContext = createContext<PromptInputContextType | undefined>(undefined);

const PromptInputProvider = ({
  children,
  disabled,
  loading,
  onInputSubmit,
  onFileChange,
  onValueChange,
  readOnly,
  required,
  ...props
}: PromptInputProviderProp): JSX.Element => {
  const [fileCollection, setFileCollection] = useState<File[]>([]);
  const [inputValue, setInputValue] = useState(props.defaultValue ?? '');

  useEffect(() => {
    onFileChange?.(fileCollection);
    onValueChange?.(inputValue);
  }, [inputValue, onValueChange, onFileChange, fileCollection]);

  return (
    <PromptInputContext.Provider value={{
      disabled,
      fileCollection,
      inputValue,
      loading,
      onFileChange,
      onInputSubmit,
      onValueChange,
      readOnly,
      required,
      setFileCollection,
      setInputValue,
      ...props,
    }}
    >
      {children}
    </PromptInputContext.Provider>
  );
};

function usePromptInput(): PromptInputContextType {
  return useContext(PromptInputContext);
}

export { PromptInputProvider, type PromptInputRootProp, usePromptInput };
