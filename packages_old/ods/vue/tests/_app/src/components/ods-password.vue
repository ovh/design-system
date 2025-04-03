<template>
  <OdsPassword name="ods-password"/>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsPassword } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'Password',
    components: {
      OdsPassword,
    },
  });
</script>
