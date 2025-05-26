import { useState } from 'react';
import { FormField, FormFieldError, FormFieldLabel } from '../../form-field/src';
import { TEXT_PRESET, Text } from '../../text/src';
import { Toggle } from '.';
import style from './dev.module.css';

export default {
  component: Toggle,
  title: 'Toggle dev',
};

export const CustomLabel = () => (
  <>
    <Text
      htmlFor="toggle"
      preset={ TEXT_PRESET.label }>
      Label:
    </Text>

    <Toggle id="toggle" />
  </>
);

export const CustomStyle = () => (
  <Toggle className={ style[ 'custom-toggle' ] } />
);

export const Controlled = () => {
  const [isToggled, setIsToggled] = useState(false);

  return <>
    <Toggle checked={ isToggled } onCheckedChange={ () => setIsToggled(!isToggled) } />
    <p>Toggled: { isToggled.toString() }</p>
  </>;
};

export const Default = () => (
  <Toggle />
);

export const Disabled = () => (
  <Toggle disabled />
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
          My toggle:
        </FormFieldLabel>

        <Toggle />

        <FormFieldError>
          Error
        </FormFieldError>
      </FormField>
    </>
  );
};

export const Invalid = () => (
  <Toggle invalid />
);
export const WithLabels = () => (
  <Toggle withLabels />
);
