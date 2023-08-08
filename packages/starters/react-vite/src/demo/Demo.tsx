import React from 'react';

// you can import react proxy from the independent package
import { OsdsButton } from '@ovhcloud/ods-components/button/react';
import { OsdsTile } from '@ovhcloud/ods-components/tile/react';

// you can import multiple react proxies from the grouped package
import {
  OsdsCheckbox,
  OsdsCheckboxButton,
  OsdsMessage,
  OsdsRadio,
  OsdsRadioGroup,
  OsdsToggle
} from '@ovhcloud/ods-stencil/components/react';

import { OsdsFlag } from '@ovhcloud/ods-component-flag/react'

// each type you import types from ODS, you will need to import the core
import { Ods, OdsCheckboxButtonSize, OdsExternalLogger, OdsMessageType, ODS_COUNTRY_ISO_CODE } from '@ovhcloud/ods-core';

// each theming related type you use, you will need to import the theming
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

import TabsUsage from './Tabs';
import CartManagerUsage from './CartManagerUsage';
import CartUsage from './CartUsage';
import MyButton from './MyButton';

// enable logging of ODS and custom logger
Ods.instance().logging(true);

// custom logger: using the logger embedded inside ODS
const logger: OdsExternalLogger = new (Ods.instance().logger)('[my react Demo]');

function handleOdsButtonClick() {
  logger.log('click on OsdsButton');
}

function handleMyButtonClick() {
  logger.log('click on myButton');
}


const Demo: React.FC = () => (
  <div className={'ods-demo'}>
    <h3 className={'ods-subheading-200'}>ODS React components</h3>
    <h5>Ods Button</h5>
    <div>
      <OsdsButton color={OdsThemeColorIntent.primary} onClick={handleOdsButtonClick}>ODS button</OsdsButton>
      <MyButton onClick={handleMyButtonClick}>My React Button based on ODS</MyButton>
    </div>

    <h5>Ods Flag</h5>
    <div style={{height: 20, width: 30, margin: 'auto'}}>
      <OsdsFlag iso={ODS_COUNTRY_ISO_CODE.PL} />
    </div>

    <h5>Ods Message</h5>
    <OsdsMessage type={OdsMessageType.info}>You can use a message here</OsdsMessage>

    <h5>Ods Tile in radio group</h5>
    <OsdsRadioGroup>
      <OsdsRadio value="A">
        <OsdsTile hoverable>Radio-group with Radio & Tile in it (option A)</OsdsTile>
      </OsdsRadio>
      <OsdsRadio value="B">
        <OsdsTile hoverable>Radio-group with Radio & Tile in it (option B)</OsdsTile>
      </OsdsRadio>
    </OsdsRadioGroup>

    <h5>Ods CheckboxButton in radio group</h5>
    <OsdsRadioGroup>
      <OsdsRadio value="A">
        <OsdsCheckboxButton size={OdsCheckboxButtonSize.sm} interactive>
          <span slot={'end'}>Option A</span>
        </OsdsCheckboxButton>
      </OsdsRadio>
      <OsdsRadio value="B">
        <OsdsCheckboxButton size={OdsCheckboxButtonSize.sm} interactive>
          <span slot={'end'}>Option B</span>
        </OsdsCheckboxButton>
      </OsdsRadio>
    </OsdsRadioGroup>

    <h5>Ods Toggle</h5>
    <OsdsCheckbox value="A" checked>
      <OsdsToggle></OsdsToggle>
    </OsdsCheckbox>

    <h5>Ods Cart</h5>
    <CartUsage></CartUsage>

    <h5>Ods CartManager</h5>
    <CartManagerUsage></CartManagerUsage>

    <h5>Ods Tabs Usage</h5>
    <TabsUsage/>
  </div>
);

export default Demo;
