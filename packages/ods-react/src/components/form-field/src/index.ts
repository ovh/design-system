import { type FormFieldProp, FormField as FormFieldRoot } from './components/form-field/FormField';
import { FormFieldError, type FormFieldErrorProp } from './components/form-field-error/FormFieldError';
import { FormFieldHelper, type FormFieldHelperProp } from './components/form-field-helper/FormFieldHelper';
import { FormFieldLabel, type FormFieldLabelProp } from './components/form-field-label/FormFieldLabel';
import { FormFieldLabelSubLabel, type FormFieldLabelSubLabelProp } from './components/form-field-label-sub-label/FormFieldLabelSubLabel';

const FormField = Object.assign(FormFieldRoot, {
  Error: FormFieldError,
  Helper: FormFieldHelper,
  Label: FormFieldLabel,
  LabelSubLabel: FormFieldLabelSubLabel,
});

export { FormField };
export { FormFieldError, FormFieldHelper, FormFieldLabel, FormFieldLabelSubLabel };
export type { FormFieldProp, FormFieldErrorProp, FormFieldHelperProp, FormFieldLabelProp, FormFieldLabelSubLabelProp };
export { useFormField } from './contexts/useFormField';
