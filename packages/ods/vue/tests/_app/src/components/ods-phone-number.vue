<template>
  <OdsPhoneNumber name="ods-phone-number" />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsPhoneNumber } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'PhoneNumber',
    components: {
      OdsPhoneNumber,
    },
  });
</script>
