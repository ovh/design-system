import { type FormFieldProp, FormField as FormFieldRoot } from './components/form-field/FormField';
import { FormFieldError, type FormFieldErrorProp } from './components/form-field-error/FormFieldError';
import { FormFieldHelper, type FormFieldHelperProp } from './components/form-field-helper/FormFieldHelper';
import { FormFieldLabel, type FormFieldLabelProp } from './components/form-field-label/FormFieldLabel';

const FormField = {
  Error: FormFieldError,
  Helper: FormFieldHelper,
  Label: FormFieldLabel,
  Root: FormFieldRoot,
};

export { FormField };
export type { FormFieldProp, FormFieldErrorProp, FormFieldHelperProp, FormFieldLabelProp };
export { useFormField } from './contexts/useFormField';
