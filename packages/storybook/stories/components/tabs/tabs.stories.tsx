import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { OdsTabs, type OdsTabsProp } from '../../../../ods-react/src/components/tabs/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<OdsTabsProp>;

const meta: Meta<OdsTabsProp> = {
  component: OdsTabs,
  // @ts-ignore see https://github.com/storybookjs/storybook/issues/27535
  // subcomponents: { OdsTabsXxx }, // Uncomment if sub components, otherwise remove
  title: 'ODS Components/TODO/Tabs',
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
    <OdsTabs />
  ),
};
