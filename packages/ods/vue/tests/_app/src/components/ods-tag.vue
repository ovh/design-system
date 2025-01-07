<template>
  <ods-tag id="my-tag"
           label="My tag"
           @odsRemove="onRemove">
  </ods-tag>

  <ods-tag id="my-disabled-tag"
           is-disabled
           label="My tag"
           @odsRemove="onRemove">
  </ods-tag>
</template>

<script setup lang="ts">
  import { type OdsTagRemoveEvent } from '@ovhcloud/ods-components';

  function onRemove(event: OdsTagRemoveEvent): void {
    console.log(`Vue tag remove event: ${event.detail.id}`);
  }
</script>
