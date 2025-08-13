import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { Clipboard, ClipboardControl, type ClipboardProp, ClipboardTrigger } from '../../../../ods-react/src/components/clipboard/src';
import { FormField, FormFieldLabel } from '../../../../ods-react/src/components/form-field/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';
import { addLiveEditorToStory } from '../../../src/helpers/liveCoding';
import demoCode from './Demo?raw';

type Story = StoryObj<ClipboardProp>;

const meta: Meta<ClipboardProp> = {
  argTypes: excludeFromDemoControls(['i18n', 'locale', 'onCopy']),
  component: Clipboard,
  subcomponents: { ClipboardControl, ClipboardTrigger},
  title: 'React Components/Clipboard',
};

export default meta;

export const Demo: StoryObj = {
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
        defaultValue: { summary: 'Copy' },
      },
      control: 'text',
    },
    labelCopySuccess: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'Copied' },
      },
      control: 'text',
    },
    loading: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    masked: {
      table: {
        category: CONTROL_CATEGORY.general,
        type: { summary: 'boolean' },
      },
      control: 'boolean',
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

addLiveEditorToStory(Demo, demoCode);

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

export const AccessibilityFormField: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <FormField>
      <FormFieldLabel>API key:</FormFieldLabel>
      <Clipboard value="loremipsum">
        <ClipboardControl />
        <ClipboardTrigger />
      </Clipboard>
    </FormField>
  ),
};
