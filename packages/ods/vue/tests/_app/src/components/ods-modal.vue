<template>
  <OdsModal />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsModal } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'Modal',
    components: {
      OdsModal,
    },
  });
</script>
