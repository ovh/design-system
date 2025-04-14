import { FormField, FormFieldError } from '../../src';

export default {
  component: FormFieldError,
  title: 'Tests rendering',
};

export const render = () => (
  <FormField invalid>
    <FormFieldError data-testid="render">
      Render
    </FormFieldError>
  </FormField>
);
