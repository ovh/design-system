<template>
  <OdsRange name="ods-range"/>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsRange } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'Range',
    components: {
      OdsRange,
    },
  });
</script>
