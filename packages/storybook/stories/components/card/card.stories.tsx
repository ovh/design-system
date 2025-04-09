import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { ODS_CARD_COLORS, OdsCard, type OdsCardProp } from '../../../../ods-react/src/components/card/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<OdsCardProp>;

const meta: Meta<OdsCardProp> = {
  component: OdsCard,
  title: 'ODS Components/Card',
};

export default meta;

export const Demo: Story = {
  argTypes: orderControls({
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: 'primary' },
        type: { summary: ODS_CARD_COLORS }
      },
      control: 'select',
      options: ODS_CARD_COLORS,
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
    <OdsCard>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
    </OdsCard>
  ),
};

export const Color: Story = {
  decorators: [(story) => <div style={{ display: 'flex', gap: '16px' }}>{ story() }</div>],
  tags: ['!dev'],
  render: ({}) => (
    <>
      <OdsCard color="primary">
        <p>Primary Card</p>
      </OdsCard>

      <OdsCard color="neutral">
        <p>Neutral Card</p>
      </OdsCard>
    </>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <OdsCard style={{ padding: '8px' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
      Interdum et malesuada fames ac ante ipsum primis in faucibus.
    </OdsCard>
  ),
};
