import {html} from 'lit-html';
import {defineCustomElements} from '@ovhcloud/ods-ovh-components/location-tile/loader';
import {extractArgTypes, extractStoryParams} from '../../../core/componentHTMLUtils';
// @ts-ignore
import changelog from '@ovhcloud/ods-ovh-components/location-tile/CHANGELOG.md';
// @ts-ignore
import page from './location-tile.web-component.stories.page.mdx';

defineCustomElements();

/* Default story parameters  */
const storyParams = {};

export default {
  title: 'OVH Components/Location Tile [molecule]/Web Component',
  id: 'location-tile',
  parameters: {
    notes: {
      changelog,
    },
    docs: {page},
  },
  argTypes: extractArgTypes(storyParams),
};

/* Default */
const TemplateDefault = () => {
  return html`
    <osds-ovh-location-tile>
    </osds-ovh-location-tile>
  `;
};
export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
};
