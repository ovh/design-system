import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { BADGE_SIZE, BADGE_SIZES, BADGE_STATUS, BADGE_STATUSES, Badge, type BadgeProp } from '../../../../ods-react/src/components/badge/src';
import { ICON_NAME, Icon } from '../../../../ods-react/src/components/icon/src';
import { Tooltip, TooltipContent, TooltipTrigger } from '../../../../ods-react/src/components/tooltip/src';

type Story = StoryObj<BadgeProp>;

const meta: Meta<BadgeProp> = {
  component: Badge,
  title: 'React Components/Badge',
};

export default meta;

export const Status: Story = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'row', gap: '8px', alignItems: 'center' }}>{ story() }</div>],
  globals: {
    imports: `import { BADGE_STATUS, Badge } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Badge status={ BADGE_STATUS.accent }>Accent</Badge>
      <Badge status={ BADGE_STATUS.alpha }>Alpha</Badge>
      <Badge status={ BADGE_STATUS.beta }>Beta</Badge>
      <Badge status={ BADGE_STATUS.critical }>Critical</Badge>
      <Badge status={ BADGE_STATUS.information }>Information</Badge>
      <Badge status={ BADGE_STATUS.neutral }>Neutral</Badge>
      <Badge status={ BADGE_STATUS.new }>New</Badge>
      <Badge status={ BADGE_STATUS.promotion }>Promotion</Badge>
      <Badge status={ BADGE_STATUS.success }>Success</Badge>
      <Badge status={ BADGE_STATUS.warning }>Warning</Badge>
    </>
  ),
};

export const AnatomyTech: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Badge>
      Badge
    </Badge>
  ),
};

export const Default: Story = {
  globals: {
    imports: `import { Badge } from '@ovhcloud/ods-react';`,
  },
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
  globals: {
    imports: `import { BADGE_SIZE, Badge } from '@ovhcloud/ods-react';`,
  },
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
  globals: {
    imports: `import { ICON_NAME, Badge, Icon } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Badge>
      <Icon
        aria-label="Promotion"
        name={ ICON_NAME.tag }
        role="img" />
    </Badge>
  ),
};

export const AccessibilityWithTooltip: Story = {
  globals: {
    imports: `import { BADGE_STATUS, ICON_NAME, Badge, Icon, Tooltip, TooltipContent, TooltipTrigger } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Badge
          aria-labelledby="tooltip-a11y"
          status={ BADGE_STATUS.promotion }>
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
  globals: {
    imports: `import { Badge } from '@ovhcloud/ods-react';`,
  },
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
  globals: {
    imports: `import { Badge } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <div
      role="list"
      style={{ display: 'flex', flexFlow: 'row', gap: '8px', alignItems: 'center' }}>
      <Badge role="listitem">
        Item 1
      </Badge>
      <Badge role="listitem">
        Item 2
      </Badge>
    </div>
  ),
};

export const ThemeGenerator: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!dev'],
  render: ({}) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      { BADGE_SIZES.map((size) => (
        <div key={ size } style={{ display: 'flex', flexFlow: 'row', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
          { BADGE_STATUSES.map((status) => (
            <Badge key={`${String(size)}-${String(status)}`} size={ size } status={ status }>
              { String(status) }
            </Badge>
          )) }
        </div>
      )) }
    </div>
  ),
};
