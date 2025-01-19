<template>
  <OdsOdsMeter />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsOdsMeter } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'OdsMeter',
    components: {
      OdsOdsMeter,
    },
  });
</script>
