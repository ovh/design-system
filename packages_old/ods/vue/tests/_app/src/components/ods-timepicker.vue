<template>
  <OdsTimepicker />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsTimepicker } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'Timepicker',
    components: {
      OdsTimepicker,
    },
  });
</script>
