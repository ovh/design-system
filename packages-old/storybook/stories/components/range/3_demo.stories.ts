import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-range';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
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
    defaultValue: ODS_THEME_COLOR_INTENT.primary,
    options: [ODS_THEME_COLOR_INTENT.primary, ODS_THEME_COLOR_INTENT.error],
    control: { type: 'select' },
  },
  value: {
    category: 'General',
    defaultValue: 30,
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
  startBound: {
    category: 'Slot',
    defaultValue: '<osds-text color="text" level="body" size="400">Minimum</osds-text>',
  },
  endBound: {
    category: 'Slot',
    defaultValue: '<osds-text color="text" level="body" size="400">Maximum</osds-text>',
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
    category: 'Development',
    defaultValue: [],
    control: { type: 'array' },
  },
};

export default {
  title: 'ODS Components/Form/Range [atom]/Demo',
  id: 'range',
  argTypes: extractArgTypes(storyParams),
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
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
};

// dual range
export const Dual = TemplateDefault.bind({});
const dualParams = { ...storyParams, value: { category: 'General', defaultValue: [20, 50], control: { type: 'array' } } };
// @ts-ignore
Dual.args = {
  ...extractStoryParams(dualParams),
};
