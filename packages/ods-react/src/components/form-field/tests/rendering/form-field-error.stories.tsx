import { FormField, FormFieldError, FormFieldHelper, FormFieldLabel } from '../../src';

export default {
  component: FormFieldError,
  title: 'Tests rendering',
};

export const render = () => (
  <FormField invalid>
    <FormFieldLabel data-testid="render">
      Label
    </FormFieldLabel>

    <FormFieldHelper>
      Helper
    </FormFieldHelper>

    <FormFieldError>
      Error
    </FormFieldError>
  </FormField>
);
