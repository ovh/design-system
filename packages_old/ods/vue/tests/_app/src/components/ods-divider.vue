<template>
  <OdsDivider />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsDivider } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'Divider',
    components: {
      OdsDivider,
    },
  });
</script>
