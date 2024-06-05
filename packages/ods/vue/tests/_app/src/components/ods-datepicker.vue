<template>
  <OdsDatepicker />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsDatepicker } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'Datepicker',
    components: {
      OdsDatepicker,
    },
  });
</script>
