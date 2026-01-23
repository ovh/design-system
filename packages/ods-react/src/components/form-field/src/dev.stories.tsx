import { type FormEvent, useRef } from 'react';
import { FormField, FormFieldError, FormFieldHelper, FormFieldLabel, FormFieldLabelAddon } from '.';
import { TEXT_PRESET, Text } from '../../text/src';
import { Textarea } from '../../textarea/src';
import style from './dev.module.css';

export default {
  component: FormField,
  title: 'FormField dev',
};

export const Default = () => (
  <FormField>
    <Textarea />
  </FormField>
);

export const FullForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    const formData = new FormData(formRef.current!);

    for (const [key, value] of formData) {
      console.log(`${key}: ${value}`)
    }
  }

  return (
    <form
      onSubmit={ onSubmit }
      ref={ formRef }>
      <FormField>
        <FormFieldLabel>
          My textarea
          <FormFieldLabelAddon>
            - mandatory
          </FormFieldLabelAddon>
        </FormFieldLabel>

        <Textarea name="textarea" minLength={ 2 } required />

        <FormFieldHelper>
          Some helper text
        </FormFieldHelper>

        <FormFieldError>
          Some error text
        </FormFieldError>
      </FormField>

      <button type="submit">
        Submit
      </button>
    </form>
  );
};

export const Invalid = () => (
  <FormField invalid>
    <Textarea />

    <FormFieldHelper>
      <Text preset={ TEXT_PRESET.caption }>
        Some helper text
      </Text>
    </FormFieldHelper>

    <FormFieldError>
      Some error text
    </FormFieldError>
  </FormField>
);

export const CustomStyle = () => (
  <FormField className={ style['custom-form-field'] }>
    <FormFieldLabel className={ style['custom-form-field-label'] }>
      Custom Styled Field
    </FormFieldLabel>

    <Textarea placeholder="Type something here..." />

    <FormFieldHelper className={ style['custom-form-field-helper'] }>
      This form field has custom styling applied
    </FormFieldHelper>

    <FormFieldError className={ style['custom-form-field-error'] }>
      This is how a custom styled error would look
    </FormFieldError>
  </FormField>
);
