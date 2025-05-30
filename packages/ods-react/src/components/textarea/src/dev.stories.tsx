import { useState } from 'react';
import { FormField, FormFieldError, FormFieldHelper, FormFieldLabel } from '../../form-field/src';
import { TEXT_PRESET, Text } from '../../text/src';
import { Textarea } from '.';
import style from './dev.module.css';

export default {
  component: Textarea,
  title: 'Textarea dev',
};

export const CustomLabel = () => (
  <>
    <Text
      htmlFor="textarea"
      preset={ TEXT_PRESET.label }>
      Label:
    </Text>

    <Textarea id="textarea" />
  </>
);

export const CustomStyle = () => (
  <Textarea
    className={ style['custom-textarea'] }
    placeholder="My custom textarea" />
);

export const Default = () => (
  <Textarea />
);

export const Disabled = () => (
  <Textarea disabled />
);

export const InFormField = () => {
  const [isInvalid, setIsInvalid] = useState(false);

  return (
    <>
      <button onClick={ () => setIsInvalid((v) => !v) }>
        Toggle validity
      </button>

      <FormField invalid={ isInvalid }>
        <FormFieldLabel>
          My textarea:
        </FormFieldLabel>

        <Textarea />

        <FormFieldHelper>
          Help text
        </FormFieldHelper>

        <FormFieldError>
          Error message
        </FormFieldError>
      </FormField>
    </>
  );
};

export const Invalid = () => (
  <Textarea invalid />
);

export const Readonly = () => (
  <Textarea readOnly />
);
