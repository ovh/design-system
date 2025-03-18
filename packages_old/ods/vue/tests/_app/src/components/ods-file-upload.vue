<template>
  <div @odsCancel="onOdsCancel"
       @odsChange="onOdsChange">
    <OdsFileUpload :files="files" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { type OdsFileCancelEvent, type OdsFileChangeEvent } from '@ovhcloud/ods-components';
  import { OdsFileUpload } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'FileUpload',
    components: {
      OdsFileUpload,
    },
    data: () => ({
      files: []
    }),
    methods: {
      onOdsCancel: function(event: OdsFileCancelEvent) {
        this.files = this.files.filter((file) => file.odsId !== event.detail.odsId);
      },
      onOdsChange: function(event: OdsFileChangeEvent) {
        this.files = this.files.concat(event.detail);
      },
    },
  });
</script>
