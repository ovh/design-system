import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { Clipboard, type ClipboardProp } from '../../../../ods-react/src/components/clipboard/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<ClipboardProp>;

const meta: Meta<ClipboardProp> = {
  argTypes: excludeFromDemoControls(['clearable', 'onClear', 'type', 'placeholder']),
  component: Clipboard,
  title: 'ODS Components/Clipboard',
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
    loading: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    maskOption: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
      },
      control: 'object',
    },
    value: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' }
      },
      control: 'text',
    },
    labelCopy: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'Copy to clipboard' },
        type: { summary: 'string' }
      },
      control: 'text',
    },
    labelCopySuccess: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'Copied!' },
        type: { summary: 'string' }
      },
      control: 'text',
    },
  }),
  args: {
    value: 'Clipboard',
    labelCopy: 'Copy to clipboard',
    labelCopySuccess: 'Copied!',
  },
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Clipboard value='Clipboard' />
  ),
};

export const Overview: Story = {
  parameters: {
    layout: 'centered',
  },
  tags: ['!dev'],
  render: ({}) => (
    <Clipboard value='Clipboard' />
  )
}

export const Masked: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Clipboard value='Clipboard' maskOption={{ enable: true }} />
  )
}

export const CustomLabels: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Clipboard value='Clipboard' labelCopy='Click to copy' labelCopySuccess='Successfully copied' />
  )
}

export const Loading: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Clipboard value='Clipboard' loading />
  )
}

export const Disabled: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Clipboard value='Clipboard' disabled />
  )
}
