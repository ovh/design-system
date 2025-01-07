<template>
  <div>
    <button @click="showModal = true">
      Open Modal
    </button>

    <ods-modal :isOpen="showModal"
              @odsClose="showModal = false">
      <h3>Lorem ipsum</h3>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, nunc nec ultricies ultricies, nunc nunc ultricies
      </span>
    </ods-modal>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const showModal = ref(false);
</script>
