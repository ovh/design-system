import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { OdsIcon } from '../../../../ods-react/src/components/icon/src';
import { ODS_LINK_COLOR, ODS_LINK_COLORS, OdsLink, OdsLinkProp } from '../../../../ods-react/src/components/link/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<OdsLinkProp>;

const meta: Meta<OdsLinkProp> = {
  component: OdsLink,
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
        defaultValue: { summary: ODS_LINK_COLOR.primary },
        type: { summary: 'string' },
      },
      control: 'select',
      options: ODS_LINK_COLORS,
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
    <OdsLink href="https://www.ovhcloud.com">
      Default Link
    </OdsLink>
  ),
};

export const Disabled: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsLink disabled
             href="https://www.ovhcloud.com">
      Disabled
    </OdsLink>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <OdsLink href="https://www.ovhcloud.com"
             target="_blank">
      Link
    </OdsLink>
  ),
};

export const WithIcon: Story = {
  decorators: [(story) => <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>{ story() }</div>],
  tags: ['!dev'],
  render: ({}) => (
    <>
      <OdsLink href="https://www.ovhcloud.com">
        <OdsIcon name="arrow-left" /> Icon Link
      </OdsLink>

      <OdsLink style={{ justifySelf: 'right' }}
               href="https://www.ovhcloud.com">
        Icon Link <OdsIcon name="arrow-right" />
      </OdsLink>
    </>
  ),
};
