<template>
  <!-- FIXME custom event not working in vue -->
  <OdsQuantity name="ods-input" @ods-value-change="() => console.log('test')" />

  <OdsQuantity name="ods-input-disabled" is-disabled @ods-value-change="onOdsChange" />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsQuantity } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'Quantity',
    components: {
      OdsQuantity,
    },
    methods: {
      onOdsChange() {
        console.log('Vue quantity odsChange');
      }
    }
  });
</script>
