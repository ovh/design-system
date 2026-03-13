import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { Avatar, type AvatarProp } from '../../../../ods-react/src/components/avatar/src';
import { ICON_NAME, Icon } from '../../../../ods-react/src/components/icon/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<AvatarProp>;

const meta: Meta<AvatarProp> = {
  component: Avatar,
  tags: ['new'],
  title: 'React Components/Avatar',
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
    src: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' },
      },
      control: 'text',
    },
  }),
  args: {
    children: 'JD',
  },
};

export const Default: Story = {
  globals: {
    imports: `import { Avatar } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Avatar />
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Avatar />
  ),
};

export const Initials: Story = {
  globals: {
    imports: `import { Avatar } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Avatar>
      JD
    </Avatar>
  ),
};

export const WithImage: Story = {
  globals: {
    imports: `import { Avatar } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Avatar src="https://images.crunchbase.com/image/upload/c_pad,w_256,f_auto,q_auto:eco,dpr_1/ayzwkdawmlyzvuummuf4" />
  ),
};

export const WithFallback: Story = {
  globals: {
    imports: `import { Avatar, Icon, ICON_NAME } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Avatar
      fallback={"J"}
      src="https://invalid-url.example.com/avatar.png" />
  ),
};

export const WithIcon: Story = {
  globals: {
    imports: `import { Avatar, Icon, ICON_NAME } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <Avatar>
      <Icon name={ ICON_NAME.sparkle } />
    </Avatar>
  ),
};

export const ThemeGenerator: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['!dev'],
  render: ({}) => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Avatar />
      <Avatar>JD</Avatar>
      <Avatar>
        <Icon name={ ICON_NAME.sparkle } />
      </Avatar>
    </div>
  ),
};
