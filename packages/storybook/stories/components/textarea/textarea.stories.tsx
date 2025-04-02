import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { OdsTextarea, type OdsTextareaProp } from '../../../../ods-react/src/components/textarea/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<OdsTextareaProp>;

const meta: Meta<OdsTextareaProp> = {
  component: OdsTextarea,
  title: 'ODS Components/Form elements/Textarea',
};

export default meta;

export const Demo: Story = {
  argTypes: orderControls({
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    readOnly: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
  }),
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsTextarea />
  ),
};

export const Disabled: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsTextarea disabled />
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <OdsTextarea />
  ),
};

export const ReadOnly: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsTextarea readOnly />
  ),
};

export const Resizable: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <OdsTextarea style={{ resize: 'both' }} />
  ),
};
