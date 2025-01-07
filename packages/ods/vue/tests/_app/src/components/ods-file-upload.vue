<template>
  <ods-file-upload :files="files"
                   @odsCancel="onOdsCancel"
                   @odsChange="onOdsChange">
  </ods-file-upload>
</template>

<script setup lang="ts">
  import { type OdsFileCancelEvent, type OdsFileChangeEvent } from '@ovhcloud/ods-components';
  import { ref } from 'vue';

  let files = ref([]);

  function onOdsCancel(event: OdsFileCancelEvent): void {
    files.value = files.value.filter((file) => file.odsId !== event.detail.odsId);
  }

  function onOdsChange(event: OdsFileChangeEvent): void {
    files.value = files.value.concat(event.detail);
  }
</script>
