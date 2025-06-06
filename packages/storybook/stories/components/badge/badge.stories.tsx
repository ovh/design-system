import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { BADGE_COLOR, BADGE_COLORS, BADGE_SIZE, BADGE_SIZES, Badge, type BadgeProp } from '../../../../ods-react/src/components/badge/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<BadgeProp>;

const meta: Meta<BadgeProp> = {
  component: Badge,
  title: 'React Components/Badge',
};

export default meta;

export const Demo: Story = {
  argTypes: orderControls({
    children: {
      table: {
        category: CONTROL_CATEGORY.slot,
      },
      control: 'text',
    },
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: { summary: 'BADGE_COLOR' }
      },
      control: { type: 'select' },
      options: BADGE_COLORS,
    },
    size: {
      table: {
        category: CONTROL_CATEGORY.design,
        type: { summary: 'BADGE_SIZE' }
      },
      control: { type: 'select' },
      options: BADGE_SIZES,
    },
  }),
  args: {
    children: 'My badge',
  },
};

export const Color: Story = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'row', gap: '8px', alignItems: 'center' }}>{ story() }</div>],
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Badge color={ BADGE_COLOR.alpha }>Alpha</Badge>
      <Badge color={ BADGE_COLOR.beta }>Beta</Badge>
      <Badge color={ BADGE_COLOR.critical }>Critical</Badge>
      <Badge color={ BADGE_COLOR.information }>Information</Badge>
      <Badge color={ BADGE_COLOR.neutral }>Neutral</Badge>
      <Badge color={ BADGE_COLOR.new }>New</Badge>
      <Badge color={ BADGE_COLOR.primary }>Primary</Badge>
      <Badge color={ BADGE_COLOR.promotion }>Promotion</Badge>
      <Badge color={ BADGE_COLOR.success }>Success</Badge>
      <Badge color={ BADGE_COLOR.warning }>Warning</Badge>
    </>
  ),
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Badge>
      My badge
    </Badge>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Badge>
      Badge
    </Badge>
  ),
};

export const Size: Story = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'row', gap: '8px', alignItems: 'center' }}>{ story() }</div>],
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Badge size={ BADGE_SIZE.sm }>SM badge</Badge>
      <Badge size={ BADGE_SIZE.md }>MD badge</Badge>
      <Badge size={ BADGE_SIZE.lg }>LG badge</Badge>
    </>
  ),
};
