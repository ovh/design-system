import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_SWITCH_SIZE, ODS_SWITCH_SIZES } from '@ovhcloud/ods-components';
import { defineCustomElement as defineSwitch } from '@ovhcloud/ods-components/dist/components/osds-switch';
import { defineCustomElement as defineSwitchItem } from '@ovhcloud/ods-components/dist/components/osds-switch-item';
import { html } from 'lit-html';
import {
  extractArgTypes,
  extractStoryParams,
  getTagAttributes,
} from '../../../core/componentHTMLUtils';

defineSwitch();
defineSwitchItem();

/* Demo story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: ODS_THEME_COLOR_INTENT.primary,
    options: [ODS_THEME_COLOR_INTENT.primary],
    control: { type: 'select' },
  },
  size: {
    category: 'General',
    defaultValue: ODS_SWITCH_SIZE.md,
    options: ODS_SWITCH_SIZES,
    control: { type: 'select' },
  },
  numberOfOptions: {
    category: 'General',
    description: 'Warning: numberOfOptions is not an attribute of Switch. It is purely for Storybook rendering',
    defaultValue: 3,
    control: {
      type: 'range',
      min: 1,
      max: 4,
      step: 1,
    },
  },
  contrasted: {
    category: 'Misc',
    defaultValue: false,
  },
  disabled: {
    category: 'Misc',
    defaultValue: false,
  },
};

export default {
  title: 'ODS Components/Form/Switch [atom]/Demo',
  id: 'switch',
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const TemplateDemo = ({ ...args }) => {
  const switchOptions = Array.from({ length: args.numberOfOptions }, (_, i) => i + 1).map((value) => html`
    <osds-switch-item value="${value}">Value ${value}</osds-switch-item>
  `);

  return html`
    <osds-switch ...=${getTagAttributes(args)}>
      ${switchOptions}
    </osds-switch>
  `;
};

export const Demo = TemplateDemo.bind({});
// @ts-ignore
Demo.args = {
  ...extractStoryParams(storyParams),
};
