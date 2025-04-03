<template>
  <OdsIcon :name="iconName" />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { ODS_ICON_NAME } from '@ovhcloud/ods-components';
  import { OdsIcon } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'Icon',
    components: {
      OdsIcon,
    },
    data() {
      return {
        iconName: ODS_ICON_NAME.plus,
      };
    },
  });
</script>
