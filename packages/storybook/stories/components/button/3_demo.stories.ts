import { OdsHTMLAnchorElementRelList, OdsHTMLAnchorElementTargetList } from '@ovhcloud/ods-common-core';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ODS_BUTTON_SIZE, ODS_BUTTON_SIZES, ODS_BUTTON_TEXT_ALIGN, ODS_BUTTON_TEXT_ALIGNS, ODS_BUTTON_VARIANT, ODS_BUTTON_VARIANTS } from '@ovhcloud/ods-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-button';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

/* Demo story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: ODS_THEME_COLOR_INTENT.primary,
    options: [ODS_THEME_COLOR_INTENT.primary, ODS_THEME_COLOR_INTENT.error],
    control: { type: 'select' },
  },
  size: {
    category: 'General',
    defaultValue: ODS_BUTTON_SIZE.md,
    options: ODS_BUTTON_SIZES,
    control: { type: 'select' },
  },
  variant: {
    category: 'General',
    defaultValue: ODS_BUTTON_VARIANT.flat,
    options: ODS_BUTTON_VARIANTS,
    control: { type: 'select' },
  },
  textAlign: {
    category: 'General',
    defaultValue: ODS_BUTTON_TEXT_ALIGN.center,
    options: ODS_BUTTON_TEXT_ALIGNS,
    control: { type: 'select' },
  },
  contrasted: {
    category: 'Misc',
    defaultValue: false,
  },
  disabled: {
    category: 'Misc',
    defaultValue: false,
  },
  inline: {
    category: 'Misc',
    defaultValue: true,
  },
  circle: {
    category: 'Misc',
    defaultValue: false,
  },
  start: {
    category: 'Slot',
    defaultValue: '',
  },
  buttonContent: {
    category: 'Slot',
    defaultValue: '',
  },
  end: {
    category: 'Slot',
    defaultValue: '',
  },
  href: {
    category: 'Development',
    defaultValue: '',
  },
  rel: {
    category: 'Development',
    defaultValue: '',
    options: OdsHTMLAnchorElementRelList,
    control: { type: 'select' },
  },
  target: {
    category: 'Development',
    defaultValue: '',
    options: OdsHTMLAnchorElementTargetList,
    control: { type: 'select' },
  },
  download: {
    category: 'Development',
    defaultValue: 'filename',
  },
};

export default {
  title: 'ODS Components/Actions/Button️ [atom]/Demo',
  id: 'button',
  argTypes: extractArgTypes(storyParams),
  parameters: {
    order: 3
  }
};

/* Default */
const TemplateDemo = (args: any) => html`
  <osds-button ...=${getTagAttributes(args)}>
    <span slot="start">${unsafeHTML(args.start)}</span>
    ${unsafeHTML(args.buttonContent || 'Button')}
    <span slot="end">${unsafeHTML(args.end)}</span>
  </osds-button>
`;
export const Demo = TemplateDemo.bind({});
// @ts-ignore
Demo.args = {
  ...extractStoryParams(storyParams),
};
