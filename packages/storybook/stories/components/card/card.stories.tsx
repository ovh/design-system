import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { OdsCard, type OdsCardProp } from '../../../../ods-react/src/components/card/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<OdsCardProp>;

const meta: Meta<OdsCardProp> = {
  component: OdsCard,
  // @ts-ignore see https://github.com/storybookjs/storybook/issues/27535
  // subcomponents: { OdsCardXxx }, // Uncomment if sub components, otherwise remove
  title: 'ODS Components/Card',
};

export default meta;

export const Demo: Story = {
  argTypes: orderControls({
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'primary' },
        type: { summary: 'string' }
      },
      control: 'select',
      options: ['primary', 'neutral'],
    },
    children: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: { summary: 'ø' },
      },
      control: 'text',
    },
  }),
  args: {
    color: 'primary',
    children: 'Hello, world!',
  },
};

export const Default: Story = {
  tags: ['!dev'],
  render: () => (
    <OdsCard>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
    </OdsCard>
  ),
};

export const Color: Story = {
  tags: ['!dev'],
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <OdsCard color="primary">
        <p>Primary Card</p>
      </OdsCard>
      <OdsCard color="neutral">
        <p>Neutral Card</p>
      </OdsCard>
    </div>
  ),
};

export const CustomCSS: Story = {
  tags: ['!dev'],
  render: () => (
    <OdsCard style={{ width: '500px', display: 'flex', justifyContent: 'center', border: '3px solid green' }}>
      <p>Custom styled card</p>
    </OdsCard>
  ),
};
