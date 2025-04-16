import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { TAG_COLOR, TAG_COLORS, TAG_SIZE, TAG_SIZES, Tag, type TagProp } from '../../../../ods-react/src/components/tag/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<TagProp>;

const meta: Meta<TagProp> = {
  component: Tag,
  title: 'ODS Components/Tag',
};

export default meta;

export const Demo: Story = {
  argTypes: orderControls({
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: TAG_COLOR.information },
        type: { summary: TAG_COLORS },
      },
      control: { type: 'select' },
      options: TAG_COLORS,
    },
    children: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'string' },
        defaultValue: { summary: 'Tag' },
      },
      control: 'text',
    },
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: { type: 'boolean' },
    },
    size: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: TAG_SIZE.md },
        type: { summary: TAG_SIZES },
      },
      control: { type: 'select' },
      options: TAG_SIZES,
    },
    onRemove: {
      table: {
        disable: true,
      },
    },
  }),
  args: {
    children: 'My tag',
  },
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Tag>My tag</Tag>
  ),
};

export const Default: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Tag>My tag</Tag>
  ),
};

export const Color: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <>
      <Tag color={TAG_COLOR.critical}>My tag</Tag>
      <Tag color={TAG_COLOR.information}>My tag</Tag>
      <Tag color={TAG_COLOR.neutral}>My tag</Tag>
      <Tag color={TAG_COLOR.success}>My tag</Tag>
      <Tag color={TAG_COLOR.warning}>My tag</Tag>
    </>
  ),
};

export const Disabled: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Tag disabled>My tag</Tag>
  ),
};

export const Size: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <>
      <Tag size={TAG_SIZE.md}>My tag</Tag>
      <Tag size={TAG_SIZE.lg}>My tag</Tag>
    </>
  ),
};
