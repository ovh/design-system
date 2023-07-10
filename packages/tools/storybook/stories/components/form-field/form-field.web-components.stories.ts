import { html } from 'lit-html';
import { iframe } from '../../../.storybook/iframe';
import { odsFormFieldDefaultAttributes } from '@ovhcloud/ods-core';
import { defineCustomElements } from '@ovhcloud/ods-stencil-form-field/loader';
import {
  extractArgTypes,
  extractStoryParams,
  getTagAttributes,
} from '../../../core/componentHTMLUtils';

import changelog from '@ovhcloud/ods-stencil-form-field/CHANGELOG.md';
import page from './form-field.web-component.stories.page.mdx';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  flex: {
    category: 'General',
    defaultValue: odsFormFieldDefaultAttributes.flex,
  },
  error: {
    category: 'General',
    defaultValue: odsFormFieldDefaultAttributes.error,
  },
  label: {
    category: 'Misc',
    defaultValue: true,
    control: {
      type: 'boolean',
    },
  },
  visualHint: {
    category: 'Misc',
    defaultValue: true,
    control: {
      type: 'boolean',
    },
  },
  input: {
    category: 'Misc',
    defaultValue: true,
    control: {
      type: 'boolean',
    },
  },
  helper: {
    category: 'Misc',
    defaultValue: true,
    control: {
      type: 'boolean',
    },
  },
};

export default {
  title: 'UI Components/Form Field [organism]/Web Component',
  parameters: {
    notes: {
      API: iframe('/stencil-form-field/modules/index.html'),
      changelog,
    },
    docs: { page }
  },
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const TemplateDefault = (args:any) => {
  return html`<osds-form-field ...=${getTagAttributes(args)}>
    ${args.label ? html`<osds-text slot="label" level='heading' color="primary">
      Description
    </osds-text>` : ''}

    ${args.visualHint ? html`<osds-text slot="visual-hint">
      150/200
    </osds-text>` : ''}

    ${args.input ? html`<osds-input type="text" id="input" value="Just ODS being ahead"></osds-input>` : ''}

    ${args.helper ? html`<osds-text slot="helper">
      Write a few sentences about you
    </osds-text>` : ''}
  </osds-form-field>`;
}

export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};
