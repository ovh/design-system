<template>
  <OdsSelect />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsSelect } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'Select',
    components: {
      OdsSelect,
    },
  });
</script>
