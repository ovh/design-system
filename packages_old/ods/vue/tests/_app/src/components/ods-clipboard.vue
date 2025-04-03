<template>
  <OdsClipboard />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsClipboard } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'Clipboard',
    components: {
      OdsClipboard,
    },
  });
</script>
