import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-pagination';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

const storyParams = {
  current: {
    category: 'General',
    defaultValue: 5,
  },
  disabled: {
    category: 'Misc',
    defaultValue: false,
  },
  labelTooltipPrevious: {
    category: 'Misc',
    defaultValue: 'Previous label',
  },
  labelTooltipNext: {
    category: 'Misc',
    defaultValue: 'Next label',
  },
};

const totalItemsParam = {
  totalItems: {
    category: 'General',
    defaultValue: 60,
  },
  beforeTotalItems: {
    category: 'Slots',
    defaultValue: 'of '
  },
  afterTotalItems: {
    category: 'Slots',
    defaultValue: ' results'
  },
};

const totalPagesParam = {
  totalPages: {
    category: 'General',
    defaultValue: 9,
  },
};

export default {
  title: 'ODS Components/Navigation/Pagination [molecule]/Demo',
  id: 'pagination',
  argTypes: extractArgTypes({ ...storyParams }),
};

/* Default */
const TemplateDefault = (args: any) => html` <osds-pagination ...=${getTagAttributes(args)}> </osds-pagination> `;

export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...extractStoryParams({ ...storyParams, ...totalPagesParam }),
};
// @ts-ignore
Default.argTypes = extractArgTypes(totalPagesParam);

/* Total Items */
const TemplateTotalItems = (args: any) => html`
  <osds-pagination ...=${getTagAttributes(args)}>
    <span slot='before-total-items'>${unsafeHTML(args.beforeTotalItems)}</span>
    <span slot='after-total-items'>${unsafeHTML(args.afterTotalItems)}</span>
  </osds-pagination> `;

export const TotalItems = TemplateTotalItems.bind({});
// @ts-ignore
TotalItems.args = {
  ...extractStoryParams({ ...storyParams, ...totalItemsParam }),
};
// @ts-ignore
TotalItems.argTypes = extractArgTypes(totalItemsParam);
