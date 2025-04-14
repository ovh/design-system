import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { CARD_COLORS, Card, type CardProp } from '../../../../ods-react/src/components/card/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<CardProp>;

const meta: Meta<CardProp> = {
  component: Card,
  title: 'ODS Components/Card',
};

export default meta;

export const Demo: Story = {
  argTypes: orderControls({
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'primary' },
        type: { summary: CARD_COLORS }
      },
      control: 'select',
      options: CARD_COLORS,
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
    children: 'Hello, world!',
  },
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Card>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
    </Card>
  ),
};

export const Color: Story = {
  decorators: [(story) => <div style={{ display: 'flex', gap: '16px' }}>{ story() }</div>],
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Card color="primary">
        <p>Primary Card</p>
      </Card>

      <Card color="neutral">
        <p>Neutral Card</p>
      </Card>
    </>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Card style={{ padding: '8px' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
      Interdum et malesuada fames ac ante ipsum primis in faucibus.
    </Card>
  ),
};
