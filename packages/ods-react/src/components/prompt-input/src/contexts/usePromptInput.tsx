import { type JSX, type ReactNode, createContext, useState } from 'react';
import { useContext } from '../../../../utils/context';

interface PromptInputInputSubmitDetails {
  inputValue: string;
}

interface PromptInputValueChangeDetails {
  inputValue: string;
}

interface PromptInputFileChangeDetails {
  files: File[];
}

interface PromptInputRootProp {
  /**
   * The initial textarea value. Use when you don't need to control the value of the textarea.
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
   * The name of the textarea form element. Useful for form submission.
   */
  name?: string,
  /**
   * Callback fired when the prompt input is submitted.
   */
  onInputSubmit?: (detail: PromptInputInputSubmitDetails) => void;
  /**
   * Callback fired when the prompt input text value changes.
   */
  onValueChange?: (detail: PromptInputValueChangeDetails) => void;
  /**
   * Callback fired when a file change is triggered on the file-upload button.
   */
  onFileChange?: (detail: PromptInputFileChangeDetails) => void;
  /**
   * Whether the component is readonly.
   */
  readOnly?: boolean;
  /**
   * Array of the files associated with the prompt input.
   */
  fileCollection?: File[];
}

interface PromptInputProviderProp extends PromptInputRootProp {
  children: ReactNode;
}

type PromptInputContextType = Omit<PromptInputProviderProp, 'children'> & {
  inputValue: string;
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
  ...props
}: PromptInputProviderProp): JSX.Element => {
  const [fileCollection, setFileCollection] = useState<File[]>([]);
  const [inputValue, setInputValue] = useState(props.defaultValue ?? '');

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

export {
  PromptInputProvider,
  type PromptInputRootProp,
  type PromptInputInputSubmitDetails,
  type PromptInputValueChangeDetails,
  type PromptInputFileChangeDetails,
  usePromptInput,
};
