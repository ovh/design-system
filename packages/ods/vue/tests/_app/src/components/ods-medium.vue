<template>
  <OdsMedium alt="Placeholder image"
             src="https://placehold.co/600x400" />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsMedium } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'Medium',
    components: {
      OdsMedium,
    },
  });
</script>
