import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { TAG_COLOR, TAG_COLORS, TAG_SIZE, TAG_SIZES, Tag, type TagProp } from '../../../../ods-react/src/components/tag/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';
import { addLiveEditorToStory } from '../../../src/helpers/liveCoding';
import demoCode from './Demo?raw';

type Story = StoryObj<TagProp>;

const meta: Meta<TagProp> = {
  argTypes: excludeFromDemoControls(['onRemove']),
  component: Tag,
  title: 'React Components/Tag',
};

export default meta;

export const Demo: Story = {
  argTypes: orderControls({
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: { summary: 'TAG_COLOR' },
      },
      control: { type: 'select' },
      options: TAG_COLORS,
    },
    children: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'text',
    },
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'boolean' },
      },
      control: { type: 'boolean' },
    },
    size: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: { summary: 'TAG_SIZE' },
      },
      control: { type: 'select' },
      options: TAG_SIZES,
    },
  }),
  args: {
    children: 'My tag',
  },
};

addLiveEditorToStory(Demo, demoCode);

export const Color: Story = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'row', gap: '8px', alignItems: 'center' }}>{ story() }</div>],
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <>
      <Tag color={ TAG_COLOR.critical }>Critical</Tag>
      <Tag color={ TAG_COLOR.information }>Information</Tag>
      <Tag color={ TAG_COLOR.neutral }>Neutral</Tag>
      <Tag color={ TAG_COLOR.primary }>Primary</Tag>
      <Tag color={ TAG_COLOR.success }>Success</Tag>
      <Tag color={ TAG_COLOR.warning }>Warning</Tag>
    </>
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

export const Disabled: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Tag disabled>My tag</Tag>
  ),
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

export const Size: Story = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'row', gap: '8px', alignItems: 'center' }}>{ story() }</div>],
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <>
      <Tag size={ TAG_SIZE.md }>MD tag</Tag>
      <Tag size={ TAG_SIZE.lg }>LG tag</Tag>
    </>
  ),
};

export const AccessibilityList: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <ul>
      <li>
        <Tag>Design</Tag>
      </li>
      <li>
        <Tag>Development</Tag>
      </li>
      <li>
        <Tag>Accessibility</Tag>
      </li>
    </ul>
  ),
};

export const AccessibilityAriaRoles: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <div role="list">
      <div role="listitem">
        <Tag>Design</Tag>
      </div>
      <div role="listitem">
        <Tag>Development</Tag>
      </div>
      <div role="listitem">
        <Tag>Accessibility</Tag>
      </div>
    </div>
  ),
};

export const AccessibilityAriaLabel: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Tag aria-label="Remove my tag">My tag</Tag>
  ),
};
