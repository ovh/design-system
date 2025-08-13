import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { Meter, type MeterProp } from '../../../../ods-react/src/components/meter/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<MeterProp>;

const meta: Meta<MeterProp> = {
  component: Meter,
  // subcomponents: { MeterXxx }, // Uncomment if sub components, otherwise remove
  title: 'ODS Components/TODO/Meter',
};

export default meta;

export const Demo: Story = {
  argTypes: orderControls({
    dummy: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' }
      },
      control: 'text',
    },
  }),
  args: {
    dummy: 'dummy default',
  },
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Meter />
  ),
};
