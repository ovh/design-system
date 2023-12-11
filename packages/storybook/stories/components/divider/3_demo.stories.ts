import { ODS_THEME_COLOR_INTENT, ODS_THEME_COLOR_INTENTS } from '@ovhcloud/ods-common-theming';
import { ODS_DIVIDER_SIZE, ODS_DIVIDER_SIZES } from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-divider';
import { html } from 'lit-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

/* Default story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: ODS_THEME_COLOR_INTENT.default,
    options: ODS_THEME_COLOR_INTENTS,
    control: { type: 'select' },
  },
  size: {
    category: 'General',
    defaultValue: ODS_DIVIDER_SIZE.six,
    options: ODS_DIVIDER_SIZES,
    control: { type: 'select' },
  },
  contrasted: {
    category: 'Misc',
    defaultValue: false,
  },
  separator: {
    category: 'Misc',
    defaultValue: false,
  },
};

export default {
  title: 'ODS Components/Layout/Divider [quark]/Demo',
  id: 'divider',
  argTypes: extractArgTypes(storyParams)
};

const example = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

// A divider example
const TemplateDefault = (args: any) => html`
  <div style='color: #ccc'>${example}</div>
  <osds-divider ...=${getTagAttributes(args)}>
  </osds-divider>
  <div style='color: #ccc'>${example}</div>
`;
export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
};
