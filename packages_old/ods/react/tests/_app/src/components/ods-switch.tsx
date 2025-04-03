import React from 'react-dom/client';
import { OdsSwitch, OdsSwitchItem } from 'ods-components-react';

const Switch = () => {
  function onOdsChange() {
    console.log('React switch odsChange');
  }

  return (
    <>
    <OdsSwitch onOdsChange={ onOdsChange } name="switch-radio">
      <OdsSwitchItem value="1">label1</OdsSwitchItem>
      <OdsSwitchItem value="2">label2</OdsSwitchItem>
      <OdsSwitchItem value="3">label3</OdsSwitchItem>
    </OdsSwitch>

    <OdsSwitch isDisabled onOdsChange={ onOdsChange } name="switch-radio-disabled" >
      <OdsSwitchItem value="1">label1</OdsSwitchItem>
      <OdsSwitchItem value="2">label2</OdsSwitchItem>
      <OdsSwitchItem value="3">label3</OdsSwitchItem>
    </OdsSwitch>
    </>
  );
};

export default Switch;
