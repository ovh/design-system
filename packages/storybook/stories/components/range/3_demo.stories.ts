import { ODS_THEME_COLOR_INTENT, ODS_THEME_COLOR_INTENTS } from '@ovhcloud/ods-common-theming';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-range';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { RangePlay } from './demo.validation.stories';
import {
  extractArgTypes,
  extractStoryParams,
  getTagAttributes,
} from '../../../core/componentHTMLUtils';

defineCustomElement();

/* Default story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: ODS_THEME_COLOR_INTENT.default,
    options: ODS_THEME_COLOR_INTENTS,
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
    defaultValue: '',
  },
  endBound: {
    category: 'Slot',
    defaultValue: '',
  },
  disabled: {
    category: 'Misc',
    defaultValue: false,
  },
  inline: {
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
  title: 'ODS Components/Form/Range [atom]/Demo',
  id: 'range',
};

// A range example
const TemplateDefault = (args: any) => {
  if (args.inline === 0) {
    delete args.inline;
  }
  return html`
    <div class='range-container'>
      <osds-range ...=${getTagAttributes(args)}>
        <span slot='start-bound'>${unsafeHTML(args.startBound)}</span>
        <span slot='end-bound'>${unsafeHTML(args.endBound)}</span>
      </osds-range>
    </div>
  `;
};
export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};
Default.argTypes = extractArgTypes(storyParams);

// dual range
export const Dual = TemplateDefault.bind({});
const dualParams = { ...storyParams, value: { category: 'General', defaultValue: [20, 50], control: { type: 'array' } } };
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
