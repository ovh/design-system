<template>
  <OdsCombobox name="vue-combobox">
    <OdsComboboxItem value="chocolate">
      Chocolate
    </OdsComboboxItem>
    <OdsComboboxItem value="chocolate-with-nuts">
      Chocolate with nuts
    </OdsComboboxItem>
    <OdsComboboxItem value="coconut">
      Coconut
    </OdsComboboxItem>
    <OdsComboboxItem value="light-mint">
      Light mint
    </OdsComboboxItem>
    <OdsComboboxItem value="mint">
      Mint
    </OdsComboboxItem>
    <OdsComboboxItem value="strawberry">
      Strawberry
    </OdsComboboxItem>
    <OdsComboboxItem value="vanilla">
      Vanilla
    </OdsComboboxItem>
    <OdsComboboxItem value="white-chocolate">
      White chocolate
    </OdsComboboxItem>
  </OdsCombobox>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsCombobox, OdsComboboxItem } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'Combobox',
    components: {
      OdsCombobox,
      OdsComboboxItem,
    },
  });
</script>
