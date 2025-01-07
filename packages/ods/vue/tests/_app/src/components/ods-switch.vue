<template>
  <ods-switch name="switch-radio"
              @odsChange="onOdsChange">
    <ods-switch-item is-checked value="1">label1</ods-switch-item>
    <ods-switch-item value="2">label2</ods-switch-item>
    <ods-switch-item value="3">label3</ods-switch-item>
  </ods-switch>

  <ods-switch is-disabled
              name="switch-radio-disabled"
              @odsChange="onOdsChange">
    <ods-switch-item is-checked value="1">label1</ods-switch-item>
    <ods-switch-item value="2">label2</ods-switch-item>
    <ods-switch-item value="3">label3</ods-switch-item>
  </ods-switch>
</template>

<script setup lang="ts">
  function onOdsChange(): void {
    console.log('Vue switch odsChange');
  }
</script>
