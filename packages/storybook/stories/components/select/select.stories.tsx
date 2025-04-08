import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { OdsSelect, type OdsSelectProp } from '../../../../ods-react/src/components/select/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<OdsSelectProp>;

const meta: Meta<OdsSelectProp> = {
  component: OdsSelect,
  // @ts-ignore see https://github.com/storybookjs/storybook/issues/27535
  // subcomponents: { OdsSelectXxx }, // Uncomment if sub components, otherwise remove
  title: 'ODS Components/TODO/Select',
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
    <OdsSelect />
  ),
};
