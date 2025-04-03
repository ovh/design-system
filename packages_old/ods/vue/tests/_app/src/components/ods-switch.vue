<template>
  <OdsSwitch @onOdsChange="onOdsChange" name="switch-radio">
    <OdsSwitchItem is-checked value="1">label1</OdsSwitchItem>
    <OdsSwitchItem value="2">label2</OdsSwitchItem>
    <OdsSwitchItem value="3">label3</OdsSwitchItem>
  </OdsSwitch>

  <OdsSwitch @onOdsChange="onOdsChange" isDisabled name="switch-radio-disabled">
    <OdsSwitchItem is-checked value="1">label1</OdsSwitchItem>
    <OdsSwitchItem value="2">label2</OdsSwitchItem>
    <OdsSwitchItem value="3">label3</OdsSwitchItem>
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
