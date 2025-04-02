import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { OdsTextarea, type OdsTextareaProp } from '../../../../ods-react/src/components/textarea/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<OdsTextareaProp>;

const meta: Meta<OdsTextareaProp> = {
  component: OdsTextarea,
  // @ts-ignore see https://github.com/storybookjs/storybook/issues/27535
  // subcomponents: { OdsTextareaXxx }, // Uncomment if sub components, otherwise remove
  title: 'ODS Components/TODO/Textarea',
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
  tags: ['isHidden'],
  render: ({}) => (
    <OdsTextarea />
  ),
};
