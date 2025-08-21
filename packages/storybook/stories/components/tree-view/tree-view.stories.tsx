import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import {
  TreeView,
  type TreeViewProp,
  TreeViewNode,
  type TreeViewValueChangeDetail,
} from '../../../../ods-react/src/components/tree-view/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<TreeViewProp>;

const meta: Meta<TreeViewProp> = {
  component: TreeView,
  subcomponents: { TreeViewNode },
  title: 'React Components/TreeView',
};

export default meta;

const sampleCollection = [
  {
    id: 'src',
    name: 'src',
    children: [
      { id: 'app.tsx', name: 'app.tsx' },
      { id: 'index.ts', name: 'index.ts' },
      {
        id: 'components',
        name: 'components',
        children: [
          { id: 'Button.tsx', name: 'Button.tsx' },
          { id: 'Card.tsx', name: 'Card.tsx' },
        ],
      },
    ],
  },
  { id: 'package.json', name: 'package.json' },
  { id: 'readme.md', name: 'README.md' },
];

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
  render: ({}) => {
    const collection = sampleCollection;

    return (
      <TreeView
        onValueChange={(d: TreeViewValueChangeDetail) => console.log('onValueChange', d)}>
        { collection.map((item) => (
          <TreeViewNode key={ item.id } item={ item } />
        )) }
      </TreeView>
    );
  }
};

export const Overview: Story = {
  tags: ['!dev'],
  render: ({}) => {
    const collection = sampleCollection;

    return (
      <TreeView
        onValueChange={(d: TreeViewValueChangeDetail) => console.log('onValueChange', d)}>
        { collection.map((item) => (
          <TreeViewNode key={ item.id } item={ item } />
        )) }
      </TreeView>
    );
  }
}

export const Multiple: Story = {
  globals: {
    imports: `import { TreeView, type TreeViewProp, TreeViewNode, type TreeViewValueChangeDetail } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => {
    const collection = sampleCollection;
    return (
      <TreeView
        multiple
        onValueChange={(d: TreeViewValueChangeDetail) => console.log('onValueChange', d)}>
        { collection.map((item) => (
          <TreeViewNode key={ item.id } item={ item } />
        )) }
      </TreeView>
    )
  }
}
