import type { Meta, StoryObj } from '@storybook/web-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-pagination';
import { html } from 'lit-html';
import { CONTROL_CATEGORY, orderControls } from '../../control';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Navigation/Pagination',
  component: 'ods-pagination',
};

export default meta;

const storyParams = {
  defaultCurrentPage: {
    table: {
      category: CONTROL_CATEGORY.general,
      defaultValue: { summary: 4 },
      type: { summary: 'number' },
    },
    control: 'number',
  },
  isDisabled: {
    table: {
      category: CONTROL_CATEGORY.general,
      defaultValue: { summary: false },
      type: { summary: 'boolean' },
    },
    control: 'boolean',
  },
  labelTooltipPrevious: {
    table: {
      category: CONTROL_CATEGORY.general,
      defaultValue: { summary: 'Previous label' },
      type: { summary: 'string' },
    },
    control: 'text',
  },
  labelTooltipNext: {
    table: {
      category: CONTROL_CATEGORY.general,
      defaultValue: { summary: 'Next label' },
      type: { summary: 'string' },
    },
    control: 'text',
  },
};

const totalItemsParam = {
  defaultItemsPerPage: {
    table: {
      category: CONTROL_CATEGORY.general,
      defaultValue: { summary: 10 },
      type: { summary: 'number' },
    },
    control: 'select',
    options: [10, 25, 50, 100, 300],
  },
  totalItems: {
    table: {
      category: CONTROL_CATEGORY.general,
      defaultValue: { summary: 60 },
      type: { summary: 'number' },
    },
    control: 'number',
  },
  beforeTotalItems: {
    table: {
      category: CONTROL_CATEGORY.slot,
      defaultValue: { summary: 'of ' },
      type: { summary: 'string' },
    },
    control: 'text',
  },
  afterTotalItems: {
    table: {
      category: CONTROL_CATEGORY.slot,
      defaultValue: { summary: ' results' },
      type: { summary: 'string' },
    },
    control: 'text',
  },
};

const totalPagesParam = {
  totalPages: {
    table: {
      category: CONTROL_CATEGORY.general,
      defaultValue: { summary: 9 },
      type: { summary: 'number' },
    },
    control: 'number',
  },
};

export const Demo: StoryObj = {
  render: (args) => html`
    <ods-pagination
      default-current-page="${args.defaultCurrentPage}"
      is-disabled="${args.isDisabled}"
      label-tooltip-next="${args.labelTooltipNext}"
      label-tooltip-previous="${args.labelTooltipPrevious}"
      total-items="${args.totalItems}"
      total-pages="${args.totalPages}">
    </ods-pagination>
  `,
  argTypes: orderControls({
    ...storyParams,
    ...totalPagesParam,
  }),
  args: {
    defaultCurrentPage: 4,
    isDisabled: false,
    labelTooltipPrevious: 'Previous label',
    labelTooltipNext: 'Next label',
    totalPages: 9,
  },
};

export const TotalItems: StoryObj = {
  render: (args) => html`
    <ods-pagination
      default-current-page="${args.defaultCurrentPage}"
      default-items-per-page="${args.defaultItemsPerPage}"
      is-disabled="${args.isDisabled}"
      label-tooltip-next="${args.labelTooltipNext}"
      label-tooltip-previous="${args.labelTooltipPrevious}"
      total-items="${args.totalItems}">
      <span slot="before-total-items">${args.beforeTotalItems}</span>
      <span slot="after-total-items">${args.afterTotalItems}</span>
    </ods-pagination>
  `,
  argTypes: orderControls({
    ...storyParams,
    ...totalItemsParam,
  }),
  args: {
    defaultCurrentPage: 4,
    defaultItemsPerPage: 10,
    isDisabled: false,
    labelTooltipPrevious: 'Previous label',
    labelTooltipNext: 'Next label',
    totalItems: 60,
    beforeTotalItems: 'of ',
    afterTotalItems: ' results',
  },
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
    <ods-pagination></ods-pagination>
  `,
};

export const DefaultCurrentPage: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
    <ods-pagination default-current-page="3" total-pages="21"></ods-pagination>
  `,
};

export const Disabled: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
    <ods-pagination default-current-page="3" total-pages="21" is-disabled></ods-pagination>
  `,
};

export const WithTooltips: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
    <ods-pagination
      default-current-page="3"
      total-pages="21"
      label-tooltip-next="Go to next page"
      label-tooltip-previous="Go to previous page">
    </ods-pagination>
  `,
};

export const WithTotalItems: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
    <ods-pagination default-current-page="3" total-items="100"></ods-pagination>
  `,
};

export const WithMultiplePages: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
    <ods-pagination default-current-page="3" total-pages="10"></ods-pagination>
  `,
};

export const CustomCSS: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
    <ods-pagination default-current-page="3" total-pages="21" class="my-pagination"></ods-pagination>
    <style>
      .my-pagination::part(button) {
        background-color: lightblue;
      }
    </style>
  `,
};
