import type { Meta, StoryObj } from '@storybook/web-components';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-medium';
import { html } from 'lit-html';
import { CONTROL_CATEGORY, orderControls } from '../../control';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Medium',
  component: 'ods-medium',
};

const exampleAlt = 'OVHcloud logo';
const exampleSrc = 'https://corporate.ovhcloud.com/sites/default/files/2022-03/ovhcloud-logo2.png';

export default meta;

export const Demo: StoryObj = {
  argTypes: orderControls({
    alt: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: '' },
        type: { summary: 'string' }
      },
      control: 'text',
    },
    height: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'number' }
      },
      control: 'number',
    },
    src: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' }
      },
      control: 'text',
    },
    width: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'number' }
      },
      control: 'number',
    },
  }),
  args: {
    alt: exampleAlt,
    src: exampleSrc,
    width: 700,
  },
};

export const Default: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-medium alt="${exampleAlt}" src="${exampleSrc}"></ods-medium>
  `,
};

export const Height: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-medium alt="${exampleAlt}" src="${exampleSrc}" height="200"></ods-medium>
  `,
};

export const Width: StoryObj = {
  tags: ['isHidden'],
  render: () => html`
<ods-medium alt="${exampleAlt}" src="${exampleSrc}" width="300"></ods-medium>
  `,
};
