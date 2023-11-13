import { defineCustomElements } from '@ovhcloud/ods-components-ovh/location-tile/loader';
import { html } from 'lit-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElements();

/* Default story parameters  */
const storyParams = {};

export default {
  title: 'ODS Components/Content/OvhLocationTile [quark]/Demo',
  id: 'ovh-location-tile',
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const TemplateDefault = (args:any) => html`
  <osds-ovh-location-tile ...=${getTagAttributes(args)}>
  </osds-ovh-location-tile>
`;
export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
};
