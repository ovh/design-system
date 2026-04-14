import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { Avatar, type AvatarProp } from '../../../../ods-react/src/components/avatar/src';
import { ICON_NAME, Icon } from '../../../../ods-react/src/components/icon/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<AvatarProp>;

const meta: Meta<AvatarProp> = {
  argTypes: excludeFromDemoControls(['children']),
  component: Avatar,
  tags: ['new'],
  title: 'React Components/Avatar',
};

export default meta;

export const Demo: Story = {
  argTypes: orderControls({
    fallback: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'text',
    },
    src: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'text',
    },
  }),
};

export const AnatomyTech: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Avatar />
  ),
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
    <Avatar src="https://images.crunchbase.com/image/upload/c_pad,h_160,w_160,f_auto,b_white,q_auto:eco,dpr_1/fhi0pe8wd87fvujy9yk8" />
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
