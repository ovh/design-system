<template>
  <ods-button label="My button"
              @click="onClick">
  </ods-button>

  <ods-button is-disabled
              label="My button"
              @click="onClick">
  </ods-button>
</template>

<script setup lang="ts">
  function onClick(): void {
    console.log('Vue button click');
  }
</script>
