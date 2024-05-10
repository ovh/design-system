<template>
  <OdsProgressBar />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsProgressBar } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'ProgressBar',
    components: {
      OdsProgressBar,
    },
  });
</script>
