import { html } from 'lit-html';
import { iframe } from '../../../.storybook/iframe';
import { defineCustomElements } from '@ovhcloud/ods-stencil-tooltip/loader';
import {
  extractArgTypes,
  extractStoryParams,
  getTagAttributes,
} from '../../../core/componentHTMLUtils';
import { OdsTooltipVariant, OdsTooltipVariantList } from '@ovhcloud/ods-core';
import changelog from '@ovhcloud/ods-stencil-tooltip/CHANGELOG.md';
import page from './tooltip.web-component.stories.page.mdx';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  variant: {
    category: 'General',
    control: { type: 'select' },
    defaultValue: OdsTooltipVariant.standard,
    options: OdsTooltipVariantList,
  },
  content: {
    category: 'General',
    defaultValue: 'Tooltip content',
  },
};

export default {
  title: 'UI Components/Tooltip [atom]/Web Component',
  id: 'tooltip',
  parameters: {
    notes: {
      API: iframe('/stencil-tooltip/modules/index.html'),
      changelog,
    },
    docs: { page }
  },
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const TemplateDefault = (args:any) => {
  return html`
    <osds-tooltip ...=${getTagAttributes(args)}>
      <osds-tooltip-content slot="tooltip-content">
        ${args.content}
      </osds-tooltip-content>
      Hover me
    </osds-tooltip>
  `;
}
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};
