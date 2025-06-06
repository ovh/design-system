import { type FormEvent, useRef } from 'react';
import { FormField, FormFieldError, FormFieldHelper, FormFieldLabel } from '.';
import { TEXT_PRESET, Text } from '../../text/src';
import { Textarea } from '../../textarea/src';

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
