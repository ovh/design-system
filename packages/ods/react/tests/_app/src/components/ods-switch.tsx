import React from 'react-dom/client';
import { OdsSwitch, OdsSwitchItem } from 'ods-components-react';

const Switch = () => {
  function onOdsChange() {
    console.log('React switch odsChange');
  }

  return (
    <>
    <OdsSwitch onOdsChange={ onOdsChange }>
      <OdsSwitchItem name="switch-radio" input-id="label1" value="1">label1</OdsSwitchItem>
      <OdsSwitchItem name="switch-radio" input-id="label2" value="2">label2</OdsSwitchItem>
      <OdsSwitchItem name="switch-radio" input-id="label3" value="3">label3</OdsSwitchItem>
    </OdsSwitch>

    <OdsSwitch isDisabled onOdsChange={ onOdsChange }>
      <OdsSwitchItem name="switch-radio-disabled" input-id="disabled1" value="1">label1</OdsSwitchItem>
      <OdsSwitchItem name="switch-radio-disabled" input-id="disabled2" value="2">label2</OdsSwitchItem>
      <OdsSwitchItem name="switch-radio-disabled" input-id="disabled3" value="3">label3</OdsSwitchItem>
    </OdsSwitch>
    </>
  );
};

export default Switch;
