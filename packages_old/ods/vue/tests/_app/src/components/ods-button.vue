<template>
  <OdsButton label="My button"
             @click="onClick" />

  <OdsButton is-disabled
             label="My button"
             @click="onClick" />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsButton } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'Button',
    components: {
      OdsButton,
    },
    methods: {
      onClick: () => console.log('Vue button click'),
    },
  });
</script>
