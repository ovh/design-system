import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { Code, type CodeProp } from '../../../../ods-react/src/components/code/src';
import { CONTROL_CATEGORY } from '../../../src/constants/controls';
import { excludeFromDemoControls, orderControls } from '../../../src/helpers/controls';

type Story = StoryObj<CodeProp>;

const meta: Meta<CodeProp> = {
  argTypes: excludeFromDemoControls(['onCopy']),
  component: Code,
  title: 'ODS Components/Code',
};

export default meta;

export const Demo: Story = {
  argTypes: orderControls({
    canCopy: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'boolean',
    },
    children: {
      table: {
        category: CONTROL_CATEGORY.general,
      },
      control: 'text',
    },
    labelCopy: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'Copy' },
        type: { summary: 'string' },
      },
      control: 'text',
    },
    labelCopySuccess: {
      table: {
        category: CONTROL_CATEGORY.general,
        defaultValue: { summary: 'Copied' },
        type: { summary: 'string' },
      },
      control: 'text',
    },
  }),
  args: {
    children: `import { Text } from '@ovhcloud/ods-react';`,
  },
};

export const Default: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Code>
      { `import { Text } from '@ovhcloud/ods-react';` }
    </Code>
  ),
};

export const Overview: Story = {
  tags: ['!dev'],
  parameters: {
    layout: 'centered',
  },
  render: ({}) => (
    <Code canCopy>
      { `import { Text } from '@ovhcloud/ods-react';` }
    </Code>
  ),
};

export const CanCopy: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Code canCopy>
      { `import { Text } from '@ovhcloud/ods-react';` }
    </Code>
  ),
};

export const CustomLabels: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Code canCopy labelCopy="Click to copy" labelCopySuccess="Successfully copied">
      { `import { Text } from '@ovhcloud/ods-react';` }
    </Code>
  ),
};

export const Multiline: Story = {
  tags: ['!dev'],
  render: ({}) => (
    <Code>
      { `function isTargetInElement(event, element) {
  if (!element) {
    return false;
  }

    return element.contains(event.target) || event.composedPath().includes(element);
  }` }
    </Code>
  ),
};
