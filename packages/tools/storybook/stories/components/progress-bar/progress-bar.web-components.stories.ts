import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
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
  value: {
    category: 'Misc',
    control: { type: 'number' },
    defaultValue: 27
  },
  max: {
    category: 'Misc',
    control: { type: 'number' },
    defaultValue: 100
  },
  end: {
    category: 'Slot',
    defaultValue: '',
  },
};

export default {
  title: 'UI Components/Progress Bar [atom]/Web Component',
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
      <span slot="end">${unsafeHTML(args.end)}</span>
    </osds-progress-bar>
  `;
}
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};
