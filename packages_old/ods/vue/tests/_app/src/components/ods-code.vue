<template>
  <OdsCode>
    Some code to copy
  </OdsCode>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsCode } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'Code',
    components: {
      OdsCode,
    },
  });
</script>
