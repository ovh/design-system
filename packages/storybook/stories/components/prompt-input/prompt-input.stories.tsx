import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { PromptInput, type PromptInputProp } from '../../../../ods-react/src/components/prompt-input/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<PromptInputProp>;

const meta: Meta<PromptInputProp> = {
  component: PromptInput,
  // subcomponents: { PromptInputXxx }, // Uncomment if sub components, otherwise remove
  tags: ['new'],
  title: 'React Components/PromptInput',
};

export default meta;

export const Demo: Story = {
  argTypes: orderControls({
    dummy: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'ø' },
        type: { summary: 'string' }
      },
      control: 'text',
    },
  }),
  args: {
    dummy: 'dummy default',
  },
};

export const Default: Story = {
  globals: {
    imports: `import { PromptInput } from '@ovhcloud/ods-react';`,
  },
  tags: ['!dev'],
  render: ({}) => (
    <PromptInput />
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <PromptInput />
  ),
};
