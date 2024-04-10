<template>
  <div @odsRemove="onRemove">
    <OdsTag id="my-tag"
            label="My tag" />
  </div>

  <div @odsRemove="onRemove">
    <OdsTag id="my-disabled-tag"
            is-disabled
            label="My tag" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { type OdsTagEventRemove } from '@ovhcloud/ods-components';
  import { OdsTag } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'Tag',
    components: {
      OdsTag,
    },
    methods: {
      onRemove: (event: OdsTagEventRemove) => console.log(`Vue tag remove event: ${event.detail.id}`),
    },
  });
</script>
