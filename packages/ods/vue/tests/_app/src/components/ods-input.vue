<template>
  <OdsInput />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsInput } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'Input',
    components: {
      OdsInput,
    },
  });
</script>
