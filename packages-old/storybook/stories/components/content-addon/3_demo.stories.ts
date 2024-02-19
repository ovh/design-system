import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-content-addon';
import { defineCustomElement as tileCustomElements } from '@ovhcloud/ods-components/dist/components/osds-tile';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();
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
    defaultValue: '<osds-text color="text" level="body" size="300" style="--osds-text-color-specific-hue: var(--ods-color-text-500);" hue="500">from&nbsp;&nbsp;</osds-text>',
  },
  main: {
    category: 'Slot',
    defaultValue: '<osds-text color="primary" level="body" size="500" hue="800" style="--osds-text-color-specific-hue: var(--ods-color-primary-800);"> 4,99€</osds-text>',
  },
  end: {
    category: 'Slot',
    defaultValue: '<span slot="end"><osds-text color="text" level="caption" size="100" style="--osds-text-color-specific-hue: var(--ods-color-text-500);" hue="500"> &nbsp;&nbsp;ex. VAT/year</osds-text>',
  },
  top: {
    category: 'Slot',
    defaultValue: '<div style="text-align:right;"> <osds-text color="promotion" level="body" size="200" style="text-decoration-line: line-through; text-decoration-thickness: 2px; --osds-text-color-specific-hue: var(--ods-color-promotion-500);" hue="500">9,99€</osds-text></div>',
  },
  bottom: {
    category: 'Slot',
    defaultValue: '<div style="text-align:right"><osds-text color="text" level="caption" style="--osds-text-color-specific-hue: var(--ods-color-text-500);" size="100" hue="500">then 6,99€/year</osds-text></div>',
  },
};

export default {
  title: 'ODS Components/Layout/Content Addon [layout]/Demo',
  id: 'content-addon',
};

// A content addon example
const TemplateDefault = (args: any) => html`
  <style>
    span {
      font-family: 'Source Sans Pro', sans-serif;
    }
  </style>

  <osds-content-addon ...=${getTagAttributes(args)}>
    <span style='border: 2px solid green;' slot="top">${unsafeHTML(args.top)}</span>
    <span style='border: 2px solid red;' slot="start">${unsafeHTML(args.start)}</span>
    <span slot="main"> ${unsafeHTML(args.main)}</span>
    <span style='border: 2px solid blue;' slot="end">${unsafeHTML(args.end)}</span>
    <span style='border: 2px solid orange;' slot="bottom">${unsafeHTML(args.bottom)}</span>
  </osds-content-addon>
`;

export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...extractStoryParams(defaultStoryParams),
};
// @ts-ignore
Default.argTypes = extractArgTypes(defaultStoryParams);

// Pricing example using Content Addon
const TemplatePricing = (args: any) => html`
  <osds-content-addon ...=${getTagAttributes(args)}>
    <span slot="top">${unsafeHTML(args.top)}</span>
    <span slot="start">${unsafeHTML(args.start)}</span>
    <span slot="main"> ${unsafeHTML(args.main)}</span>
    <span slot="end">${unsafeHTML(args.end)}</span>
    <span slot="bottom">${unsafeHTML(args.bottom)}</span>
  </osds-content-addon>
`;

export const Pricing = TemplatePricing.bind({});
// @ts-ignore
Pricing.args = {
  ...extractStoryParams(pricingStoryParams),
};
// @ts-ignore
Pricing.argTypes = extractArgTypes(pricingStoryParams);
