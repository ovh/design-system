import { html } from 'lit-html';
import { iframe } from '../../../.storybook/iframe';

import { defineCustomElements } from '@ovhcloud/ods-stencil-form-group/loader';
import {
  extractArgTypes,
  extractStoryParams,
  getTagAttributes,
} from '../../../core/componentHTMLUtils';

import changelog from '@ovhcloud/ods-stencil-form-group/CHANGELOG.md';
import page from './form-group.web-component.stories.page.mdx';

defineCustomElements();

/* Default story parameters  */
const storyParams = {

};

export default {
  title: 'UI Components/FormGroup [atom]/Web Component',
  parameters: {
    notes: {
      API: iframe('/stencil-form-group/modules/index.html'),
      changelog,
    },
    docs: { page }
  },
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const TemplateDefault = (args:any) => {
  return html`
    <osds-form-group ...=${getTagAttributes(args)}>
      FormGroup
    </osds-form-group>
  `;
}
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};
