<script setup lang="ts">
// you can import react proxy from the independent package
import { OsdsButton } from '@ovhcloud/ods-components/button/vue'
import { OsdsTile } from '@ovhcloud/ods-components/tile/vue';
import { OsdsCheckbox } from '@ovhcloud/ods-components/checkbox/vue';
import { OsdsCheckboxButton } from '@ovhcloud/ods-components/checkbox-button/vue';
import { ODS_CHECKBOX_BUTTON_SIZE } from '@ovhcloud/ods-components/checkbox-button';

// you can import multiple react proxies from the grouped package
import {
  OsdsMessage,
  OsdsRadio,
  OsdsRadioGroup,
  OsdsToggle,
} from '@ovhcloud/ods-stencil/components/vue';
import { OsdsFlag } from '@ovhcloud/ods-component-flag/vue'

// each type you import types from ODS, you will need to import the core
import { Ods, OdsExternalLogger, OdsMessageType, ODS_COUNTRY_ISO_CODE } from '@ovhcloud/ods-core';

// each theming related type you use, you will need to import the theming
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';


import CartManagerUsage from './CartManagerUsage.vue';
import CartUsage from './CartUsage.vue';
import MyButton from './MyButton.vue';

// custom logger: using the logger embedded inside ODS
const logger: OdsExternalLogger = new (Ods.instance().logger)('[my vue Demo]');

function handleOdsButtonClick() {
  logger.log('click on OsdsButton');
}

function handleMyButtonClick() {
  logger.log('click on myButton');
}
</script>

<template>

  <div class="ods-demo">
    <h3 class="ods-subheading-200">ODS React components</h3>
    <h5>Ods Button</h5>
    <div>
      <OsdsButton :color="OdsThemeColorIntent.primary" @click="handleOdsButtonClick">ODS button</OsdsButton>
      <MyButton @click="handleMyButtonClick" id="my-button">My Vue Button based on ODS</MyButton>
    </div>

    <h5>Ods Flag</h5>
    <div style="height: 20px; width: 30px; margin: auto">
      <OsdsFlag :iso="ODS_COUNTRY_ISO_CODE.PL" />
    </div>

    <h5>Ods Message</h5>
    <OsdsMessage :type="OdsMessageType.info">You can use a message here</OsdsMessage>

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
        <OsdsCheckboxButton :size="ODS_CHECKBOX_BUTTON_SIZE.sm" interactive>
          <span slot="end">Option A</span>
        </OsdsCheckboxButton>
      </OsdsRadio>
      <OsdsRadio value="B">
        <OsdsCheckboxButton :size="ODS_CHECKBOX_BUTTON_SIZE.sm" interactive>
          <span slot="end">Option B</span>
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
  </div>
</template>

<style scoped>

</style>
