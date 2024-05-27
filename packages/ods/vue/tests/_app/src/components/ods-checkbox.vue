<template>
  <OdsCheckbox @odsChange="onOdsChange"/>

  <OdsCheckbox @odsChange="onOdsChange" isDisabled/>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsCheckbox } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'Checkbox',
    components: {
      OdsCheckbox,
    },
    methods: {
      onOdsChange: () => console.log('Vue checkbox odsChange'),
    }
  });
</script>
