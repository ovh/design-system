import { defineCustomElements } from '@ovhcloud/ods-components/content-addon/loader';
import { defineCustomElements as tileCustomElements } from '@ovhcloud/ods-components/tile/loader';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElements();
tileCustomElements();

/* Default story parameters  */
const defaultStoryParams = {
  start: {
    category: 'Slot',
    defaultValue: 'start',
  },
  main: {
    category: 'Slot',
    defaultValue: 'main',
  },
  end: {
    category: 'Slot',
    defaultValue: 'end',
  },
  top: {
    category: 'Slot',
    defaultValue: 'top',
  },
  bottom: {
    category: 'Slot',
    defaultValue: 'bottom',
  },
};

/* Pricing story parameters  */
const pricingStoryParams = {
  start: {
    category: 'Slot',
    defaultValue: 'now',
  },
  main: {
    category: 'Slot',
    defaultValue: '<strong>123.456,78€</strong>',
  },
  end: {
    category: 'Slot',
    defaultValue: 'only!',
  },
  top: {
    category: 'Slot',
    defaultValue: 'From XX,XX€',
  },
  bottom: {
    category: 'Slot',
    defaultValue: 'ex. VAT/month',
  },
};

export default {
  title: 'ODS Components/Layout/Content Addon [layout]/Demo',
  id: 'content-addon',
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
// @ts-ignore
Default.args = {
  ...extractStoryParams(defaultStoryParams),
};
// @ts-ignore
Default.argTypes = extractArgTypes(defaultStoryParams);

export const Pricing = TemplateDefault.bind({});
// @ts-ignore
Pricing.args = {
  ...extractStoryParams(pricingStoryParams),
};
// @ts-ignore
Pricing.argTypes = extractArgTypes(pricingStoryParams);
