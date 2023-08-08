<script lang="ts">
export default {}
</script>

<script setup lang="ts">
import type { OdsButtonAttribute } from '@ovhcloud/ods-components/button';
import { OsdsButton } from '@ovhcloud/ods-components/button/vue';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

/**
 * default custom properties values for the custom button
 */
const DEFAULT_BUTTON_PROPS: Partial<OdsButtonAttribute> = {
  inline: false,
  color: OdsThemeColorIntent.accent
};

const props = withDefaults(defineProps<{id?: string}>(), { id: undefined });
</script>


<!--
/**
* Custom button component base on the `ODS` one.
* It allows to set some base pattern for your app like managing default properties.
* We recommend not to overuse with this kind of wrapper.
* It is made here only the example.
*/
-->
<template>
  <OsdsButton v-bind="{...DEFAULT_BUTTON_PROPS, ...props}" :id="id"><slot></slot></OsdsButton>
</template>

<style scoped>

</style>
