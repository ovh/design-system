<template>
  <OdsSpinner />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { OdsSpinner } from '@ovhcloud/ods-components/vue';

export default defineComponent({
  name: 'Spinner',
  components: {
    OdsSpinner,
  },
});
</script>
