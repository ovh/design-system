import { type JSX, type ReactNode, createContext, useContext, useEffect, useId, useMemo, useState } from 'react';

type FormFieldRootProp = {
  /**
   * The id given to the wrapped field, generated when omitted. An id set on the field itself takes precedence.
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
  /**
   * The id of the labelable element the field actually renders, `null` when it has none.
   */
  fieldId?: string | null,
  helperId?: string,
  labelId?: string,
  setErrorId?: (value?: string) => void,
  setFieldId?: (value?: string | null) => void,
  setHelperId?: (value?: string) => void,
  setLabelId?: (value?: string) => void,
};

const FormFieldContext = createContext<FormFieldContextType>({});

function FormFieldProvider({ children, id, invalid, ...prop }: FormFieldProviderProp): JSX.Element {
  const defaultId = useId();
  const [errorId, setErrorId] = useState<string | undefined>();
  const [fieldId, setFieldId] = useState<string | null | undefined>();
  const [helperId, setHelperId] = useState<string | undefined>();
  const [labelId, setLabelId] = useState<string | undefined>();

  const ariaDescribedBy = useMemo(() => {
    return `${helperId || ''} ${invalid && errorId ? errorId : ''}`.trim();
  }, [errorId, helperId, invalid]);

  return (
    <FormFieldContext.Provider value={{
      ariaDescribedBy,
      errorId,
      fieldId,
      helperId,
      id: id ?? defaultId,
      invalid,
      labelId,
      setErrorId,
      setFieldId,
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

/**
 * Registers the id of the element the FormFieldLabel must target. Pass `null` when the field
 * renders no labelable element, it then has to read `labelId` itself.
 */
function useFormFieldId(fieldId: string | null): void {
  const { setFieldId } = useFormField();

  useEffect(() => {
    setFieldId?.(fieldId);

    return (): void => setFieldId?.(undefined);
  }, [fieldId, setFieldId]);
}

export {
  type FormFieldContextType,
  FormFieldProvider,
  type FormFieldRootProp,
  useFormField,
  useFormFieldId,
};
