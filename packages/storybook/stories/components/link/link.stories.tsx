import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { Icon } from '../../../../ods-react/src/components/icon/src';
import { LINK_COLOR, LINK_COLORS, Link, LinkProp } from '../../../../ods-react/src/components/link/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<LinkProp>;

const meta: Meta<LinkProp> = {
  component: Link,
  title: 'ODS Components/Link',
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
        defaultValue: { summary: LINK_COLOR.primary },
        type: { summary: 'string' },
      },
      control: 'select',
      options: LINK_COLORS,
    },
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
  }),
  args: {
    children: 'My link',
  },
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Link href="https://www.ovhcloud.com">
      Default Link
    </Link>
  ),
};

export const Disabled: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Link
      disabled
      href="https://www.ovhcloud.com">
      Disabled
    </Link>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Link
      href="https://www.ovhcloud.com"
      target="_blank">
      Link
    </Link>
  ),
};

export const WithIcon: Story = {
  decorators: [(story) => <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>{ story() }</div>],
  tags: ['!dev'],
  render: ({}) => (
    <>
      <Link href="https://www.ovhcloud.com">
        <Icon name="arrow-left" /> Icon Link
      </Link>

      <Link style={{ justifySelf: 'right' }}
               href="https://www.ovhcloud.com">
        Icon Link <Icon name="arrow-right" />
      </Link>
    </>
  ),
};
