import { html } from 'lit-html';
import { iframe } from '../../../.storybook/iframe';
import { odsSpinnerDefaultAttributes, OdsSpinnerSizeList } from '@ovhcloud/ods-core';
import { defineCustomElements } from '@ovhcloud/ods-stencil-spinner/loader';
import {
  extractArgTypes,
  extractStoryParams,
  getTagAttributes,
} from '../../../core/componentHTMLUtils';

import changelog from '@ovhcloud/ods-stencil-spinner/CHANGELOG.md';
import page from './spinner.web-component.stories.page.mdx';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  size: {
    category: 'General',
    defaultValue: odsSpinnerDefaultAttributes.size,
    options: OdsSpinnerSizeList,
    control: { type: 'select' },
  },
  contrasted: {
    category: 'Misc',
    defaultValue: odsSpinnerDefaultAttributes.contrasted,
  },
  flex: {
    category: 'Misc',
    defaultValue: odsSpinnerDefaultAttributes.flex,
  },
};

export default {
  title: 'UI Components/Spinner [atom]/Web Component',
  parameters: {
    notes: {
      API: iframe('/stencil-spinner/modules/index.html'),
      changelog,
    },
    docs: { page }
  },
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const TemplateDefault = (args:any) => {
  return html`<osds-spinner ...=${getTagAttributes(args)}></osds-spinner>`;
}

export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};
