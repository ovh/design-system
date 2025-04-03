<template>
  <div id="trigger">
    Trigger
  </div>

  <OdsTooltip position="bottom-start"
              trigger-id="trigger"
              with-arrow>
    Tooltip content
  </OdsTooltip>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsTooltip } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'Tooltip',
    components: {
      OdsTooltip,
    },
  });
</script>
