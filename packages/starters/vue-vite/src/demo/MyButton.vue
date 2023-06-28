<script lang="ts">
export default {}
</script>

<script setup lang="ts">
import { JSX as OdsJSX } from '@ovhcloud/ods-stencil/components';
import { OsdsButton } from '@ovhcloud/ods-stencil/components/vue';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

/**
 * define an alias to get the properties definition of the `ODS` button
 */
type OsdsButtonProps = OdsJSX.IntrinsicElements['osds-button'];

/**
 * default custom properties values for the custom button
 */
const DEFAULT_BUTTON_PROPS: Partial<OsdsButtonProps> = {
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
