import { OdsFormField, OdsFormFieldError } from '../../src';

export default {
  component: OdsFormFieldError,
  title: 'Tests rendering',
};

export const render = () => (
  <OdsFormField invalid>
    <OdsFormFieldError data-testid="render">
      Render
    </OdsFormFieldError>
  </OdsFormField>
);
