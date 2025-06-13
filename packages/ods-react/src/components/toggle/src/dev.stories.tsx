import { useState } from 'react';
import { FormField, FormFieldError, FormFieldHelper, FormFieldLabel } from '../../form-field/src';
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
  <>
    <Toggle disabled />
    <Toggle defaultChecked disabled />
    <Toggle disabled withLabels />
    <Toggle defaultChecked disabled withLabels />
  </>
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
  <Toggle invalid />
);

export const WithLabels = () => (
  <Toggle withLabels />
);

export const States = () => (
  <>
    <p>Unchecked invalid</p>
    <Toggle invalid />

    <p>Unchecked invalid & disabled</p>
    <Toggle
      disabled
      invalid />

    <p>Checked invalid</p>
    <Toggle
      defaultChecked
      invalid />

    <p>Checked invalid & disabled</p>
    <Toggle
      defaultChecked
      disabled
      invalid />
  </>
);
