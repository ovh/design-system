import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/ods-medium';
import { type Meta, type StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

defineCustomElement();

const meta: Meta = {
  title: 'ODS Components/Medium',
  component: 'ods-medium',
};

const exampleAlt = 'OVHcloud logo';
const exampleSrc = 'https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/ayzwkdawmlyzvuummuf4';

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

export const Overview: StoryObj = {
  tags: ['isHidden'],
  parameters: {
    layout: 'centered',
  },
  render: () => html`
<ods-medium alt="${exampleAlt}" src="${exampleSrc}" height="100"></ods-medium>
  `,
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
