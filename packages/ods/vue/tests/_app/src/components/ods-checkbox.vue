<template>
  <ods-checkbox @odsChange="onOdsChange"></ods-checkbox>

  <ods-checkbox @odsChange="onOdsChange" is-disabled></ods-checkbox>
</template>

<script setup lang="ts">
  function onOdsChange(): void {
    console.log('Vue checkbox odsChange');
  }
</script>
