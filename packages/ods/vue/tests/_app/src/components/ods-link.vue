<template>
  <OdsLink href="https://www.ovhcloud.com/fr/" label="OVH link" />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsLink } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'Link',
    components: {
      OdsLink,
    },
  });
</script>
