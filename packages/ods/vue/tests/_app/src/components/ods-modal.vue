<template>
  <div>
    <OdsModal :isOpen="true">
      <OdsText preset="heading-3">Lorem ipsum</OdsText>
      <OdsText preset="span">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, nunc nec ultricies ultricies, nunc nunc ultricies
      </OdsText>
    </OdsModal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { OdsModal, OdsText } from '@ovhcloud/ods-components/vue';

export default defineComponent({
  name: 'Modal',
  components: {
    OdsModal,
    OdsText
  },
});
</script>
