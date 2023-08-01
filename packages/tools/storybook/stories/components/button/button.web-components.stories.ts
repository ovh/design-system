import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { OdsHTMLAnchorElementRelList, OdsHTMLAnchorElementTargetList } from '@ovhcloud/ods-common-core';
import { ODS_BUTTON_SIZE, ODS_BUTTON_SIZES, ODS_BUTTON_VARIANT, ODS_BUTTON_VARIANTS } from '@ovhcloud/ods-component-button';
import { defineCustomElements } from '@ovhcloud/ods-component-button/loader';
import { OdsThemeColorIntent, OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { createComponentTable, getTagAttributes, extractArgTypes, extractStoryParams } from '../../../core/componentHTMLUtils';
// @ts-ignore
import changelog from '@ovhcloud/ods-component-button/CHANGELOG.md';
// @ts-ignore
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
  title: 'UI Components/Button️ [atom]/Web Component',
  parameters: {
    notes: {
      changelog,
    },
    docs: { page }
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
`;
export const Default = TemplateDefault.bind({});
// @ts-ignore
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
  ${unsafeHTML(createComponentTable(defaultTag, { variant: ODS_BUTTON_VARIANTS }, { color: OdsThemeColorIntentList }, defaultContent))}
  <h1>Sizes & Colors</h1>
  ${unsafeHTML(createComponentTable(defaultTag, { size: ODS_BUTTON_SIZES }, { color: OdsThemeColorIntentList }, defaultContent))}
  <h1>Sizes & Variants</h1>
  ${unsafeHTML(createComponentTable(defaultTag, { size: ODS_BUTTON_SIZES }, { variant: ODS_BUTTON_VARIANTS }, defaultContent))}
  <h1>Disabled Variants & Colors</h1>
  ${unsafeHTML(createComponentTable(defaultTag, { variant: ODS_BUTTON_VARIANTS }, { color: OdsThemeColorIntentList }, defaultContent, { disabled: true }))}
  <div style="background: #666; padding: 1em; margin: -0.3em -0.8em; color: white">
    <h1>Contrasted Variants & Colors</h1>
    ${unsafeHTML(createComponentTable(defaultTag, { variant: ODS_BUTTON_VARIANTS }, { color: OdsThemeColorIntentList }, defaultContent, { contrasted: true }))}
    <h1>Disabled and contrasted Variants & Colors</h1>
    ${unsafeHTML(createComponentTable(defaultTag, { variant: ODS_BUTTON_VARIANTS }, { color: OdsThemeColorIntentList }, defaultContent, { contrasted: true, disabled: true }))}
  </div>
  <h1>Circle shape with little icon</h1>
  ${unsafeHTML(createComponentTable(defaultTag, { variant: [ODS_BUTTON_VARIANTS[2]] }, { color: OdsThemeColorIntentList }, `<osds-icon size='xxs' name="ellipsis-vertical" />`, { circle: true }))}
  <h1>Circle shape with bigger icon</h1>
  ${unsafeHTML(createComponentTable(defaultTag, { variant: [ODS_BUTTON_VARIANTS[2]] }, { color: OdsThemeColorIntentList }, `<osds-icon size='sm' name="plus" />`, { circle: true }))}
  <h1>Circle shape with text</h1>
  ${unsafeHTML(createComponentTable(defaultTag, { variant: [ODS_BUTTON_VARIANTS[2]] }, { color: OdsThemeColorIntentList }, `<span>Text</span>`, { circle: true }))}
`;
export const All = TemplateAll.bind({});
// @ts-ignore
All.parameters = {
  controls: { hideNoControlsWarning: true },
  options: { showPanel: false },
};
