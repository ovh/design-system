import { type FormEvent, useRef } from 'react';
import { OdsFormField, OdsFormFieldError, OdsFormFieldHelper, OdsFormFieldLabel } from '.';
import { ODS_TEXT_PRESET, OdsText } from '../../text/src';
import { OdsTextarea } from '../../textarea/src';

export default {
  component: OdsFormField,
  title: 'OdsFormField dev',
};

export const Default = () => (
  <OdsFormField>
    <OdsTextarea />
  </OdsFormField>
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
      <OdsFormField>
        <OdsFormFieldLabel>
          My textarea
        </OdsFormFieldLabel>

        <OdsTextarea name="textarea" minLength={ 2 } required />

        <OdsFormFieldHelper>
          Some helper text
        </OdsFormFieldHelper>

        <OdsFormFieldError>
          Some error text
        </OdsFormFieldError>
      </OdsFormField>

      <button type="submit">
        Submit
      </button>
    </form>
  );
};

export const Invalid = () => (
  <OdsFormField invalid>
    <OdsTextarea />

    <OdsFormFieldHelper>
      <OdsText preset={ ODS_TEXT_PRESET.caption }>
        Some helper text
      </OdsText>
    </OdsFormFieldHelper>

    <OdsFormFieldError>
      Some error text
    </OdsFormFieldError>
  </OdsFormField>
);
