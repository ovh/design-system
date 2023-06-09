import { html } from 'lit-html';
import { iframe } from '../../../.storybook/iframe';

import { defineCustomElements } from '@ovhcloud/ods-stencil-progress-bar/loader';
import {
  extractArgTypes,
  extractStoryParams,
  getTagAttributes,
} from '../../../core/componentHTMLUtils';

import changelog from '@ovhcloud/ods-stencil-progress-bar/CHANGELOG.md';
import page from './progress-bar.web-component.stories.page.mdx';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  progress: {
    category: 'Misc',
    control: { type: 'number' },
    defaultValue: 27
  },
  max: {
    category: 'Misc',
    control: { type: 'number' },
    defaultValue: 100
  }
};

export default {
  title: 'UI Components/ProgressBar [atom]/Web Component',
  parameters: {
    notes: {
      API: iframe('/stencil-progress-bar/modules/index.html'),
      changelog,
    },
    docs: { page }
  },
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const TemplateDefault = (args:any) => {
  return html`
    <osds-progress-bar ...=${getTagAttributes(args)}>
      ProgressBar
    </osds-progress-bar>
  `;
}
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};
