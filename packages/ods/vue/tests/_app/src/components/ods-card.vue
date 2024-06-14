<template>
  <OdsCard>
    <OdsText preset='heading-6'>Hello, world!</OdsText>
  </OdsCard>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsCard, OdsText } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'Card',
    components: {
      OdsCard,
      OdsText
    },
  });
</script>
