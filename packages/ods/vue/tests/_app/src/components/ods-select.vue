<template>
  <OdsSelect name="ods-select">
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
  </OdsSelect>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsSelect } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'Select',
    components: {
      OdsSelect,
    },
  });
</script>
