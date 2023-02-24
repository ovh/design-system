import { html } from 'lit-html';
import { iframe } from '../../../.storybook/iframe';

// import { config } from 'storybook-addon-xd-designs';
// import { XDConfig } from 'storybook-addon-xd-designs/lib/config';


import { defineCustomElements } from '@ovhcloud/ods-stencil-input/loader';
import changelog from '@ovhcloud/ods-stencil-input/CHANGELOG.md';
import page from './input.web-component.stories.page.mdx';
import { OdsInputSizeList, OdsInputTypeList, odsInputDefaultAttributes } from '@ovhcloud/ods-core';
import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { InputPlay } from './input.web-components.validation.stories';

import {
  extractArgTypes,
  extractStoryParams,
  getTagAttributes,
} from '../../../core/componentHTMLUtils';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  type: {
    category: 'General',
    defaultValue: odsInputDefaultAttributes.type,
    options: OdsInputTypeList,
    control: { type: 'select' },
  },
  color: {
    category: 'General',
    defaultValue: odsInputDefaultAttributes.color,
    options: OdsThemeColorIntentList,
    control: { type: 'select' },
  },
  size: {
    category: 'General',
    defaultValue: odsInputDefaultAttributes.size,
    options: OdsInputSizeList,
    control: { type: 'select' },
  },
  flex: {
    category: 'Misc',
    defaultValue: false,
  },
  contrasted: {
    category: 'Misc',
    defaultValue: false
  },
  disabled: {
    category: 'Misc',
    defaultValue: false,
  },
  defaultValue: {
    category: 'Misc',
    control: { type: 'number' },
  },
  value: {
    category: 'Misc',
    control: { type: 'number' },
  },
  min: {
    category: 'Misc',
    control: { type: 'number' },
  },
  max: {
    category: 'Misc',
    control: { type: 'number' },
  },
  step: {
    category: 'Misc',
    control: { type: 'number' },
  },
  name: {
    category: 'Misc',
    defaultValue: 'myInputNumber'
  },
  placeholder: {
    category: 'Misc',
    defaultValue: 'placeholder'
  },
  icon: {
    category: 'Misc',
    defaultValue: ''
  },
  required: {
    category: 'Misc',
    defaultValue: false,
  },
  error: {
    category: 'Misc',
    defaultValue: false,
  },
  forbiddenValues: {
    category: 'Misc',
    defaultValue: [],
    control: { type: 'array' },
  },
};

export default {
  title: 'UI Components/Input️ [atom]/Web Component',
  parameters: {
    notes: {
      API: iframe('/stencil-input/modules/index.html'),
      changelog,
    },
    docs: { page },
    /* design: config({
      artboardUrl: 'https://xd.adobe.com/view/9bb1ccc1-e850-428c-9fd2-d4a60718a440-cee2/screen/db14523c-c3d7-4eb6-a584-3f8df444ecfa/Desktop',
    {  as XDConfig), */
  },
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const OsdsInputDefault = (args) => html`
  <osds-input ...=${getTagAttributes(args)}>
  </osds-input>
`;
const TemplateDefault = (args) => OsdsInputDefault(args);
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};

/* Input Validation */
const OsdsInputValidation = (args) => html`
  <article id="example-1">
    <osds-input id="input"  ...=${getTagAttributes(args)}>
    </osds-input>
    <span class="error-msg forbidden-value">Forbidden value</span>
    <span class="error-msg value-missing">Value required please</span>
    <span class="error-msg step-mismatch">Please insert a value by step 2, starting from 1</span>
    <span class="error-msg valid">Not valid</span>
  </article>
`;
const TemplateValidation = (args) => OsdsInputValidation(args);
export const Validation = TemplateValidation.bind({});
Validation.args = {
  ...extractStoryParams(storyParams),
};
Validation.play = InputPlay;


