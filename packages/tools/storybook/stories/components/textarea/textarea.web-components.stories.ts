import {
  extractArgTypes,
  extractStoryParams,
  getTagAttributes
} from '../../../core/componentHTMLUtils';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import changelog from '@ovhcloud/ods-stencil-textarea/CHANGELOG.md';
import { defineCustomElements } from '@ovhcloud/ods-stencil-textarea/loader';
import { html } from 'lit-html';
import { iframe } from '../../../.storybook/iframe';
import { odsTextAreaDefaultAttributes } from '@ovhcloud/ods-core';
import page from './textarea.web-component.stories.page.mdx';

// import { config } from 'storybook-addon-xd-designs';
// import { XDConfig } from 'storybook-addon-xd-designs/lib/config';


// import { TextAreaPlay } from './textarea.web-components.validation.stories';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: odsTextAreaDefaultAttributes.color,
    options: OdsThemeColorIntentList,
    control: { type: 'select' },
  },
  defaultValue: {
    category: 'General',
    defaultValue: '',
  },
  value: {
    category: 'General',
    defaultValue: odsTextAreaDefaultAttributes.value,
  },
  flex: {
    category: 'Misc',
    defaultValue: odsTextAreaDefaultAttributes.flex,
  },
  contrasted: {
    category: 'Misc',
    defaultValue: odsTextAreaDefaultAttributes.contrasted
  },
  disabled: {
    category: 'Misc',
    defaultValue: odsTextAreaDefaultAttributes.disabled,
  },
  name: {
    category: 'Misc',
    defaultValue: 'myTextArea'
  },
  placeholder: {
    category: 'Misc',
    defaultValue: 'placeholder'
  },
  error: {
    category: 'Misc',
    defaultValue: odsTextAreaDefaultAttributes.error,
  },
  resizable: {
    category: 'Misc',
    defaultValue: odsTextAreaDefaultAttributes.resizable,
  },
  cols: {
    category: 'Misc',
    defaultValue: odsTextAreaDefaultAttributes.cols,
    control: { type: 'number' }
  },
  rows: {
    category: 'Misc',
    defaultValue: odsTextAreaDefaultAttributes.rows,
    control: { type: 'number' }
  },
};

export default {
  title: 'UI Components/TextArea [atom]/Web Component',
  parameters: {
    notes: {
      API: iframe('/stencil-textarea/modules/index.html'),
      changelog,
    },
    docs: { page },
  },
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const OsdsTextAreaDefault = (args: any) => html`
  <osds-textarea ...=${getTagAttributes(args)}>
  </osds-textarea>
`;
const TemplateDefault = (args: any) => OsdsTextAreaDefault(args);
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};

/* TextArea Validation */
// const OsdsTextAreaValidation = (args) => html`
//   <article id="example-1">
//     <osds-textarea id="textarea"  ...=${getTagAttributes(args)}>
//     </osds-textarea>
//     <span class="error-msg forbidden-value">Forbidden value</span>
//     <span class="error-msg value-missing">Value required please</span>
//     <span class="error-msg step-mismatch">Please insert a value by step 2, starting from 1</span>
//     <span class="error-msg valid">Not valid</span>
//   </article>
// `;
// const TemplateValidation = (args) => OsdsTextAreaValidation(args);
// export const Validation = TemplateValidation.bind({});
// Validation.args = {
//   ...extractStoryParams(storyParams),
// };
// Validation.play = TextAreaPlay;


