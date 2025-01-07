<template>
  <ods-badge :color="ODS_BADGE_COLOR.alpha" label="Default badge"></ods-badge>

  <ods-phone-number name="phone" is-disabled @odsChange="onChange"></ods-phone-number>
</template>

<script setup lang="ts">
  import { ODS_BADGE_COLOR } from '@ovhcloud/ods-components';

  function onChange(e: any) {
    console.log(e);
  }
</script>
