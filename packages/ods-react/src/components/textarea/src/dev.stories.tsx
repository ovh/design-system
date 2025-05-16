import { FormField, FormFieldLabel } from '../../form-field/src';
import { Textarea } from '.';
import style from './dev.module.css';

export default {
  component: Textarea,
  title: 'Textarea dev',
};

export const CustomStyle = () => (
  <Textarea className={ style['custom-textarea'] } placeholder={'My custom textarea'} />
);

export const Default = () => (
  <Textarea />
);

export const Disabled = () => (
  <Textarea disabled />
);

export const InFormField = () => (
  <FormField invalid>
    <FormFieldLabel>
      My textarea:
    </FormFieldLabel>

    <Textarea />
  </FormField>
);

export const Invalid = () => (
  <Textarea invalid />
);

export const Readonly = () => (
  <Textarea readOnly />
);
