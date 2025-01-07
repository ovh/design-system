<template>
  <ods-textarea name="ods-textarea"
                @odsChange="onOdsChange">
  </ods-textarea>

  <ods-textarea is-disabled
                name="ods-textarea-disabled"
                @odsChange="onOdsChange">
  </ods-textarea>
</template>

<script setup lang="ts">
  function onOdsChange(): void {
    console.log('Vue textarea odsChange');
  }
</script>
