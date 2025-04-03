<template>
  <div id="trigger">
    Trigger
  </div>

  <OdsPopover position="bottom-start"
              trigger-id="trigger"
              with-arrow>
    Popover content
  </OdsPopover>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsPopover } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'Popover',
    components: {
      OdsPopover,
    },
  });
</script>
