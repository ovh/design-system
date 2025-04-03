<template>
  <!-- FIXME custom event not working in vue -->
  <ods-input name="ods-input" @ods-value-change="() => console.log('test')"></ods-input>

  <OdsInput name="ods-input-disabled" is-disabled @ods-change="onOdsChange" />

</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsInput } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'Input',
    components: {
      OdsInput,
    },
    methods: {
      onOdsChange() {
        console.log('Vue input odsChange');
      }
    }
  });
</script>
