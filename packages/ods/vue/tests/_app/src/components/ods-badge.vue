<template>
  <OdsBadge label="My badge" />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsBadge } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'Badge',
    components: {
      OdsBadge,
    },
  });
</script>
