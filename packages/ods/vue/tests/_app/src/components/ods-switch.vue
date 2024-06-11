<template>
  <OdsSwitch @onOdsChange="onOdsChange">
    <OdsSwitchItem name="switch-radio" is-checked input-id="label1" value="1">label1</OdsSwitchItem>
    <OdsSwitchItem name="switch-radio" input-id="label2" value="2">label2</OdsSwitchItem>
    <OdsSwitchItem name="switch-radio" input-id="label3" value="3">label3</OdsSwitchItem>
  </OdsSwitch>

  <OdsSwitch @onOdsChange="onOdsChange" isDisabled>
    <OdsSwitchItem name="switch-radio-disabled" is-checked input-id="disabled1" value="1">label1</OdsSwitchItem>
    <OdsSwitchItem name="switch-radio-disabled" input-id="disabled2" value="2">label2</OdsSwitchItem>
    <OdsSwitchItem name="switch-radio-disabled" input-id="disabled3" value="3">label3</OdsSwitchItem>
  </OdsSwitch>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsSwitch, OdsSwitchItem } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'Switch',
    components: {
      OdsSwitch,
      OdsSwitchItem,
    },
    methods: {
      onOdsChange: () => console.log('Vue radio odsChange'),
    }
  });
</script>
