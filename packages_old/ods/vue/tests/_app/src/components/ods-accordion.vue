<template>
  <OdsAccordion>
    <span slot="summary">Hello, world!</span>

    <OdsText preset="span">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
    </OdsText>
  </OdsAccordion>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsAccordion, OdsText } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'Accordion',
    components: {
      OdsAccordion,
      OdsText
    },
  });
</script>
