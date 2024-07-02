<template>
  <OdsPagination defaultCurrentPage={3} totalPages={21} />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsPagination } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'Pagination',
    components: {
      OdsPagination,
    },
  });
</script>
