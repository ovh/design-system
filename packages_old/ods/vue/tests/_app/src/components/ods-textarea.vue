<template>
  <OdsTextarea name="ods-textarea"
               @odsChange="onOdsChange" />

  <OdsTextarea is-disabled
               name="ods-textarea-disabled"
               @odsChange="onOdsChange" />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsTextarea } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'Textarea',
    components: {
      OdsTextarea,
    },
    methods: {
      onOdsChange: () => console.log('Vue textarea odsChange'),
    }
  });
</script>
