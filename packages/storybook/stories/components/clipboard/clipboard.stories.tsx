import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import {
  Clipboard,
  ClipboardControl, type ClipboardControlProps,
  type ClipboardProp,
  ClipboardTrigger, type ClipboardTriggerProps,
} from '../../../../ods-react/src/components/clipboard/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<ClipboardProp>;
type DemoArg = Partial<ClipboardProp> & Partial<ClipboardControlProps>
  & Partial<ClipboardTriggerProps>;

const meta: Meta<ClipboardProp> = {
  argTypes: excludeFromDemoControls(['type', 'placeholder', 'onCopy']),
  component: Clipboard,
  subcomponents: { ClipboardControl, ClipboardTrigger},
  title: 'ODS Components/Clipboard',
};

export default meta;

export const Demo: StoryObj = {
  render: (arg: DemoArg) => (
    <Clipboard disabled={ arg.disabled } value={ arg.value }>
      <ClipboardControl loading={ arg.loading } maskOption={ arg.maskOption } />
      <ClipboardTrigger
        labelCopy={ arg.labelCopy }
        labelCopySuccess={ arg.labelCopySuccess }
      />
    </Clipboard>
  ),
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
    <Clipboard value="Clipboard">
      <ClipboardControl />
      <ClipboardTrigger />
    </Clipboard>
  ),
};

export const Overview: Story = {
  parameters: {
    layout: 'centered',
  },
  tags: ['!dev'],
  render: ({}) => (
    <Clipboard value="Clipboard">
      <ClipboardControl />
      <ClipboardTrigger />
    </Clipboard>
  ),
};

export const Masked: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Clipboard value="Masked" >
      <ClipboardControl maskOption={ { enable: true } } />
      <ClipboardTrigger />
    </Clipboard>
  ),
};

export const CustomLabels: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Clipboard value="Custom labels">
      <ClipboardControl />
      <ClipboardTrigger labelCopy="Click to copy" labelCopySuccess="Successfully copied" />
    </Clipboard>
  ),
};

export const Loading: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Clipboard value="Loading" >
      <ClipboardControl loading />
      <ClipboardTrigger />
    </Clipboard>
  ),
};

export const Disabled: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Clipboard value="Disabled" disabled>
      <ClipboardControl />
      <ClipboardTrigger />
    </Clipboard>
  ),
};
