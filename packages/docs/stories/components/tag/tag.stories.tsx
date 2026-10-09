import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { ICON_NAME } from '../../../../ods-react/src/components/icon/src';
import { TAG_SIZE, TAG_STATUS, Tag, type TagProp } from '../../../../ods-react/src/components/tag/src';
import { excludeFromDemoControls } from '../../support/controls';

type Story = StoryObj<TagProp>;

const meta: Meta<TagProp> = {
  argTypes: excludeFromDemoControls(['onRemove']),
  component: Tag,
  title: 'React Components/Tag',
};

export default meta;

export const AnatomyTech: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Tag>
      My tag
    </Tag>
  ),
};

export const Status: Story = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'row', gap: '8px', alignItems: 'center' }}>{ story() }</div>],
  globals: {
    imports: `import { TAG_STATUS, Tag } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <>
      <Tag status={ TAG_STATUS.accent }>Accent</Tag>
      <Tag status={ TAG_STATUS.critical }>Critical</Tag>
      <Tag status={ TAG_STATUS.information }>Information</Tag>
      <Tag status={ TAG_STATUS.neutral }>Neutral</Tag>
      <Tag status={ TAG_STATUS.success }>Success</Tag>
      <Tag status={ TAG_STATUS.warning }>Warning</Tag>
    </>
  ),
};

export const CustomIcon: Story = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'row', gap: '8px', alignItems: 'center' }}>{ story() }</div>],
  globals: {
    imports: `import { ICON_NAME, Tag } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <>
      <Tag icon={ null }>
        No Icon
      </Tag>

      <Tag icon={ ICON_NAME.star }>
        Custom Icon
      </Tag>
    </>
  ),
};

export const Default: Story = {
  globals: {
    imports: `import { Tag } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Tag>
      My tag
    </Tag>
  ),
};

export const Disabled: Story = {
  globals: {
    imports: `import { Tag } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Tag disabled>
      My tag
    </Tag>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Tag>
      My tag
    </Tag>
  ),
};

export const Size: Story = {
  decorators: [(story) => <div style={{ display: 'flex', flexFlow: 'row', gap: '8px', alignItems: 'center' }}>{ story() }</div>],
  globals: {
    imports: `import { TAG_SIZE, Tag } from '@ovhcloud/ods-react';`,
  },
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
  globals: {
    imports: `import { Tag } from '@ovhcloud/ods-react';`,
  },
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
  globals: {
    imports: `import { Tag } from '@ovhcloud/ods-react';`,
  },
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
  globals: {
    imports: `import { Tag } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Tag aria-label="Remove my tag">
      My tag
    </Tag>
  ),
};


export const ThemeGenerator: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!dev'],
  render: ({}) => (
    <div style={{ display: 'flex', flexFlow: 'row wrap', gap: '8px', alignItems: 'center' }}>
      <Tag>Default</Tag>
      <Tag disabled>Disabled</Tag>
      <Tag size={ TAG_SIZE.lg }>Large</Tag>
      <Tag status={ TAG_STATUS.accent }>Accent</Tag>
      <Tag status={ TAG_STATUS.success }>Success</Tag>
      <Tag status={ TAG_STATUS.warning }>Warning</Tag>
      <Tag status={ TAG_STATUS.critical }>Critical</Tag>
      <Tag status={ TAG_STATUS.information }>Info</Tag>
      <Tag status={ TAG_STATUS.neutral }>Neutral</Tag>
    </div>
  ),
};
