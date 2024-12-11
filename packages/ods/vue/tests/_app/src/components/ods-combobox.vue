<template>
  <OdsCombobox />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsCombobox } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'Combobox',
    components: {
      OdsCombobox,
    },
  });
</script>
