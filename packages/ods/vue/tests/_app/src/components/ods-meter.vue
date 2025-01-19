<template>
  <OdsMeter />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsMeter } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'Meter',
    components: {
      OdsMeter,
    },
  });
</script>
