<template>
  <OsdsDatagrid
    id="datagridFormatter"
    is-selectable
    columns='[{"title":"First name", "field":"firstname", "isSortable": true}, {"title":"Last name", "field":"lastname", "isSortable": true}, {"title":"Gender", "field":"gender"}]'
    rows='[{"firstname":"Homer", "lastname":"Simpson", "gender": "Male"}, {"firstname":"Marge", "lastname":"Simpson", "gender": "Female"}]'
    height="300">
  </OsdsDatagrid>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { OsdsDatagrid } from '@ovhcloud/ods-components/vue';
import '@ovhcloud/ods-theme-blue-jeans';

export default defineComponent({
  name: 'App',
  components: {
    OsdsDatagrid,
  },
});
</script>
