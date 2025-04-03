import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { ODS_BADGE_COLOR, ODS_BADGE_COLORS, ODS_BADGE_SIZE, ODS_BADGE_SIZES, OdsBadge, type OdsBadgeProp } from '../../../../ods-react/src/components/badge/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<OdsBadgeProp>;

const meta: Meta<OdsBadgeProp> = {
  component: OdsBadge,
  title: 'ODS Components/Badge',
};

export default meta;

export const Demo: Story = {
  argTypes: orderControls({
    children: {
      table: {
        category: CONTROL_CATEGORY.slot,
        defaultValue: { summary: 'ø' },
      },
      control: 'text',
    },
    color: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: ODS_BADGE_COLOR.information },
        type: { summary: ODS_BADGE_COLORS }
      },
      control: { type: 'select' },
      options: ODS_BADGE_COLORS,
    },
    size: {
      table: {
        category: CONTROL_CATEGORY.design,
        defaultValue: { summary: ODS_BADGE_SIZE.md },
        type: { summary: ODS_BADGE_SIZES }
      },
      control: { type: 'select' },
      options: ODS_BADGE_SIZES,
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
      <OdsBadge color={ ODS_BADGE_COLOR.alpha }>Alpha</OdsBadge>
      <OdsBadge color={ ODS_BADGE_COLOR.beta }>Beta</OdsBadge>
      <OdsBadge color={ ODS_BADGE_COLOR.critical }>Critical</OdsBadge>
      <OdsBadge color={ ODS_BADGE_COLOR.information }>Information</OdsBadge>
      <OdsBadge color={ ODS_BADGE_COLOR.neutral }>Neutral</OdsBadge>
      <OdsBadge color={ ODS_BADGE_COLOR.new }>New</OdsBadge>
      <OdsBadge color={ ODS_BADGE_COLOR.promotion }>Promotion</OdsBadge>
      <OdsBadge color={ ODS_BADGE_COLOR.success }>Success</OdsBadge>
      <OdsBadge color={ ODS_BADGE_COLOR.warning }>Warning</OdsBadge>
    </>
  ),
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsBadge>
      My badge
    </OdsBadge>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <OdsBadge>
      Badge
    </OdsBadge>
  ),
};

export const Size: Story = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'row', gap: '8px', alignItems: 'center' }}>{ story() }</div>],
  tags: ['!dev'],
  render: ({}) => (
    <>
      <OdsBadge size={ ODS_BADGE_SIZE.sm }>SM badge</OdsBadge>
      <OdsBadge size={ ODS_BADGE_SIZE.md }>MD badge</OdsBadge>
      <OdsBadge size={ ODS_BADGE_SIZE.lg }>LG badge</OdsBadge>
    </>
  ),
};
