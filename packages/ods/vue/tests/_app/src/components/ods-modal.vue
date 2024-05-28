<template>
  <OdsModal isOpen>
    <OdsText>Lorem ipsum</OdsText>
    <OdsText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, nunc nec ultricies ultricies, nunc nunc ultricies
    </OdsText>
  </OdsModal>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsModal, OdsText } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'Modal',
    components: {
      OdsModal,
    },
  });
</script>
