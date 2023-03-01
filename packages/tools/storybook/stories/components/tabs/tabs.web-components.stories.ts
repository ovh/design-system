import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { iframe } from '../../../.storybook/iframe';

// import { config } from 'storybook-addon-xd-designs';
// import { XDConfig } from 'storybook-addon-xd-designs/lib/config';

import { OdsThemeColorIntent, OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { OdsHTMLAnchorElementRelList, OdsHTMLAnchorElementTargetList } from '@ovhcloud/ods-core';
import { defineCustomElements } from '@ovhcloud/ods-stencil-button/loader';
import { OdsButtonSize, OdsButtonSizeList, OdsButtonVariant, OdsButtonVariantList } from '@ovhcloud/ods-core';
import { createComponentTable, getTagAttributes, extractArgTypes, extractStoryParams } from '../../../core/componentHTMLUtils';

import changelog from '@ovhcloud/ods-stencil-button/CHANGELOG.md';
import page from './button.web-component.stories.page.mdx';

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
    defaultValue: OdsButtonSize.md,
    options: OdsButtonSizeList,
    control: { type: 'select' },
  },
  variant: {
    category: 'General',
    defaultValue: OdsButtonVariant.flat,
    options: OdsButtonVariantList,
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
  flex: {
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
  title: 'UI Components/Button️ [atom]/Web Component',
  parameters: {
    notes: {
      API: iframe('stencil-components-button/modules/index.html'),
      changelog,
    },
    docs: { page },
    /* design: config({
      artboardUrl: 'https://xd.adobe.com/view/040c7684-d702-451e-98d9-23320eacd292-515f/screen/0c4d4f2c-9a40-44b2-b3f9-3fa01eed0911/Desktop',
    {  as XDConfig), */
  },
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


  <osds-button ...=${getTagAttributes(args)}>
    <span slot="start"><osds-icon size="sm" name="plus" color="${args.color}" contrasted></osds-icon></span>
    Button
  </osds-button>


  <osds-button ...=${getTagAttributes(args)}>
    <span slot="start"></span>
    Button
    <span slot="end"><osds-icon size="sm" name="plus" color="${args.color}" contrasted></osds-icon></span>
  </osds-button>
`;
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};

const defaultTag = 'osds-button';
const defaultContent = `Text`;

const TemplateAll = () => html`
  <style>
    .table {
      margin: 1em auto;
    }
    .table-row {
      display: flex;
      margin: 0.5em auto;
      align-items: center;
    }
    .table-cell {
      display: inline-flex;
      width: 6em;
      align-items: center;
      justify-content: center;
    }
  </style>

  <h1>Variants & Colors</h1>
  ${unsafeHTML(createComponentTable(defaultTag, { variant: OdsButtonVariantList }, { color: OdsThemeColorIntentList }, defaultContent))}
  <h1>Sizes & Colors</h1>
  ${unsafeHTML(createComponentTable(defaultTag, { size: OdsButtonSizeList }, { color: OdsThemeColorIntentList }, defaultContent))}
  <h1>Sizes & Variants</h1>
  ${unsafeHTML(createComponentTable(defaultTag, { size: OdsButtonSizeList }, { variant: OdsButtonVariantList }, defaultContent))}
  <h1>Disabled Variants & Colors</h1>
  ${unsafeHTML(createComponentTable(defaultTag, { variant: OdsButtonVariantList }, { color: OdsThemeColorIntentList }, defaultContent, { disabled: true }))}
  <div style="background: #666; padding: 1em; margin: -0.3em -0.8em; color: white">
    <h1>Contrasted Variants & Colors</h1>
    ${unsafeHTML(createComponentTable(defaultTag, { variant: OdsButtonVariantList }, { color: OdsThemeColorIntentList }, defaultContent, { contrasted: true }))}
    <h1>Disabled and contrasted Variants & Colors</h1>
    ${unsafeHTML(createComponentTable(defaultTag, { variant: OdsButtonVariantList }, { color: OdsThemeColorIntentList }, defaultContent, { contrasted: true, disabled: true }))}
  </div>
`;
export const All = TemplateAll.bind({});
All.parameters = {
  controls: { hideNoControlsWarning: true },
  options: { showPanel: false },
};
