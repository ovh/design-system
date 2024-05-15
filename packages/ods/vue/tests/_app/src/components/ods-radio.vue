<template>
  <OdsRadio @odsChange="onOdsChange"/>

  <OdsRadio @odsChange="onOdsChange" isDisabled/>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsRadio } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'Radio',
    components: {
      OdsRadio,
    },
    methods: {
      onOdsChange: () => console.log('Vue radio odsChange'),
    }
  });
</script>
