<template>
  <div>
    <OdsButton label="Toggle Drawer" @click="showModal = !showModal"></OdsButton>
    <OdsDrawer :isOpen="showModal" position="right">
      <OdsText preset="heading-3">Lorem ipsum</OdsText>
      <OdsText preset="span">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, nunc nec ultricies ultricies, nunc nunc ultricies
      </OdsText>
    </OdsDrawer>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { OdsDrawer, OdsButton, OdsText } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'Drawer',
    components: {
      OdsButton,
      OdsDrawer,
      OdsText,
    },
    setup() {
      const showModal = ref(false);

      return {
        showModal
      };
    }
  });
</script>
