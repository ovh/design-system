<template>
  <OdsText>lorem ipsum</OdsText>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsText } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'Text',
    components: {
      OdsText,
    },
  });
</script>
