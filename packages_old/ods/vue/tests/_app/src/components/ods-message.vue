<template>
  <OdsMessage>
    Some message content
  </OdsMessage>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsMessage } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'Message',
    components: {
      OdsMessage,
    },
  });
</script>
