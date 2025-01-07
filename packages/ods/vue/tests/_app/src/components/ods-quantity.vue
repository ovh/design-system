<template>
  <ods-quantity name="ods-input"
                @odsChange="onOdsChange" />

  <OdsQuantity is-disabled
               name="ods-input-disabled"
               @odsChange="onOdsChange" />
</template>

<script setup lang="ts">
  function onOdsChange(): void {
    console.log('Vue quantity odsChange');
  }
</script>
