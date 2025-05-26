import { type JSX, type ReactNode, createContext, useContext, useId } from 'react';

type FormFieldRootProp = {
  id?: string,
  invalid?: boolean,
}

type FormFieldContextType = FormFieldRootProp

interface TimepickerProviderProp extends FormFieldContextType {
  children: ReactNode,
}

const FormFieldContext = createContext<FormFieldContextType>({});

function FormFieldProvider({ children, id, ...prop }: TimepickerProviderProp): JSX.Element {
  const fieldId = id ?? useId();

  return (
    <FormFieldContext.Provider value={{
      id: fieldId,
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
