<template>
  <ods-input name="ods-input"
             @odsChange="onOdsChange">
  </ods-input>

  <ods-input is-disabled
             name="ods-input-disabled"
             @odsChange="onOdsChange">
  </ods-input>
</template>

<script setup lang="ts">
  function onOdsChange(): void {
    console.log('Vue input odsChange');
  }
</script>
