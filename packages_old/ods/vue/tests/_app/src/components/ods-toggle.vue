<template>
  <OdsToggle />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsToggle } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'Toggle',
    components: {
      OdsToggle,
    },
  });
</script>
