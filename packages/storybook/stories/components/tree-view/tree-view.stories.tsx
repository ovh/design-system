import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { TreeView, type TreeViewProp } from '../../../../ods-react/src/components/tree-view/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<TreeViewProp>;

const meta: Meta<TreeViewProp> = {
  component: TreeView,
  // subcomponents: { TreeViewXxx }, // Uncomment if sub components, otherwise remove
  title: 'ODS Components/TODO/TreeView',
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
    <TreeView />
  ),
};
