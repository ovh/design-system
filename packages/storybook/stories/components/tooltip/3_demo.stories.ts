import { ODS_TOOLTIP_VARIANT, ODS_TOOLTIP_VARIANTS } from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-tooltip';
import { html } from 'lit-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

/* Default story parameters  */
const storyParams = {
  variant: {
    category: 'General',
    control: { type: 'select' },
    defaultValue: ODS_TOOLTIP_VARIANT.standard,
    options: ODS_TOOLTIP_VARIANTS,
  },
  content: {
    category: 'General',
    defaultValue: 'Tooltip content',
  },
};

export default {
  title: 'ODS Components/User feedback/Tooltip [atom]/Demo',
  id: 'tooltip',
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
};
export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
};
