<template>
  <OdsSkeleton />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsSkeleton } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'Skeleton',
    components: {
      OdsSkeleton,
    },
  });
</script>
