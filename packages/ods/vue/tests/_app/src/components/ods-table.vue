<template>
  <OdsTable>
    <table>
      <caption>
        Front-end web developer course 2021
      </caption>
      <thead>
      <tr>
        <th scope="col">Person</th>
        <th scope="col">Most interest in</th>
        <th scope="col">Age</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="row">Chris</th>
        <td>HTML tables</td>
        <td>22</td>
      </tr>
      <tr>
        <th scope="row">Dennis</th>
        <td>Web accessibility</td>
        <td>45</td>
      </tr>
      </tbody>
    </table>
  </OdsTable>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { OdsTable } from '@ovhcloud/ods-components/vue';

  export default defineComponent({
    name: 'Table',
    components: {
      OdsTable,
    },
  });
</script>
