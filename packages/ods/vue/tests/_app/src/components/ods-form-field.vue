<template>
  <OdsFormField>
    <label slot="label">Description</label>
    <OdsText slot="visual-hint" preset="caption">02/11/1999</OdsText>
    <OdsInput name="input" />
    <OdsText slot="helper" preset="span">A little helper text</OdsText>
  </OdsFormField>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsFormField, OdsInput, OdsText } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'FormField',
    components: {
      OdsFormField,
      OdsInput,
      OdsText
    },
  });
</script>
