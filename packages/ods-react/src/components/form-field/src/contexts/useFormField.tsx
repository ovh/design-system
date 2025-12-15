import { type JSX, type ReactNode, createContext, useContext, useId, useMemo, useState } from 'react';

type FormFieldRootProp = {
  /**
   * The field id.
   */
  id?: string,
  /**
   * Whether the component is in error state.
   */
  invalid?: boolean,
}

interface FormFieldProviderProp extends FormFieldRootProp {
  children: ReactNode,
}

type FormFieldContextType = Omit<FormFieldProviderProp, 'children'> & {
  ariaDescribedBy?: string,
  errorId?: string,
  helperId?: string,
  labelId?: string,
  setErrorId?: (value?: string) => void,
  setHelperId?: (value?: string) => void,
  setLabelId?: (value?: string) => void,
};

const FormFieldContext = createContext<FormFieldContextType>({});

function FormFieldProvider({ children, id, invalid, ...prop }: FormFieldProviderProp): JSX.Element {
  const fieldId = useId();
  const [errorId, setErrorId] = useState<string | undefined>();
  const [helperId, setHelperId] = useState<string | undefined>();
  const [labelId, setLabelId] = useState<string | undefined>();

  const ariaDescribedBy = useMemo(() => {
    return `${helperId || ''} ${invalid && errorId ? errorId : ''}`.trim();
  }, [errorId, helperId, invalid]);

  return (
    <FormFieldContext.Provider value={{
      ariaDescribedBy,
      errorId,
      helperId,
      id: id ?? fieldId,
      invalid,
      labelId,
      setErrorId,
      setHelperId,
      setLabelId,
      ...prop,
    }}>
      { children }
    </FormFieldContext.Provider>
  );
}

function useFormField(): FormFieldContextType {
  return useContext(FormFieldContext);
}

export {
  type FormFieldContextType,
  FormFieldProvider,
  type FormFieldRootProp,
  useFormField,
};
