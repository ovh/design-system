<template>
  <OdsBreadcrumb>
    <OdsBreadcrumbItem href="" icon="home" />
    <OdsBreadcrumbItem href="" label="Link" />
    <OdsBreadcrumbItem href="" label="Text" />
  </OdsBreadcrumb>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsBreadcrumb, OdsBreadcrumbItem } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'Breadcrumb',
    components: {
      OdsBreadcrumb,
      OdsBreadcrumbItem,
    },
  });
</script>
