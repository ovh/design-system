import { type JSX, type ReactNode, createContext, useContext, useId, useMemo, useState } from 'react';

type FormFieldRootProp = {
  id?: string,
  invalid?: boolean,
}

type FormFieldContextType = FormFieldRootProp & {
  ariaDescribedBy?: string,
  errorId?: string,
  helperId?: string,
  labelId?: string,
  setErrorId?: (value?: string) => void,
  setHelperId?: (value?: string) => void,
  setLabelId?: (value?: string) => void,
}

interface FormFieldProviderProp extends FormFieldContextType {
  children: ReactNode,
}

const FormFieldContext = createContext<FormFieldContextType>({});

function FormFieldProvider({ children, id, invalid, ...prop }: FormFieldProviderProp): JSX.Element {
  const fieldId = id ?? useId();
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
      id: fieldId,
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
