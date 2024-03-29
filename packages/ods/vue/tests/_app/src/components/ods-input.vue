<template>
  <ods-input name="ods-input" @ods-value-change="() => console.log('test')"></ods-input>

  <OdsInput name="ods-input-disabled" is-disabled @ods-value-change="onOdsValueChange" />

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
      onOdsValueChange() {
        console.log('Vue input odsValueChange');
      }
    }
  });
</script>
