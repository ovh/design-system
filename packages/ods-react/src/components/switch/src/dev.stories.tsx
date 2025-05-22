import { useState } from 'react';
import { Switch, SwitchItem, type SwitchValueChangeDetail } from '.';
import style from './dev.module.css';

export default {
  component: Switch,
  title: 'Switch dev',
};

export const ControlledInput = () => {
  const [value, setValue] = useState('item-1');

  function onValueChange({ value }: SwitchValueChangeDetail) {
    setValue(value)
  }

  return (
    <Switch
      onValueChange={ onValueChange }
      value={ value }>
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
  );
};

export const CustomCSS = () => (
  <Switch className={ style['custom-switch'] }>
    <SwitchItem className={ style['custom-switch-item'] } value="item-1">Item 1</SwitchItem>
    <SwitchItem className={ style['custom-switch-item'] } value="item-2">Item 2</SwitchItem>
    <SwitchItem className={ style['custom-switch-item'] } value="item-3">Item 3</SwitchItem>
  </Switch>
);

export const Default = () => (
  <Switch>
    <SwitchItem value="item-1">Item 1</SwitchItem>
    <SwitchItem value="item-2">Item 2</SwitchItem>
    <SwitchItem value="item-3">Item 3</SwitchItem>
  </Switch>
);

export const DefaultValue = () => (
  <Switch defaultValue="item-2">
    <SwitchItem value="item-1">Item 1</SwitchItem>
    <SwitchItem value="item-2">Item 2</SwitchItem>
    <SwitchItem value="item-3">Item 3</SwitchItem>
  </Switch>
);

export const Disabled = () => (
  <>
    <Switch disabled>
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>

    <br /><br />

    <Switch
      defaultValue="item-1"
      disabled>
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
  </>
);

export const Invalid = () => (
  <>
    <Switch size="sm" invalid>
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>

    <br /><br />

    <Switch size="md" invalid>
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
  </>
);

export const Sizes = () => (
  <>
    <Switch size="sm">
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>

    <br /><br />

    <Switch size="md">
      <SwitchItem value="item-1">Item 1</SwitchItem>
      <SwitchItem value="item-2">Item 2</SwitchItem>
      <SwitchItem value="item-3">Item 3</SwitchItem>
    </Switch>
  </>
);
