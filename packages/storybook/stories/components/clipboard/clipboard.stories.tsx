import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { Clipboard, type ClipboardProp } from '../../../../ods-react/src/components/clipboard/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<ClipboardProp>;

const meta: Meta<ClipboardProp> = {
  argTypes: excludeFromDemoControls(['type', 'placeholder']),
  component: Clipboard,
  title: 'ODS Components/Clipboard',
};

export default meta;

export const Demo: Story = {
  argTypes: orderControls({
    disabled: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'boolean',
    },
    labelCopy: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'text',
    },
    labelCopySuccess: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'text',
    },
    loading: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'boolean',
    },
    maskOption: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'object',
    },
    value: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'text',
    },
  }),
  args: {
    value: 'Clipboard',
  },
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Clipboard value="Clipboard" />
  ),
};

export const Overview: Story = {
  parameters: {
    layout: 'centered',
  },
  tags: ['!dev'],
  render: ({}) => (
    <Clipboard value="Clipboard" />
  ),
};

export const Masked: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Clipboard value="Clipboard" maskOption={ { enable: true } } />
  ),
};

export const CustomLabels: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Clipboard value="Clipboard" labelCopy="Click to copy" labelCopySuccess="Successfully copied" />
  ),
};

export const Loading: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Clipboard value="Clipboard" loading />
  ),
};

export const Disabled: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Clipboard value="Clipboard" disabled />
  ),
};
