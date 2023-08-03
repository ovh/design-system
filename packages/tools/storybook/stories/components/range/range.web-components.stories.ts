import { OdsThemeColorIntent, OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import {
  extractArgTypes,
  extractStoryParams,
  getTagAttributes,
} from '../../../core/componentHTMLUtils';

import { RangePlay } from './range.web-components.validation.stories';
import changelog from '@ovhcloud/ods-stencil-range/CHANGELOG.md';
import { defineCustomElements } from '@ovhcloud/ods-stencil-range/loader';
import { html } from 'lit-html';
import { iframe } from '../../../.storybook/iframe';
import page from './range.web-component.stories.page.mdx';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: OdsThemeColorIntent.default,
    options: OdsThemeColorIntentList,
    control: { type: 'select' },
  },
  min: {
    category: 'General',
    defaultValue: 0,
  },
  max: {
    category: 'General',
    defaultValue: 100,
  },
  step: {
    category: 'General',
    defaultValue: 1,
  },
  value: {
    category: 'General',
    defaultValue: 30,
  },
  startBound: {
    category: 'Slot',
    defaultValue: ''
  },
  endBound: {
    category: 'Slot',
    defaultValue: ''
  },
  disabled: {
    category: 'Misc',
    defaultValue: false
  },
  flex: {
    category: 'Misc',
    defaultValue: false
  },
  forbiddenValues: {
    category: 'Misc',
    defaultValue: [],
    control: { type: 'array' },
  },
};

export default {
  title: 'UI Components/Range [atom]/Web Component',
  id: 'range',
  parameters: {
    notes: {
      API: iframe('/stencil-range/modules/index.html'),
      changelog,
    },
    docs: { page },
  }
};

// A range example
const TemplateDefault = (args: any) => {
  if (args.flex === 0) {
    delete args.flex;
  }
  return html`
    <div class='range-container'>
      <osds-range ...=${getTagAttributes(args)}>
        <span slot='start-bound'>${unsafeHTML(args.startBound)}</span>
        <span slot='end-bound'>${unsafeHTML(args.endBound)}</span>
      </osds-range>
    </div>
  `;
}
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};
Default.argTypes = extractArgTypes(storyParams);

// dual range
export const Dual = TemplateDefault.bind({});
const dualParams = {...storyParams, value: { category: 'General', defaultValue: [20, 50], control: { type: 'array' }}};
Dual.args = {
  ...extractStoryParams(dualParams),
};
Dual.argTypes = extractArgTypes(dualParams);

/* Range Validation */
const OsdsRangeValidation = (args) => html`
  <article id="example-1">
    <osds-range id="range"  ...=${getTagAttributes(args)}>
    </osds-range>
    <span class="error-msg forbidden-value">Forbidden value</span>
    <span class="error-msg value-missing">Value required please</span>
    <span class="error-msg step-mismatch">Please insert a value by step 2, starting from 1</span>
    <span class="error-msg valid">Not valid</span>
  </article>
`;
const TemplateValidation = (args) => OsdsRangeValidation(args);
export const Validation = TemplateValidation.bind({});
Validation.args = {
  ...extractStoryParams(storyParams),
};
Validation.play = RangePlay;
