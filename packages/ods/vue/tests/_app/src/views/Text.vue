<template>
  <OdsText>Ods Text Vue</OdsText>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { OdsText } from '@ovhcloud/ods-components/vue';

export default defineComponent({
  name: 'App',
  components: {
    OdsText,
  },
});
</script>
