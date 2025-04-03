<template>
  <OdsTabs>
    <OdsTab>Tab 1</OdsTab>
    <OdsTab>Tab 2</OdsTab>
    <OdsTab>Tab 3</OdsTab>
  </OdsTabs>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsTab, OdsTabs } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'Tabs',
    components: {
      OdsTab,
      OdsTabs,
    },
  });
</script>
