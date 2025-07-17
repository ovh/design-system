import { type ChangeEvent, useState } from 'react';
import { FormField, FormFieldError, FormFieldHelper, FormFieldLabel } from '../../form-field/src';
import { INPUT_I18N } from '../../input/src';
import { TEXT_PRESET, Text } from '../../text/src';
import { Password } from '.';
import style from './dev.module.css';

export default {
  component: Password,
  title: 'Password dev',
};

export const Actions = () => (
  <>
    <div>
      <label>Clearable alone: </label>
      <Password
        clearable
        defaultValue="value" />
    </div>

    <div>
      <label>Clearable and loading: </label>
      <Password
        clearable
        defaultValue="value"
        loading />
    </div>

    <div>
      <label>Loading alone: </label>
      <Password loading />
    </div>
  </>
);

export const Clearable = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Password
      clearable
      onChange={ (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
      } }
      onClear={ () => {
        setInputValue('');
      } }
      value={ inputValue } />
  );
};

export const ControlledUncontrolled = () => {
  const [controlledValue, setControlledValue] = useState('');

  return (
    <>
      <label>Controlled</label>
      <Password
        clearable
        onChange={ (e: ChangeEvent<HTMLInputElement>) => setControlledValue(e.target.value) }
        onClear={ () => {
          setControlledValue('');
        } }
        value={ controlledValue } />

      <br /><br />

      <label>Uncontrolled</label>
      <Password
        clearable
        onChange={ () => console.log('Uncontrolled change') }
        onClear={ () => console.log('cleared') } />
    </>
  );
};

export const CustomLabel = () => (
  <>
    <Text
      htmlFor="password"
      preset={ TEXT_PRESET.label }>
      Label:
    </Text>

    <Password id="password" />
  </>
);

export const CustomStyle = () => (
  <Password
    className={ style[ 'custom-password' ] }
    placeholder="Custom password"
  />
);

export const Default = () => (
  <Password />
);

export const Disabled = () => (
  <Password disabled />
);

export const DisabledActions = () => (
  <Password
    clearable
    defaultValue="value"
    disabled
    maskInitialState="open" />
);

export const I18n = () => (
  <Password i18n={{
    [INPUT_I18N.maskButtonHide]: 'Hide away your password',
    [INPUT_I18N.maskButtonShow]: 'Show me your password'
  }} />
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
          My password:
        </FormFieldLabel>

        <Password />

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

export const Readonly = () => (
  <Password readOnly />
);

export const States = () => (
  <>
    <Password
      disabled
      placeholder="Disabled & Readonly"
      readOnly />

    <Password
      disabled
      invalid
      placeholder="Disabled & Invalid" />

    <Password
      invalid
      placeholder="Readonly & Invalid"
      readOnly />

    <Password
      disabled
      placeholder="Disabled & Readonly & Invalid"
      invalid
      readOnly />
  </>
);
