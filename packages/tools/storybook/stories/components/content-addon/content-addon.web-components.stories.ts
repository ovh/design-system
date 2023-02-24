import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { iframe } from '../../../.storybook/iframe';


import { defineCustomElements } from '@ovhcloud/ods-stencil-content-addon/loader';
import { defineCustomElements as tileCustomElements } from '@ovhcloud/ods-stencil-tile/loader';
import { extractArgTypes, extractStoryParams, getTagAttributes, } from '../../../core/componentHTMLUtils';

import changelog from '@ovhcloud/ods-stencil-content-addon/CHANGELOG.md';
import page from './content-addon.web-component.stories.page.mdx';

defineCustomElements();
tileCustomElements();

/* Default story parameters  */
const defaultStoryParams = {
  start: {
    category: 'Slot',
    defaultValue: 'start'
  },
  main: {
    category: 'Slot',
    defaultValue: 'main'
  },
  end: {
    category: 'Slot',
    defaultValue: 'end'
  },
  top: {
    category: 'Slot',
    defaultValue: 'top'
  },
  bottom: {
    category: 'Slot',
    defaultValue: 'bottom'
  },
};

/* Pricing story parameters  */
const pricingStoryParams = {
  start: {
    category: 'Slot',
    defaultValue: 'now'
  },
  main: {
    category: 'Slot',
    defaultValue: '<strong>123.456,78€</strong>'
  },
  end: {
    category: 'Slot',
    defaultValue: 'only!'
  },
  top: {
    category: 'Slot',
    defaultValue: 'From XX,XX€'
  },
  bottom: {
    category: 'Slot',
    defaultValue: 'ex. VAT/month'
  },
};

export default {
  title: 'UI Components/Content Addon [layout]/Web Component',
  parameters: {
    notes: {
      API: iframe('/stencil-content-addon/modules/index.html'),
      changelog,
    },
    docs: { page },
  }
};

// A content addon example
const TemplateDefault = (args: any) => html`
  <osds-content-addon ...=${getTagAttributes(args)}>
    <span slot="start">${unsafeHTML(args.start)}</span>
    <span slot="main"> ${unsafeHTML(args.main)}</span>
    <span slot="end">${unsafeHTML(args.end)}</span>
    <span slot="top">${unsafeHTML(args.top)}</span>
    <span slot="bottom">${unsafeHTML(args.bottom)}</span>
  </osds-content-addon>
`;

export const Default = TemplateDefault.bind({});
Default.args = {
  ...extractStoryParams(defaultStoryParams),
};
Default.argTypes = extractArgTypes(defaultStoryParams);

export const Pricing = TemplateDefault.bind({});
Pricing.args = {
  ...extractStoryParams(pricingStoryParams),
};
Pricing.argTypes = extractArgTypes(pricingStoryParams);
