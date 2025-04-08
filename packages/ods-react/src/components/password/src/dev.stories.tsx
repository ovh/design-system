import { type ChangeEvent, useState } from 'react';
import { OdsPassword } from '.';

export default {
  component: OdsPassword,
  title: 'OdsPassword dev',
};

export const Actions = () => (
  <>
    <div>
      <label>Clearable alone: </label>
      <OdsPassword
        clearable
        defaultValue="value" />
    </div>

    <div>
      <label>Clearable and loading: </label>
      <OdsPassword
        clearable
        defaultValue="value"
        loading />
    </div>

    <div>
      <label>Loading alone: </label>
      <OdsPassword loading />
    </div>
  </>
);

export const Clearable = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <OdsPassword
      clearable
      onChange={ (e: ChangeEvent<HTMLInputElement>) => { setInputValue(e.target.value)} }
      onClear={ () => { setInputValue('') } }
      value={ inputValue } />
  );
};

export const ControlledUncontrolled = () => {
  const [controlledValue, setControlledValue] = useState('');

  return (
    <>
      <label>Controlled</label>
      <OdsPassword
        clearable
        onChange={ (e: ChangeEvent<HTMLInputElement>) => setControlledValue(e.target.value) }
        onClear={ () => { setControlledValue('') } }
        value={ controlledValue } />

      <br /><br />

      <label>Uncontrolled</label>
      <OdsPassword
        clearable
        onChange={ () => console.log('Uncontrolled change') }
        onClear={ () => console.log('cleared') } />
    </>
  );
};

export const Default = () => (
  <OdsPassword />
);

export const Disabled = () => (
  <OdsPassword disabled />
);

export const DisabledActions = () => (
  <OdsPassword
    clearable
    defaultValue="value"
    disabled
    maskInitialState="open" />
);

export const Readonly = () => (
  <OdsPassword readOnly />
);
