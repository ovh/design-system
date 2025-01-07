<template>
  <ods-radio @odsChange="onOdsChange"></ods-radio>

  <ods-radio is-disabled
             @odsChange="onOdsChange">
  </ods-radio>
</template>

<script setup lang="ts">
  function onOdsChange(): void {
    console.log('Vue radio odsChange');
  }
</script>
