import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { OdsHTMLAnchorElementRelList, OdsHTMLAnchorElementTargetList } from '@ovhcloud/ods-common-core';
import { ODS_BUTTON_SIZE, ODS_BUTTON_SIZES, ODS_BUTTON_VARIANT, ODS_BUTTON_VARIANTS } from '@ovhcloud/ods-component-button';
import { defineCustomElements } from '@ovhcloud/ods-component-button/loader';
import { OdsThemeColorIntent, OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { getTagAttributes, extractArgTypes, extractStoryParams } from '../../../core/componentHTMLUtils';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: OdsThemeColorIntent.default,
    options: OdsThemeColorIntentList,
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
    defaultValue: false,
  },
  circle: {
      category: 'Misc',
      defaultValue: false,
  },
  href: {
    category: 'Misc',
    defaultValue: ''
  },
  rel: {
    category: 'Misc',
    options: OdsHTMLAnchorElementRelList,
    control: { type: 'select' },
  },
  target: {
    category: 'Misc',
    options: OdsHTMLAnchorElementTargetList,
    control: { type: 'select' },
  },
  download: {
    category: 'Misc',
    defaultValue: 'filename'
  }
};

export default {
  title: 'UI Components/Button️ [atom]',
  id: 'button',
  argTypes: extractArgTypes(storyParams),
};

/* Story options */

/* Default */
const TemplateDefault = (args: any) => html`
  <osds-button ...=${getTagAttributes(args)}>
    <span slot="start">${unsafeHTML(args.start)}</span>
    ${unsafeHTML(args.buttonContent || 'Button')}
    <span slot="end">${unsafeHTML(args.end)}</span>
  </osds-button>
`;
export const WebComponent = TemplateDefault.bind({});
// @ts-ignore
WebComponent.args = {
  ...extractStoryParams(storyParams),
};
