import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { BADGE_COLOR, BADGE_COLORS, BADGE_SIZE, BADGE_SIZES, Badge, type BadgeProp } from '../../../../ods-react/src/components/badge/src';
import { ICON_NAME, Icon } from '../../../../ods-react/src/components/icon/src';
import { Tooltip, TooltipContent, TooltipTrigger } from '../../../../ods-react/src/components/tooltip/src';
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

export const AccessibilityAriaLabel: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Badge>
      <Icon name={ICON_NAME.tag} aria-label="Promotion" role="img"></Icon>
    </Badge>
  ),
};

export const AccessibilityWithTooltip: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Badge color={ BADGE_COLOR.promotion }
               aria-labelledby="tooltip-a11y"
        >
          <Icon name={ ICON_NAME.tag } />
        </Badge>
      </TooltipTrigger>

      <TooltipContent id="tooltip-a11y">
        Promotion valid from November 22 to 26
      </TooltipContent>
    </Tooltip>
  ),
};

export const AccessibilityGrouping: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <ul style={{ display: 'flex', flexFlow: 'row', gap: '8px', margin: 0, padding: 0, listStyle: 'none' }}>
      <li>
        <Badge>
          Item 1
        </Badge>
      </li>
      <li>
        <Badge>
          Item 2
        </Badge>
      </li>
    </ul>
  ),
};

export const AccessibilityAlternativeGrouping: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <div role="list" style={{ display: 'flex', flexFlow: 'row', gap: '8px', alignItems: 'center',
    }}>
      <Badge role="listitem">
        Item 1
      </Badge>
      <Badge role="listitem">
        Item 2
      </Badge>
    </div>
  ),
};
