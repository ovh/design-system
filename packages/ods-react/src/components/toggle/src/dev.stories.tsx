import { useState } from 'react';
import { Toggle } from '.';
import { FormField } from '../../form-field/src';
import style from './dev.module.css';

export default {
  component: Toggle,
  title: 'Toggle dev',
};

export const Default = () => (
  <Toggle />
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

export const WithLabels = () => (
  <Toggle withLabel />
);

export const Disabled = () => (
  <Toggle disabled />
);

export const inFormField = () => (
  <FormField invalid>
    <Toggle />
  </FormField>
);
export const Invalid = () => (
  <Toggle invalid />
);
