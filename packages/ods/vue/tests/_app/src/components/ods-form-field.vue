<template>
  <OdsFormField />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsFormField } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'FormField',
    components: {
      OdsFormField,
    },
  });
</script>
