<template>
  <div>
    <OdsButton label="Open Modal" @click="showModal = true"></OdsButton>
    <OdsModal :isOpen="showModal" @odsModalClose="showModal = false">
      <OdsText preset="heading-3">Lorem ipsum</OdsText>
      <OdsText preset="span">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, nunc nec ultricies ultricies, nunc nunc ultricies
      </OdsText>
    </OdsModal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { OdsButton, OdsModal, OdsText } from '@ovhcloud/ods-components/vue';

export default defineComponent({
  name: 'Modal',
  components: {
    OdsButton,
    OdsModal,
    OdsText
  },
  setup() {
    const showModal = ref(false);

    return {
      showModal
    };
  }
});
</script>
